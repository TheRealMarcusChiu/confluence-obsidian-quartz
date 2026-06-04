---
title: "Elastic Net Regression (Ridge & LASSO)"
created: 2024-02-21T11:26:40.231-06:00
modified: 2024-02-21T11:31:47.090-06:00
parent: "[[Linear Regression (LR) Models]]"
children: []
---
###### Elastic Net Regression (Ridge & LASSO)
````excerpt
- is a combination of regularizers [[Ridge Regression|Ridge regression]] and [[LASSO Regression (Least Absolute Shrinkage and Selection Operator)|LASSO regression]]
````
^excerpt

# Elastic Net - Objective Function
- $I_{\lambda_1,\lambda_2}(\beta) = (y - X\beta)^T(y - X\beta) + \lambda_1 ||\beta||_1 + \lambda_2 ||\beta||_2$

where:
- $\lambda_1 ||\beta||_1 \text{ - is the LASSO part that provides a sparse model}$
- $\lambda_2 ||\beta||_2 \text{ - is the Ridge part that stabilizes the regularization, and provides a unique minimum}$
