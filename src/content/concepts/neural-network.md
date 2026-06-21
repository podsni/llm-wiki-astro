---
title: "Neural Network — Jaringan Syaraf Tiruan"
description: "Model komputasi terinspirasi neuron biologis. Terdiri dari layer neuron yang saling terhubung dengan bobot yang dapat disesuaikan lewat training."
summary: "Neural network modern: input layer, hidden layers, output layer. Setiap neuron menerapkan weighted sum + activation function. Training dengan backpropagation + gradient descent."
date: 2026-06-21
updated: 2026-06-21
category: "concepts"
tags: ["neural-network", "deep-learning"]
aliases: ["jaringan syaraf tiruan", "JST", "artificial neural network", "ANN"]
related: ["/concepts/deep-learning", "/concepts/perceptron", "/concepts/backpropagation"]
references:
  - title: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Neural_Network"

quality: "good"
---

# Neural Network

## Definisi

**Neural network** (jaringan syaraf tiruan) adalah model komputasi yang terinspirasi dari cara kerja [neuron](/concepts/neuron-biologis) di otak biologis.

## Struktur

```
Input → [Hidden Layer 1] → [Hidden Layer 2] → ... → Output
```

Setiap neuron:
1. Menghitung weighted sum dari input
2. Menambahkan bias
3. Menerapkan activation function (ReLU, sigmoid, tanh, GELU)
4. Mengirim output ke neuron berikutnya

## Jenis

- **Feedforward** — informasi mengalir satu arah
- **Recurrent (RNN)** — ada loop, cocok untuk sequence
- **Convolutional (CNN)** — filter berbagi bobot, cocok untuk gambar
- **Transformer** — attention mechanism, cocok untuk bahasa

## Training

Training neural network = menyesuaikan bobot agar output sesuai target. Algoritma: [backpropagation](/concepts/backpropagation) + gradient descent.

## Sejarah

- 1943 — McCulloch-Pitts
- 1958 — Perceptron
- 1986 — Backpropagation
- 2012 — AlexNet, deep learning naik daun

