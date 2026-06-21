---
title: "AlexNet"
description: "Convolutional Neural Network 8-layer yang memenangkan ImageNet 2012 dengan margin 10,8%. Dipimpin Alex Krizhevsky, Ilya Sutskever, Geoffrey Hinton. Memicu revolusi deep learning."
summary: "AlexNet: 8 layer (5 conv + 3 FC), ReLU, dropout, GPU training (2x GTX 580). ImageNet 2012 top-5 error 15,3% vs runner-up 26,2%."
date: 2026-06-21
updated: 2026-06-21
category: "concepts"
tags: ["alexnet", "cnn", "deep-learning"]
aliases: []
related: ["/concepts/convolutional-neural-network", "/concepts/deep-learning", "/timeline/imagenet-2012"]
references:
  - title: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/AlexNet"

quality: "good"
---

# AlexNet

## Definisi

**AlexNet** adalah CNN 8-layer yang dirancang oleh Alex Krizhevsky, Ilya Sutskever, dan Geoffrey Hinton (University of Toronto) yang memenangkan **ImageNet 2012** dengan margin 10,8% — memicu revolusi deep learning.

## Arsitektur

- 8 layer (5 convolutional + 3 fully connected)
- 60 juta parameters
- 650.000 neurons
- ReLU activation
- Dropout
- Local Response Normalization
- Max pooling
- 1000-class softmax output

## Inovasi

1. **ReLU** — training 6x lebih cepat dari tanh
2. **GPU training** — 2x NVIDIA GTX 580
3. **Dropout** — regularisasi
4. **Data augmentation** — flip, crop, PCA jitter

## Skor

- **Top-5 error**: 15,3%
- **Runner-up** (ZXNet): 26,2%
- **Margin**: 10,8%

## Dampak

AlexNet adalah **singa tunggal** yang memulai revolusi deep learning. Setelah 2012, hampir semua computer vision menggunakan deep learning, dan deep learning mulai menyebar ke NLP, speech, dan bidang lain.

