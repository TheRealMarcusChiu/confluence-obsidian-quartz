---
title: "Sampling Distribution of Sample Variance／Standard Deviation - Sample Variance／Standard-Deviation Distribution﻿"
created: 2021-09-13T05:28:54.942-05:00
modified: 2026-05-23T11:18:45.439-05:00
parent: "[[Sample Variance - Sample Standard Deviation - Adjusted Sample Variance - Adjusted Sample Standard Deviation]]"
children: []
---
The distribution of the values of the [[Sample Variance - Sample Standard Deviation - Adjusted Sample Variance - Adjusted Sample Standard Deviation|sample variance]] 𝑠<sup>2</sup> in repeated samples is called the [[Sampling Distribution - Finite-Sample Distribution|sampling distribution]] of sample variance 𝑠<sup>2</sup>

Again, estimating the population variance 𝜎<sup>2</sup> from an observed samples {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>}
- 𝑠<sup>2</sup> = (1/(𝑛-1)) \* 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑋<sub>𝑖</sub> - 𝑋̅\]<sup>2</sup><font style="color: rgb(128,128,128);">\# definition of </font>[[Sample Variance - Sample Standard Deviation - Adjusted Sample Variance - Adjusted Sample Standard Deviation|sample variance]]

The [[Sampling Distribution - Finite-Sample Distribution|sampling distribution]] of above estimator depends on the sample size:
- for large sample size, estimator is approximately [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|Normal]]
- for small sample size, estimator is [[Chi-Square Distribution|Chi-Square]]

# Large Sample Size

The summands \[𝑋<sub>𝑖</sub> - 𝑋̅\]<sup>2</sup> are not quite independent, as the [[Central Limit Theorem (CLT)]] requires, because they all depend on 𝑋̅. Nevertheless, the distribution of 𝑠<sup>2</sup> is approximately [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|Normal]] under mild conditions when the sample size is large.
# Small Sample Size

for small to moderate sample sizes, the [[Sampling Distribution - Finite-Sample Distribution|sampling distribution]] of 𝑠<sup>2</sup> is not Normal. It is not even symmetric. Indeed, why should it be symmetric if 𝑠<sup>2</sup> is always non-negative!

When observations {𝑋<sub>1</sub> , ..., 𝑋<sub>𝑛</sub>} are independent and [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|Normal]] with 𝑉𝑎𝑟(𝑋<sub>𝑖</sub>) = 𝜎<sup>2</sup>, the following equation

![[Sampling Distribution of Sample Variance／Standard Deviation - Sample Variance／Standard-Deviation Distribution﻿/sample-variance-sampling-distribution.png|301]]

exhibits [[Chi-Square Distribution|Chi-Square Distribution]] with (n − 1) degrees of freedom
# Derivation

