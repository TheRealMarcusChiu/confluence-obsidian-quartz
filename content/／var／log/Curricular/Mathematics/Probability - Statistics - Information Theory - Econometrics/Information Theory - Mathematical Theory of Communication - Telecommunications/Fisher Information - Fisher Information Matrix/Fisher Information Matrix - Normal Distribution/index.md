---
title: "Fisher Information Matrix - Normal Distribution"
created: 2021-09-13T05:26:26.462-05:00
modified: 2021-12-21T16:16:09.713-06:00
parent: "[[Fisher Information - Fisher Information Matrix]]"
children: []
---
[[Fisher Information - Fisher Information Matrix|Fisher Information Matrix]] of [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|Normal Distribution]]

![[Fisher Information Matrix - Normal Distribution/fisher-information-matrix-for-normal-distribution.png|400]]
# Derivation

The generic Fisher Information formula is as follows:
- 𝐼(𝜃) = - 𝐄\[log-likelihood-function''(𝜃)\]

We need the [[Likelihood Function - Log-Likelihood Function - Score Function|log-likelihood function 𝐿𝐿(𝜃)]] of a [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|Normal(𝜇, 𝜎) Distribution]] which is as follows
- 𝐿𝐿(𝜃) → 𝐿𝐿(𝜇,𝜎) = -𝑛·𝑙𝑛(𝜎\*𝑠𝑞𝑟𝑡(2𝜋)) - 𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑥-𝜇)<sup>2</sup>/(2𝜎<sup>2</sup>)\]<font style="color: rgb(128,128,128);"> \# click here for [[Log-Likelihood Function - Normal Distribution|step-by-step computation]] </font>

Now we need to compute the second derivative of 𝐿𝐿(𝜇,𝜎) with matrix <font style="color: rgb(255,0,0);">TODO!</font>

> [!expand-ui]- second derivative of 𝐿𝐿(𝜇,𝜎) wrt 𝜇
> first derivative with respect to 𝜇
> - 𝐿𝐿'(𝜇,𝜎) = <em>𝛥𝜇</em> <strong>\[</strong>-𝑛·𝑙𝑛(𝜎\*𝑠𝑞𝑟𝑡(2𝜋)) - 𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑥-𝜇)<sup>2</sup>/(2𝜎<sup>2</sup>)\]<strong>\]</strong>
> - 𝐿𝐿'(𝜇,𝜎) = 0 - (1/2𝜎<sup>2</sup>) 𝛴<sub>1≤𝑖≤𝑛</sub>\[<em>𝛥𝜇</em> (𝑥-𝜇)<sup>2</sup>\]
> - 𝐿𝐿'(𝜇,𝜎) = -(1/2𝜎<sup>2</sup>) 𝛴<sub>1≤𝑖≤𝑛</sub>\[-<em>2</em>(𝑥-𝜇)\]
> - 𝐿𝐿'(𝜇,𝜎) = (1/𝜎<sup>2</sup>) 𝛴<sub>1≤𝑖≤𝑛</sub>(𝑥-𝜇)
> - 𝐿𝐿'(𝜇,𝜎) = (1/𝜎<sup>2</sup>) \[𝛴<sub>1≤𝑖≤𝑛</sub>𝑥 - 𝛴<sub>1≤𝑖≤𝑛</sub><em>𝜇</em>\]
> - 𝐿𝐿'(𝜇,𝜎) = (1/𝜎<sup>2</sup>) \[(𝛴<sub>1≤𝑖≤𝑛</sub>𝑥) - (𝑛𝜇)\]
>
> second derivative with respect to 𝜇
> - 𝐿𝐿''(𝜇,𝜎) = <em>𝛥</em><em>𝜇</em> <strong>\[</strong>(1/𝜎<sup>2</sup>) \[(𝛴<sub>1≤𝑖≤𝑛</sub>𝑥) - (𝑛𝜇)\]<strong>\]</strong>
> - 𝐿𝐿''(𝜇,𝜎) = (1/𝜎<sup>2</sup>) \[(𝛴<sub>1≤𝑖≤𝑛</sub>𝑥) - <em>𝛥</em><em>𝜇 </em>(𝑛𝜇)\]
> - 𝐿𝐿''(𝜇,𝜎) = (1/𝜎<sup>2</sup>) \[(𝛴<sub>1≤𝑖≤𝑛</sub>𝑥) - 𝑛)\]
>
> plug into
> - 𝐼(𝜃) = - 𝐄\[log-likelihood-function''(𝜃)\]
> - 𝐼(𝜇,𝜎) = - 𝐄\[(1/𝜎<sup>2</sup>) \[(𝛴<sub>1≤𝑖≤𝑛</sub>𝑥) - 𝑛)\]\]
> - 𝐼(𝜇,𝜎) = - (1/𝜎<sup>2</sup>) 𝐄\[(𝛴<sub>1≤𝑖≤𝑛</sub>𝑥) - 𝑛\]
> - 𝐼(𝜇,𝜎) = - (1/𝜎<sup>2</sup>) <strong>\[</strong> 𝐄\[𝛴<sub>1≤𝑖≤𝑛</sub>𝑥\] - 𝐄\[𝑛\] <strong>\]</strong>
> - 𝐼(𝜇,𝜎) = - (1/𝜎<sup>2</sup>) <strong>\[</strong> (𝛴<sub>1≤𝑖≤𝑛</sub>𝐄\[𝑥)) - 𝑛 <strong>\]</strong>
> - 𝐼(𝜇,𝜎) = - (1/𝜎<sup>2</sup>) <strong>\[</strong> (𝛴<sub>1≤𝑖≤𝑛</sub>𝜇) - 𝑛 <strong>\]</strong>
> - 𝐼(𝜇,𝜎) = - (1/𝜎<sup>2</sup>) <strong>\[</strong> 𝑛𝜇 - 𝑛 <strong>\]</strong>

