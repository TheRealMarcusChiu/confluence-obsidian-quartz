---
title: "Categorical Regression Models"
created: 2020-09-30T16:31:58.882-05:00
modified: 2023-08-23T20:40:42.783-05:00
parent: "[[Parametric Regression (PR) Models]]"
children:
  - "[[Logistic (Logit) Regression Model]]"
  - "[[Probit Regression Model]]"
---
###### Categorical Regression Models
````excerpt
- a type of [[Parametric Regression (PR) Models|parametric regression model]] whose dependent variable is either [[Data／Variable Types - Measurement Scales (Nominal／Categorical／Factor - Ordinal - Interval - Ratio)|nominal]] or [[Data／Variable Types - Measurement Scales (Nominal／Categorical／Factor - Ordinal - Interval - Ratio)|ordinal]]
````
^excerpt

# Categorical Regression Models - Types
````excerpt
[[Categorical Regression Models]] - takes an input vector 𝑥∊ℝ<sup>𝑛</sup> as input and predicts the value of a <strong>nominal/ordinal</strong> 𝑦∊ℝ as output

```merge-table
{
  "rows": [
    [
      {
        "content": "Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Logistic (Logit) Regression Model|Logistic (Logit) Regression/Classification Model]]",
        "bg": "#F4F5F7"
      },
      "- takes an input vector 𝑥∊ℝ<sup>𝑛</sup> as input and predicts the value of a <strong>nominal </strong>𝑦∊ℝ as output"
    ],
    [
      {
        "content": "[Binomial Logistic (Logit) Regression](http://r-statistics.co/Logistic-Regression-With-R.html)",
        "bg": "#F4F5F7"
      },
      "- models binary variables\n- uses the cumulative distribution function of the [[Logistic Function - Sigmoid Function (Standard Logistic Function)|logistic (sigmoid) distribution]]"
    ],
    [
      {
        "content": "[[Probit Regression Model|Probit Regression/Classification Model]]",
        "bg": "#F4F5F7"
      },
      "- models binary variables\n- the cumulative distribution function of the [[z-distribution (Standard Normal Distribution) ｜ z-scores ｜ z-values ｜ z-table ｜ z-statistic ｜ Standardization - Standardized Values - Standard Scores - Normal Deviates|standard normal distribution]]"
    ],
    [
      {
        "content": "[Multinomial Logistic Regression](http://r-statistics.co/Multinomial-Regression-With-R.html)",
        "bg": "#F4F5F7"
      },
      "- models categorical variables with more than 2 levels"
    ],
    [
      {
        "content": "[Ordinal Logistic Regression](http://r-statistics.co/Ordinal-Logistic-Regression-With-R.html)",
        "bg": "#F4F5F7"
      },
      "- models ordinal or rank variables"
    ]
  ]
}
```
````
^excerpt
