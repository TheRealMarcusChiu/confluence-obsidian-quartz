---
title: "Ordinary Least Squares (OLS)"
created: 2021-09-13T05:27:49.000-05:00
modified: 2021-12-20T15:01:26.169-06:00
parent: "[[Linear Least Squares (LLS)]]"
children: []
---
###### Ordinary Least Squares (OLS)
- is a type of [[Linear Least Squares (LLS)|linear least-squares]] method for estimating the unknown [[Statistics - Terminology|parameters]] in a [[Ordinary Least Squares (OLS) Regression|linear regression model]]
- under the additional assumption that the errors are [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|normally distributed]], <strong>OLS</strong> is the [[Maximum Likelihood Estimation (MLE)|maximum likelihood estimator]]
- it minimizes the sum of the squares of the differences between the observed dependent variable (values of the variable being observed) in the given dataset and those predicted by the linear function

# Algorithm
given 𝑛 training examples:
- (𝒙<sup>(1)</sup>, 𝑦<sup>(1)</sup>)
- ...
- (𝒙<sup>(𝑛)</sup>, 𝑦<sup>(𝑛)</sup>)

and given linear function:
- 𝑦̂ = 𝑓(𝒙) = 𝜃<sub>0</sub> + 𝜃<sub>1</sub>𝑥<sub>1</sub> + ... + 𝜃<sub>𝑘</sub>𝑥<sub>𝑘</sub>

ordinary least squares is defined as:
- <strong>𝜽</strong>ˆ = 𝑎𝑟𝑔𝑚𝑖𝑛<sub><strong>𝜽</strong></sub> 𝛴<sub>1≤𝑖≤𝑛</sub>\[ (𝑦̂<sup>(𝑖)</sup>-𝑦<sup>(𝑖)</sup>)² \]

where:
- 𝑦̂<sup>(𝑖)</sup>- is the predicted value of a linear function 𝑓(𝒙<sup>(𝑖)</sup>)
