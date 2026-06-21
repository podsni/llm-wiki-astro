---
title: "Sejarah Kecerdasan Buatan — Dari Turing hingga Agentic AI"
description: "Sejarah lengkap kecerdasan buatan (AI) dari akar pemikirannya tahun 1940-an, konfrensi Dartmouth 1956, AI winter, expert systems, deep learning, hingga era LLM dan agentic AI 2025-2026."
summary: "Kecerdasan buatan (AI) lahir resmi pada Konfrensi Dartmouth 1956. Sejak itu melewati 2 AI winter, revolusi deep learning 2012, dan ledakan LLM 2022. Pada 2026, AI memasuki era agentic — model yang dapat menggunakan tool, menulis kode, dan menjalankan workflow multi-langkah secara otonom."
date: 2026-06-21
updated: 2026-06-21
category: "articles"
tags: ["sejarah", "kecerdasan-buatan", "teknologi", "komputer", "ilmu-komputer"]
aliases: ["sejarah AI", "history of AI", "sejarah artificial intelligence", "sejarah machine learning"]
related: ["/concepts/kecerdasan-buatan", "/concepts/machine-learning", "/concepts/deep-learning", "/concepts/transformer", "/concepts/large-language-model"]
references:
  - title: "Artificial Intelligence: A Modern Approach — Stuart Russell & Peter Norvig"
    url: "https://aima.cs.berkeley.edu/"
  - title: "Wikipedia: History of artificial intelligence"
    url: "https://en.wikipedia.org/wiki/History_of_artificial_intelligence"
  - title: "Wikipedia: AI winter"
    url: "https://en.wikipedia.org/wiki/AI_winter"
  - title: "Turing Test — Britannica"
    url: "https://www.britannica.com/technology/Turing-test"
  - title: "Dartmouth Conference proposal (1956)"
    url: "https://en.wikipedia.org/wiki/Dartmouth_workshop"

quality: "good"
---

# Sejarah Kecerdasan Buatan

> *"I propose to consider the question, 'Can machines think?'"* — **Alan Turing**, *Computing Machinery and Intelligence* (1950)

## Pendahuluan

**Kecerdasan buatan** (bahasa Inggris: *artificial intelligence*, disingkat **AI**) adalah cabang [ilmu komputer](/concepts/ilmu-komputer) yang bertujuan membuat mesin yang mampu melakukan tugas-tugas yang membutuhkan [kecerdasan](/concepts/kecerdasan) manusia — penalaran, pembelajaran, persepsi, pemahaman bahasa alami, dan pengambilan keputusan.

Perjalanan AI dari 1950-an hingga 2026 adalah kisah naik-turun yang dramatis: dua "musim dingin" (AI winter) ketika pendanaan dan minat publik anjlok, diselingi musim panas yang ditandai gebrakan teknis seperti [jaringan syaraf tiruan](/concepts/neural-network), [expert system](/concepts/expert-system), [deep learning](/concepts/deep-learning), dan akhirnya [large language model](/concepts/large-language-model) (LLM) yang mentransformasi industri teknologi global.

Artikel ini menelusuri sejarah AI dari akar filosofisnya (Turing 1950) hingga era [agentic AI](/concepts/agentic-ai) 2025-2026 — lengkap dengan tokoh, konsep, dan peristiwa penting.

---

## Era 1: Akar Pemikiran (1940–1956)

### Cybernetics dan Neural Networks Pertama

Sebelum kata "AI" diciptakan, fondasi teoritisnya sudah diletakkan oleh para pionir dari disiplin lain.

**1943 — McCulloch & Pitts: Model Neural Pertama**
[Warren McCulloch](/people/warren-mcculloch) dan [Walter Pitts](/people/walter-pitts) menerbitkan *"A Logical Calculus of the Ideas Immanent in Nervous Activity"* — makalah pertama yang memodelkan [neuron](/concepts/neuron-biologis) biologis sebagai threshold logic gate. Mereka membuktikan bahwa jaringan neuron sederhana secara teori dapat menghitung fungsi logika apapun. Ini menjadi cikal bakal [jaringan syaraf tiruan](/concepts/neural-network).

**1945–1953 — Cybernetics: Norbert Wiener**
[Norbert Wiener](/people/norbert-wiener), profesor MIT, menciptakan istilah **cybernetics** (dari kata Yunani *kybernetes*, "pengemudi") dalam buku *Cybernetics: Or Control and Communication in the Animal and the Machine* (1948). Cybernetics mempelajari kontrol dan komunikasi pada mesin dan makhluk hidup — fondasi untuk [umpan balik](/concepts/umpan-balik), [sistem kendali](/concepts/sistem-kendali), dan akhirnya [reinforcement learning](/concepts/reinforcement-learning).

**1949 — Hebb's Rule: Belajar di Jaringan Neural**
[Donald Hebb](/people/donald-hebb) menerbitkan *The Organization of Behavior* yang memperkenalkan **Hebbian learning**: "neurons that fire together, wire together" — aturan belajar pertama untuk jaringan syaraf yang tetap relevan hingga era [deep learning](/concepts/deep-learning) modern.

**1950 — Turing Test: "Can Machines Think?"**
[Alan Turing](/people/alan-turing) menerbitkan makalah legendaris *"Computing Machinery and Intelligence"* di jurnal *Mind*. Ia mengajukan pertanyaan filosofis: **"Bisakah mesin berpikir?"** Untuk menjawabnya, ia mengusulkan **imitation game** — kini dikenal sebagai [**Turing Test**](/concepts/turing-test):

