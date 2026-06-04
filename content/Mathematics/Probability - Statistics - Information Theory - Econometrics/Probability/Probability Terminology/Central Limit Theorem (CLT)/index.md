---
title: "Central Limit Theorem (CLT)"
created: 2021-09-13T05:28:36.891-05:00
modified: 2023-09-10T23:22:36.141-05:00
parent: "[[Probability Terminology]]"
children:
  - "[[Central Limit Theorem (CLT) Proofs - via Double Factorials (!!) and the Moment Method]]"
---
<strong>Central Limit Theorem</strong>
- states that, given a sufficiently large sample size of [[Independent and Identically Distributed (IID)|i.i.d.]] samples, the [[Sampling Distribution - Finite-Sample Distribution|sampling distribution]] of the [[Arithmetic Mean - Average - Location - Expected Value - Expectation Operator|mean]] (or sums and averages) for a random variable will approximate a [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|normal distribution]] regardless of that variable's distribution in the [[Statistics - Terminology|population]] (with the exception of distributions with infinite variance such as the [[Cauchy Distribution - Lorentz Distribution - Cauchy–Lorentz Distribution, Lorentz(ian) Function - Breit–Wigner Distribution|Cauchy distribution]])

# CLT - Sample Size

> [!expand]- Click here to expand...
> CLT states that when you have a sufficiently large sample size, the sampling distribution starts to approximate a normal distribution. How large does the sample size have to be for that approximation to occur?
>
> It depends on the shape of the variable’s distribution in the underlying population. The more the population distribution differs from being normal, the larger the sample size must be. Typically, statisticians say that a sample size of 30 is sufficient for most distributions. However, strongly skewed distributions can require larger sample sizes. We’ll see the sample size aspect in action during the empirical demonstration below.
>
> As the sample size increases, the sampling distribution more closely approximates the normal distribution, and the spread of that distribution tightens
# CLT - Formal Definition (Form 1)

Let {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>} be [[Independent and Identically Distributed (IID)|i.i.d]] random samples taken from a [[Probability Distributions|probability distribution]] with:
- 𝐄(𝑋<sub>𝑖</sub>) = <em>𝜇</em>
- <strong>𝑉𝑎𝑟</strong>(𝑋<sub>𝑖</sub>) = 𝜎<sup>2</sup>

Let

> [!indent]
> 𝑆<sub>𝑛</sub> = 𝑋<sub>1</sub>+ ... + 𝑋<sub>𝑛</sub>

(𝑆<sub>𝑛</sub>/𝑛 or 𝑋̅) is approximately Normal(<em>𝜇</em>, 𝜎<sup>2</sup>/𝑛) for sufficiently large sample size 𝑛

