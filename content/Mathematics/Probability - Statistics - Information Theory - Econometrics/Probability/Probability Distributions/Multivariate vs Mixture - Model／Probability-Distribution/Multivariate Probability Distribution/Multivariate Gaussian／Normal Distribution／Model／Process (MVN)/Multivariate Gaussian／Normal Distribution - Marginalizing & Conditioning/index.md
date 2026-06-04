---
title: "Multivariate Gaussian／Normal Distribution - Marginalizing & Conditioning"
created: 2021-11-12T05:11:47.087-06:00
modified: 2022-02-20T22:41:07.974-06:00
parent: "[[Multivariate Gaussian／Normal Distribution／Model／Process (MVN)]]"
children: []
---
Gaussian distributions have the nice algebraic property of being closed under conditioning and marginalization. Being closed under conditioning and marginalization means that the resulting distributions from these operations are also Gaussian
# Problem

Given a [[Multivariate Gaussian／Normal Distribution／Model／Process (MVN)|Multivariate Normal (MVN)]] distribution, calculate its [[Marginal Probability Distribution|marginal]] and [[Conditional Probability Distribution (CPD)|conditional]] distribution
# Solution
![[Multivariate Gaussian／Normal Distribution - Marginalizing & Conditioning/gaussian-regression-example-3.png|500]]
# Marginalizing an MVN Distribution

Given a multivariate gaussian distribution 𝐏(𝑋,𝑌) defined below

> [!indent]
> ![[Multivariate Gaussian／Normal Distribution - Marginalizing & Conditioning/multivariate-gaussian-distribution-marginalizing-conditional.png|350]]

Marginalizing the set of random variables 𝑋 from 𝐏(𝑋,𝑌) yields:
- 𝐏(𝑋) = 𝒩(𝜇<sub>𝑋</sub>,𝛴<sub>𝑋𝑋</sub>)

Marginalizing the set of random variables 𝑌 from 𝐏(𝑋,𝑌) yields:
- 𝐏(𝑌) = 𝒩(𝜇<sub>𝑌</sub>,𝛴<sub>𝑌𝑌</sub>)

# Conditioning an MVN Distribution

Given a multivariate gaussian distribution 𝐏(𝑋,𝑌) defined below

> [!indent]
> ![[Multivariate Gaussian／Normal Distribution - Marginalizing & Conditioning/multivariate-gaussian-distribution-marginalizing-conditional.png|350]]

Conditioning 𝐏(𝑋,𝑌) to yield 𝐏(𝑋|𝑌):
- 𝐏(𝑋|𝑌) = 𝒩(𝜇<sub>𝑋</sub> + 𝛴<sub>𝑋𝑌</sub>𝛴<sub>𝑌𝑌</sub><sup>-1</sup>(𝑌 - 𝜇<sub>𝑌</sub>), 𝛴<sub>𝑋𝑋</sub> - 𝛴<sub>𝑋𝑌</sub>𝛴<sub>𝑌𝑌</sub><sup>-1</sup>𝛴<sub>𝑌𝑋</sub>)

Conditioning 𝐏(𝑌,𝑋) to yield 𝐏(𝑌|𝑋):
- 𝐏(𝑌|𝑋) = 𝒩(𝜇<sub>𝑌</sub> + 𝛴<sub>𝑌𝑋</sub>𝛴<sub>𝑋𝑋</sub><sup>-1</sup>(𝑋 - 𝜇<sub>𝑋</sub>), 𝛴<sub>𝑌𝑌</sub> - 𝛴<sub>𝑌𝑋</sub>𝛴<sub>𝑋𝑋</sub><sup>-1</sup>𝛴<sub>𝑋𝑌</sub>)

This operation is the cornerstone of [[Gaussian Process Regression (GPR) - Kriging|Gaussian process Regression]] since it allows [[Bayesian (Statistical Inference - Inferential Statistics)|Bayesian inference]]

Note that the new mean only depends on the conditioned variable, while the covariance matrix is independent of this variable
# Proof

TODO
# Resources
- [[Marginal_cond_for_multivariate_normal.pdf]]
- [https://stats.stackexchange.com/questions/30588/deriving-the-conditional-distributions-of-a-multivariate-normal-distribution](https://stats.stackexchange.com/questions/30588/deriving-the-conditional-distributions-of-a-multivariate-normal-distribution)
