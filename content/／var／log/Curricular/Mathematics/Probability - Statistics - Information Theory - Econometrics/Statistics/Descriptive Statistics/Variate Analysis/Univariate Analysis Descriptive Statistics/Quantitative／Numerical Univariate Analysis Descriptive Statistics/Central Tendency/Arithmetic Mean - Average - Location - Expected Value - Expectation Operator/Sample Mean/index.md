---
title: "Sample Mean"
created: 2021-09-13T05:28:48.127-05:00
modified: 2022-02-23T03:03:20.489-06:00
parent: "[[Arithmetic Mean - Average - Location - Expected Value - Expectation Operator]]"
children:
  - "[[Sampling Distribution of Sample Mean - Sample Mean Distribution]]"
---
# Sample Mean - Intuition

> [!expand]- Click here to expand...
> Let's say we want the [[Arithmetic Mean - Average - Location - Expected Value - Expectation Operator|mean]] height of 1 trillion people.
>
> There are 2 methods:
> 1. population mean - measure the height of all 1 trillion people, sum them together then divide by 1 trillion
> 2. sample mean - get a sample of 100 people, measure the height of those 100 people, sum them together then divide by 100
>
> The first method will get you the actual mean <em>𝜇</em> height as it is the definition of mean over a population. However, it is impractical to measure 1 trillion people.
>
> The second method is much easier, we only need to measure the height of 100 people. However, this sample mean may not accurately reflect the population mean. How well the sample mean reflects the population mean is through calculating sample mean's:
> - expected value - denoted as 𝐄(sample mean) = ?
> - variance - denoted as 𝐕𝐚𝐫(sample mean) = ?
>
> we want:
> - 𝐄(sample mean) = population mean
> - 𝐕𝐚𝐫(sample mean) = 0
>
> Not surprisingly, the more samples we take from the population to calculate to sample mean:
> - the closer 𝐄(sample mean) becomes the population mean
> - the closer 𝐕𝐚𝐫(sample mean) becomes 0
>
> below goes through the mathematics on why this is the case
# Sample Mean - Definition / Formula
- sample mean (𝑋̅) = \[<em>𝑋</em><sub>1</sub>+ <em>𝑋</em><sub>2</sub>+ ... + <em>𝑋</em><sub><em>𝑛</em></sub>\] / 𝑛

where:
- each<em> 𝑋</em><sub>𝑖</sub>is a random sample drawn from a population
- 𝑛 is the sample size

in order the draw conclusions about 𝑋̅ (such as the expected value of 𝑋̅, variance of 𝑋̅, etc) <strong>AT LEAST 1</strong> of the following cases must occur:
- samples are drawn from a population/distribution that is [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|Normal(unknown mean = 𝜇, unknown variance = 𝜎2)]]
- sample size 𝑛 is large (no restriction on what distribution the population exhibits)

# Sample Mean - Expected Value / Mean
𝐄(sample mean 𝑋̅) = <em>𝜇</em>

the expected value/mean of the sample mean 𝑋̅ is the population mean <em>𝜇</em>. That is, we have shown that the mean of 𝑋̅ is the same as the mean of the individual 𝑋<sub>i</sub>

