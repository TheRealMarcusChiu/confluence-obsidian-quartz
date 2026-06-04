---
title: "Multivariate／Multiple Linear Regression Models"
created: 2020-04-23T18:04:04.713-05:00
modified: 2023-09-21T14:56:42.046-05:00
parent: "[[Linear Regression (LR) Models]]"
children:
  - "[[Multiple LR - Bayesian Model - Parameter Estimates - Expectation／Variance Conditional on {𝑥₁, ..., 𝑥ₙ}]]"
  - "[[Multiple LR - Bayesian Model - Parameter Estimates - Testing]]"
  - "[[Multiple LR - Collinearity／Colinear Correlation Among the Predictor Variables]]"
  - "[[Multiple LR - Confidence Interval & Prediction Interval]]"
  - "[[Multiple LR - Estimating Regression Variance 𝜎²]]"
  - "[[Multiple LR - Leverage Score ／ Influence - Studentized Residuals]]"
  - "[[Multiple LR - Mediation Effects & Sobel Test]]"
  - "[[Multiple LR - Moderations & Interaction Terms]]"
  - "[[Multiple LR - Parameter Estimates - Expectation／Variance Conditional on {𝑥₁, ..., 𝑥ₙ}]]"
  - "[[Multiple LR - Parameter Estimates - Testing]]"
---
<strong>Multivariate Linear Regression</strong> model assumes that the conditional expectation is a linear function of parameters/regression-slopes {𝜃<sub>0</sub>, ..., 𝜃<sub>𝑘</sub>}:
- 𝑦̂ = 𝑓(𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) = 𝐄{𝑌|𝑋<sub>1</sub>=𝑥<sub>1</sub>, ..., 𝑋<sub>𝑘</sub>=𝑥<sub>𝑘</sub>} = 𝜃<sub>0</sub>+ 𝜃<sub>1</sub>𝑥<sub>1</sub> + ... + 𝜃<sub>𝑘</sub>𝑥<sub>𝑘</sub>

where:
- 𝜃<sub>0</sub> = 𝑓(𝑋<sub>1</sub>=0, ..., 𝑋<sub>𝑘</sub>=0) <font style="color: rgb(128,128,128);">\# 𝑦̂ intercept</font>
- 𝜃<sub>1</sub> = 𝛿𝑦̂/𝛿𝑥<sub>1</sub> <font style="color: rgb(128,128,128);">\# slope along 𝑥<sub>1</sub> axis</font>
- ...
- 𝜃<sub>𝑘</sub> = 𝛿𝑦̂/𝛿𝑥<sub>𝑘</sub> <font style="color: rgb(128,128,128);">\# slope along <font style="color: rgb(128,128,128);">𝑥<sub>𝑘</sub><font style="color: rgb(128,128,128);"> axis</font></font></font>

# Estimating {𝜃<sub>0</sub>, 𝜃<sub>1</sub>, ..., 𝜃<sub>𝑘</sub>} ([[Ordinary Least Squares (OLS) Regression|Ordinary Least Squares Method]])

