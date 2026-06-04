---
title: "Gated SR Latch"
created: 2023-01-18T01:47:42.287-06:00
modified: 2023-01-18T03:50:26.175-06:00
parent: "[[Flip-Flops - Latches]]"
children: []
---
###### Gated SR Latch
````excerpt
- is a gated version of an [[Set／Reset Latch (SR／S-R Latch)|SR Latch]]
````
^excerpt

# Gated SR Latch - Architecture
![[Gated SR Latch/gated-sr-latch-architecture.png|301]]
# Gated SR Latch - Truth Table

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
        "content": "S",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "R",
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
      "x",
      "Latched",
      "Latched"
    ],
    [
      "1",
      "0",
      "0",
      "Latched",
      "Latched"
    ],
    [
      "1",
      "0",
      "1",
      "0",
      "1"
    ],
    [
      "1",
      "1",
      "0",
      "1",
      "0"
    ],
    [
      "1",
      "1",
      "1",
      "0",
      "0"
    ]
  ],
  "tableStyle": "text-align: center;"
}
```