> [!expand]- proof
> - 𝐄(sample mean 𝑋̅) = 𝐄(\[<em>𝑋</em><sub>1</sub>+ <em>𝑋</em><sub>2</sub>+ ... + <em>𝑋</em><sub><em>𝑛</em></sub>\] / 𝑛) <font style="color: rgb(128,128,128);">\# substitution of sample mean formula</font>
> - 𝐄(sample mean 𝑋̅) = 1/𝑛 (𝐄\[<em>𝑋</em><sub>1</sub>\] + 𝐄\[<em>𝑋</em><sub>2</sub>\] + ... + 𝐄\[<em>𝑋</em><sub><em>𝑛</em></sub>\]) <font style="color: rgb(128,128,128);">\# using the linear operator property of expectation</font>
> - 𝐄(sample mean 𝑋̅) = 1/𝑛 (<em>𝜇</em> + <em>𝜇</em> + ... + <em>𝜇</em>) <font style="color: rgb(128,128,128);">\# <em>𝑋<sub>i</sub></em> are identically distributed, which means they have the same mean <em>𝜇</em></font>
> - <font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);">𝐄(sample mean <font style="color: rgb(60,64,67);">𝑋̅</font>) = 1/<font style="color: rgb(0,0,0);">𝑛</font> (<font style="color: rgb(0,0,0);">𝑛</font><em>𝜇</em></font><font style="color: rgb(0,0,0);">) <font style="color: rgb(128,128,128);">\# there are 𝑛 <em>𝜇</em>'s</font></font></font>
> - <font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);">𝐄(sample mean 𝑋̅) = <em>𝜇</em></font></font>
# Sample Mean - Variance
<font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);">𝐕𝐚𝐫(sample mean </font><font style="color: rgb(60,64,67);">𝑋̅</font><font style="color: rgb(0,0,0);">) = <font style="color: rgb(0,0,0);">𝜎</font><sup>2</sup>/<font style="color: rgb(0,0,0);">𝑛</font></font></font></font></font></font></font></font></font></font></font></font></font>

therefore, as the sample size 𝑛 increases the 𝐕𝐚𝐫(sample mean 𝑋̅) goes to 0. This is what we want!

> [!expand]- proof
> - 𝐕𝐚𝐫(sample mean 𝑋̅) = 𝐕𝐚𝐫(\[<em>𝑋</em><sub>1</sub>+ <em>𝑋</em><sub>2</sub>+ ... + <em>𝑋</em><sub><em>𝑛</em></sub>\] / 𝑛) <font style="color: rgb(128,128,128);">\# substitution of sample mean </font><font style="color: rgb(128,128,128);">formula</font>
> - <font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);">𝐕𝐚𝐫(sample mean </font><font style="color: rgb(60,64,67);">𝑋̅</font><font style="color: rgb(0,0,0);">) = </font><font style="color: rgb(0,0,0);">𝐕𝐚𝐫((1/<font style="color: rgb(0,0,0);">𝑛</font>)<em>𝑋</em><sub>1</sub>+ (1/<font style="color: rgb(0,0,0);">𝑛</font>)<em>𝑋</em><sub>2</sub>+ ... + (1/<font style="color: rgb(0,0,0);">𝑛</font>)<em>𝑋</em><sub><em><font style="color: rgb(0,0,0);">𝑛</font></em></sub>) <font style="color: rgb(128,128,128);">\# rewrite as a linear combination of<em> 𝑋</em><sub>i</sub>'s</font></font></font>
> - <font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);">𝐕𝐚𝐫(sample mean <font style="color: rgb(60,64,67);">𝑋̅</font>) = (1/<font style="color: rgb(0,0,0);">𝑛</font><sup>2</sup>)𝐕𝐚𝐫(<em>𝑋</em><sub>1</sub>) + (1/<font style="color: rgb(0,0,0);">𝑛</font><sup>2</sup>)𝐕𝐚𝐫(<em>𝑋</em><sub>2</sub>) + ... + (1/<font style="color: rgb(0,0,0);">𝑛</font><sup>2</sup>)𝐕𝐚𝐫(<em>𝑋</em><sub><em><font style="color: rgb(0,0,0);">𝑛</font></em></sub>) <font style="color: rgb(128,128,128);">\# some variance theorem</font></font></font></font></font>
> - 𝐕𝐚𝐫(sample mean 𝑋̅) = (1/𝑛<sup>2</sup>)<em>𝜎</em><sup>2</sup> + (1/𝑛<sup>2</sup>)<em>𝜎</em><sup>2</sup> + ... + (1/𝑛<sup>2</sup>)𝜎<sup>2</sup><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"> <font style="color: rgb(128,128,128);">\# </font><font style="color: rgb(128,128,128);"><em>𝑋<sub>i</sub></em></font><font style="color: rgb(128,128,128);"> are identically distributed, which means they have the same mean <em>𝜎</em><sup>2</sup></font></font></font></font></font></font></font>
> - <font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);">𝐕𝐚𝐫(sample mean <font style="color: rgb(60,64,67);">𝑋̅</font>) = (<font style="color: rgb(0,0,0);">𝑛</font><font style="color: rgb(0,0,0);">𝜎</font><sup>2</sup><font style="color: rgb(0,0,0);">/𝑛</font><sup>2</sup>)<font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"> <font style="color: rgb(128,128,128);">\# there are 𝑛 𝜎<sup>2</sup>'s</font></font></font></font></font></font></font></font></font></font></font>
> - <font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);">𝐕𝐚𝐫(sample mean </font><font style="color: rgb(60,64,67);">𝑋̅</font><font style="color: rgb(0,0,0);">) = <font style="color: rgb(0,0,0);">𝜎</font><sup>2</sup><font style="color: rgb(0,0,0);">/𝑛</font></font></font></font></font></font></font></font></font></font></font></font></font>
# Sample Mean - Standard Deviation / Standard Error
- <font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(0,0,0);">𝐒𝐄(<font style="color: rgb(0,0,0);">sample mean </font><font style="color: rgb(60,64,67);">𝑋̅</font>) = </font>𝐒𝐭𝐝(sample mean </font><font style="color: rgb(60,64,67);">𝑋̅</font><font style="color: rgb(0,0,0);">) = <font style="color: rgb(0,0,0);">𝑟𝑜𝑜𝑡(𝜎</font><sup>2</sup><font style="color: rgb(0,0,0);">/𝑛)</font></font></font></font></font></font></font></font></font></font></font></font></font>
- 𝐒𝐄ˆ(sample mean 𝑋̅) = 𝑟𝑜𝑜𝑡(𝑠<sup>2</sup>/𝑛)