> *Seorang interrogator mengetik pertanyaan ke dua terminal: satu terhubung ke manusia, satu ke mesin. Jika interrogator tidak bisa membedakan mana manusia dan mana mesin lebih dari 50% kasus dalam 5 menit, mesin tersebut "lolos" tes dan dianggap memiliki kecerdasan.*

Turing memprediksi bahwa pada tahun 2000, mesin akan lolos Turing Test dengan 70% peluang. Prediksinya keliru waktu (LLM modern sudah sering mengelabui manusia dalam percakapan singkat), tapi visi ini menginspirasi dekade riset berikutnya.

**1951 — SNARC: Neural Network Hardware Pertama**
[Marvin Minsky](/people/marvin-minsky) dan [Dean Edmonds](/people/dean-edmonds) membangun **SNARC** (Stochastic Neural Analog Reinforcement Calculator) di Princeton — simulator neural network pertama yang diimplementasikan pada hardware (40 tabung vakum). Ini adalah implementasi fisik pertama dari ide McCulloch-Pitts.

**1952 — Samuel's Checkers: Belajar dari Pengalaman**
[Arthur Samuel](/people/arthur-samuel) di IBM membangun program [checkers](/concepts/checkers) yang belajar dari bermain melawan dirinya sendiri. Ia menciptakan istilah **machine learning** (mesin pembelajaran) — pertama kalinya istilah ini digunakan. Programnya akhirnya mengalahkan pemain manusia level amatir.

**1955 — Logic Theorist Awal**
[Allen Newell](/people/allen-newell) dan [Herbert Simon](/people/herbert-simon) di RAND Corporation dan Carnegie Mellon mulai merancang **Logic Theorist** — program yang dapat membuktikan teorema matematika. Ini akan dipublikasikan tahun 1956.

### AI Lahir: Konfrensi Dartmouth 1956

**1956 — Konfrensi Dartmouth: Lahirnya Istilah "AI"**
Pada musim panas 1956, [John McCarthy](/people/john-mccarthy) (saat itu di Dartmouth College) menyelenggarakan **Dartmouth Summer Research Project on Artificial Intelligence** — acara yang diakui secara resmi sebagai momen kelahiran AI sebagai bidang riset. Proposal 17 halaman yang ditulis McCarthy mengusulkan:

> *"Every aspect of learning or any other feature of intelligence can in principle be so precisely described that a machine can be made to simulate it."*

Proposal ini ikut ditandatangani oleh [Marvin Minsky](/people/marvin-minsky) (Harvard), [Claude Shannon](/people/claude-shannon) (Bell Labs, "bapak teori informasi"), dan [Nathaniel Rochester](/people/nathaniel-rochester) (IBM). Konfrensi ini memperkenalkan istilah **artificial intelligence** ke dunia.

Peserta kunci lainnya termasuk [Allen Newell](/people/allen-newell) dan [Herbert Simon](/people/herbert-simon) yang mendemonstrasikan **Logic Theorist** — program AI pertama yang berhasil, mampu membuktikan 38 dari 52 teorema pertama *Principia Mathematica* Bertrand Russell, dan kadang menemukan bukti yang lebih elegan dari versi Russell sendiri.

---

## Era 2: Golden Age (1956–1974)

Setelah Dartmouth, AI memasuki masa keemasan. Pemerintah AS (terutama [DARPA](/sources/darpa)) menyuntikkan dana riset besar-besaran, optimisme merajalela, dan berbagai terobosan teknis bermunculan.

### Bahasa Pemrograman dan Penalaran Formal

**1958 — LISP: Bahasa AI**
[John McCarthy](/people/john-mccarthy) menemukan [**LISP**](/concepts/lisp) (List Processing) di MIT — bahasa pemrograman yang didesain khusus untuk riset AI. LISP menjadi bahasa dominan AI selama hampir 30 tahun dan melahirkan banyak ide fundamental: garbage collection, dynamic typing, first-class functions, tree structures, dan self-hosting compilers. LISP masih digunakan hingga sekarang (Clojure adalah varian modernnya).

**1958 — Perceptron: Neural Network Praktis**
[Frank Rosenblatt](/people/frank-rosenblatt) di Cornell Aeronautical Laboratory membangun [**Perceptron**](/concepts/perceptron) — model neural network pertama yang dapat belajar dari data menggunakan algoritma training. Mark I Perceptron adalah hardware khusus untuk pengenalan gambar 20×20 pixel. *New York Times* menulis: *"the embryo of an electronic computer that [the Navy] expects will be able to walk, talk, see, write, reproduce itself and be conscious of its existence."* — prediksi yang terlalu optimistis.

**1958 — Advice Taker: AI Konseptual**
[John McCarthy](/people/john-mccarthy) menulis makalah *"Programs with Common Sense"* yang memperkenalkan **Advice Taker** — sistem yang dapat menggunakan pengetahuan umum dan penalaran logis. Ide ini menjadi dasar [**knowledge representation**](/concepts/knowledge-representation) dan [**reasoning**](/concepts/reasoning).

### Robot dan Program Percakapan

**1961 — Unimate: Robot Industri Pertama**
[George Devol](/people/george-devol) dan [Joseph Engelberger](/people/joseph-engelberger) menciptakan **Unimate** — [robot](/concepts/robot) industri pertama yang digunakan di jalur perakitan General Motors. Unimate mengangkat benda panas dan melakukan tugas berulang yang berbahaya bagi manusia. Ini menandai lahirnya [**robotika industri**](/concepts/robotika-industri).

