---
title: "Ridge Regression vs LASSO Regression"
created: 2024-02-21T11:17:19.360-06:00
modified: 2024-02-21T11:17:44.204-06:00
parent: "[[LASSO Regression (Least Absolute Shrinkage and Selection Operator)]]"
children: []
---
# [[LASSO Regression (Least Absolute Shrinkage and Selection Operator)|LASSO Regression]] vs [[Ridge Regression]]

LASSO Estimator:
- $\hat{\beta}_{LASSO} = \hat{\beta}_{OLS} · \; max\left\{0, \; 1 - \frac{0.5 \lambda}{\beta_{OLS}} \right\}$

Ridge Estimator:
- $\hat{\beta}_{RIDGE} = \frac{\hat{\beta}_{OLS}}{1 + \lambda}$

The LASSO estimator can go to 0, while the Ridge estimator does not.
