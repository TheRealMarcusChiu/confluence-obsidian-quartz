---
title: "IV Estimator - Inference"
created: 2021-09-13T05:27:56.920-05:00
modified: 2021-09-13T05:27:56.920-05:00
parent: "[[Instrumental Variables (IV) Estimator]]"
children: []
---
assume we have:
- a [[Univariate／Single-Variable／Simple Linear Regression Models|univariate linear model]]:
	- 𝑦<sub>𝑖</sub> = 𝜃<sub>0</sub> + 𝜃<sub>1</sub>𝑥<sub>𝑖</sub> + 𝑒<sub>𝑖</sub>
- [[Endogenous／Endogenic Variable - Exogenous／Exogenic Variable - Endogenous vs Exogeneity|endogeneity]] exists, such that:
	- 𝐄\[𝑒<sub>𝑖</sub>|𝑥<sub>𝑖</sub>\] ≠ 0
	- this means there is some [[Correlation - Correlation Coefficient|correlation]] between 𝑒<sub>𝑖</sub> and 𝑥<sub>𝑖</sub>
- an instrumental variable 𝑧<sub>𝑖</sub> such that:
	- 𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑥<sub>𝑖</sub>) ≠ 0 <font style="color: rgb(128,128,128);">\# not weak</font>
	- 𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑒<sub>𝑖</sub>) = 0 <font style="color: rgb(128,128,128);">\# not bad</font>

as long as the sample size is large then the IV Estimate 𝜃<sub>1</sub>ˆ has [[Sampling Distribution - Finite-Sample Distribution|sampling distribution]] approximately [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|Normal]](𝜇=𝜃<sub>1</sub>,𝜎<sup>2</sup>=?)

TODO
### Resources

![](https://www.youtube.com/watch?v=L6Iu_bqYFi8&list=PLwJRxp3blEvZyQBTTOMFRP_TDaSdly3gU&index=152&frags=wn&ab_channel=BenLambert)
