---
title: "Normality Tests"
created: 2021-09-13T05:29:01.377-05:00
modified: 2023-09-13T15:25:43.946-05:00
parent: "[[Statistical Hypothesis Test - Types]]"
children:
  - "[[Normality Tests - Graphical Methods]]"
  - "[[Normality Tests - Statistical Tests]]"
---
###### Normality Tests
````excerpt
- is a range of techniques that you can use to check if your data sample deviates from a [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|Gaussian distribution]]
- An important decision point when working with a sample of data is whether to use [[(Parametric vs Non-Parametric) Statistical Methods／Procedures|parametric or nonparametric statistical methods]]:
	- parametric statistical methods assume that the data has a known and specific distribution, often a Gaussian distribution
	- non-parametric statistical methods do not require data to be Gaussian
````
^excerpt

# Normality Test - 2 Types

```merge-table
{
  "rows": [
    [
      {
        "content": "[[Normality Tests - Graphical Methods|Graphical Methods]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "These are methods for plotting the data and qualitatively evaluating whether the data looks Gaussian"
    ],
    [
      {
        "content": "[[Normality Tests - Statistical Tests|Statistical Normality Tests]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "These are methods that calculate statistics on the data and quantify how likely it is that the data was drawn from a Gaussian distribution"
    ]
  ],
  "tableStyle": "width: 97.8545%;"
}
```
# What to Do If Tests Fail?

If the sample-data fails the normality test, try [[Data Preparation - Methods Transforming Data to Normal Distribution|transforming sample-data into normal]]
# Resources
- [https://machinelearningmastery.com/a-gentle-introduction-to-normality-tests-in-python/](https://machinelearningmastery.com/a-gentle-introduction-to-normality-tests-in-python/)
- [http://uc-r.github.io/assumptions_normality](http://uc-r.github.io/assumptions_normality)
