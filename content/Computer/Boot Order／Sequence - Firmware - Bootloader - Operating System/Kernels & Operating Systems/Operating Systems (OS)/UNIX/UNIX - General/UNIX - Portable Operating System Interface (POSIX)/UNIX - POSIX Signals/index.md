---
title: "UNIX - POSIX Signals"
created: 2022-07-22T19:08:52.854-05:00
modified: 2022-07-22T19:21:18.853-05:00
parent: "[[UNIX - Portable Operating System Interface (POSIX)]]"
children: []
---
###### POSIX Signals
- are the cheapest form of [[Inter-Process／Interprocess Communication (IPC)|Inter-Process/Interprocess Communication (IPC)]]

# POSIX Signal Types

```merge-table
{
  "rows": [
    [
      {
        "content": "<code>SIGKILL</code>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "kills a process and cannot be caught"
    ],
    [
      {
        "content": "<code>SIGTERM</code>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "kills a process but can be caught to do a graceful exit"
    ],
    [
      {
        "content": "<code>SIGSTOP</code>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "suspends the process until you do a <code>SIGCONT</code>"
    ]
  ]
}
```
