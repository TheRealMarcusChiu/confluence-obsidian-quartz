---
title: "D'Agostino's (K-squared／K2／K²) Test"
created: 2021-09-13T05:29:02.993-05:00
modified: 2021-09-13T05:29:02.993-05:00
parent: "[[Normality Tests - Statistical Tests]]"
children: []
---
###### D'Agostino's (K-squared/K2/K²) Test
- is a [[Normality Tests - Statistical Tests|statistical normality test]] that calculates summary statistics from the data, namely [[Kurtosis|kurtosis]] and [[Skewness|skewness]], to determine if the data distribution departs from the [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|normal distribution]]

# Code

> [!expand-ui]- Python
> ```
> # D'Agostino and Pearson's Test
> from numpy.random import seed
> from numpy.random import randn
> from scipy.stats import normaltest
> # seed the random number generator
> seed(1)
> # generate univariate observations
> data = 5 * randn(100) + 50
> # normality test
> stat, p = normaltest(data)
> print('Statistics=%.3f, p=%.3f' % (stat, p))
> # interpret
> alpha = 0.05
> if p > alpha:
> 	print('Sample looks Gaussian (fail to reject H0)')
> else:
> 	print('Sample does not look Gaussian (reject H0)')
> ```
