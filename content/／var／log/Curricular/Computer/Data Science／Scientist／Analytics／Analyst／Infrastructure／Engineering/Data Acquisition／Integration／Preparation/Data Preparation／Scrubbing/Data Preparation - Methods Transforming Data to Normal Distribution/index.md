---
title: "Data Preparation - Methods Transforming Data to Normal Distribution"
created: 2021-09-13T05:29:00.506-05:00
modified: 2023-09-13T15:20:05.915-05:00
parent: "[[Data Preparation／Scrubbing]]"
children:
  - "[[Box-Cox Transformation]]"
  - "[[Yeo-Johnson Transformation]]"
---
[[(Parametric vs Non-Parametric) Statistical Methods／Procedures|Parametric Statistics]] requires the assumption that [[Data／Variable Types (Statistics／Programming)|quantitative data]] exhibits [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|normal distribution]]
- parametric statistic is a stronger way of testing hypothesis than non-parametric statistic

quantitative data can be either:
- normal
- right skewed
- left skewed

if data does not exhibit normal distribution, we can either:
- use a mathematical transformation on the data that leads to normal distribution
- use another method that does not require normal distribution
	- rank-based method
	- non-parametric testing

3 commonly used transformations for quantitative data:
- logarithm
- square root
- reciprocal

we call these transformations variance-stabilizing because, their purpose is to make variances the same

transform values of a variable to take on normal distribution

[https://machinelearningmastery.com/how-to-transform-data-to-fit-the-normal-distribution/](https://machinelearningmastery.com/how-to-transform-data-to-fit-the-normal-distribution/)

plot data as histogram and see what transformation is needed

![[Data Preparation - Methods Transforming Data to Normal Distribution/transforming-data-for-normality-histogram.png|300]]
