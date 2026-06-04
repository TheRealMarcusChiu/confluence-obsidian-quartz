---
title: "Windows CMD - Accounts"
created: 2019-11-17T19:47:01.763-06:00
modified: 2019-11-17T20:22:31.756-06:00
parent: "[[Windows]]"
children: []
---
For example, if you want to change Maximum password age to 42 days, type the command:
<code>net accounts /maxpwage:42</code>

Set Minimum password age to 2 days, type:
<code>net accounts /minpwage:2</code>

Set Minimum password length to 3 characters, type:
<code>net accounts /minpwlen:3</code>
### Log On Event IDs

```merge-table
{
  "rows": [
    [
      "<strong>Event</strong>",
      "<strong>Event ID</strong>",
      "<strong>Event Log</strong>",
      "<strong>Session Start/Stop</strong>"
    ],
    [
      "Logon",
      "4624",
      "Security",
      "Start"
    ],
    [
      "Logoff",
      "4647",
      "Security",
      "Stop"
    ],
    [
      "Startup",
      "6005",
      "System",
      "Stop"
    ],
    [
      "RDP Session Reconnect",
      "4778",
      "Security",
      "Start"
    ],
    [
      "RDP Session Disconnect",
      "4779",
      "Security",
      "Stop"
    ],
    [
      "Unlocked",
      "4800",
      "Security",
      "Start"
    ],
    [
      "Locked",
      "4801",
      "Security",
      "Stop"
    ]
  ]
}
```
