---
title: "Pearson's Chi-Square Test - Goodness of Fit Test"
created: 2021-09-13T05:29:09.296-05:00
modified: 2023-09-13T20:53:40.067-05:00
parent: "[[Pearson's Chi-Square Test]]"
children: []
---
###### Pearson's Chi-Square Test - Goodness of Fit
- a type of [[Pearson's Chi-Square Test]]
````excerpt
- tests whether an observed frequency [[Probability Distribution - Discrete Functions／Models (Probability Mass Functions)|discrete distribution]] differs from a theoretical [[Probability Distribution - Discrete Functions／Models (Probability Mass Functions)|discrete distribution]] (e.g. whether an ordinary six-sided die is "fair")
````
^excerpt

# The Discrete Distribution Type to Test

```merge-table
{
  "rows": [
    [
      {
        "content": "Discrete Distribution Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Process",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Discrete Uniform Distribution]]",
        "bg": "#F4F5F7"
      },
      "Given 𝑛 observations, the \"theoretical frequency\" for all 𝑐 categories (under the null hypothesis of a [[Discrete Uniform Distribution|discrete uniform distribution]]) is calculated as:\n- 𝐸<sub>𝑖</sub> = 𝑛/𝑐\n\nThe reduction in the degrees of freedom is 𝑝 = 1, notionally because the observed frequencies 𝑂<sub>𝑖</sub> are constrained to sum to 𝑛"
    ],
    [
      {
        "content": "Other Discrete Distributions",
        "bg": "#F4F5F7"
      },
      "The reduction in the degrees of freedom is calculated as 𝑝 = 𝑠 + 1, where 𝑠 is the number of [covariates](https://en.wikipedia.org/wiki/Covariate) used in fitting the distribution. For instance, when checking a:\n- three-co-variate Weibull distribution, 𝑝 = 4\n- [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|Normal distribution]] (where the parameters are mean and standard deviation), 𝑝 = 3\n- [[Poisson Distribution|Poisson distribution]] (where the parameter is the expected value), 𝑝 = 2\n\nThus, there will be 𝑐-𝑝 degrees of freedom, where 𝑐 is the number of categories"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Calculating Pearson's Cumulative Chi-Square Statistic
- <em>𝜒</em>² = 𝛴<sub>1≤𝑖≤𝑐</sub> \[ (𝑂<sub>𝑖</sub> - 𝐸<sub>𝑖</sub>)<sup>2</sup> / 𝐸<sub>𝑖</sub> \]
- <em>𝜒</em>² = 𝑛 · 𝛴<sub>1≤𝑖≤𝑐</sub> \[ (𝑝<sub>𝑖,𝑜𝑏𝑠</sub> - 𝑝<sub>𝑖</sub>)<sup>2</sup> / 𝑝<sub>𝑖</sub> \]

where:
- <em>𝜒</em>² - Pearson's cumulative test statistic, which asymptotically approaches a [[Chi-Square Distribution|𝜒² distribution]]
- 𝑛 - total number of observations
- 𝑂<sub>𝑖</sub> - the number of observations of category 𝑖 out of the 𝑛 total observations
- 𝐸<sub>𝑖</sub> = 𝑝<sub>𝑖</sub>𝑛 - the expected (theoretical) count of category 𝑖, asserted by the null hypothesis that the fraction of category 𝑖 in the population is 𝑝<sub>𝑖</sub>
- 𝑐 - the number of categories
- 𝑝<sub>𝑖,𝑜𝑏𝑠</sub> = 𝑂<sub>𝑖</sub>/𝑛 - the proportion of observations in the population that fall in the 𝑖<sup>th</sup> category, 𝑖 = 1, ..., 𝑐
	- We can also think of 𝑝<sub>𝑖,𝑜𝑏𝑠</sub> as the probability that a randomly selected observation from the population falls in the 𝑖<sup>th</sup> category
- 𝑝<sub>𝑖</sub>- the assumed theoretical [[Proportion|proportions]] that add up to 1

# Hypothesis Test

The chi-squared statistic can then be used to calculate a [[Inferential Statistical Hypothesis Testing|p-value]] by comparing the value of the computed Pearson's Cumulative Chi-Square Statistic to a [[Chi-Square Distribution|chi-squared distribution]]. The number of [degrees of freedom](https://en.wikipedia.org/wiki/Degrees_of_freedom_(statistics)) is equal to the number of categories 𝑐, minus the reduction-in-degrees-of-freedom 𝑝.

The result about the numbers of degrees of freedom is valid when the original data are [[Multinomial Distribution|multinomial]] and hence the estimated parameters are efficient for minimizing the chi-squared statistic. More generally however, when [[Maximum Likelihood Estimation (MLE)|maximum likelihood estimation]] does not coincide with minimum chi-squared estimation, the distribution will lie somewhere between a chi-squared distribution with (𝑛 - 1 - 𝑝) and (𝑛 - 1) degrees of freedom

hypothesis:
- <strong>null hypothesis</strong> 𝐻<sub>0</sub>:
	- 𝑝<sub>𝑖</sub> = 𝑝<sub>𝑖,0</sub> for 𝑖 = 1 to 𝑐
	- the data follow a given model
- <strong>alternative hypothesis</strong> 𝐻<sub>𝐴</sub>:
	- the data don’t follow the given model

calculate <em>𝜒</em>²:
- large <em>𝜒</em>² → discrepancy between 𝑂<sub>𝑖</sub> and 𝐸<sub>𝑖</sub> → evidence against 𝐻<sub>0</sub>
- reject 𝐻<sub>0</sub> when <em>𝜒</em>² \> <em>𝜒</em>²<sub>𝑐-1,𝛼</sub> = <code>qchisq(1-𝛼</code><code>, 𝑐-1)</code>
- p-value = 𝐏(<em>𝜒</em>²<sub>𝑐-1</sub>≥ <em>𝜒</em>²<sub>𝑜𝑏𝑠</sub>) = <code>1 - pchisq(<em>𝜒</em>²<sub>𝑜𝑏𝑠</sub>, 𝑐-1)</code>

# Example With R Code

> [!expand]- Click here to expand...
> Suppose 60 independent rolls of an assumed fair 6-sided die lead to the following data
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "category",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "1",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       {
>         "content": "2",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       {
>         "content": "3",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       {
>         "content": "4",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       {
>         "content": "5",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       {
>         "content": "6",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       {
>         "content": "total",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       }
>     ],
>     [
>       "observed count 𝑂<sub>𝑖</sub>",
>       {
>         "content": "4",
>         "align": "center"
>       },
>       {
>         "content": "6",
>         "align": "center"
>       },
>       {
>         "content": "17",
>         "align": "center"
>       },
>       {
>         "content": "16",
>         "align": "center"
>       },
>       {
>         "content": "8",
>         "align": "center"
>       },
>       {
>         "content": "9",
>         "align": "center"
>       },
>       {
>         "content": "60",
>         "align": "center"
>       }
>     ],
>     [
>       "expected count 𝐸<sub>𝑖</sub>",
>       {
>         "content": "10",
>         "align": "center"
>       },
>       {
>         "content": "10",
>         "align": "center"
>       },
>       {
>         "content": "10",
>         "align": "center"
>       },
>       {
>         "content": "10",
>         "align": "center"
>       },
>       {
>         "content": "10",
>         "align": "center"
>       },
>       {
>         "content": "10",
>         "align": "center"
>       },
>       {
>         "content": "60",
>         "align": "center"
>       }
>     ]
>   ]
> }
> ```
>
> Is the die fair? Answer this question by performing an appropriate test of hypothesis at 5% [[Significance Level (𝛼) - Confidence Level (1 - 𝛼) Coverage Probability|level of significance]]:
> ```
> x <- c(4, 6, 17, 16, 8, 9)
> sum(x)
> [1] 60
> sum((x-10)^2/10) # compute 𝜒²
> [1] 14.2
> 1 - pchisq(14.2, 5)
> [1] 0.01438768
> ```
>
> p-value = 0.01438768, thus reject null hypothesis
# Bayesian Method
In [[Bayesian (Statistical Inference - Inferential Statistics)|Bayesian statistics]], one would instead use a [[Multivariate Beta Distribution (MBD) - Dirichlet Distribution|Dirichlet distribution]] as [[Conjugate Prior|conjugate prior]]. If one took a uniform prior, then the [[Maximum Likelihood Estimation (MLE)|maximum likelihood estimate (MLE)]] for the population probability is the observed probability, and one may compute a [credible region](https://en.wikipedia.org/wiki/Credible_region) around this or another estimate
# Resources

![](https://www.youtube.com/watch?v=2QeDRsxSF9M&list=PL1328115D3D8A2566&index=62)
