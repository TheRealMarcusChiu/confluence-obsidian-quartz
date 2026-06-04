---
title: "Fisher Information - Poisson Distribution"
created: 2021-09-13T05:26:26.033-05:00
modified: 2021-12-21T16:17:11.624-06:00
parent: "[[Fisher Information - Fisher Information Matrix]]"
children: []
---
[[Fisher Information - Fisher Information Matrix|Fisher Information]] for [[Poisson Distribution]]
- 𝐼(𝜆) = 𝑛/𝜆

# Derivation

the generic Fisher Information formula is as follows:
- 𝐼(𝜃) = - 𝐄\[log-likelihood-function''(𝜃)\]

we need the [[Likelihood Function - Log-Likelihood Function - Score Function|log-likelihood function 𝐿𝐿(𝜃)]] of a [[Poisson Distribution|Poisson(𝜆) Distribution]] which is as follows
- 𝐿𝐿(𝜆) = 𝑙𝑛(𝜆)𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑋<sub>𝑖</sub>\] - 𝑛𝜆 - 𝛴<sub>1≤𝑖≤𝑛</sub> \[𝑙𝑛(𝑋<sub>𝑖</sub>!)\]<font style="color: rgb(128,128,128);"> \# click here for [[Log-Likelihood Function - Poisson Distribution|step-by-step computation]] </font>

now we need to compute the second derivative of 𝐿𝐿(𝜆)
- 𝐿𝐿'(𝜆) = (1/𝜆)𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑋<sub>𝑖</sub>\] − 𝑛
- 𝐿𝐿''(𝜆) = -(1/𝜆<sup>2</sup>)𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑋<sub>𝑖</sub>\]

plug into Fisher Information formula
- 𝐼(𝜃) = - 𝐄\[log-likelihood-function''(𝜃)\]
- 𝐼(𝜆) = - 𝐄\[log-likelihood-function''(𝜆)\] <font style="color: rgb(128,128,128);">\# the parameters (𝜃) of Poisson distribution is a single 𝜆</font>
- 𝐼(𝜆) = - 𝐄\[-(1/𝜆<sup>2</sup>)𝛴<sub>1≤𝑖≤𝑛</sub>(𝑋<sub>𝑖</sub>)\]
- 𝐼(𝜆) = (1/𝜆<sup>2</sup>) 𝐄\[𝛴<sub>1≤𝑖≤𝑛</sub>(𝑋<sub>𝑖</sub>)\]
- 𝐼(𝜆) = (1/𝜆<sup>2</sup>) 𝐄\[𝑋<sub>1</sub> + 𝑋<sub>2</sub>+ ... + 𝑋<sub>𝑛</sub>\]
- 𝐼(𝜆) = (1/𝜆<sup>2</sup>) ( 𝐄\[𝑋<sub>1</sub>\] + 𝐄\[𝑋<sub>2</sub>\] + ... + 𝐄\[𝑋<sub>𝑛</sub>\] )
- 𝐼(𝜆) = (1/𝜆<sup>2</sup>) \[ 𝜆 + 𝜆 + ... + 𝜆 \] <font style="color: rgb(128,128,128);">\# each 𝑋<sub>𝑖</sub> is a Poisson variable and its expected value is 𝜆</font>
- 𝐼(𝜆) = 𝑛𝜆/𝜆<sup>2</sup>
- 𝐼(𝜆) = 𝑛/𝜆
