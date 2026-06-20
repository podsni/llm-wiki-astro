---
title: Context Window
description: The maximum amount of text a language model can process in a single inference call, measured in tokens — the fundamental memory limit of an LLM.
summary: The LLM's working memory. Everything the model "knows" about the current task must fit inside it — the system prompt, history, retrieved docs, the question.
date: 2024-02-01
updated: 2024-11-15
category: ai
tags: [ai, llm, context, tokens, memory]
quality: good
infobox:
  - label: Unit
    value: Tokens
  - label: Modern range
    value: 8K – 2M tokens
  - label: English ratio
    value: 1 token ≈ 0.75 words
  - label: Cost
    value: Roughly quadratic in length
  - label: Gotcha
    value: '"Lost in the middle" — models recall beginning/end better'
  - label: See also
    value: '[Large Language Model](/concepts/large-language-model)'
aliases: [context length, context size, token limit]
related: [large-language-model, transformer, retrieval-augmented-generation, ai-agent]
references:
  - title: "Lost in the Middle: How Language Models Use Long Contexts"
    author: Liu et al.
    year: 2023
    url: https://arxiv.org/abs/2307.03172
---

The **context window** (or *context length*) of a [Large Language Model](/concepts/large-language-model) is the maximum amount of text the model can process in a single inference call. It is measured in **tokens** — typically 0.5 to 0.75 of a word in English. Modern models range from 8K to 2M tokens.

## Why it matters

The context window is the LLM's working memory. Everything the model "knows" about the current task — the system prompt, conversation history, retrieved documents, the current question — must fit inside it. If your input is too long, you have to:

- **Truncate** — drop the oldest or least relevant content.
- **Summarize** — compress prior context to fit more.
- **Chunk** — split the task across multiple calls, losing some coherence.
- **Use [RAG](/concepts/retrieval-augmented-generation)** — only inject the relevant subset.

## How it has grown

Context windows have expanded dramatically:

| Era | Typical context | Example models |
|---|---|---|
| 2019-2020 | 512-2K | GPT-2, GPT-3 |
| 2022-2023 | 4K-8K | GPT-3.5, Llama 1 |
| 2023-mid | 32K-100K | GPT-4, Claude 2, Llama 2 |
| 2024 | 200K-1M | Claude 3, Gemini 1.5 |
| 2024-late | 1M-2M | Gemini 1.5 Pro, Magic |

Each leap has unlocked new use cases — long document analysis, code repositories as context, multi-hour conversation history, agent trajectories.

## Why long context is hard

The [Transformer](/concepts/transformer) architecture has **quadratic** attention cost: doubling the context length quadruples the compute. This is why context windows didn't simply grow from 2K to 2M overnight. Recent advances that made long context practical include:

- **Flash Attention** — I/O-aware implementation that reduces memory and compute.
- **Sparse / sliding-window attention** — attend only to a window of nearby tokens plus a few "global" tokens.
- **Rotary Position Embeddings (RoPE)** — generalize to longer sequences than seen in training.
- **Ring attention** — distribute the attention computation across many GPUs.
- **State Space Models (Mamba, etc.)** — alternative architectures with linear cost.

## Lost in the middle

A surprising empirical finding: LLMs don't use their full context uniformly. They attend well to the **beginning** and **end** of the context, but performance degrades for information in the middle. The "Lost in the Middle" paper (Liu et al., 2023) documented this across multiple models.

Practical implications:

- Place the most important information at the start and end of the prompt.
- For multi-document [RAG](/concepts/retrieval-augmented-generation), put the most relevant chunk first, not in the middle.
- For long-context summarization, structure the prompt so key facts don't get buried.

## Counting tokens

Different models use different tokenizers:

- **GPT-4 / GPT-4o** — `o200k_base` (about 750 tokens per 1000 English words).
- **Claude 3** — roughly similar.
- **Llama 3** — sentencepiece BPE.

Tooling:

- `tiktoken` for OpenAI models.
- Anthropic SDK's `count_tokens()`.
- Most agent frameworks expose `token_count` for the active model.

Always count before sending — exceeding the context window either errors or silently truncates.

## Effective context

A model's nominal context window is the **maximum**, not the **optimal**. In practice, performance degrades before you hit the limit:

- **Latency** — long contexts are slow. A 1M-token prompt can take minutes to process.
- **Cost** — most APIs charge per token, both input and output.
- **Quality** — many models perform best at 25-50% of their nominal max.

For most production systems, **8K-32K is the sweet spot**. Beyond that, [RAG](/concepts/retrieval-augmented-generation) usually beats stuffing everything in the prompt.

## See also

- [Large Language Model](/concepts/large-language-model) — the model constrained by the context window
- [Transformer](/concepts/transformer) — the architecture with quadratic attention cost
- [Retrieval-Augmented Generation](/concepts/retrieval-augmented-generation) — the standard workaround for context limits
- [AI Agent](/concepts/ai-agent) — operates inside a context window
