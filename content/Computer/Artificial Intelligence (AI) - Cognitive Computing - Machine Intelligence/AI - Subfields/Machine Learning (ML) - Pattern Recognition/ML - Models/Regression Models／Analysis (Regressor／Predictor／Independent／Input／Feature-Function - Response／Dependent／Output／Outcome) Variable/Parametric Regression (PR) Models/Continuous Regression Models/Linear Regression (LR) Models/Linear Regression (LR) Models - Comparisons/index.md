---
title: "Linear Regression (LR) Models - Comparisons"
created: 2021-12-20T15:39:44.825-06:00
modified: 2021-12-20T18:41:31.118-06:00
parent: "[[Linear Regression (LR) Models]]"
children: []
---
Comparing different [[Linear Regression (LR) Models|Linear Regression Models]]
# Linear Model Setup
𝐄\[𝑌|𝑋<sub>1</sub>=𝑥<sub>1</sub>, ..., 𝑋<sub>𝑘</sub>=𝑥<sub>𝑘</sub>\] = ℎ(𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) = 𝑦̂ = 𝜃<sub>0</sub>+ 𝜃<sub>1</sub>𝑓<sub>1</sub>(𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) + ... + 𝜃<sub>𝑘</sub>𝑓<sub>𝑘</sub>(𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>)
- syntax-semantics in [[Ordinary Least Squares (OLS) Regression|Ordinary Least Squares Regression (OLS)]]

𝑌 = 𝑋𝜽 + 𝜖
- 𝑌 - target
- 𝑋 - feature matrix
- 𝜽 - vector of regression coefficients
- 𝜖 - error terms with [[Arithmetic Mean - Average - Location - Expected Value - Expectation Operator|expected value]] zero (i.e. 𝐄\[𝜖\] = 0)

<strong>Problem Statement</strong> - solve for 𝜽
# Regression Solution Comparisons

> [!expand-ui]- Ordinary Least Squares (OLS) Regression
> A closed-form solution for the OLS estimator 𝜽ˆ<sub>𝑂𝐿𝑆</sub>, we minimize the sum of squared residuals (𝑆𝑆𝑅)
> - 𝑆𝑆𝑅 = ||𝑒||<sub>2</sub><sup>2</sup>
> - 𝑆𝑆𝑅 = ||𝑌 - 𝑋𝜽ˆ||<sub>2</sub><sup>2</sup>
> - 𝑆𝑆𝑅 = (𝑌 - 𝑋𝜽ˆ)<sup>𝑇</sup>(𝑌 - 𝑋𝜽ˆ)
> - 𝑆𝑆𝑅 = 𝑌<sup>𝑇</sup>𝑌 - 𝜽ˆ<sup>𝑇</sup>𝑋<sup>𝑇</sup>𝑌 - 𝑌<sup>𝑇</sup>𝑋𝜽ˆ + 𝜽ˆ<sup>𝑇</sup>𝑋<sup>𝑇</sup>𝑋𝜽ˆ
> - 𝑆𝑆𝑅 = 𝑌<sup>𝑇</sup>𝑌 - 2𝜽ˆ<sup>𝑇</sup>𝑋<sup>𝑇</sup>𝑌 + 𝜽ˆ<sup>𝑇</sup>𝑋<sup>𝑇</sup>𝑋𝜽ˆ
>
> Take the derivative of 𝑆𝑆𝑅 with respect to 𝜽
> - 𝛿𝑆𝑆𝑅/𝛿𝜽 = - 2𝑋<sup>𝑇</sup>𝑌 + 2𝑋<sup>𝑇</sup>𝑋𝜽ˆ
>
> Set derivative of 𝑆𝑆𝑅 to zero and solve for 𝜽
> - 0 = - 2𝑋<sup>𝑇</sup>𝑌 + 2𝑋<sup>𝑇</sup>𝑋𝜽ˆ
> - 2𝑋<sup>𝑇</sup>𝑋𝜽ˆ = 2𝑋<sup>𝑇</sup>𝑌
> - 𝑋<sup>𝑇</sup>𝑋𝜽ˆ = 𝑋<sup>𝑇</sup>𝑌
> - (𝑋<sup>𝑇</sup>𝑋)<sup>-1</sup>𝑋<sup>𝑇</sup>𝑋𝜽ˆ = (𝑋<sup>𝑇</sup>𝑋)<sup>-1</sup>𝑋<sup>𝑇</sup>𝑌
> - 𝜽ˆ = (𝑋<sup>𝑇</sup>𝑋)<sup>-1</sup>𝑋<sup>𝑇</sup>𝑌
> - 𝜽ˆ<sub>𝑂𝐿𝑆</sub> = (𝑋<sup>𝑇</sup>𝑋)<sup>-1</sup>𝑋<sup>𝑇</sup>𝑌

