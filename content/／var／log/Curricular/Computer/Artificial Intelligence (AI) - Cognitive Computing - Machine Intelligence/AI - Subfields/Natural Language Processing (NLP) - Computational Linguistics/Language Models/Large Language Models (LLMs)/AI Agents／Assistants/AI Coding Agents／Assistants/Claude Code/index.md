---
title: "Claude Code"
created: 2026-01-25T12:15:16.895-06:00
modified: 2026-01-25T16:24:37.249-06:00
parent: "[[AI Coding Agents／Assistants]]"
children:
  - "[[Claude Code - Features／Extensions (CLAUDE.md Skills MCP Hooks Subagents Plugins & Marketplace)]]"
  - "[[Claude Code - Point to Ollama]]"
  - "[[Claude Code - Sessions]]"
---
###### Claude Code
````excerpt
- is [[Anthropic]]'s AI-powered coding assistant designed to work directly from your terminal or command line
````
^excerpt

# Internals of Claude Code LLM

LLMs can increase context window by:
- chunking
- indexing
- iterating

Claude builds a mental index (not a full snapshot) of the code base by:
- summarizing files
- extract symbols (functions, classes, APIs)
- keeps compressed representations instead of raw code
- e.g. "There is a \`UserService\` that validates auth tokens and calls \`BillingClient\`"

Claude rereads the code file when needed

Claude Code is like "<em>A very fast engineer who can only have 200k tokens open on their desk, but can walk back to the bookshelf unlimited times</em>"
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Resources
- [https://code.claude.com/docs](https://code.claude.com/docs)
- [https://claude.ai/](https://claude.ai/)
- [https://platform.claude.com/](https://platform.claude.com/)
