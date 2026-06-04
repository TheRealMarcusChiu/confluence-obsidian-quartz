---
title: "Fisher Information - Exponential Distribution"
created: 2021-09-13T05:26:26.215-05:00
modified: 2021-12-21T16:17:26.247-06:00
parent: "[[Fisher Information - Fisher Information Matrix]]"
children: []
---
[[Fisher Information - Fisher Information Matrix|Fisher Information]] of [[Exponential Distribution]]
- 𝐼(𝜆) = 𝑛/𝜆<sup>2</sup>

# Derivation

the generic Fisher Information formula is as follows:
- 𝐼(𝜃) = - 𝐄\[log-likelihood-function''(𝜃)\]

we need the [[Likelihood Function - Log-Likelihood Function - Score Function|log-likelihood function 𝐿𝐿(𝜃)]] of an [[Exponential Distribution|Exponential(𝜆) Distribution]] which is as follows
- 𝐿𝐿(𝜆) = 𝑛·𝑙𝑛(𝜆) - 𝜆·𝛴<sub>1≤𝑖≤𝑛</sub> 𝑋<sub>𝑖</sub><sub></sub><font style="color: rgb(128,128,128);">\# click here for </font>[[Log-Likelihood Function - Exponential Distribution|step-by-step computation]]

now we need to compute the second derivative of 𝐿𝐿(𝜆)
- 𝐿𝐿'(𝜆) = 𝑛/𝜆 - 𝛴<sub>1≤𝑖≤𝑛</sub> 𝑋<sub>𝑖</sub>
- 𝐿𝐿''(𝜆) = -𝑛/𝜆<sup>2</sup>

plug into Fisher Information formula
- 𝐼(𝜃) = - 𝐄\[log-likelihood-function''(𝜃)\]
- 𝐼(𝜆) = - 𝐄\[log-likelihood-function''(𝜆)\] <font style="color: rgb(128,128,128);">\# the parameters (𝜃) of exponential distribution is a single 𝜆</font>
- 𝐼(𝜆) = - 𝐄\[-𝑛/𝜆<sup>2</sup>\]
- 𝐼(𝜆) = - (-𝑛/𝜆<sup>2</sup>) <font style="color: rgb(128,128,128);">\# expected value of a constant is itself</font>
- 𝐼(𝜆) = 𝑛/𝜆<sup>2</sup>
