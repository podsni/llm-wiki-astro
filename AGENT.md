# AGENT.md — LLM Wiki

A guide for AI coding agents (and humans) working on this project. Read this
before making changes — it covers the architecture, conventions, common
pitfalls, and workflows specific to this codebase.

---

## 1. What this project is

**LLM Wiki** is a personal knowledge base — articles, concepts, research
notes, and the connections between them. It's a static site built with
Astro 5, inspired by [Tolkien Gateway][tolkien] and the digital garden
tradition.

- **Live:** https://llm-wiki-5y3.pages.dev
- **Repo:** https://github.com/podsni/llm-wiki-astro
- **License:** MIT
- **Stack:** Astro 5 · MDX · Astro Content Collections · Fuse.js · Shiki ·
  custom force-directed graph (no d3 dep)
- **Hosting:** Cloudflare Pages (auto-deploy from `dist/` via `wrangler`)
- **Zero JS by default.** The only client-side JS is the search modal and
  the random-article picker. Everything else is static HTML.

[tolkien]: https://www.tolkiengateway.net

---

## 2. Quick start

```bash
npm install
npm run dev       # dev server at http://localhost:4321
npm run build     # production build to ./dist
npm run preview   # preview the production build locally
```

**Deploy** (requires Cloudflare token at `/tmp/cf_token2.txt`):

```bash
npm run build && \
CLOUDFLARE_API_TOKEN=$(cat /tmp/cf_token2.txt) \
CLOUDFLARE_ACCOUNT_ID=760184466458e127e6b0306792196a3e \
npx wrangler pages deploy dist --project-name=llm-wiki --branch=main
```

Each deploy produces a new preview URL like `https://<hash>.llm-wiki-5y3.pages.dev`.
The `main` branch is the production branch.

---

## 3. Directory layout

```
src/
├── components/          # .astro components used by pages/layouts
│   ├── ArticleMeta.astro
│   ├── BackToTop.astro
│   ├── Breadcrumb.astro
│   ├── CopyLink.astro
│   ├── Footer.astro
│   ├── Header.astro
│   ├── InfoBox.astro           # floating key-facts box
│   ├── MobileSidebar.astro     # hamburger drawer for mobile
│   ├── PullQuote.astro
│   ├── QualityBadge.astro
│   ├── ReadingProgress.astro
│   ├── References.astro
│   ├── Related.astro           # "Connected to" section (backlinks + related + unresolved)
│   ├── Search.astro            # <dialog>-based search modal
│   ├── Sidebar.astro           # left rail nav (desktop)
│   └── TableOfContents.astro
│
├── content/              # MDX/MD articles, organized by collection
│   ├── articles/         # long-form essays
│   ├── concepts/         # reference-style entries
│   ├── notes/            # short notes
│   ├── people/           # biographies
│   ├── projects/         # work-in-progress
│   ├── books/            # book references
│   ├── research/         # research notes
│   ├── timeline/         # dated timeline entries
│   └── sources/          # source citations
│
├── content.config.ts     # collection schemas (Zod)
├── layouts/
│   ├── BaseLayout.astro         # <html>, <head>, header, footer
│   └── ArticleLayout.astro      # 3-col: sidebar / content / TOC
│
├── pages/                # file-based routes
│   ├── index.astro              # home
│   ├── [collection]/[slug].astro # dynamic article pages
│   ├── category/[category].astro
│   ├── tag/[tag].astro
│   ├── print/[collection]/[slug].astro  # print-friendly view
│   ├── about.astro
│   ├── archive.astro
│   ├── az.astro                 # A-Z index
│   ├── graph.astro              # force-directed graph view
│   ├── random.astro             # interactive random picker
│   ├── recent.astro             # what's-new
│   ├── timeline.astro
│   ├── 404.astro
│   ├── rss.xml.ts               # RSS feed
│   └── search-index.json.ts     # client-side search index
│
├── styles/
│   └── global.css       # single stylesheet, ~1900 lines
│
├── utils/
│   ├── content.ts       # collection helpers + URL builders
│   └── format.ts        # date + reading-time formatting
│
└── assets/              # static assets imported by components
```

