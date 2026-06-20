# LLM Wiki

A personal knowledge base — part blog, part digital garden, part encyclopedia. Built with Astro.

## What it is

LLM Wiki is a static site for a personal knowledge base. It is *not* a community platform: no accounts, no comments, no editor, no backend. All content is plain Markdown files, versioned in git, and rendered to static HTML at build time.

See the [live site](https://llm-wiki.pages.dev) for the rendered version.

## Features

- **9 content collections** — notes, articles, concepts, people, projects, books, research, timeline, sources.
- **Type-safe frontmatter** — every field is validated by Zod at build time.
- **Internal links + backlinks** — every page knows what links to it.
- **Search** — client-side fuzzy search via Fuse.js. Press `⌘K` to open.
- **Graph view** — D3-style force simulation showing all article connections. Pan, zoom, filter.
- **Timeline + Archive** — chronological views.
- **Tags + Categories** — filtered by topic.
- **Dark mode** — automatic, respects system preference.
- **RSS + sitemap + Open Graph** — out of the box.
- **Mobile responsive** — works on phones, tablets, desktop. Sidebar collapses, TOC hides.
- **Zero JS by default** — only ships JS for the search modal, graph view, theme toggle, and back-to-top.

## Stack

- [Astro 5](https://astro.build) — static site generation.
- [@astrojs/mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/) — Markdown + JSX.
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) — sitemap generation.
- [@astrojs/rss](https://docs.astro.build/en/guides/rss/) — RSS feed.
- [Fuse.js](https://fusejs.io) — client-side fuzzy search.
- [Shiki](https://shiki.style) — syntax highlighting.
- Vanilla JS — graph view (no d3 dependency, hand-rolled force simulation).

## Local development

```bash
# Node 20+
npm install
npm run dev       # http://localhost:4321
npm run build     # static output to ./dist
npm run preview   # preview built site
```

## Project structure

```
llm-wiki/
├── src/
│   ├── content/           # Markdown files, 9 subdirs (one per collection)
│   ├── content.config.ts  # Zod schemas for all 9 collections
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── ArticleLayout.astro
│   ├── components/        # Header, Sidebar, TOC, Search, Graph, etc.
│   ├── pages/
│   │   ├── index.astro              # homepage
│   │   ├── articles/index.astro     # all articles
│   │   ├── [collection]/[slug].astro # dynamic article page
│   │   ├── category/[slug].astro
│   │   ├── tag/[slug].astro
│   │   ├── archive.astro
│   │   ├── timeline.astro
│   │   ├── graph.astro
│   │   ├── about.astro
│   │   ├── 404.astro
│   │   ├── rss.xml.ts
│   │   └── search-index.json.ts
│   ├── utils/             # content.ts, format.ts
│   └── styles/global.css
├── public/                # favicon, robots.txt
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Adding a new article

Create a `.md` (or `.mdx`) file in the appropriate `src/content/<collection>/` directory. Frontmatter is type-checked at build time — see `src/content.config.ts` for the schemas.

```markdown
---
title: My new article
description: One-line summary
date: 2024-12-20
category: ai
tags: [ai, example]
related: [some-other-article]
---

Article body in Markdown.
```

## Content conventions

- **Filenames:** lowercase, hyphens. Example: `large-language-model.md`.
- **Related:** use the entry's `id` (filename without extension). Cross-collection references use `collection/slug` (e.g., `concepts/transformer`).
- **Tags:** lowercase, hyphenated when multi-word. Examples: `ai`, `deep-learning`, `digital-garden`.

## Customizing

- **Domain scope:** edit `src/content.config.ts` to add/remove collections or fields.
- **Design:** edit `src/styles/global.css`. All design tokens are CSS variables at the top.
- **Sidebar:** edit `src/components/Sidebar.astro`.
- **Search:** edit the Fuse.js config in `src/components/Search.astro`.

## Deployment

Any static host works: Cloudflare Pages, GitHub Pages, Netlify, Vercel, S3+CloudFront, etc.

For Cloudflare Pages:

1. Push to GitHub.
2. Create a Pages project pointing at the repo.
3. Build command: `npm run build`. Output directory: `dist`.
4. Set environment variable: `NODE_VERSION=22`.

The included `wrangler.toml` (if any) is optional — Cloudflare Pages auto-detects Astro.

## License

- **Content:** CC BY-SA 4.0.
- **Code:** MIT.
