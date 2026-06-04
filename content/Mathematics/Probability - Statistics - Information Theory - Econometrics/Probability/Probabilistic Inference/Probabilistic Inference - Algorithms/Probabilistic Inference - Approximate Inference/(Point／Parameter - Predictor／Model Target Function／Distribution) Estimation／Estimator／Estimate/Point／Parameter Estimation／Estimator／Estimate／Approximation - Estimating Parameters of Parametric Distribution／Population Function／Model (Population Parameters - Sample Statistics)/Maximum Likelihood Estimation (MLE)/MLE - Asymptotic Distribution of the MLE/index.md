---
title: "MLE - Asymptotic Distribution of the MLE"
created: 2021-09-13T05:28:03.987-05:00
modified: 2021-11-06T19:18:08.004-05:00
parent: "[[Maximum Likelihood Estimation (MLE)]]"
children: []
---
The random variable 𝜃ˆ<sub>MLE</sub> has Asymptotic Distributionequivalent to 𝑁𝑜𝑟𝑚𝑎𝑙(<em><em>𝜇</em></em>=𝜃, 𝜎<sup>2</sup>=1/𝐼(𝜃)), where:
- 𝜃 - is the true unknown [[Statistics - Terminology|population parameter]]
- 𝜃ˆ<sub>MLE</sub>- is the MLE estimate of 𝜃
- 𝑁𝑜𝑟𝑚𝑎𝑙 - is the [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|normal distribution]]
- <em>𝜇</em> - is the normal distribution's [[Arithmetic Mean - Average - Location - Expected Value - Expectation Operator|mean]]
- 𝜎<sup>2</sup>- is the normal distribution's [[Variance - Standard Deviation (Root Mean Square (RMS) Deviation)|variance]]
- 𝐼(𝜃) - is the [[Fisher Information - Fisher Information Matrix]] of 𝜃

This normal distribution is governed by 𝜎<sup>2</sup> = 1/𝐼(𝜃):
- the larger the Fisher information 𝐼(𝜃), the smaller the variance 𝜎<sup>2</sup> of the normal distribution
- the smaller the Fisher Information 𝐼(𝜃), the larger the variance 𝜎<sup>2</sup> of the normal distribution

# Using it to Estimate Standard Error of 𝜃ˆ<sub>MLE</sub>
Given the information above, we can approximate the [[Standard Error (SE) - Estimated Standard Error (SEˆ)|standard error (𝑆𝐸)]] of the MLE estimate 𝜃ˆ<sub>MLE</sub>
- 𝑆𝐸<font style="color: rgb(255,0,0);">ˆ</font>(𝜃ˆ<sub>MLE</sub>) = √\[ 1/𝐼(𝜃) \]

where:
- 𝑆𝐸<font style="color: rgb(255,0,0);">ˆ</font>(𝜃ˆ<sub>MLE</sub>) - is the [[Standard Error (SE) - Estimated Standard Error (SEˆ)|Estimated Standard Error]] of random variable 𝜃ˆ<sub>MLE</sub>

# Resources
![](https://www.youtube.com/watch?v=DyLWP5Zx934)
