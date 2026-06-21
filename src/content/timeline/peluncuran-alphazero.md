---
title: "Peluncuran AlphaZero"
description: "DeepMind mempublikasikan AlphaZero — algoritma RL yang belajar dari nol (self-play) dan menguasai catur, shogi, dan Go, mengalahkan Stockfish dan Elmo."
summary: "AlphaZero: MCTS + deep neural network + self-play RL. Belajar dari nol (no human data). Mengalahkan Stockfish (catur) & Elmo (shogi). 24 jam training = superhuman."
date: 2026-06-21
updated: 2026-06-21
eventDate: "2017-12-05"
category: "timeline"
tags: ["AI", "sejarah"]
aliases: []
related: ["/concepts/reinforcement-learning", "/people/david-silver", "/sources/google-deepmind"]
references:
  - title: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Peluncuran_AlphaZero"

quality: "good"
---

# Peluncuran AlphaZero

## Ringkasan

[DeepMind](/sources/google-deepmind) mempublikasikan paper AlphaZero pada 5 Desember 2017 — algoritma **reinforcement learning** yang belajar dari **nol** (self-play) dan menguasai **catur, shogi, dan Go** — mengalahkan champion dunia komputer (Stockfish, Elmo) dan program Go terkuat.

## Cara Kerja

- **Self-play** — tidak butuh data manusia
- **MCTS** (Monte Carlo Tree Search) untuk search
- **Deep neural network** — policy + value
- **Single algorithm** untuk semua game

## Pencapaian

| Game | Lawan | Hasil | Training |
|------|-------|-------|----------|
| Catur | Stockfish 8 | 28-0-72 (100 game) | 4 jam |
| Shogi | Elmo | 90-2-8 (100 game) | 2 jam |
| Go | AlphaGo Lee (2016) | 89-11 (100 game) | 8 jam |

## Signifikansi

- **General algorithm** — satu algoritma untuk 3 game berbeda
- **No human knowledge** — hanya aturan game
- **AlphaGo Zero** (pendahulunya) memenangkan **Go** dari nol tanpa data manusia

## Era Pasca

- **MuZero** (2019) — belajar tanpa model aturan
- **AlphaStar** (2019) — StarCraft II
- **AlphaProof** (2024) — matematika
- **AlphaGeometry** (2024) — geometri
- **OpenAI Five** (2018) — Dota 2

AlphaZero adalah **momen AGI paling dekat** — algoritma umum yang menguasai game kompleks tanpa data manusia.