> [!expand]- intuition and computation
> Say we have a random variable 𝑆<sub>𝑛</sub> that is a sum of a sequence of i.i.d random variables:
>
> 𝑆<sub>𝑛</sub><sub></sub>= 𝑋<sub>1</sub>+ ... + 𝑋<sub>𝑛</sub>
>
> for every random variable 𝑋<sub>𝑖</sub> let:
> - 𝐄(𝑋<sub>𝑖</sub>) = <em>𝜇 = population-mean</em>
> - <strong>𝑉𝑎𝑟</strong>(𝑋<sub>𝑖</sub>) = 𝜎<sup>2</sup>= population variance
>
> ###### Distributions of (𝑆<sub>𝑛</sub>, 𝑆<sub>𝑛</sub>/𝑛, 𝑆<sub>𝑛</sub>/√𝑛) for Large 𝑛?
> - (𝑆<sub>𝑛</sub> = 𝑛𝑋̅) is approximately Normal(𝑛<em>𝜇</em>, 𝑛𝜎<sup>2</sup>)
> > [!expand]- Click here to expand...
> > 𝐄(𝑆<sub>𝑛</sub>) = 𝐄(𝑛𝑋̅)
> > - 𝐄(𝑆<sub>𝑛</sub>) = 𝐄(𝑆<sub>𝑛</sub>)
> > - 𝐄(𝑆<sub>𝑛</sub>) = 𝐄(𝑋<sub>1</sub>) + ... + 𝐄(𝑋<sub>𝑛</sub>)
> > - 𝐄(𝑆<sub>𝑛</sub>) = <em>𝜇</em> + ... + <em>𝜇</em>
> > - 𝐄(𝑆<sub>𝑛</sub>) = 𝑛<em>𝜇</em>
> >
> > 𝑉𝑎𝑟(𝑆<sub>𝑛</sub>) = 𝑉𝑎𝑟(𝑛𝑋̅)
> > - 𝑉𝑎𝑟(𝑆<sub>𝑛</sub>) = 𝑉𝑎𝑟(𝑆<sub>𝑛</sub>)
> > - 𝑉𝑎𝑟(𝑆<sub>𝑛</sub>) = 𝑉𝑎𝑟(𝑋<sub>1</sub>) + ... + 𝑉𝑎𝑟(𝑋<sub>𝑛</sub>)
> > - 𝑉𝑎𝑟(𝑆<sub>𝑛</sub>) = 𝜎<sup>2</sup> + ... + 𝜎<sup>2</sup>
> > - 𝑉𝑎𝑟(𝑆<sub>𝑛</sub>) = 𝑛𝜎<sup>2</sup>
> - (𝑆<sub>𝑛</sub>/𝑛 = 𝑋̅) is approximately Normal(<em>𝜇</em>, 𝜎<sup>2</sup>/𝑛)
> > [!expand]- Click here to expand...
> > 𝐄(𝑆<sub>𝑛</sub>/𝑛) = 𝐄(𝑋̅)
> > - 𝐄(𝑆<sub>𝑛</sub>/𝑛) = 𝐄(𝑆<sub>𝑛</sub>/𝑛)
> > - 𝐄(𝑆<sub>𝑛</sub>/𝑛) = 𝐄(𝑆<sub>𝑛</sub>) / 𝑛
> > - 𝐄(𝑆<sub>𝑛</sub>/𝑛) = \[𝐄(𝑋<sub>1</sub>) + ... + 𝐄(𝑋<sub>𝑛</sub>) \] / 𝑛
> > - 𝐄(𝑆<sub>𝑛</sub>/𝑛) = \[<em>𝜇</em> + ... + 𝜇\] / 𝑛
> > - 𝐄(𝑆<sub>𝑛</sub>/𝑛) = <em>𝜇</em>
> >
> > <strong>𝑉𝑎𝑟</strong>(𝑆<sub>𝑛</sub>/𝑛) = <strong>𝑉𝑎𝑟</strong>(𝑋̅)
> > - <strong>𝑉𝑎𝑟</strong>(𝑆<sub>𝑛</sub>/𝑛) = <strong>𝑉𝑎𝑟</strong>(𝑆<sub>𝑛</sub>/𝑛)
> > - <strong>𝑉𝑎𝑟</strong>(𝑆<sub>𝑛</sub>/𝑛) =<sub></sub>\[<strong>𝑉𝑎𝑟</strong>(𝑆<sub>𝑛</sub>)\] / 𝑛<sup>2</sup>
> > - <strong>𝑉𝑎𝑟</strong>(𝑆<sub>𝑛</sub>/𝑛) = \[<strong>𝑉𝑎𝑟</strong>(𝑋<sub>1</sub>) + ... + <strong>𝑉𝑎𝑟</strong>(𝑋<sub>𝑛</sub>)\] / 𝑛<sup>2</sup>
> > - <strong>𝑉𝑎𝑟</strong>(𝑆<sub>𝑛</sub>/𝑛) =<sub></sub>\[𝜎<sup>2</sup> + ... + 𝜎<sup>2</sup>\] / 𝑛<sup>2</sup>
> > - <strong>𝑉𝑎𝑟</strong>(𝑆<sub>𝑛</sub>/𝑛) = 𝑛𝜎<sup>2</sup> / 𝑛<sup>2</sup>
> > - <strong>𝑉𝑎𝑟</strong>(𝑆<sub>𝑛</sub>/𝑛) = 𝜎<sup>2</sup> / 𝑛
> - (𝑆<sub>𝑛</sub>/√𝑛 = √𝑛̅𝑋̅) is approximately Normal(√𝑛̅<em>𝜇</em>, 𝜎<sup>2</sup>)
> > [!expand]- Click here to expand...
> > <strong>𝐄</strong>(𝑆<sub>𝑛</sub>/√𝑛) = <strong>𝐄</strong>(√𝑛̅𝑋̅)
> > - <strong>𝐄</strong>(𝑆<sub>𝑛</sub>/√𝑛) = <strong>𝐄</strong>(𝑆<sub>𝑛</sub>/√𝑛)
> > - <strong>𝐄</strong>(𝑆<sub>𝑛</sub>/√𝑛) = <strong>𝐄</strong>(𝑆<sub>𝑛</sub>) / √𝑛
> > - 𝐄(𝑆<sub>𝑛</sub>/√𝑛) = \[𝐄(𝑋<sub>1</sub>) + ... + 𝐄(𝑋<sub>𝑛</sub>) \] / √𝑛
> > - 𝐄(𝑆<sub>𝑛</sub>/√𝑛) = \[<em>𝜇</em> + ... + 𝜇\] / √𝑛
> > - 𝐄(𝑆<sub>𝑛</sub>/√𝑛) = √𝑛̅<em>𝜇</em>
> >
> > <strong>𝑉𝑎𝑟</strong>(𝑆<sub>𝑛</sub>/√𝑛) = <strong>𝑉𝑎𝑟</strong>(√𝑛̅𝑋̅)
> > - <strong>𝑉𝑎𝑟</strong>(𝑆<sub>𝑛</sub>/√𝑛) =<strong>𝑉𝑎𝑟</strong>(𝑆<sub>𝑛</sub>/√𝑛)
> > - <strong>𝑉𝑎𝑟</strong>(𝑆<sub>𝑛</sub>/√𝑛) =<sub></sub>\[<strong>𝑉𝑎𝑟</strong>(𝑆<sub>𝑛</sub>)\] / 𝑛
> > - <strong>𝑉𝑎𝑟</strong>(𝑆<sub>𝑛</sub>/√𝑛) =<sub></sub>\[<strong>𝑉𝑎𝑟</strong>(𝑋<sub>1</sub>) + ... + <strong>𝑉𝑎𝑟</strong>(𝑋<sub>𝑛</sub>)\] / 𝑛
> > - <strong>𝑉𝑎𝑟</strong>(𝑆<sub>𝑛</sub>/√𝑛) =<sub></sub>\[𝜎<sup>2</sup> + ... + 𝜎<sup>2</sup>\] / 𝑛
> > - <strong>𝑉𝑎𝑟</strong>(𝑆<sub>𝑛</sub>/√𝑛) =<sub></sub>𝑛𝜎<sup>2</sup>/ 𝑛
> > - <strong>𝑉𝑎𝑟</strong>(𝑆<sub>𝑛</sub>/√𝑛) =<sub></sub>𝜎<sup>2</sup>
# CLT - Importance

