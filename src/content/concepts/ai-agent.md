---
title: AI Agent
description: An LLM-powered system that can perceive its environment, reason about goals, and take actions through tools — going beyond single-prompt generation.
summary: An LLM in a loop. Observe, think, act, re-observe. The shift from "answer one question" to "pursue a goal across many steps."
date: 2024-03-10
updated: 2024-12-15
category: ai
tags: [ai, agent, llm, tool-use, autonomous]
quality: featured
infobox:
  - label: Type
    value: Autonomous system
  - label: Core loop
    value: Observe → Think → Act → Repeat
  - label: Tooling
    value: Function calling, code execution, web browsing
  - label: Examples
    value: Claude Computer Use, AutoGPT, Devin, Cursor Agent
  - label: Risks
    value: Runaway loops, cost, prompt injection
  - label: See also
    value: '[Large Language Model](/concepts/large-language-model)'
aliases: [AI agents, agents, LLM agent, LLM agents]
related: [large-language-model, context-window, retrieval-augmented-generation]
references:
  - title: "ReAct: Synergizing Reasoning and Acting in Language Models"
    author: Yao et al.
    year: 2022
    url: https://arxiv.org/abs/2210.03629
  - title: "Toolformer: Language Models Can Teach Themselves to Use Tools"
    author: Schick et al.
    year: 2023
    url: https://arxiv.org/abs/2302.04761
---

An **AI Agent** is a system that uses a [Large Language Model](/concepts/large-language-model) as a reasoning engine to autonomously take actions in pursuit of a goal. Rather than responding to a single prompt with a single answer, an agent operates in a loop: it observes, thinks, acts, and re-observes.

## The agent loop

Most agents follow a pattern like this:

1. **Observe** — receive input from the user, the environment, or the output of a previous action.
2. **Reason** — the LLM decides what to do next. Often expressed as a "thought" step.
3. **Act** — call a tool (search, code execution, file write, API call) or respond to the user.
4. **Loop** — feed the action's result back into observation; continue until the goal is reached or a stopping condition triggers.

This loop is sometimes formalized as the **ReAct** pattern (Reason + Act) or the **function-calling** pattern exposed by OpenAI, Anthropic, and others.

## Tools: the agent's interface to the world

A bare LLM can only generate text. To be useful, agents need **tools** — typed functions the model can choose to call. Common categories:

- **Information** — web search, document retrieval, [RAG](/concepts/retrieval-augmented-generation) over a [knowledge base](/concepts/knowledge-base).
- **Computation** — code execution (Python via sandbox), calculator, SQL query.
- **File operations** — read, write, edit files in a workspace.
- **External APIs** — email, calendar, GitHub, Slack, custom services.
- **Browser automation** — navigate, click, fill forms, scrape.

The LLM doesn't *execute* these — it generates a structured call request, the host system runs it, and returns the result.

## Agent architectures

Several patterns have emerged:

- **Single-agent with tools** — one LLM loop, many tools. The simplest and most common.
- **Multi-agent** — multiple specialized agents collaborate, often via a shared message bus. Examples: AutoGen, CrewAI, LangGraph.
- **Hierarchical** — a "manager" agent delegates to worker agents. Used for complex multi-step tasks.
- **Reactive (no planning)** — act on the immediate observation. Simple, fast, brittle.
- **Plan-and-execute** — first generate a full plan, then execute step by step. Slower startup, more reliable.

## Memory

Agents have a fundamental memory problem: the [context window](/concepts/context-window) is finite. Solutions include:

- **Scratchpad** — short notes the agent writes to itself within a session.
- **Episodic memory** — log of past actions and outcomes, retrieved when relevant.
- **Semantic memory** — embeddings of past events, queried like a small [RAG](/concepts/retrieval-augmented-generation) system.
- **External store** — files, databases, or vector stores that persist across sessions.

## Failure modes

Agents are powerful but fragile:

- **Hallucinated tool calls** — calling a function with arguments that don't match the schema.
- **Looping** — repeating the same failing action forever without progress.
- **Goal drift** — losing sight of the original objective in a long trajectory.
- **Overconfidence** — taking destructive actions (deleting files, sending emails) without confirmation.
- **Cost runaway** — burning tokens in an infinite loop.

Production systems add guardrails: max steps, max cost, required user confirmation for high-impact actions, retry logic, and human-in-the-loop review.

## The current state

As of late 2024, agents are the most active research and product area in AI. Coding agents (Cursor, Devin, Claude Code), research agents (Perplexity, OpenAI Deep Research), and general-purpose assistants (Manus, AutoGPT successors) are all built on the same pattern: an LLM, a tool set, a memory system, and a loop.

## See also

- [Large Language Model](/concepts/large-language-model) — the reasoning engine
- [Context Window](/concepts/context-window) — the fundamental memory limit
- [Retrieval-Augmented Generation](/concepts/retrieval-augmented-generation) — how agents ground their actions in evidence
