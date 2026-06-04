---
title: "Moment-Generating Function - Geometric Distribution"
created: 2023-10-23T16:25:00.401-05:00
modified: 2023-10-23T16:31:49.720-05:00
parent: "[[Moment-Generating Functions (MGF)]]"
children: []
---
# Computing MGF for Geometric Distribution

The [[Moment-Generating Functions (MGF)|moment generating function (MGF)]] of a [[Geometric Distribution|geometric]] variable 𝑋 with parameter 𝑝 is defined as:
- $M_X(t) = \frac{pe^t}{1 - qe^t}$

> [!expand-ui]- Computation Steps
> Let 𝑋 be a [[Geometric Distribution|geometric distribution]] with parameter 𝑝. Thus:
> - 𝐏(𝑋=𝑥) = (1−𝑝)<sup>𝑥−1</sup>𝑝
>
> Let's compute the [[Moment-Generating Functions (MGF)|moment generating function (MGF)]] of 𝑋:
> - $M_X(t) = E[e^{tX}]$
> - $M_X(t) = \sum_{i=1}^∞ e^{t·x_i}          P(X=x_i)$
> - $M_X(t) = \sum_{i=1}^∞ e^{t·(x_i-1)}e^{t} p(1-p)^{x_i-1}$
> - $M_X(t) = e^{t}p \sum_{i=1}^∞ e^{t·(x_i-1)} (1-p)^{x_i-1}$
> - $M_X(t) = e^{t}p \sum_{i=1}^∞ [(1-p)e^{t}]^{x_i-1}$
> - $M_X(t) = e^{t}p \sum_{i=1}^∞ [qe^{t}]^{x_i-1}$
> - $M_X(t) = \frac{pe^t}{1 - qe^t}$
# Using the MGF to Compute Moments

TODO
