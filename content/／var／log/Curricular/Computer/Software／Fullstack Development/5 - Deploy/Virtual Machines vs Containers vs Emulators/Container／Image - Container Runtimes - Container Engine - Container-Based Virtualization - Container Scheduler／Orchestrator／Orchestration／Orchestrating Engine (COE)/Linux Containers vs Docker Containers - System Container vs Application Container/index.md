---
title: "Linux Containers vs Docker Containers - System Container vs Application Container"
created: 2022-10-30T21:28:12.922-05:00
modified: 2023-02-20T10:13:02.334-06:00
parent: "[[Container／Image - Container Runtimes - Container Engine - Container-Based Virtualization - Container Scheduler／Orchestrator／Orchestration／Orchestrating Engine (COE)]]"
children: []
---
![[Linux Containers vs Docker Containers - System Container vs Application Container/lxc-vs-docker.png|600]]

```merge-table
{
  "rows": [
    [
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Type of",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Linux Containers (LXC)]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- aim to align with a specific distribution of [[Linux]]",
      "- System Containers - simulate a full operating system and let you run multiple processes at the same time"
    ],
    [
      {
        "content": "[[Docker]] Containers",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- aim to be distro-less and focus on the applications and dependencies",
      "- Application Containers - package a single process or application"
    ]
  ]
}
```