> [!expand]- Click here to expand...
> Based on: [https://online.stat.psu.edu/stat414/lesson/26/26.3](https://online.stat.psu.edu/stat414/lesson/26/26.3)
>
> Let's turn our attention to finding the sampling distribution of the sample variance. The following theorem will do the trick for us!
> ### Theorem
> - 𝑋<sub>1</sub>,𝑋<sub>2</sub>,…,𝑋<sub>𝑛</sub> are observations of a random sample of size 𝑛 from the normal distribution 𝑁(𝜇,𝜎<sup>2</sup>)
> - 𝑋̅ = 1/𝑛 𝛴<sub>1≤𝑖≤𝑛</sub>𝑋<sub>𝑖</sub> is the sample mean of the 𝑛 observations, and
> - 𝑠<sup>2</sup>= 1/(𝑛−1) 𝛴<sub>1≤𝑖≤𝑛</sub>(𝑋<sub>𝑖</sub> - 𝑋̅)<sup>2</sup> is the sample variance of the 𝑛 observations.
>
> Then:
> 1. 𝑋̅ and 𝑠<sup>2</sup> are independent
> 2. (𝑛−1)𝑠<sup>2</sup>/𝜎<sup>2</sup> = \[𝛴<sub>1≤𝑖≤𝑛</sub>(𝑋<sub>𝑖</sub> - 𝑋̅)<sup>2</sup>\] / 𝜎<sup>2</sup>\~ 𝒳<sup>2</sup><sub>(𝑛-1)</sub> <font style="color: rgb(122,134,154);">\# [[Chi-Square Distribution|chi-square distribution]] with degree of freedom (𝑛-1)</font>
>
> ### Proof
>
> The proof of number 1 is quite easy. Errr, actually not! It is quite easy in this course, because it is beyond the scope of the course. So, we'll just have to state it without proof.
>
> Now for proving number 2. This is one of those proofs that you might have to read through twice... perhaps reading it the first time just to see where we're going with it, and then, if necessary, reading it again to capture the details. We're going to start with a function which we'll call 𝑊:
> - $W = \sum_{i=1}^n (\frac{X_i - 𝜇}{𝜎})^2$
>
> Now, we can take 𝑊 and do the trick of adding 0 to each term in the summation. Doing so, of course, doesn't change the value of 𝑊:
> - $W = \sum_{i=1}^n (\frac{(X_i - \overline{X}) + (\overline{X} - 𝜇)}{𝜎})^2$
>
> As you can see, we added 0 by adding and subtracting the sample mean to the quantity in the numerator. Now, let's square the term. Doing just that, and distributing the summation, we get:
> - $W = \sum_{i=1}^n (\frac{X_i - \overline{X}}{𝜎})^2 + \sum_{i=1}^n (\frac{X_i - 𝜇}{𝜎})^2 + 2(\frac{\overline{X} - 𝜇}{𝜎^2}) \sum_{i=1}^n(X_i - \overline{X})$
>
> But the last term is 0 so, 𝑊 reduces to:
> - $W = \sum_{i=1}^n (\frac{X_i - \overline{X}}{𝜎})^2 + \sum_{i=1}^n (\frac{X_i - 𝜇}{𝜎})^2$
>
> We can do a bit more with the first term of 𝑊. As an aside, if we take the definition of the sample variance:
> - $s^2 = \frac{1}{n-1} \sum_{i=1}^n (X_i - \overline{X})^2$
>
> and multiply both sides by (𝑛−1), we get:
> - $(n-1)s^2 = \sum_{i=1}^n (X_i - \overline{X})^2$
>
> So, the numerator in the first term of 𝑊 can be written as a function of the sample variance. That is:
> - $W = \sum_{i=1}^n (\frac{X_i - 𝜇}{𝜎})^2 = \frac{(n - 1)s^2}{𝜎^2} + \frac{n(\overline{X} - 𝜇)^2}{𝜎^2}$
>
> Okay, let's take a break here to see what we have. We've taken the quantity on the left side of the above equation, added 0 to it, and showed that it equals the quantity on the right side. Now, what can we say about each of the terms. Well, the term on the left side of the equation:
> - $\sum_{i=1}^n(\frac{X_i - 𝜇}{𝜎})^2$
>
> is a sum of 𝑛 independent chi-square random variables. That's because we have assumed that 𝑋<sub>1</sub>,𝑋<sub>2</sub>,…,𝑋<sub>𝑛</sub> are observations of a random sample of size 𝑛 from the normal distribution 𝑁(𝜇,𝜎<sup>2</sup>). Therefore:
> - $\frac{X_i - 𝜇}{𝜎}$
>
> follows a standard normal distribution. Now, recall that if we square a standard normal random variable, we get a chi-square random variable with 1 degree of freedom. So, again:
> - $\sum_{i = 1}^n (\frac{X_i - 𝜇}{𝜎})^2$
>
> is a sum of 𝑛 independent chi-square random variables. Our work from the previous lesson then tells us that the sum is a chi-square random variable with 𝑛 degrees of freedom. Therefore, the moment-generating function of 𝑊 is the same as the moment-generating function of a chi-square(<em>n</em>) random variable, namely:
> - $M_W(t) = (1 - 2t)^{-n/2}$
>
> for t \< 1/2. Now, the second term of 𝑊, on the right side of the equals sign, that is:
> - $\frac{n(\overline{X} - 𝜇)^2}{𝜎^2}$
>
> is a chi-square(1) random variable. That's because the sample mean is normally distributed with mean 𝜇 and variance 𝜎<sup>2</sup>/𝑛. Therefore:
> - $Z = \frac{\overline{X} - 𝜇}{𝜎/\sqrt{n}} \sim\ N(0,1)$
>
> is a standard normal random variable. So, if we square 𝑍, we get a chi-square random variable with 1 degree of freedom:
> - $Z^2 = \frac{n(\overline{X} - 𝜇)^2}{𝜎^2} \sim\ 𝒳^2(1)$
>
> And therefore the moment-generating function of 𝑍<sup>2</sup> is:
> - $M_{Z^2}(t) = (1 - 2t)^{-1/2}$
>
> for 𝑡 \< 1/2. Let's summarize again what we know so far. 𝑊 is a chi-square(<em>n</em>) random variable, and the second term on the right is a chi-square(1) random variable:
> > [!list-indent-undo]
> > > [!indent]
> > > ![[Sampling Distribution of Sample Variance／Standard Deviation - Sample Variance／Standard-Deviation Distribution﻿/1.png|350]]
>
> Now, let's use the uniqueness property of moment-generating functions. By definition, the moment-generating function of 𝑊 is:
> - $M_W(t) = E(e^{tW}) = E[e^{t((n-1)s^2/𝜎^2 + Z^2)}]$
>
> Using what we know about exponents, we can rewrite the term in the expectation as a product of two exponent terms:
> - $E(e^{tW}) = E[e^{t((n-1)s^2/𝜎^2)}·e^{tZ^2)}] = M_{(n-1)s^2/𝜎^2}(t)·M_{Z^2}(t)$
>
> The last equality in the above equation comes from the independence between 𝑋̅ and 𝑠<sup>2</sup>. That is, if they are independent, then functions of them are independent. Now, let's substitute in what we know about the moment-generating function of 𝑊 and of 𝑍<sup>2</sup>. Doing so, we get:
> - $(1-2t)^{-n/2} = M_{(n-1)s^2/𝜎^2}(t)·(1-2t)^{-1/2}$
>
> Now, let's solve for the moment-generating function of (𝑛−1)𝑠<sup>2</sup>/𝜎<sup>2</sup>, whose distribution we are trying to determine. Doing so, we get:
> - $M_{(n-1)s^2/𝜎^2}(t) = (1-2t)^{-n/2} · (1 - 2t)^{1/2}$
>
> Adding the exponents, we get:
> - $M_{(n-1)s^2/𝜎^2}(t) = (1 - 2t)^{-(n-1)/2}$
>
> for 𝑡 \< 1/2. But, oh, that's the moment-generating function of a chi-square random variable with 𝑛−1 degrees of freedom. Therefore, the uniqueness property of moment-generating functions tells us that (𝑛−1)𝑠<sup>2</sup>/𝜎<sup>2</sup> must be a a chi-square random variable with 𝑛−1 degrees of freedom. That is:
> - $\frac{(n-1)s^2}{𝜎^2} = \frac{\sum_{i=1}{n}(X_i - \overline{X})^2}{𝜎^2} \sim\ 𝒳^2_{(n-1)}$
>
> as was to be proved! And, to just think that this was the easier of the two proofs
>
> Before we take a look at an example involving simulation, it is worth noting that in the last proof, we proved that, when sampling from a normal distribution:
> - $\frac{\sum_{i=1}^{n}(X_i - 𝜇)^2}{𝜎^2} \sim\ 𝒳^2_{(n)}$
>
> but:
> - $\frac{\sum_{i=1}^{n}(X_i - \overline{X})^2}{𝜎^2} = \frac{(n-1)s^2}{𝜎^2} \sim\ 𝒳^2_{(n)}$
>
> The only difference between these two summations is that in the first case, we are summing the squared differences from the population mean 𝜇, while in the second case, we are summing the squared differences from the sample mean 𝑋̅. What happens is that when we estimate the unknown population mean 𝜇 with 𝑋̅ we "lose" one degree of freedom. This is generally true... a degree of freedom is lost for each parameter estimated in certain chi-square random variables.
