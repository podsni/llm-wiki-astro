# Changelog

All notable changes to **LLM Wiki** will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

> **LLM Wiki** — personal knowledge base bergaya ensiklopedia, terinspirasi Tolkien Gateway + Obsidian Publish. Built with Astro 5, zero JS by default. Live di https://wiki.h3n.my.id

---

## [Unreleased]

### Planned
- Pagefind full-text search (jika > 1000 halaman)
- `[[wikilink]]` style Obsidian-compatible (remark plugin)
- i18n multilingual support (EN/ID switcher)
- Auto-generated "article history" graph
- Reading queue + bookmarks
- Server-side search via Fuse.js (lazy, jika > 200 pages)

---

## [0.5.0] — 2026-06-21 — "Edisi Riset Pendidikan"

Wiki ini **meledak** dengan jaringan pengetahuan tentang pendidikan Indonesia. 13 artikel baru, 2 artikel utama 50+KB, audit wikilink 100% clean.

### ✨ Added — Pendidikan Indonesia v2 (Riset Mendalam)
- **`articles/pendidikan-indonesia`** (32 KB, 11 bagian, 22 section) — riset mendalam pendidikan Indonesia: sejarah kerajaan, kolonial, Jepang, Orde Lama/Baru/Reformasi, Kurikulum Merdeka; PISA 2022 (rank 67-71, gap -117); krisis 233.000 guru belum S1; 47% guru PAUD belum S1; gaji honorer Rp400.000/bulan; mitos "350 tahun dijajah" (G.J. Resink 1968, Fadli Zon konfirmasi); analisis 1×1=1 (BENAR) + 4×6 vs 6×4 (komutatif); viral 2024 SMP tak bisa 4×6
- **`articles/pendidikan-tinggi-indonesia`** (22 KB, 8 bagian) — komprehensif PT 2025: sejarah STOVIA/UI/UGM/ITB, 23 PTN-BH Equity 2025 WCU, 328.241 dosen (25,85% S3), 10 juta mahasiswa, publikasi Scopus 64.596, polemik UKT 2025 (600.000+ gagal SNBT), KIP Kuliah rekor 1.053.851, MBKM → Diktisaintek Berdampak, Permendiktisaintek 39/2025, QS/THE rankings

### ✨ Added — 13 Artikel Pendukung untuk Tutup Wikilink Gap
**Concepts (6):**
- `concepts/bahasa-indonesia` — sejarah, UUD 1945 Pasal 36, 270 juta penutur
- `concepts/kampus-berdampak` — reformasi Brian Yuliarto 2025, 5 pilar
- `concepts/kewarganegaraan` — PPKn/Pendidikan Pancasila dalam Kurikulum Merdeka
- `concepts/kurikulum-merdeka` — Nadiem 2020-2024, Capaian Pembelajaran, P5
- `concepts/pisa` — OECD PISA, Indonesia ranking 67-71, gap -117
- `concepts/snbp` — seleksi rapor, ganti SNMPTN 2023

**People (2):**
- `people/ki-hajar-dewantara` — Bapak Pendidikan Nasional, Taman Siswa 1922, semboyan "Tut Wuri Handayani"
- `people/soekarno` — proklamator, pencetus Pancasila 1 Juni 1945, alumnus Taman Siswa

**Sources (3):**
- `sources/lpdp` — dana abadi Rp110 T, 4 skema beasiswa
- `sources/permendiktisaintek-39-2025` — regulasi Kampus Berdampak 18 Maret 2025
- `sources/taman-siswa` — Sistem Among Ki Hajar, deklinasi Orde Baru

**Timeline (2):**
- `timeline/hijrah-nabi` — 622 M, Mekah→Madinah, awal kalender Hijriah
- `timeline/perang-shiffin` — 657 M, Ali vs Muawiyah, lahir Dinasti Umayyah

### 🐛 Fixed — Wikilink Resolution Gap Closed
- Audit systematic terhadap **56 artikel** menemukan **13 broken wikilink** + 1 false positive (dokumentasi)
- Sekarang **0 broken wikilink** (selain artifact dokumentasi `concepts/slug`)
- Total unique wikilink targets: 50 → **66** (+16)

