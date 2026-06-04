---
title: "TMUX - tmux.conf"
created: 2020-01-12T13:02:53.165-06:00
modified: 2020-01-12T13:07:11.481-06:00
parent: "[[Terminal Multiplexor (TMUX)]]"
children:
  - "[[TMUX Status Bar]]"
---
### Sourcing TMUX Config File

This can be done either from within tmux, by pressing Ctrl+B and then <code>:</code> to bring up a command prompt, and typing:
```
:source-file ~/.tmux.conf
```

Or simply from a shell:
```
$ tmux source-file ~/.tmux.conf
```