CLT is vital in statistics for 2 main reasons:
- z-scores
> [!expand]- Click here to expand...
> the [[z-distribution (Standard Normal Distribution) ｜ z-scores ｜ z-values ｜ z-table ｜ z-statistic ｜ Standardization - Standardized Values - Standard Scores - Normal Deviates|standardized-value or z-score (𝑍𝑛)]] of the [[Sample Mean|sample mean]] (𝑆<sub>𝑛</sub>/𝑛)<sub></sub>is as follows:
>
> > [!indent]
> > [!list-indent-undo]
> > > > [!indent]
> > > > ![[Central Limit Theorem (CLT)/2.png|301]]
>
> 𝑍<sub>𝑛</sub> measures how many [[Variance - Standard Deviation (RMS Deviation from Average)|standard deviations (𝜎/√𝑛)]] the [[Sample Mean|sample mean (𝑋̅ = 𝑆𝑛/𝑛)]] is below or above the [[Arithmetic Mean - Average - Location - Expected Value - Expectation|population mean (𝜇)]]
>
> As 𝑛→∞, 𝑍<sub>𝑛</sub> converges in distribution to a [[z-distribution (Standard Normal Distribution) ｜ z-scores ｜ z-values ｜ z-table ｜ z-statistic ｜ Standardization - Standardized Values - Standard Scores - Normal Deviates|Standard Normal]] random variable (for all 𝑧):
>
> > [!indent]
> > [!list-indent-undo]
> > > > [!indent]
> > > > ![[Central Limit Theorem (CLT)/3.png|450]]
>
> where:
> - 𝜱(𝑧) - is the integral of [[z-distribution (Standard Normal Distribution) ｜ z-scores ｜ z-values ｜ z-table ｜ z-statistic ｜ Standardization - Standardized Values - Standard Scores - Normal Deviates|Standard Normal Distribution]] from -∞ to 𝑧
>
> This theorem can be applied to random variables {𝑋<sub>1</sub>, 𝑋<sub>2</sub>, ... } of ANY distribution with finite [[Arithmetic Mean - Average - Location - Expected Value - Expectation|expectation]] and [[Variance - Standard Deviation (RMS Deviation from Average)|variance]]. As long as 𝑛 is sufficiently large, one can use [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|Normal Distribution]] to compute probabilities about the random variable 𝑆<sub>𝑛</sub> or 𝑋̅.
- normality assumption
> [!expand]- Click here to expand...
> The fact that sampling distributions can approximate a normal distribution has critical implications. In statistics, the normality assumption is vital for parametric hypothesis tests of the mean, such as the t-test. Consequently, you might think that these tests are not valid when the data are non-normally distributed. However, if your sample size is large enough, the central limit theorem kicks in and produces sampling distributions that approximate a normal distribution. This fact allows you to use these hypothesis tests even when your data are nonnormally distributed—as long as your sample size is large enough.
>
> You might have heard that parametric tests of the mean are robust to depart from the normality assumption when your sample size is sufficiently large. That’s thanks to the central limit theorem!
- precision of the estimates
> [!expand]- Click here to expand...
> sampling distributions of the mean cluster more tightly around the population mean as the sample sizes increase. This property of the central limit theorem becomes relevant when using a sample to estimate the mean of an entire population. With a larger sample size, your sample mean is more likely to be close to the real population mean. In other words, your estimate is more precise.
>
> Conversely, the sampling distributions of the mean for smaller sample sizes are much broader. For small sample sizes, it’s not unusual for sample means to be further away from the actual population mean. You obtain less precise estimates

