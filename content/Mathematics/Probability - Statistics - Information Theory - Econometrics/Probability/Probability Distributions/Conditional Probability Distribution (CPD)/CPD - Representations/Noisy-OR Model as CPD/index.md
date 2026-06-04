---
title: "Noisy-OR Model as CPD"
created: 2021-09-13T05:27:14.474-05:00
modified: 2021-09-13T05:27:14.474-05:00
parent: "[[CPD - Representations]]"
children: []
---
Let:
- 𝑌 have parents {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>}
- {𝑌, 𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>} be a binary-valued random variables

The CPD 𝐏(𝑌|𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>) is a noisy-or if there are 𝑛+1 noise parameters {𝜆<sub>0</sub>, 𝜆<sub>1</sub>, ..., 𝜆<sub>𝑛</sub>} such that:
- 𝐏(𝑌=0|𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>) = (1 - 𝜆<sub>0</sub>) · 𝛱<sub>𝑖:𝑋<sub>𝑖</sub>=1</sub>(1 - 𝜆<sub>𝑖</sub>)
- 𝐏(𝑌=1|𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>) = 1 - \[(1 - 𝜆<sub>0</sub>) · 𝛱<sub>𝑖:𝑋<sub>𝑖</sub>=1</sub>(1 - 𝜆<sub>𝑖</sub>)\]

Thus, in a <strong>Noisy-OR Model</strong> each 𝑋<sub>𝑖</sub> influences 𝑌 independently

![[Noisy-OR Model as CPD/noisy-or-model.png]]

[[noisy-or-model.drawio]]
### Example CPT (𝜆<sub>0</sub>= 0)

```merge-table
{
  "rows": [
    [
      {
        "content": "𝑋<sub>1</sub>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝑋<sub>2</sub>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝑋<sub>3</sub>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝐏(𝑌=0|𝑋<sub>1</sub>, 𝑋<sub>2</sub>, 𝑋<sub>3</sub>)",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝐏(𝑌=1|𝑋<sub>1</sub>, 𝑋<sub>2</sub>, 𝑋<sub>3</sub>)",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "0",
      "0",
      "0",
      "1",
      "0"
    ],
    [
      "0",
      "0",
      "1",
      "1 - 𝜆<sub>3</sub>",
      "𝜆<sub>3</sub>"
    ],
    [
      "0",
      "1",
      "0",
      "1 - 𝜆<sub>2</sub>",
      "𝜆<sub>2</sub>"
    ],
    [
      "1",
      "0",
      "0",
      "1 - 𝜆<sub>1</sub>",
      "𝜆<sub>1</sub>"
    ],
    [
      "0",
      "1",
      "1",
      "(1 - 𝜆<sub>2</sub>)(1 - 𝜆<sub>3</sub>)",
      "1 - [(1 - 𝜆<sub>2</sub>)(1 - 𝜆<sub>3</sub>)]"
    ],
    [
      "1",
      "0",
      "1",
      "(1 - 𝜆<sub>1</sub>)(1 - 𝜆<sub>3</sub>)",
      "1 - [(1 - 𝜆<sub>1</sub>)(1 - 𝜆<sub>3</sub>)]"
    ],
    [
      "1",
      "1",
      "0",
      "(1 - 𝜆<sub>1</sub>)(1 - 𝜆<sub>2</sub>)",
      "1 - [(1 - 𝜆<sub>1</sub>)(1 - 𝜆<sub>2</sub>)]"
    ],
    [
      "1",
      "1",
      "1",
      "(1 - 𝜆<sub>1</sub>)(1 - 𝜆<sub>2</sub>)(1 - 𝜆<sub>3</sub>)",
      "1 - [(1 - 𝜆<sub>1</sub>)(1 - 𝜆<sub>2</sub>)(1 - 𝜆<sub>3</sub>)]"
    ]
  ]
}
```
