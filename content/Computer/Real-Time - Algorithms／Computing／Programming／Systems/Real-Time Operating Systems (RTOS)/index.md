---
title: "Real-Time Operating Systems (RTOS)"
created: 2019-10-15T22:14:37.031-05:00
modified: 2023-02-18T12:55:00.546-06:00
parent: "[[Real-Time - Algorithms／Computing／Programming／Systems]]"
children:
  - "[[Litmus-RT]]"
  - "[[RTX]]"
  - "[[VxWorks]]"
  - "[[Zephyr]]"
---
###### Real-Time Operating Systems (RTOS)
````excerpt
- is an [[Operating Systems (OS)|operating system]] intended to serve real-time applications that process data as it comes in, typically without buffer delays
````
^excerpt

# RTOS Types

```merge-table
{
  "rows": [
    [
      {
        "content": "RTOS",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Examples",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Dedicated RTOS",
        "bg": "#F4F5F7"
      },
      "an operating system built from the ground up for dedicated real-time applications",
      "- Theory-Oriented Real-Time Operating System (TOROS)?\n- [[Zephyr]]\n- [[VxWorks]]"
    ],
    [
      {
        "content": "Extended RTOS",
        "bg": "#F4F5F7"
      },
      "taking an existing generic operating system and adding extensions for real-time applications",
      "- [[Litmus-RT]]\n- [[RTX]]"
    ]
  ]
}
```