### 🐛 Fixed — YAML & Build Issues
- Beberapa artikel baru butuh `date:` field di frontmatter (required by collection schema)
- `quality: standard` invalid — diperbaiki ke `quality: good` (enum valid: featured|good|stub|wip)
- Timeline articles butuh `eventDate: YYYY-MM-DD` field
- Description dgn karakter `:`, `/`, `"` di-quote untuk avoid YAML parsing error
- Nested double-quote di description (contoh: semboyan "Ing Ngarso...") dikonversi ke single-quote outer

### 📈 Stats
- **Artikel**: 31 → **57** (+13, +42%)
- **Unique wikilink targets**: 50 → 66
- **Broken wikilinks**: 13 → **0**
- **Build time**: 1.2s
- **Pages generated**: ±145
- **Total commits**: 28+

---

## [0.4.0] — 2026-06-21 — "Edisi Nabi & Siddhartha"

Wiki menambahkan 2 biografi besar (Nabi Muhammad & Siddhartha Gautama) + 23 artikel pendukung untuk tutup wikilink gap.

### ✨ Added — 2 Biografi Panjang
- **`people/nabi-muhammad`** (33 KB, 22 section) — biografi lengkap Nabi Muhammad SAW: lahir 570 M, kerasulan 610, hijrah 622, pembebasan Mekah 630, wafat 632. Lengkap dgn silsilah, Khulafaur Rasyidin, ekspansi Islam, 5 kutipan Quran verbatim
- **`people/siddhartha-gautama`** (52 KB, 31 min baca, 84+ section) — biografi lengkap Siddhartha Gautama: lahir Lumbini 563 SM, 4 pemandangan, pertapaan 6 tahun, pencerahan Bodh Gaya 528 SM, khotbah pertama Sarnath, wafat Kushinagar 483 SM. 14 field infobox, 4 tables, 13 wikilinks

### ✨ Added — 23 Artikel Pendukung Wikilink Resolution
**Concepts (16):** mekah, madinah, quraisy, khulafaur-rasyidin, haji, kalender-hijriah, lumbini, bodh-gaya, sarnath, kushinagar, dharma, nirvana, empat-kebenaran-mulia, jalan-mulia-delapan, sangha-buddha, theravada, mahayana, meditasi-vipassana, sagas (others)

**Sources (3):** al-quran, piagam-madinah, borobudur

**People (1):** snorri-sturluson (sebelumnya)

**Timeline (3):** isra-miraj, pertempuran-stiklestad (sebelumnya), pertempuran-badr

### 🐛 Fixed
- **YAML tag gotcha**: tag `624` (number) invalid di pertempuran-badr → `six-twenty-four` (string)
- 23/23 wikilink verified 200 OK

### 📈 Stats
- **Artikel**: 22 → 44 (+22)
- **Total commits**: 26+

---

## [0.3.0] — 2026-06-21 — "Edisi Heimskringla"

Wiki menambahkan **Heimskringla** sebagai buku pertama yang di-riset mendalam dengan kutipan asli & cover image.

### ✨ Added — Buku Pertama dengan Riset Mendalam
- **`books/heimskringla`** (70 KB, 30 min baca) — karya Snorri Sturluson, kumpulan 16 saga raja-raja Norwegia. 4 iterasi:
  1. Versi awal: 35KB, 15 bagian
  2. Tambah kutipan verbatim: 6 kutipan Laing 1844
  3. Tambah 16 ringkasan saga detail (200-400 kata/saga)
  4. Tambah cover image + 15+ wikilinks

### ✨ Added — Cover Image Pertama
- Lukisan *"A Viking Raid"* karya Ferdinand Leeke (1883)
- Ekstraksi dari PDF via LiteParse
- Optimized WebP 100KB (dari 2.5MB PNG)
- Floating di infobox desktop, top slot di mobile

