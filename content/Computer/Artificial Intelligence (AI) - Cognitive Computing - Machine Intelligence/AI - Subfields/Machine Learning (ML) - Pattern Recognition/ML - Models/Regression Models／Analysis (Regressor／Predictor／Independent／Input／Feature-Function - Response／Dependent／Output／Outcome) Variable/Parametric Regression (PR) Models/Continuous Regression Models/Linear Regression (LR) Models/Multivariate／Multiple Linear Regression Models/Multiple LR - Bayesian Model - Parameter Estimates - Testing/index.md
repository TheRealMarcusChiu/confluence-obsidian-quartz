---
title: "Multiple LR - Bayesian Model - Parameter Estimates - Testing"
created: 2024-02-13T14:01:23.676-06:00
modified: 2026-05-17T02:43:22.621-05:00
parent: "[[Multivariate／Multiple Linear Regression Models]]"
children: []
---
We will now consider how a Bayesian can test:
- 𝐻: 𝛽<sub>𝑞+1</sub> = 𝛽<sub>𝑞+2</sub> = ... = 𝛽<sub>𝑝</sub> = 0

It is done using Bayes Factors. Generally, Bayes factors are for comparing two models, say 𝑀<sub>0</sub> and 𝑀<sub>1</sub>. The key component for the comparison is the <strong>marginal likelihood</strong>.

Two models would involve one with some of the 𝛽 set to 0. For example:
- 𝑀<sub>0</sub> - could be the reduced model with all 𝛽 set to 0 (i.e. 𝑦<sub>𝑖</sub> are independent normal with mean 𝑎 and variance 𝜎<sup>2</sup>)
- 𝑀<sub>1</sub> - could be the full model (i.e. the vector 𝑦 is multivariate normal with mean 𝑋𝛽 and covariance matrix 𝜎<sup>2</sup>𝐼)

Consider the model with likelihood and prior distributions:
- $l_n(𝜃) = f(y|𝜃) = \prod_{i=1}^n f(y_i|𝜃)$
- $\pi (𝜃)$

The marginal likelihood is defined as:
- $m(y) = \int f(y|𝜃) \pi (𝜃) d𝜃$

For example, if the model is normal with mean 𝜃 and known variance 𝜎<sup>2</sup> and the prior is normal with mean 0 and variance 𝜏<sup>2</sup>, the marginal likelihood is:
- $m(y) = c_n exp\left( -\frac{1}{2} \frac{1}{𝜎^2} \left[ \left( \sum_{i=1}^n y_i^2 \right) - n^2 \bar{y}^2 \frac{1/𝜎^2}{n/𝜎^2 + 1/𝜏^2} \right] \right)$

where:
- $c_n = \left( \frac{1}{𝜎 \sqrt{2 \pi}} \right)^2 \frac{1/𝜏}{\sqrt{n/𝜎^2 + 1/𝜏^2}}$

If we have two models, say:
- $M_0 = \{ f_0(x|𝜃_0), \pi_0(𝜃_0)\}$
- $M_1 = \{ f_1(x|𝜃_1), \pi_1(𝜃_1)\}$

we would compute:
- $m_0(Y=y)$
- $m_1(Y=y)$

If:
- $𝐏(M_1) = q$
- $𝐏(M_0) = 1 - q$

then from Bayes' Rule:
- $𝐏(M_1|Y=y) = \frac{𝐏(Y=y|M_1)𝐏(M_1)}{𝐏(Y=y|M_1)𝐏(M_1) + 𝐏(Y=y|M_0)𝐏(M_0)}$
- $𝐏(M_1|Y=y) = \frac{𝐏(Y=y|M_1)q}{𝐏(Y=y|M_1)q + 𝐏(Y=y|M_0)(1 - q)}$

We can rearrange this as:
- $𝐏(M_1|Y=y) = \frac{B_{01}q}{B_{01}q + (1-q)}$

where:
- $B_{01} = \frac{𝐏(Y=y|M_1)}{𝐏(Y=y|M_0)}$

Now 𝐏(𝑌=𝑦|𝑀<sub>1</sub>) is the marginal likelihood for model 𝑀<sub>1</sub>. So write 𝑚<sub>1</sub>(𝑌=𝑦) = 𝐏(𝑌=𝑦|𝑀<sub>1</sub>).

Then:
- $B_{01} = \frac{m_1(Y=y)}{m_0(Y=y)}$

and this is known as the <strong>Bayes Factor</strong>.

As 𝐵<sub>01</sub> increases, so the evidence supports model 𝑀<sub>1</sub>, since 𝐏(𝑀<sub>1</sub>|𝑦) increases. That is 𝑞𝐵/(𝑞𝐵 + 1 - 𝑞) increases as 𝐵 increases.

