---
title: "Probability Distributions"
created: 2021-09-13T05:27:12.377-05:00
modified: 2026-06-03T09:59:19.332-05:00
parent: "[[Probability]]"
children:
  - "[[Conditional Probability Distribution (CPD)]]"
  - "[[Gaussian／Normal Distribution／Model／Process]]"
  - "[[Joint Probability Distribution (Compound - Bivariate - Multivariate - Full)]]"
  - "[[Marginal Probability Distribution]]"
  - "[[Multivariate vs Mixture - Model／Probability-Distribution]]"
  - "[[Population Distribution - Sample／Empirical Distribution]]"
  - "[[Prior Predictive Distribution - Posterior Predictive Distribution]]"
  - "[[Prior Probability Distribution - Posterior Probability Distribution]]"
  - "[[Unconditional Probability Distribution]]"
  - "[[Univariate Probability Distribution]]"
---
###### Probability Distribution
````excerpt
- describes the real-world behavior of one or more random variables. These random variables can be either: discrete, continuous, or a mixture of the two
- describes how probabilities are distributed over the values of a random variable:
	- for a discrete random variable, a probability distribution is described by a [[Probability Distribution - Discrete Functions／Models (Probability Mass Functions)|probability mass function]]
	- for a continuous random variable, a probability distribution is described by a [[Probability Distribution - Continuous Functions／Models (Probability Density Functions)|probability density function]]
- is a distribution function that:
	- outputs a value between 0 and 1
	- all values sum/integrate to 1
````
^excerpt

# Probability Distribution - Population vs Sample

see: [[Population Distribution - Sample／Empirical Distribution|Population Distribution - Sample/Empirical Distribution]]
# Probability Distribution - How They are Modeled/Represented

see [[Probability Distribution Models／Representations|Probability Distribution Models/Representations]]
# Probability Distribution - Main Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Probability Distributions & Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Syntax Examples",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "![[Univariate Probability Distribution#^excerpt]]",
      "- 𝐏(𝑋)\n- 𝐏(𝑌)\n- 𝐏(𝑍)"
    ],
    [
      "![[Joint Probability Distribution (Compound - Bivariate - Multivariate - Full)#^excerpt]]",
      "- 𝐏(𝑋,𝑌)\n- 𝐏(𝑋,𝑌,𝑍)\n- 𝐏(𝑌,𝑍)"
    ],
    [
      "![[Marginal Probability Distribution#^excerpt]]",
      "- 𝐏(𝑋) = 𝛴<sub>𝑦∈𝑌</sub>𝐏(𝑋,𝑌=𝑦)\n- 𝐏(𝑋,𝑌) = 𝛴<sub>𝑧∈𝑍</sub>𝐏(𝑋,𝑌,𝑍=𝑧)\n- 𝐏(𝑋) = 𝛴<sub>𝑦∈𝑌,𝑧∈𝑍</sub>𝐏(𝑋,𝑌=𝑦,𝑍=𝑧)"
    ],
    [
      "![[Conditional Probability Distribution (CPD)#^excerpt]]",
      "- 𝐏(𝑋|𝑌)\n- 𝐏(𝑋|𝑌,𝑍)"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Probability Distribution - Other Types
- [[Multivariate vs Mixture - Model／Probability-Distribution|Multivariate vs Mixture - Model/Probability-Distribution]]
- [[Unconditional Probability Distribution]]
- [[Prior Probability Distribution - Posterior Probability Distribution]]
- [[Prior Predictive Distribution - Posterior Predictive Distribution]]

# Estimating Parameters of a Parametric Distribution

Given:
- a [[Parametric Probability Distribution Models|parametric probability distribution function]]
- sample training data

Estimate:
- the probability distribution function's parameters that best reflect the sample training data

See: [[Point／Parameter Estimation／Estimator／Estimate／Approximation - Estimating Parameters of Parametric Distribution／Population Function／Model (Population Parameters - Sample Statistics)|Point/Parameter Estimation/Estimator/Estimate/Approximation - Estimating Parameters of Parametric Distribution/Population Function/Model (Population Parameters - Sample Statistics)]]
# Generating Random Variable(s) that Simulate a Specific Probability Distribution

see: [[Probability - Generating Random Variable(s) that Simulates a Distribution]]
# Resources

![](https://www.youtube.com/watch?v=mBCiKUzwdMs)
