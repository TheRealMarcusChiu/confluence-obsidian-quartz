---
title: "Claude Code - Point to Ollama"
created: 2026-01-25T15:48:48.839-06:00
modified: 2026-01-25T15:50:05.155-06:00
parent: "[[Claude Code]]"
children: []
---
Run in terminal:
```
export ANTHROPIC_AUTH_TOKEN=ollama
export ANTHROPIC_BASE_URL=http://localhost:11434
claude --model qwen3-coder
```
- You choose the [[ollama]] model you want (e.g., <code><font style="color: rgb(122,134,154);">qwen3-coder</font></code>, <code><font style="color: rgb(122,134,154);">gpt-oss:20b</font></code>, etc.)
