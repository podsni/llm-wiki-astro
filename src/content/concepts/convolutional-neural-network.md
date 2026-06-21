---
title: "Convolutional Neural Network (CNN)"
description: "Arsitektur neural network yang menggunakan convolution layer untuk pengenalan pola pada gambar dan video. LeNet (1989), AlexNet (2012), ResNet (2015)."
summary: "CNN didesain oleh Yann LeCun (LeNet 1989) untuk pengenalan digit. AlexNet 2012 memenangkan ImageNet dengan margin 10%. Modern CNN: ResNet, EfficientNet, ConvNeXt."
date: 2026-06-21
updated: 2026-06-21
category: "concepts"
tags: ["cnn", "deep-learning", "computer-vision"]
aliases: ["CNN", "ConvNet"]
related: ["/concepts/neural-network", "/concepts/deep-learning"]
references:
  - title: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Convolutional_Neural_Network_(CNN)"

quality: "good"
---

# Convolutional Neural Network

## Definisi

**CNN** (ConvNet) adalah arsitektur [neural network](/concepts/neural-network) yang didesain khusus untuk memproses data grid (gambar, video) dengan operasi **konvolusi**.

## Arsitektur

- **Convolution layer** — filter yang bergeser pada input, mendeteksi pola lokal
- **Pooling layer** — downsampling (max pooling, average pooling)
- **Fully connected layer** — classifier akhir

## CNN Penting

- **LeNet-5** (1998) — digit tulisan tangan
- **AlexNet** (2012) — ImageNet winner
- **VGG-16** (2014) — 16 layer, simple
- **GoogLeNet/Inception** (2014)
- **ResNet** (2015) — residual connections, 152 layer
- **EfficientNet** (2019)
- **ConvNeXt** (2022) — modernize CNN dengan ide Transformer

