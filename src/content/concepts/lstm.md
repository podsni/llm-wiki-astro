---
title: "LSTM — Long Short-Term Memory"
description: "Varian RNN yang mengatasi vanishing gradient dengan gate mechanism (forget, input, output). Diciptakan Hochreiter & Schmidhuber 1997. Standar NLP sebelum Transformer."
summary: "LSTM: cell state + 3 gate (forget, input, output). Sekuensial, susah parallelize. Digantikan Transformer 2017+ untuk NLP. Masih digunakan untuk time series, speech."
date: 2026-06-21
updated: 2026-06-21
category: "concepts"
tags: ["lstm", "rnn", "deep-learning"]
aliases: []
related: ["/concepts/recurrent-neural-network", "/concepts/neural-network"]
references:
  - title: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/LSTM"

quality: "good"
---

# LSTM

## Definisi

**LSTM** (Long Short-Term Memory) adalah varian [RNN](/concepts/recurrent-neural-network) yang mengatasi masalah **vanishing gradient** dengan menggunakan **gate mechanism**.

## Komponen

- **Cell state** (Cₜ) — 'memory' yang mengalir melalui waktu
- **Forget gate** (fₜ) — memutuskan apa yang dibuang dari cell state
- **Input gate** (iₜ) — memutuskan apa yang ditambahkan ke cell state
- **Output gate** (oₜ) — memutuskan apa yang di-outputkan

## Sejarah

- **1997** — Hochreiter & Schmidhuber
- **2000-an** — Graves et al. (deep learning LSTM)
- **2013–2017** — Standar NLP, speech recognition
- **2017+** — Banyak digantikan Transformer