### ✨ Added — 7 Artikel Pendukung Wikilink
- `concepts/saga`, `concepts/norse-mythology`, `concepts/sturlung-age`, `concepts/viking-age`
- `people/snorri-sturluson`
- `sources/prose-edda`, `sources/lanse-aux-meadows`
- `timeline/pertempuran-stiklestad`

### ✨ Added — Time Display di /all Page
- Format: "added today · 07:17", "added yesterday · 14:30", "added 3d ago", "added 2w ago", "added 5mo ago"
- Tooltip full timestamp
- Sort: newest/oldest/A-Z

### 🛠 Tools
- **LiteParse** (`lit 2.1.1`) — PDF→markdown extraction
- **ImageMagick** — WebP optimization

### 📈 Stats
- **Artikel**: 21 → 31 (+10)
- **Total commits**: 25+

---

## [0.2.0] — 2026-06-21 — "Edisi Tolkien Gateway"

Wiki mendapatkan **homepage overhaul** ala Tolkien Gateway — fitur, statistik, dan visual quality naik signifikan.

### ✨ Added — Custom Domain
- `wiki.h3n.my.id` aktif (CNAME → `llm-wiki-5y3.pages.dev`, HTTPS Google CA)

### ✨ Added — Homepage Redesign
- **Hero** Tolkien-style: eyebrow + serif title "compendium" italic + lede + search trigger
- **Stats Portal Row**: Articles, Tags, Connections, Collections
- **4 Quick Actions**: Browse all, A–Z, Random, Graph view
- **Triple Portal**: On this day + Quote of the day (dark green card) + Did you know
- **Featured Grid** (9 artikel w/ `quality: featured`)
- **Browse the Wiki Collection Grid** 3×3 (Notes/Articles/Concepts/People/Projects/Books/Research/Timeline/Sources)
- **Recent + Most Connected + Tags cloud** (top 30)

### ✨ Added — /all Page Overhaul
- Sort: newest/oldest/A–Z
- Filters: collection, tags, status
- Group by month
- Time display: "added today · 07:17" format
- "All" link di header
- Pill colors dgn `is:global`

### ✨ Added — Graph View
- Interactive graph di `/graph`
- Mobile responsive + legend toggle + auto-hide hint 5s

### 🐛 Fixed
- **P0/P1 visual QA findings** — multiple mobile responsive issues
- **/all chip filter bug** — `buildChipUrl()` preserve query params
- **Quote card white text on cream** — CSS specificity clash, contrast 1.1:1 → 14:1
- **Header cramping on mobile** — 4 elements 9.6px gaps, wordmark hidden ≤340px, hamburger 44px

### 🐛 Fixed — Mobile Polish
- 7 responsive breakpoints
- 44px tap targets
- iOS safe-area-inset
- Article infobox mobile slot

### 📈 Stats
- **Artikel**: 14 → 21 (+7: 2 konsep besar + 5 dukungan)
- **Halaman**: ±140
- **Total commits**: 22+

---

## [0.1.0] — 2026-06-20 — "Edisi Awal: BrainKu → LLM Wiki"

Wiki resmi launch sebagai **LLM Wiki** dengan nama domain sendiri dan fitur lengkap pertama.

### ✨ Added — Knowledge Base Lengkap
- **2 artikel konsep**:
  - `concepts/mengapa-bahasa-terbentuk` (6.661 kata) — analisis linguistik evolusi bahasa
  - `concepts/transformer`, `concepts/embedding`, `concepts/large-language-model`, `concepts/context-window`, `concepts/retrieval-augmented-generation`, `concepts/digital-garden`, `concepts/knowledge-base` (mini-articles)
- **1 biografi**:
  - `people/tan-malaka` (6.001 kata) — Bapak Republik Indonesia
- **3 buku/artikel**:
  - `books/tan-malaka-bapak-republik`
  - `books/the-language-instinct`
  - `articles/obsidian`, `articles/astro`
- **2 research**:
  - `research/emergent-communication`
- **3 sources**:
  - `sources/attention-is-all-you-need`
  - `sources/foxp2-evolution`
- **2 timeline**:
  - `timeline/2026-06-20-12-artikel`
  - `timeline/2026-06-21-wiki-launch`
