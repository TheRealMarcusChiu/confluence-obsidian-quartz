---
title: "LP - Ways Structuring Problem"
created: 2021-09-13T05:26:18.296-05:00
modified: 2021-09-13T05:26:18.296-05:00
parent: "[[Linear Programming／Optimization (LP)]]"
children:
  - "[[LP - Absolute Values]]"
  - "[[LP - Augmented／Slack Form]]"
  - "[[LP - Standard／Canonical Form]]"
---
2 ways to describe a [[Linear Programming／Optimization (LP)|linear programming]] problem:
- [standard/canonical form](http://confluence.marcuschiu.com/pages/viewpage.action?pageId=2656752)
- [[LP - Augmented／Slack Form|slack/augmented form]]

# <strong>Example Linear Programming Structuring</strong>
## Linear Programming Problem
given:
- a toy company make 2 toys: x<sub>1</sub> and x<sub>2</sub>
- these toys are made of 2 materials: A and B
- to make toy x<sub>1</sub>, it needs 5 units of A and 2 units of B
- to make toy x<sub>2</sub>, it needs 3 units of A and 3 units of B
- there is a maximum of 30 units of A
- there is a maximum of 20 units of B
- each toy x<sub>1</sub> can be sold for \$10
- each toy x<sub>2</sub> can be sold for \$7

what is the optimum product mix that maximizes the profit?
## Standard/Canonical Form
<em>Standard form</em> is the usual and most intuitive form of describing a linear programming problem

more details [[LP - Standard／Canonical Form|LP - Standard/Canonical Form]]
###### Equation Form

```merge-table
{
  "rows": [
    [
      "- <strong>objective linear function:</strong>\n  maximize Z = 10x<sub>1</sub> + 7x<sub>2</sub>\n- <strong>linear constraints:</strong>\n  5x<sub>1</sub> + 3x<sub>2</sub> ≤ 30\n  2x<sub>1</sub> + 3x<sub>2</sub> ≤ 20\n- <strong>non-negative variable constraints:</strong>\n  x<sub>1</sub> ≥ 0\n  x<sub>2</sub> ≥ 0"
    ]
  ]
}
```
###### <strong>Block Matrix Form</strong>

TODO
## Slack/Augmented Form
Linear programming problems can be converted into an <em>augmented form</em> in order to apply the common form of the <strong>simplex algorithm</strong>

more details [[LP - Augmented／Slack Form|LP - Augmented/Slack Form]]
###### Equation Form

```merge-table
{
  "rows": [
    [
      "- <strong>objective function:</strong>\n  maximize Z = 10x<sub>1</sub> + 7x<sub>2</sub>\n- <strong>augmented linear constraints:</strong>\n  5x<sub>1</sub> + 3x<sub>2</sub> + s<sub>1</sub> = 30\n  2x<sub>1</sub> + 3x<sub>2</sub> + s<sub>2</sub> = 20\n- <strong>non-negative variables:</strong>\n  x<sub>1</sub> ≥ 0\n  x<sub>2</sub> ≥ 0\n- <strong>non-negative slack variables:</strong>\n  s<sub>1</sub> ≥ 0\n  <sub>s2</sub> ≥ 0"
    ]
  ],
  "tableStyle": "width: 60.8761%;"
}
```
###### Block Matrix Form
![[LP - Ways Structuring Problem/linear-programming-aumented-form-block-matrix-form.png|250x131]]
