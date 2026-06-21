---
title: "AI Energy & Compute"
description: "Konsumsi energi AI yang sangat besar untuk training model frontier. GPT-4 training: ~$100M+ listrik. Data center AI menyumbang 2-4% listrik global (2024)."
summary: "AI energy: frontier model training butuh listrik kota kecil. Data center AI 2-4% listrik global (2024, IEA). IEA prediksi naik ke >7% pada 2030."
date: 2026-06-21
updated: 2026-06-21
category: "concepts"
tags: ["ai-energy", "sustainability", "AI"]
aliases: ["energi AI"]
related: ["/concepts/ai-safety", "/concepts/llm"]
references:
  - title: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/AI_Energy_&_Compute"

quality: "good"
---

# AI Energy & Compute

## Definisi

**AI energy** adalah konsumsi energi dan compute yang dibutuhkan untuk **training dan menjalankan model AI**, terutama frontier LLM.

## Skala

- **GPT-3 training**: ~1,287 MWh (setara 120 rumah/tahun)
- **GPT-4 training**: ~$100M+ listrik (rumor)
- **Claude 3.5 Sonnet**: estimasi $10-30M
- **Data center AI**: 2-4% listrik global (2024, IEA)
- **Proyeksi 2030**: >7% listrik global (IEA)

## Komponen

- **Training**: ratusan-ribuan GPU, berminggu-minggu
- **Inference**: lebih murah per query, tapi volume sangat besar
- **Cooling**: data center cooling (1.5x listrik compute)
- **Water**: cooling & listrik (data center ~1M galon/hari)

## Dampak

- **Lingkungan**: emisi karbon besar
- **Cost**: model frontier makin mahal
- **Equity**: negara berkembang sulit akses
- **Geopolitik**: konsentrasi di negara dengan listrik murah

## Solusi

- **Efisiensi algoritma** — DeepSeek, distillation
- **Renewable energy** untuk data center
- **On-device AI** — kurangi cloud inference
- **Sparse models** — MoE
- **Better hardware** — TPU, edge chips

## Referensi

- **IEA Report** (2024) — Electricity 2024
- **Stanford AI Index 2024**
- **DeepMind Carbon Emissions** paper
- **MIT Technology Review** — AI's Carbon Footprint

