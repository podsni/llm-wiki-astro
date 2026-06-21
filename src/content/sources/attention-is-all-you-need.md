---
title: "Attention Is All You Need (Vaswani et al. 2017)"
description: "Paper seminal yang memperkenalkan arsitektur Transformer — paper paling penting di AI modern."
summary: Paper 2017 yang memperkenalkan Transformer dan 'attention mechanism' — fondasi semua LLM modern.
date: 2017-06-12
sourceType: paper
sourceUrl: https://arxiv.org/abs/1706.03762
category: ai
tags: [ai, transformer, attention, paper, deep-learning, foundational]
quality: featured
---

# Attention Is All You Need

Paper seminal yang memperkenalkan **arsitektur Transformer** — paper paling penting di AI modern.

## Detail

- **Penulis:** Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Łukasz Kaiser, Illia Polosukhin
- **Tahun:** 2017
- **Venue:** NeurIPS 2017
- **ArXiv:** [arxiv.org/abs/1706.03762](https://arxiv.org/abs/1706.03762)

## Ringkasan

Paper ini mengusulkan arsitektur baru bernama **Transformer** yang berdasarkan sepenuhnya pada **mechanism attention**, tanpa recurrence atau convolution. Hasilnya: paralelisasi yang lebih baik, training lebih cepat, dan kualitas superior pada tugas terjemahan mesin.

## Kontribusi Kunci

1. **Multi-head self-attention** — query, key, value projections
2. **Scaled dot-product attention** — `Attention(Q, K, V) = softmax(QK^T / sqrt(d_k)) V`
3. **Positional encoding** — menambahkan informasi posisi ke input
4. **Encoder-decoder architecture** — dengan cross-attention

## Dampak

- **GPT (1, 2, 3, 4, ...)** — OpenAI
- **BERT** — Google
- **T5** — Google
- **LLaMA, Mistral, Claude, Gemini** — semua LLM modern berbasis Transformer
- **Vision Transformer (ViT)** — Transformer untuk image
- **Stable Diffusion, DALL-E, Midjourney** — diffusion models + Transformer

## Lihat juga

- [Transformer](/concepts/transformer) — artikel wiki
- [Large Language Model](/concepts/large-language-model) — aplikasi
- [Embedding](/concepts/embedding) — representasi vektor
- [Context Window](/concepts/context-window) — limit LLM
