---
title: "CLIP"
description: "Model OpenAI (2021) yang belajar menghubungkan teks dan gambar dengan contrastive learning. Fondasi DALL-E 2, Stable Diffusion, dan image generation modern."
summary: "CLIP: text-image contrastive learning, 400M image-text pairs, zero-shot image classification. Used in DALL-E 2, Stable Diffusion, dll."
date: 2026-06-21
updated: 2026-06-21
category: "concepts"
tags: ["clip", "multimodal", "AI"]
aliases: []
related: ["/concepts/diffusion-model", "/concepts/multimodal-ai"]
references:
  - title: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/CLIP"

quality: "good"
---

# CLIP

## Definisi

**CLIP** (Contrastive Language-Image Pre-training) adalah model multimodal dari [OpenAI](/sources/openai) yang belajar menghubungkan **teks dan gambar** menggunakan **contrastive learning** pada 400 juta image-text pairs.

## Inovasi

- **Zero-shot classification** — dapat mengklasifikasikan gambar tanpa training
- **Natural language supervision** — tidak butuh label eksplisit
- **Kontras** — menarik text embedding & image embedding yang match

## Dampak

- **DALL-E 2** — menggunakan CLIP untuk menyaring output
- **Stable Diffusion** — menggunakan CLIP text encoder
- **DALL-E 3** — CLIP-style training
- **Zero-shot vision** — populer di banyak aplikasi

