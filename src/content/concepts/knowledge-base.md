---
title: Knowledge Base
description: A structured collection of information organized for retrieval, reasoning, and reuse — the foundation of any system that needs to "know" something.
date: 2023-08-15
updated: 2024-09-10
category: methodology
tags: [methodology, knowledge-management, information-architecture]
aliases: [KB, knowledge bases, knowledge store]
related: [digital-garden, obsidian, embedding, retrieval-augmented-generation]
---

A **knowledge base** is a structured collection of information — facts, concepts, relationships, procedures — organized for retrieval, reasoning, and reuse. The term is used in many fields: customer support (FAQ-style KBs), enterprise IT (internal documentation), AI (training data, RAG indexes), and personal knowledge management (notes, second brains).

## Anatomy of a knowledge base

Most KBs share a common structure:

- **Items** — atomic pieces of information (a fact, a paragraph, a document, a note).
- **Schema** — how items are typed, tagged, and related.
- **Index** — a structure for fast lookup (full-text search, vector index, faceted search, hierarchical navigation).
- **Relationships** — links between items, often bidirectional (backlinks).
- **Provenance** — where each piece of information came from.

The schema is the key decision. A loose schema (free-form notes) maximizes flexibility but degrades into a search problem. A strict schema (typed fields, controlled vocabularies) makes retrieval reliable but slows down writing.

## Personal vs organizational

| Dimension | Personal KB | Organizational KB |
|---|---|---|
| **Author** | One person | Many contributors |
| **Schema** | Loose, opinionated | Standardized, controlled |
| **Update cadence** | Daily | Continuous, often with review |
| **Trust model** | Self | Roles, permissions, audit |
| **Search** | "What did I read about X?" | "What's the policy on Y?" |

This site is a personal knowledge base. The schema is intentionally flexible (see [`schema.md`](https://github.com/podsni/BrainKu) for the source of truth), and the user is the only author and consumer.

## How LLMs change the equation

The most important shift in KB design in the last few years is the introduction of [embeddings](/concepts/embedding) and [Retrieval-Augmented Generation](/concepts/retrieval-augmented-generation). A modern KB is often:

1. **Markdown files** for the canonical content (human-readable, version-controlled, portable).
2. **Vector index** for semantic search (find by meaning, not just keywords).
3. **LLM** as the consumption interface (ask questions in natural language; the KB retrieves and synthesizes).

This stack — markdown + embeddings + LLM — is the pattern Karpathy's *LLM Wiki* describes, and the one that this site is built on. The KB becomes a knowledge store for an AI, not just for a human.

## Common failure modes

- **Orphan pages** — content with no inbound links becomes invisible. Always cross-reference.
- **Stale content** — without a freshness signal, old advice looks as trustworthy as new.
- **Contradictions** — multiple pages claiming different things for the same concept. Need explicit reconciliation.
- **Search mismatch** — users can't find what they know exists. Test search with real queries.
- **No provenance** — claims without sources become unchallengeable folklore.

## Open vs closed

A personal KB is private by default. But many personal KBs are *semi-open* — published as a [digital garden](/concepts/digital-garden) or [Obsidian Publish](https://obsidian.md/publish)-style site. The benefits:

- **Forces clarity** — writing for an audience sharpens thinking.
- **Builds reputation** — the KB becomes a portfolio.
- **Invites serendipity** — readers may know things you don't.

The costs:

- **Time** — publishing polish vs private speed.
- **Tone** — public writing is more careful, less exploratory.
- **Privacy** — some notes should never be public.

This site is public. See the [about page](/about) for what is and isn't shared.

## See also

- [Digital Garden](/concepts/digital-garden) — a public-facing style of personal KB
- [Obsidian](/articles/obsidian) — the dominant personal-KB tool
- [Embedding](/concepts/embedding) — enables semantic search over a KB
- [Retrieval-Augmented Generation](/concepts/retrieval-augmented-generation) — the LLM's interface to a KB
