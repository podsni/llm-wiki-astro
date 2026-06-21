---
title: "RLHF — Reinforcement Learning from Human Feedback"
description: "Teknik alignment LLM dengan belajar dari preferensi manusia. Human ranker menilai beberapa output model, reward model dilatih, lalu policy di-optimize dengan RL."
summary: "RLHF: pre-train → SFT (supervised) → reward model training (preferensi) → PPO/GRPO optimization. Digunakan GPT-3.5, ChatGPT, InstructGPT. Constitutional AI (Anthropic) variant dengan AI feedback."
date: 2026-06-21
updated: 2026-06-21
category: "concepts"
tags: ["rlhf", "alignment", "LLM"]
aliases: ["reinforcement learning from human feedback"]
related: ["/concepts/reinforcement-learning", "/concepts/alignment"]
references:
  - title: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/RLHF"

quality: "good"
---

# RLHF

## Definisi

**RLHF** adalah teknik untuk **menyelaraskan LLM dengan preferensi manusia** dengan tiga tahap:

1. **Supervised Fine-Tuning (SFT)** — fine-tune pada demo output yang ditulis manusia
2. **Reward Modeling** — manusia ranking beberapa output model → reward model belajar preferensi
3. **RL Optimization** — PPO (Proximal Policy Optimization) atau GRPO melatih LLM untuk maximize reward

## Sejarah

- **2017** — Christiano et al., *"Deep Reinforcement Learning from Human Preferences"*
- **2022** — InstructGPT (OpenAI) menunjukkan RLHF membuat GPT-3 mengikuti instruksi
- **2022** — ChatGPT (GPT-3.5 + RLHF) menjadi sukses viral
- **2023+** — Standar industri untuk alignment LLM

## Varian

- **Constitutional AI** (Anthropic) — AI feedback, bukan manusia
- **RLAIF** — RL from AI Feedback
- **DPO** (Direct Preference Optimization) — tanpa reward model terpisah
- **GRPO** (Group Relative Policy Optimization) — DeepSeek

