---
title: "Recurrent Neural Network (RNN)"
description: "Arsitektur neural network untuk memproses data sekuensial (teks, audio, time series) dengan hidden state yang membawa memori dari langkah sebelumnya."
summary: "RNN: input sequence → output sequence. Varian: LSTM (1997), GRU (2014). Banyak digantikan Transformer sejak 2017 untuk NLP."
date: 2026-06-21
updated: 2026-06-21
category: "concepts"
tags: ["rnn", "deep-learning"]
aliases: ["RNN"]
related: ["/concepts/neural-network", "/concepts/lstm"]
references:
  - title: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Recurrent_Neural_Network_(RNN)"

quality: "good"
---

# Recurrent Neural Network

## Definisi

**RNN** memproses data sekuensial dengan **hidden state** yang diperbarui di setiap langkah waktu, membawa informasi dari masa lalu.

## Masalah

- **Vanishing gradients** — gradien menghilang untuk sequence panjang
- **Exploding gradients** — gradien meledak

## Solusi

- **LSTM** (Long Short-Term Memory, 1997) — gate forget/input/output
- **GRU** (Gated Recurrent Unit, 2014) — versi sederhana LSTM
- **Bidirectional RNN** — proses sequence dua arah

## Era Pasca-2017

Transformer ([Vaswani et al. 2017](/people/ashish-vaswani)) menggeser RNN untuk NLP karena:
1. Parallelizable (RNN sequential)
2. Attention lebih baik untuk long-range dependencies
3. Skala lebih baik

