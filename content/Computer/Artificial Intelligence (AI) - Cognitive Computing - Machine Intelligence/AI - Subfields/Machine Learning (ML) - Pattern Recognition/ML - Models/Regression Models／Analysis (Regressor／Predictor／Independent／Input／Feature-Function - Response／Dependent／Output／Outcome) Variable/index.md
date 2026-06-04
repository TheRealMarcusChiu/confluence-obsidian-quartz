---
title: "Regression Models／Analysis (Regressor／Predictor／Independent／Input／Feature-Function - Response／Dependent／Output／Outcome) Variable"
created: 2020-04-22T13:23:45.884-05:00
modified: 2021-11-28T03:01:38.817-06:00
parent: "[[ML - Models]]"
children:
  - "[[Non-Parametric Regression (NPR) Models]]"
  - "[[Parametric Regression (PR) Models]]"
---
- <strong>Regression Analysis</strong> - describes the relationship between a set of independent variables {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑘</sub>} and a dependent variable 𝑌
- <strong>Regression Model</strong> of 𝑌 on {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑘</sub>} is the <em>conditional-expectation</em>/<em>function</em> that measures the relation between 𝑌 and {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑘</sub>}:
	- ℎ(𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) = 𝑓(𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) = 𝐄{𝑌|𝑋<sub>1</sub>=𝑥<sub>1</sub>, ..., 𝑋<sub>𝑘</sub>=𝑥<sub>𝑘</sub>} = 𝑦̂
- where:
	- 𝑌 (response/dependent/output/outcome variable) is a variable of interest that we predict based on one or several predictors
	- {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑘</sub>} (regressor/predictor/independent/input/[[Features - Feature Functions - Feature Engineering - Feature-Based Models|feature function]] variables) are a mixture of continuous and/or discrete variables used to predict 𝑌

# Regression Model - Types

```merge-table
{
  "rows": [
    [
      {
        "content": "[[Parametric Regression (PR) Models]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "ℎ(𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) = 𝑓(𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) = 𝐄{𝑌|𝑋<sub>1</sub>=𝑥<sub>1</sub>, ..., 𝑋<sub>𝑘</sub>=𝑥<sub>𝑘</sub>} = 𝑦̂ is a [[ML - Parametric vs Non-Parametric|parametric function]] based on coefficient parameters"
    ],
    [
      {
        "content": "[[Non-Parametric Regression (NPR) Models]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "ℎ(𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) = 𝑓(𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) = 𝐄{𝑌|𝑋<sub>1</sub>=𝑥<sub>1</sub>, ..., 𝑋<sub>𝑘</sub>=𝑥<sub>𝑘</sub>} = 𝑦̂ is a [[ML - Parametric vs Non-Parametric|non-parametric function]] based on data"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
