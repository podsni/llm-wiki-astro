---
title: "Prompt Engineering"
description: "Disiplin merancang prompt (input) untuk LLM agar menghasilkan output yang diinginkan. Teknik: few-shot, chain-of-thought, role prompting, structured output."
summary: "Prompt engineering menjadi keterampilan penting sejak GPT-3 (2020). Framework: ReAct, Chain-of-Thought, Tree-of-Thoughts. Tools: LangChain, Guidance, DSPy, BAML."
date: 2026-06-21
updated: 2026-06-21
category: "concepts"
tags: ["prompt-engineering", "LLM"]
aliases: ["rekayasa prompt"]
related: ["/concepts/chain-of-thought", "/concepts/large-language-model"]
references:
  - title: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Prompt_Engineering"

quality: "good"
---

# Prompt Engineering

## Definisi

**Prompt engineering** adalah seni dan ilmu merancang input (prompt) untuk [LLM](/concepts/large-language-model) agar menghasilkan output optimal.

## Teknik

- **Zero-shot** — langsung tanya
- **Few-shot** — beri beberapa contoh
- **Chain-of-Thought (CoT)** — minta AI berpikir step-by-step
- **Tree-of-Thoughts (ToT)** — CoT dengan branching
- **ReAct** — reasoning + acting (tool use)
- **Role prompting** — "You are a senior engineer..."
- **Structured output** — JSON / Pydantic
- **System prompts** — instruksi global

## Tools

- **LangChain, LlamaIndex** — framework
- **Guidance, DSPy** — programmatic prompting
- **BAML, Instructor** — structured output
- **Promptfoo** — testing

