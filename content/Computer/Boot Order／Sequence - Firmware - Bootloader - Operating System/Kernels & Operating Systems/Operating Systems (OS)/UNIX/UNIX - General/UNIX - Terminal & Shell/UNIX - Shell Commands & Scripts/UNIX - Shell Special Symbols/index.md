---
title: "UNIX - Shell Special Symbols"
created: 2019-12-31T15:08:07.068-06:00
modified: 2026-03-19T20:57:21.002-05:00
parent: "[[UNIX - Shell Commands & Scripts]]"
children:
  - "[[Multi Oneline Commands (Executing Multiple Commands in a Single Line)]]"
  - "[[UNIX - Command Redirection]]"
---
```merge-table
{
  "rows": [
    [
      {
        "content": "symbol",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "<code>;</code>",
        "bg": "#F4F5F7"
      },
      "separate a sequence of commands\n\n<code><font style=\"color: rgb(122,134,154);\">\\> cd ; ls</font></code>"
    ],
    [
      {
        "content": "|",
        "bg": "#F4F5F7"
      },
      "\"pipe\" - connects stdout of one program to stdin of another\n\n<code><font style=\"color: rgb(122,134,154);\">\\> cat /etc/passwd | wc -l</font></code>"
    ],
    [
      {
        "content": "<>",
        "bg": "#F4F5F7"
      },
      "file redirection:\n- <code><font style=\"color: rgb(122,134,154);\">\\></font></code> redirects stdout to a file\n- <code><font style=\"color: rgb(122,134,154);\">\\<</font></code> redirects stdin to a file\n\nIf file <code><font style=\"color: rgb(122,134,154);\">foo</font></code> already exists, <code><font style=\"color: rgb(122,134,154);\">\\> foo</font></code> overwrites it. If file <code><font style=\"color: rgb(122,134,154);\">foo</font></code> already exists, <code><font style=\"color: rgb(122,134,154);\">\\>\\> foo</font></code> appends new text to the end of the existing file\n\n<code><font style=\"color: rgb(122,134,154);\">\\> cat /etc/passwd \\> foo.txt\n\\> ls\nfoo.txt \n\\> wc -l \\< foo.txt\n218</font></code>"
    ],
    [
      {
        "content": "$?",
        "bg": "#F4F5F7"
      },
      "gives value \"returned\" by the last shell program run"
    ],
    [
      {
        "content": "&",
        "bg": "#F4F5F7"
      },
      "run program in the background"
    ]
  ],
  "tableStyle": "width: 95.5882%;"
}
```