Thus model 𝑀<sub>1</sub> is preferred if 𝐵<sub>01</sub> is large. We can work this out for the linear model, starting with the marginal likelihood.

To do the computation is a little complicated, and since we will use the marginal likelihood as a ratio in the Bayes factor, we only need to get the terms that change which different number of predictor variables.
- $m_p(y) = c_n \; exp \left( \frac{1}{2} \frac{1}{𝜎^2} \frac{\hat{𝛽}_p^TX_p^TX_p\hat{𝛽}_p}{1 + 𝜉} \right) \left( \frac{𝜉}{1 + 𝜉} \right)^{\frac{1}{2}p}$

and 𝑐<sub>𝑛</sub> does not depend on 𝑝.

We can now get the log of the Bayes factor; i.e. 𝑙𝑜𝑔(𝐵<sub>01</sub>) as:
- $\frac{1}{2} \frac{1}{𝜎^2} \left( \frac{\hat{𝛽}_p^TX_p^TX_p\hat{𝛽}_p}{1 + 𝜉} - \frac{\hat{𝛽}_q^TX_q^TX_q\hat{𝛽}_q}{1 + 𝜉} \right) + \frac{1}{2}(p - q) log\left( \frac{𝜉}{1 + 𝜉} \right)$

Here:
- model 𝑀<sub>0</sub> is the reduced model with 𝑞 predictors
- model 𝑀<sub>1</sub> is the full model with 𝑝 predictors

We would reject the smaller model if this is too large.
# Compare Against Classical Test Statistics Based on Residuals

Recall, we would reject the smaller model if
- $T = \hat{e}_q^T\hat{e}_q - \hat{e}_p^T\hat{e}_p$

is too large.

Recall:
- 𝑒̂ = 𝑦 - 𝑦̂
- 𝑒̂<sup>T</sup>𝑒̂ = 𝑦<sup>T</sup>(𝐼 - 𝐻)𝑦
- $𝑦^T𝐻𝑦 = 𝑦^T𝑋(𝑋^T𝑋)^{-1}𝑋^T𝑦 = \hat{𝛽}X^TX\hat{𝛽}$

Thus:
- $T = \hat{𝛽}_p^TX_p^TX_p\hat{𝛽}_p - \hat{𝛽}_q^TX_q^TX_q\hat{𝛽}_q$

Therefore:
- $log(B_{01}) = \frac{T}{2𝜎^2(1 + 𝜉)} - \frac{1}{2}𝜅(p-q)$

where:
- $𝜅 =  -log(𝜉/(1+𝜉))$

So the Bayes factor has a penalty for the higher number of predictors.

The remaining question is how does the Bayesian decide on which model to select. That is, which value of 𝑐 is chosen if:
- $log(B_{01}) > c$

the smaller model is rejected.

One possibility is simply to revert to classical tests based on critical regions and test statistics. Demonstrably a good test. Otherwise, some choice scale needs to be introduced.

The predictive density for a new observation with predictor 𝑥 is given by:
- $𝐏(Y=y|x;y_1, y_2, ..., y_n) = \int 𝐏(Y=y|x,𝛽)𝐏(𝛽;y_1, y_2, ..., y_n) d𝛽$

This will, if 𝜎 is assumed known, be a normal density function. To help us understand how to get this predictive, let us write:
- $y = x^T𝛽 + 𝜎𝜀$
- $𝛽 = \tilde{𝛽} + C^{1/2}𝜀^T$
- $\tilde{𝛽} = \hat{𝛽} / (1 + 𝜉)$
- $C = 𝜎^2 (X^TX)^{-1} / (1 + 𝜉)$

So:
- $𝐄[y] = x^T \tilde{𝛽}$
- $Var[y] = 𝜎^2 + \frac{𝜎^2}{1 + 𝜉} x^T(X^TX)^{-1}x$

That is,
- $Var[y] = 𝜎^2 \left( 1 + \frac{x^T(X^TX)^{-1}x}{1 + 𝜉} \right)$

# For an Illustration

we take 𝑛=100 and take:
- $y_i = 1 - 2x_i + 𝜎𝜀_i$

where the 𝑥<sub>𝑖</sub> are independent standard normal.

Take 𝜉=0.01; so this gives us 𝛽˜ and 𝐶.

For 𝑥=(1,𝑡) we compute 𝑥<sup>T</sup>𝛽˜ and the following 95% posterior credible interval:
- $𝐄[y] ± 1.96 \sqrt{Var[y]}$

Other than the benefit of prediction as a useful objective in its own right; the predictive can also be used for a formal decision process. Let's make this specific.

Suppose a new individual has a predictor variable 𝑥 and the decision is whether an intervention is required or not.

