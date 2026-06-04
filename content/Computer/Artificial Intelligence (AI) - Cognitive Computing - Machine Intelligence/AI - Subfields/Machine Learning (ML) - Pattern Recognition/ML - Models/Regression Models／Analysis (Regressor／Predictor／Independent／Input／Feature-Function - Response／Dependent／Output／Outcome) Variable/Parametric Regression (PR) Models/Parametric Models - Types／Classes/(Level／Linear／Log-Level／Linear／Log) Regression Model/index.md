---
title: "(Level／Linear／Log-Level／Linear／Log) Regression Model"
created: 2020-08-23T13:10:52.831-05:00
modified: 2024-09-06T11:25:06.138-05:00
parent: "[[Parametric Models - Types／Classes]]"
children: []
---
```merge-table
{
  "rows": [
    [
      {
        "content": "Model Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Model Form",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description (What do the Regression Coefficient 𝜃 Estimate Mean?)",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Level-Level Model\nLinear-Linear Model",
        "bg": "#F4F5F7"
      },
      "𝑦 = 𝜃𝑥 + 𝑐𝑜𝑛𝑠𝑡𝑎𝑛𝑡",
      "- one UNIT change in 𝑥 leads to 𝜃 UNITs change in 𝑦\n- used in [[Ordinary Least Squares (OLS) Regression|Linear Regression]]"
    ],
    [
      {
        "content": "[[Log-Linear Model - Log-Level Model - Structured Logistic Regression|Log-Linear Model]]Log-Level Model",
        "bg": "#F4F5F7"
      },
      "𝑙𝑜𝑔(𝑦) = 𝜃𝑥 + 𝑐𝑜𝑛𝑠𝑡𝑎𝑛𝑡",
      "- one UNIT change in 𝑥 leads to 100\\*𝜃 PERCENT change in 𝑦\n- used in [[Logistic (Logit) Regression Model|Logistic Regression]]\n- related to [[Exponential Family]]"
    ],
    [
      {
        "content": "Linear-Log Model\nLevel-Log Model",
        "bg": "#F4F5F7"
      },
      "𝑦 = 𝜃𝑙𝑜𝑔(𝑥) + 𝑐𝑜𝑛𝑠𝑡𝑎𝑛𝑡",
      "- one PERCENT change in 𝑥 leads to 𝜃/100 UNITs change in 𝑦\n- used in Linear Regression with log [[Features - Feature Functions - Feature Engineering - Feature-Based Models|feature function(s)]]"
    ],
    [
      {
        "content": "Log-Log Model",
        "bg": "#F4F5F7"
      },
      "𝑙𝑜𝑔(𝑦) = 𝜃𝑙𝑜𝑔(𝑥) + 𝑐𝑜𝑛𝑠𝑡𝑎𝑛𝑡",
      "- one PERCENT change in 𝑥 leads to 𝜃 PERCENT change in 𝑦\n- used in Logistic Classification with log feature function(s)\n- related to Exponential Family"
    ]
  ]
}
```
# Resources

![](https://www.youtube.com/watch?v=aXBFKKh54Es&list=PLwJRxp3blEvZyQBTTOMFRP_TDaSdly3gU&index=99)
