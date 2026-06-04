---
title: "Feasible Generalized Least Squares (fGLS) - For Correcting Heteroscedasticity"
created: 2021-09-13T05:27:47.755-05:00
modified: 2021-12-20T15:05:26.919-06:00
parent: "[[Generalized Least Squares (GLS)]]"
children: []
---
###### Feasible Generalized Least Squares (fGLS) - For Correcting Heteroscedasticity
- a type of [[Generalized Least Squares (GLS)]]
- is [[Weighted Least Squares (WLS)]] in practice
- fGLS is biased but is asymptotically unbiased when we have a large sample size
- as sample size → ∞, the [[Standard Error (SE) - Estimated Standard Error (SEˆ)|standard error]] of fGLS's [[Sampling Distribution - Finite-Sample Distribution|sample distribution]] is less than the [[Standard Error (SE) - Estimated Standard Error (SEˆ)|standard error]] of [[Ordinary Least Squares (OLS)|OLS]]'s [[Sampling Distribution - Finite-Sample Distribution|sample distribution]]

# fGLS For Correcting Heteroscedasticity - Resources
- [Ben Lambert's Video Lectures](https://www.youtube.com/watch?v=XJCMbuGv4v4&list=PLwJRxp3blEvZyQBTTOMFRP_TDaSdly3gU&index=131&frags=wn&ab_channel=BenLambert)

# fGLS For Correcting Heteroscedasticity - Process

assume we have:
- a KNOWN and CORRECT regression model: 𝑦 = 𝜃<sub>0</sub>ˆ + 𝜃<sub>1</sub>ˆ𝑥<sub>1</sub> + ... + 𝜃<sub>𝑘</sub>ˆ𝑥<sub>𝑘</sub>
- a [[Heteroscedasticity - Homoscedasticity|heteroscedastic]] population with UNKNOWN conditional model 𝑉𝑎𝑟(𝑒|𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) = ?

![[Feasible Generalized Least Squares (fGLS) - For Correcting Heteroscedasticity/fgls.png|301]]

The heteroscedastic property makes [[Ordinary Least Squares (OLS)|OLS]] estimator no longer Best hence no longer [[LLS - Comparisons (OLS vs WLS vs GLS) - Best Linear Unbiased Estimator (BLUE) - Minimum-Variance Unbiased Estimator (MVUE)|BLUE]]. Hence, we need to weight each residual based on the conditional variance 𝑉𝑎𝑟(𝑒|𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) for [[Weighted Least Squares (WLS)|WLS]]

We need to estimate 𝑉𝑎𝑟(𝑒|𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) so we can determine the weight of each training example's error which can then be used in [[Weighted Least Squares (WLS)]]

How do we estimate 𝑉𝑎𝑟(𝑒|𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>)?

Well we know that 𝑉𝑎𝑟(𝑒|𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) = 𝑒<sup>2</sup> because:
- 𝑉𝑎𝑟(𝑒|𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) = 𝐄\[𝑒<sup>2</sup>|𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>\] - 𝐄\[𝑒|𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>\]<sup>2</sup><font style="color: rgb(128,128,128);">\# from </font>[[Raw Moments - Moments About the Origin／Zero - Central／Mean Moments - Moments About The Mean - (Zeroth／First／Second／Third／Fourth／kth／nth) -  of a Probability Density Function|Second Central Moment]]
- 𝑉𝑎𝑟(𝑒|𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) = 𝐄\[𝑒<sup>2</sup>|𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>\] <font style="color: rgb(128,128,128);">\# 𝐄\[𝑒|𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>\] = 0 because of </font>[[Gauss-Markov Assumptions - OLS Assumptions]]

Since variance is never negative, a linear model is not sufficient since negative values are allowed. However, an exponential model never outputs a negative value. So let us estimate 𝑒<sup>2</sup> with an exponential model:
- 𝑒<sup>2</sup>= 𝑒𝑥𝑝(𝛿<sub>0</sub> + 𝛿<sub>1</sub>𝑥<sub>1</sub> + ... + 𝛿<sub>𝑘</sub>𝑥<sub>𝑘</sub>)

since <font style="color: rgb(128,128,128);">𝑒̂<sup>2</sup> = 𝑒𝑥𝑝(𝛿<sub>0</sub> + 𝛿<sub>1</sub>𝑥<sub>1</sub> + ... + 𝛿<sub>𝑘</sub>𝑥<sub>𝑘</sub>)</font> is a bit more complicated to estimate values of {𝛿<sub>0</sub>, ..., 𝛿<sub>𝑘</sub>} with [[Maximum Likelihood Estimation (MLE)]] we modify the equation to:
- 𝑙𝑜𝑔(𝑒̂<sup>2</sup>) = 𝛿<sub>0</sub> + 𝛿<sub>1</sub>𝑥<sub>1</sub> + ... + 𝛿<sub>𝑘</sub>𝑥<sub>𝑘</sub>

To estimate the coefficients {𝛿<sub>0</sub>, ..., 𝛿<sub>𝑘</sub>} of the exponential model we do the following steps:
1. get a set of [[Method of Least Mean Squared／Squares Error／Estimation／Estimator (LMS／LSE／MMSE) - Sum of Square Errors／Residuals - Regression Variance／Standard-Deviation／Error of Regression／Residuals／Estimate - Root Mean Square Deviation／Error (RMSD／E - MSE)|residuals/errors]] <font style="color: rgb(255,0,0);">𝑒̂</font> by running the given regression model over the training examples:
	1. 𝑦 = 𝜃<sub>0</sub>ˆ + 𝜃<sub>1</sub>ˆ𝑥<sub>1</sub> + ... + 𝜃<sub>𝑘</sub>ˆ𝑥<sub>𝑘</sub> + <font style="color: rgb(255,0,0);">𝑒̂</font>
2. with the residuals and its corresponding training examples, we run a regression on the log squared residuals 𝑙𝑜𝑔(𝑒̂<sup>2</sup>) over the dependents variables {𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>}
	1. 𝑙𝑜𝑔(𝑒̂<sup>2</sup>) = 𝛿<sub>0</sub> + 𝛿<sub>1</sub>𝑥<sub>1</sub> + ... + 𝛿<sub>𝑘</sub>𝑥<sub>𝑘</sub>
3. this gives us the fitted values of {𝛿<sub>0</sub>, ..., 𝛿<sub>𝑘</sub>}:
	1. 𝑔̂ = 𝛿<sub>0</sub>ˆ + 𝛿<sub>1</sub>ˆ𝑥<sub>1</sub> + ... + 𝛿<sub>𝑘</sub>ˆ𝑥<sub>𝑘</sub>

𝑔̂ is the estimated 𝑙𝑜𝑔 of the conditional variance 𝑉𝑎𝑟(𝑒|𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>)

next, we take the exponent of 𝑔̂:
- ℎˆ = 𝑒𝑥𝑝(𝑔̂) = 𝑒𝑥𝑝(𝑙𝑜𝑔(𝑒̂<sup>2</sup>)) = 𝑒̂<sup>2</sup>= 𝑒𝑥𝑝(𝛿<sub>0</sub> + 𝛿<sub>1</sub>𝑥<sub>1</sub> + ... + 𝛿<sub>𝑘</sub>𝑥<sub>𝑘</sub>)

ℎˆ is the estimated conditional variance 𝑉𝑎𝑟(𝑒|𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>)

next we divide the regression model by √(ℎ<sub>𝑖</sub>ˆ) to get new regression model:
- 𝑦<sub>𝑖</sub> = 𝜃<sub>0</sub>ˆ + 𝜃<sub>1</sub>ˆ𝑥<sub>𝑖1</sub> + ... + 𝜃<sub>𝑘</sub>ˆ𝑥<sub>𝑖𝑘</sub> + <font style="color: rgb(255,0,0);">𝑒̂</font>
- 𝑦<sub>𝑖</sub>/√(ℎ<sub>𝑖</sub>ˆ) = 𝜃<sub>0</sub>ˆ/√(ℎ<sub>𝑖</sub>ˆ) + 𝜃<sub>1</sub>ˆ𝑥<sub>𝑖1</sub>/√(ℎ<sub>𝑖</sub>ˆ) + ... + 𝜃<sub>𝑘</sub>ˆ𝑥<sub>𝑖𝑘</sub>/√(ℎ<sub>𝑖</sub>ˆ) + <font style="color: rgb(255,0,0);">𝑒̂</font>/√(ℎ<sub>𝑖</sub>ˆ)

Why did we divide by √(ℎ<sub>𝑖</sub>ˆ)? because:
- 𝑉𝑎𝑟(<font style="color: rgb(255,0,0);">𝑒̂</font>|𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) = 𝑒𝑥𝑝(𝛿<sub>0</sub> + 𝛿<sub>1</sub>𝑥<sub>1</sub> + ... + 𝛿<sub>𝑘</sub>𝑥<sub>𝑘</sub>) <font style="color: rgb(128,128,128);">\# established above</font>

<font style="color: rgb(255,0,0);"><font style="color: rgb(51,51,51);">next, we calculate the residual variance of the new regression model:</font></font>
- <font style="color: rgb(255,0,0);"><font style="color: rgb(51,51,51);">𝑉𝑎𝑟(</font>𝑒̂</font>/√(ℎ<sub>𝑖</sub>ˆ)|𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) = 1/𝑒𝑥𝑝(𝛿<sub>0</sub> + 𝛿<sub>1</sub>𝑥<sub>1</sub> + ... + 𝛿<sub>𝑘</sub>𝑥<sub>𝑘</sub>) · 𝑉𝑎𝑟(<font style="color: rgb(255,0,0);">𝑒̂</font>|𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>)
- <font style="color: rgb(255,0,0);"><font style="color: rgb(51,51,51);">𝑉𝑎𝑟(</font>𝑒̂</font>/√(ℎ<sub>𝑖</sub>ˆ)|𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) = 𝑐𝑜𝑛𝑠𝑡𝑎𝑛𝑡 <font style="color: rgb(128,128,128);">\# 𝑉𝑎𝑟(𝑒̂|𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) = 𝑒𝑥𝑝(𝛿<sub>0</sub> + 𝛿<sub>1</sub>𝑥<sub>1</sub> + ... + 𝛿<sub>𝑘</sub>𝑥<sub>𝑘</sub>)</font>

now the residuals of the new regression model have constant variance with respect to the regressors {𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>} this satisfies [[Heteroscedasticity - Homoscedasticity|homoscedasticity]]
