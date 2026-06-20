---
title: Transformer
description: The neural network architecture that revolutionized NLP through self-attention, enabling parallel sequence processing and forming the basis of all modern LLMs.
summary: The architecture that ended the RNN era. Self-attention lets every token look at every other token in parallel, making both training and long-range reasoning tractable at scale.
date: 2024-01-10
updated: 2024-11-05
category: ai
tags: [ai, architecture, deep-learning, neural-network]
quality: featured
pronunciation: trans-for-mer
infobox:
  - label: Type
    value: Neural network architecture
  - label: Introduced
    value: 2017
  - label: Paper
    value: "Attention Is All You Need"
  - label: Authors
    value: Vaswani et al. (Google Brain)
  - label: Key innovation
    value: Self-attention (no recurrence, no convolutions)
  - label: Variants
    value: Encoder-only (BERT), Decoder-only (GPT), Encoder-decoder (T5)
  - label: See also
    value: '[Large Language Model](/concepts/large-language-model)'
aliases: [Transformers, transformer architecture, self-attention]
related: [large-language-model, embedding, context-window]
references:
  - title: "Attention Is All You Need"
    author: Vaswani et al.
    year: 2017
    url: https://arxiv.org/abs/1706.03762
    note: The original paper introducing the Transformer.
---

The **Transformer** is a neural network architecture introduced in 2017 by Vaswani et al. in the paper *"Attention Is All You Need"*. It has become the dominant architecture for natural language processing and is the foundation of all modern [Large Language Models](/concepts/large-language-model).

## Why it matters

Before Transformers, sequence models were dominated by RNNs (Recurrent Neural Networks) and LSTMs, which processed tokens one at a time. This made them:

- **Slow to train** — no parallelism within a sequence.
- **Hard to scale** — long-range dependencies were difficult to learn.
- **Memory-limited** — gradients struggled to flow across many time steps.

The Transformer replaced recurrence with **self-attention**, a mechanism that lets every position in a sequence attend to every other position in parallel. This unlocks massive parallelism on GPUs and dramatically improves training efficiency.

## The key mechanism: self-attention

For each token, the model computes three vectors: a **query** (Q), a **key** (K), and a **value** (V). The attention score between two tokens is computed as:

```
attention(Q, K, V) = softmax(QK^T / sqrt(d_k)) V
```

In plain language: each token asks "which other tokens are relevant to me?", the model scores all other tokens, and uses those scores to weight a sum of their value vectors. This produces a context-aware representation of each token.

**Multi-head attention** runs several attention computations in parallel and concatenates the results, allowing the model to attend to different kinds of relationships simultaneously.

## The architecture

A Transformer block has two sub-layers:

1. **Multi-head self-attention** — lets tokens communicate with each other.
2. **Position-wise feed-forward network** — a small MLP applied independently to each position.

Each sub-layer is wrapped with **residual connections** and **layer normalization**, making deep networks trainable.

The original paper stacked 6 of these blocks for the encoder and 6 for the decoder. Modern LLMs use much deeper stacks — 80 to 200+ layers.

## The encoder-decoder split

The original Transformer had two halves:

- **Encoder** — processes the input sequence bidirectionally; used for tasks like classification and translation.
- **Decoder** — generates the output sequence autoregressively; used for generation.

Modern LLMs come in three flavors:

- **Encoder-only** (BERT family) — for understanding tasks.
- **Decoder-only** (GPT family) — for generation. Most modern LLMs.
- **Encoder-decoder** (T5, BART) — for sequence-to-sequence tasks.

## Positional encoding

Self-attention is permutation-invariant — it treats input as a set, not a sequence. To recover order, the model adds **positional encodings** to the input embeddings. The original paper used fixed sinusoidal encodings; modern models typically use learned or rotary positional embeddings (RoPE).

## Impact

The Transformer has transformed not just NLP but also:

- **Computer vision** — Vision Transformers (ViT) match or beat CNNs.
- **Speech** — Whisper, SeamlessM4T.
- **Multimodal** — CLIP, GPT-4V, Gemini.
- **Biology** — AlphaFold 2, ESM-3 for protein structure and design.
- **Code** — Codex, Code Llama, Cursor.

The architecture has proven remarkably general, often outperforming domain-specific approaches by simply scaling up data and parameters.

## See also

- [Large Language Model](/concepts/large-language-model) — the dominant application of Transformers
- [Embedding](/concepts/embedding) — the input representation Transformers operate on
- [Context Window](/concepts/context-window) — bounded by Transformer attention complexity
