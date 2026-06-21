---
title: "Reasoning — Penalaran"
description: "Kemampuan AI untuk melakukan **penalaran multi-langkah** — logika, matematika, causal reasoning, planning. Model reasoning (o1, DeepSeek-R1) meng-internalisasi chain-of-thought."
summary: "Reasoning model: o1 (OpenAI 2024), DeepSeek-R1 (2025), Claude 4.5 Sonnet, Gemini 2.5 Thinking. Teknik: internal CoT, search, test-time compute scaling."
date: 2026-06-21
updated: 2026-06-21
category: "concepts"
tags: ["reasoning", "LLM"]
aliases: ["penalaran"]
related: ["/concepts/chain-of-thought", "/concepts/large-language-model"]
references:
  - title: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Reasoning"

quality: "good"
---

# Reasoning

## Definisi

**Reasoning** dalam konteks AI adalah kemampuan model untuk melakukan **penalaran logis multi-langkah** — bukan hanya menghasilkan teks, tapi benar-benar "berpikir" sebelum menjawab.

## Era

1. **Pre-2022** — Chain-of-thought prompting (manual)
2. **2024** — OpenAI o1 (internal CoT, test-time compute)
3. **2025** — Reasoning models menjadi mainstream (o3, Claude 4.5 Sonnet thinking, DeepSeek-R1, Gemini 2.5 Thinking)
4. **2026** — Agentic reasoning + search + tools

## Benchmark

- **MATH, GSM8K** — matematika
- **MMLU** — general knowledge
- **HumanEval, SWE-bench** — coding
- **ARC-AGI** — abstrak reasoning
- **AIME 2024/2025** — olympiad

