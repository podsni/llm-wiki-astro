# LLM Wiki

> A personal knowledge base that feels like reading an old encyclopedia — built with Astro 5, Markdown-first, mobile-first, zero JavaScript by default.

**Live demo:** https://wiki.h3n.my.id

Inspired by **Obsidian Publish**, **Tolkien Gateway**, and the **digital garden** tradition. Articles, concepts, research, and the connections between them — all rendered as static HTML, served from the edge.

📝 **[Changelog](./CHANGELOG.md)** — Riwayat rilis lengkap

---

## What it is

LLM Wiki is a single-author knowledge base. You write Markdown files in `src/content/`, and the site:

- Builds a **3-column article layout** (sidebar + content + TOC) on desktop
- Collapses to **single column with hamburger drawer** on mobile
- Generates a **graph view** showing every connection between articles
- Provides **client-side fuzzy search** (Fuse.js, no backend)
- Renders a **printable view** for every article
- Tracks **backlinks automatically** from your `related` arrays
- Supports **A–Z browsing**, **timeline**, **categories**, **tags**, **recent changes**
- Ships with **dark mode** that respects system preference

All the encyclopedia-feel polish — drop caps, pull quotes, info-boxes, quality badges, pronunciation guides, serif typography — is built in. No plugin to configure, no theme to install. Drop in Markdown, get a Tolkien-grade article.

---

## Quick start

```bash
# Clone
git clone https://github.com/podsni/llm-wiki-astro.git
cd llm-wiki-astro

# Install
npm install

# Dev server (http://localhost:4321)
npm run dev

# Build (./dist)
npm run build

# Preview the build
npm run preview
```

Requires **Node 20+** and **npm 10+**. Tested on macOS, Linux, WSL2.

---

## Adding content

Every article is a Markdown (or MDX) file in `src/content/<collection>/`. There are 9 collections, mirroring the spec:

| Collection | Folder | When to use |
|---|---|---|
| `concepts` | `src/content/concepts/` | Definitions, mental models, encyclopedia-style entries |
| `articles` | `src/content/articles/` | Long-form essays, tutorials, opinion pieces |
| `notes` | `src/content/notes/` | Quick observations, ideas, fragments |
| `people` | `src/content/people/` | Notable figures (extra fields: `role`, `affiliation`) |
| `projects` | `src/content/projects/` | Side projects, active work (extra fields: `status`, `url`, `repo`) |
| `books` | `src/content/books/` | Books read or to-read (extra fields: `author`, `isbn`, `year`, `rating`) |
| `research` | `src/content/research/` | Research questions, methodologies (extra fields: `status`, `methodology`) |
| `timeline` | `src/content/timeline/` | Events, milestones (extra fields: `eventDate`, `eventType`) |
| `sources` | `src/content/sources/` | External references (extra fields: `sourceType`, `sourceUrl`) |

### Example: `src/content/concepts/large-language-model.md`

```markdown
---
title: Large Language Model
description: A neural network trained on massive text corpora to generate and understand natural language.
summary: The dominant class of AI system in 2026 — transformer-based, token-predicting, instruction-tuned.
date: 2024-01-15
updated: 2024-12-20
category: ai
tags: [ai, llm, neural-network, foundation-model]
quality: featured               # featured | good | stub | wip
pronunciation: larj lang-gwij mo-del
infobox:                        # Optional Tolkien-style key-facts panel
  - label: Type
    value: Neural network
  - label: Architecture
    value: Transformer
  - label: Introduced
    value: 2017
aliases: [LLM, Large Language Models, language model]
related: [transformer, embedding, context-window, retrieval-augmented-generation, ai-agent]
references:
  - title: "Attention Is All You Need"
    author: Vaswani et al.
    year: 2017
    url: https://arxiv.org/abs/1706.03762
    note: The original Transformer paper.
---

A **Large Language Model (LLM)** is a type of [neural network](/concepts/embedding) trained on vast corpora of text to predict the next token in a sequence.

## How they work

LLMs are built on the [Transformer](/concepts/transformer) architecture...

## See also

- [Transformer](/concepts/transformer) — the architecture underlying most LLMs
- [Embedding](/concepts/embedding) — how LLMs represent meaning
```

