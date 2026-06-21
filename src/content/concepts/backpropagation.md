---
title: "Backpropagation"
description: "Algoritma untuk melatih neural network multi-layer dengan menghitung gradien loss terhadap setiap bobot menggunakan chain rule. Dipopulerkan Rumelhart-Hinton-Williams 1986."
summary: "Backprop = forward pass → compute loss → backward pass (gradients) → update weights. Fondasi training hampir semua neural network modern."
date: 2026-06-21
updated: 2026-06-21
category: "concepts"
tags: ["backpropagation", "neural-network"]
aliases: ["backprop"]
related: ["/concepts/neural-network", "/concepts/deep-learning"]
references:
  - title: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Backpropagation"

quality: "good"
---

# Backpropagation

## Definisi

**Backpropagation** adalah algoritma untuk menghitung **gradien loss function** terhadap setiap bobot dalam neural network, menggunakan **chain rule** kalkulus.

## Langkah

1. **Forward pass** — hitung output layer-by-layer
2. **Compute loss** — bandingkan dengan target
3. **Backward pass** — hitung gradien dari output ke input
4. **Update weights** — w ← w - η·∇L (gradient descent)

## Sejarah

- **1970** — Linnainmaa (master's thesis)
- **1986** — Rumelhart, Hinton, Williams mempopulerkan
- **1989** — LeCun menggunakan untuk CNN (LeNet)
- **2010+** — GPU + ReLU membuat deep network bisa di-training

## Varian

- **SGD** (Stochastic Gradient Descent)
- **Momentum, Nesterov**
- **Adam** (Kingma & Ba, 2014) — paling populer
- **AdamW** — dengan weight decay

