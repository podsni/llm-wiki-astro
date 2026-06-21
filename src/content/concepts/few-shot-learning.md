---
title: "Few-Shot Learning"
description: "Kemampuan model untuk belajar dari **sedikit contoh** (1-shot, 5-shot, dst.) di inference. GPT-3 mempopulerkan untuk LLM. Meta-learning adalah pendekatan tradisional."
summary: "Few-shot: k contoh di prompt → model generalisasi. 1-shot, 3-shot, 5-shot umum. Zero-shot (tanpa contoh). In-context learning adalah bentuk few-shot learning di Transformer."
date: 2026-06-21
updated: 2026-06-21
category: "concepts"
tags: ["few-shot", "meta-learning"]
aliases: ["belajar dari sedikit contoh"]
related: ["/concepts/prompt-engineering", "/concepts/emergent-behavior"]
references:
  - title: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Few-Shot_Learning"

quality: "good"
---

# Few-Shot Learning

## Definisi

**Few-shot learning** adalah kemampuan model untuk belajar dari **sedikit contoh** (k=1 sampai k=20) saat inference, tanpa update bobot.

## Varian

- **Zero-shot** — tanpa contoh
- **One-shot** — 1 contoh
- **Few-shot** — beberapa contoh (umumnya 2-10)
- **In-context learning** — sinonim untuk LLM

## GPT-3 sebagai Tonggak

GPT-3 (2020) menunjukkan bahwa **in-context few-shot learning** muncul di skala 175B parameter. Sebelumnya: meta-learning (MAML, Prototypical Networks) untuk computer vision.

