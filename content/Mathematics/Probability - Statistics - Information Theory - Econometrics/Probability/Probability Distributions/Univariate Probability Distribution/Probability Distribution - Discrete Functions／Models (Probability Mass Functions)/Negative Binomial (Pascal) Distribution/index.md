---
title: "Negative Binomial (Pascal) Distribution"
created: 2021-09-13T05:27:30.561-05:00
modified: 2023-10-23T16:34:46.218-05:00
parent: "[[Probability Distribution - Discrete Functions／Models (Probability Mass Functions)]]"
children: []
---
In a sequence of independent [[Bernoulli Distribution|Bernoulli trials]], the number of trials needed to obtain 𝑘 successes has <strong>Negative Binomial (Pascal) Distribution</strong>

<strong>Negative Binomial Distribution</strong> has two parameters:
- 𝑘 = number of needed successes
- 𝑝 = probability of success

With 𝑘=1, it becomes a [[Geometric Distribution]]

A Negative Binomial Variable 𝑿 can be represented as a sum of 𝑘 independent Geometric Variables (𝑋<sub>1</sub>+ . . . + 𝑋<sub>𝑘</sub>):
- 𝑿 = 𝑋<sub>1</sub>+ . . . + 𝑋<sub>𝑘</sub>

# Probability Mass Function
- 𝐏(𝑋=𝑥) = 𝐏{ the 𝑥<sup>𝑡ℎ</sup> Bernoulli trial results in the 𝑘<sup>𝑡ℎ</sup> success }
- 𝐏(𝑋=𝑥) = 𝐏{ (𝑘-1) successes in the first (𝑥-1) Bernoulli trials AND the last Bernoulli trial is success }
- 𝐏(𝑋=𝑥) = <font style="color: rgb(255,102,0);">𝐏{ (𝑘-1) successes in the first (𝑥-1) trials }</font> <font style="color: rgb(0,128,0);">𝐏{ the last trial is success }</font>
- 𝐏(𝑋=𝑥) = <font style="color: rgb(255,102,0);">𝐏(𝐗=𝑘-1; 𝑝,𝑛=𝑥-1)</font> <font style="color: rgb(0,128,0);">𝐏(𝑋=𝑥) <font style="color: rgb(122,134,154);">\# where:</font></font>
	- <font style="color: rgb(0,128,0);"><font style="color: rgb(255,102,0);">𝐏(𝐗=𝑘-1; 𝑝,𝑛=𝑥-1) - Binomial Distribution</font></font>
	- <font style="color: rgb(0,128,0);">𝐏(𝑋=𝑥) - Bernoulli Distribution</font>
- 𝐏(𝑋=𝑥) = <font style="color: rgb(255,102,0);"><strong>\[</strong>(𝑥-1) choose (𝑘-1)<strong>\]</strong> (1-𝑝)<sup>𝑥-𝑘</sup>𝑝<sup>𝑘-1</sup></font><font style="color: rgb(0,128,0);">𝑝</font>
- 𝐏(𝑋=𝑥) = <strong>\[</strong>(𝑥-1) [[Combination Without Replacement (Binomial Coefficient - n Choose k)|choose]] (𝑘-1)<strong>\]</strong> (1-𝑝)<sup>𝑥-𝑘</sup>𝑝<sup>𝑘</sup>
- 𝐏(𝑋=𝑥) = <strong>\[</strong>(𝑥-1)!/\[(𝑘-1)!(𝑥-𝑘)!\]<strong>\]</strong> (1-𝑝)<sup>𝑥-𝑘</sup>𝑝<sup>𝑘</sup>

# Expectation
𝐄\[𝑿\] = 𝑘/𝑝

> [!expand]- Click here to expand...
> the number of trials until the 𝑘<sup>𝑡ℎ</sup> success is the summation of the following:
> - Geometric number of trials 𝑋<sub>1</sub>until the first success
> - Geometric number of trials 𝑋<sub>2</sub>until the next success
> - ...
> - Geometric number of trials 𝑋<sub>𝑘</sub> until the next success
>
> 𝐄\[𝑿\] = 𝐄\[𝑋<sub>1</sub> + ... + 𝑋<sub>𝑘</sub>\] = 𝑘/𝑝
# Variance

𝑉𝑎𝑟(𝑿) = 𝑘(1 - 𝑝) / 𝑝<sup>2</sup>

> [!expand]- Click here to expand...
> - 𝑉𝑎𝑟(𝑿) = 𝑉𝑎𝑟(𝑋<sub>1</sub> + ... + 𝑋<sub>𝑘</sub>) <font style="color: rgb(122,134,154);">\# 𝑿 is a summation of [[Geometric Distribution|geometric random variables]]</font>
> - 𝑉𝑎𝑟(𝑿) = 𝑉𝑎𝑟(𝑋<sub>1</sub>) + ... + 𝑉𝑎𝑟(𝑋<sub>𝑘</sub>) <font style="color: rgb(122,134,154);">\# see [[Properties of Variance|variance properties]]: </font><font style="color: rgb(122,134,154);">𝑉𝑎𝑟(𝑋 + 𝑌) = 𝑉𝑎𝑟(𝑋) + 𝑉𝑎𝑟(𝑌) + 2𝐶𝑜𝑣(𝑋,𝑌), covariance = 0</font>
> - 𝑉𝑎𝑟(𝑿) = \[(1-𝑝) / 𝑝<sup>2</sup>\] + ... + \[(1-𝑝) / 𝑝<sup>2</sup>\]
> - 𝑉𝑎𝑟(𝑿) = 𝑘(1 - 𝑝) / 𝑝<sup>2</sup>
# Subpages
- [[Negative Binomial Distribution vs Binomial Distribution]]
- [[Geometric Distribution vs Negative Binomial Distribution]]

# TODO
###### Negative Binomial Distribution \#1
- the number of trials need to obtain k successes
- is the sum of k i.i.d. geometric distributions
- P(X=x) = (x-1 choose k-1) p^k (1-p)^(x-k)
- E\[X\]   = k/p
- Var\[X\] = k(1-p) / p^2
- M\_X(t) = \[ pe^t / (1 - qe^t) \]^k

###### Negative Binomial Distribution \#2
- the number of failures before k successes
- P(X=x) = (x+k-1 choose x) (1-p)^x p^k
- E\[X\]   = k(1-p)/p
- Var\[X\] = k(1-p)/p^2
- M\_X(t) = \[ p / (1 - qe^t) \]^k