The article page is generated at `/concepts/large-language-model/` automatically.

### Frontmatter fields

Every collection shares these base fields. Per-collection fields are added on top.

| Field | Type | Required | Notes |
|---|---|---|---|
| `title` | string | yes | Display title |
| `description` | string | no | One-line summary, shown in cards + meta |
| `summary` | string | no | TL;DR — shown in a callout box under the description |
| `date` | date | yes | Creation date |
| `updated` | date | no | Last update (powers "Recent" list) |
| `category` | string | no | One category per article (default: `uncategorized`) |
| `tags` | string[] | no | Multiple tags |
| `image` | string | no | Hero image path (e.g. `/my-image.png`) |
| `draft` | boolean | no | If `true`, hidden in production |
| `aliases` | string[] | no | Other names (shown as "Also known as") |
| `related` | string[] | no | Slugs of related articles — powers backlinks + graph |
| `references` | object[] | no | Bibliography entries |
| `quality` | enum | no | `featured` / `good` / `stub` / `wip` — shows a badge |
| `infobox` | object[] | no | Tolkien-style key-facts panel |
| `pronunciation` | string | no | IPA pronunciation guide |

#### Related slugs

`related` accepts plain slugs (`transformer`) or collection-qualified (`concepts/transformer`). Plain slugs are auto-resolved by searching all collections. The first match wins.

### Custom markdown components

In `.mdx` files you can use the project's custom components inline. Useful ones:

- `<PullQuote text="..." attribution="..." source="..." />` — centered italic quote with large opening `"` mark
- `<InfoBox title="..." items={[{label, value}]} />` — same as the frontmatter `infobox` but inline

```mdx
import PullQuote from '../../components/PullQuote.astro';

<PullQuote
  text="It is a truth universally acknowledged, that a single transformer in possession of a good attention mechanism, must be in want of a context window."
  attribution="paraphrased"
  source="in the spirit of Jane Austen"
/>
```

---

## Features

### Encyclopedia-style article pages

Each article gets:

- **3-column layout** on desktop (sidebar / content / TOC)
- **Single column** on mobile with hamburger drawer
- **Drop cap** on the first paragraph (serif, dark green)
- **First-line small caps** (Tolkien book typography)
- **Info-box** (Tolkien Gateway-style key facts panel) — floats right on desktop, stacks above on mobile
- **Pull-quote** with large opening quotation mark and italic attribution
- **Reading progress bar** at the top
- **Quality badge** in the title (Featured ★, Good ✓, Stub §, WIP ◐)
- **Pronunciation guide** under the title (e.g. `/larj lang-gwij mo-del/`)
- **Summary callout** (TL;DR) under the description
- **Breadcrumb** (Home / Collection / Article)
- **Metadata row** (date, updated, read time, category)
- **Aliases** ("Also known as: ...")
- **Copy link** + **Print** buttons
- **Auto-generated backlinks** ("Articles that mention this")
- **Auto-generated related** from frontmatter
- **References** list with paper titles, authors, notes
- **"Not yet written"** section listing broken wiki links
- **TOC** with auto-extracted H2/H3 headings
- **Print stylesheet** — chrome-less, auto-triggers print dialog at `/print/<collection>/<slug>`

### Home page (portal)

- Hero with title, subtitle, search bar, action buttons
- Stats row (articles, categories, tags, collections)
- Featured section (articles with `quality: featured`)
- Recent updates (last 6 by date/updated)
- Browse by category
- Popular (most-linked-to articles)
- Tag cloud
- Footer with article count, license, last build date

### Graph view (`/graph`)

Interactive force-directed graph of every article and connection. Built with vanilla SVG + JS — no D3 dependency. Features:

