---
title: Large Language Model
description: A neural network trained on massive text corpora to generate and understand natural language, forming the foundation of modern AI assistants.
date: 2024-01-15
updated: 2024-12-20
category: ai
tags: [ai, llm, neural-network, foundation-model]
aliases: [LLM, Large Language Models, language model]
related: [transformer, embedding, context-window, retrieval-augmented-generation, ai-agent]
references:
  - title: "Attention Is All You Need"
    author: Vaswani et al.
    year: 2017
    url: https://arxiv.org/abs/1706.03762
    note: The original Transformer paper.
  - title: "Language Models are Few-Shot Learners"
    author: Brown et al.
    year: 2020
    url: https://arxiv.org/abs/2005.14165
    note: GPT-3 paper demonstrating emergent capabilities.
---

A **Large Language Model (LLM)** is a type of [neural network](/concepts/embedding) trained on vast corpora of text to predict the next token in a sequence. Through scale — both in parameters (often hundreds of billions) and training data (trillions of tokens) — these models develop emergent capabilities including reasoning, translation, code generation, and conversation.

## How they work

LLMs are built on the [Transformer](/concepts/transformer) architecture, which uses self-attention to process sequences in parallel. Training proceeds in two broad phases:

1. **Pre-training** — the model learns statistical patterns of language by predicting the next token over a large corpus. This is unsupervised and extremely compute-intensive.
2. **Post-training** — techniques like RLHF (Reinforcement Learning from Human Feedback) align the model with human preferences, instruction following, and safety.

## Key properties

- **Tokenization** — text is split into discrete units (tokens) that the model processes. A token is roughly 0.75 words in English.
- **Context window** — the maximum amount of text the model can attend to at once. Modern models range from 8K to 2M tokens. See [Context Window](/concepts/context-window).
- **Embeddings** — the internal vector representations the model uses. See [Embedding](/concepts/embedding).
- **Few-shot learning** — at sufficient scale, models can perform new tasks from a handful of examples provided in the prompt.

## Applications

LLMs power a wide range of applications:

- **Chat assistants** — conversational interfaces like ChatGPT, Claude, Gemini.
- **[AI Agents](/concepts/ai-agent)** — systems that use LLMs as a reasoning engine to take actions in the world.
- **[Retrieval-Augmented Generation](/concepts/retrieval-augmented-generation)** — combining LLMs with external knowledge bases.
- **Code generation** — tools like GitHub Copilot and Cursor.
- **Translation, summarization, content generation** — replacing or augmenting traditional NLP pipelines.

## Limitations

Despite their capabilities, LLMs have well-known limitations:

- **Hallucination** — confidently generating plausible but incorrect information.
- **Knowledge cutoff** — no awareness of events after training.
- **Context limitations** — forgetting or confusing information in long contexts.
- **Lack of grounding** — no direct connection to truth or the physical world.
- **Computational cost** — training and inference require substantial energy and hardware.

## The trajectory

The field has moved rapidly from GPT-2 (1.5B parameters, 2019) through GPT-3 (175B, 2020), ChatGPT (2022), and into a multi-model ecosystem where frontier labs release models with increasing capabilities every few months. The dominant architectural paradigm — the [Transformer](/concepts/transformer) — has remained constant, though training techniques, post-training methods, and inference strategies have evolved dramatically.

## See also

- [Transformer](/concepts/transformer) — the architecture underlying most LLMs
- [Embedding](/concepts/embedding) — how LLMs represent meaning
- [Context Window](/concepts/context-window) — the memory limit of an LLM
- [Retrieval-Augmented Generation](/concepts/retrieval-augmented-generation) — extending LLMs with external knowledge
- [AI Agent](/concepts/ai-agent) — LLMs that take action
