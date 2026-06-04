---
title: "Probability Distribution - Continuous Functions／Models (Probability Density Functions)"
created: 2021-09-13T05:27:22.257-05:00
modified: 2023-09-09T08:53:31.821-05:00
parent: "[[Univariate Probability Distribution]]"
children:
  - "[[Beta Distribution]]"
  - "[[Cauchy Distribution - Lorentz Distribution - Cauchy–Lorentz Distribution, Lorentz(ian) Function - Breit–Wigner Distribution]]"
  - "[[Chi Distribution]]"
  - "[[Chi-Square Distribution]]"
  - "[[Continuous Probability Distribution - Calculating Statistics]]"
  - "[[Dirac Delta Distribution Function - Unit Impluse]]"
  - "[[Exponential Distribution]]"
  - "[[Gamma Distribution]]"
  - "[[Logistic Distribution]]"
  - "[[Multivariate Beta Distribution (MBD) - Dirichlet Distribution]]"
  - "[[Pareto Distribution (80-20 Rule)]]"
  - "[[Skew Normal Distribution]]"
  - "[[Uniform Distribution]]"
  - "[[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)]]"
  - "[[Wishart Distribution]]"
  - "[[f-distribution ｜ f-scores ｜ f-value ｜ f-table ｜ f-statistic]]"
  - "[[t-distribution ｜ t-scores ｜ t-value ｜ t-table ｜ t-statistic ｜ student's t-distribution]]"
  - "[[z-distribution (Standard Normal Distribution) ｜ z-scores ｜ z-values ｜ z-table ｜ z-statistic ｜ Standardization - Standardized Values - Standard Scores - Normal Deviates]]"
---
###### Continuous Probability Distributions
````excerpt
- used in scenarios where the set of possible outcomes is <strong>continuous</strong> (e.g. temperature on a given day)
- ranges include:
	- [[Real Intervals (Empty／Degenerate／Proper／Bounded／Finite／Half-Bounded／Unbounded／Left／Right／Open／Closed Intervals)|bounded intervals]] (a, b)
	- [[Real Intervals (Empty／Degenerate／Proper／Bounded／Finite／Half-Bounded／Unbounded／Left／Right／Open／Closed Intervals)|unbounded intervals]] such as (a, +∞), (−∞, b), or (−∞, +∞)
	- combinations of several such intervals
- the probability of any individual outcome equals zero (it's possible, it's just probability zero)
````
^excerpt

For all continuous variables, the [[Probability Distribution - Discrete Functions／Models (Probability Mass Functions)|probability mass function]] 𝑃𝑀𝐹(𝑥) is always equal to zero

𝑃𝑀𝐹(𝑥) = 𝐏(𝑋=𝑥) = 0 for all 𝑥

As a result, the 𝑃𝑀𝐹(𝑥) does not carry any information about a random variable 𝑋. Rather, we can use the [[Probability Distribution Function Variants - Probability／Mass／Density／Cumulative／Survivor／Hazard／Cumulative-Hazard／Inverse／Moment-Generating Distribution Functions|cumulative distribution function]] 𝐶𝐷𝐹(𝑥)
- 𝐶𝐷𝐹(𝑥) = 𝐏(𝑋≤𝑥)
- 𝐶𝐷𝐹(𝑥) = 𝐏(𝑋\<𝑥) + 𝐏(𝑋=𝑥)
- 𝐶𝐷𝐹(𝑥) = 𝐏(𝑋\<𝑥) + 0
- 𝐶𝐷𝐹(𝑥) = 𝐏(𝑋\<𝑥)

the derivative of a continuous 𝐶𝐷𝐹(𝑥) is a [[Probability Distribution - Continuous Functions／Models (Probability Density Functions)|probability density function]] 𝑃𝐷𝐹(𝑥)
# Continuous Probability Distributions - Calculating Statistics

