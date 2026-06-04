---
title: "Continuous Regression Models"
created: 2020-09-30T15:57:13.519-05:00
modified: 2021-12-11T20:21:40.437-06:00
parent: "[[Parametric Regression (PR) Models]]"
children:
  - "[[Linear Regression (LR) Models]]"
  - "[[Non-Linear Regression (NLR) Models]]"
---
###### Continuous Regression Models
- a type of [[Parametric Regression (PR) Models|parametric regression model]] whose dependent variable is scalar

# Continuous Regression Models - Linear vs Non-Linear

```merge-table
{
  "rows": [
    [
      {
        "content": "[[Linear Regression (LR) Models]]",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "[[Non-Linear Regression (NLR) Models]]",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "both types of models are the functional forms\nboth forms of regression can fit curvature in your data",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      "the functional form is a linear combination of feature functions 𝑓<sub>𝑖</sub>(𝒙) whose inputs are regressors 𝒙 and do not contain any regression coefficients 𝜃<sub>𝑖</sub>:\n- 𝑦̂ = 𝜃<sub>0</sub> + 𝜃<sub>1</sub>𝑓<sub>1</sub>(𝒙) + ... + 𝜃<sub>𝑝</sub>𝑓<sub>𝑝</sub>(𝒙)",
      "function form are those that do NOT follow the form of linear regression models"
    ],
    [
      "as 𝑓<sub>𝑖</sub>(𝒙) increases by one unit, the mean of the dependent variable 𝑦̂ always changes by a specific amount 𝜃<sub>𝑖</sub>",
      "as 𝑓<sub>𝑖</sub>(𝒙) increases by one unit, the mean of the dependent variable 𝑦̂ changes by some ARBITRARY amount"
    ],
    [
      "relatively restricted in the shapes of the curves that it can fit",
      "much more flexible in the shapes of the curves that it can fit"
    ],
    [
      "easier to use, simpler to interpret, and you obtain more statistics that help you assess the model",
      "can require more effort both to find the best fit and to interpret the role of the independent variables"
    ],
    [
      "- [[R² - R-Squared - Coefficient of Determination - Coefficient of Multiple Determination - Multiple R-Square|R-Squared]] is valid for linear regression\n- p-values can be calculated for the parameter estimates 𝜃<sub>𝑖</sub>ˆ",
      "- [[R² - R-Squared - Coefficient of Determination - Coefficient of Multiple Determination - Multiple R-Square|R-Squared]] is NOT valid for nonlinear regression\n- p-values are impossible to calculate for the parameter estimates 𝜃<sub>𝑖</sub>ˆ"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# How to Choose Between Linear and Nonlinear Regression

The general guideline is to use linear regression first to determine whether it can fit the particular type of curve in your data. If you can’t obtain an adequate fit using linear regression, that’s when you might need to choose nonlinear regression

[Curve Fitting using Linear and Nonlinear Regression](https://statisticsbyjim.com/regression/curve-fitting-linear-nonlinear-regression/)
# Resources
- [https://statisticsbyjim.com/regression/difference-between-linear-nonlinear-regression-models/](https://statisticsbyjim.com/regression/difference-between-linear-nonlinear-regression-models/)
- [https://statisticsbyjim.com/regression/choose-linear-nonlinear-regression/](https://statisticsbyjim.com/regression/choose-linear-nonlinear-regression/)
