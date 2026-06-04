---
title: "LP - Standard／Canonical Form"
created: 2021-09-13T05:26:19.371-05:00
modified: 2021-09-13T05:26:19.371-05:00
parent: "[[LP - Ways Structuring Problem]]"
children: []
---
<strong>Standard Form</strong> is the usual and most intuitive form of describing a linear programming problem

standard form can be described in 2 forms:
- equation form
- block matrix form

both represents the same thing
# <strong>Equation Form</strong>

a linear programming problem in standard form is expressed in 3 parts (3 options to choose from):
- for options 2 and 3, use [[LP - Augmented／Slack Form|slack variables]] to convert to preferred option 1 form
```merge-table
{
  "rows": [
    [
      {
        "content": "PART",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "OPTION 1 (preferred)",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "OPTION 2",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "OPTION 3",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "<strong>objective linear function</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "maximize or minimize Z = c<sub>1</sub>x<sub>1</sub> + c<sub>2</sub>x<sub>2</sub> + ... + c<sub>n</sub>x<sub>n</sub>",
      "maximize Z = c<sub>1</sub>x<sub>1</sub> + c<sub>2</sub>x<sub>2</sub> + ... + c<sub>n</sub>x<sub>n</sub>",
      "minimize Z = c<sub>1</sub>x<sub>1</sub> + c<sub>2</sub>x<sub>2</sub> + ... + c<sub>n</sub>x<sub>n</sub>"
    ],
    [
      {
        "content": "<strong>linear constraints</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "a<sub>11</sub>x<sub>1</sub> + a<sub>12</sub>x<sub>2</sub> + ... + a<sub>1n</sub>x<sub>n</sub> <font style=\"color: rgb(255,0,0);\"><strong>=</strong></font> b<sub>1</sub>\na<sub>21</sub>x<sub>1</sub> + a<sub>22</sub>x<sub>2</sub> + ... + a<sub>2n</sub>x<sub>n</sub> <font style=\"color: rgb(255,0,0);\"><strong>=</strong></font> b<sub>2</sub>\n...\na<sub>m1</sub>x<sub>1</sub> + a<sub>m2</sub>x<sub>2</sub> + ... + a<sub>mn</sub>x<sub>n</sub> <font style=\"color: rgb(255,0,0);\"><strong>=</strong></font> b<sub>m</sub>",
      "a<sub>11</sub>x<sub>1</sub> + a<sub>12</sub>x<sub>2</sub> + ... + a<sub>1n</sub>x<sub>n</sub> <font style=\"color: rgb(255,0,0);\"><strong>≤</strong></font> b<sub>1</sub>\na<sub>21</sub>x<sub>1</sub> + a<sub>22</sub>x<sub>2</sub> + ... + a<sub>2n</sub>x<sub>n</sub> <font style=\"color: rgb(255,0,0);\"><strong>≤</strong></font> b<sub>2</sub>\n...\na<sub>m1</sub>x<sub>1</sub> + a<sub>m2</sub>x<sub>2</sub> + ... + a<sub>mn</sub>x<sub>n</sub> <font style=\"color: rgb(255,0,0);\"><strong>≤</strong></font> b<sub>m</sub>",
      "a<sub>11</sub>x<sub>1</sub> + a<sub>12</sub>x<sub>2</sub> + ... + a<sub>1n</sub>x<sub>n</sub> <font style=\"color: rgb(255,0,0);\"><strong>≥</strong></font> b<sub>1</sub>\na<sub>21</sub>x<sub>1</sub> + a<sub>22</sub>x<sub>2</sub> + ... + a<sub>2n</sub>x<sub>n</sub> <font style=\"color: rgb(255,0,0);\"><strong>≥</strong></font> b<sub>2</sub>\n...\na<sub>m1</sub>x<sub>1</sub> + a<sub>m2</sub>x<sub>2</sub> + ... + a<sub>mn</sub>x<sub>n</sub> <font style=\"color: rgb(255,0,0);\"><strong>≥</strong></font> b<sub>m</sub>"
    ],
    [
      {
        "content": "<strong>non-negative variable constraints</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "x<sub>1</sub> ≥ 0\nx<sub>2</sub> ≥ 0\n...\nx<sub>n</sub> ≥ 0",
        "align": "center",
        "colspan": 3
      },
      null,
      null
    ]
  ],
  "tableStyle": "width: 99.9254%;"
}
```
# <strong>Block Matrix Form</strong>

these 3 parts are usually expressed in matrix/vector form (3 options to choose from):

```merge-table
{
  "rows": [
    [
      {
        "content": "PART",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "OPTION 1",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "OPTION 2",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "OPTION 3",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "<strong>objective linear function</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "maximize or minimize Z = c<sup>T</sup>x",
      "maximize Z = c<sup>T</sup>x",
      "minimize Z = c<sup>T</sup>x"
    ],
    [
      {
        "content": "<strong>linear constraints</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "Ax <font style=\"color: rgb(255,0,0);\"><strong>=</strong></font> b",
      "Ax <font style=\"color: rgb(255,0,0);\"><strong>≤</strong></font> b",
      "Ax <font style=\"color: rgb(255,0,0);\"><strong>≥</strong></font> b"
    ],
    [
      {
        "content": "<strong>non-negative variable constraints</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "x ≥ 0",
        "align": "center",
        "colspan": 3
      },
      null,
      null
    ]
  ],
  "tableStyle": "width: 99.9254%;"
}
```

where:
- c - is a n-dimensional column vector
- x - is a n-dimensional row vector
- A - is a m-by-n matrix
- b - is a m-dimensional column vector
