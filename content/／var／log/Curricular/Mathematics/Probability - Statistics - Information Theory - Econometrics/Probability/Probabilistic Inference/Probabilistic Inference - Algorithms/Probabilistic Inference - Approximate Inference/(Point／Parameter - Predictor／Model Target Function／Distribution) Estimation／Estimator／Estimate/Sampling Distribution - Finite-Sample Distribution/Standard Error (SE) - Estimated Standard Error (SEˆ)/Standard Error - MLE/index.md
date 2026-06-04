---
title: "Standard Error - MLE"
created: 2021-09-13T05:28:10.931-05:00
modified: 2023-09-18T13:24:15.333-05:00
parent: "[[Standard Error (SE) - Estimated Standard Error (SEˆ)]]"
children: []
---
If
- 𝜃ˆ was estimated using [[Maximum Likelihood Estimation (MLE)]]
- (sample size 𝑛 is large) or (population has [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|normal distribution]])

we can find approximate the [[Standard Error (SE) - Estimated Standard Error (SEˆ)|standard error]] 𝐒𝐄 of θˆ<sub>MLE</sub>with the following property of MLE

In the article [[MLE - Asymptotic Distribution of the MLE|Asymptotic Distribution of the MLE]], it states:
> <font style="color: rgb(128,128,128);">the random variable 𝜃ˆ<sub>MLE</sub> has an Asymptotic Distribution equivalent to 𝑁𝑜𝑟𝑚𝑎𝑙(𝜇=𝜃, 𝜎<sup>2</sup>=1/𝐼(𝜃))</font>

We could use this to approximate the [[Standard Error - MLE|standard error]] (𝐒𝐄) of the estimator 𝜃ˆ<sub>MLE</sub>
- 𝐒𝐄<font style="color: rgb(255,0,0);">ˆ</font>(𝜃ˆ<sub>MLE</sub>) = 𝑟𝑜𝑜𝑡(1/𝐼(𝜃))

where:
- 𝐼(𝜃) - is the [[Fisher Information - Fisher Information Matrix|Fisher Information]] of [[Statistics - Terminology|parameter]] 𝜃
