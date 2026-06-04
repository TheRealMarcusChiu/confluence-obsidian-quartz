---
title: "LR - Tests - Derivation of Student T-Statistic"
created: 2024-02-01T14:48:03.096-06:00
modified: 2024-02-01T15:10:41.689-06:00
parent: "[[Linear Regression (LR) Models]]"
children: []
---
When 𝜎 is UNKNOWN, the normal test for 𝛽ˆ is modified to become a student-t test.

A student-t random variable, with 𝜈 degrees of freedom, can be written as:
- $t = \frac{z}{\sqrt{\mathcal{X}_𝜈^2/𝜈}}$

where:
- 𝑧 is a [[z-distribution (Standard Normal Distribution) ｜ z-scores ｜ z-values ｜ z-table ｜ z-statistic ｜ Standardization - Standardized Values - Standard Scores - Normal Deviates|standard normal]] random variable
- 𝒳<sub>𝜈</sub><sup>2</sup> is a [[Chi-Square Distribution|chi-squared]] random variable
- 𝑧 and 𝒳<sub>𝜈</sub><sup>2</sup> are independent

We can use:
- $z = \frac{\hat{𝛽}}{𝜎\sqrt{(X^TX)^{-1}}}$
- $\mathcal{X}_{n-p}^2 = (n-p)\frac{\hat{𝜎}^2}{𝜎^2}$

Thus:
- $t = \frac{z}{\sqrt{\mathcal{X}_𝜈^2/𝜈}}$
- $t = \frac{\frac{\hat{𝛽}}{𝜎\sqrt{(X^TX)^{-1}}}} {\sqrt{(n-p)\frac{\hat{𝜎}^2}{𝜎^2}/(n-p)}}$
- $t = \frac{\frac{\hat{𝛽}}{𝜎\sqrt{(X^TX)^{-1}}}} {\frac{\hat{𝜎}}{𝜎}}$
- $t = \frac{\hat{𝛽}} {\hat{𝜎}\sqrt{(X^TX)^{-1}}}$

Under the null hypothesis, this is a standard student-t variable with 𝑛-𝑝 degrees of freedom.

Reject the null hypothesis if:
- $|T| > qt(0.975, n-p)$
