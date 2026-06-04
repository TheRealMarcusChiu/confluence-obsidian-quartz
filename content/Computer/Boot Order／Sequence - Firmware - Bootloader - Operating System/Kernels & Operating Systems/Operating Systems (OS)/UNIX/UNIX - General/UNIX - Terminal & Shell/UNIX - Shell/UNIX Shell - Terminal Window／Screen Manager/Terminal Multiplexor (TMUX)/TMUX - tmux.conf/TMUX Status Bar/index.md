---
title: "TMUX Status Bar"
created: 2025-04-12T15:24:39.534-05:00
modified: 2025-04-12T15:26:40.108-05:00
parent: "[[TMUX - tmux.conf]]"
children: []
---
Is displayed at the bottom of the terminal window.
# Example

Tmux actually have a left and right status bar. So just pick one (or both) to display some infos:
```
echo "set-option -g status-left "shblah" >> ~/.tmux.conf
tmux
```
