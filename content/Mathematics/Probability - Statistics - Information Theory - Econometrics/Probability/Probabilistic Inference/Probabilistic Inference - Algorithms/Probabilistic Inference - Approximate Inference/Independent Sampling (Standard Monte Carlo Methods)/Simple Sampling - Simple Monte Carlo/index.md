---
title: "Simple Sampling - Simple Monte Carlo"
created: 2021-09-13T05:28:17.811-05:00
modified: 2025-09-08T19:08:05.516-05:00
parent: "[[Independent Sampling (Standard Monte Carlo Methods)]]"
children: []
---
# Simple Sampling - Generalized

assume:
- function ℎ(𝑋)
- 𝑋 has a probability distribution 𝐏
- it is easy to generate a sample 𝑥<sub>𝑖</sub> from probability distribution 𝐏
- computation of ℎ(𝑥<sub>𝑖</sub>) is easy

we want to compute the expected value of ℎ(𝑋) (i.e. 𝐄<sub>𝐏</sub>\[ℎ(𝑋)\])
- 𝐄<sub>𝐏</sub>\[ℎ(𝑋)\] = ∫ℎ(𝑥)𝐏(𝑥)𝑑𝑥 <font style="color: rgb(128,128,128);">\# continuous case</font>
- 𝐄<sub>𝐏</sub>\[ℎ(𝑋)\] = 𝛴<sub>𝑥∊𝑋</sub> ℎ(𝑥)𝐏(𝑥) <font style="color: rgb(128,128,128);">\# discrete case</font>

is estimated with:
- 𝐄<sub>𝐏</sub>\[ℎ(𝑋)\] ≈ (1/𝑛) 𝛴<sub>1≤𝑖≤𝑛</sub>ℎ(𝑥<sub>𝑖</sub>)

where:
- ℎ(𝑥) - is some [[Functions (Domain - Codomain - Preimage - Image - Range)|function]]
- 𝐏 - is the [[Probability Distributions|probability distribution]]
- 𝐄<sub>𝐏</sub>\[..\] - expected value based on 𝐏
- 𝑛 - is the number of samples generated
- {𝑥<sub>1</sub>, ..., 𝑥<sub>𝑖</sub>, ..., 𝑥<sub>𝑛</sub>} - are samples [[Independent and Identically Distributed (IID)|i.i.d.]] generated from 𝐏

# Simple Sampling - Examples

> [!expand]- Using Simple Sampling to Estimate the Average of a Distribution
> see: [[Sample Mean|sample mean]]
>
> here we want to estimate the expected value of 𝑋 having probability distribution 𝐏. Therefore:
> - ℎ(𝑥) = 𝑥
>
> is estimated with:
> - 𝐄<sub>𝐏</sub>\[𝑋\] ≈ (1/𝑛) 𝛴<sub>1≤𝑖≤𝑛</sub> \[𝑥<sub>𝑖</sub>\]
>
> where:
> - 𝑛 - is the number of samples generated
> - {𝑥<sub>1</sub>, ..., 𝑥<sub>𝑖</sub>, ..., 𝑥<sub>𝑛</sub>} - are i.i.d. samples generated from 𝐏

> [!expand]- Using Simple Sampling to Estimate the Proportion of a Distribution
> see: [[Sample Proportion|sample proportions]]
>
> We would like to estimate the probability of a random variable 𝑋.
>
> More specifically, given:
> - variable 𝑋 has a domain of possible outcomes (i.e. [[Probability Terminology|sample space]])
> - event 𝐴 is a subset of sample space
>
> we would like to estimate the probability of <em>𝑝</em> that variable 𝑋 would result in an outcome that exist in event 𝐴. In other words, <em>𝑝</em> = <em>𝐏 </em>{𝑋 ∈ 𝐴}
>
> This probability <em>𝑝</em> is estimated by generating a long run of experiments on 𝑋, where each run returns an outcome 𝑋<sub>𝑖</sub>. Then we compute the proportion of times when our event 𝐴 occurred.
> - 𝑝 = 𝐄<sub>𝐏</sub>\[𝑋 ∈ 𝐴\]
> - 𝑝̂ ≈ (1/𝑛) 𝛴<sub>1≤𝑖≤𝑛</sub> 𝐼(𝑥<sub>𝑖</sub>∊𝐴)
>
> where:
> - 𝑛 - is the number of samples generated
> - {𝑥<sub>1</sub>, ..., 𝑥<sub>𝑖</sub>, ..., 𝑥<sub>𝑛</sub>} - are i.i.d. samples generated from 𝐏
> - 𝐴 is an [[Probability Terminology|event]] (i.e. a set of outcomes) in which we are estimating its probability
> - 𝐼(𝑥<sub>𝑖</sub>∊𝐴) - [[Indicator Function - Characteristic Function|indicator function]] (equals 1 when 𝑥<sub>𝑖</sub>∊𝐴, otherwise 0)
> - 𝑝̂ - the estimator
>
> now we have an estimated probability 𝑝̂
> ### How Accurate is This Method? Does 𝑝̂ = 𝑝?
>
> To answer this question, compute 𝐄\[𝑝̂\] and 𝐒𝐭𝐝(𝑝̂)
>
> Since the number of outcomes 𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub> that fall within event 𝐴 has [[Binomial Distribution|Binomial(𝑛,𝑝) distribution]] with:
> - [[Arithmetic Mean - Average - Location - Expected Value - Expectation|expectation]] = (𝑛<em>𝑝</em>)
> - [[Variance - Standard Deviation (RMS Deviation from Average)|variance]] = 𝑛<em>𝑝</em>(1−<em>𝑝</em>)
> - [[Variance - Standard Deviation (RMS Deviation from Average)|standard deviation]] = √\[𝑛<em>𝑝</em>(1−<em>𝑝</em>)\]
>
> therefore, we obtain:
> - 𝐄\[𝑝̂\] = (1/𝑛) (number of 𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>∈ 𝐴)
> - 𝐄\[𝑝̂\] = (1/𝑛) \[𝐄(𝑋<sub>1</sub>) +  ... + 𝐄(𝑋<sub>𝑛</sub>)\]
> - 𝐄\[𝑝̂\] = (1/𝑛) \[𝑝 +  ... + 𝑝\]
> - 𝐄\[𝑝̂\] = (1/𝑛) 𝑛𝑝
> - 𝐄\[𝑝̂\] = 𝑝
>
> - 𝐒𝐭𝐝(𝑝̂) = (1/𝑛) (number of 𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>∈ 𝐴)
> - 𝐒𝐭𝐝(𝑝̂) = (1/𝑛) √\[𝑛<em>𝑝</em>(1−<em>𝑝</em>)\]
> - 𝐒𝐭𝐝(𝑝̂) = √\[<em>𝑝</em>(1−<em>𝑝</em>) / 𝑛\]
>
> thus, we can conclude the following:
> - 𝐄\[𝑝̂\] = 𝑝, shows that our Monte Carlo Estimator of <em>𝑝</em> is unbiased, so that over a long run, it will on the average return the desired quantity <em>𝑝</em>
> - 𝐒𝐭𝐝(𝑝̂) = √\[<em>𝑝</em>(1−<em>𝑝</em>) / 𝑛\], indicates that the standard deviation of our estimator 𝑝̂ decreases with 𝑛 at the rate of 1/√𝑛 . Larger Monte Carlo experiments produce more accurate results. A 100-fold increase in the number of generated variables reduces the standard deviation (therefore, enhancing accuracy) by a factor of 10
