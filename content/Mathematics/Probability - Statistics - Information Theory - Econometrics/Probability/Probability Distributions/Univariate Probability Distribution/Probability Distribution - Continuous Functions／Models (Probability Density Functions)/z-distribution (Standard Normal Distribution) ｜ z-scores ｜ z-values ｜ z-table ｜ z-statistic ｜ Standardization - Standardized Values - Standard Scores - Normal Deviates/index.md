---
title: "z-distribution (Standard Normal Distribution) ｜ z-scores ｜ z-values ｜ z-table ｜ z-statistic ｜ Standardization - Standardized Values - Standard Scores - Normal Deviates"
created: 2021-09-13T05:27:29.349-05:00
modified: 2022-01-02T06:22:48.838-06:00
parent: "[[Probability Distribution - Continuous Functions／Models (Probability Density Functions)]]"
children: []
---
<strong>Z-Distribution (Standard Normal Distribution)</strong> is a [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|Normal Distribution]] with “standard parameters”:
- 𝜇 = 0
- 𝜎 = 1

therefore, the normal distribution
- 𝑓(𝑋=𝑥) = (1/\[𝜎\*𝑠𝑞𝑟𝑡(2𝜋)\]) 𝑒<sup>-(𝑥-𝜇)<sup>2</sup>/(2𝜎<sup>2</sup>)</sup>, for -∞ \< 𝑥 \<∞

becomes
- 𝑓(𝑋=𝑥) = (1/𝑠𝑞𝑟𝑡(2𝜋)) 𝑒<sup>-𝑥<sup>2</sup>/2</sup>, for -∞ \< 𝑥 \<∞

![[z-distribution (Standard Normal Distribution) ｜ z-scores ｜ z-values ｜ z-table ｜ z-statistic ｜ Standardization - Standardized Values - Standard Scores - Normal Deviates/standard-normal-distribution.jpg|400]]

<strong>Z-Distribution (Standard Normal Distribution)</strong>
- is a [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|normal distribution]] with mean 0 and standard deviation 1
- used especially in [[Inferential Statistical Hypothesis Testing|testing hypotheses]] about [[Sample Mean|sample means]] or [[Sample Proportion|sample proportions]] of samples drawn from populations whose population standard deviations are <strong>known</strong>

<strong>Standardization</strong>
- turns any [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|normal distribution]] into a standard normal distribution and therefore one could us the z-table to look up its corresponding area under the curve
- outputs a standardized value

<strong>Standardized Values</strong> (also called <strong>Standard Scores</strong>, <strong>Normal Deviates</strong>, <strong>Z-Scores (𝑧\*)</strong>):
- gives you an idea of how far from the mean a data point is
- but more technically it’s a measure of how many standard deviations below or above the mean a data point is
- tells us how far from the mean we are in terms of standard deviations

# Computing Z-Score Given 𝛼 significance level

> [!expand]- Click here to expand...
> if we want 95% confidence (𝛼 = 0.05)
>
> therefore:
> - 𝑧\* = ± 1.96
>
> ![[z-distribution (Standard Normal Distribution) ｜ z-scores ｜ z-values ｜ z-table ｜ z-statistic ｜ Standardization - Standardized Values - Standard Scores - Normal Deviates/z-distribution-normal-distribution-95-percent.png|301]]
>
> this is an example of a [[Statistical Hypothesis Test - 1-Tailed & 2-Tailed|2-tailed test]]
# Computing Z-Score Given 𝑋̅, 𝜇, and 𝜎

> [!expand]- Click here to expand...
> standardized value equation
> - 𝑧\* = (𝑋̅ - 𝜇) / 𝜎
>
> where:
> - 𝑧\* - the z-score
> - 𝑋̅ - the observed [[Sample Mean|sample mean]] (a specific value that you are calculating the z-score for)
> - 𝜇 - [[Arithmetic Mean - Average - Location - Expected Value - Expectation Operator|mean]]
> - 𝜎 - [[Variance - Standard Deviation (Root Mean Square (RMS) Deviation)|standard deviation]]
# Resources
- [Statistics by Jim](https://statisticsbyjim.com/basics/normal-distribution/)
- [YouTube - Z-Scores, Standardization, and the Standard Normal Distribution](https://www.youtube.com/watch?v=2tuBREK_mgE)
