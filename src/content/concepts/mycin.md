---
title: "MYCIN"
description: "Expert system kedokteran (1972-1976) di Stanford oleh Edward Shortliffe. Mendiagnosis infeksi bakteri dan merekomendasikan antibiotik dengan akurasi setara ahli."
summary: "MYCIN: 600 aturan IF-THEN, backward chaining, certainty factors. Akurasi 69% (vs manusia 64%). Tidak pernah dipakai klinis karena masalah integrasi."
date: 2026-06-21
updated: 2026-06-21
category: "concepts"
tags: ["mycin", "expert-system", "AI"]
aliases: []
related: ["/concepts/expert-system", "/concepts/emycin"]
references:
  - title: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/MYCIN"

quality: "good"
---

# MYCIN

## Definisi

**MYCIN** adalah [expert system](/concepts/expert-system) kedokteran yang dikembangkan di **Stanford** (1972-1976) oleh Edward Shortliffe. Mendiagnosis **infeksi bakteri** dan merekomendasikan **antibiotik**.

## Fitur

- **~600 aturan** IF-THEN
- **Backward chaining** inference
- **Certainty factors** (handle uncertainty)
- **Natural language** dialog

## Pencapaian

- **Akurasi 69%** (vs manusia ahli 64%) dalam uji coba
- Tidak pernah dipakai klinis karena:
  1. Tidak terintegrasi dengan workflow RS
  2. FDA tidak punya regulasi
  3. Etiket tanggung jawab
  4. Sistem butuh banyak waktu

## Signifikansi

MYCIN adalah **demo bahwa expert system bisa melebihi manusia** di domain spesifik, sekaligus contoh **gagal adopsi** karena masalah non-teknis. Lesson berharga untuk medical AI modern.

