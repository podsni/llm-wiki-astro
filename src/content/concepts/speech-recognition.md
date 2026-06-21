---
title: "Speech Recognition — Pengenalan Suara"
description: "AI yang mengkonversi audio suara menjadi teks. Aplikasi: voice assistant, transcription, captioning, dictation. Era modern: Whisper, wav2vec, Conformer."
summary: "Speech recognition: speech-to-text. HMM-GMM (pra-2015), DNN (2015+), Transformer (2020+), Whisper (2022). Akurasi >95% di banyak benchmark."
date: 2026-06-21
updated: 2026-06-21
category: "concepts"
tags: ["speech-recognition", "AI", "audio"]
aliases: ["pengenalan suara", "automatic speech recognition", "ASR"]
related: ["/concepts/nlp", "/concepts/multimodal-ai"]
references:
  - title: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Speech_Recognition"

quality: "good"
---

# Speech Recognition

## Definisi

**Speech recognition** (ASR - Automatic Speech Recognition) adalah teknologi yang **mengkonversi audio suara menjadi teks**.

## Sejarah

- **1952** — Audrey (Bell Labs) — recognizer digit
- **1971** — Harpy (CMU) — 1000 kata
- **1980-an** — Hidden Markov Models (HMM)
- **1990-an** — commercial dictation (Dragon NaturallySpeaking)
- **2000-an** — large vocabulary continuous speech recognition (LVCSR)
- **2010-an** — Deep Neural Networks (DNN)
- **2016+** — end-to-end deep learning (DeepSpeech, wav2vec, Conformer)
- **2022** — **Whisper** (OpenAI) — multilingual, robust
- **2024+** — multimodal speech (audio + visual)

## Sistem Modern

- **Whisper** (OpenAI) — multilingual 99 bahasa
- **Google Cloud Speech-to-Text**
- **AWS Transcribe**
- **Azure Speech**
- **AssemblyAI, Deepgram**
- **Apple Dictation**

## Aplikasi

- Voice assistants (Siri, Google Assistant, Alexa)
- Transcription (Otter, Fireflies, Rev)
- Subtitle/captioning
- Medical dictation
- Customer service analytics
- Real-time translation

## Akurasi

Pada clean English, modern systems mencapai **< 5% WER** (Word Error Rate) — mendekati manusia. Pada noisy/accented, masih challenging.

