---
title: "Claude Code - Sessions"
created: 2026-01-25T12:19:07.394-06:00
modified: 2026-01-25T12:21:15.244-06:00
parent: "[[Claude Code]]"
children: []
---
###### Claude Sessions

enables:
- rewinding
- resuming
- forking

sessions:
- are ephemeral (i.e. each new session start fresh)
- sessions able to work across git branches
- sessions are tied to current directory
- can run parallel sessions by using \`[[git - worktrees|git worktrees]]\` which create separate directories for individual branches

# Claude Session Commands

To continue most recent session:
<code><font style="color: rgb(122,134,154);">claude --continue</font></code>

To continue off session abc123:
<code><font style="color: rgb(122,134,154);">claude --resume abc123</font></code>

To branch off current session:
<code><font style="color: rgb(122,134,154);">claude --continue --fork-session</font></code>

To branch off session abc123:
<code><font style="color: rgb(122,134,154);">claude --resume abc123 --fork-session</font></code>
