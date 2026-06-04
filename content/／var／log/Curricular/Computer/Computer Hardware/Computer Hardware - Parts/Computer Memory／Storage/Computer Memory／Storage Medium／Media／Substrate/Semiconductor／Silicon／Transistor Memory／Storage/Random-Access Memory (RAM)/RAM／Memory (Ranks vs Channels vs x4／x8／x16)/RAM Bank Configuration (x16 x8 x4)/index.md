---
title: "RAM Bank Configuration (x16 x8 x4)"
created: 2024-08-07T21:17:00.380-05:00
modified: 2025-12-21T22:10:03.236-06:00
parent: "[[RAM／Memory (Ranks vs Channels vs x4／x8／x16)]]"
children: []
---
###### RAM Bank Configuration (x16 x8 x4)
````excerpt
- banks are sub-units inside a single memory chip
- x8, x16, x4 describe the organization of banks in groups within each memory chip:
	- x16 - has 2 bank groups of 8 banks in each group
	- x8 - has 4 bank groups of of 4 banks in each group
````
^excerpt

# Bank Configuration (DDR4)

In <strong>DDR4</strong>, <em>all</em> x4 / x8 / x16 devices have <strong>16 internal banks total</strong>, organized into <strong>bank groups</strong>.
What changes with x4/x8/x16 is <strong>how many bank groups</strong> there are and <strong>how many banks per group</strong>.

x4 and x8 have the same bank-group structure in DDR4. The difference is data width per chip, not bank organization.

```merge-table
{
  "rows": [
    [
      {
        "content": "Device width",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Bank groups",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Banks per group",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Total banks",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Data Width per Chip",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Price",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "x4",
        "bg": "#F4F5F7"
      },
      "4",
      "4",
      "16",
      "4-bit",
      "Expensive"
    ],
    [
      {
        "content": "x8",
        "bg": "#F4F5F7"
      },
      "4",
      "4",
      "16",
      "8-bit",
      "Mid Range"
    ],
    [
      {
        "content": "x16",
        "bg": "#F4F5F7"
      },
      "2",
      "8",
      "16",
      "16-bit",
      "Cheapest"
    ]
  ]
}
```

x8 is faster than x16 because the greater number of bank groups means more parallelism and better performance

![](https://www.youtube.com/watch?v=w2bFzQTQ9aI)
