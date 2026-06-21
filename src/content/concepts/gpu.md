---
title: "GPU — Graphics Processing Unit"
description: "Prosesor paralel yang awalnya untuk graphics, sekarang menjadi standar untuk training deep learning. NVIDIA mendominasi pasar AI GPU (H100, B200)."
summary: "GPU: paralel processing (ratusan-ribuan core), awalnya untuk graphics, sekarang standar deep learning. NVIDIA H100/B200, AMD MI300, Google TPU, Apple Neural Engine."
date: 2026-06-21
updated: 2026-06-21
category: "concepts"
tags: ["gpu", "hardware", "AI"]
aliases: []
related: ["/concepts/deep-learning", "/people/jensen-huang"]
references:
  - title: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/GPU"

quality: "good"
---

# GPU

## Definisi

**GPU** (Graphics Processing Unit) adalah **prosesor paralel** yang awalnya didesain untuk graphics (rendering, gaming), sekarang menjadi **standar untuk training deep learning**.

## Cara Kerja

- **Ratusan-ribuan core** kecil (vs CPU: 8-64 core besar)
- **SIMD** (Single Instruction Multiple Data) — paralel
- **Memory bandwidth** tinggi
- **Throughput-oriented** (vs latency di CPU)

## AI GPU Penting

| GPU | Tahun | Memory | Compute |
|-----|-------|--------|---------|
| NVIDIA K40 | 2013 | 12 GB | 4.3 TFLOPS |
| NVIDIA P100 | 2016 | 16 GB | 10.6 TFLOPS |
| NVIDIA V100 | 2017 | 32 GB | 125 TFLOPS |
| NVIDIA A100 | 2020 | 80 GB | 312 TFLOPS |
| NVIDIA H100 | 2022 | 80 GB | 1979 TFLOPS |
| NVIDIA B200 | 2024 | 192 GB | 4500 TFLOPS |

## Pesaing

- **NVIDIA** (90%+ market share AI)
- **AMD** (MI300X, MI325X)
- **Google TPU** (custom, internal)
- **Apple Neural Engine** (on-device)
- **Intel Gaudi**
- **AWS Trainium**

## Era AI

Tanpa GPU, **revolusi deep learning tidak mungkin** — AlexNet 2012 adalah CNN pertama yang menggunakan GPU. Sekarang training frontier model butuh **10.000-100.000 GPU**.

