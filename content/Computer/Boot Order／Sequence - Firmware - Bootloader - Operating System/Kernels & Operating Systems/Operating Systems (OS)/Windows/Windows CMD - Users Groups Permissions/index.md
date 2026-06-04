---
title: "Windows CMD - Users Groups Permissions"
created: 2019-11-17T11:07:25.812-06:00
modified: 2026-05-17T14:00:23.503-05:00
parent: "[[Windows]]"
children:
  - "[[Windows CMD - Permissions]]"
---
<span style="white-space: pre-wrap"><code>runas /user:\*computer name\\\*account name explorer.exe</code></span>

# User  (net user)

```merge-table
{
  "rows": [
    [
      {
        "content": "description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "command",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "show users",
      "<span style=\"white-space: pre-wrap\"><code>net user</code></span>"
    ],
    [
      "add user",
      "<span style=\"white-space: pre-wrap\"><code>net user /add \\[username\\] \\[password\\]</code></span>"
    ],
    [
      "delete user",
      "<span style=\"white-space: pre-wrap\"><code>net user /delete \\[username\\]</code></span>"
    ],
    [
      "add user to admin group",
      "<span style=\"white-space: pre-wrap\"><code>net localgroup administrators \\[username\\] /add</code></span>"
    ]
  ]
}
```
# Groups (net localgroup)

```merge-table
{
  "rows": [
    [
      {
        "content": "description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "command",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "show groups",
      "<span style=\"white-space: pre-wrap\"><code>net localgroup</code></span>"
    ],
    [
      "shows users in group",
      "<span style=\"white-space: pre-wrap\"><code>net localgroup (groupname)</code></span>"
    ],
    [
      "add group",
      "<span style=\"white-space: pre-wrap\"><code>net localgroup (groupname) /add</code></span>"
    ],
    [
      "remove group",
      "<span style=\"white-space: pre-wrap\"><code>net localgroup (groupname) /delete</code></span>"
    ],
    [
      "add user to group",
      "<span style=\"white-space: pre-wrap\"><code>net localgroup (groupname) (username) /add</code></span>"
    ],
    [
      "remove user from group",
      "<span style=\"white-space: pre-wrap\"><code>net localgroup (groupname) (username) /delete</code></span>"
    ]
  ]
}
```
# Permissions (icacls)

refer to: [[Windows CMD - Permissions]]