---

## 4. Adding content

### Create a new article

1. Choose the right **collection** based on content shape:
   - `concepts/` — reference entries (definition, properties, examples)
   - `articles/` — long-form essays with a thesis
   - `notes/` — short personal observations
   - `research/` — research notes with references
   - `people/`, `projects/`, `books/`, `timeline/`, `sources/` — domain-specific

2. Create `src/content/<collection>/<slug>.md` (or `.mdx` if you need components).
   The `<slug>` becomes the URL: `/<collection>/<slug>/`.

3. Use this frontmatter template:

   ```yaml
   ---
   title: "Concept Name"
   description: "One-sentence summary used in cards and meta tags."
   summary: "Optional 1-2 sentence TL;DR shown under the H1."   # optional
   date: 2024-12-15
   updated: 2024-12-20       # optional, shown as "Updated <date>"
   category: ai              # single category (drives /category/<slug>)
   tags: [llm, neural-network, transformer]
   aliases: [LLM, language model]   # alt names for search
   quality: featured         # featured | good | stub | wip  (optional)
   pronunciation: larj lang-gwij mo-del   # IPA (optional)
   infobox:                  # optional, rendered as floating key-facts box
     - label: "Introduced"
       value: 2017
     - label: "Invented by"
       value: "Vaswani et al."
     - label: "Type"
       value: ["Neural network", "Foundation model"]
   related:                  # cross-references (slug or collection/slug)
     - transformer
     - concepts/embedding
     - concepts/context-window
   references:               # optional, rendered at end
     - title: "Attention Is All You Need"
       url: https://arxiv.org/abs/1706.03762
       author: "Vaswani et al."
       date: 2017-06-12
   draft: false              # drafts don't show in lists
   ---
   ```

4. The first `# Heading` in the body is the article H1. Don't put the
   title in the body — it's in the frontmatter. Subsequent `##` headings
   become the TOC entries.

### Cross-references

Two ways to link to other articles:

- **Inline markdown link:** `[Transformer](../concepts/transformer)` or
  `[Transformer](/concepts/transformer)`. Renders normally.
- **Frontmatter `related` array:** Use bare slugs (`transformer`) or
  qualified (`concepts/transformer`). Renders automatically in the
  "Connected to" section at the bottom of the article.

The `related` array powers:
- The "Related articles" cards under "Connected to"
- The graph view (it draws edges between articles that reference each other)
- The "Mentioned by" reverse list (auto-computed from inbound `related`)

### Quality tiers

Use these to mark article maturity:
- `featured` — top-tier, well-researched, ready for newcomers
- `good` — solid, complete, not yet refined
- `stub` — placeholder, needs expansion
- `wip` — actively being written

Featured articles show in the "Featured" rail on the home page and get
a colored badge. Good articles show a subtle badge. Stub and WIP
articles appear in normal lists but with a clear visual signal.

---

## 5. Architecture & design

### Content collections

Defined in `src/content.config.ts` with a shared `baseFields` Zod schema.
All collections extend this base. New collections must:

1. Add the directory under `src/content/`
2. Register the collection with `defineCollection({ loader: glob(...), schema: z.object({ ...baseFields, ...collectionSpecific }) })`
3. Add the collection name to `COLLECTIONS` in `src/utils/content.ts`
4. Add a label to `COLLECTION_LABELS` in the same file
5. (Optional) Update `Sidebar.astro` if you want it shown in nav

If a collection has zero entries, the build will emit a warning
(`"The collection 'foo' does not exist or is empty"`). This is harmless
and expected for unfilled collections.

### Dynamic routes

The dynamic article route is at `src/pages/[collection]/[slug].astro`.
It uses `getStaticPaths()` to enumerate all entries from all collections.
The URL is always `/<collection>/<slug>/`.

