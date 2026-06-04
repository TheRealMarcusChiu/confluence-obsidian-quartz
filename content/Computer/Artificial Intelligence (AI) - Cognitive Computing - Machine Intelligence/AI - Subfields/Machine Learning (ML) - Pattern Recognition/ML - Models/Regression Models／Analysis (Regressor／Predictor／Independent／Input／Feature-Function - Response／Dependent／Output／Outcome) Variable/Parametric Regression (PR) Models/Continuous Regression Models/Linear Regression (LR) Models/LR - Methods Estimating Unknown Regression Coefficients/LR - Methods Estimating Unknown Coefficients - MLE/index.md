---
title: "LR - Methods Estimating Unknown Coefficients - MLE"
created: 2020-08-14T14:28:42.078-05:00
modified: 2021-12-21T03:30:08.430-06:00
parent: "[[LR - Methods Estimating Unknown Regression Coefficients]]"
children: []
---
solving [[Ordinary Least Squares (OLS) Regression|Linear Regression]] with [[Maximum Likelihood Estimation (MLE)]]

Linear Regression is the mapping from 𝒙 to 𝑦̂, chosen by minimizing the [[Method of Least Mean Squared／Squares Error／Estimation／Estimator (LMS／LSE／MMSE) - Sum of Square Errors／Residuals - Regression Variance／Standard-Deviation／Error of Regression／Residuals／Estimate - Root Mean Square Deviation／Error (RMSD／E - MSE)|Mean Square Error (MSE)]] in other words [[Method of Least Mean Squared／Squares Error／Estimation／Estimator (LMS／LSE／MMSE) - Sum of Square Errors／Residuals - Regression Variance／Standard-Deviation／Error of Regression／Residuals／Estimate - Root Mean Square Deviation／Error (RMSD／E - MSE)|Least Square Errors (LSE)]]:
- <strong>𝜽</strong>ˆ<sub>𝐿𝑆𝐸</sub> = 𝑎𝑟𝑔𝑚𝑖𝑛<sub><strong>𝜽</strong></sub> (1/𝑛) 𝛴<sub>1≤𝑖≤𝑛</sub>\[ (𝑦<sup>(𝑖)</sup>-𝑦̂<sup>(𝑖)</sup>)² \]

let's see how <strong>𝜽</strong>ˆ<sub>𝑀𝐿𝐸</sub> is equivalent to <strong>𝜽</strong>ˆ<sub>𝐿𝑆𝐸</sub>
# Solving Linear Regression With Maximum Likelihood Estimation (MLE)

instead of producing a single scalar prediction 𝑦̂, think of a model producing a conditional distribution 𝐏(𝑦|𝒙)
> We can imagine that with an infinitely large training set, we might see several training examples with the same input value 𝒙 but different values of <font style="color: rgb(112,112,112);">𝑦</font>. The goal of the learning algorithm is now to fit the distribution 𝐏(𝑦|𝒙) to all of those different 𝑦 values that are all compatible with 𝒙

we define:
- 𝐏(𝑦|𝒙) = 𝒩(𝑦;𝑓(𝒙,𝜽),𝜎²)

where:
- 𝒩 - is the [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|normal distribution]]
- 𝑓(𝒙,𝜽) is the estimation of the [[Arithmetic Mean - Average - Location - Expected Value - Expectation Operator|mean]] of the gaussian as 𝑦̂
- 𝜎² - is some constant [[Variance - Standard Deviation (Root Mean Square (RMS) Deviation)|variance]]

In other words, [[Ordinary Least Squares (OLS) Regression|OLS]] is mathematically equivalent to [[Maximum Likelihood Estimation (MLE)|MLE]], if the errors are assumed to be [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|normally distributed]] and [[Independent and Identically Distributed (IID)]]