<font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);">where:</font></font></font></font></font></font></font></font></font></font></font></font>
- <font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(0,0,0);"><font style="color: rgb(0,0,0);"><font style="color: rgb(0,0,0);">𝐒𝐄(...) - is the [[Standard Error (SE) - Estimated Standard Error (SEˆ)|standard error]] of the sample mean <font style="color: rgb(60,64,67);">𝑋̅</font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font>
- <font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(0,0,0);"><font style="color: rgb(0,0,0);">𝐒𝐄</font><font style="color: rgb(0,0,0);">ˆ</font><font style="color: rgb(0,0,0);">(...) - is the [[Standard Error (SE) - Estimated Standard Error (SEˆ)|estimated standard error]] of the sample mean <font style="color: rgb(60,64,67);">𝑋̅</font></font></font></font></font></font></font></font></font></font></font></font></font></font></font>
- <font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(0,0,0);">𝑠 - is the [[Sample Variance - Sample Standard Deviation - Adjusted Sample Variance - Adjusted Sample Standard Deviation|sample standard deviation]] of sample data</font></font></font></font></font></font></font></font></font></font></font></font></font>

<font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(0,0,0);">proof of <font style="color: rgb(0,0,0);">𝐒𝐭𝐝(sample mean </font><font style="color: rgb(60,64,67);">𝑋̅</font><font style="color: rgb(0,0,0);">) = 𝑟𝑜𝑜𝑡(𝜎<sup>2</sup>/𝑛)</font></font></font></font></font></font></font></font></font></font></font></font></font></font>

> [!expand]- proof
> - 𝐒𝐄(sample mean 𝑋̅) = 𝑟𝑜𝑜𝑡(𝐕𝐚𝐫(sample mean 𝑋̅))
> - 𝐒𝐄(sample mean 𝑋̅) = 𝑟𝑜𝑜𝑡(𝜎<sup>2</sup>/𝑛)
# Sample Mean - Distribution
[[Sampling Distribution of Sample Mean - Sample Mean Distribution]]