> [!expand]- Click here to expand...
> given training/sample data 𝐷 = {(𝑥<sub>11</sub>, ..., 𝑥<sub>1𝑘</sub>, 𝑦<sub>1</sub>), ..., (𝑥<sub>𝑛1</sub>, ..., 𝑥<sub>𝑛𝑘</sub>, 𝑦<sub>𝑛</sub>)} let us estimate the parameters/regression-slopes 𝜽 = {𝜃<sub>0</sub>, 𝜃<sub>1</sub>, ..., 𝜃<sub>𝑘</sub>} by [[Method of Least Mean Squared／Squares Error／Estimation／Estimator (LMS／LSE／MMSE) - Sum of Square Errors／Residuals - Regression Variance／Standard-Deviation／Error of Regression／Residuals／Estimate - Root Mean Square Deviation／Error (RMSD／E - MSE)|method of least squares]]
>
> first, we define this in matrix form
>
> > [!indent]
> ![[Multivariate／Multiple Linear Regression Models/multivariate-linear-regression-matrix-form.png|301]]
> > 𝐄(𝒀) = 𝑿𝜽
>
> our goal is to estimate 𝜽 with a vector of <em><strong>sample regression slopes</strong></em> (𝜽ˆ):
>
> > [!indent]
> ![[Multivariate／Multiple Linear Regression Models/multivariate-linear-regression-regression-slope-estimates.png|301]]
>
> the fitted values will then be computed as:
>
> > [!indent]
> ![[Multivariate／Multiple Linear Regression Models/multivariate-linear-regression-fitted-values.png|301]]
>
> Thus, the <em>sum squared error</em> (𝑠𝑠𝑒) of 𝑓(𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) wrt 𝜽ˆ given 𝐷 = {(𝑥<sub>11</sub>, ..., 𝑥<sub>1𝑘</sub>, 𝑦<sub>1</sub>), ..., (𝑥<sub>𝑛1</sub>, ..., 𝑥<sub>𝑛𝑘</sub>, 𝑦<sub>𝑛</sub>)} is defined below:
> - 𝑠𝑠𝑒(𝜽ˆ|𝐷) = 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑦<sub>𝑖</sub> - 𝑦̂<sub>𝑖</sub>\]<sup>2</sup>
> - 𝑠𝑠𝑒(𝜽ˆ|𝐷) = 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑦<sub>𝑖</sub> - 𝑓(𝑥<sub>𝑖1</sub>, ..., 𝑥<sub>𝑖𝑘</sub>)\]<sup>2</sup>
> - 𝑠𝑠𝑒(𝜽ˆ|𝐷) = (𝒚 - 𝒚̂)<sup>𝑇</sup>(𝒚 - 𝒚̂)
> - 𝑠𝑠𝑒(𝜽ˆ|𝐷) = (𝒚 - 𝑿𝜽ˆ)<sup>𝑇</sup>(𝒚 - 𝑿𝜽ˆ)
> - 𝑠𝑠𝑒(𝜽ˆ|𝐷) = (𝒚<sup>𝑇</sup> - 𝒃<sup>𝑇</sup>𝑿<sup>𝑇</sup>)(𝒚 - 𝑿𝜽ˆ)
> - 𝑠𝑠𝑒(𝜽ˆ|𝐷) = 𝜽ˆ<sup>𝑇</sup>𝑿<sup>𝑇</sup>𝑿𝜽ˆ + 𝒚<sup>𝑇</sup>𝒚 - 𝜽ˆ<sup>𝑇</sup>𝑿<sup>𝑇</sup>𝒚 - 𝒚<sup>𝑇</sup>𝑿𝜽ˆ
> - 𝑠𝑠𝑒(𝜽ˆ|𝐷) = 𝜽ˆ<sup>𝑇</sup>𝑿<sup>𝑇</sup>𝑿𝜽ˆ + 𝒚<sup>𝑇</sup>𝒚 - 2𝒚<sup>𝑇</sup>𝑿𝜽ˆ <font style="color: rgb(128,128,128);">\# 𝜽ˆ<sup>𝑇</sup>𝑿<sup>𝑇</sup>𝒚 = 𝒚<sup>𝑇</sup>𝑿𝜽ˆ, since 𝜽ˆ<font style="color: rgb(128,128,128);"> and <font style="color: rgb(128,128,128);">𝒚 are vectors <font style="color: rgb(128,128,128);">𝜽ˆ</font><sup>𝑇</sup><font style="color: rgb(128,128,128);">𝑿</font><sup>𝑇</sup><font style="color: rgb(128,128,128);">𝒚 and <font style="color: rgb(128,128,128);">𝒚</font><sup>𝑇</sup><font style="color: rgb(128,128,128);">𝑿𝜽ˆ are scalars</font></font></font></font></font>
>
> the minimum of 𝑠𝑠𝑒(𝜽ˆ|𝐷) is:
> - 𝜽ˆ = (𝑿<sup>𝑇</sup>𝑿)<sup>-1</sup>𝑿<sup>𝑇</sup>𝒚
>
> as we can see from this formula, all the estimated slopes 𝜽ˆ = {𝜃ˆ<sub>1</sub>, ..., 𝜃ˆ<sub>𝑘</sub>} are:
> - linear functions of observed responses (𝑦<sub>1</sub>, ..., 𝑦<sub>𝑛</sub>)
> - unbiased estimates of the regression slopes 𝜽 = {𝜃<sub>0</sub>, 𝜃<sub>1</sub>, ..., 𝜃<sub>𝑘</sub>}:
> > [!expand]- proof
> > - 𝐄(𝜽ˆ) = 𝐄((𝑿<sup>𝑇</sup>𝑿)<sup>-1</sup>𝑿<sup>𝑇</sup>𝒚)
> > - 𝐄(𝜽ˆ) = (𝑿<sup>𝑇</sup>𝑿)<sup>-1</sup>𝑿<sup>𝑇</sup>𝐄(𝒚)
> > - 𝐄(𝜽ˆ) = (𝑿<sup>𝑇</sup>𝑿)<sup>-1</sup>𝑿<sup>𝑇</sup>𝑿𝜽
> > - 𝐄(𝜽ˆ) = 𝐼𝜽
> > - 𝐄(𝜽ˆ) = 𝜽
> - [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|normally distributed]] if the response variable 𝑌 is normal
>
> this is a multivariate analog of 𝜃ˆ<sub>1</sub> = 𝑆<sub>𝑥𝑦</sub>/𝑆<sub>𝑥𝑥</sub> that we derived from the [[Univariate／Single-Variable／Simple Linear Regression Models|univariate linear regression]]
# Analysis of Variance (ANOVA) - Prediction - Further Inference
###### Standard Regression Assumptions

