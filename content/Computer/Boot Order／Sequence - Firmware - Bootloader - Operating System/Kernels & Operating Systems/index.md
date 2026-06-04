---
title: "Kernels & Operating Systems"
created: 2019-09-18T09:24:47.299-05:00
modified: 2021-12-11T15:41:37.011-06:00
parent: "[[Boot Order／Sequence - Firmware - Bootloader - Operating System]]"
children:
  - "[[Kernel／Kernels (OS)]]"
  - "[[Operating Systems (OS)]]"
---
````excerpt
- <strong>Kernel</strong> is a system program that provides an interface between software and hardware of the system
- <strong>Operating system</strong> is system program that provides an interface between the computer and the user
````
^excerpt

```merge-table
{
  "rows": [
    [
      {
        "content": "COMPARISON",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "KERNEL",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "OPERATING SYSTEM",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "Basic",
        "bg": "#F4F5F7"
      },
      "Kernel is an important part of the operating system",
      "Operating System is a system program"
    ],
    [
      {
        "content": "Interface",
        "bg": "#F4F5F7"
      },
      "Kernel is an interface between software and hardware of the computer",
      "Operating System is an interface between user and hardware of the computer"
    ],
    [
      {
        "content": "Types",
        "bg": "#F4F5F7"
      },
      "Monolithic kernels and Microkernels",
      "Single and Multiprogramming batch system, Distributed operating system, Real-time operating system"
    ],
    [
      {
        "content": "Purpose",
        "bg": "#F4F5F7"
      },
      "Kernel memory management, process management, task management, disk management",
      "In addition to the responsibilities of Kernel, Operating System is responsible for the protection and security of the computer"
    ]
  ]
}
```
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
