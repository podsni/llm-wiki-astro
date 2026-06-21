---
title: "Sistem Kendali (Control Systems)"
description: "Disiplin teknik yang mempelajari sistem dinamis dengan feedback. Teori kontrol otomatis modern berasal dari Wiener, Maxwell, dan PID controller (1920-an)."
summary: "Control systems: open-loop vs closed-loop. PID controller (Proportional-Integral-Derivative) adalah standar industri. State-space (Kalman filter). Aplikasi: aerospace, robotics, process control."
date: 2026-06-21
updated: 2026-06-21
category: "concepts"
tags: ["kontrol", "engineering"]
aliases: ["control systems"]
related: ["/concepts/umpan-balik", "/concepts/reinforcement-learning"]
references:
  - title: "Wikipedia"
    url: "https://en.wikipedia.org/wiki/Sistem_Kendali_(Control_Systems)"

quality: "good"
---

# Sistem Kendali

## Definisi

**Sistem kendali** (control systems) adalah sistem yang **mengatur perilaku** sistem lain menggunakan feedback loop.

## Tipe

- **Open-loop** — output tidak mempengaruhi input
- **Closed-loop (feedback)** — output dikoreksi berdasarkan referensi

## Komponen Klasik

- **Plant** — sistem yang dikontrol
- **Sensor** — mengukur output
- **Controller** — menghitung koreksi
- **Actuator** — mengaplikasikan koreksi

## Algoritma

- **PID** (Proportional-Integral-Derivative) — standar industri sejak 1920-an
- **State-space** (modern)
- **Kalman filter** (1960) — estimasi state dari observasi noisy
- **LQR** (Linear Quadratic Regulator)
- **MPC** (Model Predictive Control)

## Aplikasi

- **Aerospace** — autopilot, roket
- **Robotika** — motion control
- **Proses industri** — kimia, manufacturing
- **Otomotif** — cruise control, ABS

