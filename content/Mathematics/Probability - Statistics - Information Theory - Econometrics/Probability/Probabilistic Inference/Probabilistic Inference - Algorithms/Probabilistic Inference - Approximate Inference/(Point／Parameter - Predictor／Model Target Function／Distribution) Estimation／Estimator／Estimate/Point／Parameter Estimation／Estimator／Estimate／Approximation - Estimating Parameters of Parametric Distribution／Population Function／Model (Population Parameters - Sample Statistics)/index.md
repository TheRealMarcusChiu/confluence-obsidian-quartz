---
title: "Point／Parameter Estimation／Estimator／Estimate／Approximation - Estimating Parameters of Parametric Distribution／Population Function／Model (Population Parameters - Sample Statistics)"
created: 2021-09-13T05:27:50.634-05:00
modified: 2021-10-17T03:57:43.716-05:00
parent: "[[(Point／Parameter - Predictor／Model Target Function／Distribution) Estimation／Estimator／Estimate]]"
children:
  - "[[Bayesian Point Estimation]]"
  - "[[Bootstrap／Bootstrapping (Statistics)]]"
  - "[[Expectation Maximization (EM)]]"
  - "[[Gradient Descent／Ascent Algorithms - The Method of Steepest Descent／Ascent Algorithms]]"
  - "[[Instrumental Variables (IV) Estimator]]"
  - "[[Jackknife]]"
  - "[[Lagrange's Formula]]"
  - "[[Maximum Likelihood Estimation (MLE)]]"
  - "[[Maximum a Posteriori (MAP)]]"
  - "[[Method of Moments Estimation (MOME)]]"
  - "[[Point／Parameter Estimation／Estimator／Estimate／Approximation - Comparisons]]"
---
````excerpt
- <strong>population parameter</strong> (denoted as 𝜃) has unknown value, thus is the parameter being estimated
- <strong>point-estimate</strong> (denoted as 𝜃ˆ) is an estimate of the true unknown parameter 𝜃
- <strong>point-estimator</strong> - is a function that outputs a single point-estimate when given data as input
	- a good point-estimator is one that outputs a 𝜃ˆ close to true 𝜃
- <strong>point-estimation</strong> is the attempt to provide a single "best" point-estimate
````
^excerpt

