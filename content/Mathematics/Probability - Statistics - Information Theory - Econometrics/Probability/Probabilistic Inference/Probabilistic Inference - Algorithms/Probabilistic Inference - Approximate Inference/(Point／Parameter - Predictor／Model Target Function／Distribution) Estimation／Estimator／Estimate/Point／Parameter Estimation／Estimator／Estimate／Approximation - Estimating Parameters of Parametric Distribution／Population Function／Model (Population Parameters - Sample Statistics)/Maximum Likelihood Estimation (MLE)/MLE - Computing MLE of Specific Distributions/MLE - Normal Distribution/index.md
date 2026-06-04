---
title: "MLE - Normal Distribution"
created: 2021-09-13T05:28:06.709-05:00
modified: 2026-05-21T01:35:58.250-05:00
parent: "[[MLE - Computing MLE of Specific Distributions]]"
children: []
---
###### [[Maximum Likelihood Estimation (MLE)]] for [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|Normal Distribution]]

Let {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>} be 𝑛 samples drawn from a [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|Normal(𝜇,𝜎) Distribution]]

How to estimate parameters <em>𝜇</em> and 𝜎 using [[Maximum Likelihood Estimation (MLE)|MLE method]]?

the [[Likelihood Function - Log-Likelihood Function - Score Function|log-likelihood function]] 𝓛(𝜃) of an Normal(<em>𝜇</em>,𝜎) Distribution is as follows
- 𝓛(𝜃) → 𝓛(<em>𝜇</em>,𝜎) = -𝑛·𝑙𝑛(𝜎\*√(2𝜋)) - 𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑋<sub>𝑖</sub>-<em>𝜇</em>)<sup>2</sup>/(2𝜎<sup>2</sup>)\]<font style="color: rgb(128,128,128);"> \# click here for [[Log-Likelihood Function - Normal Distribution|step-by-step computation]] </font>

###### Estimating <em>𝜇</em>
- <em>𝜇<sub>𝑀𝐿𝐸</sub></em> = (𝛴<sub>1≤𝑖≤𝑛</sub>𝑋<sub>𝑖</sub>) / 𝑛
- <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);"><em>𝜇<sub>𝑀𝐿𝐸</sub></em> = 𝑋̅</font><font style="color: rgb(60,64,67);"><font style="color: rgb(128,128,128);"> \# where 𝑋̅</font><font style="color: rgb(128,128,128);"> is the</font> [[Sample Mean|sample mean]]</font></font>

> [!expand]- computation
> differentiate <font style="color: rgb(255,0,0);">with respect to <em>𝜇</em></font>
> - 𝓛'(<em>𝜇</em>,𝜎) = <em>𝛥</em><em>𝜇</em> <strong>\[</strong>-𝑛·𝑙𝑛(𝜎\*√(2𝜋)) - 𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑋<sub>𝑖</sub>-<em>𝜇</em>)<sup>2</sup>/(2𝜎<sup>2</sup>)\]<strong>\]</strong>
> - 𝓛'(<em>𝜇</em>,𝜎) = 0 - (1/2𝜎<sup>2</sup>) 𝛴<sub>1≤𝑖≤𝑛</sub>\[<em>𝛥</em><em>𝜇 </em>(𝑋<sub>𝑖</sub>-<em>𝜇</em>)<sup>2</sup>\]
> - 𝓛'(<em>𝜇</em>,𝜎) = -(1/2𝜎<sup>2</sup>) 𝛴<sub>1≤𝑖≤𝑛</sub>\[-<em>2</em>(𝑋<sub>𝑖</sub>-<em>𝜇</em>)\]
> - 𝓛'(<em>𝜇</em>,𝜎) = (1/𝜎<sup>2</sup>) 𝛴<sub>1≤𝑖≤𝑛</sub>(𝑋<sub>𝑖</sub>-<em>𝜇</em>)
> - 𝓛'(<em>𝜇</em>,𝜎) = (1/𝜎<sup>2</sup>) \[𝛴<sub>1≤𝑖≤𝑛</sub>𝑋<sub>𝑖</sub> - 𝛴<sub>1≤𝑖≤𝑛</sub><em>𝜇</em>\]
> - 𝓛'(<em>𝜇</em>,𝜎) = (1/𝜎<sup>2</sup>) \[(𝛴<sub>1≤𝑖≤𝑛</sub>𝑋<sub>𝑖</sub>) - (𝑛<em>𝜇</em>)\]
>
> equate to 0 and solve for <em>𝜇</em>
> - 𝓛'(<em>𝜇</em>,𝜎) = (1/𝜎<sup>2</sup>) \[(𝛴<sub>1≤𝑖≤𝑛</sub>𝑋<sub>𝑖</sub>) - (𝑛<em>𝜇</em>)\]
> - 0 = (1/𝜎<sup>2</sup>) \[(𝛴<sub>1≤𝑖≤𝑛</sub>𝑋<sub>𝑖</sub>) - (𝑛<em>𝜇</em>)\]
> - 0 = (𝛴<sub>1≤𝑖≤𝑛</sub>𝑋<sub>𝑖</sub>) - (𝑛<em>𝜇</em>)
> - 𝑛<em>𝜇</em> = (𝛴<sub>1≤𝑖≤𝑛</sub>𝑋<sub>𝑖</sub>)
> - <em>𝜇<sub>𝑀𝐿𝐸</sub></em> = (𝛴<sub>1≤𝑖≤𝑛</sub>𝑋<sub>𝑖</sub>) / 𝑛
> - <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);"><em>𝜇<sub>𝑀𝐿𝐸</sub></em> = 𝑋̅</font><font style="color: rgb(60,64,67);"><font style="color: rgb(128,128,128);"> \# where 𝑋̅</font><font style="color: rgb(128,128,128);"> is the</font> [[Sample Mean|sample mean]]</font></font>
###### Estimating 𝜎
- 𝜎<em><sub>𝑀𝐿𝐸</sub></em> = √<strong>(</strong>(1/𝑛)𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑋<sub>𝑖</sub>-<em>𝜇</em>)<sup>2</sup>\]<strong>)</strong>
- 𝜎<em><sub>𝑀𝐿𝐸</sub></em> = √(𝑠<sup>2</sup>) <font style="color: rgb(128,128,128);">\# where 𝑠<sup>2</sup>is the</font> [[Sample Variance - Sample Standard Deviation - Adjusted Sample Variance - Adjusted Sample Standard Deviation|sample variance]]

