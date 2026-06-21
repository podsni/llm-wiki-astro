---
title: "Hallucination — Halusinasi AI"
description: "Ketika AI menghasilkan informasi yang **kelihatannya benar tapi salah** — mengutip fakta, paper, atau sumber yang tidak ada. Masalah utama LLM."
summary: "Hallucination: intrinsic (kontradiksi internal) vs extrinsic (kontradiksi fakta). Mitigasi: RAG, fine-tuning, RLHF, self-consistency, uncertainty estimation. Belum terpecahkan sempurna."
date: 2026-06-21
updated: 2026-06-21
category: "concepts"
tags: ["hallucination", "LLM"]
aliases: ["halusinasi"]
related: ["/concepts/llm", "/concepts/ai-safety"]
references:
  - title: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Hallucination"

quality: "good"
---

# Hallucination

## Definisi

**Hallucination** adalah ketika model AI menghasilkan output yang **kelihatannya koheren dan percaya diri tapi salah secara faktual** — mengutip paper yang tidak ada, fakta yang tidak benar, atau reasoning yang keliru.

## Jenis

- **Intrinsic** — output kontradiksi dengan input
- **Extrinsic** — output kontradiksi dengan dunia nyata
- **Factuality hallucination** — salah fakta
- **Faithfulness hallucination** — tidak sesuai prompt

## Mitigasi

- **RAG** (Retrieval-Augmented Generation) — ambil dari sumber
- **RLHF** — belajar "tidak tahu"
- **Self-consistency** — sample banyak, vote
- **Fact-checking tools**
- **Uncertainty estimation** — model bilang "tidak yakin"
- **Domain fine-tuning**

