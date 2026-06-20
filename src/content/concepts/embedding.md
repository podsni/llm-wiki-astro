---
title: Embedding
description: A dense vector representation of data (text, images, audio) in a continuous space where semantic similarity corresponds to geometric proximity.
date: 2024-01-20
updated: 2024-10-30
category: ai
tags: [ai, embedding, vector, representation-learning]
aliases: [embeddings, vector representation, vector embeddings]
related: [large-language-model, transformer, retrieval-augmented-generation]
references:
  - title: "Word2Vec"
    author: Mikolov et al.
    year: 2013
    url: https://arxiv.org/abs/1301.3781
  - title: "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding"
    author: Devlin et al.
    year: 2018
    url: https://arxiv.org/abs/1810.04805
---

An **embedding** is a mapping from discrete, high-dimensional data (words, sentences, images, users) into a continuous, lower-dimensional vector space where geometric relationships capture semantic meaning. The defining property: *similar things are close together*.

## The core idea

Classical machine learning worked on data in forms humans designed — bag-of-words counts, one-hot vectors, hand-crafted features. These representations don't capture meaning well: the words *"king"* and *"queen"* are just as distant in one-hot space as *"king"* and *"banana"*.

Embeddings solve this by learning a function that places semantically related items near each other in a vector space. After training, you can do arithmetic:

```
king - man + woman ≈ queen
Paris - France + Italy ≈ Rome
```

This isn't magic — it's the result of training a model on a task (predict nearby words, classify sentences, etc.) such that the loss function encourages related items to cluster.

## Word embeddings

The breakthrough came in 2013 with **Word2Vec** (Mikolov et al.). Two architectures:

- **CBOW** (Continuous Bag of Words) — predict a target word from its context.
- **Skip-gram** — predict context words from a target word.

Word2Vec produced 300-dimensional vectors for millions of words. GloVe, fastText, and others followed. These were the first widely-used embeddings and demonstrated that semantic relationships are recoverable from large text corpora.

## Contextual embeddings

Classical word embeddings assign one vector per word. But the meaning of *"bank"* in *"river bank"* vs *"savings bank"* is different. **Contextual embeddings** generate a different vector for each token depending on its surrounding context.

The [Transformer](/concepts/transformer) architecture produces these. Models like BERT and ELMo produce one vector per token; decoder-only [LLMs](/concepts/large-language-model) produce vectors that depend on all preceding tokens.

## Sentence and document embeddings

To embed longer text, common approaches include:

- **Mean pooling** — average the token vectors (loses order information).
- **CLS token** — use a special classification token's final vector (BERT-style).
- **Last-token pooling** — for decoder models, use the final vector (used in many modern embedding models).
- **Dedicated embedding models** — trained specifically for semantic similarity, like Sentence-BERT, OpenAI's `text-embedding-3`, Cohere's `embed-english-v3`.

## Multimodal embeddings

Embeddings aren't limited to text. Models like CLIP embed images and text in the same space, enabling text-to-image search. Modern multimodal models embed images, audio, video, and text in shared spaces for cross-modal retrieval.

## Use cases

- **Semantic search** — find documents similar in meaning, not just keyword matching. The foundation of [RAG](/concepts/retrieval-augmented-generation).
- **Recommendation** — embed users and items; recommend items near the user in vector space.
- **Clustering** — group similar items via k-means, HDBSCAN, or UMAP.
- **Classification** — train a small classifier on top of embeddings for fast transfer learning.
- **Anomaly detection** — points far from any cluster are anomalies.
- **Deduplication** — find near-duplicates by cosine similarity threshold.

## Vector databases

Embeddings only become useful when you can search them efficiently at scale. Vector databases (FAISS, Pinecone, Weaviate, Qdrant, pgvector) implement approximate nearest neighbor (ANN) algorithms like HNSW and IVF that find the k nearest vectors in milliseconds across millions of items.

## See also

- [Large Language Model](/concepts/large-language-model) — produces embeddings as a byproduct of inference
- [Transformer](/concepts/transformer) — the architecture behind modern contextual embeddings
- [Retrieval-Augmented Generation](/concepts/retrieval-augmented-generation) — the most common application
