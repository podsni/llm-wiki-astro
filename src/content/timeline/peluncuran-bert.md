---
title: "Peluncuran BERT"
description: "Google merilis BERT (Bidirectional Encoder Representations from Transformers) — transformer encoder-only yang membaca teks dua arah. Merevolusi NLP search."
summary: "BERT: bidirectional Transformer encoder, 110M (base) / 340M (large) parameters. Pre-trained dengan Masked LM + Next Sentence Prediction. Google Search pakai BERT sejak 2019."
date: 2026-06-21
updated: 2026-06-21
eventDate: "2018-10-11"
category: "timeline"
tags: ["AI", "sejarah"]
aliases: []
related: ["/concepts/transformer", "/concepts/nlp", "/sources/google-ai"]
references:
  - title: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Peluncuran_BERT"

quality: "good"
---

# Peluncuran BERT

## Ringkasan

[Google](/sources/google-ai) merilis paper BERT (*Bidirectional Encoder Representations from Transformers*) pada 11 Oktober 2018 — model bahasa berbasis **Transformer encoder** yang membaca teks **dua arah** (kiri-ke-kanan DAN kanan-ke-kiri).

## Inovasi

- **Bidirectional context** — semua layer melihat konteks dua arah
- **Masked Language Modeling (MLM)** — 15% token di-mask, model prediksi
- **Next Sentence Prediction (NSP)** — prediksi apakah kalimat B mengikuti A
- **Transformer encoder-only** (bukan decoder seperti GPT)

## Varian

- **BERT-Base** — 110M parameters
- **BERT-Large** — 340M parameters

## Dampak

- **SOTA di 11 NLP benchmark**
- **Google Search** mengadopsi BERT (2019) — berdampak ke 10% pencarian AS
- **Menginspirasi** RoBERTa, ALBERT, DistilBERT, dll
- **Menjadikan pre-trained model standar** di NLP

## Era Pasca BERT

- **RoBERTa** (2019) — Meta
- **ELECTRA** (2020) — lebih efisien
- **DeBERTa** (2020) — Microsoft
- **T5** (2019) — Google, encoder-decoder
- **ModernBERT** (2024) — updated

Bersama GPT-1, BERT adalah **pendiri era LLM modern**.

