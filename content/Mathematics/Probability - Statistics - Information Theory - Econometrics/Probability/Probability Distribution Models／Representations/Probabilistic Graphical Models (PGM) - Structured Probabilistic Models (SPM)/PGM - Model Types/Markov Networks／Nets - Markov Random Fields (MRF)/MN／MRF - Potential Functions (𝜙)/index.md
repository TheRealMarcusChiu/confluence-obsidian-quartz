---
title: "MN／MRF - Potential Functions (𝜙)"
created: 2021-09-13T05:26:49.076-05:00
modified: 2026-05-24T19:53:14.773-05:00
parent: "[[Markov Networks／Nets - Markov Random Fields (MRF)]]"
children: []
---
````excerpt
rather than specifying [[Conditional Probability Table (CPT)|conditional probability tables (CPTs)]] like in [[Bayesian Networks (BN)|Bayesian Networks]], Markov Networks specifies (non-negative) <strong>potential functions </strong>or <strong>factors</strong> (𝜙) over sets of variables associated with each [[Graph Theory - Terminology|clique]] of the graph. Like CPTs, potential functions can be represented as a table, but it is not necessarily normalized

a <strong>potential function</strong> of a clique 𝑐 containing variables 𝒙<sub>𝑐</sub> = {𝐴, 𝐵, 𝐷} is denoted as:
- 𝜙<sub>𝑐</sub>(𝒙<sub>𝑐</sub>)
- 𝜙<sub>𝑐</sub>(𝐴, 𝐵, 𝐷)

𝜙<sub>𝑐</sub>(𝐴, 𝐵, 𝐷) specifies a table of non-negative potential values for each assignment of variables: 𝐴, 𝐵, and 𝐷
###### Potential Function Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Potential Function Types",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Example",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "single-node/unary potential",
        "bg": "#F4F5F7"
      },
      "𝜙(𝐴)"
    ],
    [
      {
        "content": "two-node/pairwise/edge potential",
        "bg": "#F4F5F7"
      },
      "𝜙(𝐴, 𝐵)"
    ],
    [
      {
        "content": "multi-node/higher-order potential",
        "bg": "#F4F5F7"
      },
      "𝜙(𝐴, 𝐵, ...)"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
### Example Multi-Node Potential Function

assuming each variable are boolean valued

```merge-table
{
  "rows": [
    [
      {
        "content": "𝐴",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝐵",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝐷",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝜙<sub>𝑐</sub>(𝐴, 𝐵, 𝐷)",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "0",
      "0",
      "0",
      "30"
    ],
    [
      "0",
      "0",
      "1",
      "1"
    ],
    [
      "0",
      "1",
      "0",
      "16"
    ],
    [
      "0",
      "1",
      "1",
      "10"
    ],
    [
      "1",
      "0",
      "0",
      "10"
    ],
    [
      "1",
      "0",
      "1",
      "100"
    ],
    [
      "1",
      "1",
      "0",
      "1"
    ],
    [
      "1",
      "1",
      "1",
      "5"
    ]
  ]
}
```
````
^excerpt
