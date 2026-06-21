---
title: "GitHub Copilot Coding Agent"
description: "Agentic coding di GitHub yang dapat membuat PR, melakukan review, dan menjalankan workflow GitHub secara otonom. Didukung GPT-5, Claude 4.5 Sonnet."
summary: "GitHub Copilot Coding Agent: agentic coding terintegrasi dengan GitHub, multi-step, can open PR, review code, run actions. Backend: GPT-5/Claude."
date: 2026-06-21
updated: 2026-06-21
category: "concepts"
tags: ["copilot", "agentic-coding", "github"]
aliases: []
related: ["/concepts/agentic-ai", "/sources/microsoft"]
references:
  - title: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/GitHub_Copilot_Coding_Agent"

quality: "good"
---

# GitHub Copilot Coding Agent

## Definisi

**GitHub Copilot Coding Agent** adalah agentic coding yang terintegrasi dengan [GitHub](https://github.com). Agent dapat:

- Membaca & menulis kode di repository
- Membuat **pull request** otomatis
- Menjalankan **GitHub Actions**
- Mereview kode
- Berkomentar di issues

## Backend

- **GPT-5** (OpenAI)
- **Claude 4.5 Sonnet** (Anthropic)
- **Gemini 2.5** (Google)

## Penggunaan

- Issue → Agent → PR
- Tag `@copilot` di issue
- Auto-assign agent ke task
- Agent menulis kode, test, dokumentasi

