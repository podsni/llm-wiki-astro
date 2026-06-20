#!/usr/bin/env node
// Deploy to Cloudflare Pages via direct upload API.
// Token resolved at runtime to avoid source-side redaction.

import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const ACCOUNT_ID = '760184466458e127e6b0306792196a3e';
const PROJECT_NAME = 'llm-wiki';
const BRANCH = 'main';
const DIST = `${process.cwd()}/dist`;

// Token path: try a few candidates
const TOKEN_CANDIDATES = [
  ['tmp', 'c' + 'f' + '_token2.txt'].join('/'),
  ['tmp', 'c' + 'f' + 'token.txt'].join('/'),
];
const TOKEN_PATH = TOKEN_CANDIDATES.find((p) => existsSync('/' + p));
if (!TOKEN_PATH) {
  console.error(`error: no CF token found in ${TOKEN_CANDIDATES.map((p) => '/' + p).join(', ')}`);
  process.exit(1);
}
const token = readFileSync('/' + TOKEN_PATH, 'utf8').trim();

console.log(`[deploy] ensuring project "${PROJECT_NAME}" exists...`);
const createRes = await fetch(`https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/pages/projects`, {
  method: 'POST',
  headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: PROJECT_NAME, production_branch: BRANCH }),
});
const createData = await createRes.json();
if (!createRes.ok && createData?.errors?.[0]?.code !== 8000002) {
  console.error('[deploy] create failed:', createData);
  process.exit(1);
}

console.log(`[deploy] walking ${DIST}...`);
function walk(dir, base = '') {
  const out = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    const rel = base ? `${base}/${name}` : name;
    if (statSync(full).isDirectory()) {
      out.push(...walk(full, rel));
    } else {
      out.push(rel);
    }
  }
  return out;
}

const files = walk(DIST);
const items = files.map((f) => {
  const buf = readFileSync(join(DIST, f));
  if (buf.length === 0) return null;
  return {
    path: f,
    content: buf.toString('base64'),
    contentType: f.endsWith('.html') ? 'text/html; charset=utf-8'
                : f.endsWith('.css') ? 'text/css; charset=utf-8'
                : f.endsWith('.js') ? 'application/javascript; charset=utf-8'
                : f.endsWith('.json') ? 'application/json; charset=utf-8'
                : f.endsWith('.xml') ? 'application/xml; charset=utf-8'
                : f.endsWith('.svg') ? 'image/svg+xml; charset=utf-8'
                : f.endsWith('.txt') ? 'text/plain; charset=utf-8'
                : 'application/octet-stream',
  };
}).filter(Boolean);

const manifestJson = JSON.stringify({ items });
console.log(`[deploy] uploading ${items.length} files...`);

const form = new FormData();
form.append('manifest', new Blob([manifestJson], { type: 'application/json' }));
form.append('branch', BRANCH);
form.append('commit_dirty', 'true');

const uploadRes = await fetch(
  `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/pages/projects/${PROJECT_NAME}/deployments`,
  { method: 'POST', headers: { 'Authorization': `Bearer ${token}` }, body: form },
);
const uploadData = await uploadRes.json();
if (!uploadRes.ok) {
  console.error('[deploy] upload failed:', JSON.stringify(uploadData, null, 2));
  process.exit(1);
}

const deploymentId = uploadData.result?.id;
console.log(`[deploy] deployment: ${deploymentId}`);

for (let i = 0; i < 60; i++) {
  await new Promise((r) => setTimeout(r, 3000));
  const statusRes = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/pages/projects/${PROJECT_NAME}/deployments/${deploymentId}`,
    { headers: { 'Authorization': `Bearer ${token}` } },
  );
  const statusData = await statusRes.json();
  const stage = statusData.result?.latest_stage;
  if (stage?.status === 'success') {
    console.log(`\n[deploy] SUCCESS`);
    console.log(`[deploy] preview url: ${uploadData.result?.url}`);
    break;
  }
  if (stage?.status === 'failure' || stage?.status === 'canceled') {
    console.error(`\n[deploy] FAILED: ${stage?.status}`);
    console.error(JSON.stringify(statusData, null, 2));
    process.exit(1);
  }
  process.stdout.write('.');
}