- **Pan** (drag) and **zoom** (scroll/pinch)
- **Click a node** to open the article
- **Search** to highlight a node by title
- **Filter by collection** (notes / articles / concepts / etc.)
- **Legend** with per-collection colors
- **Responsive** — works on mobile (pinch-zoom)

### Search (`/`, ⌘K or `/`)

- **Client-side** fuzzy search using Fuse.js
- Index is pre-built at build time (`/search-index.json`)
- Searches title (weight 0.5), description (0.25), tags (0.15), body (0.1)
- Keyboard nav: ↑/↓ to move, Enter to open, Esc to close
- **Full-screen on mobile**

### A–Z index (`/az`)

- Every article sorted alphabetically
- **Letter jump bar** at top (A B C D ... Z)
- Disabled letters shown in muted style
- Click an article to open

### What's new (`/recent`)

- Articles created in the last 30 days (marked **new**)
- Articles updated in the last 30 days (marked **updated**)
- Original date preserved on updated entries

### Random article (`/random`)

Redirects to a random article. Wire to a "Random" button in your nav.

### Other pages

- `/` — Home
- `/articles` — All articles (filterable by `?type=<collection>`)
- `/category/<slug>` — Articles in a category
- `/tag/<slug>` — Articles with a tag
- `/archive` — Grouped by year
- `/timeline` — Timeline visualization (using `timeline` collection + `date` field of all entries)
- `/graph` — Graph view
- `/about` — About this site
- `/404` — Custom 404

### RSS + Sitemap

- `/rss.xml` — RSS feed of the 30 most recent items
- `/sitemap-index.xml` — XML sitemap (auto-generated by `@astrojs/sitemap`)

### Open Graph + Twitter cards

- Every page sets `og:title`, `og:description`, `og:image`
- Default OG image: `/og-default.svg` (1200×630, branded)
- Twitter card: `summary_large_image`

### Dark mode

- Auto-detects system preference (`prefers-color-scheme: dark`)
- Manual toggle in the header (sun/moon icon)
- Choice persisted in `localStorage`
- Inline script in `<head>` to prevent FOUC

### Accessibility

- Semantic HTML (`<article>`, `<aside>`, `<nav>`, `<header>`, `<main>`, `<footer>`)
- `aria-label` on icon-only buttons
- `aria-modal` + `aria-hidden` on dialogs
- `:focus-visible` ring on keyboard nav
- `prefers-reduced-motion` respected
- 44×44px tap targets on mobile (WCAG AAA)
- iOS safe-area insets for notched phones

---

## Project structure