**1964 — ELIZA: Chatbot Pertama**
[Joseph Weizenbaum](/people/joseph-weizenbaum) di MIT menciptakan [**ELIZA**](/concepts/eliza) — program yang mensimulasikan psikoterapis Rogerian dengan teknik pencocokan pola sederhana. Weizenbaum terkejut ketika秘书 (sekretarisnya) meminta privacy saat menggunakan ELIZA — dia tidak percaya bahwa program komputer dapat dipercaya dengan rahasia pribadinya. Fenomena ini kini dikenal sebagai [**ELIZA effect**](/concepts/eliza-effect): kecenderungan manusia menganggap program komputer lebih cerdas dari yang sebenarnya.

**1965 — DENDRAL: Expert System Pertama**
[Edward Feigenbaum](/people/edward-feigenbaum), [Bruce Buchanan](/people/bruce-buchanan), dan [Joshua Lederberg](/people/joshua-lederberg) di Stanford mulai mengembangkan [**DENDRAL**](/concepts/dendral) — [expert system](/concepts/expert-system) pertama yang menggunakan pengetahuan domain spesifik (kimia organik) untuk mengidentifikasi struktur molekul dari data spektrometri massa. DENDRAL membuka paradigma baru: AI tidak hanya butuh penalaran umum, tapi juga **pengetahuan ahli**.

**1966 — Shakey the Robot: Robot Cerdas Pertama**
[Charles Rosen](/people/charles-rosen) dan tim di Stanford Research Institute (SRI) membangun **Shakey** — robot mobile pertama yang menggabungkan [computer vision](/concepts/computer-vision), [natural language processing](/concepts/natural-language-processing), dan penalaran logis. Shakey dapat menavigasi ruangan, merencanakan aksi, dan menyelesaikan masalah. Proyek ini menciptakan algoritma fundamental seperti **A* search** dan **STRIPS planning**.

**1968 — SHRDLU: Pemahaman Bahasa Alami**
[Terrence Winograd](/people/terrence-winograd) di MIT menciptakan **SHRDLU** — program yang dapat memahami dan menjalankan perintah dalam bahasa Inggris di dunia "blok" virtual. SHRDLU menjawab pertanyaan ("Apakah ada piramid besar di belakang kubus merah?"), merencanakan aksi, dan belajar dari pengalaman dalam domain terbatas. Ini adalah tonggak [**natural language understanding**](/concepts/natural-language-understanding).

### Kritik yang Membuka AI Winter Pertama

**1969 — Minsky & Papert: "Perceptrons"**
[Marvin Minsky](/people/marvin-minsky) dan [Seymour Papert](/people/seymour-papert) di MIT menerbitkan buku *Perceptrons* yang membuktikan keterbatasan matematis [**perceptron**](/concepts/perceptron) — khususnya bahwa perceptron tunggal tidak dapat memecahkan masalah XOR. Buku ini (dan oversimplifikasi media terhadapnya) menyebabkan sebagian besar komunitas riset **berhenti meneliti neural network** selama hampir 20 tahun. Periode ini disebut **"neural network winter"** atau "dark age of neural networks" — yang baru berakhir tahun 1986 dengan [**backpropagation**](/concepts/backpropagation).

---

## Era 3: AI Winter Pertama (1974–1980)

Optimisme awal 1960-an mulai pudar. Janji-janji AI tidak terpenuhi, biaya komputasi tinggi, dan program AI hanya bekerja di dunia mainan (*toy problems*) tanpa aplikasi praktis.

**1973 — Lighthill Report: Kritik dari Inggris**
[James Lighthill](/people/james-lighthill) menerbitkan **Lighthill Report** untuk Science Research Council (SRC) Inggris yang mengkritik riset AI di Inggris. Lighthill menyimpulkan: *"in no part of the field have the discoveries made so far produced the major impact that was then promised."* Konsekuensinya dahsyat:

- Inggris memotong hampir semua dana riset AI (kecuali untuk dua universitas: Edinburgh dan Essex).
- DARPA AS mulai menarik pendanaan setelah [Automatic Language Processing Advisory Committee](/timeline/ALPAC-report) (1966) dan [James Adams](/people/james-adams) yang menulis *The Lighthill Report* (meskipun AS tidak memotong sedrastis Inggris).
- Media menyebut periode 1974–1980 sebagai **"AI winter"** (istilah yang dicetuskan kolega [John McCarthy](/people/john-mccarthy) di Carnegie Mellon).

**1976 — MYCIN: Expert System Kedokteran**
[Edward Shortliffe](/people/edward-shortliffe) di Stanford menciptakan [**MYCIN**](/concepts/mycin) — expert system untuk mendiagnosis infeksi bakteri dan merekomendasikan antibiotik. MYCIN menggunakan ~600 aturan IF-THEN dan mencapai kinerja setara dengan ahli manusia. Tapi MYCIN tidak pernah digunakan di rumah sakit karena:
1. Sistemnya tidak terintegrasi dengan workflow rumah sakit.
2. FDA tidak punya regulasi untuk software medis.
3. Etiket tanggung jawab jika MYCIN salah rekomendasi.

**1979 — Stanford Cart: Mobil Autonomous Pertama**
[Hans Moravec](/people/hans-moravec) di Stanford membangun **Stanford Cart** — kendaraan yang dapat menavigasi ruangan dengan menghindari rintangan. Stanford Cart butuh 5 menit untuk merencanakan setiap gerakan 1 meter, tapi ini adalah mobil self-driving pertama. Teknologi ini akhirnya berkembang menjadi [**self-driving car**](/concepts/self-driving-car) modern.

---

## Era 4: Expert Systems Boom (1980–1987)

