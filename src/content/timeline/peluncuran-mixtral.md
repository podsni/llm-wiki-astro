---
title: "Peluncuran Mixtral 8x7B"
description: "Mistral AI merilis Mixtral 8x7B — LLM dengan arsitektur Mixture of Experts (MoE). 46,7B total parameter, tapi hanya 12,9B aktif per inference."
summary: "Mixtral 8x7B: 8 expert FFN, top-2 aktif, 46,7B total, 12,9B aktif. Apache 2.0. Lebih murah inference dari dense 70B. Tonggak MoE mainstream."
date: 2026-06-21
updated: 2026-06-21
eventDate: "2023-12-11"
category: "timeline"
tags: ["AI", "sejarah"]
aliases: []
related: ["/concepts/moe", "/sources/mistral-ai"]
references:
  - title: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Peluncuran_Mixtral_8x7B"

quality: "good"
---

# Peluncuran Mixtral 8x7B

## Ringkasan

[Mistral AI](/sources/mistral-ai) merilis **Mixtral 8x7B** pada 11 Desember 2023 — LLM dengan arsitektur **Mixture of Experts (MoE)** yang populer.

## Arsitektur

- **8 expert FFN** networks
- **Top-2 routing** — hanya 2 expert aktif per token
- **46,7B total parameters**
- **12,9B aktif per inference** (efisien)
- **32K context window**
- **Apache 2.0 license**

## Keunggulan

- **Kualitas lebih baik dari Mistral 7B** dan **LLaMA 2 70B** di banyak benchmark
- **Inference 5x lebih cepat** dari LLaMA 2 70B (parameter aktif lebih sedikit)
- **Lisensi komersial** — boleh untuk bisnis

## Dampak

- **MoE** menjadi tren utama LLM
- **GPT-4** (rumor) — 8 expert x 220B
- **DeepSeek-V3** (2024) — 256 expert
- **Mixtral 8x22B** (April 2024) — lebih besar
- **Command R+** (Cohere) — MoE

Mixtral menandai **mainstream adopsi MoE** — arsitektur yang memungkinkan parameter besar dengan inference cost manageable.

