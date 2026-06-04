---
title: "LLS - Comparisons (OLS vs WLS vs GLS) - Best Linear Unbiased Estimator (BLUE) - Minimum-Variance Unbiased Estimator (MVUE)"
created: 2021-09-13T05:27:48.774-05:00
modified: 2023-08-30T20:43:44.888-05:00
parent: "[[Linear Least Squares (LLS)]]"
children: []
---
- PROBLEM: [[Heteroscedasticity - Homoscedasticity|heteroscedasticity]] breaks one of the [[Gauss-Markov Assumptions - OLS Assumptions]] and also causes [[Ordinary Least Squares (OLS)|OLS]] to no longer become the best linear estimator BLUE
- SOLUTION: use [[Generalized Least Squares (GLS)|GLS]] such as [[Weighted Least Squares (WLS)|WLS]] → removes heteroscedasticity

The real difference between [[Ordinary Least Squares (OLS)|OLS]] and [[Generalized Least Squares (GLS)|GLS]] is the assumptions made about the error term of the model:
- in OLS we assume that 𝑉𝑎𝑟(𝑢)=𝜎<sup>2</sup>𝐼, where 𝐼 is the [[Identity Matrix|identity matrix]]
- in GLS we assume that 𝑉𝑎𝑟(𝑢)=𝜎<sup>2</sup>𝛴, where 𝛴 is the [[Covariance & Correlation Matrix|variance-covariance matrix]]

# OLS

The problem with OLS in the presence of [[Heteroscedasticity - Homoscedasticity|heteroscedasticity]] is that it gives too much weight to those points in regions where the variance is high. This means that the variance of OLS estimators is higher than estimators that give lower weight to high-variance regions
# GLS / WLS

requires knowing the variance structure
# Best Linear Unbiased Estimator (BLUE)

[Best Linear Unbiased Estimator (BLUE)](https://en.wikipedia.org/wiki/Best_linear_unbiased_estimator)

The <strong>Gauss–Markov theorem</strong> states that the OLS estimator has the lowest [sampling variance](https://en.wikipedia.org/wiki/Sampling_variance) within the class of linearunbiasedestimators, if the errors in the [[Ordinary Least Squares (OLS) Regression|linear regression model]] are uncorrelated, and have equal variances and expectation value of zero. The errors do not need to be [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|normal]], nor do they need to be [[Independent and Identically Distributed (IID)|independent and identically distributed]]
# Minimum-Variance Unbiased Estimator (MVUE)
[Minimum-Variance Unbiased Estimator (MVUE)](https://en.wikipedia.org/wiki/Minimum_variance_unbiased_estimator) is an [[Estimator - Inductive Properties (Biasedness／Unbiasedness - Consistency／Consistent - Statistic Efficiency)|unbiased estimator]] whose [[Sampling Distribution - Finite-Sample Distribution|sampling distribution]] has lower variance than any other unbiased estimator for all possible values of the parameter
# Resources

![](https://www.youtube.com/watch?v=upAQ_gCGnL8)