> [!expand-ui]- Ridge Regression
> A closed-form solution for the Ridge Regression estimator 𝜽ˆ<sub>𝑅𝑖𝑑𝑔𝑒</sub>, we minimize the sum of squared residuals (𝑆𝑆𝑅) with the addition of an additive L2-norm penalty term with tunning parameter 𝜆
> - 𝑆𝑆𝑅 = ||𝑒||<sub>2</sub><sup>2</sup> + 𝜆||𝜽ˆ||<sub>2</sub><sup>2</sup>
> - 𝑆𝑆𝑅 = ||𝑌 - 𝑋𝜽ˆ||<sub>2</sub><sup>2</sup> + 𝜆||𝜽ˆ||<sub>2</sub><sup>2</sup>
> - 𝑆𝑆𝑅 = (𝑌 - 𝑋𝜽ˆ)<sup>𝑇</sup>(𝑌 - 𝑋𝜽ˆ) + 𝜆𝜽ˆ<sup>𝑇</sup>𝜽ˆ
> - 𝑆𝑆𝑅 = 𝑌<sup>𝑇</sup>𝑌 - 𝜽ˆ<sup>𝑇</sup>𝑋<sup>𝑇</sup>𝑌 - 𝑌<sup>𝑇</sup>𝑋𝜽ˆ + 𝜽ˆ<sup>𝑇</sup>𝑋<sup>𝑇</sup>𝑋𝜽ˆ + 𝜆𝜽ˆ<sup>𝑇</sup>𝜽ˆ
> - 𝑆𝑆𝑅 = 𝑌<sup>𝑇</sup>𝑌 - 2𝜽ˆ<sup>𝑇</sup>𝑋<sup>𝑇</sup>𝑌 + 𝜽ˆ<sup>𝑇</sup>𝑋<sup>𝑇</sup>𝑋𝜽ˆ + 𝜆𝜽ˆ<sup>𝑇</sup>𝜽ˆ
>
> Take the derivative of 𝑆𝑆𝑅 with respect to 𝜽
> - 𝛿𝑆𝑆𝑅/𝛿𝜽 = - 2𝑋<sup>𝑇</sup>𝑌 + 2𝑋<sup>𝑇</sup>𝑋𝜽ˆ + 2𝜆𝜽ˆ
>
> Set derivative of 𝑆𝑆𝑅 to zero and solve for 𝜽
> - 0 = - 2𝑋<sup>𝑇</sup>𝑌 + 2𝑋<sup>𝑇</sup>𝑋𝜽ˆ + 2𝜆𝜽ˆ
> - 2𝑋<sup>𝑇</sup>𝑋𝜽ˆ + 2𝜆𝜽ˆ = 2𝑋<sup>𝑇</sup>𝑌
> - 𝑋<sup>𝑇</sup>𝑋𝜽ˆ + 𝜆𝜽ˆ = 𝑋<sup>𝑇</sup>𝑌
> - (𝑋<sup>𝑇</sup>𝑋 + 𝜆𝐼)𝜽ˆ = 𝑋<sup>𝑇</sup>𝑌
> - (𝑋<sup>𝑇</sup>𝑋 + 𝜆𝐼)<sup>-1</sup>(𝑋<sup>𝑇</sup>𝑋 + 𝜆𝐼)𝜽ˆ = (𝑋<sup>𝑇</sup>𝑋 + 𝜆𝐼)<sup>-1</sup>𝑋<sup>𝑇</sup>𝑌
> - 𝜽ˆ = (𝑋<sup>𝑇</sup>𝑋 + 𝜆𝐼)<sup>-1</sup>𝑋<sup>𝑇</sup>𝑌
> - 𝜽ˆ<sub>𝑅𝑖𝑑𝑔𝑒</sub> = (𝑋<sup>𝑇</sup>𝑋 + 𝜆𝐼)<sup>-1</sup>𝑋<sup>𝑇</sup>𝑌

