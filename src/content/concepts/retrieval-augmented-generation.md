---
title: Retrieval-Augmented Generation
description: A technique that grounds LLM outputs in external knowledge by retrieving relevant documents at query time, reducing hallucination and extending the model's knowledge.
date: 2024-02-20
updated: 2024-12-01
category: ai
tags: [ai, llm, rag, knowledge-base, retrieval]
aliases: [RAG, retrieval augmented generation]
related: [large-language-model, embedding, knowledge-base, context-window]
references:
  - title: "Retrieval-Augmented Generation for Large Language Models: A Survey"
    author: Gao et al.
    year: 2023
    url: https://arxiv.org/abs/2312.10997
---

**Retrieval-Augmented Generation (RAG)** is a technique that enhances [Large Language Models](/concepts/large-language-model) by grounding their responses in external, up-to-date information retrieved at query time. It addresses two of the biggest LLM limitations: hallucination and knowledge cutoff.

## The core idea

Instead of relying solely on what an LLM learned during training, RAG:

1. Converts a user query into a vector representation (an [embedding](/concepts/embedding)).
2. Searches a vector database of pre-indexed documents for the most relevant chunks.
3. Inserts those chunks into the LLM's [context window](/concepts/context-window) along with the original query.
4. Lets the LLM generate a response grounded in the retrieved evidence.

This pattern is sometimes called *"the LLM is the reasoning engine, the retrieval system is the memory"*.

## Why it works

RAG improves on a vanilla LLM in several ways:

- **Reduced hallucination** — the model is anchored to retrieved facts, not just its parametric memory.
- **Up-to-date knowledge** — change the retrieval index, change what the system "knows".
- **Source attribution** — retrieved documents can be cited, letting users verify claims.
- **Domain specialization** — swap the retrieval index to make the same LLM an expert in medicine, law, your company's docs, etc.
- **Smaller models suffice** — a 7B model with good RAG can outperform a 70B model without it on knowledge-intensive tasks.

## Architecture

A typical RAG pipeline has three components:

1. **Indexer** — splits documents into chunks (often 200-1000 tokens), embeds each chunk, and stores vectors in a database like FAISS, Pinecone, Weaviate, or pgvector.
2. **Retriever** — given a query, embeds it and returns the top-k most similar chunks (often using cosine similarity or BM25, sometimes hybrid).
3. **Generator** — feeds the retrieved chunks plus the query into the LLM with a prompt that says "answer using only the provided context, cite your sources".

## Advanced patterns

- **Hybrid search** — combine vector similarity with keyword search (BM25) for better recall.
- **Re-ranking** — use a cross-encoder model to re-score the top-k retrieved chunks before passing them to the LLM.
- **Multi-hop retrieval** — break complex queries into sub-questions, retrieve for each, then synthesize.
- **Self-RAG** — let the model decide when to retrieve and critique its own outputs.
- **Graph RAG** — retrieve over a knowledge graph instead of (or in addition to) vector chunks.

## When RAG is the wrong choice

RAG isn't a silver bullet. Consider alternatives when:

- The knowledge is small enough to fit in the prompt — use in-context learning instead.
- The task requires precise logic over many documents — fine-tuning or agentic workflows may work better.
- The retrieval index is the bottleneck — better chunking, embedding, or domain-specific preprocessing is the fix.
- Hallucination isn't the main failure mode — for example, in creative writing.

## RAG vs fine-tuning

The classic trade-off:

| | RAG | Fine-tuning |
|---|---|---|
| **Cost** | Lower — just maintain an index | Higher — GPU training runs |
| **Update frequency** | Real-time — re-index | Periodic — re-train |
| **Source attribution** | Built-in | None — knowledge baked into weights |
| **Capacity** | Limited by context window | Limited by model size |
| **Best for** | Factual, rapidly-changing knowledge | Style, format, domain jargon |

In practice, the strongest systems combine both: fine-tune for style and domain familiarity, RAG for fresh facts.

## See also

- [Large Language Model](/concepts/large-language-model) — the generator
- [Embedding](/concepts/embedding) — the representation used for retrieval
- [Knowledge Base](/concepts/knowledge-base) — what RAG retrieves from
- [Context Window](/concepts/context-window) — limits how much retrieved content fits
