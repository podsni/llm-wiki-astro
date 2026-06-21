---
title: "Peluncuran OpenAI o1"
description: "OpenAI memperkenalkan o1 — LLM reasoning pertama yang 'berpikir' sebelum menjawab dengan chain-of-thought internal. Tonggak era reasoning models."
summary: "o1: internal CoT, test-time compute scaling. 4 varian (o1, o1-preview, o1-mini, o1-pro). SOTA di math (AIME), coding (HumanEval+), science (GPQA)."
date: 2026-06-21
updated: 2026-06-21
eventDate: "2024-09-12"
category: "timeline"
tags: ["AI", "sejarah"]
aliases: []
related: ["/concepts/reasoning", "/concepts/chain-of-thought", "/sources/openai"]
references:
  - title: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Peluncuran_OpenAI_o1"

quality: "good"
---

# Peluncuran OpenAI o1

## Ringkasan

[OpenAI](/sources/openai) memperkenalkan **o1** (dan o1-preview, o1-mini) pada 12 September 2024 — LLM **reasoning** pertama yang 'berpikir' sebelum menjawab menggunakan **internal chain-of-thought** yang di-train, bukan diminta.

## Paradigma Baru

Sebelum o1, **chain-of-thought** adalah teknik prompting (user minta AI "show your work"). Dengan o1, CoT di-internalisasi ke model — model menghasilkan ribuan token reasoning **secara internal** sebelum menjawab user.

## Pencapaian (saat peluncuran)

- **AIME 2024** (olimpiade matematika): **83%** (GPT-4o: 13%)
- **GPQA Diamond** (PhD-level science): **78%** (GPT-4o: 56%)
- **Codeforces** (competitive programming): **89% percentile**
- **HumanEval+**: **96%** (GPT-4o: 87%)

## Varian

- **o1-preview** — versi awal, September 2024
- **o1-mini** — lebih murah, lebih cepat
- **o1** — full version
- **o1-pro** — tier tertinggi, paling mahal
- **o3** (Desember 2024) — next gen reasoning
- **o3-mini** (Januari 2025) — open-weight

## Test-Time Compute Scaling

o1 memperkenalkan **test-time compute scaling** — model yang 'berpikir' lebih lama menghasilkan jawaban lebih baik. Ini paralel dengan **training compute scaling** (Chinchilla, scaling laws).

## Dampak

- **Reasoning models** menjadi tren utama
- **DeepSeek-R1** (Januari 2025) — open-source reasoning
- **Claude 3.5+ Sonnet** — extended thinking
- **Gemini 2.5 Thinking** — Google
- **o1, o3, o4-mini** — OpenAI series

o1 menandai **era reasoning models** — 2024-2026.

