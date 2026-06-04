---
title: "Anderson-Darling Test"
created: 2021-09-13T05:29:02.429-05:00
modified: 2021-09-13T05:29:02.429-05:00
parent: "[[Normality Tests - Statistical Tests]]"
children: []
---
###### Anderson-Darling Test
- is a statistical test that can be used to evaluate whether a data sample comes from one of among many known data samples
- it can be used as a [[Normality Tests - Statistical Tests|statistical normality test]] to check whether a data sample is [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|normal]]. The test is a modified version of a more sophisticated nonparametric goodness-of-fit statistical test called the [Kolmogorov-Smirnov test](https://en.wikipedia.org/wiki/Kolmogorov%E2%80%93Smirnov_test)

# Anderson-Darling Test - Code

> [!expand-ui]- Python
> ```
> # Anderson-Darling Test
> from numpy.random import seed
> from numpy.random import randn
> from scipy.stats import anderson
> # seed the random number generator
> seed(1)
> # generate univariate observations
> data = 5 * randn(100) + 50
> # normality test
> result = anderson(data)
> print('Statistic: %.3f' % result.statistic)
> p = 0
> for i in range(len(result.critical_values)):
> 	sl, cv = result.significance_level[i], result.critical_values[i]
> 	if result.statistic < result.critical_values[i]:
> 		print('%.3f: %.3f, data looks normal (fail to reject H0)' % (sl, cv))
> 	else:
> 		print('%.3f: %.3f, data does not look normal (reject H0)' % (sl, cv))
> ```
