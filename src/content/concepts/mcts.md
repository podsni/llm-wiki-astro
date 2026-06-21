---
title: "MCTS — Monte Carlo Tree Search"
description: "Algoritma search yang menggabungkan tree search dengan random sampling. Fondasi AlphaGo, AlphaZero, dan game AI modern."
summary: "MCTS: 4 langkah - selection, expansion, simulation, backpropagation. Dipopulerkan AlphaGo 2016. Sekarang dipakai di game AI, planning, optimization."
date: 2026-06-21
updated: 2026-06-21
category: "concepts"
tags: ["mcts", "AI", "search"]
aliases: ["Monte Carlo Tree Search"]
related: ["/concepts/alphago", "/concepts/reinforcement-learning"]
references:
  - title: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/MCTS"

quality: "good"
---

# MCTS

## Definisi

**MCTS** (Monte Carlo Tree Search) adalah algoritma search yang menggabungkan **tree search** dengan **random sampling** (Monte Carlo).

## 4 Langkah

1. **Selection** — traverse tree dari root dengan UCT/PUCT
2. **Expansion** — tambah child node baru
3. **Simulation (rollout)** — random play sampai akhir
4. **Backpropagation** — update statistik node

## Sejarah

- **2006** — Rémi Coulom (Crazy Stone, Go program) mempopulerkan
- **2016** — AlphaGo menggunakan MCTS + deep neural networks
- **2017** — AlphaZero — pure MCTS + neural network
- **2019+** — MuZero, dll

## Aplikasi

- **Game AI** (Go, catur, shogi, hex, dll)
- **Planning** (robot, logistics)
- **Optimization** (combinatorial)
- **Drug discovery** (search molecule)
- **Theorem proving** (AlphaProof 2024)