see: [[Continuous Probability Distribution - Calculating Statistics]]
# Continuous Probability Distributions - Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Continuous Distributions",
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
        "content": "[[Uniform Distribution]]",
        "bg": "#F4F5F7"
      },
      "- the probability is the same for every outcome in the sample space"
    ],
    [
      {
        "content": "[[Exponential Distribution]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "- given the mean number of events per unit time (𝜆):\n\t- the number of events occurring within that unit of time has [[Poisson Distribution]]\n\t- the time between events has an [[Exponential Distribution]]\n\t- the total time of 𝛼 events has [[Gamma Distribution]]\n- a Gamma variable = sum of 𝛼 independent Exponential variables",
        "rowspan": 2
      }
    ],
    [
      {
        "content": "[[Gamma Distribution]]",
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Wishart Distribution]]",
        "bg": "#F4F5F7"
      },
      "- is a [[Bivariate／Multivariate Analysis Descriptive Statistics|multivariate]] generalization of the [[Gamma Distribution|gamma distribution]]"
    ],
    [
      {
        "content": "[[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|Normal Distribution]]",
        "bg": "#F4F5F7"
      },
      "- has a bell-shaped curve"
    ],
    [
      {
        "content": "[[Logistic Distribution]]",
        "bg": "#F4F5F7"
      },
      "- resembles the <em>normal distribution</em> in shape but has heavier tails"
    ],
    [
      {
        "content": "[[z-distribution (Standard Normal Distribution) ｜ z-scores ｜ z-values ｜ z-table ｜ z-statistic ｜ Standardization - Standardized Values - Standard Scores - Normal Deviates|z-Distribution (Standard Normal Distribution)]]",
        "bg": "#F4F5F7"
      },
      "- used as [[Confidence Multipliers - Critical Values|confidence multipliers]]"
    ],
    [
      {
        "content": "[[t-distribution ｜ t-scores ｜ t-value ｜ t-table ｜ t-statistic ｜ student's t-distribution|t-Distribution]]",
        "bg": "#F4F5F7"
      },
      "- used as [[Confidence Multipliers - Critical Values|confidence multipliers]]"
    ],
    [
      {
        "content": "[[f-distribution ｜ f-scores ｜ f-value ｜ f-table ｜ f-statistic|f-Distribution]]",
        "bg": "#F4F5F7"
      },
      "- used as [[Confidence Multipliers - Critical Values|confidence multipliers]]"
    ],
    [
      {
        "content": "[[Chi-Square Distribution]]",
        "bg": "#F4F5F7"
      },
      "- the sum of the squares of 𝑘independent[[z-distribution (Standard Normal Distribution) ｜ z-scores ｜ z-values ｜ z-table ｜ z-statistic ｜ Standardization - Standardized Values - Standard Scores - Normal Deviates|standard normal]] random variables"
    ],
    [
      {
        "content": "[[Chi Distribution]]",
        "bg": "#F4F5F7"
      },
      "- the positive square root of the [[Chi-Square Distribution]]"
    ],
    [
      {
        "content": "[[Maxwell-Boltzmann Distribution]]",
        "bg": "#F4F5F7"
      },
      "- is a [[Chi Distribution]] with 3 degrees of freedom"
    ],
    [
      {
        "content": "[[Dirac Delta Distribution Function - Unit Impluse]]",
        "bg": "#F4F5F7"
      },
      "- is a probability distribution where all mass is around a single point"
    ],
    [
      {
        "content": "[[Beta Distribution]]",
        "bg": "#F4F5F7"
      },
      "- is a family of [[Probability Distribution - Continuous Functions／Models (Probability Density Functions)|continuous probability distributions]] defined on the interval \\[0, 1\\] parametrized by two positive shape parameters, <em>𝛼</em> and 𝛽, that control the shape of the distribution"
    ],
    [
      {
        "content": "[[Multivariate Beta Distribution (MBD) - Dirichlet Distribution]]",
        "bg": "#F4F5F7"
      },
      "- is a generalization of [[Beta Distribution]] to multiple variables"
    ],
    [
      {
        "content": "[[Pareto Distribution (80-20 Rule)]]",
        "bg": "#F4F5F7"
      },
      "- is a skewed, heavy-tailed distribution that is sometimes used to model the distribution of incomes"
    ]
  ],
  "tableStyle": "width: 99.8946%;"
}
```
