---
title: "Mixture of Experts (MoE)"
description: "Arsitektur neural network dengan beberapa 'expert' sub-network, di mana router memilih subset expert aktif per input. Efisien: lebih banyak parameter dengan FLOPs lebih sedikit."
summary: "MoE: sparsely-activated. Mixtral 8x7B, GPT-4 (rumor), Switch Transformer (Google), DeepSeek-V3. Tradeoff: parameter besar, inference lebih murah dari dense equivalent."
date: 2026-06-21
updated: 2026-06-21
category: "concepts"
tags: ["moe", "mixture-of-experts", "LLM"]
aliases: ["campuran ahli"]
related: ["/concepts/transformer", "/concepts/large-language-model"]
references:
  - title: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Mixture_of_Experts_(MoE)"

quality: "good"
---

# Mixture of Experts

## Definisi

**MoE** adalah arsitektur neural network dengan banyak **expert sub-networks** (umumnya FFN/MLP), di mana **router** memilih subset expert yang aktif untuk setiap input.

## Cara Kerja

- **Router (gating network)** — memilih top-k expert
- **Expert networks** — sub-networks (biasanya identik strukturnya)
- **Sparse activation** — hanya sebagian parameter yang aktif per input

## Keuntungan

- **Parameter besar** (ratusan miliar) dengan **FLOPs lebih sedikit** dari dense model setara
- **Skalabilitas** — tambah expert tanpa naikkan biaya inference linear

## Contoh

- **Mixtral 8x7B** (Mistral, 2023) — 8 expert, top-2 aktif
- **GPT-4** (rumor, 2023) — 8 expert, ~220B parameter per expert
- **Switch Transformer** (Google, 2021) — 1 expert aktif
- **DeepSeek-V3** (2024) — 256 expert

