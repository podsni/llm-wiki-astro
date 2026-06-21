---
title: "Self-Supervised Learning"
description: "Paradigma ML di mana label dibuat otomatis dari data itu sendiri (mis. masked word prediction, next sentence prediction). Fondasi LLM modern."
summary: "Self-supervised: create label from data. BERT (masked LM), GPT (next token), SimCLR (contrastive). Fondasi pre-training untuk LLM dan vision transformers."
date: 2026-06-21
updated: 2026-06-21
category: "concepts"
tags: ["machine-learning", "self-supervised"]
aliases: ["SSL", "pembelajaran swa-diawasi"]
related: ["/concepts/machine-learning", "/concepts/large-language-model"]
references:
  - title: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Self-Supervised_Learning"

quality: "good"
---

# Self-Supervised Learning

## Definisi

Paradigma ML di mana **label dibuat secara otomatis dari data itu sendiri** — tidak butuh anotasi manusia.

## Contoh

- **Masked Language Modeling** (BERT) — prediksi kata yang disembunyikan
- **Next Token Prediction** (GPT) — prediksi kata berikutnya
- **Contrastive Learning** (SimCLR, CLIP) — representasi yang membedakan instance
- **Masked Image Modeling** (MAE, BEiT)

## Pentingnya

Self-supervised learning adalah **fondasi revolusi LLM**: model belajar dari triliunan token teks internet tanpa anotasi manual, lalu di-fine-tune untuk tugas spesifik.

