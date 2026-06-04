---
title: "Count Regression Models"
created: 2020-09-30T18:58:40.236-05:00
modified: 2024-09-06T11:36:16.668-05:00
parent: "[[Parametric Regression (PR) Models]]"
children:
  - "[[Negative Binomial Regression Model (NB2)]]"
  - "[[Poisson Regression Model]]"
  - "[[Zero-Inflated Models]]"
---
###### Count Regression Models
````excerpt
- takes an input vector 𝑥∊ℝ<sup>𝑛</sup> as input and predicts the value of a <strong>count </strong>𝑦∊ℝ as output
- a type of [[Parametric Regression (PR) Models|parametric regression model]] whose dependent variable is a count of items, events, results, or activities
- counts are nonnegative integers (0, 1, 2, etc.)
- count data with:
	- higher [[Arithmetic Mean - Average - Location - Expected Value - Expectation Operator|means]] tend to be [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|normally distributed]] and you can often use [[Ordinary Least Squares (OLS) Regression|Linear Regression]]/[[Ordinary Least Squares (OLS)|OLS]]
	- smaller means can be [[Skewness|skewed]], and Linear Regression might have a hard time fitting these data. In these cases, we use count regression models
````
^excerpt

# Count Models - Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Count Model Type",
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
        "content": "[[Poisson Regression Model]]",
        "bg": "#F4F5F7"
      },
      "- count data frequently follow the [[Poisson Distribution|Poisson distribution]], which makes Poisson Regression a good possibility"
    ],
    [
      {
        "content": "[[Negative Binomial Regression Model (NB2)]]",
        "bg": "#F4F5F7"
      },
      "- used when there is over-dispersion (i.e. mean and variance are different)\n- Poisson Regression assumes that the variance equals the mean. When the variance is greater than the mean, your model has over-dispersion. NB2 can be more appropriate when over-dispersion is present"
    ],
    [
      {
        "content": "[[Zero-Inflated Models]]",
        "bg": "#F4F5F7"
      },
      "- used when there is a lot of 0 counts\n- count data might have too many zeros to follow the Poisson distribution. Zero-Inflated Models can be more appropriate in modeling this"
    ]
  ]
}
```
# Resources
- [http://r-statistics.co/Poisson-and-Negative-Binomial-Regression-With-R.html](http://r-statistics.co/Poisson-and-Negative-Binomial-Regression-With-R.html)
