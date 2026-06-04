---
title: "Kurtosis"
created: 2021-09-13T05:28:55.588-05:00
modified: 2026-05-21T15:12:30.787-05:00
parent: "[[Distribution Shape]]"
children: []
---
###### Kurtosis ([[Raw Moments - Moments About the Origin／Zero - Central／Mean Moments - Moments About The Mean - (Zeroth／First／Second／Third／Fourth／kth／nth) -  of a Probability Density Function|Fourth Central Moment]])
````excerpt
- is a measure of whether the data are heavy-tailed or light-tailed relative to a [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|normal distribution]]
	- data sets with high kurtosis tend to have heavy tails, or outliers
	- data sets with low kurtosis tend to have light tails, or lack of outliers
````
^excerpt

# Formula
for univariate dataset {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>}:
- sample kurtosis = 𝐄\[(𝑋<sub>𝑖</sub>- 𝑋̅)<sup>4</sup>\] = <font style="color: rgb(128,0,0);">\[𝛴<sub>1≤𝑖≤𝑛</sub>(𝑋<sub>𝑖</sub>- 𝑋̅)<sup>4</sup>\]</font> / <font style="color: rgb(0,128,0);">\[𝑠<sup>4</sup>𝑛\]</font>

where:
- 𝑋̅ - [mean](http://confluence.marcuschiu.com/display/NOT/Mean+-+Average+-+Expected+Value+-+Expectation+-+Location)
- 𝑠 - [[Sample Variance - Sample Standard Deviation - Adjusted Sample Variance - Adjusted Sample Standard Deviation|sample standard deviation]] computed with 𝑛 as the denominator instead of (𝑛 - 1)

# Excess Kurtosis
kurtosis for a [[z-distribution (Standard Normal Distribution) ｜ z-scores ｜ z-values ｜ z-table ｜ z-statistic ｜ Standardization - Standardized Values - Standard Scores - Normal Deviates|standard normal distribution]] is 3
- excess kurtosis = <strong>\[</strong> <font style="color: rgb(128,0,0);">\[𝛴<sub>1≤𝑖≤𝑛</sub>(𝑋<sub>𝑖</sub>- 𝑋̅)<sup>4</sup>\]</font> / <font style="color: rgb(0,128,0);">\[𝑠<sup>4</sup>𝑛\]<font style="color: rgb(0,51,102);"> <strong>\]</strong> - 3</font></font>

# <font style="color: rgb(0,128,0);"><font style="color: rgb(0,51,102);">Kurtosis Types</font></font>
<font style="color: rgb(0,128,0);"><font style="color: rgb(0,51,102);">![[Kurtosis/Leptokurtic-or-platykurtic-degree-difference-of-curves-with-different-kurtosis.png|400]]</font></font>

![](https://www.youtube.com/watch?v=Pf7awGwzy4k&list=PLwJRxp3blEvZyQBTTOMFRP_TDaSdly3gU&index=24)
