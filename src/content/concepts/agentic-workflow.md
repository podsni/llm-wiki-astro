---
title: "Agentic Workflow"
description: "Workflow yang dijalankan oleh AI agent secara otonom, biasanya multi-langkah. Berbeda dengan one-shot prompt: agent plan → execute → reflect → iterate."
summary: "Agentic workflow: plan → tool use → reflect → iterate. Tools: LangGraph (LangChain), AutoGen (Microsoft), CrewAI, DSPy, Temporal. Pattern: ReAct, Plan-and-Execute, Reflexion."
date: 2026-06-21
updated: 2026-06-21
category: "concepts"
tags: ["agentic", "workflow"]
aliases: ["alur kerja agen"]
related: ["/concepts/agentic-ai", "/concepts/tool-use"]
references:
  - title: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Agentic_Workflow"

quality: "good"
---

# Agentic Workflow

## Definisi

**Agentic workflow** adalah alur kerja multi-langkah yang dijalankan AI agent secara otonom, dengan kemampuan untuk merencanakan, menggunakan tool, mengevaluasi hasil, dan iterasi.

## Pola

- **ReAct** (Reason + Act) — reasoning + tool interleaved
- **Plan-and-Execute** — plan dulu, lalu eksekusi
- **Reflexion** — reflect on failures, retry
- **Multi-agent** — beberapa agent berkolaborasi (CrewAI)

## Framework

- **LangGraph** — graph-based workflows
- **AutoGen** (Microsoft) — multi-agent conversation
- **CrewAI** — role-based agents
- **DSPy** — programmatic prompt optimization
- **Temporal** — durable execution

