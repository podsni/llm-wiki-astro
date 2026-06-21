---
title: "Chain-of-Thought (CoT)"
description: "Teknik prompting di mana LLM diminta menunjukkan langkah penalaran sebelum jawaban akhir. Meningkatkan akurasi pada tugas reasoning (matematika, logika, multi-step)."
summary: "CoT (Wei et al. 2022) menunjukkan langkah penalaran intermediate. Varian: Self-Consistency, Tree-of-Thoughts, Reasoning models (o1, DeepSeek-R1) meng-internalisasi CoT."
date: 2026-06-21
updated: 2026-06-21
category: "concepts"
tags: ["CoT", "reasoning", "LLM"]
aliases: ["rantai pemikiran"]
related: ["/concepts/prompt-engineering", "/concepts/large-language-model"]
references:
  - title: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Chain-of-Thought_(CoT)"

quality: "good"
---

# Chain-of-Thought

## Definisi

**Chain-of-Thought (CoT)** adalah teknik prompting di mana LLM diminta **menunjukkan langkah penalaran** sebelum jawaban final.

## Makalah Kunci

- **Wei et al. 2022** — *"Chain-of-Thought Prompting Elicits Reasoning in Large Language Models"*
- **Wang et al. 2022** — *Self-Consistency* (sample banyak, vote)
- **Yao et al. 2023** — *Tree-of-Thoughts*
- **DeepSeek-R1 (2025)** — CoT di-internalisasi dalam training

## Contoh

**Tanpa CoT:**
```
Q: Berapa 17 × 24?
A: 408 (mungkin salah)
```

**Dengan CoT:**
```
Q: Berapa 17 × 24? Tunjukkan langkah-langkah.
A: 17 × 24 = 17 × (25 - 1) = 425 - 17 = 408
```

