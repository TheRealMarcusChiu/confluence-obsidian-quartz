---
title: "Hetero／Homo Scedasticity - Tests"
created: 2021-09-13T05:27:45.509-05:00
modified: 2021-09-13T05:27:45.509-05:00
parent: "[[Heteroscedasticity - Homoscedasticity]]"
children:
  - "[[Hetero／Homo Scedasticity - Breusch Pagan Test]]"
  - "[[Hetero／Homo Scedasticity - Goldfeld-Quandt Test]]"
  - "[[Hetero／Homo Scedasticity - White Test]]"
---
statistical tests whether there is [[Heteroscedasticity - Homoscedasticity|heteroscedasticity or homoscedasticity]]
### Hetero/Homo Scedasticity - Tests

```merge-table
{
  "rows": [
    [
      {
        "content": "[[Hetero／Homo Scedasticity - Goldfeld-Quandt Test|Goldfeld-Quandt Test]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "[[Hetero／Homo Scedasticity - Breusch Pagan Test|Breusch Pagan Test]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "[[Hetero／Homo Scedasticity - White Test|White Test]]",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "tests heteroscedasticity/homoscedasticity along ONE regressor/variable axis",
      "tests heteroscedasticity/homoscedasticity ALL regressors/variables at a time",
      "tests MULTIPLE variables at a time, but utilizes polynomials of 𝑦̂ that allows fewer independent variables"
    ],
    [
      "𝑉𝑎𝑟(𝑒𝑟𝑟𝑜𝑟|𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) = 𝛿<sub>0</sub> + 𝛿<sub>1</sub>·𝑥<sub>𝑖</sub>",
      "𝑉𝑎𝑟(𝑒𝑟𝑟𝑜𝑟|𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) = 𝛿<sub>0</sub> + 𝛿<sub>1</sub>·𝑥<sub>1</sub> + ... + 𝛿<sub>𝑘</sub>·𝑥<sub>𝑘</sub>",
      "𝑉𝑎𝑟(𝑒𝑟𝑟𝑜𝑟|𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) = 𝛿<sub>0</sub> + <font style=\"color: rgb(128,0,0);\">𝛿<sub>1</sub>·𝑦̂ + 𝛿<sub>2</sub>·𝑦̂<sup>2</sup> + ... + 𝛿<sub>𝑑</sub>·𝑦̂<sup>𝑑</sup></font>"
    ],
    [
      {
        "content": "then do an [[F-Test|f-test]] with null-hypothesis: 𝛿<sub>1</sub>= 𝛿<sub>2</sub> = ... = 𝛿<sub>𝑘</sub> = 0\n\nif failed to reject null-hypothesis, then conclude the given model is homoscedastic\nif null-hypothesis is rejected, then conclude the given model is heteroscedastic",
        "align": "center",
        "colspan": 3
      },
      null,
      null
    ],
    [
      "<strong>For Example</strong>\n\nlet 𝑦̂ = 𝜃<sub>0</sub> + 𝜃<sub>1</sub>·𝑥<sub>1</sub> + ... + 𝜃<sub>𝑘</sub>·𝑥<sub>𝑘</sub>\n- 𝑉𝑎𝑟(𝑒𝑟𝑟𝑜𝑟|𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) = 𝛿<sub>0</sub> + 𝛿<sub>1</sub>·𝑥<sub>𝑖</sub> +\n\ndo an f-test with null-hypothesis: 𝛿<sub>1</sub>= 0, such that:\n- 𝑉𝑎𝑟(𝑒𝑟𝑟𝑜𝑟|𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) = 𝛿<sub>0</sub> + 0·𝑥<sub>𝑖</sub>",
      "<strong>For Example</strong>\n\nlet 𝑦̂ = 𝜃<sub>0</sub> + 𝜃<sub>1</sub>·𝑥<sub>1</sub> + ... + 𝜃<sub>𝑘</sub>·𝑥<sub>𝑘</sub>\n- 𝑉𝑎𝑟(𝑒𝑟𝑟𝑜𝑟|𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) = 𝛿<sub>0</sub> + 𝛿<sub>1</sub>·𝑥<sub>1</sub> + ... + 𝛿<sub>𝑘</sub>·𝑥<sub>𝑘</sub>\n\ndo an f-test with null-hypothesis: 𝛿<sub>1</sub>= ... = 𝛿<sub>𝑘</sub> = 0, such that:\n- 𝑉𝑎𝑟(𝑒𝑟𝑟𝑜𝑟|𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) = 𝛿<sub>0</sub> + 0·𝑥<sub>1</sub> + ... + 𝛿<sub>𝑘</sub>·𝑥<sub>𝑘</sub>",
      "<strong>For Example (𝑑=2)</strong>\n\nlet 𝑦̂ = 𝜃<sub>0</sub> + 𝜃<sub>1</sub>·𝑥<sub>1</sub> + ... + 𝜃<sub>𝑘</sub>·𝑥<sub>𝑘</sub>\n- 𝑉𝑎𝑟(𝑒𝑟𝑟𝑜𝑟|𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) = 𝛿<sub>0</sub> + <font style=\"color: rgb(255,102,0);\">𝛿<sub>1</sub>·</font><font style=\"color: rgb(255,102,0);\">𝑦̂</font> + <font style=\"color: rgb(0,128,0);\">𝛿<sub>2</sub>·𝑦̂<sup>2</sup><font style=\"color: rgb(128,128,128);\"> \\# tests the same equation below with far fewer independent variables</font></font>\n\t- 𝛿<sub>0</sub> + <font style=\"color: rgb(255,102,0);\">𝛿<sub>1</sub>·𝑥<sub>1</sub> + ... + 𝛿<sub>𝑘</sub>·𝑥<sub>𝑘</sub></font> + <font style=\"color: rgb(0,128,0);\">𝛼<sub>1</sub>·𝑥<sub>1</sub><sup>2</sup> + ... + 𝛼<sub>𝑘</sub>·𝑥<sub>𝑘</sub><sup>2</sup> + 𝛽<sub>1</sub>·𝑥<sub>1</sub>𝑥<sub>2</sub> + ...</font>\n\n<font style=\"color: rgb(0,128,0);\"><font style=\"color: rgb(51,51,51);\">do an f-test with null-hypothesis: 𝛿<sub>1</sub>= 𝛿<sub>2</sub> = 0</font></font>"
    ],
    [
      {
        "content": "![](https://www.youtube.com/watch?v=yb4CIJzftjc&list=PLwJRxp3blEvZyQBTTOMFRP_TDaSdly3gU&index=115&ab_channel=BenLambert)",
        "align": "center"
      },
      {
        "content": "![](https://www.youtube.com/watch?v=wzLADO24CDk&list=PLwJRxp3blEvZyQBTTOMFRP_TDaSdly3gU&index=116&ab_channel=BenLambert)",
        "align": "center"
      },
      {
        "content": "![](https://www.youtube.com/watch?v=M5xqpKzhyAM&list=PLwJRxp3blEvZyQBTTOMFRP_TDaSdly3gU&index=117&frags=wn&ab_channel=BenLambert)",
        "align": "center"
      }
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
