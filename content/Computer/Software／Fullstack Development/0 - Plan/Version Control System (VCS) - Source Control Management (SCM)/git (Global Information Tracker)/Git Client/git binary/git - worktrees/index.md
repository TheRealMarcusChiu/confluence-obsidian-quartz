---
title: "git - worktrees"
created: 2026-01-23T23:54:00.830-06:00
modified: 2026-01-23T23:56:30.784-06:00
parent: "[[git binary]]"
children: []
---
Create two worktrees (all worktrees share the same git history):
```
$ git worktree add ../claude-project-feature-a -b feature-a
Preparing worktree (new branch 'feature-a')
HEAD is now at 58dbe6b initial commit

$ git worktree add ../claude-project-feature-b -b feature-b
Preparing worktree (new branch 'feature-b')
HEAD is now at 58dbe6b initial commit
```

List all worktrees:
```
$ git worktree list
/Users/marcuschiu/Desktop/claude-project            58dbe6b [master]
/Users/marcuschiu/Desktop/claude-project-feature-a  58dbe6b [feature-a]
/Users/marcuschiu/Desktop/claude-project-feature-b  58dbe6b [feature-b]
```

Remove a worktree:
```
git worktree remove ../claude-project-feature-a
```