**1980 — XCON: Expert System Komersial Pertama**
[John McDermott](/people/john-mcdrmott) di Carnegie Mellon menciptakan **XCON** (juga disebut R1) untuk DEC (Digital Equipment Corporation) — expert system untuk mengkonfigurasi pesanan komputer VAX. XCON menghemat DEC sekitar **$40 juta per tahun** dengan mengurangi kesalahan konfigurasi. Kesuksesan XCON memicu ledakan **expert system** komersial:

- **1982** — Jepang meluncurkan proyek [**Fifth Generation Computer Systems**](/timeline/fifth-generation) (第五世代コンピュータ) — inisiatif 10 tahun, $400 juta, bertujuan membuat komputer yang dapat "berbicara, mendengar, berpikir, dan melihat". Proyek ini akhirnya dianggap gagal tapi memicu riset AI global.
- **1983** — MYCIN spawn [**EMYCIN**](/concepts/emycin) (Essential MYCIN) — shell expert system generik yang menjadi dasar banyak expert system komersial.
- **1985** — Perusahaan LISP (Symbolics, Lisp Machines Inc.) meraup keuntungan besar menjual LISP Machine — hardware khusus untuk menjalankan LISP. Pasar LISP Machine bernilai $$500 juta pada puncaknya.

### Neural Network Bangkit Kembali

**1982 — Hopfield Networks**
[John Hopfield](/people/john-hopfield) di Caltech mempopulerkan [**Hopfield network**](/concepts/hopfield-network) — jaringan syaraf recurrent yang berfungsi sebagai associative memory. Ini membangkitkan kembali minat pada neural network.

**1986 — Backpropagation: Revolusi Neural Network**
[David Rumelhart](/people/david-rumelhart), [Geoffrey Hinton](/people/geoffrey-hinton), dan [Ronald Williams](/people/ronald-williams) mempopulerkan algoritma [**backpropagation**](/concepts/backpropagation) — metode training neural network multi-layer yang efisien. Makalah mereka di jurnal *Nature* menunjukkan bahwa jaringan multi-layer dapat belajar representasi internal yang kompleks. Ini menjadi fondasi [**deep learning**](/concepts/deep-learning) modern. Buku *Parallel Distributed Processing* (Rumelhart & McClelland, 1986) menjadi teks standar.

**1986 — NETtalk**
[Terrence Sejnowski](/people/terrence-sejnowski) dan [Charles Rosenberg](/people/charles-rosenberg) membangun **NETtalk** — neural network yang belajar membaca teks bahasa Inggris dengan suara. NETtalk menjadi demonstrasi publik pertama kemampuan neural network.

**1989 — Convolutional Neural Networks (CNN)**
[Yann LeCun](/people/yann-lecun) di Bell Labs mempublikasikan [**LeNet**](/concepts/lenet) — implementasi [**Convolutional Neural Network**](/concepts/convolutional-neural-network) (CNN) yang digunakan untuk pengenalan digit tulisan tangan (cek dan邮政编码 Amerika). LeNet menjadi arsitektur dasar untuk hampir semua aplikasi [computer vision](/concepts/computer-vision) modern.

---

## Era 5: AI Winter Kedua (1987–1993)

Ledakan expert system ternyata tidak berkelanjutan. Beberapa faktor menyebabkan AI winter kedua:

**1986–1987 — Pasar LISP Machine Runtuh**
Ketika hardware PC (komputer personal) menjadi cukup kuat untuk menjalankan LISP via software, LISP Machine kehilangan pasarnya. Symbolics, Lisp Machines Inc., dan Texas Instruments bangkrut. Industri AI komersial ambruk.

**1988 — Common Sense Problem**
[Common-sense reasoning](/concepts/common-sense-reasoning) — yang dianggap mudah oleh pionir AI 1960-an — terbukti sangat sulit. Program AI tidak pernah tahu hal-hal yang manusiaanggap remeh: "air mengalir ke bawah", "kucing tidak bisa terbang", "jika hujan, tanah basah". Masalah ini belum terpecahkan hingga sekarang.

**1990 — Statistik Mengambil Alih**
Para peneliti mulai menggunakan [machine learning](/concepts/machine-learning) berbasis statistik (decision trees, Bayesian networks, support vector machines) yang bekerja lebih baik di dunia nyata daripada symbolic AI. [**Statistical learning**](/concepts/statistical-learning) menjadi pendekatan dominan.

---

## Era 6: AI Renaissance (1993–2011)

Setelah dua AI winter, AI bangkit kembali — kali ini dengan pendekatan yang lebih pragmatis, berbasis statistik, dan fokus pada aplikasi nyata.

**1997 — Deep Blue vs Kasparov**
[Deep Blue](/timeline/kemenangan-deep-blue) dari IBM mengalahkan juara catur dunia [Garry Kasparov](/people/garry-kasparov) dengan skor 3½–2½ — pertama kalinya komputer mengalahkan juara dunia catur. Deep Blue mengevaluasi 200 juta posisi per detik dengan hardware khusus. Kasparov awalnya menuduh IBM curang. Peristiwa ini menandai dimulainya era **machine defeating humans in intellectual games**.

**2005 — DARPA Grand Challenge**
[DARPA Grand Challenge](/timeline/darpa-grand-challenge) 2005 dimenangkan oleh **Stanley** dari Stanford (tim [Sebastian Thrun](/people/sebastian-thrun)) — mobil autonomous yang menyelesaikan rute 212 km di gurun Mojave. Ini memicu perlombaan [self-driving car](/concepts/self-driving-car).

**2011 — Watson: Jeopardy Champion**
[**IBM Watson**](/concepts/watson) mengalahkan juara [Jeopardy!](/concepts/jeopardy) [Ken Jennings](/people/ken-jennings) dan [Brad Rutter](/people/brad-rutter). Watson menggunakan kombinasi NLP, information retrieval, dan machine learning. Kemenangan ini mempopulerkan **question answering systems**.

