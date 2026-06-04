---
title: "$TERM Environment Variable - Terminal Type"
created: 2024-07-12T18:02:05.663-05:00
modified: 2024-07-12T18:08:21.659-05:00
parent: "[[UNIX - Shell]]"
children: []
---
The <code><font style="color: rgb(122,134,154);">\$TERM</font></code> environment variable, usually defined in the [[UNIX Shell - Profile & Run Commands (RC) File|shell profile]], is a variable that indicates the terminal type.

A terminal type specifies the model of the [[Terminal Application／Emulation／Emulator|terminal emulator]].
# Terminal Types
- xterm
- xterm-color - if you're on an older system and colors don't work
- xterm-256color
- vt100
- gnome-terminal
- rxvt-unicode
- putty, konsole, Eterm, rxvt, gnome, etc. - if you're running an XTerm emulator and some of the function keys, Backspace, Delete, Home, and End don't work properly
- screen - if running inside GNU [[screen (UNIX Command)|screen]] (or [[Terminal Multiplexor (TMUX)|tmux]])
- linux - when logging in via a Linux console (e.g. Ctrl+Alt+F1)
- dumb - when everything is broken

# Resources
- [https://www.baeldung.com/linux/term-environment-variable](https://www.baeldung.com/linux/term-environment-variable)
