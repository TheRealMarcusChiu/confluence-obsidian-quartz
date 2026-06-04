---
title: "LASSO Regression (Least Absolute Shrinkage and Selection Operator)"
created: 2024-02-21T10:09:18.547-06:00
modified: 2026-05-15T18:39:02.965-05:00
parent: "[[Linear Regression (LR) Models]]"
children:
  - "[[Ridge Regression vs LASSO Regression]]"
---
###### LASSO Regression (Least Absolute Shrinkage and Selection Operator)
````excerpt
- is a [[ML - Model／Weight／Parameter Regularization／Regularizer Methods／Techniques|regularization technique]] that improves the accuracy and interpretability of statistical models
- it's also known as [[L1／Manhattan／Rectilinear Distance Metric|L1]] regularization and is a form of regularization for linear regression models
````
^excerpt

# LASSO - Estimator

The LASSO estimator 𝛽ˆ<sub>𝐿𝐴𝑆𝑆𝑂</sub> is obtained by minimizing:
- (𝑦 - 𝑋𝛽)<sup>T</sup>(𝑦 - 𝑋𝛽)

subject to:
- $\sum_{i=1}^p |\beta_i| ≤ t \;\;\;\; \text{ for some } t > 0$

or equivalently:
- $\sum_{i=1}^p ||\beta_i||_1 ≤ t \;\;\;\; \text{ for some } t > 0$

The value of 𝑡 determines the degree of regularization.

The problem written in Lagrangian form is to minimize:
- $I_\lambda(\beta) = (y - X\beta)^T(y - X\beta) + \lambda ||\beta||_1$

# LASSO - Interpretation of Values of 𝜆
- if 𝜆=0, then we recover the usual unbiased estimator for 𝛽
- if 𝜆=∞, then 𝛽=0

As 𝜆 increases:
- the more estimators 𝛽<sub>𝑖</sub> = 0
- the bias increases
- the variance decreases

# Subpages
- [[Ridge Regression vs LASSO Regression]]
