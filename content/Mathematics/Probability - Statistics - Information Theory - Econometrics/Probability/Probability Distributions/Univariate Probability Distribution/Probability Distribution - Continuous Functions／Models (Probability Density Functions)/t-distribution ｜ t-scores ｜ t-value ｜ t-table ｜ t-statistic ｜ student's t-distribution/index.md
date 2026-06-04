---
title: "t-distribution ｜ t-scores ｜ t-value ｜ t-table ｜ t-statistic ｜ student's t-distribution"
created: 2021-09-13T05:27:28.232-05:00
modified: 2022-01-02T06:19:53.074-06:00
parent: "[[Probability Distribution - Continuous Functions／Models (Probability Density Functions)]]"
children: []
---
if we have the following conditions:
- the underlying distribution is [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|Normal]]
- the [[Variance - Standard Deviation (Root Mean Square (RMS) Deviation)|population standard deviation (𝜎)]] is <u><strong>unknown</strong></u>, we cannot transform 𝑋̅ to [[z-distribution (Standard Normal Distribution) ｜ z-scores ｜ z-values ｜ z-table ｜ z-statistic ｜ Standardization - Standardized Values - Standard Scores - Normal Deviates|standard normal]]
- the sample size is too small to apply [[Central Limit Theorem (CLT)]]

However, we can estimate 𝜎 using the [[Sample Variance - Sample Standard Deviation - Adjusted Sample Variance - Adjusted Sample Standard Deviation|sample standard deviation (𝑠)]] and transform 𝑋̅ to a variable with a similar distribution, the <em><font style="color: rgb(192,0,0);"><strong>t distribution</strong></font></em>. There are actually many t distributions, indexed by degrees of freedom (𝑑𝑓).

t-distribution does the following:
- adjusts for the additional uncertainty around 𝑠
- the smaller the sample size:
	- the more uncertain we are about 𝑠
	- t-distribution becomes less like [[z-distribution (Standard Normal Distribution) ｜ z-scores ｜ z-values ｜ z-table ｜ z-statistic ｜ Standardization - Standardized Values - Standard Scores - Normal Deviates|z-distribution]] (i.e. becomes flatter and wider)
- the larger the sample size:
	- the more certain we are about 𝑠
	- t-distribution becomes more like [[z-distribution (Standard Normal Distribution) ｜ z-scores ｜ z-values ｜ z-table ｜ z-statistic ｜ Standardization - Standardized Values - Standard Scores - Normal Deviates|z-distribution]]

# T-Distribution Probability Density Function
![[t-distribution ｜ t-scores ｜ t-value ｜ t-table ｜ t-statistic ｜ student's t-distribution/t-distribution.png|301]]

where:
- 𝑣 - [[Degrees of Freedom (DoF - df)|degrees of freedom]]
- 𝚪 - [[Gamma Function|gamma function]]

# T-Distribution vs Z-Distribution (i.e. Standard-Normal-Distribution)
a 𝑡<sub>𝑛−1</sub>-distribution looks like a [[z-distribution (Standard Normal Distribution) ｜ z-scores ｜ z-values ｜ z-table ｜ z-statistic ｜ Standardization - Standardized Values - Standard Scores - Normal Deviates|z-distribution 𝑁𝑜𝑟𝑚𝑎𝑙(0,1)]] but it has heavier tails. A heavier tail accounts for the fact that there is more uncertainty when [[Sample Variance - Sample Standard Deviation - Adjusted Sample Variance - Adjusted Sample Standard Deviation|sample standard deviation (𝑠)]] is used in place of [[Variance - Standard Deviation (Root Mean Square (RMS) Deviation)|population standard deviation (𝜎)]]
# T-Distribution vs Degrees of Freedom
as the degrees-of-freedom increase, the t-distribution becomes more like the [[z-distribution (Standard Normal Distribution) ｜ z-scores ｜ z-values ｜ z-table ｜ z-statistic ｜ Standardization - Standardized Values - Standard Scores - Normal Deviates|z-distribution (standard normal distribution)]]

![[t-distribution ｜ t-scores ｜ t-value ｜ t-table ｜ t-statistic ｜ student's t-distribution/t-distribution-vs-z-distribution.png]]
# Resources
- tutorial - [https://www.youtube.com/watch?v=UetYS3PaHIo](https://www.youtube.com/watch?v=UetYS3PaHIo)
- t-distribution calculator - [https://stattrek.com/online-calculator/t-distribution.aspx](https://stattrek.com/online-calculator/t-distribution.aspx)