###### Point/Parameter Estimation/Estimator/Estimate/Approximation - Estimating Parameters of Parametric Distribution/Population Function/Model
- given a [parametric probability distribution function](http://confluence.marcuschiu.com/display/NOT/Univariate+Probability+Distribution) and [[Empirical／Sample Distribution|sample distribution]]/data, estimate the function/model's <strong>population parameters</strong> that best reflects the sample data
- involves the use of sample distribution to calculate a single value (i.e. <strong>point-estimate</strong>/<strong>sample-statistic</strong>) which is to serve as a "best estimate" of an unknown [[Statistics - Terminology|population parameter]] (e.g. the [[Sample Mean|sample mean 𝑋̅]] is a point/parameter estimate of [[Arithmetic Mean - Average - Location - Expected Value - Expectation Operator|population mean 𝜇]])
- point estimation is similar to type of [[(Point／Parameter - Predictor／Model Target Function／Distribution) Estimation／Estimator／Estimate|function/model approximation]], BUT where the target population parametric function is KNOWN but its parameters are UNKNOWN
- point estimation is from a broader class of [[(Point／Parameter - Predictor／Model Target Function／Distribution) Estimation／Estimator／Estimate|(Point/Parameter - Predictor/Model Target Function/Distribution) Estimation/Estimator/Estimate]]

# Population Parameters & Sample Statistics - Introduction

> [!expand]- Click here to expand...
> Data in the real world usually have a specific type of [[Probability Distributions|probability distribution]] that best describes its patterns (distributions include: [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|normal distribution]], [[Binomial Distribution|binomial distribution]], etc). Finding the best distribution is not the only task though. A probability distribution are usually parametric meaning it contains one or more scalar parameters that customizes the distribution (e.g. normal distribution contains 2 parameters: mean and variance). There are an infinite amount of ways to initialize the parameter(s) of a SINGLE probability distribution, and in doing so each produces a different derivative of the distribution and can be used to accurately describe the patterns of data.
>
> Most of the time we already know the type of probability distribution the data conforms to. However, we don't know the value of the distribution's parameter(s), so we need to estimate its value(s).
> - the real valued parameters are called population parameters
> - the estimated value of parameters are called sample parameters or point estimates
>
> below shows diagram on what statistics is
>
> ![[Statistics - Terminology#^excerpt]]
> ###### Population/Distribution Parameter <font style="color: rgb(0,128,0);">𝜽 </font>and Sample Estimate <font style="color: rgb(128,0,0);">𝜽</font><font style="color: rgb(128,0,0);">ˆ </font>(Statistic)
> - <font style="color: rgb(0,128,0);">𝜽 - population parameter value (e.g. mean, variance, etc) - denotes the true unknown parameter value of the population</font>
> - <font style="color: rgb(128,0,0);">𝜽ˆ - sample estimator value - denotes an estimated value of the true unknown population parameter value</font>
>
> <font style="color: rgb(128,0,0);">estimate function 𝜽ˆ</font> = <font style="color: rgb(0,128,0);">population parameter</font> + <font style="color: rgb(0,0,255);">bias/unbiased</font> + <font style="color: rgb(255,0,0);">standard error</font>
> - <font style="color: rgb(0,0,255);">bias/unbiased</font> - is the systematic deviation of the sample estimate (statistic) from the true population value
> - <font style="color: rgb(255,0,0);">standard error</font> - is the deviation due to chance
>
> we want our <font style="color: rgb(128,0,0);">estimator function 𝜽ˆ</font> to:
> - be <font style="color: rgb(0,0,255);">unbiased</font>: 𝐄(<font style="color: rgb(128,0,0);">𝜽ˆ</font>) = <font style="color: rgb(0,128,0);">𝜽</font>
> - have small <font style="color: rgb(255,0,0);">standard</font><font style="color: rgb(255,0,0);"> error</font>: 𝑆𝑡𝑑(<font style="color: rgb(128,0,0);">𝜽</font><font style="color: rgb(128,0,0);">ˆ</font>) → 0
>
> ###### List of Some Sample Statistics
> - [[Sample Mean]]
> - [[Sample Proportion]]
> - [[Sample Variance - Sample Standard Deviation - Adjusted Sample Variance - Adjusted Sample Standard Deviation]]
>
> other parameters include: 𝛼, 𝛽, 𝜆, etc for: Gamma(𝛼, 𝜆), Exponential(𝜆), Poisson(𝜆), Beta(𝛼, <em>𝛽</em>)
# Point Estimators (Methods in Estimating Parameters)

algorithms for fitting points exactly:
- [[Lagrange's Formula]]

frequentist techniques (often used when training/sample data is complete, does not perform well when data is incomplete):
- [[Maximum Likelihood Estimation (MLE)]] - maximizes the [[Likelihood Function - Log-Likelihood Function - Score Function|likelihood distribution/function]]:
	- 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝜃</sub>𝐏(𝑥<sub>1</sub>, ..., 𝑥<sub>𝑛</sub>|𝜃) = 𝛱<sub>1≤𝑖≤𝑛</sub>𝐏(𝑥<sub>𝑖</sub>|𝜃)

bayesian techniques (often used when training/sample data is complete, does not perform well when data is incomplete):
- [[Bayesian Point Estimation]] - uses [[Prior Probability Distribution - Posterior Probability Distribution|posterior distribution]]: 𝐏(𝜃|𝑥<sub>1</sub>, ..., 𝑥<sub>𝑛</sub>) ∝ 𝐏(𝑥<sub>1</sub>, ..., 𝑥<sub>𝑛</sub>|𝜃)𝐏(𝜃)
	- [[Maximum a Posteriori (MAP)]] - maximizes the [[Prior Probability Distribution - Posterior Probability Distribution|posterior distribution/function]]:
		- 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝜃</sub>𝐏(𝑥<sub>1</sub>, ..., 𝑥<sub>𝑛</sub>|𝜃)𝐏(𝜃) = <strong>\[</strong>𝛱<sub>1≤𝑖≤𝑛</sub>𝐏(𝑥<sub>𝑖</sub>|𝜃)<strong>\]</strong>\*𝐏(𝜃)

iterative techniques (often used when training/sample data is NOT complete):
- [[Expectation Maximization (EM)]]
	- does not require function to be differentiable
	- often converges fast during the first few steps but gets slower as it nears the local maxima
- [[Gradient Descent／Ascent Algorithms - The Method of Steepest Descent／Ascent Algorithms|Gradient Descent/Ascent Algorithms - The Method of Steepest Descent/Ascent Algorithms]]
	- requires function to be differentiable
	- often converge slow during the first few steps but is "anecdotally" faster than EM as it nears the local maxima
- Hybrid Approach
	- use EM for the first couple rounds then feed its solution into Gradient Descent/Ascent

resampling techniques:
- [[Bootstrap／Bootstrapping (Statistics)|Bootstrap/Bootstrapping (Statistics)]] - drawing randomly with replacement from a set of data points
- [[Jackknife]] - using subsets of available data
- Permutation Testing - a type of statistical significance test, exchanging labels on data points when performing significance tests

other techniques:
- [[Method of Moments Estimation (MOME)]] - to estimate 𝑑 parameters, solve the system of 𝑑 equations: 𝑚<sub>𝑖</sub> = 𝜇<sub>𝑖</sub>, 𝑖∊\[1,𝑑\]
- [[Method of Least Mean Squared／Squares Error／Estimation／Estimator (LMS／LSE／MMSE) - Sum of Square Errors／Residuals - Regression Variance／Standard-Deviation／Error of Regression／Residuals／Estimate - Root Mean Square Deviation／Error (RMSD／E - MSE)|Method of Least Squared/Squares Error/Estimation/Estimator (LSE)]] - is about estimating [[Statistics - Terminology|parameters]] 𝜃 of [[Objective Function／Criterion - Cost／Loss／Error Function - Expected Cost／Loss／Error|cost-function]] 𝑓<sub>𝜃</sub>(𝑥) by minimizing the squared error between observed data and their predicted values
- [[Instrumental Variables (IV) Estimator|Method of Instrumental Variables (IV) Estimator]] - uses an instrumental variable 𝑧 that allows the estimator to be [[Estimator - Inductive Properties (Biasedness／Unbiasedness - Consistency／Consistent - Statistic Efficiency)|consistent]] even with the existence of [[Endogenous／Endogenic Variable - Exogenous／Exogenic Variable - Endogenous vs Exogeneity|endogenous variables]] that break the [[Gauss-Markov Assumptions - OLS Assumptions]] which is necessary for [[Ordinary Least Squares (OLS)|Ordinary Least Squares (OLS) Estimates]]
- [Minimum Message Length (MML)](https://en.wikipedia.org/wiki/Minimum_Message_Length)<font style="color: rgb(220,217,212);"><font style="color: rgb(51,51,51);"> - <font style="color: rgb(32,33,34);">is a Bayesian information-theoretic method for statistical model comparison and selection</font></font></font>

# Point Estimators Comparisons
```dataview
LIST
FROM ""
WHERE file.folder = [[Point／Parameter Estimation／Estimator／Estimate／Approximation - Comparisons]].file.folder + "/" + [[Point／Parameter Estimation／Estimator／Estimate／Approximation - Comparisons]].file.name
```
# <font style="color: rgb(220,217,212);"><font style="color: rgb(51,51,51);"><font style="color: rgb(32,33,34);"><font style="color: rgb(51,51,51);">Point Estimator's Properties</font></font></font></font>
- <font style="color: rgb(220,217,212);"><font style="color: rgb(51,51,51);"><font style="color: rgb(32,33,34);"><font style="color: rgb(51,51,51);">see properties section of [[(Point／Parameter - Predictor／Model Target Function／Distribution) Estimation／Estimator／Estimate|(Point/Parameter - Predictor/Model Target Function/Distribution) Estimation/Estimator/Estimate]]</font></font></font></font>