Given 𝑛 training examples {(𝑦<sup>(1)</sup>,𝒙<sup>(1)</sup>), ..., (𝑦<sup>(𝑛)</sup>,𝒙<sup>(𝑛)</sup>)}, maximize the probability w.r.t. [[ML - Model Parameters & Hyperparameters|model parameters]] <strong>𝜽</strong>:
- <strong>𝜽</strong>ˆ<sub>𝑀𝐿𝐸</sub> = 𝑎𝑟𝑔𝑚𝑎𝑥<sub><strong>𝜽</strong></sub> 𝛴<sub>1≤𝑖≤𝑛</sub>\[ 𝑙𝑜𝑔 \[ <font style="color: rgb(255,0,255);">𝐏(𝑦<sup>(𝑖)</sup>|𝒙<sup>(𝑖)</sup>;<strong>𝜽</strong>)</font> \] \]<font style="color: rgb(128,128,128);"> \# see derivation at </font>[[Maximum Likelihood Estimation (MLE)]]
- <strong>𝜽</strong>ˆ<sub>𝑀𝐿𝐸</sub> = 𝑎𝑟𝑔𝑚𝑎𝑥<sub><strong>𝜽</strong></sub> 𝛴<sub>1≤𝑖≤𝑛</sub>\[ 𝑙𝑜𝑔 \[ <font style="color: rgb(255,0,255);">𝒩(𝑦<sup>(𝑖)</sup>;𝑓(𝒙<sup>(𝑖)</sup>,𝜽),𝜎²)</font> \] \] <font style="color: rgb(128,128,128);">\# by definition above</font>
- <strong>𝜽</strong>ˆ<sub>𝑀𝐿𝐸</sub> = 𝑎𝑟𝑔𝑚𝑎𝑥<sub><strong>𝜽</strong></sub> 𝛴<sub>1≤𝑖≤𝑛</sub>\[ 𝑙𝑜𝑔 \[ <font style="color: rgb(255,0,255);">𝒩(𝑦<sup>(𝑖)</sup>;𝑦̂<sup>(𝑖)</sup>,𝜎²)</font> \] \] <font style="color: rgb(128,128,128);">\# equivalent syntax change: 𝑓(𝒙<sup>(𝑖)</sup>,𝜽) = 𝑦̂<sup>(𝑖)</sup></font>
- <strong>𝜽</strong>ˆ<sub>𝑀𝐿𝐸</sub> = 𝑎𝑟𝑔𝑚𝑎𝑥<sub><strong>𝜽</strong></sub> 𝛴<sub>1≤𝑖≤𝑛</sub>\[ 𝑙𝑜𝑔 \[ <font style="color: rgb(255,0,255);">(1/\[𝜎\*𝑠𝑞𝑟𝑡(2𝜋)\]) 𝑒<sup>-(𝑦<sup>(𝑖)</sup>-<font style="color: rgb(255,0,255);">𝑦̂</font><sup>(𝑖)</sup>)<sup>2</sup>/(2𝜎<sup>2</sup>)</sup></font> \] \]<font style="color: rgb(128,128,128);"> \# by [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|normal distribution]] formula</font>
- <strong>𝜽</strong>ˆ<sub>𝑀𝐿𝐸</sub> = 𝑎𝑟𝑔𝑚𝑎𝑥<sub><strong>𝜽</strong></sub> 𝛴<sub>1≤𝑖≤𝑛</sub>\[ <font style="color: rgb(128,128,128);"><font style="color: rgb(128,0,0);">𝑙𝑜𝑔(1)</font> - <font style="color: rgb(255,102,0);">𝑙𝑜𝑔(𝜎)</font> - <font style="color: rgb(128,128,0);">𝑙𝑜𝑔((2𝜋)<sup>(1/2)</sup>)</font> + <font style="color: rgb(0,128,0);">𝑙𝑜𝑔(𝑒<sup>-(</sup><sup>𝑦</sup><sup><sup>(𝑖)</sup></sup></font><font style="color: rgb(0,128,0);"><sup>-𝑦̂<sup>(𝑖)</sup></sup></font></font><font style="color: rgb(128,128,128);"><font style="color: rgb(0,128,0);"><sup>)<sup>2</sup>/(2𝜎<sup>2</sup>)</sup>)</font></font> \]
- <strong>𝜽</strong>ˆ<sub>𝑀𝐿𝐸</sub> = 𝑎𝑟𝑔𝑚𝑎𝑥<sub><strong>𝜽</strong></sub> 𝛴<sub>1≤𝑖≤𝑛</sub>\[ <font style="color: rgb(128,128,128);"><font style="color: rgb(128,0,0);">0 <font style="color: rgb(51,51,51);">\]</font></font> - <font style="color: rgb(51,51,51);">𝛴<sub>1≤𝑖≤𝑛</sub>\[</font> <font style="color: rgb(255,102,0);">𝑙𝑜𝑔(𝜎)</font> <font style="color: rgb(51,51,51);">\] </font>- <font style="color: rgb(51,51,51);">𝛴<sub>1≤𝑖≤𝑛</sub>\[<font style="color: rgb(128,128,0);">(1/2)·</font></font><font style="color: rgb(128,128,0);">𝑙𝑜𝑔(2𝜋)</font><font style="color: rgb(51,51,51);">\]</font> + <font style="color: rgb(51,51,51);">𝛴<sub>1≤𝑖≤𝑛</sub>\[<font style="color: rgb(0,128,0);"> -(𝑦<sup>(𝑖)</sup></font><font style="color: rgb(0,128,0);">-<font style="color: rgb(0,128,0);">𝑦̂</font><sup>(𝑖)</sup>)<sup>2</sup>/(2𝜎<sup>2</sup>) </font></font><font style="color: rgb(0,128,0);">𝑙𝑜𝑔(𝑒)</font></font> \]
- <strong>𝜽</strong>ˆ<sub>𝑀𝐿𝐸</sub> = 𝑎𝑟𝑔𝑚𝑎𝑥<sub><strong>𝜽</strong></sub> -<font style="color: rgb(255,102,0);">𝑛·𝑙𝑜𝑔(𝜎)</font> - <font style="color: rgb(128,128,0);">(𝑛/2)·𝑙𝑜𝑔(2𝜋)</font> <font style="color: rgb(0,128,0);">-</font> 𝛴<sub>1≤𝑖≤𝑛</sub>\[ <font style="color: rgb(0,128,0);">(<font style="color: rgb(0,128,0);">𝑦<sup>(𝑖)</sup></font><font style="color: rgb(0,128,0);">-𝑦̂<sup>(𝑖)</sup></font></font><font style="color: rgb(0,128,0);">)<sup>2</sup>/ (2𝜎²)</font> \]
- <strong>𝜽</strong>ˆ<sub>𝑀𝐿𝐸</sub> = 𝑎𝑟𝑔𝑚𝑎𝑥<sub><strong>𝜽</strong></sub> <font style="color: rgb(0,128,0);">-</font>𝛴<sub>1≤𝑖≤𝑛</sub>\[ <font style="color: rgb(0,128,0);">(<font style="color: rgb(0,128,0);">𝑦<sup>(𝑖)</sup></font><font style="color: rgb(0,128,0);">-𝑦̂<sup>(𝑖)</sup></font></font><font style="color: rgb(0,128,0);">)<sup>2</sup></font><font style="color: rgb(0,128,0);"> / (2𝜎²)</font> \]
- <strong>𝜽</strong>ˆ<sub>𝑀𝐿𝐸</sub> = 𝑎𝑟𝑔𝑚𝑎𝑥<sub><strong>𝜽</strong></sub> <font style="color: rgb(0,128,0);">-</font>𝛴<sub>1≤𝑖≤𝑛</sub>\[ <font style="color: rgb(0,128,0);">(𝑦<sup>(𝑖)</sup>-𝑦̂<sup>(𝑖)</sup></font><font style="color: rgb(0,128,0);">)<sup>2</sup></font> \] <font style="color: rgb(128,128,128);">\# 2𝜎² is a constant</font>

Again the 𝐿𝑆𝐸 estimator is defined as:
- <strong>𝜽</strong>ˆ<sub>𝐿𝑆𝐸</sub> = 𝑎𝑟𝑔<font style="color: rgb(255,0,0);">𝑚𝑖𝑛</font><sub><strong>𝜽</strong></sub> (1/𝑛) 𝛴<sub>1≤𝑖≤𝑛</sub>\[ (𝑦<sup>(𝑖)</sup>-𝑦̂<sup>(𝑖)</sup>)<sup>2</sup> \]
- <strong>𝜽</strong>ˆ<sub>𝐿𝑆𝐸</sub> = 𝑎𝑟𝑔<font style="color: rgb(255,0,0);">𝑚𝑖𝑛</font><sub><strong>𝜽</strong></sub> 𝛴<sub>1≤𝑖≤𝑛</sub>\[ (𝑦<sup>(𝑖)</sup>-𝑦̂<sup>(𝑖)</sup>)<sup>2</sup> \]

therefore:
- <strong>𝜽</strong>ˆ<sub>𝑀𝐿𝐸</sub><strong> = <strong>𝜽</strong>ˆ<sub>𝐿𝑆𝐸</sub></strong>