> [!expand]- computation
> differentiate <font style="color: rgb(255,0,0);">with respect to 𝜎</font>
> - 𝓛'(<em>𝜇</em>,𝜎) = <em>𝛥</em>𝜎 <strong>\[</strong>-𝑛·𝑙𝑛(𝜎\*√(2𝜋)) - 𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑋<sub>𝑖</sub>-<em>𝜇</em>)<sup>2</sup>/(2𝜎<sup>2</sup>)\]<strong>\]</strong>
> - 𝓛'(<em>𝜇</em>,𝜎) = <em>𝛥</em>𝜎 <strong>\[</strong>-𝑛·𝑙𝑛(𝜎) - 𝑛·𝑙𝑛(√(2𝜋)) - 𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑋<sub>𝑖</sub>-<em>𝜇</em>)<sup>2</sup>/(2𝜎<sup>2</sup>)\]<strong>\]</strong>
> - 𝓛'(<em>𝜇</em>,𝜎) = -𝑛/𝜎 - 0 - 𝛴<sub>1≤𝑖≤𝑛</sub>\[<em>𝛥</em>𝜎 (𝑋<sub>𝑖</sub>-<em>𝜇</em>)<sup>2</sup>/(2𝜎<sup>2</sup>)\]
> - 𝓛'(<em>𝜇</em>,𝜎) = -𝑛/𝜎 - 𝛴<sub>1≤𝑖≤𝑛</sub>\[-2(𝑋<sub>𝑖</sub>-<em>𝜇</em>)<sup>2</sup>/(2𝜎<sup>3</sup>)\]
> - 𝓛'(<em>𝜇</em>,𝜎) = -𝑛/𝜎 +𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑋<sub>𝑖</sub>-<em>𝜇</em>)<sup>2</sup>/(𝜎<sup>3</sup>)\]
> - 𝓛'(<em>𝜇</em>,𝜎) = (1/(𝜎<sup>3</sup>))𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑋<sub>𝑖</sub>-<em>𝜇</em>)<sup>2</sup>\] - 𝑛/𝜎
>
> equate to 0 and solve for 𝜎
> - 𝓛'(<em>𝜇</em>,𝜎) = (1/(𝜎<sup>3</sup>))𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑋<sub>𝑖</sub>-<em>𝜇</em>)<sup>2</sup>\] - 𝑛/𝜎
> - 0 = (1/(𝜎<sup>3</sup>))𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑋<sub>𝑖</sub>-<em>𝜇</em>)<sup>2</sup>\] - 𝑛/𝜎
> - 𝑛/𝜎 = (1/(𝜎<sup>3</sup>))𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑋<sub>𝑖</sub>-<em>𝜇</em>)<sup>2</sup>\]
> - (𝜎<sup>3</sup>)𝑛/𝜎 = 𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑋<sub>𝑖</sub>-<em>𝜇</em>)<sup>2</sup>\]
> - (𝜎<sup>2</sup>)𝑛 = 𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑋<sub>𝑖</sub>-<em>𝜇</em>)<sup>2</sup>\]
> - 𝜎<sup>2</sup> = (1/𝑛)𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑋<sub>𝑖</sub>-<em>𝜇</em>)<sup>2</sup>\]
> - 𝜎<em><sub>𝑀𝐿𝐸</sub></em> = √<strong>(</strong>(1/𝑛)𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑋<sub>𝑖</sub>-<em>𝜇</em>)<sup>2</sup>\]<strong>)</strong>
> - 𝜎<em><sub>𝑀𝐿𝐸</sub></em> = √(𝑠<sup>2</sup>) <font style="color: rgb(128,128,128);">\# where 𝑠<sup>2</sup>is the</font> [[Sample Variance - Sample Standard Deviation - Adjusted Sample Variance - Adjusted Sample Standard Deviation|sample variance]]
# Resources

![](https://www.youtube.com/watch?v=Dn6b9fCIUpM)
