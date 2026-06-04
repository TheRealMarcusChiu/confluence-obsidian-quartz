---
title: "Deterministic CPD"
created: 2021-09-13T05:27:13.683-05:00
modified: 2021-09-13T05:27:13.683-05:00
parent: "[[CPD - Representations]]"
children: []
---
<strong>Deterministic CPD</strong> - a variable's value is a deterministic function of its parents' values
### Example - Blood Types
![[Deterministic CPD/deterministic-conditional-probability-distribution.png|150]]

let:
- 𝑋<sub>1</sub> - be allele type from Mom
- 𝑋<sub>2</sub> - be allele type from Dad
- 𝑌 - phenotypical blood type
- {𝑋<sub>1</sub>, 𝑋<sub>2</sub>, 𝑌} can take on values {𝑎, 𝑏, 𝑎𝑏, 𝑜}
```merge-table
{
  "rows": [
    [
      {
        "content": "𝑥<sub>1</sub>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝑥<sub>2</sub>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝑦",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝐏(𝑌=𝑦|𝑋<sub>1</sub>=𝑥<sub>1</sub>,𝑋<sub>2</sub>=𝑥<sub>2</sub>)",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "𝑎",
        "bg": "red"
      },
      {
        "content": "𝑎",
        "bg": "red"
      },
      {
        "content": "𝑎",
        "bg": "red"
      },
      {
        "content": "1",
        "bg": "red"
      }
    ],
    [
      {
        "content": "𝑎",
        "bg": "red"
      },
      {
        "content": "𝑎",
        "bg": "red"
      },
      {
        "content": "𝑏",
        "bg": "green"
      },
      "0"
    ],
    [
      {
        "content": "𝑎",
        "bg": "red"
      },
      {
        "content": "𝑎",
        "bg": "red"
      },
      {
        "content": "𝑎𝑏",
        "bg": "yellow"
      },
      "0"
    ],
    [
      {
        "content": "𝑎",
        "bg": "red"
      },
      {
        "content": "𝑎",
        "bg": "red"
      },
      {
        "content": "𝑜",
        "bg": "blue"
      },
      "0"
    ],
    [
      {
        "content": "𝑎",
        "bg": "red"
      },
      {
        "content": "𝑏",
        "bg": "green"
      },
      {
        "content": "𝑎",
        "bg": "red"
      },
      "0"
    ],
    [
      {
        "content": "𝑎",
        "bg": "red"
      },
      {
        "content": "𝑏",
        "bg": "green"
      },
      {
        "content": "𝑏",
        "bg": "green"
      },
      "0"
    ],
    [
      {
        "content": "𝑎",
        "bg": "red"
      },
      {
        "content": "𝑏",
        "bg": "green"
      },
      {
        "content": "𝑎𝑏",
        "bg": "yellow"
      },
      {
        "content": "1",
        "bg": "yellow"
      }
    ],
    [
      {
        "content": "𝑎",
        "bg": "red"
      },
      {
        "content": "𝑏",
        "bg": "green"
      },
      {
        "content": "𝑜",
        "bg": "blue"
      },
      "0"
    ],
    [
      {
        "content": "𝑎",
        "bg": "red"
      },
      {
        "content": "𝑎𝑏",
        "bg": "yellow"
      },
      {
        "content": "𝑎",
        "bg": "red"
      },
      "0"
    ],
    [
      {
        "content": "𝑎",
        "bg": "red"
      },
      {
        "content": "𝑎𝑏",
        "bg": "yellow"
      },
      {
        "content": "𝑏",
        "bg": "green"
      },
      "0"
    ],
    [
      {
        "content": "𝑎",
        "bg": "red"
      },
      {
        "content": "𝑎𝑏",
        "bg": "yellow"
      },
      {
        "content": "𝑎𝑏",
        "bg": "yellow"
      },
      {
        "content": "1",
        "bg": "yellow"
      }
    ],
    [
      {
        "content": "𝑎",
        "bg": "red"
      },
      {
        "content": "𝑎𝑏",
        "bg": "yellow"
      },
      {
        "content": "𝑜",
        "bg": "blue"
      },
      "0"
    ],
    [
      {
        "content": "𝑎",
        "bg": "red"
      },
      {
        "content": "𝑜",
        "bg": "blue"
      },
      {
        "content": "𝑎",
        "bg": "red"
      },
      {
        "content": "1",
        "bg": "red"
      }
    ],
    [
      {
        "content": "𝑎",
        "bg": "red"
      },
      {
        "content": "𝑜",
        "bg": "blue"
      },
      {
        "content": "𝑏",
        "bg": "green"
      },
      "0"
    ],
    [
      {
        "content": "𝑎",
        "bg": "red"
      },
      {
        "content": "𝑜",
        "bg": "blue"
      },
      {
        "content": "𝑎𝑏",
        "bg": "yellow"
      },
      "0"
    ],
    [
      {
        "content": "𝑎",
        "bg": "red"
      },
      {
        "content": "𝑜",
        "bg": "blue"
      },
      {
        "content": "𝑜",
        "bg": "blue"
      },
      "0"
    ],
    [
      {
        "content": "𝑏",
        "bg": "green"
      },
      {
        "content": "𝑎",
        "bg": "red"
      },
      {
        "content": "𝑎",
        "bg": "red"
      },
      "0"
    ],
    [
      {
        "content": "𝑏",
        "bg": "green"
      },
      {
        "content": "𝑎",
        "bg": "red"
      },
      {
        "content": "𝑏",
        "bg": "green"
      },
      "0"
    ],
    [
      {
        "content": "𝑏",
        "bg": "green"
      },
      {
        "content": "𝑎",
        "bg": "red"
      },
      {
        "content": "𝑎𝑏",
        "bg": "yellow"
      },
      {
        "content": "1",
        "bg": "yellow"
      }
    ],
    [
      {
        "content": "𝑏",
        "bg": "green"
      },
      {
        "content": "𝑎",
        "bg": "red"
      },
      {
        "content": "𝑜",
        "bg": "blue"
      },
      "0"
    ],
    [
      {
        "content": "𝑏",
        "bg": "green"
      },
      {
        "content": "𝑏",
        "bg": "green"
      },
      {
        "content": "𝑎",
        "bg": "red"
      },
      "0"
    ],
    [
      {
        "content": "𝑏",
        "bg": "green"
      },
      {
        "content": "𝑏",
        "bg": "green"
      },
      {
        "content": "𝑏",
        "bg": "green"
      },
      {
        "content": "1",
        "bg": "green"
      }
    ],
    [
      {
        "content": "𝑏",
        "bg": "green"
      },
      {
        "content": "𝑏",
        "bg": "green"
      },
      {
        "content": "𝑎𝑏",
        "bg": "yellow"
      },
      "0"
    ],
    [
      {
        "content": "𝑏",
        "bg": "green"
      },
      {
        "content": "𝑏",
        "bg": "green"
      },
      {
        "content": "𝑜",
        "bg": "blue"
      },
      "0"
    ],
    [
      {
        "content": "𝑏",
        "bg": "green"
      },
      {
        "content": "𝑎𝑏",
        "bg": "yellow"
      },
      {
        "content": "𝑎",
        "bg": "red"
      },
      "0"
    ],
    [
      {
        "content": "𝑏",
        "bg": "green"
      },
      {
        "content": "𝑎𝑏",
        "bg": "yellow"
      },
      {
        "content": "𝑏",
        "bg": "green"
      },
      "0"
    ],
    [
      {
        "content": "𝑏",
        "bg": "green"
      },
      {
        "content": "𝑎𝑏",
        "bg": "yellow"
      },
      {
        "content": "𝑎𝑏",
        "bg": "yellow"
      },
      {
        "content": "1",
        "bg": "yellow"
      }
    ],
    [
      {
        "content": "𝑏",
        "bg": "green"
      },
      {
        "content": "𝑎𝑏",
        "bg": "yellow"
      },
      {
        "content": "𝑜",
        "bg": "blue"
      },
      "0"
    ],
    [
      {
        "content": "𝑏",
        "bg": "green"
      },
      {
        "content": "𝑜",
        "bg": "blue"
      },
      {
        "content": "𝑎",
        "bg": "red"
      },
      "0"
    ],
    [
      {
        "content": "𝑏",
        "bg": "green"
      },
      {
        "content": "𝑜",
        "bg": "blue"
      },
      {
        "content": "𝑏",
        "bg": "green"
      },
      {
        "content": "1",
        "bg": "green"
      }
    ],
    [
      {
        "content": "𝑏",
        "bg": "green"
      },
      {
        "content": "𝑜",
        "bg": "blue"
      },
      {
        "content": "𝑎𝑏",
        "bg": "yellow"
      },
      "0"
    ],
    [
      {
        "content": "𝑏",
        "bg": "green"
      },
      {
        "content": "𝑜",
        "bg": "blue"
      },
      {
        "content": "𝑜",
        "bg": "blue"
      },
      "0"
    ],
    [
      {
        "content": "𝑎𝑏",
        "bg": "yellow"
      },
      {
        "content": "𝑎",
        "bg": "red"
      },
      {
        "content": "𝑎",
        "bg": "red"
      },
      "0"
    ],
    [
      {
        "content": "𝑎𝑏",
        "bg": "yellow"
      },
      {
        "content": "𝑎",
        "bg": "red"
      },
      {
        "content": "𝑏",
        "bg": "green"
      },
      "0"
    ],
    [
      {
        "content": "𝑎𝑏",
        "bg": "yellow"
      },
      {
        "content": "𝑎",
        "bg": "red"
      },
      {
        "content": "𝑎𝑏",
        "bg": "yellow"
      },
      {
        "content": "1",
        "bg": "yellow"
      }
    ],
    [
      {
        "content": "𝑎𝑏",
        "bg": "yellow"
      },
      {
        "content": "𝑎",
        "bg": "red"
      },
      {
        "content": "𝑜",
        "bg": "blue"
      },
      "0"
    ],
    [
      {
        "content": "𝑎𝑏",
        "bg": "yellow"
      },
      {
        "content": "𝑏",
        "bg": "green"
      },
      {
        "content": "𝑎",
        "bg": "red"
      },
      "0"
    ],
    [
      {
        "content": "𝑎𝑏",
        "bg": "yellow"
      },
      {
        "content": "𝑏",
        "bg": "green"
      },
      {
        "content": "𝑏",
        "bg": "green"
      },
      "0"
    ],
    [
      {
        "content": "𝑎𝑏",
        "bg": "yellow"
      },
      {
        "content": "𝑏",
        "bg": "green"
      },
      {
        "content": "𝑎𝑏",
        "bg": "yellow"
      },
      {
        "content": "1",
        "bg": "yellow"
      }
    ],
    [
      {
        "content": "𝑎𝑏",
        "bg": "yellow"
      },
      {
        "content": "𝑏",
        "bg": "green"
      },
      {
        "content": "𝑜",
        "bg": "blue"
      },
      "0"
    ],
    [
      {
        "content": "𝑎𝑏",
        "bg": "yellow"
      },
      {
        "content": "𝑎𝑏",
        "bg": "yellow"
      },
      {
        "content": "𝑎",
        "bg": "red"
      },
      "0"
    ],
    [
      {
        "content": "𝑎𝑏",
        "bg": "yellow"
      },
      {
        "content": "𝑎𝑏",
        "bg": "yellow"
      },
      {
        "content": "𝑏",
        "bg": "green"
      },
      "0"
    ],
    [
      {
        "content": "𝑎𝑏",
        "bg": "yellow"
      },
      {
        "content": "𝑎𝑏",
        "bg": "yellow"
      },
      {
        "content": "𝑎𝑏",
        "bg": "yellow"
      },
      {
        "content": "1",
        "bg": "yellow"
      }
    ],
    [
      {
        "content": "𝑎𝑏",
        "bg": "yellow"
      },
      {
        "content": "𝑎𝑏",
        "bg": "yellow"
      },
      {
        "content": "𝑜",
        "bg": "blue"
      },
      "0"
    ],
    [
      {
        "content": "𝑎𝑏",
        "bg": "yellow"
      },
      {
        "content": "𝑜",
        "bg": "blue"
      },
      {
        "content": "𝑎",
        "bg": "red"
      },
      "0"
    ],
    [
      {
        "content": "𝑎𝑏",
        "bg": "yellow"
      },
      {
        "content": "𝑜",
        "bg": "blue"
      },
      {
        "content": "𝑏",
        "bg": "green"
      },
      "0"
    ],
    [
      {
        "content": "𝑎𝑏",
        "bg": "yellow"
      },
      {
        "content": "𝑜",
        "bg": "blue"
      },
      {
        "content": "𝑎𝑏",
        "bg": "yellow"
      },
      {
        "content": "1",
        "bg": "yellow"
      }
    ],
    [
      {
        "content": "𝑎𝑏",
        "bg": "yellow"
      },
      {
        "content": "𝑜",
        "bg": "blue"
      },
      {
        "content": "𝑜",
        "bg": "blue"
      },
      "0"
    ],
    [
      {
        "content": "𝑜",
        "bg": "blue"
      },
      {
        "content": "𝑎",
        "bg": "red"
      },
      {
        "content": "𝑎",
        "bg": "red"
      },
      {
        "content": "1",
        "bg": "red"
      }
    ],
    [
      {
        "content": "𝑜",
        "bg": "blue"
      },
      {
        "content": "𝑎",
        "bg": "red"
      },
      {
        "content": "𝑏",
        "bg": "green"
      },
      "0"
    ],
    [
      {
        "content": "𝑜",
        "bg": "blue"
      },
      {
        "content": "𝑎",
        "bg": "red"
      },
      {
        "content": "𝑎𝑏",
        "bg": "yellow"
      },
      "0"
    ],
    [
      {
        "content": "𝑜",
        "bg": "blue"
      },
      {
        "content": "𝑎",
        "bg": "red"
      },
      {
        "content": "𝑜",
        "bg": "blue"
      },
      "0"
    ],
    [
      {
        "content": "𝑜",
        "bg": "blue"
      },
      {
        "content": "𝑏",
        "bg": "green"
      },
      {
        "content": "𝑎",
        "bg": "red"
      },
      "0"
    ],
    [
      {
        "content": "𝑜",
        "bg": "blue"
      },
      {
        "content": "𝑏",
        "bg": "green"
      },
      {
        "content": "𝑏",
        "bg": "green"
      },
      {
        "content": "1",
        "bg": "green"
      }
    ],
    [
      {
        "content": "𝑜",
        "bg": "blue"
      },
      {
        "content": "𝑏",
        "bg": "green"
      },
      {
        "content": "𝑎𝑏",
        "bg": "yellow"
      },
      "0"
    ],
    [
      {
        "content": "𝑜",
        "bg": "blue"
      },
      {
        "content": "𝑏",
        "bg": "green"
      },
      {
        "content": "𝑜",
        "bg": "blue"
      },
      "0"
    ],
    [
      {
        "content": "𝑜",
        "bg": "blue"
      },
      {
        "content": "𝑎𝑏",
        "bg": "yellow"
      },
      {
        "content": "𝑎",
        "bg": "red"
      },
      "0"
    ],
    [
      {
        "content": "𝑜",
        "bg": "blue"
      },
      {
        "content": "𝑎𝑏",
        "bg": "yellow"
      },
      {
        "content": "𝑏",
        "bg": "green"
      },
      "0"
    ],
    [
      {
        "content": "𝑜",
        "bg": "blue"
      },
      {
        "content": "𝑎𝑏",
        "bg": "yellow"
      },
      {
        "content": "𝑎𝑏",
        "bg": "yellow"
      },
      {
        "content": "1",
        "bg": "yellow"
      }
    ],
    [
      {
        "content": "𝑜",
        "bg": "blue"
      },
      {
        "content": "𝑎𝑏",
        "bg": "yellow"
      },
      {
        "content": "𝑜",
        "bg": "blue"
      },
      "0"
    ],
    [
      {
        "content": "𝑜",
        "bg": "blue"
      },
      {
        "content": "𝑜",
        "bg": "blue"
      },
      {
        "content": "𝑎",
        "bg": "red"
      },
      "0"
    ],
    [
      {
        "content": "𝑜",
        "bg": "blue"
      },
      {
        "content": "𝑜",
        "bg": "blue"
      },
      {
        "content": "𝑏",
        "bg": "green"
      },
      "0"
    ],
    [
      {
        "content": "𝑜",
        "bg": "blue"
      },
      {
        "content": "𝑜",
        "bg": "blue"
      },
      {
        "content": "𝑎𝑏",
        "bg": "yellow"
      },
      "0"
    ],
    [
      {
        "content": "𝑜",
        "bg": "blue"
      },
      {
        "content": "𝑜",
        "bg": "blue"
      },
      {
        "content": "𝑜",
        "bg": "blue"
      },
      {
        "content": "1",
        "bg": "blue"
      }
    ]
  ]
}
```
