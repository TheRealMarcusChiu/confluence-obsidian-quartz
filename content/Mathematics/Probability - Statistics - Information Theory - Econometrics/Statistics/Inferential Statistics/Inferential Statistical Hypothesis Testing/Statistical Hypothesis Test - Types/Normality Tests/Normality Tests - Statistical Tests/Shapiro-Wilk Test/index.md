---
title: "Shapiro-Wilk Test"
created: 2021-09-13T05:29:03.247-05:00
modified: 2023-09-13T13:55:44.428-05:00
parent: "[[Normality Tests - Statistical Tests]]"
children: []
---
###### Shapiro-Wilk Test
- is a [[Normality Tests - Statistical Tests|statistical normality test]] of the hypothesis that the distribution of the data as a whole deviates from a comparable [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|normal distribution]]:
	- if the test is non-significant (p\>.05) it tells us that the distribution of the sample is not significantly different from a normal distribution
	- if the test is significant (p \< .05) then the distribution of the sample is significantly different from a normal distribution

# Shapiro-Wilk Test - Limitation

Its important to note that there are limitations to the Shapiro-Wilk test. As the dataset being evaluated gets larger, the Shapiro-Wilk test becomes more sensitive to small deviations which leads to a greater probability of rejecting the null hypothesis (null hypothesis being the values come from a normal distribution).

The principal message is that to assess for normality we should not rely on only one approach to assess our data. Rather, we should understand the distribution visually, through descriptive statistics, and formal testing procedures to come to our conclusion of whether our data meets the normality assumption or not
# Shapiro-Wilk Test - Code

> [!expand-ui]- R Code
> The results below indicate that the driving accuracy data does not deviate from a normal distribution, however, the earnings data is statistically significant suggesting it does. Also, note that the value for <em>W</em> below corresponds to the <em>normtest. W</em> from the <code>stat.desc()</code> outputs above and the <em>p</em>-value below corresponds to the <em>normtest.p</em> from <code>stat.desc()</code>
> ```
> > # generate 1000 random samples from a Normal Distribution
> > random_data_1 = rnorm(1000, 1, 0.76)
> > shapiro.test(random_data_1)
>
> 	Shapiro-Wilk normality test
>
> data:  random_data_1
> W = 0.99866, p-value = 0.6632
> ```
> ```
> > # generate 1000 random samples from a Uniform Distribution
> > random_data_2 = runif(1000,3,7)
> > shapiro.test(random_data_2)
>
> 	Shapiro-Wilk normality test
>
> data:  random_data_2
> W = 0.95565, p-value < 2.2e-16
> ```

> [!expand-ui]- Python
> ```
> # Shapiro-Wilk Test
> from numpy.random import seed
> from numpy.random import randn
> from scipy.stats import shapiro
> # seed the random number generator
> seed(1)
> # generate univariate observations
> data = 5 * randn(100) + 50
> # normality test
> stat, p = shapiro(data)
> print('Statistics=%.3f, p=%.3f' % (stat, p))
> # interpret
> alpha = 0.05
> if p > alpha:
> 	print('Sample looks Gaussian (fail to reject H0)')
> else:
> 	print('Sample does not look Gaussian (reject H0)')
> ```
