---
title: "Sample Proportion"
created: 2021-09-13T05:28:46.351-05:00
modified: 2023-09-01T11:45:50.842-05:00
parent: "[[Proportion]]"
children: []
---
Let's say there is some [[Bernoulli Distribution|Bernoulli random variable]] with an unknown [[Statistics - Terminology|parameter]] 𝑝

We would like to estimate 𝑝

This is similar to the [[Sample Mean|sample mean]]
# Sample Proportion - Formula / Definition

Let sample {𝑋<sub>1</sub>, 𝑋<sub>2</sub>, ... , 𝑋<sub>𝑛</sub>} be collected from [[Bernoulli Distribution|Bernoulli]] population with parameter 𝑝

Estimate the population proportion 𝑝 = 𝐄(𝑋<sub>𝑖</sub>) by a sample proportion
- 𝑝̂ = \[𝑋<sub>1</sub> + 𝑋<sub>2</sub> + ... + 𝑋<sub>𝑛</sub>\] / 𝑛
- 𝑝̂ = \[ number of 𝑋<sub>𝑖</sub>'s that equals to 1 \] / 𝑛

In order the draw conclusions about 𝑝̂ (such as the expected value of 𝑝̂, variance of 𝑝̂, etc) all the following cases must apply
- 𝑛𝑝 ≥ 10
- 𝑛(1-𝑝) ≥ 10

In other words, the sample size 𝑛 should be large
# Sample Proportion - Expected Value
<font style="color: rgb(128,128,128);"><font style="color: rgb(34,34,34);"><font style="color: rgb(0,0,0);"><font style="color: rgb(0,0,0);"><font style="color: rgb(34,34,34);">𝐄(</font><font style="color: rgb(34,34,34);">𝑝̂</font><font style="color: rgb(34,34,34);">) = <font style="color: rgb(0,0,0);">𝑝</font></font></font></font></font></font>

<font style="color: rgb(128,128,128);"><font style="color: rgb(34,34,34);"><font style="color: rgb(0,0,0);"><font style="color: rgb(0,0,0);"><font style="color: rgb(34,34,34);"><font style="color: rgb(0,0,0);"><font style="color: rgb(0,0,0);">The expected-value/mean of the sample proportion <font style="color: rgb(34,34,34);">𝑝̂</font></font><font style="color: rgb(0,0,0);"> is population proportion 𝑝</font></font></font></font></font></font></font>

> [!expand]- proof
> - 𝐄(𝑝̂) = 𝐄(\[𝑋<sub>1</sub> + 𝑋<sub>2</sub> + ... + 𝑋<sub>𝑛</sub>\] / 𝑛 <font style="color: rgb(128,128,128);">\# by definition of sample proportion 𝑝̂</font>
> - 𝐄(𝑝̂) = \[𝐄(𝑋<sub>1</sub>) + 𝐄(𝑋<sub>2</sub>) + ... + 𝐄(𝑋<sub>𝑛</sub>)\] / 𝑛 <font style="color: rgb(128,128,128);">\# using the linear operator property of expectation</font>
> - 𝐄(𝑝̂) = \[𝑝 + 𝑝 + ... + 𝑝\] / 𝑛 <font style="color: rgb(128,128,128);">\# expected value of each 𝑋<sub>𝑖</sub>is </font><font style="color: rgb(128,128,128);">𝑝 because</font> [[Bernoulli Distribution|Bernoulli distribution]]
> - 𝐄(𝑝̂) = 𝑛𝑝 / 𝑛 <font style="color: rgb(128,128,128);">\# there are n 𝑝's</font>
> - <font style="color: rgb(128,128,128);"><font style="color: rgb(34,34,34);">𝐄(</font><font style="color: rgb(34,34,34);">𝑝̂</font><font style="color: rgb(34,34,34);">) = <font style="color: rgb(0,0,0);">𝑝</font></font></font>
# Sample Proportion - Variance
<font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);">𝐕𝐚𝐫(<font style="color: rgb(34,34,34);">𝑝̂</font></font><font style="color: rgb(0,0,0);">) = <font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);">𝑝</font><font style="color: rgb(0,0,0);">(1−𝑝)</font></font><font style="color: rgb(0,0,0);">/𝑛</font></font></font></font></font></font></font></font></font></font></font></font></font>

Therefore, as the number of samples n increases the 𝐕𝐚𝐫(sample proportion 𝑝̂) goes to 0. This is what we want!

> [!expand]- proof
> - 𝐕𝐚𝐫(𝑝̂) = 𝐕𝐚𝐫(\[𝑋<sub>1</sub> + 𝑋<sub>2</sub> + ... + 𝑋<sub>𝑛</sub>\] / 𝑛) <font style="color: rgb(128,128,128);">\# substitution of sample proportion </font><font style="color: rgb(128,128,128);">formula</font>
> - <font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);">𝐕𝐚𝐫(<font style="color: rgb(34,34,34);">𝑝̂</font></font><font style="color: rgb(0,0,0);">) = </font><font style="color: rgb(0,0,0);">𝐕𝐚𝐫((1/<font style="color: rgb(0,0,0);">𝑛</font>)𝑋<sub>1</sub>+ (1/<font style="color: rgb(0,0,0);">𝑛</font>)𝑋<sub>2</sub>+ ... + (1/<font style="color: rgb(0,0,0);">𝑛</font>)𝑋<sub><font style="color: rgb(0,0,0);">𝑛</font></sub>) <font style="color: rgb(128,128,128);">\# rewrite as linear combination of 𝑋<sub>𝑖</sub>'s</font></font></font>
> - <font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);">𝐕𝐚𝐫(<font style="color: rgb(34,34,34);">𝑝̂</font>) = (1/<font style="color: rgb(0,0,0);">𝑛</font><sup>2</sup>)𝐕𝐚𝐫(𝑋<sub>1</sub>) + (1/<font style="color: rgb(0,0,0);">𝑛</font><sup>2</sup>)𝐕𝐚𝐫(𝑋<sub>2</sub>) + ... + (1/<font style="color: rgb(0,0,0);">𝑛</font><sup>2</sup>)𝐕𝐚𝐫(𝑋<sub><font style="color: rgb(0,0,0);">𝑛</font></sub>) <font style="color: rgb(128,128,128);">\# some variance theorem</font></font></font></font></font>
> - 𝐕𝐚𝐫(𝑝̂) = (1/𝑛<sup>2</sup>)<font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);">𝑝</font><font style="color: rgb(0,0,0);">(1−𝑝)</font></font> + (1/𝑛<sup>2</sup>)<font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);">𝑝</font><font style="color: rgb(0,0,0);">(1−𝑝)</font></font> + ... + (1/𝑛<sup>2</sup>)<font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);">𝑝</font><font style="color: rgb(0,0,0);">(1−𝑝)</font></font><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"> <font style="color: rgb(128,128,128);">\# variance of each 𝑋<sub>𝑖</sub><sub></sub>is 𝑝(1−𝑝)</font><font style="color: rgb(128,128,128);"> because</font> [[Bernoulli Distribution|Bernoulli distribution]]</font></font></font></font></font></font>
> - <font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);">𝐕𝐚𝐫(<font style="color: rgb(34,34,34);">𝑝̂</font>) = (<font style="color: rgb(0,0,0);">𝑛</font>𝑝(1−𝑝)/<font style="color: rgb(0,0,0);">𝑛</font><sup>2</sup>) <font style="color: rgb(128,128,128);">\# there are 𝑛</font></font></font></font></font>
> - <font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);">𝐕𝐚𝐫(<font style="color: rgb(34,34,34);">𝑝̂</font></font><font style="color: rgb(0,0,0);">) = <font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);">𝑝</font><font style="color: rgb(0,0,0);">(1−𝑝)</font></font><font style="color: rgb(0,0,0);">/𝑛</font></font></font></font></font></font></font></font></font></font></font></font></font>
# Sample Proportion - Standard Deviation / [[Standard Error (SE) - Estimated Standard Error (SEˆ)|Standard Error]]
𝐒𝐄(𝑝̂) = 𝐒𝐭𝐝(𝑝̂) = 𝑟𝑜𝑜𝑡(<font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);">𝑝</font><font style="color: rgb(0,0,0);">(1−𝑝)</font></font>/𝑛)

> [!expand]- proof
> - 𝐒𝐭𝐝(𝑝̂) = 𝑟𝑜𝑜𝑡(𝐕𝐚𝐫(𝑝̂))
> - <font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);"><font style="color: rgb(0,0,0);">𝐒𝐭𝐝</font>(<font style="color: rgb(34,34,34);">𝑝̂</font>) = <font style="color: rgb(0,0,0);">𝑟𝑜𝑜𝑡(</font><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);">𝑝</font><font style="color: rgb(0,0,0);">(1−𝑝)</font></font><font style="color: rgb(0,0,0);">/𝑛</font>)</font></font></font></font></font></font></font></font></font></font></font></font>
