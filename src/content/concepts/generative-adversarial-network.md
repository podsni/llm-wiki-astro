---
title: "Generative Adversarial Network (GAN)"
description: "Arsitektur deep learning dengan dua neural network (generator + discriminator) yang saling melatih. Dicetuskan Ian Goodfellow 2014. Pendorong image generation awal."
summary: "GAN: Generator menghasilkan fake, Discriminator membedakan real vs fake. Aplikasi: StyleGAN (wajah), CycleGAN (style transfer), BigGAN. Sekarang banyak digantikan diffusion model."
date: 2026-06-21
updated: 2026-06-21
category: "concepts"
tags: ["GAN", "generative-ai", "deep-learning"]
aliases: ["jaringan adversarial generatif"]
related: ["/concepts/generative-ai", "/concepts/deep-learning"]
references:
  - title: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Generative_Adversarial_Network_(GAN)"

quality: "good"
---

# Generative Adversarial Network

## Definisi

**GAN** diperkenalkan oleh [Ian Goodfellow](/people/ian-goodfellow) et al. pada 2014. Terdiri dari dua neural network yang saling bertarung:

- **Generator (G)** — membuat data palsu
- **Discriminator (D)** — membedakan data asli vs palsu

Training: G mencoba mengelabui D, D belajar membedakan. Equilibrium tercapai saat G menghasilkan data yang tidak bisa dibedakan dari asli.

## Variasi

- **DCGAN** (2015) — deep convolutional
- **StyleGAN** (2018–2024) — wajah realistis
- **CycleGAN** (2017) — unpaired image-to-image
- **BigGAN** (2018) — kelas ImageNet
- **Wasserstein GAN** (2017) — training stabil

