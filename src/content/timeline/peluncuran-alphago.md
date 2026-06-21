---
title: "AlphaGo Kalahkan Lee Sedol"
description: "DeepMind AlphaGo mengalahkan juara dunia Go Lee Sedol 4–1 dalam 5 game. Tonggak AI — Go dianggap game terakhir yang resisten terhadap AI karena kompleksitasnya."
summary: "AlphaGo: Monte Carlo tree search + deep neural networks + reinforcement learning. Go: 10^170 posisi (vs catur 10^120). Kemenangan ini mengejutkan dunia."
date: 2026-06-21
updated: 2026-06-21
eventDate: "2016-03-09"
category: "timeline"
tags: ["AI", "sejarah"]
aliases: []
related: ["/concepts/reinforcement-learning", "/people/demis-hassabis", "/people/david-silver", "/sources/google-deepmind"]
references:
  - title: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/AlphaGo_Kalahkan_Lee_Sedol"

quality: "good"
---

# AlphaGo vs Lee Sedol

## Ringkasan

Pada Maret 2016, [DeepMind](/sources/google-deepmind) **AlphaGo** mengalahkan [Lee Sedol](/people/lee-sedol), juara dunia Go 9-dan, dengan skor **4-1** dalam 5 game di Seoul, Korea Selatan. Pertandingan ini dianggap **tonggak AI** — banyak yang memprediksi AI butuh 10+ tahun lagi untuk mengalahkan Go champion.

## Kompleksitas Go

- **Posisi mungkin**: ~10^170 (vs catur 10^120, atom di alam semesta 10^80)
- **Branching factor**: 250 (vs catur 35)
- **Intuisi** lebih penting dari kalkulasi

## Arsitektur AlphaGo

- **Deep neural networks** (policy + value)
- **Monte Carlo tree search** (MCTS)
- **Reinforcement learning** — self-play
- **Training**: 1.920 CPU + 280 GPU (matches), 1 CPU + 1 GPU (runtime)

## Game Highlights

- **Game 2 (Move 37)**: AlphaGo membuat move yang awalnya dianggap blunder, ternyata genius. Komentator Go profesional **terkejut**.
- **Game 4 (Move 78)**: Lee Sedol membuat "Move of the Century" yang mengejutkan AlphaGo (white wedge invasion). AlphaGo **bermain salah** setelahnya.

## Dampak

- **AI legitimacy** — sebelumnya AI dianggap tidak punya "intuisi", AlphaGo membuktikannya
- **DeepMind** menjadi pusat perhatian (diakuisisi Google 2014)
- **Reinforcement learning** bangkit kembali
- Lee Sedol pensiun dari Go profesional pada 2019, sebagian karena AlphaGo
- **AlphaGo Zero** (2017) — belajar dari nol, lebih kuat
- **AlphaZero** (2017) — extend ke catur & shogi

## Legasi

AlphaGo adalah **momen kosmis kedua** AI modern (pertama: Deep Blue 1997). Setelah AlphaGo, banyak orang percaya **AGI mungkin** dalam dekade ini.

