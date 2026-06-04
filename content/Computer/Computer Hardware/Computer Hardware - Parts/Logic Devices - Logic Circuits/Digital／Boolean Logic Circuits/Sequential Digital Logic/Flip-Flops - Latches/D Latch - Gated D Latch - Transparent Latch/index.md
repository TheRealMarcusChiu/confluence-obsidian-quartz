---
title: "D Latch - Gated D Latch - Transparent Latch"
created: 2023-01-18T01:40:21.271-06:00
modified: 2023-01-18T07:23:01.934-06:00
parent: "[[Flip-Flops - Latches]]"
children: []
---
###### D Latch - Gated D Latch - Transparent Latch
````excerpt
- is a simple extension of the [[Gated SR Latch|gated SR latch]] that removes the possibility of invalid input states
````
^excerpt

# D Latch - Architecture
![[D Latch - Gated D Latch - Transparent Latch/d-latch-architecture.png|301]]
# D Latch - Truth Table

```merge-table
{
  "rows": [
    [
      {
        "content": "Enable",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "D",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Q",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Q",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      "0",
      "x",
      "Latched",
      "Latched"
    ],
    [
      "1",
      "0",
      "0",
      "1"
    ],
    [
      "1",
      "1",
      "1",
      "0"
    ]
  ],
  "tableStyle": "text-align: center;"
}
```