So the decision space is e.g. 𝐴 = {0,1} with action 1 indicating intervention.

If the future (unknown) outcome is 𝑦, the appropriate action would be known.

Formalizing this, action 𝑎̂ would be taken if, for some utility function 𝑢(𝑎,𝑦):
- 𝑢(𝑎̂,𝑦) ≥ 𝑢(𝑎,𝑦) for all 𝑎∊𝐴

Without being known, the best action now is to select the 𝑎 which maximizes the <strong>expected utility</strong>.

So we want to maximize:
- $U(a) = \int u(a,y) 𝐏(Y=y; y_1, y_2, ..., y_n) dy$

For example, one possible scenario is:
- 𝑢(0,𝑦) = 1(𝑦 \< 𝑦<sub>0</sub>)
- 𝑢(1,𝑦) = 1(𝑦 \> 𝑦<sub>0</sub>)

Then 𝑎=1 is selected if:
- $𝐏(y > y_0 ; y_1, y_2, ..., y_n) > 𝐏(y < y_0 ; y_1, y_2, ..., y_n)$

That has an exact form if 𝑦 is a normal random variable.

Otherwise, it can be evaluated using Monte Carlo methods by sampling from the posterior and then the model/likelihood?

That is:
- $𝐏(Y=y; y_1, y_2, ..., y_n) = M^{-1} \sum_{m=1}^M f(y|x,𝛽^{(m)}$

where the 𝑓 is a normal model.

If 𝜎 is unknown, which is the usual case, the standard practice is to put a gamma prior on 𝜆 = 1/𝜎<sup>2</sup>.

The joint posterior is proportional to:
- $𝜆^{n/2 + p/2} exp\left( -\frac{1}{2} \frac{1}{𝜎^2} \left[ (y - X𝛽)^T(y - X𝛽) + 𝜉𝛽^TX^TX𝛽 \right] \right) 𝜆^{n-1} e^{-𝜆b}$

Rearranging the terms, we get:
- $\pi(𝛽|𝜆;y_1, y_2, ..., y_n) = Normal\left( \tilde{𝛽}, \frac{(X^TX)^{-1}}{𝜆(1 + 𝜉)} \right)$
- $\pi(𝜆) = Gamma\left( a + \frac{1}{2}, b + \frac{1}{2}[y^Ty - \hat{𝛽}^TX^TX\hat{𝛽}/ (1 + 𝜉)] \right)$

If we want the marginal posterior for 𝛽, we can integrate out the gamma variable.

In general, if:
- $\pi(𝛽|𝜇,𝛴/𝜆)$

is normal and 𝜋(𝜆;𝑎,𝑏) is gamma, then:
- $\pi(𝛽|a,b,𝜇,𝛴)$

has density:
- $\frac{b^a 𝛤(a + p/2)}{\sqrt{2\pi}^p |𝛴|^{1/2} 𝛤(a)} \left( b + \frac{1}{2} (𝛽 - 𝜇)^T 𝛴^{-1} (𝛽 - 𝜇) \right)^{-a - p/2}$

# Illustration and Matrix Algebra

Take 𝑛=100 and take the data from:
- $y_i = 2 - x_i + 𝜀_i$

where the 𝑥<sub>𝑖</sub> are independent standard normal.

The prior for 𝛽=(𝛽<sub>1</sub>,𝛽<sub>2</sub>) is normal with mean 0 and covariance matrix (𝑋<sup>T</sup>𝑋)<sup>-1</sup>/𝜉.

With:
- 𝜉 = 0.001
- $X^TX = \begin{bmatrix} n & n\bar{x} \\ n\bar{x} & \sum_{i=1}^n x_i^2 \end{bmatrix}$

The posterior mean for 𝛽 is:
- $\tilde{𝛽} = (2.080, -1.05)$

and the posterior covariance matrix is:
- $\begin{bmatrix} 0.0099 & 0.0002 \\ 0.0002 & 0.0091 \\ \end{bmatrix}$

We can also compute the Bayes factor for comparing the full model with the model in which 𝛽<sub>2</sub> = 0.

Then 𝑙𝑜𝑔(𝐵<sub>01</sub>) = 59.27

We repeat this experiment, but with the only difference being that we generated the data now with 𝛽<sub>2</sub>=0. The log Bayes factor turns out to be -2.14.

With the same data, back with the 𝛽<sub>2</sub>=-1, we plot the data alongside the predictive mean and the region mapped out by the high density region.

The predictive mean is:
- $\tilde{y}_i = x_i^T \tilde{𝛽}$

The upper and lower lines are created via:
- $\tilde{y}_i ± 1.96 𝜎 \sqrt{1 + \frac{x_i^T(X^TX)^{-1}x_i}{1 + 𝜉}}$
```merge-table
{
  "rows": [
    [
      "![[Multiple LR - Bayesian Model - Parameter Estimates - Testing/predictive-mean-with-highest-density-region.png]]\n\nPredictive mean with highest density region"
    ]
  ]
}
```

The key components of the Bayesian approach start with the posterior for 𝛽; i.e. 𝜋(𝛽; 𝑦<sub>1</sub>, 𝑦<sub>2</sub>, ..., 𝑦<sub>𝑛</sub>)

From this we can compute the predictive:
- $𝐏(Y=y|y_1, y_2, ..., y_n) = \int f(Y=y|𝛽) 𝜋(𝛽;y_1, y_2, ..., y_n) d𝛽$

which can be used for decision making.

For model comparison, corresponding to hypothesis testing, the Bayes factor evaluates evidence in favor of one model or the other.

Goodness of fit is usually via the predictive, by comparing 𝐏(𝑦<sub>𝑖</sub>;𝑑𝑎𝑡𝑎) with the outcome 𝑦<sub>𝑖</sub>.

We will take a look at some of the matrix algebra. The starting point is the full posterior for 𝛽 and involves the term:
- $(y - X𝛽)^T(y - X𝛽) + 𝜉𝛽^TX^TX𝛽$

Expand to get:
- $y^Ty - 2𝛽^TX^Ty + 𝛽^TX^TX𝛽 + 𝜉𝛽^TX^TX𝛽$

equal to:
- $y^Ty + (1 + 𝜉) \left[ 𝛽^TX^TX𝛽 - 2 \frac{𝛽^TX^Ty}{(1 + 𝜉)} \right]$

We now need to "complete the square". So:
- $𝛽^T𝛴𝛽 - 2𝛽^𝛵𝜇 = (𝛽 - 𝛴^{-1}𝜇)^T𝛴(𝛽 - 𝛴^{-1}𝜇) - 𝜇^T𝛴^{-1}𝜇$

Hence, we get:
- $y^Ty + (1 + 𝜉) \left[ (𝛽 - \tilde{𝛽})^TX^TX(𝛽 - \tilde{𝛽}) - \frac{y^TX(X^TX)^{-1}X^Ty}{(1 + 𝜉)^2} \right]$

Rearranged as:
- $y^Ty - \frac{y^TX(X^TX)^{-1}X^Ty}{1 + 𝜉} + (1 + 𝜉) (𝛽 - \tilde{𝛽})^TX^TX(𝛽 - \tilde{𝛽})$

The first two terms, without the 1/(1+𝜉), which would be 1 if 𝜉=0; i.e. an improper prior, would be the residual;
- $y - \hat{y}$

The second term is the form of the posterior for 𝛽.

The mean is$\tilde{𝛽}$

The covariance matrix is:
- $\frac{(X^TX)^{-1}}{1 + 𝜉}$

though note we have left out the 𝜎<sup>2</sup> term which was common to all parts.

Many of the objects appearing in the Bayesian analysis are also part of the least squares procedure.

Notably, the Bayes estimator is a shrinkage estimator of the least squares 𝛽ˆ; i.e.
- $\tilde{𝛽} = \frac{\hat{𝛽}}{1 + 𝜉}$

To investigate this, consider the estimator:
- $\tilde{𝜃} = c \hat{𝜃}$

where 𝜃ˆ is an unbiased estimator of 𝜃 with variance 𝜏<sup>2</sup>.

The MSE of 𝜃ˆ is the variance; recall:
- MSE = Var + bias<sup>2</sup>

The MSE for 𝜃˜ is:
- $c^2𝜏^2 + (1-c)^2𝜃^2$

So we would be interested for which 𝑐, if any,
- $c^2𝜏^2 + (1-c)^2𝜃^2 < 𝜏^2$

i.e.
- $g(c) = c^2(𝜏^2 + 𝜃^2) - 2c𝜃^2 + 𝜃^2 - 𝜏^2 < 0$

Now 𝑔(1) = 0

So if 𝑔'(1)\>0, there does exist 𝑐\<1 for which 𝑔(𝑐)\<0.
- $g'(c) = 2c(𝜏^2 + 𝜃^2) - 2𝜃^2$
- $g'(1) = 2𝜏^2 > 0$

Hence, taking the 𝜉 small, makes sense.
# Summary

Bayesian analysis of the linear model starts with a prior distribution for the 𝛽 and for the 𝜆=1/𝜎<sup>2</sup>, if 𝜎 is unknown.

The posterior distribution, via Bayes theorem, is the next step.

This provides estimators for 𝛽.

The predictive allows for formal decision-making and also for checking the model, akin to a residual analysis.

Model comparison is done using the Bayes factor.
