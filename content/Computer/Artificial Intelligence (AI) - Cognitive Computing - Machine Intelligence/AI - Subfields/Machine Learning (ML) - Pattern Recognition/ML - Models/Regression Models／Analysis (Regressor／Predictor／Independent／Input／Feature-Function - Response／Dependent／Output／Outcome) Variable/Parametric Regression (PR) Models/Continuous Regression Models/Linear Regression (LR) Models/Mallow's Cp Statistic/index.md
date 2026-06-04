---
title: "Mallow's Cp Statistic"
created: 2024-02-22T12:30:23.194-06:00
modified: 2024-02-22T12:39:25.207-06:00
parent: "[[Linear Regression (LR) Models]]"
children: []
---
###### Mallow's Cp Statistic
````excerpt
- is used to access the fit of a [[Linear Regression (LR) Models|linear regression model]] that has been estimated using [[Ordinary Least Squares (OLS)|ordinary least squares]] (aka [[Ordinary Least Squares (OLS) Regression|ordinary least squares regression]])
- has been shown to be equivalent to [[Akaike's Information Criterion／Criteria (AIC)|Akaike's Information Criterion (AIC)]] in the special case of Gaussian linear regression
````
^excerpt

# Mallow's Cp Statistic - Definition

The 𝐶<sub>𝑝</sub> statistic is defined as:
- $C_p = \frac{(y - X\hat{\beta})^T(y - X\hat{\beta})}{\sigma^2} - n + 2p$

where:
- 𝑦 is the response vector
- 𝑋 is the design matrix
- 𝛽ˆ is the estimated parameters
- 𝑝 is the number of regressors/predictors (including the bias predictor)
- 𝑛 is the sample size
- 𝜎<sup>2</sup> is the residual variance (if unknown it can be replaced with "best" estimate using full model)
