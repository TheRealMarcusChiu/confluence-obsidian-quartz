---
title: "Randomized Rounding"
created: 2021-09-13T05:26:14.488-05:00
modified: 2021-09-13T05:26:14.488-05:00
parent: "[[ILP - Algorithms Solving Problem]]"
children: []
---
the <strong>randomized rounding</strong> technique works the best when the [[Integer／Discrete Linear Programming／Optimization (ILP)|ILP]] is of [[0-1／Combinatorial Programming／Optimization|combinatorial]] nature, that is, a [[0-1／Combinatorial Programming／Optimization|0-1 programming]] [[Problems & Algorithms|problem]]

consider the 0-1 problem:

```merge-table
{
  "rows": [
    [
      {
        "content": "0-1 Problem",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "- <strong>objective function:</strong>\n  max Z = cx\n- <strong>linear constraints:</strong>\n  Ax = b\n- <strong>0-1 variables:</strong>\n  x<sub>i</sub>∈ {0, 1}, for i = 1, ..., n"
    ]
  ]
}
```

relax the 0-1 Problem by replacing the last constraint with 0 ≤ x<sub>i</sub>≤ 1

```merge-table
{
  "rows": [
    [
      {
        "content": "Relaxed LP Problem",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "- <strong>objective function:</strong>\n  max Z = cx\n- <strong>linear constraints:</strong>\n  Ax = b\n- <strong>0-1 variables:</strong>\n  <font style=\"color: rgb(255,0,255);\">0 ≤ x<sub>i</sub>≤ 1, for i = 1, ..., n</font>"
    ]
  ]
}
```

this new problem is called the [[Linear Programming／Optimization (LP)|LP]] relaxation of the [[0-1／Combinatorial Programming／Optimization|0-1 program]]

TODO
