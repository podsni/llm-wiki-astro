---
title: "Astro quick-start"
description: "Catatan praktis Astro — commands, patterns, gotchas."
summary: Cheat sheet untuk working dengan Astro 5.
date: 2024-12-15
category: tool
tags: [astro, web-framework, static-site, mdx]
quality: good
---

# Astro quick-start

## Commands
- `npm run dev` — dev server
- `npm run build` — build static
- `npm run preview` — preview build
- `npx astro add` — tambah integration

## Gotchas
- `Astro.request.url` di static build = URL build-time, bukan runtime
- Query strings di static = HARUS pakai dynamic route, jangan `searchParams.get`
- `getCollection()` return semua entry, filter `data.draft` manual

## File structure
- `src/pages/` — routes
- `src/content/` — content collections
- `src/components/` — Astro components
- `src/layouts/` — page layouts
- `src/utils/` — helpers

## Content collections
- `defineCollection({ loader, schema })`
- Schema pakai Zod
- `getCollection('name')` untuk semua entry
- `getEntry('name', 'id')` untuk satu entry

## Deploy ke Cloudflare Pages
- `wrangler pages deploy dist --project-name=X --branch=main`
- Token di `/tmp/cf_token2.txt`
- `dist/` adalah output build
