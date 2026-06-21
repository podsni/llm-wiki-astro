---
title: "Perceptron"
description: "Neural network 1-layer yang ditemukan Frank Rosenblatt 1958. Unit dasar neural network modern. Kritik Minsky-Papert 1969 menyebabkan 'neural network winter'."
summary: "Perceptron: weighted sum + step function. Mark I hardware (1958). Keterbatasan: tidak bisa solve XOR (Minsky-Papert 1969). Multilayer perceptron (MLP) + backpropagation memecahkan."
date: 2026-06-21
updated: 2026-06-21
category: "concepts"
tags: ["perceptron", "neural-network", "sejarah"]
aliases: []
related: ["/concepts/neural-network", "/concepts/backpropagation"]
references:
  - title: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Perceptron"

quality: "good"
---

# Perceptron

## Definisi

**Perceptron** adalah model neural network paling sederhana — satu neuron buatan yang mengambil beberapa input, memberikan bobot, dan menghasilkan output biner (0 atau 1).

## Formula

```
output = f(Σ(wᵢxᵢ) + b)
```
dimana f adalah step function (Heaviside).

## Sejarah

- **1958** — Frank Rosenblatt (Cornell) membangun Mark I Perceptron hardware
- **1960** — Perceptron bisa mengenali huruf
- **1969** — Minsky & Papert, *Perceptrons* — buktikan keterbatasan (XOR)
- **1986** — Multilayer Perceptron + backpropagation memecahkan

