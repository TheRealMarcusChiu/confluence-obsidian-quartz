---
title: "UNIX Shell - Set Default"
created: 2019-03-15T15:40:35.986-05:00
modified: 2019-12-31T14:43:49.284-06:00
parent: "[[UNIX - Shell]]"
children: []
---
> [!expand]- chsh
> <strong>1. list the available shells in your machine</strong>
> <span style="white-space: pre-wrap"><code>  cat /etc/shells</code></span>
>
> You may need to add the path to the new shell binary into this file
>
> <strong>2. change default shell for current user</strong>
> <span style="white-space: pre-wrap"><code>  chsh -s /bin/bash</code><br><code>  chsh -s /usr/local/bin/fish</code></span>
>
> <strong>3. change default shell for a user</strong>
> <span style="white-space: pre-wrap"><code>  chsh -s /bin/bash username-here</code></span>

> [!expand]- passwd file
> modify the [[／etc／passwd - ／etc／shadow|/etc/passwd]] file

> [!expand]- macOS
> <strong>1. change default shell via mac’s directory utility</strong>
> <span style="white-space: pre-wrap"><code>  open directory utility app</code><br><code>  click on directory editor</code><br><code>  click on your name (exp. Marcus Chiu)</code><br><code>  modify UserShell value</code></span>
