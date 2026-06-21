---
title: "Reinforcement Learning (RL)"
description: "Paradigma machine learning di mana agen belajar dengan berinteraksi dengan environment, menerima reward atau punishment. AlphaGo, RLHF untuk LLM."
summary: "RL: agen → action → environment → reward. Algoritma: Q-learning, DQN, PPO, GRPO. Aplikasi: game AI (AlphaGo, AlphaZero), robot, RLHF untuk LLM alignment."
date: 2026-06-21
updated: 2026-06-21
category: "concepts"
tags: ["reinforcement-learning", "AI"]
aliases: ["RL", "pembelajaran penguatan"]
related: ["/concepts/machine-learning", "/concepts/rlhf"]
references:
  - title: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Reinforcement_Learning_(RL)"

quality: "good"
---

# Reinforcement Learning

## Definisi

**Reinforcement learning** (RL) adalah paradigma [ML](/concepts/machine-learning) di mana **agen** belajar dengan **berinteraksi** dengan environment, menerima **reward** atau **punishment**.

## Komponen

- **Agent** — pengambil keputusan
- **Environment** — dunia tempat agen berada
- **State** — representasi situasi
- **Action** — pilihan agen
- **Reward** — feedback skalar
- **Policy** — strategi agen

## Algoritma

- **Q-learning** (1989)
- **DQN** (Deep Q-Network, 2013) — DeepMind
- **Policy Gradient** (REINFORCE, 1992)
- **Actor-Critic** (A2C, A3C)
- **PPO** (Proximal Policy Optimization, 2017) — OpenAI
- **GRPO** (Group Relative Policy Optimization, 2024) — DeepSeek

## Aplikasi

- **Game AI** — AlphaGo, AlphaZero, OpenAI Five (Dota 2)
- **Robotics** — locomotion, manipulation
- **RLHF** — alignment LLM
- **Autonomous driving**

