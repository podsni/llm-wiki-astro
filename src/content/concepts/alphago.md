---
title: "AlphaGo"
description: "Program Go yang dikembangkan DeepMind, mengalahkan Lee Sedol 4-1 pada 2016. Tonggak AI — Go dianggap game terakhir yang resisten terhadap AI."
summary: "AlphaGo: deep neural networks (policy + value) + Monte Carlo tree search + reinforcement learning. Pertama kalahkan manusia di Go."
date: 2026-06-21
updated: 2026-06-21
category: "concepts"
tags: ["alphago", "AI", "game"]
aliases: []
related: ["/concepts/reinforcement-learning", "/timeline/peluncuran-alphago", "/people/david-silver"]
references:
  - title: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/AlphaGo"

quality: "good"
---

# AlphaGo

## Definisi

**AlphaGo** adalah program [Go](/concepts/go) yang dikembangkan oleh [DeepMind](/sources/google-deepmind) yang mengalahkan juara dunia Go [Lee Sedol](/people/lee-sedol) 4-1 pada Maret 2016. Tonggak AI.

## Arsitektur

- **Policy network** — prediksi move terbaik
- **Value network** — evaluasi posisi
- **Monte Carlo Tree Search (MCTS)** — search algorithm
- **Reinforcement learning** — training dari self-play
- **Supervised learning** dari data Go profesional

## Pencapaian

- **Lee Sedol match (2016)**: 4-1
- **Ke Jie match (2017)**: 3-0
- **AlphaGo Zero (2017)**: belajar dari nol, lebih kuat
- **AlphaZero (2017)**: extend ke catur & shogi

