---
title: "Log-Likelihood Function - Normal Distribution"
created: 2021-09-13T05:28:03.300-05:00
modified: 2021-12-21T16:19:31.899-06:00
parent: "[[Log-Likelihood Function - Of Specific Distributions]]"
children: []
---
Let {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>} be a sample from a [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|Normal(𝜇,𝜎) Distribution]]

the generic [[Likelihood Function - Log-Likelihood Function - Score Function|log-likelihood function]] is as follows
- 𝐿𝐿(𝜃) = 𝛴<sub>1≤𝑖≤𝑛</sub> 𝑙𝑛\[𝑓(𝑋<sub>𝑖</sub>|𝜃)\]s

we need to replace 𝑓(𝑋<sub>𝑖</sub>|𝜃) with the probability density function of a [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|Normal(𝜇,𝜎) Distribution]] which is as follows
- 𝑓(𝑋<sub>𝑖</sub>|<em>𝜇</em>,𝜎) = (1/\[𝜎\*√(2𝜋)\]) 𝑒<sup>-(𝑥-<em>𝜇</em>)<sup>2</sup>/(2𝜎<sup>2</sup>)</sup>

and
- 𝜃 = {<em>𝜇</em>,𝜎}

therefore, the log-likelihood function becomes:
- 𝐿𝐿(𝜃) = 𝛴<sub>1≤𝑖≤𝑛</sub> 𝑙𝑛\[𝑓(𝑋<sub>𝑖</sub>|𝜃)\]
- 𝐿𝐿(<em>𝜇</em>,𝜎) = 𝛴<sub>1≤𝑖≤𝑛</sub> 𝑙𝑛\[𝑓(𝑋<sub>𝑖</sub>|𝜇,𝜎)\]
- 𝐿𝐿(𝜇,𝜎) = 𝛴<sub>1≤𝑖≤𝑛</sub> 𝑙𝑛((1/\[𝜎\*√(2𝜋)\]) 𝑒<sup>-(𝑥-<em>𝜇</em>)<sup>2</sup>/(2𝜎<sup>2</sup>)</sup>)
- 𝐿𝐿(𝜇,𝜎) = 𝛴<sub>1≤𝑖≤𝑛</sub> 𝑙𝑛(1) - 𝑙𝑛(𝜎\*√(2𝜋)) + 𝑙𝑛(𝑒<sup>-(𝑥-<em>𝜇</em>)<sup>2</sup>/(2𝜎<sup>2</sup>)</sup>)
- 𝐿𝐿(𝜇,𝜎) = 𝛴<sub>1≤𝑖≤𝑛</sub> 0 - 𝑙𝑛(𝜎\*√(2𝜋)) + -(𝑥-<em>𝜇</em>)<sup>2</sup>/(2𝜎<sup>2</sup>)𝑙𝑛(𝑒)
- 𝐿𝐿(𝜇,𝜎) = 𝛴<sub>1≤𝑖≤𝑛</sub> -𝑙𝑛(𝜎\*√(2𝜋)) - (𝑥-𝜇)<sup>2</sup>/(2𝜎<sup>2</sup>)
- 𝐿𝐿(𝜇,𝜎) = 𝛴<sub>1≤𝑖≤𝑛</sub> \[-𝑙𝑛(𝜎\*√(2𝜋))\] - 𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑥-𝜇)<sup>2</sup>/(2𝜎<sup>2</sup>)\]
- 𝐿𝐿(𝜇,𝜎) = -𝑛·𝑙𝑛(𝜎\*√(2𝜋)) - 𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑥-𝜇)<sup>2</sup>/(2𝜎<sup>2</sup>)\]