**2011 — Siri: Voice Assistant**
[Apple](/sources/apple) meluncurkan [**Siri**](/concepts/siri) — voice assistant pertama yang terintegrasi di smartphone. Siri memicu perlombaan voice assistant: Google Now (2012), Microsoft Cortana (2014), Amazon Alexa (2014), Google Assistant (2016).

---

## Era 7: Revolusi Deep Learning (2012–2017)

**2012 — AlexNet: Ledakan Deep Learning**
[Alex Krizhevsky](/people/alex-krizhevsky), [Ilya Sutskever](/people/ilya-sutskever), dan [Geoffrey Hinton](/people/geoffrey-hinton) dari University of Toronto memenangkan [ImageNet Large Scale Visual Recognition Challenge](/timeline/imagenet-2012) dengan margin 10,8% (error 15,3% vs runner-up 26,2%). [**AlexNet**](/concepts/alexnet) menggunakan [Convolutional Neural Network](/concepts/convolutional-neural-network) 8-layer dengan [GPU](/concepts/gpu) training (NVIDIA GTX 580). AlexNet memicu revolusi [deep learning](/concepts/deep-learning):

- [Yann LeCun](/people/yann-lecun) — CNN, LeNet
- [Yoshua Bengio](/people/yoshua-bengio) — deep learning theory
- [Geoffrey Hinton](/people/geoffrey-hinton) — backpropagation, Boltzmann machines
- (ketiganya memenangkan **Turing Award 2018** — "the Godfathers of AI")

**2014 — Generative Adversarial Networks (GAN)**
[Ian Goodfellow](/people/ian-goodfellow) (saat itu di Université de Montréal) mempublikasikan [**GAN**](/concepts/generative-adversarial-network) — arsitektur dengan dua neural network (generator + discriminator) yang saling melatih. GAN menjadi dasar [image generation](/concepts/image-generation), style transfer, dan [deepfake](/concepts/deepfake).

**2014 — DeepFace: Pengenalan Wajah**
[Facebook](/sources/facebook) meluncurkan [**DeepFace**](/concepts/deepface) — sistem pengenalan wajah dengan akurasi 97,35% (mendekati manusia, 97,5%). Ini memicu perdebatan etika besar tentang [privacy](/concepts/privacy) dan [surveillance](/concepts/surveillance).

**2016 — AlphaGo: AI Mengalahkan Go Champion**
[DeepMind](/sources/google-deepmind) (dibentuk 2010 oleh [Demis Hassabis](/people/demis-hassabis), [Shane Legg](/people/shane-legg), [Mustafa Suleyman](/people/mustafa-suleyman)) menciptakan [**AlphaGo**](/concepts/alphago) yang mengalahkan juara dunia [Go](/concepts/go) [Lee Sedol](/people/lee-sedol) 4–1. Go dianggap sebagai game terakhir yang resisten terhadap AI karena branching factor-nya yang sangat besar. AlphaGo menggunakan kombinasi [reinforcement learning](/concepts/reinforcement-learning), [Monte Carlo tree search](/concepts/mcts), dan deep neural network.

**2017 — AlphaGo Zero & AlphaZero: Belajar Tanpa Data Manusia**
DeepMind mempublikasikan [**AlphaGo Zero**](/concepts/alphago-zero) — versi AlphaGo yang belajar dari nol (self-play) tanpa data game manusia. Dalam 36 jam, AlphaGo Zero melampaui versi yang mengalahkan Lee Sedol. [**AlphaZero**](/concepts/alphazero) memperluas pendekatan ini ke catur dan shogi — dan mengalahkan Stockfish (catur) dan Elmo (shogi) setelah beberapa jam training.

**2017 — Attention Is All You Need: Transformer Lahir**
[Ashish Vaswani](/people/ashish-vaswani) dan tim di Google Brain mempublikasikan makalah legendaris *"Attention Is All You Need"* yang memperkenalkan [**Transformer**](/concepts/transformer). Arsitektur ini menggunakan [**attention mechanism**](/concepts/attention-mechanism) secara eksklusif (tanpa recurrence atau convolution), memungkinkan training paralel yang jauh lebih efisien. Transformer menjadi arsitektur dasar untuk hampir semua [large language model](/concepts/large-language-model) modern.

---

## Era 8: Generative AI Awal (2018–2021)

**2018 — GPT-1 & BERT: Pretrained Models**
[OpenAI](/sources/openai) merilis [**GPT-1**](/timeline/peluncuran-gpt-1) — generative pre-trained transformer pertama (117M parameter). Model ini menggunakan [unsupervised pre-training](/concepts/unsupervised-learning) + supervised fine-tuning.

Hampir bersamaan, [Google](/sources/google) merilis [**BERT**](/timeline/peluncuran-bert) — bidirectional transformer yang merevolusi [natural language processing](/concepts/natural-language-processing). BERT menjadi standar untuk hampir semua search engine dan NLU tasks.

**2019 — GPT-2: Terlalu Berbahaya untuk Dirilis**
[**GPT-2**](/timeline/peluncuran-gpt-2) (1,5B parameter) — jauh lebih besar dari GPT-1. OpenAI awalnya **menolak merilis model penuh** karena khawatir dapat digunakan untuk generate [disinformasi](/concepts/disinformasi) massal. Setelah berbulan-bulan, OpenAI merilis model secara bertahap. Kontroversi ini memicu perdebatan global tentang [AI safety](/concepts/ai-safety).

