---
title: "AI Agent／Assistant Frameworks"
created: 2026-01-29T00:59:47.951-06:00
modified: 2026-01-29T01:06:33.779-06:00
parent: "[[AI Agents／Assistants]]"
children: []
---
# Core AI Agent Frameworks (General‑Purpose)

These frameworks are foundational for building intelligent agents that can interact with LLMs, external tools, and workflows.

```merge-table
{
  "rows": [
    [
      {
        "content": "LangChain",
        "bg": "#F4F5F7"
      },
      "- One of the most widely used frameworks for connecting LLMs with tools, memory, APIs, and workflows.\n- Huge ecosystem and integrations (vector DBs, external services).\n- Best as the <em>foundation layer</em> you build on. ([Index.dev](https://www.index.dev/blog/best-mcp-ai-agent-frameworks?utm_source=chatgpt.com))"
    ],
    [
      {
        "content": "LangGraph",
        "bg": "#F4F5F7"
      },
      "- Built on LangChain, uses <strong>graph/state‑machine workflows</strong> to manage complex, multi‑step agent logic.\n- Good for agents that need branching, retries, or structured execution paths.\n- Often paired with LangChain for robust workflow orchestration. ([DataCamp](https://www.datacamp.com/blog/ai-agent-frameworks?utm_source=chatgpt.com))"
    ],
    [
      {
        "content": "Semantic Kernel",
        "bg": "#F4F5F7"
      },
      "- SDK from Microsoft emphasizing <strong>skills</strong>, planners, memory, and cross‑platform support (Python, C\\#, Java).\n- Useful for enterprise‑grade solutions with integration needs.\n- Great if you’re in a Microsoft ecosystem. ([JPLoft](https://www.jploft.com/blog/best-ai-agent-frameworks?utm_source=chatgpt.com))"
    ],
    [
      {
        "content": "LlamaIndex",
        "bg": "#F4F5F7"
      },
      "- Not strictly a full agent <em>runtime</em>, but a powerful toolkit for <strong>data/RAG-centric agents</strong>: indexing, retrieval, and grounding agents in real content.\n- Excellent for knowledge‑intensive assistants. ([dailybitsbyai.com](https://dailybitsbyai.com/agentic-ai/ai-agent-frameworks-choose-langchain-llamaindex-and-more/?utm_source=chatgpt.com))"
    ]
  ]
}
```
# Autonomous & Multi‑Agent Orchestration Frameworks

These help coordinate multiple agents or automate tasks with little supervision.

```merge-table
{
  "rows": [
    [
      {
        "content": "[[AutoGen]] (Microsoft)",
        "bg": "#F4F5F7"
      },
      "- Strong support for <strong>multi‑agent orchestration</strong> and async communication.\n- Useful for projects requiring specialized agent roles (planner, coder, reviewer). ([DataCamp](https://www.datacamp.com/blog/ai-agent-frameworks?utm_source=chatgpt.com))"
    ],
    [
      {
        "content": "[[AutoGPT]]",
        "bg": "#F4F5F7"
      },
      "- One of the earliest autonomous agent frameworks. Automatically decomposes goals into subtasks.\n- Great for experimentation and understanding autonomous workflows.\n- Simpler and less structured — good for learning/prototyping. ([LinkedIn](https://www.linkedin.com/posts/boston-institute-of-analytics-electronic-city-bengaluru-campus_leading-agentic-ai-frameworks-hands-on-activity-7416856631738638337-FBmW?utm_source=chatgpt.com))"
    ],
    [
      {
        "content": "[[CrewAI]]",
        "bg": "#F4F5F7"
      },
      "- Focuses on <strong>role‑based agent “crews”</strong> that collaborate on tasks.\n- Easier to start with than some graph‑based frameworks. ([DataCamp](https://www.datacamp.com/blog/ai-agent-frameworks?utm_source=chatgpt.com))"
    ],
    [
      {
        "content": "Phidata / Agno",
        "bg": "#F4F5F7"
      },
      "- Clean Python APIs and built‑in features for launching multi‑agent systems.\n- Ideal if you want a fast prototype or a lightweight orchestration layer. ([DataCamp](https://www.datacamp.com/blog/ai-agent-frameworks?utm_source=chatgpt.com))"
    ]
  ]
}
```
# Specialized & Emerging Frameworks

