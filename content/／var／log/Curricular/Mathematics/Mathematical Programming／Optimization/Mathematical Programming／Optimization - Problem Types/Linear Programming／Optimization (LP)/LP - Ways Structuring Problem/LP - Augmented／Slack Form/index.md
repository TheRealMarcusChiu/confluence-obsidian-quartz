---
title: "LP - Augmented／Slack Form"
created: 2021-09-13T05:26:18.949-05:00
modified: 2021-09-13T05:26:18.949-05:00
parent: "[[LP - Ways Structuring Problem]]"
children: []
---
[[Linear Programming／Optimization (LP)|Linear Programming/Optimization (LP)]] problems can be converted into an <strong>Augmented/Slack Form</strong> in order to apply the common form of the simplex algorithm
### Purpose

<strong>given a linear programming problem:</strong>
- objective function:
  Z = c<sub>1</sub>x<sub>1</sub> + c<sub>2</sub>x<sub>2</sub>
- linear constraints:
  a<sub>11</sub>x<sub>1</sub> + a<sub>12</sub>x<sub>2</sub><font style="color: rgb(255,0,0);"><strong>≤ </strong></font>b<sub>1</sub>
  a<sub>21</sub>x<sub>1</sub> + a<sub>22</sub>x<sub>2</sub><sub></sub><font style="color: rgb(255,0,0);"><strong>≥ </strong></font>b<sub>2</sub>
- non-negative variables:
  x<sub>1</sub> ≥ 0
  x<sub>2</sub> ≥ 0

<strong>problem:</strong>
- the linear constraints are not of same equality symbol (i.e. all either: ≤, =, or ≥), thus not satisfying [[LP - Standard／Canonical Form|standard form]]

<strong>solution:</strong>
- use augmented form, by adding slack variables into the linear constraints

<strong>resulting form:</strong>
- objective function:
  Z = c<sub>1</sub>x<sub>1</sub> + c<sub>2</sub>x<sub>2</sub>
- linear constraints:
  a<sub>11</sub>x<sub>1</sub> + a<sub>12</sub>x<sub>2</sub>- s<sub>1</sub> = b<sub>1</sub>
  a<sub>21</sub>x<sub>1</sub> + a<sub>22</sub>x<sub>2</sub><sub></sub>+ s<sub>2</sub> = b<sub>1</sub>
- non-negative variables:
  x<sub>1</sub> ≥ 0
  x<sub>2</sub> ≥ 0
- slack variables:
  s<sub>1</sub> ≥ 0
  s<sub>2</sub> ≥ 0

### Equation Form
- objective function:
  Z = c<sub>1</sub>x<sub>1</sub> + c<sub>2</sub>x<sub>2</sub> + ... + c<sub>n</sub>x<sub>n</sub>
- augmented linear constraints:
  a<sub>11</sub>x<sub>1</sub> + a<sub>12</sub>x<sub>2</sub> + ... + a<sub>1n</sub>x<sub>n</sub> + s<sub>1</sub>= b<sub>1</sub>
  a<sub>21</sub>x<sub>1</sub> + a<sub>22</sub>x<sub>2</sub> + ... + a<sub>2n</sub>x<sub>n</sub> + s<sub>2</sub>= b<sub>2</sub>
  ...
  a<sub>m1</sub>x<sub>1</sub> + a<sub>m2</sub>x<sub>2</sub> + ... + a<sub>mn</sub>x<sub>n</sub> + s<sub>m</sub>= b<sub>m</sub>
- non-negative variables:
  x<sub>1</sub> ≥ 0
  x<sub>2</sub> ≥ 0
  ...
  x<sub>n</sub> ≥ 0
- non-negative slack variables:
  s<sub>1</sub> ≥ 0
  s<sub>2</sub> ≥ 0
  ...
  s<sub>m</sub> ≥ 0

### Block Matrix Form

![[LP - Augmented／Slack Form/linear-programming-aumented-form-block-matrix-form.png|250]]