> [!expand-ui]- Kernalized OLS (with Ridge Penalty)
> Given the refresh of OLS and Ridge regression above, let's derive the closed-form sampling estimator for ridge-penalized OLS regression with a kernelized feature space.
>
> Let's specify the regression coefficients 𝜽 as being equal to the dot product of 𝑋<sup>𝑇</sup> and a new set of regression coefficients 𝑟. We also specify a kernel matrix 𝐾<sub>𝑥</sub>:
> - 𝜽 = 𝑋<sup>𝑇</sup>𝑟
> - 𝐾<sub>𝑥</sub> = 𝑋𝑋<sup>𝑇</sup>
>
> Now we parameterize our linear model as a function of 𝐾<sub>𝑥</sub> instead of 𝑋:
> - 𝑌 = 𝑋𝜽 + 𝜖
> - 𝑌 = 𝑋𝑋<sup>𝑇</sup>𝑟 + 𝜖
> - 𝑌 = 𝐾<sub>𝑥</sub>𝑟 + 𝜖
>
> Now we minimize the sum of squared residuals (𝑆𝑆𝑅) with the addition of an additive L2-norm penalty term with tunning parameter 𝜆, with respect to coefficients 𝑟ˆ
> - 𝑆𝑆𝑅 = ||𝑒||<sub>2</sub><sup>2</sup> + 𝜆||𝜽ˆ||<sub>2</sub><sup>2</sup>
> - 𝑆𝑆𝑅 = ||𝑌 - 𝐾<sub>𝑥</sub>𝑟ˆ||<sub>2</sub><sup>2</sup> + 𝜆||𝑋<sup>𝑇</sup>𝑟ˆ||<sub>2</sub><sup>2</sup>
> - 𝑆𝑆𝑅 = (𝑌 - 𝐾<sub>𝑥</sub>𝑟ˆ)<sup>𝑇</sup>(𝑌 - 𝐾<sub>𝑥</sub>𝑟ˆ) + 𝜆𝑟ˆ<sup>𝑇</sup>𝑋𝑋<sup>𝑇</sup>𝑟ˆ
> - 𝑆𝑆𝑅 = (𝑌 - 𝐾<sub>𝑥</sub>𝑟ˆ)<sup>𝑇</sup>(𝑌 - 𝐾<sub>𝑥</sub>𝑟ˆ) + 𝜆𝑟ˆ<sup>𝑇</sup>𝐾<sub>𝑥</sub>𝑟ˆ
> - 𝑆𝑆𝑅 = (𝑌<sup>𝑇</sup> - 𝑟ˆ<sup>𝑇</sup>𝐾<sub>𝑥</sub><sup>𝑇</sup>)(𝑌 - 𝐾<sub>𝑥</sub>𝑟ˆ) + 𝜆𝑟ˆ<sup>𝑇</sup>𝐾<sub>𝑥</sub>𝑟ˆ
> - 𝑆𝑆𝑅 = 𝑌<sup>𝑇</sup>𝑌 - 2𝑟ˆ<sup>𝑇</sup>𝐾<sub>𝑥</sub>𝑌 + 𝑟ˆ<sup>𝑇</sup>𝐾<sub>𝑥</sub>𝐾<sub>𝑥</sub>𝑟ˆ + 𝜆𝑟ˆ<sup>𝑇</sup>𝐾<sub>𝑥</sub>𝑟ˆ
>
> Take the derivative of 𝑆𝑆𝑅 with respect to 𝑟ˆ
> - 𝛿𝑆𝑆𝑅/𝛿𝜽 = -2𝐾<sub>𝑥</sub>𝑌 + 2𝐾<sub>𝑥</sub>𝐾<sub>𝑥</sub>𝑟ˆ + 𝜆2𝐾<sub>𝑥</sub>𝑟ˆ
>
> Set derivative of 𝑆𝑆𝑅 to zero and solve for 𝑟ˆ
> - 0 = -2𝐾<sub>𝑥</sub>𝑌 + 2𝐾<sub>𝑥</sub>𝐾<sub>𝑥</sub>𝑟ˆ + 𝜆2𝐾<sub>𝑥</sub>𝑟ˆ
> - 2𝐾<sub>𝑥</sub>𝐾<sub>𝑥</sub>𝑟ˆ + 𝜆2𝐾<sub>𝑥</sub>𝑟ˆ = 2𝐾<sub>𝑥</sub>𝑌
> - 𝐾<sub>𝑥</sub>𝐾<sub>𝑥</sub>𝑟ˆ + 𝜆𝐾<sub>𝑥</sub>𝑟ˆ = 𝐾<sub>𝑥</sub>𝑌
> - 𝐾<sub>𝑥</sub>𝑟ˆ + 𝜆𝑟ˆ = 𝑌
> - (𝐾<sub>𝑥</sub> + 𝜆)𝑟ˆ = 𝑌
> - (𝐾<sub>𝑥</sub> + 𝜆)<sup>-1</sup>(𝐾<sub>𝑥</sub> + 𝜆)𝑟ˆ = (𝐾<sub>𝑥</sub> + 𝜆)<sup>-1</sup>𝑌
> - 𝑟ˆ = (𝐾<sub>𝑥</sub> + 𝜆)<sup>-1</sup>𝑌
> - 𝑟ˆ<sub>𝑅𝑖𝑑𝑔𝑒</sub> = (𝐾<sub>𝑥</sub> + 𝜆)<sup>-1</sup>𝑌
>
> > [!info]
> > WHY PERFORM RIDGE REGULARIZATION WITH OUR KERNELIZATION?
> >
> > By definition 𝐾<sub>𝑥</sub> = 𝑋𝑋<sup>𝑇</sup>  is a [[Positive Semi-Definite Matrix|positive semi-definite matrix]]. The issue is that 𝐾<sub>𝑥</sub> may have some [[Eigenvectors (Characteristic Vectors) - Eigenvalues (Spectrum)|eigenvalues]] equal to zero. If that is the case then 𝐾<sub>𝑥</sub> is not invertible. What the ridge penalization is doing is adding a small positive 𝜆 perturbation to the diagonal of 𝐾<sub>𝑥</sub>. Hence, the square matrix (𝐾<sub>𝑥</sub> + 𝜆) is guaranteed to be positive definite and by definition is [[Determinants - Invertible／Non-Singular - Not-Invertible／Singular|invertible]]
>
> If we have access to feature matrix 𝑋, we can recover 𝜽ˆ<sub>𝑅𝑖𝑑𝑔𝑒</sub>:
> - 𝜽ˆ<sub>𝑅𝑖𝑑𝑔𝑒</sub> = 𝑋<sup>𝑇</sup>𝑟ˆ<sub>𝑅𝑖𝑑𝑔𝑒</sub>
