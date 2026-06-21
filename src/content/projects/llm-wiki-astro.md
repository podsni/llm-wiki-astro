---
title: LLM Wiki Astro
description: Personal knowledge base bergaya ensiklopedia, dibangun dengan Astro 5 dan di-deploy ke Cloudflare Pages.
summary: Wiki pribadi yang sedang dalam pengembangan — 12+ artikel tentang AI, sejarah, dan bahasa.
date: 2024-09-01
updated: 2026-06-20
status: active
url: https://llm-wiki-5y3.pages.dev
repo: https://github.com/podsni/llm-wiki-astro
category: web
tags: [web, astro, wiki, knowledge-base, static-site]
quality: featured
---

# LLM Wiki Astro

Personal knowledge base bergaya ensiklopedia, dibangun dengan [Astro 5](/articles/astro) dan di-deploy ke Cloudflare Pages.

## Status: Active

Live di [llm-wiki-5y3.pages.dev](https://llm-wiki-5y3.pages.dev)

## Stack
- **Astro 5** — static site generator
- **9 content collections** — notes, articles, concepts, projects, books, research, people, timeline, sources
- **Spectral font** (display) + system stack (sans)
- **OKLCH color tokens** — perceptually uniform
- **Zero JS by default** — hanya ada JS untuk search modal, theme toggle, graph view
- **Cloudflare Pages** — hosting
- **GitHub Actions** — auto-deploy on push

## Fitur
- **Articles** dengan infobox, related, backlinks
- **Graph view** — interactive force-directed graph
- **A–Z index** — semua entries sorted by title
- **Random article** — interaktif picker
- **Search modal** — full-text search
- **Markdown links** — `[Title](/concepts/slug)` style (planned: `[[wikilink]]`)

## Lihat juga
- [Astro](/articles/astro) — framework
- [Digital Garden](/concepts/digital-garden) — filosofi
- [Knowledge Base](/concepts/knowledge-base) — konsep
- [Obsidian](/articles/obsidian) — inspirasi design
