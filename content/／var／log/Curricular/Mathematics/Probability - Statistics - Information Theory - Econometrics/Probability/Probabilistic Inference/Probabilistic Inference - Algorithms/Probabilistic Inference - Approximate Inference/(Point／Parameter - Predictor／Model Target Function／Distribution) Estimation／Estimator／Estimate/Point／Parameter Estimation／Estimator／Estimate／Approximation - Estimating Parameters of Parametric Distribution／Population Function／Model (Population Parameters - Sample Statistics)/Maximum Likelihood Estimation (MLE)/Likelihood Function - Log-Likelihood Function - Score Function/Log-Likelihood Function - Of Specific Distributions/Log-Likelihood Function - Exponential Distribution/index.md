---
title: "Log-Likelihood Function - Exponential Distribution"
created: 2021-09-13T05:28:02.838-05:00
modified: 2021-12-21T16:23:39.707-06:00
parent: "[[Log-Likelihood Function - Of Specific Distributions]]"
children: []
---
Let {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>} be a sample from an [[Exponential Distribution|Exponential(𝜆) Distribution]]

the generic [[Likelihood Function - Log-Likelihood Function - Score Function|log-likelihood function]] is as follows
- 𝐿𝐿(𝜃) = 𝛴<sub>1≤𝑖≤𝑛</sub> 𝑙𝑛\[𝑓(𝑋<sub>𝑖</sub>|𝜃)\]

we need to replace 𝑓(𝑋<sub>𝑖</sub>|𝜃) with the probability density function of an [[Exponential Distribution|Exponential(𝜆) Distribution]] which is as follows
- 𝑓(𝑋<sub>𝑖</sub>|𝜆) = 𝜆𝑒<sup>-𝜆𝑋<sub>𝑖</sub></sup>, for 𝑋<sub>𝑖</sub> \> 0

and
- 𝜃 = {𝜆}

therefore, the log-likelihood function becomes:
- 𝐿𝐿(𝜃) = 𝛴<sub>1≤𝑖≤𝑛</sub> 𝑙𝑛\[𝑓(𝑋<sub>𝑖</sub>|𝜃)\]
- 𝐿𝐿(𝜆) = 𝛴<sub>1≤𝑖≤𝑛</sub> 𝑙𝑛\[𝑓(𝑋<sub>𝑖</sub>|𝜆)\]
- 𝐿𝐿(𝜆) = 𝛴<sub>1≤𝑖≤𝑛</sub> 𝑙𝑛(𝜆𝑒<sup>-𝜆𝑋<sub>𝑖</sub></sup>)
- 𝐿𝐿(𝜆) = 𝛴<sub>1≤𝑖≤𝑛</sub> 𝑙𝑛(𝜆) + 𝛴<sub>1≤𝑖≤𝑛</sub> 𝑙𝑛(𝑒<sup>-𝜆𝑋<sub>𝑖</sub></sup>)
- 𝐿𝐿(𝜆) = 𝑛·𝑙𝑛(𝜆) - 𝛴<sub>1≤𝑖≤𝑛</sub> 𝜆·𝑋<sub>𝑖</sub>𝑙𝑛(𝑒)
- 𝐿𝐿(𝜆) = 𝑛·𝑙𝑛(𝜆) - 𝜆·𝛴<sub>1≤𝑖≤𝑛</sub> 𝑋<sub>𝑖</sub>
