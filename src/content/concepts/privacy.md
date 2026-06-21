---
title: "Privacy — Privasi"
description: "Hak individu untuk mengontrol data pribadi. AI meningkatkan tantangan privasi melalui face recognition, data training, inference attack, dan surveillance."
summary: "Privacy di era AI: GDPR (2018), CCPA (2020), differential privacy, federated learning, model memorization risk. Face recognition, deepfake, behavioral tracking."
date: 2026-06-21
updated: 2026-06-21
category: "concepts"
tags: ["privacy", "data-protection", "AI"]
aliases: ["privasi"]
related: ["/concepts/surveillance", "/concepts/ai-bias"]
references:
  - title: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Privacy"

quality: "good"
---

# Privacy

## Definisi

**Privacy** (privasi) adalah hak individu untuk **mengontrol data pribadi** — bagaimana dikumpulkan, digunakan, disimpan, dan dibagikan.

## Tantangan Era AI

- **Face recognition** — identifikasi tanpa consent
- **Data training** — model LLM dilatih pada data publik, tapi termasuk data pribadi
- **Model memorization** — model dapat "mengingat" data training (email, nomor telepon)
- **Inference attack** — extract informasi dari model
- **Adversarial** — re-identifikasi dari data "anonim"
- **Behavioral tracking** — microtargeting iklan, rekomendasi

## Regulasi

- **GDPR** (EU, 2018) — hak "right to be forgotten", consent, data portability
- **CCPA** (California, 2020) — similar
- **LGPD** (Brasil, 2020)
- **PIPEDA** (Kanada)
- **Indonesia PDP Law** (2022)
- **UU PDP Indonesia** (2024, full implementation)
- **China PIPL** (2021)

## Teknik Proteksi

- **Differential privacy** — tambah noise ke data
- **Federated learning** — model lokal, hanya gradient dikirim
- **Homomorphic encryption** — komputasi pada data terenkripsi
- **Secure multi-party computation**
- **Data minimization** — kumpulkan yang perlu saja
- **Anonymization** — meski sering bisa di-de-anonymize
- **On-device AI** — data tidak keluar device

## Tools

- **Signal** (messaging)
- **DuckDuckGo** (search)
- **ProtonMail** (email)
- **Tor** (anonymous browsing)
- **Apple Private Cloud Compute**