# Some Probability Distributions of Form 𝑆<sub>𝑛</sub>
- [[Binomial Distribution|Binomial variable]] = sum of independent [[Bernoulli Distribution|Bernoulli variables]]
- [[Negative Binomial (Pascal) Distribution|Negative Binomial variable]] = sum of independent [[Geometric Distribution|Geometric variables]]
- [[Gamma Distribution|Gamma variable]] = sum of independent [[Exponential Distribution|Exponential variables]]

Hence, the Central Limit Theorem applies to all these distributions with sufficiently large:
- 𝑛 for Binomial variables
- 𝑘 for Negative Binomial variables
- 𝛼 for Gamma variables

# Examples

> [!expand]- Example 1 (Allocation of disk space)
> A disk has a free space of 330 megabytes. Is it likely to be sufficient for 300 independent images, if each image has an expected size of 1 megabyte with a standard deviation of 0.5 megabytes?
>
> We have:
> - 𝑛 = 300
> - <em>𝜇</em> = 1
> - 𝜎 = 0.5
>
> The number of images 𝑛 is large, so the Central Limit Theorem applies to their total size 𝑆<sub>𝑛</sub>. Then
>
> ![[Central Limit Theorem (CLT)/central-limit-theorem-example.png|500]]
>
> Again, ɸ(𝑧) is the integral of [[z-distribution (Standard Normal Distribution) ｜ z-scores ｜ z-values ｜ z-table ｜ z-statistic ｜ Standardization - Standardized Values - Standard Scores - Normal Deviates|Standard Normal Distribution]] from -∞ to 𝑧
>
> This probability is very high, hence, the available disk space is very likely to be sufficient

> [!expand]- Example 2 (Elevator)
> You wait for an elevator, whose capacity is 2000 pounds. The elevator comes with 10 adult passengers. Suppose your own weight is 150 lbs, and you heard that human weights are normally distributed with a mean of 165 lbs and a standard deviation of 20 lbs. Would you board this elevator or wait for the next one?
>
> we have:
> - 𝑛 = 10
> - <em>𝜇</em> = 165
> - 𝜎 = 20
>
> The probability of an overload equals
>
> ![[Central Limit Theorem (CLT)/central-limit-theorem-example-2.png|450]]
>
> So, with a probability of 0.9992, it is safe to take this elevator
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Resources

![](https://www.youtube.com/watch?v=zeJD6dqJ5lo)
