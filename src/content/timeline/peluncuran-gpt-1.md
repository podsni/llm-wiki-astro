---
title: "Peluncuran GPT-1"
description: "OpenAI merilis GPT-1 (Generative Pre-trained Transformer 1) — transformer decoder 117M parameter yang di-pretrain dengan unsupervised learning, lalu di-fine-tune untuk tugas spesifik."
summary: "GPT-1: 117M parameters, 12-layer decoder Transformer, unsupervised pre-training. Fondasi era LLM. Tonggak pretrain + fine-tune paradigm."
date: 2026-06-21
updated: 2026-06-21
eventDate: "2018-06-11"
category: "timeline"
tags: ["AI", "sejarah"]
aliases: []
related: ["/concepts/large-language-model", "/concepts/transformer", "/sources/openai"]
references:
  - title: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Peluncuran_GPT-1"

quality: "good"
---

# Peluncuran GPT-1

## Ringkasan

[OpenAI](/sources/openai) merilis paper *"Improving Language Understanding by Generative Pre-training"* pada 11 Juni 2018 — memperkenalkan **GPT-1** (Generative Pre-trained Transformer 1), model bahasa 117M parameter berbasis Transformer decoder.

## Inovasi

- **Unsupervised pre-training** + **supervised fine-tuning**
- **Transformer decoder** saja (bukan encoder-decoder)
- **Causal language modeling** — prediksi token berikutnya
- **12 layer**, 12 attention head, 117M parameters
- **768 hidden size**

## Hasil

- SOTA di 9 dari 12 benchmark NLP (GLUE, NLI, dll)
- Membuktikan **paradigma pre-train + fine-tune** berhasil

## Legacy

GPT-1 memulai **era generative pre-trained Transformer**:
- **GPT-1** (2018) — 117M
- **GPT-2** (2019) — 1.5B
- **GPT-3** (2020) — 175B
- **GPT-4** (2023) — multimodal
- **GPT-5** (2025) — agentic

Generative pre-trained Transformer adalah **paradigma dominan LLM** hingga 2026.

