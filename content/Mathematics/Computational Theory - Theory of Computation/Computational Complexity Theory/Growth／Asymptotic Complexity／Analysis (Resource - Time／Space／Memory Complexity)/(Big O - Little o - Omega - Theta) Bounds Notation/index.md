---
title: "(Big O - Little o - Omega - Theta) Bounds Notation"
created: 2021-09-13T05:24:53.686-05:00
modified: 2024-01-17T00:21:45.367-06:00
parent: "[[Growth／Asymptotic Complexity／Analysis (Resource - Time／Space／Memory Complexity)]]"
children: []
---
###### Big-O, Little-o, Omega, and Theta
- are formal notational methods for stating/describing the [[Growth／Asymptotic Complexity／Analysis (Resource - Time／Space／Memory Complexity)|growth of resource needs (time and storage)]] of an [[Algorithms|algorithm]]
```merge-table
{
  "rows": [
    [
      {
        "content": "Notation",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Use",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Example for 𝑓(𝑛) = 𝑛<sup>2</sup>",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "𝑂 - Big O",
        "bg": "#F4F5F7"
      },
      "𝑔(𝑛) is 𝑂(𝑓(𝑛))",
      "- iff for some constants 𝑐 and 𝑛<sub>0</sub>, 𝑔(𝑛) ≤ 𝑐·𝑓(𝑛) for all 𝑛 ≥ 𝑛<sub>0</sub>\n- 𝑓(𝑛) describes the UPPER bound for 𝑔(𝑛)\n- growth rate of 𝑔(𝑛) ≤ growth rate of 𝑓(𝑛)",
      "- 𝑔(𝑛) = 𝑛<sup>2</sup>\n- 𝑔(𝑛) = 𝑛\n- 𝑔(𝑛) = 1"
    ],
    [
      {
        "content": "𝛺 - Omega",
        "bg": "#F4F5F7"
      },
      "𝑔(𝑛) is 𝛺(𝑓(𝑛))",
      "- iff for some constants 𝑐 and 𝑛<sub>0</sub>, 𝑔(𝑛) ≥ 𝑐·𝑓(𝑛) for all 𝑛 ≥ 𝑛<sub>0</sub>\n- 𝑓(𝑛) describes the LOWER bound for 𝑔(𝑛)\n- growth rate of 𝑔(𝑛) ≥ growth rate of 𝑓(𝑛)",
      "- 𝑔(𝑛) = 𝑛<sup>2</sup>\n- 𝑔(𝑛) = 𝑛<sup>3</sup>\n- 𝑔(𝑛) = 𝑛<sup>𝑛</sup>"
    ],
    [
      {
        "content": "𝛩 - Theta",
        "bg": "#F4F5F7"
      },
      "𝑔(𝑛) is 𝛩(𝑓(𝑛))",
      "- iff 𝑔(𝑛) is 𝑂(𝑓(𝑛)) AND 𝑔(𝑛) is 𝛺(𝑓(𝑛))\n- 𝑓(𝑛) describes the EXACT bound for 𝑔(𝑛)\n- growth rate of 𝑔(𝑛) == growth rate of 𝑓(𝑛)",
      "- 𝑔(𝑛) = 𝑛<sup>2</sup>\n- 𝑔(𝑛) = 2𝑛<sup>2</sup>\n- 𝑔(𝑛) = 10𝑛<sup>2</sup>"
    ],
    [
      {
        "content": "𝑜 - Little o",
        "bg": "#F4F5F7"
      },
      "𝑔(𝑛) is 𝑜(𝑓(𝑛))",
      "- iff 𝑔(𝑛) is 𝑂(𝑓(𝑛)) AND 𝑔(𝑛) is NOT 𝛩(𝑓(𝑛))\n- 𝑓(𝑛) is the upper bound for 𝑔(𝑛) but that 𝑔(𝑛) can never be equal to 𝑓(𝑛)\n- growth rate of 𝑔(𝑛) \\< growth rate of 𝑓(𝑛)",
      "- 𝑔(𝑛) = 𝑛\n- 𝑔(𝑛) = 𝑙𝑜𝑔(𝑛)\n- 𝑔(𝑛) = 1"
    ]
  ]
}
```
