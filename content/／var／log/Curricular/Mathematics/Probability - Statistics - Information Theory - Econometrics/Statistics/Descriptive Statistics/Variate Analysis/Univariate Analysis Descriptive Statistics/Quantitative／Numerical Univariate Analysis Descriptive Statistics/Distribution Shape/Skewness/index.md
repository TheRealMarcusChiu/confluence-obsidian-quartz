---
title: "Skewness"
created: 2021-09-13T05:28:55.981-05:00
modified: 2021-11-07T02:52:20.499-06:00
parent: "[[Distribution Shape]]"
children: []
---
###### Skewness ([[Raw Moments - Moments About the Origin／Zero - Central／Mean Moments - Moments About The Mean - (Zeroth／First／Second／Third／Fourth／kth／nth) -  of a Probability Density Function|Third Central Moment]])
- is a measure of symmetry or asymmetry of the [[Probability Distributions|probability distribution]] of a [[Numbers Classes／Classification of Numbers|real-valued]] random variable about its [[Arithmetic Mean - Average - Location - Expected Value - Expectation Operator|mean]]
- value can be positive, negative, 0, or undefined
	- skewness 0 indicates data is symmetric (e.g. [[Uniform Distribution|uniform distribution]], [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|normal distribution]], etc)
	- negative skew indicates data are skewed left
	- positive skew indicates data are skewed right

# Fisher-Pearson Coefficient of Skewness
For a random variable 𝑋:
- population skewness = 𝐄\[(𝑋<sub></sub>- 𝜇)<sup>3</sup>\]

where:
- 𝜇 - [[Arithmetic Mean - Average - Location - Expected Value - Expectation Operator|population mean]]

For univariate dataset {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>}:
- sample skewness = 𝑔 = 𝐄\[(𝑋<sub>𝑖</sub>- 𝑋̅)<sup>3</sup>\] = <font style="color: rgb(128,0,0);">\[𝛴<sub>1≤𝑖≤𝑛</sub>(𝑋<sub>𝑖</sub>- 𝑋̅)<sup>3</sup>\]</font> / <font style="color: rgb(0,128,0);">\[𝑠<sup>3</sup>𝑛\]</font>

where:
- 𝑋̅ - [[Sample Mean|sample mean]]
- 𝑠 - [[Sample Variance - Sample Standard Deviation - Adjusted Sample Variance - Adjusted Sample Standard Deviation|sample standard deviation]]

# Adjusted Fisher-Pearson Coefficient of Skewness
- 𝐺 = <font style="color: rgb(128,0,0);">\[√\[𝑛(𝑛 - 1)\] / (𝑛 - 2)\]</font> · <font style="color: rgb(0,128,0);">𝑔</font>

# Pearson 2 Skewness Coefficient
- 𝑆<sub>𝑘<sub>2</sub></sub>= 3 (𝑋̅ - 𝑀̅) / 𝑠

where:
- 𝑀̅ - [[Median (2-Quantile - 50th Percentile)|sample median]]

![](https://www.youtube.com/watch?v=z3XaFUP1rAM&list=PLwJRxp3blEvZyQBTTOMFRP_TDaSdly3gU&index=25)
