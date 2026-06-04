---
title: "Function Approximation Problem"
created: 2021-09-13T05:29:23.858-05:00
modified: 2025-05-27T12:35:53.309-05:00
parent: "[[Approximation Theory]]"
children:
  - "[[Approximating Known Target Functions]]"
---
###### Function Approximation Problem
````excerpt
- is a [[Problems|problem]] that asks us to select a [[Functions (Domain - Codomain - Preimage - Image - Range)|function]] among a well-defined function class/type that closely matches ("approximates") a target function in a task-specific way
````
^excerpt

# 2 Major Classes of Function Approximation Problems

```merge-table
{
  "rows": [
    [
      {
        "content": "[[Approximating Known Target Functions]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "for <strong>known target functions</strong> [[Approximation Theory|approximation theory]] is the branch of [numerical analysis](https://en.wikipedia.org/wiki/Numerical_analysis) that investigates how certain known functions (for example, [special functions](https://en.wikipedia.org/wiki/Special_function)) can be approximated by a specific class of functions (for example, [polynomials](https://en.wikipedia.org/wiki/Polynomial) or [rational functions](https://en.wikipedia.org/wiki/Rational_function)) that often have desirable properties (inexpensive computation, continuity, integral and limit values, etc.)"
    ],
    [
      {
        "content": "[[Point／Parameter Estimation／Estimator／Estimate／Approximation - Estimating Parameters of Parametric Distribution／Population Function／Model (Population Parameters - Sample Statistics)|Estimator/Model - Estimating a Distribution/Population]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "for <strong>unknown target function</strong> 𝑔(𝑥); only a set of points of the form (𝑥, 𝑔(𝑥)) is provided. Depending on the structure of the [[Functions (Domain - Codomain - Preimage - Image - Range)|domain]] and [[Functions (Domain - Codomain - Preimage - Image - Range)|codomain]] of 𝑔, several techniques for approximating <em>g</em> may be applicable. For example:\n- if the [[Functions (Domain - Codomain - Preimage - Image - Range)|codomain]] of 𝑔 is the set of [[Numbers Classes／Classification of Numbers|real numbers]], one is dealing with [[Interpolation - Extrapolation|interpolation]], [[Interpolation - Extrapolation|extrapolation]], [[Ordinary Least Squares (OLS) Regression|regression analysis]], and [curve fitting](https://en.wikipedia.org/wiki/Curve_fitting)\n- if the [[Functions (Domain - Codomain - Preimage - Image - Range)|codomain]] of 𝑔 is a finite set, one is dealing with [classification](https://en.wikipedia.org/wiki/Statistical_classification)"
    ]
  ]
}
```
