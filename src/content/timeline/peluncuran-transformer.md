---
title: "Paper 'Attention Is All You Need'"
description: "Makalah seminal dari Google Brain yang memperkenalkan arsitektur Transformer. Tidak menggunakan recurrence atau convolution, hanya attention mechanism. Mengubah sejarah AI."
summary: "Transformer: encoder-decoder, multi-head self-attention, positional encoding. 8 author (Vaswani, Shazeer, Parmar, Uszkoreit, Jones, Gomez, Kaiser, Polosukhin). Fondasi BERT, GPT, T5, LLaMA."
date: 2026-06-21
updated: 2026-06-21
eventDate: "2017-06-12"
category: "timeline"
tags: ["AI", "sejarah"]
aliases: []
related: ["/concepts/transformer", "/concepts/attention-mechanism", "/people/ashish-vaswani"]
references:
  - title: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Paper_'Attention_Is_All_You_Need'"

quality: "good"
---

# Paper 'Attention Is All You Need'

## Ringkasan

Paper **"Attention Is All You Need"** yang diterbitkan di arXiv pada 12 Juni 2017 (NeurIPS 2017) memperkenalkan arsitektur **Transformer** yang sepenuhnya berdasarkan **attention mechanism** — tanpa recurrence atau convolution. Paper ini mengubah AI selamanya.

## Penulis

Delapan peneliti dari Google Brain dan Google Research:
- [Ashish Vaswani](/people/ashish-vaswani) (penulis utama)
- Noam Shazeer
- Niki Parmar
- Jakob Uszkoreit
- Llion Jones
- Aidan N. Gomez
- Łukasz Kaiser
- Illia Polosukhin

## Inovasi

1. **Self-attention** — setiap token melihat semua token lain
2. **Multi-head attention** — beberapa attention paralel
3. **Positional encoding** — informasi posisi ditambahkan
4. **Encoder-decoder** architecture
5. **Fully parallelizable** — tidak seperti RNN

## Hasil

Paper mencapai **SOTA** di machine translation (WMT 2014 EN-DE, EN-FR) dengan **lebih murah training** dari model sebelumnya.

## Dampak Jangka Panjang

Paper ini menjadi **fondasi** dari:
- **BERT** (2018) — Google
- **GPT-1, GPT-2, GPT-3** (2018, 2019, 2020) — OpenAI
- **T5** (2019) — Google
- **LLaMA, LLaMA 2, LLaMA 3** (2023, 2023, 2024) — Meta
- **Claude** (2023+) — Anthropic
- **Gemini** (2023+) — Google
- **DeepSeek** (2024+)
- **Hampir semua** LLM modern

Pada 2026, paper ini menjadi **makalah paling banyak dikutip** dalam sejarah AI. Transformer adalah **CPU of AI** — arsitektur universal.

