---
title: "Claude Code - Features／Extensions (CLAUDE.md Skills MCP Hooks Subagents Plugins & Marketplace)"
created: 2026-01-25T12:18:43.118-06:00
modified: 2026-05-12T01:20:00.782-05:00
parent: "[[Claude Code]]"
children: []
---
# Claude Code Features/Extensions

```merge-table
{
  "rows": [
    [
      {
        "content": "Feature",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "Key capabilities",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "When to use it",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "Example",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "Resources",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      }
    ],
    [
      {
        "content": "[CLAUDE.md](http://CLAUDE.md)",
        "bg": "#F4F5F7"
      },
      "Persistent context file",
      "Provides consistent instructions/context across every session.",
      "Project conventions, \"always do X\" rules",
      "\"Use pnpm, not npm. Run tests before committing.\"",
      "[Docs](https://code.claude.com/docs/en/memory)"
    ],
    [
      {
        "content": "Skills",
        "bg": "#F4F5F7"
      },
      "Extensible workflows (<code>[SKILL.md](http://SKILL.md)</code>)",
      "Extends knowledge and workflows; can be invoked manually (<code>/deploy</code>) or automatically.",
      "Reusable content, reference docs, repeatable tasks",
      "<code><font style=\"color: rgb(122,134,154);\">/deploy</font></code> runs your deployment checklist; API docs skill with endpoint patterns",
      "[Docs](https://code.claude.com/docs/en/skills) / [AgentSkills](https://agentskills.io/what-are-skills)"
    ],
    [
      {
        "content": "MCP",
        "bg": "#F4F5F7"
      },
      "Model Context Protocol",
      "Connects Claude to external services, tools, and data sources.",
      "External data or actions",
      "Query your database, post to Slack, control a browser",
      "[Docs](https://code.claude.com/docs/en/mcp)"
    ],
    [
      {
        "content": "Hooks",
        "bg": "#F4F5F7"
      },
      "Deterministic scripts",
      "Runs OUTSIDE the main LLM loop as pre-defined, reliable scripts.",
      "Automation that must run on every matching event",
      "Run ESLint after every file edit",
      "[Docs](https://code.claude.com/docs/en/hooks)"
    ],
    [
      {
        "content": "Subagents",
        "bg": "#F4F5F7"
      },
      "Isolated execution loops",
      "Runs own loops in isolated context, returning summaries to the main session.",
      "Context isolation, parallel tasks, specialized workers",
      "Research task that reads many files but returns only key findings",
      "[Docs](https://code.claude.com/docs/en/sub-agents)"
    ],
    [
      {
        "content": "[Agent teams](https://code.claude.com/docs/en/agent-teams)",
        "bg": "#F4F5F7"
      },
      "Coordinate multiple independent Claude Code sessions",
      "",
      "Parallel research, new feature development, debugging with competing hypotheses",
      "Spawn reviewers to check security, performance, and tests simultaneously",
      ""
    ],
    [
      {
        "content": "Plugins",
        "bg": "#F4F5F7"
      },
      "Distribution packages",
      "Bundles skills, hooks, subagents, and MCP servers for reuse across repositories (e.g. Claude in Chrome)",
      "",
      "",
      "[Docs](https://code.claude.com/docs/en/plugins), [Marketplace](https://code.claude.com/docs/en/plugin-marketplaces)"
    ]
  ]
}
```
# When to Use a Feature

```merge-table
{
  "rows": [
    [
      {
        "content": "Trigger",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "Add",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      }
    ],
    [
      {
        "content": "Claude gets a convention or command wrong twice",
        "align": "left"
      },
      {
        "content": "Add it to [CLAUDE.md](https://code.claude.com/docs/en/memory)",
        "align": "left"
      }
    ],
    [
      {
        "content": "You keep typing the same prompt to start a task",
        "align": "left"
      },
      {
        "content": "Save it as a user-invocable [skill](https://code.claude.com/docs/en/skills)",
        "align": "left"
      }
    ],
    [
      {
        "content": "You paste the same playbook or multi-step procedure into chat for the third time",
        "align": "left"
      },
      {
        "content": "Capture it as a [skill](https://code.claude.com/docs/en/skills)",
        "align": "left"
      }
    ],
    [
      {
        "content": "You keep copying data from a browser tab Claude can’t see",
        "align": "left"
      },
      {
        "content": "Connect that system as an [MCP server](https://code.claude.com/docs/en/mcp)",
        "align": "left"
      }
    ],
    [
      {
        "content": "A side task floods your conversation with output you won’t reference again",
        "align": "left"
      },
      {
        "content": "Route it through a [subagent](https://code.claude.com/docs/en/sub-agents)",
        "align": "left"
      }
    ],
    [
      {
        "content": "You want something to happen every time without asking",
        "align": "left"
      },
      {
        "content": "Write a [hook](https://code.claude.com/docs/en/hooks-guide)",
        "align": "left"
      }
    ],
    [
      {
        "content": "A second repository needs the same setup",
        "align": "left"
      },
      {
        "content": "Package it as a [plugin](https://code.claude.com/docs/en/plugins)",
        "align": "left"
      }
    ]
  ]
}
```
# Key Technical Distinctions
- <strong>Invocation Control:</strong> Skills can run in the current session or be offloaded to subagents for modularity
- <strong>Loading Behavior:</strong> Descriptions load at session start to minimize latency, while full content is injected only when the skill is triggered
- <strong>Portability:</strong> Use <strong>Plugins</strong> when you need to share a specific set of tools or logic across multiple different project

# When Features/Extensions Load into Context
![[Claude Code - Features／Extensions (CLAUDE.md Skills MCP Hooks Subagents Plugins & Marketplace)/claude-code--context-loading.png|700]]
# Hooks Lifecycle
![[Claude Code - Features／Extensions (CLAUDE.md Skills MCP Hooks Subagents Plugins & Marketplace)/claude-code--hooks-lifecycle.jpeg|400]]
