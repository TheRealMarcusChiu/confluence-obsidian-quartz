---
title: "Simple LR - Bayesian Model - Intercept Estimate and Slope Estimate - Expectation／Variance／Standard-Deviation Conditional on {𝑥₁, ..., 𝑥ₙ}"
created: 2024-02-12T12:10:10.101-06:00
modified: 2026-05-17T02:31:59.499-05:00
parent: "[[Univariate／Single-Variable／Simple Linear Regression Models]]"
children: []
---
The Bayesian model starts with the same model as the Frequentist approach:
- $y_i = 𝛽_0 + 𝛽_1 x_i + 𝜀_i$

with the assumption that:
- 𝜀<sub>𝑖</sub> - are iid [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|normal]] random variables with mean 0 and constant variance 𝜎<sup>2</sup>

Thus, the likelihood of each 𝑦<sub>𝑖</sub> given {𝑥<sub>𝑖</sub>, 𝛽<sub>0</sub>, 𝛽<sub>1</sub>, 𝜎<sup>2</sup>} is defined as:
- $𝐏(y_i | x_i, 𝛽_0, 𝛽_1, 𝜎^2) = \frac{1}{\sqrt{2 \pi 𝜎^2}} exp \left( - \frac{y_i - (𝛽_0 + 𝛽_1x_i))^2}{2𝜎^2} \right)$

The likelihood of {𝑦<sub>1</sub>, 𝑦<sub>2</sub>, ..., 𝑦<sub>𝑛</sub>} is the product of each likelihood:
- $𝐏(\{y_1, y_2, ..., y_n\} | x_i, 𝛽_0, 𝛽_1, 𝜎^2) = \prod_{i=1}^n \frac{1}{\sqrt{2 \pi 𝜎^2}} exp \left( - \frac{y_i - (𝛽_0 + 𝛽_1x_i))^2}{2𝜎^2} \right)$

Since this likelihood depends on values {𝛽<sub>0</sub>, 𝛽<sub>1</sub>, 𝜎<sup>2</sup>} it is sometimes denoted as a function of {𝛽<sub>0</sub>, 𝛽<sub>1</sub>, 𝜎<sup>2</sup>}:
- $𝐏(y_i | x_i, 𝛽_0, 𝛽_1, 𝜎^2) = \mathcal{L}(𝛽_0, 𝛽_1, 𝜎^2)$

To compute the posterior distribution we need to choose a reference prior distribution as shown below:
- $posterior ∝ likelihood * prior$
- $𝐏(𝛽_0, 𝛽_1, 𝜎^2|\{y_1, y_2, ..., y_n\}) ∝ 𝐏(\{y_1, y_2, ..., y_n\}|𝛽_0, 𝛽_1, 𝜎^2)𝐏(𝛽_0, 𝛽_1, 𝜎^2)$

Our reference prior distribution will be a standard non-informative prior.

Thus, we assume that the joint prior distribution of {𝛽<sub>0</sub>, 𝛽<sub>1</sub>, 𝜎<sup>2</sup>} to be proportional to the inverse of 𝜎<sup>2</sup>:
- $𝐏(𝛽_0, 𝛽_1, 𝜎^2) ∝ \frac{1}{𝜎^2}$