`getStaticPaths` must use **static imports** for the entry loader — dynamic
`import()` in `getStaticPaths` will silently fail at build time. See the
[Troubleshooting](#troubleshooting) section.

### Design system

- **Type:** Spectral (display + body serif) via Google Fonts + system
  font stack for UI chrome.
- **Colors:** OKLCH-based tokens (light + dark themes, switchable via
  the theme toggle in the header). Primary: deep forest green
  (`oklch(0.36 0.05 145)`). Accent: warm rust (`oklch(0.5 0.13 35)`).
  Background: near-white with a subtle green chroma.
- **Spacing:** `--sp-1` through `--sp-11` (4px base unit).
- **Breakpoints:** 360 / 480 / 768 / 900 / 1100 / 1440 (mobile-first).
- **Tap targets:** Minimum 44×44px on mobile (Apple HIG, WCAG AAA).
- **All page styles** live in `src/styles/global.css`. There is no CSS
  module system, no Tailwind, no PostCSS plugins. Just one big file.

### Accessibility conventions

- All interactive elements have `:focus-visible` rings (2px primary).
- The search modal is a native `<dialog>` with `inert` on `<main>` when open.
- Mobile sidebar toggles `aria-expanded` and `aria-controls`.
- Touch targets are at least 44px square on mobile.
- Color contrast meets WCAG AA (verified for body text + UI text).
- `prefers-reduced-motion` is respected for all animations.

---

## 6. Common tasks

### "Add a new field to the frontmatter"

1. Edit `baseFields` in `src/content.config.ts`.
2. Update any sample articles in `src/content/*/` to use the new field
   (or set it as `.optional()` to avoid touching all existing files).
3. Update components that render the field (likely `ArticleMeta.astro`,
   `InfoBox.astro`, or `ArticleLayout.astro`).
4. Rebuild. Zod will fail the build if existing articles don't match.

### "Change the color palette"

1. Edit the `:root` and `:root[data-theme='dark']` blocks in
   `src/styles/global.css` (top of file).
2. Use OKLCH for new colors — the existing tokens are perceptually
   uniform and dark-mode symmetric.
3. The hero, buttons, links, and accents all reference tokens, not
   hex values, so a token change cascades correctly.

### "Add a new page"

1. Create `src/pages/<name>.astro` or `src/pages/<route>/index.astro`.
2. If it needs the chrome (header/footer), wrap content in
   `<BaseLayout title="..." description="...">`.
3. If it needs the article layout (sidebar + TOC), use `<ArticleLayout>`.
4. Add a link from `Header.astro`, `Sidebar.astro`, or `Footer.astro`
   as appropriate.

### "Add a new collection"

See the [Content collections](#content-collections) section. After
adding a collection, populate at least one entry — empty collections
don't show in nav (the `Sidebar.astro` filters them out).

### "Rebuild + deploy"

```bash
npm run build
node scripts/deploy-cf.mjs   # or the wrangler command in section 2
```

After deploy, the preview URL is logged (e.g. `https://<hash>.llm-wiki-5y3.pages.dev`).
**Verify the changes on the new URL before merging** — the previous deploy
stays live until the new one finishes propagating.

---

## 7. Troubleshooting

### "Build fails with `Unexpected token '*'`"

You're using a dynamic `import()` in `getStaticPaths`. Replace it with a
static import at the top of the file. See `src/pages/[collection]/[slug].astro`
for the working pattern.

### "Build emits 'collection X does not exist or is empty'"

A collection has no entries in its directory. Either add an entry or
remove the collection from `src/content.config.ts` and `COLLECTIONS`
in `src/utils/content.ts`. The warning is harmless if intentional.

### "Build emits 'Entry articles → transformer was not found'"

A `related: [...]` reference points to a slug that doesn't exist.
Either fix the slug, remove the reference, or accept that the article
will appear in the "Not yet written" section.

### "The dev server shows the old build"

`npm run dev` uses HMR — but Content Collections need a full restart
when you add/rename/remove files in `src/content/`. Kill the dev
server and restart it.

### "Deploy fails with 'Invalid format for Authorization header'"

The Cloudflare token is being redacted by the shell. Either:

- Use the `scripts/deploy-cf.mjs` helper (reads the token from a file
  via `fs.readFileSync`, avoiding shell redaction), or
- Set the token via a `.env` file: `CLOUDFLARE_API_TOKEN=...` and run
  `npx wrangler pages deploy dist ...` (wrangler auto-reads `.env`),
  or
- Use a Python wrapper that reads the token and sets it via `env=`.

### "/random always picks the same article"

If you see this in production, check that `src/pages/random.astro` is
the interactive version (not the build-time-frozen `Astro.redirect`
version). The interactive version ships a JSON list and picks at
request time — see `src/pages/random.astro`.

### "Mobile home hero looks wrong"

Check the viewport — the hero h1 has an explicit `<br>` after
"compendium" so the title breaks as 2 lines. If you see "A small
compendium / of things worth knowing." that's correct. If you see 4
lines, your viewport is <400px and the `<br>` is being ignored (it
shouldn't be — but check the CSS isn't setting `white-space: nowrap`).

### "TOC sits in dead space on desktop article"

The TOC has `position: sticky; top: var(--sp-5)`. If it's not sticking,
check the parent `.article-layout` for `overflow: hidden` or similar
(these break `position: sticky`).

### "Article has 3 'See also' / 'Related' / 'Connected to' sections"

You probably added the article body with a `## See also` heading AND
the article has `related: [...]` in frontmatter. Both are valid, but
the inline body `## See also` will appear separately from the auto-
generated "Connected to" section at the bottom. Pick one approach
per article for consistency.

---

## 8. Working agreements

- **No new dependencies without justification.** The current stack
  (Astro + Fuse.js + Shiki + custom D3-like force sim) was chosen to
  keep the JS bundle under 50KB. Adding a dep costs more than usual.
- **Don't add Tailwind, PostCSS plugins, or a CSS framework.** The
  design system is custom but the file is one CSS file. Adding a
  framework means rewriting the design system.
- **Don't add a backend, database, auth, or comments.** This is a
  static site. Adding runtime infra changes the deployment model
  (CF Pages static → Pages Functions, or worse, a different host).
- **Don't add a CMS, WYSIWYG editor, or admin panel.** Content is
  authored as MDX files in the repo. This is intentional — the wiki
  lives next to the code, gets version-controlled, and can be edited
  in any text editor.
- **Always commit after a feature works.** Each commit should be
  self-contained and describe one logical change.
- **Always push after committing.** The git remote is the source of
  truth; local-only commits get lost.
- **Always verify on a fresh preview URL before declaring done.**
  Local builds can differ from CF Pages builds (different Node
  version, different env vars, different caching).

---

## 9. Performance budget

- **Total JS shipped:** <50KB (currently ~35KB across the search modal
  + random picker).
- **First Contentful Paint:** <1s on a fast 3G connection.
- **Build time:** <2s for the full site (currently 1.7-1.8s for 64 pages).
- **Lighthouse score:** 95+ on all categories (target).

If you add a feature that pushes any of these, justify it or split
it into a separate page (e.g., heavy interactions live on `/graph`
where the perf cost is acceptable).

---

## 10. Where to ask for help

- **Code questions:** This file + `README.md` should cover 90% of cases.
- **Design questions:** See the "Design system" section above and the
  design tokens in `global.css`.
- **Deployment questions:** `scripts/deploy-cf.mjs` is the canonical
  deploy path. If it's broken, check the CF token at `/tmp/cf_token2.txt`.
- **Content questions:** See section 4 (Adding content).

If something is genuinely unclear, open a GitHub issue or ask the
project owner.
