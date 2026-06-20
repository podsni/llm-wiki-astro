---
title: Astro
description: A modern web framework optimized for content-driven sites — ships zero JavaScript by default, supports content collections, MDX, and static site generation.
date: 2023-06-20
updated: 2024-11-25
category: tool
tags: [tool, web-framework, static-site, mdx, javascript]
aliases: [Astro framework, astro.build]
related: [digital-garden, knowledge-base, obsidian]
references:
  - title: "Astro docs"
    url: https://docs.astro.build
---

**Astro** is a web framework for building content-driven websites. It distinguishes itself with a focus on shipping **zero JavaScript by default**, a "components from any framework" philosophy, and first-class support for content sites via Content Collections. It's the framework this site is built on.

## Core ideas

- **Islands architecture** — pages are static HTML. Interactive components (the "islands") are hydrated only where needed. Most pages ship zero JS.
- **Bring your own framework** — write components in React, Vue, Svelte, Solid, or just plain HTML. Astro renders them to static HTML at build time.
- **Content Collections** — typed Markdown/MDX with Zod-validated frontmatter schemas. Build-time safety.
- **Static-first** — every page is pre-rendered to HTML at build time. Deploys to any CDN.
- **MDX support** — Markdown plus JSX components in the same file.

## Why it's good for personal knowledge sites

For sites like this one, Astro hits a sweet spot:

- **Fast by default** — no JS means no waiting for hydration, no layout shift, near-instant loads.
- **Content-focused** — the Content Collections API is built for exactly the use case of a [knowledge base](/concepts/knowledge-base).
- **Type-safe content** — frontmatter is validated by Zod at build time. Typos and missing fields fail the build, not the runtime.
- **Static output** — deploy to Cloudflare Pages, GitHub Pages, Netlify, or any static host. No server to run.
- **Markdown plus components** — write long-form content in Markdown, drop in React/Vue/Svelte components when you need interactive features (search, graph view, etc.).
- **SEO friendly** — every page is server-rendered HTML with full Open Graph support.

## Content Collections

The killer feature for a knowledge site. Define a schema once:

```ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const concepts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/concepts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    related: z.array(z.string()).default([]),
    // ... any fields you want
  }),
});

export const collections = { concepts };
```

Then write your content in `src/content/concepts/<slug>.md` with matching frontmatter. Astro gives you fully-typed access to every field at build time.

## Integrating LLMs

Astro is well-suited for the Karpathy LLM Wiki pattern:

- **Markdown is the canonical form** — humans and agents both edit the same files.
- **Build-time validation** — frontmatter is type-checked. An agent that writes malformed frontmatter fails the build, gets a clear error, can fix it.
- **Static output** — once built, the site is fast and cheap to host. Agents don't need to interact with a live server.
- **Git-friendly** — content is text. Diffs, PRs, blame, history all work.

## The graph view

This site has a graph view (D3 force layout) that shows the network of article relationships. It's the only JavaScript that ships in most pages. Built as a single Astro island — static on the server, interactive in the browser.

## Search

This site uses **Fuse.js** for client-side fuzzy search. The search index is generated at build time by walking all content collections and serializing {title, description, tags, body} to `/search-index.json`. Loaded on demand when the user opens the search modal. No backend, no rate limits, no third-party service.

## Alternatives

| Tool | Strength | Trade-off |
|---|---|---|
| **Astro** | Static + islands, content-first | Less for pure apps |
| **Next.js** | Full-stack React, RSC | Heavier, more JS by default |
| **Hugo** | Pure static, very fast | Templating is less ergonomic |
| **Jekyll** | Mature, Ruby | Slow builds, dated |
| **Quartz** | Obsidian-native | Less flexible, less control |
| **Docusaurus** | Docs-focused | Designed for documentation, not encyclopedias |

For a personal [knowledge base](/concepts/knowledge-base) or [digital garden](/concepts/digital-garden), Astro is the strongest option in 2024.

## See also

- [Knowledge Base](/concepts/knowledge-base) — what Astro is well-suited to publish
- [Digital Garden](/concepts/digital-garden) — the publishing style
- [Obsidian](/articles/obsidian) — the authoring tool that often feeds Astro
