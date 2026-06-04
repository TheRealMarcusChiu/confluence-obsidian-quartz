---
title: "LP - Duality"
created: 2021-09-13T05:26:16.765-05:00
modified: 2021-09-13T05:26:16.765-05:00
parent: "[[Linear Programming／Optimization (LP)]]"
children: []
---
# <strong>Linear Programming Problem Duality</strong>

```merge-table
{
  "rows": [
    [
      {
        "content": "Primal",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Dual",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "###### minimize:\n\nc<sup>T</sup>x\n###### subject to:\n\nAx = b\nx ≥ 0",
      "###### maximize:\n\nλ<sup>T</sup>b\n###### subject to:\n\nλ<sup>T</sup>A ≤ c<sup>T</sup>\n\nthis is the asymmetric form of the duality relation. In this form the dual vector λ is not restricted to be non-negative"
    ]
  ],
  "tableStyle": "width: 85.8365%;"
}
```
# <strong>Lemma 1 (Weak Duality Lemma)</strong>

If x and λ are feasible for Primal and dual, respectively, then c<sup>T</sup>x ≥ λ<sup>T</sup>b

It means that the objective function value of the primal is always greater than or equal to the objective function value of the dual. In other words any feasible solution of the primal minimization problem is an upper bound on the dual maximization optimum. Similarly, any feasible solution of the dual maximization task is a lower bound on the primal minimization optimum
# <strong>Example Primal Dual</strong>

```merge-table
{
  "rows": [
    [
      {
        "content": "Primal",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Dual",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "###### minimize:\n\n2x<sub>1</sub> + x<sub>2</sub> + 4x<sub>3</sub>\n###### subject to:\n\nx<sub>1</sub> + x<sub>2</sub> + 2x<sub>3</sub> = 3\n2x<sub>1</sub> + x<sub>2</sub> + 3x<sub>3</sub> = 5\n\nx<sub>1</sub>, x<sub>2</sub>, x<sub>3</sub> ≥ 0",
      "###### maximize:\n\n3b<sub>1</sub> + 5b<sub>2</sub>\n###### subject to:\n\nb<sub>1</sub> + 2b<sub>2</sub> ≤ 2\nb<sub>1</sub> + b<sub>2</sub> ≤ 1\n2b<sub>1</sub> + 3b<sub>2</sub> ≤ 4"
    ]
  ],
  "tableStyle": "width: 39.3536%;"
}
```