**2020 — GPT-3: Few-Shot Learning Muncul**
[**GPT-3**](/timeline/peluncuran-gpt-3) (175B parameter) — lompatan 100x dari GPT-2. GPT-3 menunjukkan [**emergent behavior**](/concepts/emergent-behavior): kemampuan [few-shot learning](/concepts/few-shot-learning) (belajar dari beberapa contoh di prompt), menulis kode, puisi, esai, dan ringkasan. GPT-3 memunculkan adopsi [prompt engineering](/concepts/prompt-engineering) sebagai disiplin baru.

**2021 — DALL-E & CLIP: Text-to-Image**
[OpenAI](/sources/openai) merilis [**DALL-E**](/concepts/dall-e) — model text-to-image pertama yang mainstream. [CLIP](/concepts/clip) (Contrastive Language-Image Pre-training) — model yang memahami hubungan teks-gambar. Keduanya menjadi dasar ledakan [generative AI](/concepts/generative-ai) image 2022.

---

## Era 9: Ledakan LLM (2022–2024)

**November 2022 — ChatGPT: Revolusi Consumer AI**
[OpenAI](/sources/openai) merilis [**ChatGPT**](/timeline/peluncuran-chatgpt) — antarmuka chat untuk GPT-3.5 yang di-fine-tune dengan [RLHF](/concepts/rlhf) (Reinforcement Learning from Human Feedback). Dalam 5 hari, ChatGPT mencapai 1 juta user — rekor historis. Dalam 2 bulan, 100 juta user — aplikasi consumer yang paling cepat mencapai angka ini. ChatGPT memicu ledakan investasi AI global dan lomba [generative AI](/concepts/generative-ai).

**Agustus 2022 — Stable Diffusion: Open-Source Image Generation**
[Stability AI](/sources/stability-ai) merilis [**Stable Diffusion**](/timeline/peluncuran-stable-diffusion) — model [diffusion](/concepts/diffusion-model) text-to-image **open-source**. Ini mendemokratisasi generative AI — model yang sebanding dengan DALL-E 2 dapat dijalankan di GPU consumer. Komunitas open-source (Hugging Face, Civitai) berkembang pesat.

**Maret 2023 — GPT-4: Multimodal**
[**GPT-4**](/timeline/peluncuran-gpt-4) — LLM multimodal yang dapat menerima input teks DAN gambar. Kinerja GPT-4 pada berbagai ujian standar (BAR, SAT, AP, GRE) mendekati atau melebihi manusia. Peluncuran GPT-4 memicu integrasi AI ke hampir semua produk software (Microsoft 365 Copilot, GitHub Copilot X, Duolingo Max).

**Maret 2023 — LLaMA: Open-Source Foundation Model**
[Meta AI](/sources/meta-ai) merilis [**LLaMA**](/timeline/peluncuran-llama) (Large Language Model Meta AI) — model open-source 7B-65B parameter. Bocoran LLaMA weights memicu ledakan **open-source LLM**: setiap orang dengan GPU yang cukup dapat menjalankan, fine-tune, dan mendistribusi model.

**Juli 2023 — LLaMA 2: Open-Source Komersial**
[**LLaMA 2**](/timeline/peluncuran-llama-2) — open-source dengan lisensi komersial. Ini menjadi dasar banyak startup AI dan produk enterprise (perusahaan dapat menggunakan untuk komersial).

**September 2023 — Mistral & Mixtral: Open-Source Eropa**
[Mistral AI](/sources/mistral-ai) (Prancis) merilis [**Mistral 7B**](/timeline/peluncuran-mistral) — LLM open-source 7B yang kinerjanya mendekati LLaMA 2 13B. Desember 2023, [**Mixtral 8x7B**](/timeline/peluncuran-mixtral) — arsitektur **Mixture of Experts (MoE)** dengan 8 expert network, 46,7B total parameter tapi hanya 12,9B aktif per inference.

**Februari 2024 — Sora: Text-to-Video**
[OpenAI](/sources/openai) merilis [**Sora**](/timeline/peluncuran-sora) — model text-to-video yang dapat menghasilkan video berdurasi hingga 60 detik dengan kualitas sinematik. Sora memicu perlombaan text-to-video: Google Veo, Meta Make-A-Video, Runway Gen-2.

**Maret 2024 — Claude 3 & Gemini 1.5**
[Anthropic](/sources/anthropic) merilis [**Claude 3**](/timeline/peluncuran-claude-3) (Haiku, Sonnet, Opus) — keluarga model multimodal yang diklaim mendekati GPT-4 di berbagai benchmark. [Google](/sources/google) merilis [**Gemini 1.5**](/timeline/peluncuran-gemini-1-5) dengan **context window 1 juta token** — lompatan besar dari 32K-128K model lain.

**Juni 2024 — Claude 3.5 Sonnet: New State of the Art**
[**Claude 3.5 Sonnet**](/timeline/peluncuran-claude-3-5) menjadi model dengan kinerja terbaik di banyak benchmark, mengungguli GPT-4o di coding, reasoning, dan vision. Anthropic memperkenalkan **Artifacts** — interface baru untuk membuat kode, dokumen, dan visual secara interaktif.

**Oktober 2024 — Nobel AI**
[Geoffrey Hinton](/people/geoffrey-hinton) dan [John Hopfield](/people/john-hopfield) memenangkan **Nobel Prize in Physics 2024** untuk "foundational discoveries and inventions that enable machine learning with artificial neural networks". Ini pertama kalinya Nobel Physics dianugerahkan ke kontribusi AI murni. [Demis Hassabis](/people/demis-hassabis) dan [John Jumper](/people/john-jumper) memenangkan **Nobel Prize in Chemistry 2024** untuk **AlphaFold** — AI yang memecahkan masalah *protein folding* — salah satu tantangan besar biologi yang berlangsung 50 tahun.

