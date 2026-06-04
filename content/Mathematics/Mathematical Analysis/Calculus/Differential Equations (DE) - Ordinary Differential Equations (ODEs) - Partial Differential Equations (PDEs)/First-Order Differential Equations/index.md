---
title: "First-Order Differential Equations"
created: 2021-09-13T05:25:08.564-05:00
modified: 2025-10-01T11:25:29.141-05:00
parent: "[[Differential Equations (DE) - Ordinary Differential Equations (ODEs) - Partial Differential Equations (PDEs)]]"
children:
  - "[[DE - Method for First-Order Exact DE]]"
  - "[[DE - Method for First-Order Homogenous DE]]"
  - "[[DE - Method of Integrating Factor]]"
  - "[[DE - Method of Separating Variables]]"
  - "[[First-Order Exact DE]]"
  - "[[First-Order Linear Constant Coefficient DE]]"
---
###### First-Order Differential Equations
````excerpt
- are [[Differential Equations (DE) - Ordinary Differential Equations (ODEs) - Partial Differential Equations (PDEs)|differential equations]] of the form: 𝑦' = 𝐹(𝑦, 𝑥)
````
^excerpt

# First-Order Differential Equation - Variants

```merge-table
{
  "rows": [
    [
      {
        "content": "[[DE - Method of Separating Variables|1st-Order Separable DE]]",
        "bg": "#F4F5F7"
      },
      "𝑃(𝑦, 𝑑𝑦) = 𝑄(𝑥, 𝑑𝑥)<font style=\"color: rgb(128,128,128);\"> \\# 𝑒.𝑔. </font><font style=\"color: rgb(128,128,128);\">𝑦' = 𝑥/𝑦</font>"
    ],
    [
      {
        "content": "[[DE - Method for First-Order Homogenous DE|1st-Order Homogenous DE]]",
        "bg": "#F4F5F7"
      },
      "𝑦' = 𝐹(𝑦/𝑥) <font style=\"color: rgb(128,128,128);\">\\# 𝑒.𝑔. </font><font style=\"color: rgb(128,128,128);\">𝑦' = (𝑥<sup>2</sup> + 𝑦<sup>2</sup>)/𝑥𝑦</font>"
    ],
    [
      {
        "content": "1<sup>st</sup>-Order Bernoulli DE",
        "bg": "#F4F5F7"
      },
      "𝑦' + 𝑃(𝑥)𝑦 = 𝑄(𝑥)𝑦<sup>𝑛</sup> <font style=\"color: rgb(128,128,128);\">\\# 𝑛∉{0,1}</font>"
    ],
    [
      {
        "content": "[[First-Order Exact DE|1st-Order Exact DE]]",
        "bg": "#F4F5F7"
      },
      "𝑃(𝑥)𝑦 + 𝑄(𝑥)𝑦' and there exist a function 𝜑(𝑥,𝑦) such that (𝛿𝜑/𝛿𝑥) = 𝑃(𝑥) and (𝛿𝜑/𝛿𝑦) = 𝑄(𝑥)"
    ],
    [
      {
        "content": "1<sup>st</sup>-Order Linear DE",
        "bg": "#F4F5F7"
      },
      "𝑓(𝑥) = 𝑃(𝑥)𝑦 + 𝑄(𝑥)𝑦'\n- <strong>1<sup>st</sup>-Order Linear Homogenous DE: </strong>0 = 𝑃(𝑥)𝑦 + 𝑄(𝑥)𝑦'\n- <strong>[[First-Order Linear Constant Coefficient DE|1st-Order Linear Constant Coefficient DE]]: </strong>𝑓(𝑥) = 𝑝𝑦 + 𝑞𝑦'\n- <strong>1<sup>st</sup>-Order Linear Constant Coefficient Homogenous DE: </strong>0 = 𝑝𝑦 + 𝑞𝑦'"
    ]
  ]
}
```
# First-Order Differential Equation - Methods in Solving the DE

```merge-table
{
  "rows": [
    [
      {
        "content": "[[DE - Method of Separating Variables|Method of Separating Variables]]",
        "bg": "#F4F5F7"
      },
      "solves first-order separable differential equations"
    ],
    [
      {
        "content": "[[DE - Method of Integrating Factor|Method of Integrating Factor]]",
        "bg": "#F4F5F7"
      },
      "solves first-order non-separable linear differential equations"
    ],
    [
      {
        "content": "[[DE - Method for First-Order Homogenous DE|Method for Homogenous DE]]",
        "bg": "#F4F5F7"
      },
      "solves first-order homogenous non-separable non-linear differential equations"
    ],
    [
      {
        "content": "[[First-Order Exact DE|Solving Exact DE]]",
        "bg": "#F4F5F7"
      },
      "solves first-order exact differential equations"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# First-Order Differential Equation - Example

![](https://www.youtube.com/watch?v=3Yfsh1SnGIw&list=PLee24bbe4wKTdWQY7qEkc4fjTUcfs7Zgc&index=11&ab_channel=TheLazyEngineer)