> [!expand-ui]- second derivative of 𝐿𝐿(𝜇,𝜎) wrt 𝜎
> <font style="color: rgb(255,0,0);"><font style="color: rgb(51,51,51);">first derivative with respect to <font style="color: rgb(34,34,34);">𝜎</font></font></font>
> - 𝐿𝐿'(𝜇,𝜎) = <em>𝛥</em>𝜎 <strong>\[</strong>-𝑛·𝑙𝑛(𝜎\*𝑠𝑞𝑟𝑡(2𝜋)) - 𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑥-𝜇)<sup>2</sup>/(2𝜎<sup>2</sup>)\]<strong>\]</strong>
> - 𝐿𝐿'(𝜇,𝜎) = <em>𝛥</em>𝜎 <strong>\[</strong>-𝑛·𝑙𝑛(𝜎) - 𝑛·𝑙𝑛(𝑠𝑞𝑟𝑡(2𝜋)) - 𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑥-𝜇)<sup>2</sup>/(2𝜎<sup>2</sup>)\]<strong>\]</strong>
> - 𝐿𝐿'(𝜇,𝜎) = -𝑛/𝜎 - 0 - 𝛴<sub>1≤𝑖≤𝑛</sub>\[<em>𝛥</em>𝜎 (𝑥-𝜇)<sup>2</sup>/(2𝜎<sup>2</sup>)\]
> - 𝐿𝐿'(𝜇,𝜎) = -𝑛/𝜎 - 𝛴<sub>1≤𝑖≤𝑛</sub>\[-2(𝑥-𝜇)<sup>2</sup>/(2𝜎<sup>3</sup>)\]
> - 𝐿𝐿'(𝜇,𝜎) = -𝑛/𝜎 + 𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑥-𝜇)<sup>2</sup>/(𝜎<sup>3</sup>)\]
> - 𝐿𝐿'(𝜇,𝜎) = (1/𝜎<sup>3</sup>)𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑥-𝜇)<sup>2</sup>\] - 𝑛/𝜎
>
> second derivative with respect to 𝜎
> - 𝐿𝐿''(𝜇,𝜎) = -3(1/𝜎<sup>4</sup>)𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑥-𝜇)<sup>2</sup>\] + 𝑛/𝜎<sup>2</sup>
> - 𝐿𝐿''(𝜇,𝜎) = 𝑛/𝜎<sup>2</sup>- (3/𝜎<sup>4</sup>)𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑥-𝜇)<sup>2</sup>\]
>
> plug into
> - 𝐼(𝜃) = - 𝐄\[log-likelihood-function''(𝜃)\]
> - 𝐼(𝜃) = - 𝐄<strong>\[</strong>𝑛/𝜎<sup>2</sup>- (3/𝜎<sup>4</sup>)𝛴<sub>1≤𝑖≤𝑛</sub>(𝑥-𝜇)<sup>2</sup><strong>\]</strong>
> - 𝐼(𝜃) = - <strong>\[</strong> 𝐄\[𝑛/𝜎<sup>2</sup>\] - 𝐄\[(3/𝜎<sup>4</sup>)𝛴<sub>1≤𝑖≤𝑛</sub>(𝑥-𝜇)<sup>2</sup>\] <strong>\]</strong>
> - 𝐼(𝜃) = - 𝐄\[𝑛/𝜎<sup>2</sup>\] + 𝐄\[(3/𝜎<sup>4</sup>)𝛴<sub>1≤𝑖≤𝑛</sub>(𝑥-𝜇)<sup>2</sup>\]
> - 𝐼(𝜃) = 𝐄\[(3/𝜎<sup>4</sup>)𝛴<sub>1≤𝑖≤𝑛</sub>(𝑥-𝜇)<sup>2</sup>\] - 𝐄\[𝑛/𝜎<sup>2</sup>\]
> - 𝐼(𝜃) = (3/𝜎<sup>4</sup>)𝐄\[𝛴<sub>1≤𝑖≤𝑛</sub>(𝑥-𝜇)<sup>2</sup>\] - 𝑛/𝜎<sup>2</sup>
