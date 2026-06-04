---
title: "Feasible Generalized Least Squares (fGLS) - For Correcting Serially／Auto Correlated Errors"
created: 2021-09-13T05:27:48.153-05:00
modified: 2021-12-20T15:06:08.416-06:00
parent: "[[Generalized Least Squares (GLS)]]"
children: []
---
###### Feasible Generalized Least Squares (fGLS) - For Correcting Serially/Auto Correlated Errors
- a type of [[Generalized Least Squares (GLS)]] method used for correcting [[Autocorrelation - Autocovariance - Auto／Serial Correlation／Covariance Function|serially/auto correlated]] errors
- fGLS is biased but is asymptotically unbiased (i.e. consistent) when we have a large sample size and if we assume we have STRICT exogeneity that 𝐄\[𝑒<sub>𝑡</sub>|𝑥<sub>𝑡</sub>,𝑥<sub>𝑡-1</sub>,𝑥<sub>𝑡+1</sub>\] = 0
- as sample size → ∞, the [[Standard Error (SE) - Estimated Standard Error (SEˆ)|standard error]] of fGLS's [[Sampling Distribution - Finite-Sample Distribution|sampling distribution]] is less than [[Standard Error (SE) - Estimated Standard Error (SEˆ)|standard error]] of [[Ordinary Least Squares (OLS)|OLS]]'s [[Sampling Distribution - Finite-Sample Distribution|sampling distribution]]

# fGLS For Correcting Serially/Auto Correlated Errors - Resources
- [Ben Lambert's Video Lectures](https://www.youtube.com/watch?v=YuVpwN_KOWk&list=PLwJRxp3blEvZyQBTTOMFRP_TDaSdly3gU&index=134&frags=wn&ab_channel=BenLambert)

# fGLS For Correcting Serially/Auto Correlated Errors - Process

assume we have:
- a KNOWN and CORRECT regression model:
	- 𝑦<sub>𝑡</sub> = 𝜃<sub>0</sub>ˆ + 𝜃<sub>1</sub>ˆ𝑥<sub>𝑡</sub> + 𝑒<sub>𝑡</sub>
- 𝑒<sub>𝑡</sub> is a KNOWN AR(1) [[Stochastic／Random／Markov Models／Process|random process]] model with UNKNOWN coefficient 𝛿<sub>0</sub>:
	- 𝑒<sub>𝑡</sub> = 𝛿<sub>0</sub>𝑒<sub>𝑡-1</sub> + 𝜀<sub>𝑡</sub>

![[Feasible Generalized Least Squares (fGLS) - For Correcting Serially／Auto Correlated Errors/fgls-correcting-serially-correlated-errors.png|500]]

The [[Autocorrelation - Autocovariance - Auto／Serial Correlation／Covariance Function|serially correlated]] errors property causes the [[Ordinary Least Squares (OLS)|OLS]] estimator to no longer be Best and hence no longer [[LLS - Comparisons (OLS vs WLS vs GLS) - Best Linear Unbiased Estimator (BLUE) - Minimum-Variance Unbiased Estimator (MVUE)|BLUE]]

To estimate the coefficient 𝛿<sub>0</sub> we do the following steps:
1. get a sequence of [[Method of Least Mean Squared／Squares Error／Estimation／Estimator (LMS／LSE／MMSE) - Sum of Square Errors／Residuals - Regression Variance／Standard-Deviation／Error of Regression／Residuals／Estimate - Root Mean Square Deviation／Error (RMSD／E - MSE)|residuals/errors]] <font style="color: rgb(255,0,0);">𝑒<sub>𝑡</sub></font> by running the given regression model over the training examples:
	1. 𝑦<sub>𝑡</sub> = 𝜃<sub>0</sub>ˆ + 𝜃<sub>1</sub>ˆ𝑥<sub>𝑡</sub> + <font style="color: rgb(255,0,0);">𝑒<sub>𝑡</sub></font>
2. then use the residuals {𝑒<sub>0</sub>, 𝑒<sub>1</sub>, ..., 𝑒<sub>𝑇</sub>} and run a regression over the random process model:
	1. 𝑒<sub>𝑡</sub> = 𝛿<sub>0</sub>𝑒<sub>𝑡-1</sub> + 𝜀<sub>𝑡</sub>
3. this gives us an estimate 𝛿<sub>0</sub>ˆ of 𝛿<sub>0</sub>:

next, we take 𝛿<sub>0</sub>ˆ and modify the regression model:
- 𝑦<sub>𝑡</sub> - 𝛿<sub>0</sub>ˆ𝑦<sub>𝑡-1</sub> = (𝜃<sub>0</sub>ˆ + 𝜃<sub>1</sub>ˆ𝑥<sub>𝑡</sub> + 𝑒<sub>𝑡</sub>) - 𝛿<sub>0</sub>ˆ(𝜃<sub>0</sub>ˆ + 𝜃<sub>1</sub>ˆ𝑥<sub>𝑡-1</sub> + 𝑒<sub>𝑡-1</sub>) <font style="color: rgb(128,128,128);">\# where 𝑦<sub>𝑡</sub> = 𝜃<sub>0</sub>ˆ + 𝜃<sub>1</sub>ˆ𝑥<sub>𝑡</sub> + 𝑒<sub>𝑡</sub></font>
- 𝑦<sub>𝑡</sub> - 𝛿<sub>0</sub>ˆ𝑦<sub>𝑡-1</sub> = 𝜃<sub>0</sub>ˆ(1 - 𝛿<sub>0</sub>ˆ) + 𝜃<sub>1</sub>ˆ(𝑥<sub>𝑡</sub> - 𝛿<sub>0</sub>ˆ𝑥<sub>𝑡-1</sub>) + (<font style="color: rgb(128,0,0);">𝑒<sub>𝑡</sub></font> - <font style="color: rgb(0,128,0);">𝛿<sub>0</sub>ˆ𝑒<sub>𝑡-1</sub></font>)
- 𝑦<sub>𝑡</sub> - 𝛿<sub>0</sub>ˆ𝑦<sub>𝑡-1</sub> = 𝜃<sub>0</sub>ˆ(1 - 𝛿<sub>0</sub>ˆ) + 𝜃<sub>1</sub>ˆ(𝑥<sub>𝑡</sub> - 𝛿<sub>0</sub>ˆ𝑥<sub>𝑡-1</sub>) + (𝛿<sub>0</sub>ˆ<font style="color: rgb(128,0,0);">𝑒<sub>𝑡-1</sub> + 𝜀</font><sub><font style="color: rgb(128,0,0);">𝑡</font></sub>- <font style="color: rgb(0,128,0);">𝛿<sub>0</sub>ˆ𝑒<sub>𝑡-1</sub></font>) <font style="color: rgb(128,128,128);">\# where 𝑒<sub>𝑡</sub> = 𝛿<sub>0</sub>𝑒<sub>𝑡-1</sub> + 𝜀<sub>𝑡</sub></font>
- 𝑦<sub>𝑡</sub> - 𝛿<sub>0</sub>ˆ𝑦<sub>𝑡-1</sub> = 𝜃<sub>0</sub>ˆ(1 - 𝛿<sub>0</sub>ˆ) + 𝜃<sub>1</sub>ˆ(𝑥<sub>𝑡</sub> - 𝛿<sub>0</sub>ˆ𝑥<sub>𝑡-1</sub>) +<font style="color: rgb(128,0,0);"> 𝜀</font><sub><font style="color: rgb(128,0,0);">𝑡</font></sub>

now the residuals of the new regression model are not [[Autocorrelation - Autocovariance - Auto／Serial Correlation／Covariance Function|serially/auto correlated]]!