Then we apply the Bayes' rule to derive the joint posterior distribution after observing data {𝑦<sub>1</sub>, 𝑦<sub>2</sub>, ..., 𝑦<sub>𝑛</sub>}:
- $𝐏(𝛽_0, 𝛽_1, 𝜎^2|\{y_1, y_2, ..., y_n\}) ∝ 𝐏(\{y_1, y_2, ..., y_n\}|𝛽_0, 𝛽_1, 𝜎^2)𝐏(𝛽_0, 𝛽_1, 𝜎^2)$
- $𝐏(𝛽_0, 𝛽_1, 𝜎^2|\{y_1, y_2, ..., y_n\}) ∝ 𝐏(\{y_1, y_2, ..., y_n\}|𝛽_0, 𝛽_1, 𝜎^2) \frac{1}{𝜎^2}$
- $𝐏(𝛽_0, 𝛽_1, 𝜎^2|\{y_1, y_2, ..., y_n\}) ∝ \left[ \prod_{i=1}^n \frac{1}{\sqrt{2 \pi 𝜎^2}} exp \left( - \frac{y_i - (𝛽_0 + 𝛽_1x_i))^2}{2𝜎^2} \right) \right] \frac{1}{𝜎^2}$
- $𝐏(𝛽_0, 𝛽_1, 𝜎^2|\{y_1, y_2, ..., y_n\}) ∝ \left[ \prod_{i=1}^n \frac{1}{(𝜎^2)^{1/2}} exp \left( - \frac{y_i - (𝛽_0 + 𝛽_1x_i))^2}{2𝜎^2} \right) \right] \frac{1}{𝜎^2}$
- $𝐏(𝛽_0, 𝛽_1, 𝜎^2|\{y_1, y_2, ..., y_n\}) ∝ \frac{1}{(𝜎^2)^{(n+2)/2}} exp \left( - \frac{\sum_{i=1}^n y_i - (𝛽_0 + 𝛽_1x_i))^2}{2𝜎^2} \right)$

To obtain the marginal posterior distribution of 𝛽<sub>1</sub> we need to integrate {𝛽<sub>0</sub>, 𝜎<sup>2</sup>} out of the joint posterior distribution:
- $𝐏(𝛽_0|\{y_1, y_2, ..., y_n\}) = \int_0^∞ \left( \int_{-∞}^∞ 𝐏(𝛽_0, 𝛽_1, 𝜎^2|\{y_1, y_2, ..., y_n\}) d𝛽_0 \right) d𝜎^2$