> [!expand]- Click here to expand...
> ![[LR - Standard Regression Assumptions#^excerpt]]
###### Sum of Squares - Degrees of Freedom

> [!expand]- Click here to expand...
> the following 2 formulas are the same as in [[Univariate／Single-Variable／Simple Linear Regression Models|Univariate/Single-Variable/Simple Linear Regression Models]]:
> - 𝑆𝑆<sub>𝑇𝑂𝑇</sub> = 𝑆𝑆<sub>𝑅𝐸𝐺</sub>+ 𝑆𝑆<sub>𝐸𝑅𝑅</sub>
> - 𝑑𝑓<sub>𝑇𝑂𝑇</sub> = 𝑑𝑓<sub>𝑅𝐸𝐺</sub>+ 𝑑𝑓<sub>𝐸𝑅𝑅</sub>
>
> ###### Total Sum of Squares
> - 𝑆𝑆<sub>𝑇𝑂𝑇</sub> = 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑦<sub>𝑖</sub> - 𝑦̅\]<sup>2</sup>
> - 𝑆𝑆<sub>𝑇𝑂𝑇</sub> = (𝒚 - 𝒚̅)<sup>𝑇</sup>(𝒚 - 𝒚̅)
>
> 𝑆𝑆<sub>𝑇𝑂𝑇</sub> has 𝑑𝑓<sub>𝑇𝑂𝑇</sub> = (𝑛 - 1)
> ###### Regression Sum of Squares
> - 𝑆𝑆<sub>𝑅𝐸𝐺</sub> = 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑦̂<sub>𝑖</sub> - 𝑦̅\]<sup>2</sup>
> - 𝑆𝑆<sub>𝑅𝐸𝐺</sub>= (𝒚̂ - 𝒚̅)<sup>𝑇</sup>(𝒚̂ - 𝒚̅)
>
> 𝑆𝑆<sub>𝑅𝐸𝐺</sub> has 𝑑𝑓<sub>𝑅𝐸𝐺</sub> = 𝑘 <font style="color: rgb(128,128,128);">\# multivariate regression model defines a k-dimensional regression plane where the fitted values belong to</font>
> ###### Error Sum of Squares
> - 𝑆𝑆<sub>𝐸𝑅𝑅</sub> = 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑦<sub>𝑖</sub>- 𝑦̂<sub>𝑖</sub>\]<sup>2</sup>
> - 𝑆𝑆<sub>𝐸𝑅𝑅</sub> = (𝒚 - 𝒚̂)<sup>𝑇</sup>(𝒚 - 𝒚̂)
>
> 𝑆𝑆<sub>𝐸𝑅𝑅</sub>has 𝑑𝑓<sub>𝐸𝑅𝑅</sub> = (𝑛 - 𝑘 - 1) \# the sample size 𝑛 minus 𝑘 estimated slopes and 1 estimated intercept
###### ANOVA Table Summary