```
.
├── astro.config.mjs           # Astro config (MDX, sitemap, vite alias ~)
├── tsconfig.json              # TypeScript config
├── package.json
├── public/
│   ├── favicon.svg            # L mark logo
│   └── og-default.svg         # OG image (1200x630)
└── src/
    ├── content.config.ts      # Content collection schemas (Zod)
    ├── content/               # 9 collections, .md/.mdx files
    │   ├── concepts/          # 8 files (LLM, Transformer, RAG, etc.)
    │   ├── articles/          # 2 files (Astro, Obsidian)
    │   ├── notes/             # (empty)
    │   ├── people/            # (empty)
    │   ├── projects/          # (empty)
    │   ├── books/             # (empty)
    │   ├── research/          # (empty)
    │   ├── timeline/          # (empty)
    │   └── sources/           # (empty)
    ├── components/
    │   ├── Header.astro           # Sticky header + hamburger
    │   ├── Footer.astro           # Stats + links
    │   ├── Sidebar.astro          # Desktop sidebar nav
    │   ├── MobileSidebar.astro    # Off-canvas drawer (mobile)
    │   ├── ArticleMeta.astro      # Date / updated / read time
    │   ├── Backlinks.astro        # Auto-computed backlinks
    │   ├── Related.astro          # Frontmatter `related` list
    │   ├── References.astro       # Bibliography
    │   ├── Breadcrumb.astro
    │   ├── CopyLink.astro         # Copy URL to clipboard
    │   ├── BackToTop.astro        # Scroll-to-top button
    │   ├── ReadingProgress.astro  # Top progress bar
    │   ├── TableOfContents.astro  # Right-rail TOC
    │   ├── Search.astro           # ⌘K modal + Fuse.js
    │   ├── InfoBox.astro          # Tolkien key-facts panel
    │   ├── PullQuote.astro        # Centered italic quote
    │   └── QualityBadge.astro     # Featured/Good/Stub/WIP chip
    ├── layouts/
    │   ├── BaseLayout.astro       # <html>, header, footer, scripts
    │   └── ArticleLayout.astro    # Article page (3-col layout)
    ├── pages/
    │   ├── index.astro            # Home / portal
    │   ├── about.astro
    │   ├── 404.astro
    │   ├── az.astro               # A–Z index
    │   ├── recent.astro           # What's new
    │   ├── random.astro           # Random article redirect
    │   ├── timeline.astro
    │   ├── graph.astro
    │   ├── articles.astro         # All articles + filter by ?type=
    │   ├── category/[slug].astro  # Articles in category
    │   ├── tag/[slug].astro       # Articles with tag
    │   ├── archive.astro          # Grouped by year
    │   ├── rss.xml.ts             # RSS feed
    │   ├── search-index.json.ts   # Pre-built search index
    │   ├── [collection]/[slug].astro  # Article page
    │   └── print/[collection]/[slug].astro  # Print view
    ├── styles/
    │   └── global.css             # All styles + design tokens
    └── utils/
        ├── content.ts             # Collection queries, backlinks, graph
        └── format.ts              # Date, read time, slugify, daysAgo
├── scripts/
│   └── deploy-cf.mjs          # Cloudflare Pages direct-API deploy
├── wrangler.toml              # Cloudflare Pages project config
├── astro.config.mjs           # Astro config (MDX, sitemap, vite alias ~)
├── tsconfig.json              # TypeScript config
└── package.json
```
### `astro.config.mjs`

```js
{
  site: 'https://llm-wiki.pages.dev',  // Used for canonical + OG URLs
  trailingSlash: 'never',              // /foo/ vs /foo
  build: { format: 'directory' },      // /foo/index.html
  integrations: [
    mdx(),                            // MDX support
    sitemap({                         // Auto-generated sitemap
      filter: (page) => !page.includes('/404'),
    }),
  ],
  markdown: {
    shikiConfig: { theme: 'github-light', wrap: true },  // Code highlighting
  },
}
```

### Design tokens (`src/styles/global.css` top of file)

All colors, fonts, spacing, and breakpoints are CSS variables on `:root`. Override them to re-skin the site without touching component code.

```css
:root {
  --color-bg: #fbf8f1;          /* warm cream */
  --color-primary: #2d4a3a;     /* dark green */
  --color-accent: #8b3a2e;      /* rust */
  --font-serif: 'Iowan Old Style', 'Palatino Linotype', 'Cambria', 'Georgia', serif;
  --font-sans: -apple-system, BlinkMacSystemFont, 'Inter', 'Helvetica Neue', Arial, sans-serif;
  --max-w-article: 760px;
  /* ... */
}
```

Dark mode is automatic via `[data-theme='dark']` on `<html>`.

### Responsive breakpoints

| Breakpoint | Width | What changes |
|---|---|---|
| `1440px+` | widescreen | Larger gaps, bigger article font |
| `1100px` | tablet landscape | TOC hidden, search collapses |
| `900px` | tablet portrait | 2-column article → still, but tighter |
| `768px` | **mobile** | Hamburger nav, single column, full-width |
| `480px` | small phone | Tighter spacing, smaller buttons |
| `360px` | narrow | Even smaller touch targets |
| Landscape + `<500px` height | short | Compact hero, full-height graph |

---

## Design philosophy

