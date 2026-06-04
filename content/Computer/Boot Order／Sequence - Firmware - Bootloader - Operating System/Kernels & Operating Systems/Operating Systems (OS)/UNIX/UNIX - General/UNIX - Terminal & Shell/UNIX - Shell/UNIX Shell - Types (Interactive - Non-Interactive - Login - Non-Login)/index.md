---
title: "UNIX Shell - Types (Interactive - Non-Interactive - Login - Non-Login)"
created: 2019-12-24T21:50:04.231-06:00
modified: 2023-05-31T18:00:57.667-05:00
parent: "[[UNIX - Shell]]"
children: []
---
# Interactive vs Non-Interactive

```merge-table
{
  "rows": [
    [
      {
        "content": "interactive shells",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- are shells where you can:\n\t- type commands (<strong>STDIN</strong> indicated by file descriptor <strong>0</strong>)\n\t- see output (<strong>STDOUT</strong> indicated by file descriptor <strong>1</strong>)\n\t- see errors (<strong>STDERR</strong> indicated by file descriptor <strong>2</strong>)"
    ],
    [
      {
        "content": "non-interactive shells",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- are shells launched by either:\n\t- programs (e.g. [[cron - anacron|cron]])\n\t- scripts that start with SHEBANG (i.e. <code><font style=\"color: rgb(122,134,154);\">\\#! /bin/bash</font></code>)"
    ]
  ]
}
```
# Login vs Non-Login

```merge-table
{
  "rows": [
    [
      {
        "content": "login shells",
        "header": true,
        "bg": "#F4F5F7"
      },
      ""
    ],
    [
      {
        "content": "non-login shells",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- for non-login shells:\n\t- environment variables are inherited from the shell (or other process) that created it, and\n\t- the file <code><font style=\"color: rgb(122,134,154);\">\\$HOME/.bashrc</font></code> is sourced to allow for other kinds of customization"
    ]
  ]
}
```