![[LR - ANOVA Table#^excerpt]]
###### R-Square (Coefficient of Determination)

> [!expand]- Click here to expand...
> ![[R² - R-Squared - Coefficient of Determination - Coefficient of Multiple Determination - Multiple R-Square#^excerpt]]
###### ANOVA F-Test on Significance of Entire Model

> [!expand]- Click here to expand...
> <strong>ANOVA F-Test</strong>
> - popular for testing ratios of variances and significance of models
> - compares the portion of variation explained by regression with the portion that remains unexplained
> - is always one-sided and right-tail because only large values of the F-statistic show a large portion of explained variation and the overall significance of the model
>
> the model is significant as long as at least one slope is not zero, thus:
> - 𝐻<sub>0</sub>: 𝜃<sub>1</sub>= ... 𝜃<sub>𝑘</sub> = 0
> - 𝐻<sub>𝐴</sub>: at least one 𝜃<sub>𝑖</sub> ≠ 0
>
> the f-statistic value is computed as follows:
> - 𝑓 = 𝑀𝑆<sub>𝑅𝐸𝐺</sub>/ 𝑀𝑆<sub>𝐸𝑅𝑅</sub>
>
> then check it against the f-distribution with parameters:
> - numerator 𝑑𝑓 = 𝑑𝑓<sub>𝑅𝐸𝐺</sub> = 𝑘
> - denominator 𝑑𝑓 = 𝑑𝑓<sub>𝐸𝑅𝑅</sub> = (𝑛 − 𝑘 - 1)
###### Estimating Regression Variance 𝜎<sup>2</sup> = 𝑉𝑎𝑟(𝑌)

> [!expand]- Click here to expand...
> with the computed <em>degrees of freedom</em>, we can now estimate the variance of regression 𝜎<sup>2</sup> = 𝑉𝑎𝑟(𝑌) with 𝑠<sup>2</sup>:
> - 𝑠<sup>2</sup> = 𝑀𝑆<sub>𝐸𝑅𝑅</sub> = 𝑆𝑆<sub>𝐸𝑅𝑅</sub>/ 𝑑𝑓<sub>𝐸𝑅𝑅</sub>
>
> it estimates 𝜎<sup>2</sup>= 𝑉𝑎𝑟(𝑌) unbiasedly
>
> <font style="color: rgb(128,128,128);">NOTE: the usual sample variance:</font>
> - <font style="color: rgb(128,128,128);">(𝑠<sub>𝑦</sub>)<sup>2</sup>= 𝑆𝑆<sub>𝑇𝑂𝑇</sub>/ (𝑛 - 1)</font>
> - <font style="color: rgb(128,128,128);">(𝑠<sub>𝑦</sub>)<sup>2</sup>= 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑦<sub>𝑖</sub> - 𝑦̅\]<sup>2</sup> / (𝑛 - 1)</font>
>
> <font style="color: rgb(128,128,128);">is biased because 𝑦̅ no longer estimates the expectation of 𝑌<sub>𝑖</sub></font>
###### Estimating Variance of Individual Slopes (𝜽ˆ = {𝜃ˆ<sub>1</sub>, ..., 𝜃ˆ<sub>𝑘</sub>})

> [!expand]- Click here to expand...
> for the inference of individual regression slopes 𝜽 = {𝜃<sub>1</sub>, ..., 𝜃<sub>𝑘</sub>}, we estimate all the variances {𝑉𝑎𝑟(𝜃<sub>1</sub>), ..., 𝑉𝑎𝑟(𝜃<sub>𝑘</sub>)}
>
> > [!indent]
> ![[Multivariate／Multiple Linear Regression Models/multivariate-linear-regression-variance-of-individual-regression-slopes.png|301]]
>
> the matrix above is called a <strong>variance-covariance matrix</strong> of a vector 𝜽ˆ. It equals:
> - 𝑉𝑎𝑟(𝜽ˆ) = 𝑉𝐴𝑅((𝑿<sup>𝑇</sup>𝑿)<sup>-1</sup>𝑿<sup>𝑇</sup>𝒚)
> - 𝑉𝑎𝑟(𝜽ˆ) = (𝑿<sup>𝑇</sup>𝑿)<sup>-1</sup>𝑿<sup>𝑇</sup>𝑉𝐴𝑅(𝒚)𝑿(𝑿<sup>𝑇</sup>𝑿)<sup>-1</sup>
> - 𝑉𝑎𝑟(𝜽ˆ) = 𝜎<sup>2</sup>(𝑿<sup>𝑇</sup>𝑿)<sup>-1</sup>𝑿<sup>𝑇</sup>𝑿(𝑿<sup>𝑇</sup>𝑿)<sup>-1</sup>
> - 𝑉𝑎𝑟(𝜽ˆ) = 𝜎<sup>2</sup>(𝑿<sup>𝑇</sup>𝑿)<sup>-1</sup>
> - 𝑉𝑎𝑟(𝜽ˆ) = 𝑠<sup>2</sup>(𝑿<sup>𝑇</sup>𝑿)<sup>-1</sup>
>
> diagonal elements of this 𝑘\*𝑘 matrix are variances of individual regression slopes
> - 𝑉𝑎𝑟̂(𝜃ˆ<sub>1</sub>) = 𝑠<sup>2</sup>(𝑿<sup>𝑇</sup>𝑿)<sup>-1</sup>\[1,1\]
> - ...
> - 𝑉𝑎𝑟̂(𝜃ˆ<sub>𝑘</sub>) = 𝑠<sup>2</sup>(𝑿<sup>𝑇</sup>𝑿)<sup>-1</sup>\[𝑘,𝑘\]
###### T-Test on Individual Slopes (𝜽ˆ = {𝜃ˆ<sub>1</sub>, ..., 𝜃ˆ<sub>𝑘</sub>})

> [!expand]- Click here to expand...
> with the estimated variance of individual slopes {𝑉𝑎𝑟̂(𝜃ˆ<sub>1</sub>), ..., 𝑉𝑎𝑟̂(𝜃ˆ<sub>𝑘</sub>)} we can inference about the individual regression slopes {𝜃<sub>1</sub>, ..., 𝜃<sub>𝑘</sub>}
> ###### For Example
>
> let's infer about 𝜃<sub>𝑖</sub>:
> - 𝐻<sub>0</sub>: 𝜃<sub>𝑖</sub> = 𝐵
> - 𝐻<sub>𝐴</sub>: 𝜃<sub>𝑖</sub> \< 𝐵 <font style="color: rgb(128,128,128);">𝑜𝑟</font> 𝜃<sub>𝑖</sub> ≠ 𝐵 <font style="color: rgb(128,128,128);">𝑜𝑟</font> 𝜃<sub>𝑖</sub> \> 𝐵
>
> compute the t-statistic:
> - 𝑡 = (𝜃ˆ<sub>𝑖</sub> - 𝐵) / 𝑠(𝜃ˆ<sub>𝑖</sub>)
>
> compare it against the t-distribution with 𝑑𝑓𝐸𝑅𝑅 = 𝑛 - 𝑘 - 1 degrees of freedom. this test maybe 2-sided or 1-sided, depending on 𝐻<sub>𝐴</sub>
###### Prediction - Confidence Intervals & Prediction Intervals

> [!expand]- Click here to expand...
> given vector of predictors:
> - 𝒙<sub>𝑖</sub> = (𝑋<sub>1</sub>=𝑥<sub>𝑖1</sub>, ..., 𝑋<sub>𝑘</sub>=𝑥<sub>𝑖𝑘</sub>)
>
> estimate the expected response 𝑌 by:
> - 𝑦̂<sub>𝑖</sub> = 𝐄{𝑌|𝑋<sub>1</sub>=𝑥<sub>𝑖1</sub>, ..., 𝑋<sub>𝑘</sub>=𝑥<sub>𝑖𝑘</sub>}
> - 𝑦̂<sub>𝑖</sub> = 𝐄{𝑌|𝑿=𝒙<sub>𝑖</sub>}
> - 𝑦̂<sub>𝑖</sub> = 𝒙<sub>𝑖</sub>𝜽ˆ
>
> ###### Confidence Intervals & Prediction Intervals
>
> to compute confidence interval and prediction intervals we compute the variance of 𝑦̂<sub>𝑖</sub>:
> - 𝑉𝑎𝑟(𝑦̂<sub>𝑖</sub>) = 𝑉𝑎𝑟(𝒙<sub>𝑖</sub>𝜽ˆ)
> - 𝑉𝑎𝑟(𝑦̂<sub>𝑖</sub>) = 𝒙<sub>𝑖</sub><sup>𝑇</sup>𝑉𝑎𝑟(𝜽ˆ)𝒙<sub>𝑖</sub>
> - 𝑉𝑎𝑟(𝑦̂<sub>𝑖</sub>) = 𝜎<sup>2</sup>𝒙<sub>𝑖</sub><sup>𝑇</sup>(𝑿<sup>𝑇</sup>𝑿)<sup>-1</sup>𝒙<sub>𝑖</sub>
> - 𝑉𝑎𝑟̂(𝑦̂<sub>𝑖</sub>) = 𝜎̂<sup>2</sup>𝒙<sub>𝑖</sub><sup>𝑇</sup>(𝑿<sup>𝑇</sup>𝑿)<sup>-1</sup>𝒙<sub>𝑖</sub>
>
> <strong>confidence interval</strong>
>
> the (1-𝛼)100% confidence interval for the mean 𝜇<sub>𝑖</sub> = 𝐄{𝑌|𝑿=𝒙<sub>𝑖</sub>} of all responses with 𝑿=𝒙<sub>𝑖</sub> is defined as:
> - 𝒙<sub>𝑖</sub>𝒃 ± 𝑡·𝑠√\[𝒙<sub>𝑖</sub><sup>𝑇</sup>(𝑿<sup>𝑇</sup>𝑿)<sup>-1</sup>𝒙<sub>𝑖</sub>\]
>
> 𝑡-statistic with (𝑛 - 𝑘 - 1) degrees of freedom
>
> <strong>prediction interval</strong>
>
> accounting for the additional variation of the individual response 𝑦<sub>𝑖</sub> we get a (1-𝛼)100% prediction interval for individual response 𝑌 when 𝑿=𝒙<sub>𝑖</sub> is defined as:
> - 𝒙<sub>𝑖</sub>𝜽ˆ ± 𝑡·𝑠√\[1 + 𝒙<sub>𝑖</sub><sup>𝑇</sup>(𝑿<sup>𝑇</sup>𝑿)<sup>-1</sup>𝒙<sub>𝑖</sub>\]
>
> 𝑡-statistic with (𝑛 - 𝑘 - 1) degrees of freedom
