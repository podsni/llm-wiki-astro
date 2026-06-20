---
title: Digital Garden
description: A public, evolving personal knowledge base — somewhere between a blog and a wiki — where ideas are cultivated over time rather than published as finished essays.
date: 2023-09-10
updated: 2024-08-20
category: methodology
tags: [methodology, writing, knowledge-management, gardening]
aliases: [digital gardens, garden, knowledge garden]
related: [knowledge-base, obsidian, astro]
references:
  - title: "Digital Gardener"
    author: Maggie Appleton
    year: 2018
    url: https://maggieappleton.com/garden
---

A **Digital Garden** is a public, evolving personal [knowledge base](/concepts/knowledge-base). Unlike a blog — which publishes finished essays in reverse-chronological order — a garden cultivates ideas over time: seedlings are planted, watered with new sources and thoughts, and gradually grow into mature notes that link to and inform each other.

## Origins

The metaphor of gardening for thinking goes back centuries — Thomas Jefferson, Robert Hooke, and others kept "commonplace books" that were essentially analog gardens. The modern digital form was popularized by Mark Bernstein, Mike Caulfield, and especially Maggie Appleton, who coined the visual and conceptual conventions still used today.

## Garden vs blog vs wiki

| | Garden | Blog | Wiki |
|---|---|---|---|
| **Content maturity** | Mixed — seedlings to mature | Polished and complete | Comprehensive, edited |
| **Update model** | Continuous growth | One-shot posts | Collaborative editing |
| **Tone** | Tentative, exploratory | Authoritative | Neutral, encyclopedic |
| **Organization** | Topical, networked | Chronological | Hierarchical, indexed |
| **Audience** | Curious readers | Subscribers | Researchers |
| **Example** | This site | Personal blog | Wikipedia |

A garden is closest to a hybrid of blog and wiki, but with a different relationship to time: rather than discarding ideas that "didn't work out", a garden keeps them, with timestamps showing how thinking evolved.

## Conventions

Common digital garden conventions:

- **Visible timestamps** — every page shows when it was created and last tended. Recent updates bubble up.
- **No "publish" button** — pages are *always in progress*. The concept of "draft" is replaced by "seedling → budding → evergreen".
- **Bidirectional links** — clicking a link should show you all pages that link back. Inspired by Ted Nelson's *transclusion* and Vannevar Bush's *associative trails*.
- **Topical clusters** — related ideas form a small web. New ideas find their cluster and grow from existing roots.
- **Notes are short** — a single concept per page, connected to many others. Long essays break into multiple linked notes.
- **Permalinks** — once a URL exists, it never changes. You can cite a garden page the way you cite a paper.

## Tools

Gardens are built with:

- **[Obsidian](/articles/obsidian)** — the dominant note-taking tool; the graph view is essentially a garden visualization.
- **[Astro](/articles/astro)** — modern static site generator; ideal for gardens that want to publish as websites.
- **Notion, Logseq, Roam** — alternative tools with native graph views.
- **Quartz, Digital Garden Jekyll Plugin** — turn Obsidian vaults into static sites.
- **Custom scripts** — many gardens have bespoke ingestion pipelines (e.g. the Karpathy LLM Wiki pattern).

## How this site relates

This site is structured as a knowledge base with a garden sensibility:

- **9 content collections** — notes, articles, concepts, people, projects, books, research, timeline, sources.
- **Bidirectional links** — every internal link is tracked; backlinks appear on each page.
- **Tags and categories** — for finding by topic.
- **Graph view** — visualizing the network of connections.
- **No published date, only `updated`** — the timestamp reflects the most recent edit, not the original creation. This is the gardening principle: a note is always in progress.

## See also

- [Knowledge Base](/concepts/knowledge-base) — the broader category this fits into
- [Obsidian](/articles/obsidian) — the tool that made gardens mainstream
- [Astro](/articles/astro) — the framework this site is built on