The marginal posterior distribution of 𝛽<sub>1</sub> is the [[t-distribution ｜ t-scores ｜ t-value ｜ t-table ｜ t-statistic ｜ student's t-distribution|Student's t-distribution]]:
- $𝛽_1|\{y_1, y_2, ..., y_n\} \sim t\left( n-2, \hat{𝛽}_1, \frac{\hat{𝜎}^2}{S_{xx}} \right) = t\left( n-2, \hat{𝛽}_1, (se_{𝛽_1})^2 \right)$
- 
> [!expand]- derivation
> TODO: [https://statswithr.github.io/book/introduction-to-bayesian-regression.html#sec:derivations](https://statswithr.github.io/book/introduction-to-bayesian-regression.html#sec:derivations)

where:
- 𝑛-2 degrees of freedom
- center at 𝛽<sub>1</sub>ˆ (i.e. the slope estimate we obtained from the frequentist OLS model)
- scale parameter (𝑠𝑒<sub>𝛽1</sub>)<sup>2</sup>, which is the square of the [[Standard Error (SE) - Estimated Standard Error (SEˆ)|standard error]] of 𝛽ˆ under the frequentist OLS model

To obtain the marginal posterior distribution of 𝛽<sub>0</sub> we need to integrate {𝛽<sub>1</sub>, 𝜎<sup>2</sup>} out of the joint posterior distribution:
- $𝐏(𝛽_1|\{y_1, y_2, ..., y_n\}) = \int_0^∞ \left( \int_{-∞}^∞ 𝐏(𝛽_0, 𝛽_1, 𝜎^2|\{y_1, y_2, ..., y_n\}) d𝛽_1 \right) d𝜎^2$

The marginal posterior distribution of 𝛽<sub>0</sub> is the [[t-distribution ｜ t-scores ｜ t-value ｜ t-table ｜ t-statistic ｜ student's t-distribution|Student's t-distribution]]:
- $𝛽_0|\{y_1, y_2, ..., y_n\} \sim t\left( n-2, \hat{𝛽}_0, \hat{𝜎}^2 \left( \frac{1}{n} + \frac{\bar{x}^2}{S_{xx}} \right) \right) = t\left( n-2, \hat{𝛽}_0, (se_{𝛽_0})^2 \right)$

where:
- 𝑛-2 degrees of freedom
- center at 𝛽<sub>0</sub>ˆ (i.e. the intercept estimate we obtained from the frequentist OLS model)
- scale parameter (𝑠𝑒<sub>𝛽0</sub>)<sup>2</sup>, which is the square of the [[Standard Error (SE) - Estimated Standard Error (SEˆ)|standard error]] of 𝛽ˆ under the frequentist OLS model

The marginal posterior distribution of 𝜎<sup>2</sup> is the inverse Gamma distribution. Or equivalently the reciprocal of 𝜎<sup>2</sup> (i.e. precision 𝜙) follows the [[Gamma Distribution|Gamma distribution]]:
- $𝜙 = \frac{1}{𝜎^2} | \{y_1, y_2, ..., y_n\} \sim Gamma\left( \frac{n-2}{2}, \frac{SSE}{2} \right)$

Moreover, similar to the Normal-Gamma conjugacy under the reference prior introduced in the previous, the joint posterior distribution of {𝛽<sub>1</sub>, 𝜎<sup>2</sup>}, and the joint posterior distribution of {𝛽<sub>0</sub>, 𝜎<sup>2</sup>} are both Normal-Gamma.

The posterior distribution of 𝛽<sub>1</sub> conditioning on 𝜎<sup>2</sup> is:
- $𝛽_1 | 𝜎^2, data \sim Normal\left( \hat{𝛽}_1, \frac{𝜎^2}{S_{xx}} \right)$

The posterior distribution of 𝛽<sub>0</sub> conditioning on 𝜎<sup>2</sup> is:
- $𝛽_0 | 𝜎^2, data \sim Normal\left( \hat{𝛽}_0, 𝜎^2 \left(\frac{1}{n} + \frac{\bar{x}^2}{S_{xx}} \right) \right)$

# Credible Intervals for 𝛽<sub>0</sub> and 𝛽<sub>1</sub>

The Bayesian posterior distribution results of 𝛽<sub>0</sub> and 𝛽<sub>1</sub> show that under the reference prior, the posterior credible intervals are in fact numerically equivalent to the confidence intervals from the classical frequentist OLS analysis.
# Credible Intervals for the Mean 𝜇<sub>𝑖</sub> and the Prediction 𝑦<sub>𝑖</sub>

From our assumption of the model:
- $y_i = 𝛽_0 + 𝛽_1x_i + 𝜀_i$

the mean of the response variable 𝑌, 𝜇<sub>𝑖</sub>, at the point 𝑥<sub>𝑖</sub> is:
- $𝜇_i | x_i = 𝐄[Y|x_i] = 𝛽_0 + 𝛽_1x_i$

Under the reference prior, 𝜇<sub>𝑖</sub> has a posterior distribution:
- $𝛽_0 + 𝛽_1x_i | data \sim t\left( n-2, \hat{𝛽_0} + \hat{𝛽_1}x_i, S_{Y|X_i}^2 \right)$

where:
- $S_{Y|X_i}^2 = \hat{𝜎}^2 \left( \frac{1}{n} + \frac{(x_i - \bar{x})^2}{S_{xx}} \right)$

Any new prediction 𝑦<sub>𝑖</sub> at point 𝑥<sub>𝑖</sub> also follows the Student's t-distribution:
- $y_i | data, x_i \sim t\left( n-2, \hat{𝛽_0} + \hat{𝛽_1}x_i, S_{Y|X_i}^2 \right)$

where:
- $S_{Y|X_i}^2 = \hat{𝜎}^2 + \hat{𝜎}^2 \left( \frac{1}{n} + \frac{(x_i - \bar{x})^2}{S_{xx}} \right)$
- $S_{Y|X_i}^2 = \hat{𝜎}^2 \left(1 + \frac{1}{n} + \frac{(x_i - \bar{x})^2}{S_{xx}} \right)$

# Informative Priors

Instead of the non-informative reference prior, we can consider using a more general semi-conjugate prior distribution of {𝛽<sub>0</sub>, 𝛽<sub>1</sub>, 𝜎<sup>2</sup>} when there is information available about the parameters.

We can assume that given {𝛽<sub>0</sub>, 𝛽<sub>1</sub>, 𝜎<sup>2</sup>} together follow the bivariate normal prior distribution, from which their marginal distributions follow normal:
- $𝛽_0 | 𝜎^2 \sim Normal(c_0, 𝜎^2 S_{𝛽_0})$
- $𝛽_1 | 𝜎^2 \sim Normal(c_1, 𝜎^2 S_{𝛽_1})$

with [[Covariation - Covariance|covariance]]:
- $Cov(𝛽_0,𝛽_1|𝜎^2) = 𝜎^2 S_{𝛽_0,𝛽_1}$

where$𝜎^2, S_{𝛽_0}, S_{𝛽_1}, S_{𝛽_0,𝛽_1} \text{ are hyperparameters}$

. This is equivalent to setting the coefficient vector 𝛽 = \[𝛽<sub>0</sub>, 𝛽<sub>1</sub>\]<sup>T</sup> to have a bivariate normal distribution with [[Covariance & Correlation Matrix|covariance matrix]] 𝛴<sub>0</sub>:
- $𝛴_0 = 𝜎^2 \begin{bmatrix} S_{𝛽_0} & S_{𝛽_0,𝛽_1} \\ S_{𝛽_0,𝛽_1} & S_{𝛽_1} \\ \end{bmatrix}$

That is:
- $𝛽 = \begin{bmatrix} 𝛽_0 \\ 𝛽_1 \\ \end{bmatrix} | 𝜎^2 \sim BivariateNormal \left( b = \begin{bmatrix} c_0 \\ c_1 \end{bmatrix}, 𝜎^2 𝛴_0 \right)$

Then for 𝜎<sup>2</sup>, we will impose an inverse Gamma distribution as its prior distribution:
- $1/𝜎^2 \sim Gamma\left( \frac{𝜈_0}{2}, \frac{𝜈_0𝜎_0}{2} \right)$

Now the joint prior distribution of {𝛽<sub>0</sub>, 𝛽<sub>1</sub>, 𝜎<sup>2</sup>} forms a distribution that is analogous to the Normal-Gamma distribution. Prior information about {𝛽<sub>0</sub>, 𝛽<sub>1</sub>, 𝜎<sup>2</sup>} are encoded in the hyperparameters$\{ c_0, c_1, S_{𝛽_0}, S_{𝛽_1}, S_{𝛽_0𝛽_0}, 𝜈_0, 𝜎_0 \}$

The marginal posterior distribution of the coefficient vector 𝛽 will be bivariate normal, and the marginal posterior distribution of 𝜎<sup>2</sup> is again an inverse Gamma distribution:
- $1/𝜎^2 | y_1, ..., y_n \sim Gamma \left( \frac{𝜈_0 + n}{2}, \frac{𝜈_0𝜎_0^2 + SSE}{2} \right)$

Once we see that the reference prior is the limiting case of this conjugate prior we impose. We usually use Gibbs sampling to approximate the joint posterior distribution instead of using the result directly, especially when we have more regression coefficients in multiple linear regression models. We omit the derivation of the posterior distributions due to the heavy use of advanced linear algebra. One can refer to Hoff ([2009](https://statswithr.github.io/book/introduction-to-bayesian-regression.html#ref-hoff2009first)) for more details.

Based on any prior information we have for the model, we can also impose other priors and assumptions on {𝛽<sub>0</sub>, 𝛽<sub>1</sub>, 𝜎<sup>2</sup>} to get different Bayesian results. Most of these priors will not form any conjugacy and will require us to use simulation methods such as [[Markov Chain Monte Carlo (MCMC)]] for approximations.
# Resources
- [https://statswithr.github.io/book/introduction-to-bayesian-regression.html](https://statswithr.github.io/book/introduction-to-bayesian-regression.html)
