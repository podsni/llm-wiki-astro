---
title: "Diffusion Model"
description: "Model generatif yang belajar membalik proses difusi — menambahkan noise ke gambar lalu belajar menghilangkannya. Fondasi Stable Diffusion, DALL-E 3, Imagen, Sora."
summary: "Diffusion model: forward (add noise) → reverse (denoise). DALL-E 2 (2022), Stable Diffusion (2022), Imagen (2022), Sora (2024). Latent diffusion lebih efisien (LDM)."
date: 2026-06-21
updated: 2026-06-21
category: "concepts"
tags: ["diffusion", "generative-ai"]
aliases: ["model difusi"]
related: ["/concepts/generative-ai", "/concepts/generative-adversarial-network"]
references:
  - title: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Diffusion_Model"

quality: "good"
---

# Diffusion Model

## Definisi

**Diffusion model** adalah kelas model generatif yang belajar **membalik proses difusi** — yaitu menambahkan noise secara bertahap ke gambar, lalu belajar **menghilangkan noise** untuk menghasilkan gambar baru.

## Cara Kerja

1. **Forward process** — tambahkan Gaussian noise secara bertahap ke gambar asli
2. **Reverse process** — train neural network (U-Net atau Transformer) untuk memprediksi & menghilangkan noise
3. **Sampling** — mulai dari random noise, denoise bertahap untuk menghasilkan gambar

## Tonggak

- **2015** — Deep Unsupervised Learning using Nonequilibrium Thermodynamics (Sohl-Dickstein)
- **2020** — DDPM (Ho et al.)
- **2022** — Latent Diffusion Models (Rombach et al.) → Stable Diffusion
- **2022** — DALL-E 2, Imagen, Parti
- **2024** — Sora (video diffusion)

