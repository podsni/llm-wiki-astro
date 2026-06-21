---
title: "LeNet"
description: "CNN pertama yang sukses (1998) oleh Yann LeCun. Digunakan untuk pengenalan digit tulisan tangan (cek dan邮政编码). Arsitektur dasar CNN modern."
summary: "LeNet-5 (1998): 7-layer CNN (3 conv + 2 pool + 2 FC), 60K parameters. Digunakan untuk digit recognition. Tonggak CNN modern."
date: 2026-06-21
updated: 2026-06-21
category: "concepts"
tags: ["lenet", "cnn", "deep-learning"]
aliases: []
related: ["/concepts/convolutional-neural-network", "/people/yann-lecun"]
references:
  - title: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/LeNet"

quality: "good"
---

# LeNet

## Definisi

**LeNet-5** adalah CNN pertama yang sukses secara praktis, diciptakan oleh [Yann LeCun](/people/yann-lecun) di Bell Labs pada 1998. Digunakan untuk **pengenalan digit tulisan tangan** (cek bank dan邮政编码 AS).

## Arsitektur

- **7 layer** (3 convolutional + 2 pooling + 2 fully connected)
- **60.000 parameters**
- **Input**: 32x32 grayscale
- **Output**: 10 digit (0-9)

## Signifikansi

LeNet adalah **blueprint CNN modern** — convolutional layer, pooling layer, fully connected layer. Semua arsitektur CNN modern (AlexNet, VGG, ResNet, EfficientNet) adalah **evolusi** dari LeNet.

## Legacy

LeNet menunjukkan bahwa CNN **bekerja** untuk image recognition, jauh sebelum AlexNet 2012. Tapi karena:
1. **Compute** kurang (CPU only)
2. **Data** kurang
3. **SVM** dan feature engineering mendominasi

LeNet tidak memicu revolusi. Baru pada 2012, **AlexNet** memicu revolusi deep learning.

