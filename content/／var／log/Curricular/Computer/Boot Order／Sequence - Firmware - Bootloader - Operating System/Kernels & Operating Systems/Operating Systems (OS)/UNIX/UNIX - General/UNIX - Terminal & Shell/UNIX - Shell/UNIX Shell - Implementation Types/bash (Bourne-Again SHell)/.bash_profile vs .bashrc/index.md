---
title: ".bash_profile vs .bashrc"
created: 2019-12-24T17:55:44.575-06:00
modified: 2023-04-30T22:36:24.835-05:00
parent: "[[bash (Bourne-Again SHell)]]"
children: []
---
- <strong><code>.bash\_profile</code></strong>
	- is executed for login shells
	- is a [[UNIX Shell - Profile & Run Commands (RC) File|profile file]]
- <strong><code>.bashrc</code></strong>
	- is executed for [[UNIX Shell - Types (Interactive - Non-Interactive - Login - Non-Login)|interactive]] non-login shells
	- is a [[UNIX Shell - Profile & Run Commands (RC) File|run commands (rc) file]]

# <strong>.bash\_profile</strong>

<strong><code>.bash\_profile</code></strong> is executed when you login (type username and password) via console, either sitting at the machine, or remotely via [[Secure Shell (SSH)|ssh]]
# <strong>.bashrc</strong>

if you’ve already logged into your machine, <strong><code>.bashrc</code></strong> is executed before the window command prompt when you:
- open a new terminal window/tab
- start a new bash instance by typing <code>/bin/bash</code> in a terminal

###### Snippet to Exit when not running interactively
```
# Early exit if not running interactively
case $- in
    *i*) ;;
      *) return;;
esac
```
# <strong>exceptions</strong>

On [[Macintosh OSs (Mac OS X) - macOS|OS X]], Terminal by default runs a login shell every time a new window/tab is opened, so this is a little different to most other systems, but you can configure that in the preferences