---

## Era 10: Agentic AI (2025–2026)

**Januari 2025 — DeepSeek-R1: Efisiensi China**
[DeepSeek](/sources/deepseek) (startup China) merilis [**DeepSeek-R1**](/timeline/peluncuran-deepseek) — model reasoning open-source yang kinerjanya mendekati o1 OpenAI, dengan biaya training hanya $5-6 juta (vs $100M+ untuk model frontier Barat). Rilis ini menyebabkan **$600 miliar kerugian valuasi NVIDIA** dalam satu hari — pasar menyadari bahwa frontier AI tidak harus mahal. DeepSeek memicu perlombaan efisiensi.

**September 2025 — OpenAI o1, o3, GPT-5: Reasoning Models**
[OpenAI](/sources/openai) memperkenalkan **model reasoning** (o1, o3) yang "berpikir" sebelum menjawab menggunakan [chain-of-thought](/concepts/chain-of-thought) yang di-internalisasi. [GPT-5](/timeline/peluncuran-gpt-5) (Agustus 2025) mengintegrasikan kemampuan reasoning ke dalam model default. [Claude 4.5 Sonnet](/timeline/peluncuran-sonnet-4-5) (November 2025) dari [Anthropic](/sources/anthropic) memimpin di coding dan agentic tasks.

**2025 — Agentic AI: Era Baru**
LLM berevolusi dari chatbot menjadi **agen** yang dapat:
- **Menggunakan tool** (search, code execution, API calls, file system, browser)
- **Berencana multi-langkah** untuk mencapai tujuan
- **Menulis & menjalankan kode** (agentic coding)
- **Menyusun workflow** yang kompleks (research, analysis, deployment)

Produk agentic utama:
- [**Claude Code**](/concepts/claude-code) (Anthropic) — agentic coding di terminal
- [**GitHub Copilot Coding Agent**](/concepts/copilot-coding-agent) — agent yang dapat membuka PR
- [**Devin**](/concepts/devin) (Cognition Labs) — "AI software engineer" pertama
- [**OpenAI Operator**](/concepts/operator) — agent yang dapat mengoperasikan browser
- [**Cursor Composer**](/concepts/cursor-composer) — agentic IDE dengan multi-file editing
- [**Gemini CLI**](/concepts/gemini-cli) — agentic coding dari Google
- [**Codex CLI**](/concepts/codex-cli) (OpenAI) — coding agent di terminal

**2026 — Masa Sekarang (Juni 2026)**
Pada awal 2026, AI telah menjadi infrastruktur:
- **AI assistants** terintegrasi di hampir semua software (Office, Google Workspace, Adobe, Figma, VS Code, JetBrains)
- **AI agents** menjalankan workflow multi-langkah secara otonom (research, coding, customer service, data analysis)
- **Multimodal AI** — model yang dapat memahami teks, gambar, audio, video, dan 3D secara unified (Gemini 2.5, GPT-5, Claude 4.5 Sonnet, Veo 3, Sora 2)
- **On-device AI** — model kecil yang berjalan di smartphone (Gemini Nano, Apple Intelligence, Phi-4)
- **Open-source AI** — model open-source (LLaMA 4, DeepSeek-V4, Qwen 3, Mistral Large 3, GLM-5.2) mendekati frontier proprietary
- **AI safety & alignment** menjadi fokus utama — model dengan RLHF, Constitutional AI, interpretability research

---

## Konsep Kunci dalam Evolusi AI

### Pendekatan Teknis

| Pendekatan | Era Dominan | Tokoh Kunci |
|---|---|---|
| **Symbolic AI / GOFAI** | 1956–1990 | [John McCarthy](/people/john-mccarthy), [Marvin Minsky](/people/marvin-minsky), [Allen Newell](/people/allen-newell) |
| **Expert Systems** | 1980–1990 | [Edward Feigenbaum](/people/edward-feigenbaum), [Edward Shortliffe](/people/edward-shortliffe) |
| **Statistical ML** | 1990–2010 | [Vapnik](/people/vladimir-vapnik), [Judea Pearl](/people/judea-pearl), [Tom Mitchell](/people/tom-mitchell) |
| **Deep Learning** | 2012–sekarang | [Geoffrey Hinton](/people/geoffrey-hinton), [Yann LeCun](/people/yann-lecun), [Yoshua Bengio](/people/yoshua-bengio) |
| **Transformer / LLM** | 2017–sekarang | [Ashish Vaswani](/people/ashish-vaswani), [Ilya Sutskever](/people/ilya-sutskever), [Sam Altman](/people/sam-altman) |
| **Agentic AI** | 2024–sekarang | [Dario Amodei](/people/dario-amodei), [Demis Hassabis](/people/demis-hassabis), [Mustafa Suleyman](/people/mustafa-suleyman) |

### Paradigma Belajar

- [**Supervised learning**](/concepts/supervised-learning) — belajar dari data berlabel (X, Y)
- [**Unsupervised learning**](/concepts/unsupervised-learning) — belajar dari data tanpa label
- [**Self-supervised learning**](/concepts/self-supervised-learning) — pre-training dengan predict masked tokens
- [**Reinforcement learning**](/concepts/reinforcement-learning) — belajar dari reward (AlphaGo, RLHF)
- [**Few-shot / Zero-shot learning**](/concepts/few-shot-learning) — belajar dari beberapa contoh di inference

### Arsitektur Neural Network

