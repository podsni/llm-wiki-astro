---
title: "Hopfield Network"
description: "Jaringan syaraf recurrent yang berfungsi sebagai associative memory. Dicetuskan John Hopfield (1982). Membuktikan bahwa jaringan neural dapat menyimpan dan merekonstruksi pola."
summary: "Hopfield network (1982): associative memory, energy-based, can store patterns. Membuktikan kembali bahwa neural networks useful. Nobel 2024 untuk Hopfield."
date: 2026-06-21
updated: 2026-06-21
category: "concepts"
tags: ["hopfield-network", "neural-network"]
aliases: []
related: ["/concepts/neural-network", "/people/john-hopfield"]
references:
  - title: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Hopfield_Network"

quality: "good"
---

# Hopfield Network

## Definisi

**Hopfield network** adalah jaringan syaraf **recurrent** yang berfungsi sebagai **associative memory** — dapat menyimpan pola dan merekonstruksi pola yang noisy/parsial.

## Sejarah

- **1982** — John Hopfield (Caltech) mempopulerkan
- **1984** — Hopfield network untuk TSP
- **2006** — **Boltzmann machines** (Hinton) menyederhanakan
- **2024** — Nobel Fisika untuk Hopfield (bersama Hinton)

## Cara Kerja

- **Energy function** — meminimalkan energy untuk sampai di state stabil
- **Binary** atau **continuous** activations
- **Hebbian learning** untuk menyimpan pola
- **Recall** — initial state noisy, evolve ke state stabil

## Signifikansi

Hopfield network (1982) **membangkitkan kembali** minat pada neural network setelah "AI winter" pertama. Ini juga bukti bahwa neural network dapat **menyimpan dan merekonstruksi informasi** — fondasi untuk memori di AI modern.