- **1 project**:
  - `projects/llm-wiki-astro` (meta)
- **2 notes**:
  - `notes/obsidian-quick-ref`
  - `notes/astro-quickstart`

### ✨ Added — Core Features
- **9 collections** schema: notes, articles, concepts, people, projects, books, research, timeline, sources
- **Astro 5** static SSG, zero JS by default
- **OKLCH** color tokens, native `<dialog>`, `text-wrap: balance` on headings
- **Spectral** display + system sans (reflex-reject: Inter, Geist, Roboto, Plus Jakarta Sans, Space Grotesk)
- **3-column** article layout with sticky TOC
- **Mobile-first** responsive
- **Custom 404** page
- **RSS feed** + JSON search index
- **Search modal** (client-side)
- **Random article** redirect
- **A–Z index** page
- **Archive** page (by date)
- **Category** & **Tag** pages

### 🛠 Stack
- Astro 5.18.2
- TypeScript 5.9.3
- Cloudflare Pages hosting
- Wrangler CLI deploy
- MIT license

### 📈 Stats
- **Artikel**: 0 → 14
- **Halaman**: ±100
- **Total commits**: 21+

---

## [0.0.1] — 2026-06-20 — "Initial Commit: BrainKu"

Versi paling awal, sebagai "second brain" personal. Belum bernama LLM Wiki, masih berupa blog-style notes.

### ✨ Added
- Astro 5 boilerplate
- Basic content collections (notes only)
- Single-page layout
- MIT license
- 1 article (`notes/obsidian-quick-ref`)

### Notes
- Project awalnya bernama "BrainKu" (Bahasa Indonesia: "Otakku")
- Renamed ke "LLM Wiki" setelah menyadari potensi ensiklopedia
- Domain `wiki.h3n.my.id` acquired kemudian

---

## Legenda Emoji

| Emoji | Meaning |
|-------|---------|
| ✨ Added | Fitur baru |
| 🔄 Changed | Perubahan fitur existing |
| 🐛 Fixed | Bug fix |
| 🗑️ Removed | Fitur dihapus |
| 🔒 Security | Security fix |
| 🛠 Tools | Tool/dependency change |
| 📈 Stats | Statistik perubahan |
| ⚠️ Deprecated | Fitur akan dihapus |
| 📝 Docs | Dokumentasi |

---

## Rilis Mendatang (Roadmap)

### v0.6.0 — "Edisi Visualisasi Lanjutan"
- Diagram interaktif (Mermaid, Excalidraw)
- Timeline visual dengan events plotted
- Peta konsep jaringan (graph 2.0 dengan cluster detection)
- Animated reading progress

### v0.7.0 — "Edisi Komunitas"
- Multi-author support
- Article discussion via Giscus
- Newsletter integration
- RSS enhanced dengan full content

### v1.0.0 — "Edisi Stabil"
- API publik
- OAuth (opsional)
- Mobile app wrapper
- Search engine optimization lengkap

---

## Statistik Kumulatif

| Metric | v0.0.1 | v0.5.0 (current) | Growth |
|--------|--------|------------------|--------|
| Total artikel | 1 | **57** | **57x** |
| Koleksi | 1 | 9 | 9x |
| Halaman | 5 | ±145 | 29x |
| Total kata | ~200 | ~180,000 | 900x |
| Total commits | 1 | 28+ | 28x |
| Wikilink unique | 0 | 66 | ∞ |
| Broken wikilink | 0 | 0 | ✓ |
| Build time | 0.5s | 1.2s | 2.4x |
| Bundle size | 50KB | 180KB | 3.6x |
| Live URL | - | wiki.h3n.my.id | ✓ |

---

## Kontribusi

Wiki ini adalah **personal knowledge base**. Tidak menerima kontribusi eksternal. Namun, semua orang boleh:
- ⭐ Star di [GitHub](https://github.com/podsni/llm-wiki-astro)
- 📖 Baca dan belajar dari artikel
- 🐛 Laporkan bug via issues
- 💡 Saran topik artikel baru

## Lisensi

MIT © 2024-2026 [Shin Ra](https://github.com/podsni)