Great supplements to the above or good choices for specific niches.

```merge-table
{
  "rows": [
    [
      {
        "content": "Letta",
        "bg": "#F4F5F7"
      },
      "- Focused on stateful agents with memory and long‑term context handling.\n- Often considered beginner‑friendly for building agents with persistent state. ([Codecademy](https://www.codecademy.com/article/top-ai-agent-frameworks-in-2025?utm_source=chatgpt.com))"
    ],
    [
      {
        "content": "DSPy",
        "bg": "#F4F5F7"
      },
      "- A Pythonic DSL for defining <strong>prompt flows and agent logic</strong> declaratively.\n- Efficient for structured prompt pipelines. ([Geek Bacon](https://geekbacon.com/2024/12/09/ai-agents-stacks-what-are-the-use-cases/?utm_source=chatgpt.com))"
    ],
    [
      {
        "content": "Smolagents (Hugging Face)",
        "bg": "#F4F5F7"
      },
      "- Ultra‑lightweight, code‑centric agent framework for building minimal agents quickly.\n- Good for hackathons or learning how agents operate under the hood. ([jacoblog.com](https://jacoblog.com/ai-agent-tools-2025?utm_source=chatgpt.com))"
    ],
    [
      {
        "content": "Pydantic AI",
        "bg": "#F4F5F7"
      },
      "- Adds <strong>type safety and structured I/O</strong> to agent workflows — helpful for correctness and debugging.\n- Works particularly well with Python developers who like fast, validated agent logic. ([Bright Data](https://brightdata.com/blog/ai/best-ai-agent-frameworks?utm_source=chatgpt.com))"
    ],
    [
      {
        "content": "OpenAI Agents (SDK)",
        "bg": "#F4F5F7"
      },
      "- Not in your list, but worth mentioning: native framework from OpenAI for building agent behaviors with memory and tools.\n- Best for teams already committed to the OpenAI ecosystem. ([Reddit](https://www.reddit.com//r/AI_Agents/comments/1oukxzx/tested_5_agent_frameworks_in_production_heres/?utm_source=chatgpt.com))"
    ]
  ]
}
```
# How to Choose What to Start With

Here’s a simple progression depending on your goals:

```merge-table
{
  "rows": [
    [
      {
        "content": "Beginner / Prototyping",
        "bg": "#F4F5F7"
      },
      "- Start with <strong>[[AutoGPT]]</strong>, <strong>[[CrewAI]]</strong>, or <strong>Smolagents</strong> — easy to try.\n- Letta or DSPy if you want simple workflows with persistent state. ([Codecademy](https://www.codecademy.com/article/top-ai-agent-frameworks-in-2025?utm_source=chatgpt.com))"
    ],
    [
      {
        "content": "General Agents & Apps",
        "bg": "#F4F5F7"
      },
      "- Use <strong>LangChain</strong> as the backbone.\n- Add <strong>LlamaIndex</strong> for data‑centric agents.\n- Introduce <strong>LangGraph</strong> when workflows become complex. ([DataCamp](https://www.datacamp.com/blog/ai-agent-frameworks?utm_source=chatgpt.com))"
    ],
    [
      {
        "content": "Multi‑Agent / Enterprise",
        "bg": "#F4F5F7"
      },
      "- <strong>[[AutoGen]]</strong> or <strong>Semantic Kernel</strong> for robust orchestration.\n- Combine frameworks (e.g., LangChain + Semantic Kernel for enterprise, or LangGraph + PydanticAI for type‑safe workflows). ([dailybitsbyai.com](https://dailybitsbyai.com/agentic-ai/ai-agent-frameworks-choose-langchain-llamaindex-and-more/?utm_source=chatgpt.com))"
    ]
  ]
}
```
# Suggested Starter Stack (Example)

Here’s a <strong>starter stack</strong> you can adopt right away:
1. <strong>Core engine:</strong> LangChain
2. <strong>Retrieval/Data:</strong> LlamaIndex
3. <strong>Workflows:</strong> LangGraph
4. <strong>Multi‑agent roles:</strong> CrewAI / AutoGen
5. <strong>Structured agent logic:</strong> Pydantic AI
6. <strong>Lightweight experimentation:</strong> AutoGPT / Smolagents
