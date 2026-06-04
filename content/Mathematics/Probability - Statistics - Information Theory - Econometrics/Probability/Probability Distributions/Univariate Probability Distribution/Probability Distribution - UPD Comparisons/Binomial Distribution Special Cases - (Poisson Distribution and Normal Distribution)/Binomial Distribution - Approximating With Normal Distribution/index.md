---
title: "Binomial Distribution - Approximating With Normal Distribution"
created: 2021-09-13T05:27:31.969-05:00
modified: 2023-08-31T18:44:40.245-05:00
parent: "[[Binomial Distribution Special Cases - (Poisson Distribution and Normal Distribution)]]"
children: []
---
by using Theorem 1 of [[Central Limit Theorem (CLT)]],

![[Binomial Distribution - Approximating With Normal Distribution/normal-approximation-binomial-distribution.png|350]]

> [!expand]- computation
> [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|Normal Distribution]] parameters:
> - 𝜇 = 𝐄\[Binomial(𝑋)\] = 𝑛𝑝
> - 𝜎 = <strong>𝑆𝑡𝑑</strong>(Binomial(𝑋)) = √\[𝑛𝑝(1-𝑝)\]

where:
- 0.05 ≤ 𝑝 ≤ 0.95
- 𝑛 is large

> [!info]
> In practice, the approximation is adequate provided that both 𝑛𝑝 ≥ 10 and 𝑛(1 − 𝑝) ≥ 10
# Example

A new computer virus attacks a folder consisting of 200 files. Each file gets damaged with a probability of 0.2 independently of other files. What is the probability that fewer than 50 files get damaged

The number 𝑋 of damaged files has a Binomial distribution with:
- 𝑛 = 200
- 𝑝 = 0.2
- 𝜇 = 𝑛𝑝 = 40
- 𝜎 = √\[𝑛𝑝(1 − 𝑝)\] = 5.657

Applying the [[Central Limit Theorem (CLT)|Central Limit Theorem]] with the continuity correction

![[Binomial Distribution - Approximating With Normal Distribution/binomial-normal-approximation-central-limit-theorem.png|400]]

Notice that the properly applied continuity correction replaces 50 with 49.5, not 50.5. Indeed, we are interested in the event that 𝑋 is strictly less than 50. This includes all values up to 49 and corresponds to the interval \[0, 49\] that we expand to \[0, 49.5\]. In other words, events {𝑋 \< 50} and {𝑋 \< 49.5} are the same; they include the same possible values of 𝑋. Events {𝑋 \< 50} and {𝑋 \< 50.5} are different because the former includes 𝑋 = 50, and the latter does not. Replacing {𝑋 \< 50} with {𝑋 \< 50.5} would have changed its probability and would have given a wrong answer
