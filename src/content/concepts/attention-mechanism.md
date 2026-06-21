---
title: "Attention Mechanism"
description: "Mekanisme neural network yang memungkinkan model fokus pada bagian input yang relevan saat menghasilkan output. Fondasi arsitektur Transformer."
summary: "Attention: query, key, value. Self-attention dalam Transformer (Vaswani 2017). Multi-head, cross-attention, flash attention (efisiensi)."
date: 2026-06-21
updated: 2026-06-21
category: "concepts"
tags: ["attention", "transformer"]
aliases: ["mekanisme perhatian"]
related: ["/concepts/transformer", "/concepts/neural-network"]
references:
  - title: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Attention_Mechanism"

quality: "good"
---

# Attention Mechanism

## Definisi

**Attention** adalah mekanisme yang memungkinkan model neural network untuk **fokus pada bagian input yang relevan** saat menghasilkan output.

## Tipe

- **Bahdanau Attention** (2014) — RNN-based translation
- **Scaled Dot-Product Attention** (Vaswani 2017) — fondasi Transformer
- **Self-attention** — attend ke input sendiri
- **Cross-attention** — attend ke input berbeda
- **Multi-head attention** — beberapa attention paralel

## Formula

```
Attention(Q, K, V) = softmax(QK^T / √d_k) V
```

Q (query), K (key), V (value) — bobot perhatian dihitung dari Q·K, lalu applied ke V.

## Inovasi

- **Flash Attention** (2022) — efisiensi memory
- **Multi-Query Attention (MQA)** (2019)
- **Grouped-Query Attention (GQA)** (2023)

