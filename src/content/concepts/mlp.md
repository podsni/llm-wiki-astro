---
title: "MLP — Multi-Layer Perceptron"
description: "Neural network dengan minimal 1 hidden layer (vs perceptron yang 0 hidden). Fondasi backpropagation dan deep learning. Juga disebut 'vanilla' atau 'feedforward' neural network."
summary: "MLP: 1+ hidden layer, fully connected. Backpropagation (1986) membuat training feasible. Pendahulu CNN, RNN, Transformer."
date: 2026-06-21
updated: 2026-06-21
category: "concepts"
tags: ["mlp", "neural-network", "deep-learning"]
aliases: ["Multi-Layer Perceptron"]
related: ["/concepts/neural-network", "/concepts/backpropagation"]
references:
  - title: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/MLP"

quality: "good"
---

# MLP

## Definisi

**MLP** (Multi-Layer Perceptron) adalah [neural network](/concepts/neural-network) dengan minimal **1 hidden layer** — berbeda dari perceptron (1-layer) yang tidak punya hidden layer.

## Arsitektur

```
Input → [Hidden Layer 1] → [Hidden Layer 2] → ... → Output
```

Setiap layer fully connected ke layer berikutnya.

## Sejarah

- **1958** — Perceptron (1 layer) — Rosenblatt
- **1969** — Minsky-Papert buktikan keterbatasan 1-layer
- **1986** — Backpropagation memungkinkan training MLP multi-layer
- **2006+** — Deep learning dengan MLP
- **Sekarang** — MLP masih digunakan sebagai building block (di Transformer FFN, dll)

## Aplikasi

- **Tabular data** (terbaik untuk data terstruktur)
- **Feature learning** — embedding
- **Building block** — di Transformer (FFN)
- **Simple classification/regression**

## Varian

- **Residual MLP** — dengan skip connections
- **MLP-Mixer** (2021) — untuk vision, saingan ViT
- **gMLP** (2021)
- **sMLP** (2023)

