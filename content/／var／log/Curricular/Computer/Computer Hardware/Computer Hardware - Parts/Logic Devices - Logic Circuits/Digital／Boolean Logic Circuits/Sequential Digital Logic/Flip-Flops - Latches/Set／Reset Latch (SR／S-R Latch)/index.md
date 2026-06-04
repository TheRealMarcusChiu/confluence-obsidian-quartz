---
title: "Set／Reset Latch (SR／S-R Latch)"
created: 2023-01-18T01:41:16.831-06:00
modified: 2023-01-18T07:23:32.437-06:00
parent: "[[Flip-Flops - Latches]]"
children: []
---
###### Set/Reset Latch (SR/S-R Latch)
````excerpt
- is an asynchronous [[Flip-Flops - Latches|Latch]]
- can be created with two NOR gates that have a cross-feedback loop
````
^excerpt

# SR Latch - Variants
- SR NOR Latch
- SR NAND Latch
- SR AND-OR Latch
- JK Latch

# SR Latch - Architecture
![[Set／Reset Latch (SR／S-R Latch)/SR-latch-architecture.png|301]]
# SR Latch - Truth Table

```merge-table
{
  "rows": [
    [
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
      "0",
      "Latched",
      "Latched"
    ],
    [
      "0",
      "1",
      "0",
      "1"
    ],
    [
      "1",
      "0",
      "1",
      "0"
    ],
    [
      "1",
      "1",
      "0",
      "0"
    ]
  ],
  "tableStyle": "text-align: center;"
}
```
