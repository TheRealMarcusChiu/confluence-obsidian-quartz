---
title: "dash (Debian Almquist SHell)"
created: 2019-12-27T01:55:03.540-06:00
modified: 2025-09-09T22:28:24.515-05:00
parent: "[[UNIX Shell - Implementation Types]]"
children: []
---
###### dash (Debian Almquist SHell)
````excerpt
- is a modern POSIX-compliant implementation of <code><font style="color: rgb(122,134,154);">/bin/sh</font></code> (sh, Bourne shell)
- is not [[bash (Bourne-Again SHell)|Bash]] compatible, but Bash tries to be mostly compatible with POSIX, and thus Dash.
- shines in:
	- Speed of execution. Roughly [4x times faster](https://unix.stackexchange.com/questions/148035/is-dash-or-some-other-shell-faster-than-bash) than Bash and others.
	- Very limited resources (disk space, RAM or CPU). As minimalistic as possible - much smaller (134.1 kB vs 6.5 MB installed, 13 kSLOC vs 176 kSLOC) than Bash and others.
	- Security. Dash has a much smaller attack surface, while still having many eyes on its code
````
^excerpt
