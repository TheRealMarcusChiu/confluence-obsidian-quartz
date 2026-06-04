---
title: "Multiple LR - Bayesian Model - Parameter Estimates - Expectation／Variance Conditional on {𝑥₁, ..., 𝑥ₙ}"
created: 2024-02-12T15:27:41.120-06:00
modified: 2024-02-13T14:00:57.224-06:00
parent: "[[Multivariate／Multiple Linear Regression Models]]"
children: []
---
TODO

[https://statswithr.github.io/book/introduction-to-bayesian-regression.html#sec:Bayes-multiple-regression](https://statswithr.github.io/book/introduction-to-bayesian-regression.html#sec:Bayes-multiple-regression)
# Single Parameter - 𝜎 Is Known

According to [[Bayes' Rule／Theorem／Law (Prior - Posterior - Distribution - Likelihood - Probability of Evidence)|Bayes' rule]] we have:
- $posterior ∝ likelihood * prior$
- $𝐏(𝜃|y_1, y_2, ..., y_n) ∝ 𝐏(y_1, y_2, ..., y_n|𝜃) * 𝐏(𝜃)$

We assume:
- 𝑦<sub>𝑖</sub>'s are IID as normal with mean 𝜃 and known variance 𝜎<sup>2</sup>:
	- $𝐏(y_1, y_2, ..., y_n|𝜃) ∝ exp\left( - \frac{1}{2} \sum_{i=1}^n \frac{(y_i - 𝜃)^2}{𝜎^2} \right)$
- prior for 𝜃 is normal with mean 0 and variance 𝜏<sup>2</sup>:
	- $𝐏(𝜃) ∝ exp\left( - \frac{1}{2} \frac{𝜃^2}{𝜏^2} \right)$

Thus the resulting posterior distribution is:
- $𝐏(𝜃|y_1, y_2, ..., y_n) ∝ 𝐏(y_1, y_2, ..., y_n|𝜃) * 𝐏(𝜃)$
- $𝐏(𝜃|y_1, y_2, ..., y_n) ∝ exp\left( - \frac{1}{2} \left[ \left( \sum_{i=1}^n \frac{(y_i - 𝜃)^2}{𝜎^2} \right) + \frac{𝜃^2}{𝜏^2} \right] \right)$

This can be simplified as:
- $𝐏(𝜃|y_1, y_2, ..., y_n) = Normal(𝜇_n, 𝜏_n^2)$
- 
> [!expand]- derivation
> - $𝐏(𝜃|y_1, y_2, ..., y_n)  ∝ exp\left( - \frac{1}{2} \left[ \left( \sum_{i=1}^n \frac{(y_i - 𝜃)^2}{𝜎^2} \right) + \frac{𝜃^2}{𝜏^2} \right] \right)$
> - $𝐏(𝜃|y_1, y_2, ..., y_n)  ∝ exp\left( - \frac{1}{2} \left[ \left( \sum_{i=1}^n \frac{y_i^2 - 2y_i𝜃 + 𝜃^2}{𝜎^2} \right) + \frac{𝜃^2}{𝜏^2} \right] \right)$
> - $𝐏(𝜃|y_1, y_2, ..., y_n)  ∝ exp\left( - \frac{1}{2} \left[ \frac{ny_i^2 - 2ny_i𝜃 + n𝜃^2}{𝜎^2} + \frac{𝜃^2}{𝜏^2} \right] \right)$
> - $𝐏(𝜃|y_1, y_2, ..., y_n)  ∝ exp\left( - \frac{1}{2} \left[ \frac{ny_i^2𝜏^2 - 2ny_i𝜃𝜏^2 + n𝜃^2𝜏^2}{𝜎^2𝜏^2} + \frac{𝜃^2𝜎^2}{𝜏^2𝜎^2} \right] \right)$
> - $𝐏(𝜃|y_1, y_2, ..., y_n)  ∝ exp\left( - \frac{1}{2} \left[ \frac{ny_i^2𝜏^2 - 2ny_i𝜃𝜏^2 + n𝜃^2𝜏^2 + 𝜃^2𝜎^2}{𝜎^2𝜏^2} \right] \right)$

where:
- $𝜇_n = \frac{n\bar{y}𝜏^2}{n𝜏^2 + 𝜎^2}$
- $𝜏_n^2 = \frac{1}{n/𝜎^2 + 1/𝜏^2}$

The predictive density is:
- $𝐏(Y=y|y_1, y_2, ..., y_n) = \int  Normal(Y=y|𝜃,𝜎^2) \; 𝐏(𝜃|y_1, y_2, ..., y_n) d𝜃$

This can be seen to be normal:
- $𝐏(Y=y|y_1, y_2, ..., y_n) = Normal(Y=y|𝜇_𝑛, 𝜎^2 + 𝜏_n^2)$

Note, this converges to the true density; since:
- $\left| 𝜇_n - \bar{y} \right| → 0$
- $\left| \bar{y} - 𝜃^* \right| → 0 \;\;\; \text{ where } 𝜃^* \text{ is the true value}$
- $𝜏_n^2 → 0$

# Single Parameter - 𝜎 Is Unknown

Take the prior as:
- $𝜋(𝜃|𝜆) = Normal\left(𝜃|0, \frac{1}{𝜉𝜆}\right)$
- $𝜋(𝜃|𝜆) ∝ exp\left( - \frac{1}{2} \frac{𝜃^2}{1/𝜉𝜆} \right)$
- $𝜋(𝜆) = Gamma(𝜆|a,b)$
- $𝜋(𝜆) ∝ 𝜆^{a-1}e^{-𝜆b}$

Thus the joint posterior is proportional to:
- $𝜋(𝜃,𝜆|y_1, y_2, ..., y_n) ∝ 𝐏(y_1, y_2, ..., y_n|𝜃,𝜆)𝐏(𝜃,𝜆)$
- $𝜋(𝜃,𝜆|y_1, y_2, ..., y_n) ∝ 𝜆^{n/2 +1/2} exp\left( -\frac{1}{2}𝜆 \left[ \left( \sum_{i=1}^n (y_i - 𝜃)^2 \right) + 𝜃^2𝜉 \right] \right) 𝜆^{a-1}e^{-𝜆b}$
- 
> [!expand]- derivation
> - $𝜋(𝜃,𝜆|y_1, y_2, ..., y_n) ∝ 𝐏(y_1, y_2, ..., y_n|𝜃,𝜆)𝐏(𝜃|𝜆)𝐏(𝜆)$
> - $𝜋(𝜃,𝜆|y_1, y_2, ..., y_n) ∝ exp\left( - \frac{1}{2} \frac{𝜃^2}{1/𝜉𝜆} \right) \left( 𝜆^{a-1}e^{-𝜆b} \right)$

Using algebra:
- $𝜋(𝜃|𝜆;y_1, y_2, ..., y_n) = Normal(𝜃|𝜇_n, 1/(𝜆𝜉_n))$
- $𝜋(𝜆;y_1, y_2, ..., y_n) = Gamma(𝜆|a_n, b_n)$

where:
- $𝜇_n = \frac{n\bar{y}}{n+𝜉}$
- $𝜉_n = n+𝜉$
- $a_n = a + \frac{1}{2}n$
- $b_n = b + \frac{1}{2} \left( \sum_{i=1}^n y_i^2 - \frac{n^2\bar{y}^2}{n + 𝜉} \right)$

A conjugate model.
# Linear Model TODO

slide 11

The expectation and covariance of the Bayesian estimator:
- $𝐄[\tilde{𝛽}] = \frac{𝛽}{1 + 𝜉}$
- $Cov[\tilde{𝛽}] = 𝜎^2 \frac{(X^TX)^{-1}}{1 + 𝜉}$

Note that the 𝛽˜ = 𝛽ˆ<sub>𝑂𝐿𝑆</sub> if we are willing to set 𝜉=0. However, while the posterior exists, the prior does not, since effectively the prior variance is infinite. Nevertheless, it is used, and the prior is referred to as an <strong>Objective Bayes</strong> prior.