- [**Perceptron**](/concepts/perceptron) — neural network 1 layer (1958)
- [**Multi-layer Perceptron**](/concepts/mlp) — neural network dengan hidden layer
- [**Convolutional Neural Network (CNN)**](/concepts/convolutional-neural-network) — LeNet (1989), AlexNet (2012)
- [**Recurrent Neural Network (RNN)**](/concepts/recurrent-neural-network) — LSTM, GRU
- [**Transformer**](/concepts/transformer) — Attention Is All You Need (2017)
- [**Mixture of Experts (MoE)**](/concepts/moe) — Mixtral (2023)
- [**State Space Model (SSM)**](/concepts/ssm) — Mamba (2023)

### Kemampuan Modern

- [**Natural Language Processing (NLP)**](/concepts/natural-language-processing)
- [**Computer Vision**](/concepts/computer-vision)
- [**Speech Recognition**](/concepts/speech-recognition)
- [**Generative AI**](/concepts/generative-ai) — text, image, audio, video, 3D
- [**Reasoning**](/concepts/reasoning) — chain-of-thought, planning
- [**Tool Use**](/concepts/tool-use)
- [**Agentic Workflow**](/concepts/agentic-workflow)

### Tantangan Terbuka

- [**AI Alignment**](/concepts/alignment) — bagaimana memastikan AI mengejar tujuan yang benar
- [**Hallucination**](/concepts/hallucination) — AI mengarang fakta
- [**Bias**](/concepts/ai-bias) — AI memperkuat prasangka dari data training
- [**Privacy**](/concepts/privacy) — data training dan inference
- [**Energy**](/concepts/ai-energy) — training frontier model butuh listrik kota kecil
- [**Regulation**](/concepts/ai-regulation) — EU AI Act (2024), Executive Order AS, dll

---

## Dampak AI

### Industri yang Berubah

- **Software engineering** — AI coding assistants (Copilot, Claude Code, Cursor, Codex) menulis 30-50% kode di banyak perusahaan.
- **Customer service** — chatbots AI menggantikan banyak call center.
- **Healthcare** — diagnosis gambar medis, drug discovery (AlphaFold), personalized medicine.
- **Pendidikan** — tutor AI personal, automated grading.
- **Konten** — AI-generated text, image, audio, video mendisrupsi media.
- **Riset ilmiah** — AI membantu simulasi, hypothesis generation, paper writing.

### Kontroversi & Risiko

- **Pekerjaan** — apakah AI akan menggantikan atau augmentasi manusia?
- **Misinformasi** — deepfake, AI-generated propaganda.
- **Senjata otonom** — ethical concerns tentang "killer robots".
- **Konsentrasi kekuatan** — apakah AI hanya menguntungkan beberapa perusahaan besar?
- **Existential risk** — apakah superintelligent AI mengancam umat manusia? (VIEWS: [Sam Altman](/people/sam-altman) percaya alignment bisa dipecahkan; [Yann LeCun](/people/yann-lecun) skeptis; [Geoffrey Hinton](/people/geoffrey-hinton) sekarang khawatir; [Gary Marcus](/people/gary-marcus) skeptis LLM akan sampai AGI)

---

## Kesimpulan

Sejarah AI adalah kisah **siklus optimisme dan kekecewaan**, diselingi terobosan teknis yang mengubah segalanya:

1. **1943–1956** — Akar pemikiran (Turing, McCulloch-Pitts, Dartmouth)
2. **1956–1974** — Golden age (LISP, ELIZA, Shakey, DENDRAL)
3. **1974–1980** — AI winter 1 (Lighthill, defunding)
4. **1980–1987** — Expert systems boom (XCON, MYCIN, LISP machines)
5. **1987–1993** — AI winter 2 (LISP machine crash, statistik mengambil alih)
6. **1993–2011** — Renaissance (Deep Blue, statistical ML, internet)
7. **2012–2017** — Revolusi deep learning (AlexNet, AlphaGo, Transformer)
8. **2018–2021** — Pretrained models (GPT-1/2/3, BERT, DALL-E)
9. **2022–2024** — Ledakan LLM (ChatGPT, GPT-4, Claude, Gemini, Sora)
10. **2025–2026** — Agentic AI (model yang dapat bertindak otonom)

Pola yang berulang: setiap kali AI dianggap "sudah selesai" atau "gagal total", muncul terobosan yang membuka kemungkinan baru. Pada 2026, AI belum mencapai [**AGI**](/concepts/artificial-general-intelligence) (Artificial General Intelligence) — kemampuan manusia-level di semua domain — tapi sudah menjadi **infrastruktur** yang mengubah cara kita bekerja, belajar, dan berkreasi.

> *"It is difficult to make predictions, especially about the future."* — attributed to Niels Bohr (dan berlaku sempurna untuk AI)

---

## Lihat Juga

- [**Kecerdasan Buatan**](/concepts/kecerdasan-buatan) — konsep dasar
- [**Machine Learning**](/concepts/machine-learning) — pendekatan statistik
- [**Deep Learning**](/concepts/deep-learning) — neural network multi-layer
- [**Large Language Model**](/concepts/large-language-model) — Transformer
- [**Agentic AI**](/concepts/agentic-ai) — AI yang bertindak otonom
- [**AI Winter**](/concepts/ai-winter) — periode kekecewaan
- [**Sejarah Komputer**](/articles/sejarah-komputer) — konteks lebih luas
- [**Sejarah Internet**](/articles/sejarah-internet) — konteks lebih luas
- [**Sejarah Permesinan Kuno**](/articles/sejarah-permesinan-kuno) — mesin sebelum AI
