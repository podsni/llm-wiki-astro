---
title: Obsidian
description: A local-first, markdown-based note-taking application built around a knowledge graph, popular for personal knowledge management and digital gardening.
date: 2023-05-10
updated: 2024-10-15
category: tool
tags: [tool, notes, knowledge-management, markdown, graph]
aliases: [Obsidian.md, obsidian app]
related: [knowledge-base, digital-garden, astro]
references:
  - title: "Obsidian homepage"
    url: https://obsidian.md
---

**Obsidian** is a desktop and mobile application for note-taking built on plain Markdown files. It stores notes locally (no cloud, no account required) and visualizes the network of connections between them as a graph. It has become the dominant tool for personal [knowledge bases](/concepts/knowledge-base) and [digital gardens](/concepts/digital-garden).

## What makes it different

Several design choices distinguish Obsidian from competitors like Notion or Roam:

- **Local-first** — your notes are `.md` files in a folder you control. No vendor lock-in. Works offline forever.
- **Markdown native** — no proprietary format. Files open in any text editor.
- **Graph view** — every link is tracked bidirectionally. The graph view shows the topology of your thinking.
- **Plugins** — community-built extensions for backlinks, Dataview queries, canvas, daily notes, slide decks, and hundreds of others.
- **Cross-platform** — Windows, macOS, Linux, iOS, Android.

## Core concepts

- **Vault** — a folder containing your notes. The unit of organization.
- **Wikilinks** — `[[page-name]]` syntax creates a link to another note without knowing its path. Clicking creates the note if it doesn't exist.
- **Backlinks** — every page shows all pages that link *to* it, not just from it. This is the killer feature for a knowledge base.
- **Tags** — `#tag-name` inline or `tags: [tag1, tag2]` in frontmatter. Filterable, hierarchical.
- **Graph view** — force-directed visualization of all notes and links.
- **Daily notes** — auto-created journal entries for each day.
- **Canvas** — freeform spatial canvas for visual thinking.

## Obsidian Publish

For users who want to make a vault public, Obsidian offers a paid service called [Obsidian Publish](https://obsidian.md/publish). It renders a vault as a website with the same graph view, backlinks, and navigation as the desktop app.

This site is a **replacement** for Obsidian Publish for users who:

- Don't want the subscription.
- Want full control over the design.
- Need better performance for large vaults.
- Want to publish via Cloudflare Pages or GitHub Pages.
- Need to integrate the KB with an AI agent workflow.

## Obsidian + LLM workflows

The natural pairing of Obsidian + LLMs has produced several patterns:

- **Copilot plugin** — chat with an LLM about your vault directly in Obsidian.
- **Smart Connections** — semantic search over the vault using embeddings.
- **Karpathy LLM Wiki pattern** — Obsidian as the IDE, an LLM agent as the maintainer, markdown as the storage. See this site's [README](https://github.com/podsni/BrainKu) for the full pattern.
- **Custom scripts** — many users run scripts (Python, Node) to extract and re-ingest sources into their vault.

## Limitations

- **Mobile is limited** — the iOS and Android apps are less full-featured than desktop.
- **No real-time collaboration** — multi-user editing requires external tools.
- **Plugins are sandboxed** — limited compared to full IDEs like VS Code.
- **Large vaults slow down** — the graph view becomes unusable past ~10K notes.

## See also

- [Knowledge Base](/concepts/knowledge-base) — what Obsidian is optimized for
- [Digital Garden](/concepts/digital-garden) — Obsidian's most common publishing target
- [Astro](/articles/astro) — alternative for publishing a knowledge base as a website
