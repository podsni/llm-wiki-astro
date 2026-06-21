---
title: "Emergent Communication in Multi-Agent Systems"
description: "Penelitian tentang bagaimana agen AI mengembangkan 'bahasa' mereka sendiri melalui tekanan koordinasi."
summary: Riset tentang emergent communication di multi-agent AI — apakah mereka benar-benar mengembangkan bahasa?
date: 2024-09-01
status: in-progress
methodology: "Multi-agent reinforcement learning, referential game, compositionality analysis"
tags: [ai, multi-agent, emergent-communication, language, research, linguistics]
quality: stub
---

# Emergent Communication in Multi-Agent Systems

Penelitian tentang bagaimana agen AI mengembangkan **protokol komunikasi** mereka sendiri melalui tekanan koordinasi.

## Status: In Progress

## Latar Belakang

Pertanyaan sentral: **apakah bahasa harus innate**, atau bisa muncul dari tekanan koordinasi?

[Chomsky](https://en.wikipedia.org/wiki/Noam_Chomsky) berargumen bahasa terlalu kompleks untuk dipelajari dari data saja — harus ada **Universal Grammar** bawaan. Tapi riset **emergent communication** di multi-agent AI menunjukkan bahwa **beberapa fitur bahasa** (compositionality, Zipf's law) bisa muncul dari **tekanan koordinasi** saja, tanpa harus innate.

## Metodologi

- **Setup:** Dua atau lebih neural network dilatih untuk bermain *referential game* (satu melihat gambar, yang lain menebak)
- **Training:** Reinforcement learning untuk optimisasi *communication success*
- **Analysis:** Compositionality, Zipf's law, mutual exclusivity, dll

## Temuan Utama

- **Lazaridou et al. (2017, NeurIPS)**: Multi-agent mengembangkan bahasa dengan komposionalitas
- **Bouchacourt & Baroni (2018)**: Bahasa emergent memiliki Zipf-like distribution
- **Chaabouni et al. (2022)**: Beberapa universal linguistik muncul tanpa hard-coding
- **NeLLCom (2023)**: Replikasi trade-off word-order/case-marking

## Implikasi

Jika bahasa bisa muncul dari tekanan koordinasi di agen AI, ini menantang asumsi innate Chomsky. Tapi: apakah emergent communication benar-benar "bahasa" (ada makna, ada grounding), atau hanya "protokol"? Ini perdebatan yang belum selesai.

## Lihat juga

- [Mengapa Bahasa Terbentuk](/concepts/mengapa-bahasa-terbentuk) — konteks teoretis
- [AI Agent](/concepts/ai-agent) — aplikasi
- [Large Language Model](/concepts/large-language-model) — model bahasa modern
- [Embedding](/concepts/embedding) — representasi matematis
