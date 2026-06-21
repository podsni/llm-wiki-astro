---
title: "Tool Use — Penggunaan Alat"
description: "Kemampuan LLM/agent untuk **memanggil fungsi eksternal** (search, code execution, API, browser, database) untuk menyelesaikan tugas di luar knowledge cutoff-nya."
summary: "Tool use = function calling + ReAct + planning. Format: JSON schema. Anthropic, OpenAI, Google support native. Implementasi: LangChain Tools, OpenAI Function Calling, MCP (Model Context Protocol)."
date: 2026-06-21
updated: 2026-06-21
category: "concepts"
tags: ["tool-use", "function-calling", "agentic"]
aliases: ["pemanggilan fungsi", "function calling"]
related: ["/concepts/agentic-ai", "/concepts/agentic-workflow"]
references:
  - title: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Tool_Use"

quality: "good"
---

# Tool Use

## Definisi

**Tool use** (function calling) adalah kemampuan model AI untuk **memanggil fungsi eksternal** — search engine, code interpreter, database, API, browser, file system, dll — untuk menyelesaikan tugas.

## Format

Model menghasilkan output terstruktur (JSON) yang menunjukkan tool mana yang dipanggil dan dengan argumen apa:

```json
{
  "name": "search",
  "arguments": {"query": "cuaca Jakarta besok"}
}
```

## Standar

- **OpenAI Function Calling** (2023)
- **Anthropic Tool Use** (2024)
- **Google Gemini Function Calling**
- **MCP** (Model Context Protocol, Anthropic 2024) — standar terbuka