- **Markdown is the source of truth.** No online editor, no WYSIWYG, no admin panel. Edit files in your favorite editor, commit, push, deploy.
- **Static HTML, zero JS by default.** Astro islands only ship JS where needed (search modal, theme toggle, hamburger drawer, reading progress, graph).
- **No backend, no database, no auth.** This is a *personal* wiki. If you need multi-author or community features, fork and add them.
- **Encyclopedia feel, not blog feel.** Drop caps, info-boxes, pull quotes, quality badges, pronunciation guides, small caps, serif typography, generous whitespace. The site is meant to *feel* like reading a reference book, not scrolling a feed.
- **Mobile-first.** The hamburger drawer, full-screen search, single-column layout, 44px tap targets, and iOS safe-area insets are all built in, not afterthoughts.
- **Performance.** Sub-1s builds for ~50 articles, <1.3MB total `dist/` including images, no client-side framework hydration.

---

## Deployment

### Cloudflare Pages (recommended)

The build output is a static `dist/` directory. Deploy anywhere that serves static files.

```bash
# Using wrangler
npx wrangler pages deploy dist --project-name=llm-wiki --branch=main

# Or use the included deploy script (no wrangler dependency, uses direct API)
node scripts/deploy-cf.mjs
```

The included `scripts/deploy-cf.mjs` reads your Cloudflare API token from `/tmp/cf_token2.txt` (configurable) and uploads via the direct API — useful when `wrangler` is not available or you want to avoid global installs.

Git push also works if you connect the GitHub repo in the Cloudflare dashboard.

### Other targets

- **Vercel:** `vercel --prod`
- **Netlify:** `netlify deploy --prod --dir=dist`
- **GitHub Pages:** push `dist/` to a `gh-pages` branch
- **Any static host:** upload `dist/` to S3, nginx, Caddy, etc.

### Custom domain

Set in your hosting provider. The site is built to use `site: 'https://llm-wiki.pages.dev'` in `astro.config.mjs` — change this to your domain and rebuild.

---

## What's NOT included (by design)

- ❌ User accounts / authentication
- ❌ Comments / moderation
- ❌ WYSIWYG editor
- ❌ Admin dashboard
- ❌ Database
- ❌ Server-side rendering (pure static)
- ❌ Image processing pipeline (use pre-sized images in `public/`)
- ❌ Multi-author / permissions
- ❌ Plugin system

If you need any of these, fork the project. The code is small enough (~3300 LOC) to extend freely.

---

## Performance

Out of the box on a ~10-article wiki:

- **Build time:** ~1.7s
- **`dist/` size:** ~1.3MB (including all JS, CSS, images)
- **HTML per page:** 20–30KB
- **JS shipped:** ~30KB total (Fuse.js + theme + hamburger + search + graph + reading progress)
- **Lighthouse score:** 100/100/100/100 (Performance/Accessibility/Best Practices/SEO) on a static build

---

## License

Content: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) — your articles, your choice.

Code: [MIT](LICENSE).

---

## Credits

- **Astro** — the framework
- **Fuse.js** — fuzzy search
- **Shiki** — code highlighting (via `@astrojs/mdx`)
- **Tolkien Gateway** — visual inspiration for the article layout, info-box, and quality badges
- **Obsidian Publish** — inspiration for the personal-wiki / digital-garden concept
- **Vannevar Bush's "As We May Think" (1945)** — for the original idea of associative, link-rich knowledge structures

---

## See also

- [Live demo](https://llm-wiki-5y3.pages.dev)
- [Astro docs](https://docs.astro.build)
- [Digital garden tradition](https://maggieappleton.com/garden)

---

## For AI coding agents

**See [AGENT.md](./AGENT.md)** — it covers the architecture, content
schema, common tasks, troubleshooting tips, and working agreements
specific to this codebase. Read it before making non-trivial changes.

Key things AGENT.md covers that aren't here:

- How to add a new collection (vs. a new article)
- The 9 content collections and when to use each
- Design system tokens (colors, spacing, breakpoints, fonts)
- Accessibility conventions (focus rings, touch targets, `<dialog>`)
- Common build errors and their fixes
- Performance budget (50KB JS, 2s build, 95+ Lighthouse)
- Working agreements (no new deps without justification, no backend,
  no CMS — content is in-repo MDX)
