---
title: "SSM — State Space Model"
description: "Arsitektur neural network untuk sequence modeling yang efisien untuk long sequences. Mamba (2023) adalah implementasi modern yang populer. Saingan Transformer."
summary: "SSM: S4, Mamba, Mamba-2. Linear complexity, not quadratic seperti Transformer. Panjang sequence (1M+ token) lebih efisien. Hybrid dengan Transformer populer."
date: 2026-06-21
updated: 2026-06-21
category: "concepts"
tags: ["ssm", "mamba", "deep-learning"]
aliases: ["state space model"]
related: ["/concepts/transformer", "/concepts/neural-network"]
references:
  - title: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/SSM"

quality: "good"
---

# SSM

## Definisi

**SSM** (State Space Model) adalah kelas arsitektur neural network untuk **sequence modeling** yang **lebih efisien dari Transformer untuk long sequences**.

## Masalah Transformer

- **Self-attention** punya kompleksitas **O(n²)** — quadratic dengan sequence length
- Untuk sequence 100K-1M token, ini mahal memory & compute

## SSM Cara Kerja

- **Hidden state** direpresentasikan sebagai continuous-time dynamical system
- **Linear** dalam sequence length
- **Selectively** scan (Mamba) untuk content-based reasoning
- Bisa parallelized

## Model

- **S4** (2021) — original
- **H3** (2022) — Hungry Hungry Hippos
- **Mamba** (2023) — Albert Gu & Tri Dao — populer
- **Mamba-2** (2024) — lebih cepat
- **Jamba** (2024) — hybrid Mamba-Transformer (AI21)
- **Zamba** (2024) — Zyphra
- **Falcon Mamba** (2024) — 7B parameter

## Aplikasi

- **Long context** LLM
- **Time series**
- **Audio/video processing**
- **Genome** modeling
- **Replacement** atau **complement** Transformer

## Tradeoff

- **Keunggulan**: panjang sequence (1M+), memory efficiency
- **Kelemahan**: sulit untuk retrieval (vs attention), tooling lebih sedikit
- **Status**: hybrid Mamba-Transformer adalah tren

