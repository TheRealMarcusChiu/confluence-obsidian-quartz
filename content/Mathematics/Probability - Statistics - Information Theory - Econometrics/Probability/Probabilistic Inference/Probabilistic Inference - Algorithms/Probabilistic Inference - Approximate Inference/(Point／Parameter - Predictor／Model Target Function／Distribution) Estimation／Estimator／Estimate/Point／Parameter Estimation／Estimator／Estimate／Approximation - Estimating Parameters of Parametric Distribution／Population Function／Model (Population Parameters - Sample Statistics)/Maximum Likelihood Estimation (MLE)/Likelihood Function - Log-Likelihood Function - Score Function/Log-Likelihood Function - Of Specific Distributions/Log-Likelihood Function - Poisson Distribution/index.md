---
title: "Log-Likelihood Function - Poisson Distribution"
created: 2021-09-13T05:28:03.524-05:00
modified: 2021-12-21T16:21:25.580-06:00
parent: "[[Log-Likelihood Function - Of Specific Distributions]]"
children: []
---
Let {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>} be a sample from an [[Poisson Distribution|Poisson(𝜆) Distribution]]

the generic [[Likelihood Function - Log-Likelihood Function - Score Function|log-likelihood function]] is as follows
- 𝐿𝐿(𝜃) = 𝛴<sub>1≤𝑖≤𝑛</sub> 𝑙𝑛\[𝑓(𝑋<sub>𝑖</sub>|𝜃)\]

we need to replace 𝑓(𝑋<sub>𝑖</sub>|𝜃) with the probability mass function of a [[Poisson Distribution|Poisson(𝜆) Distribution]] which is as follows
- 𝑓(𝑋<sub>𝑖</sub>|𝜆) =  𝑒<sup>−𝜆</sup>(𝜆<sup>𝑋<sub>𝑖</sub></sup>/𝑋<sub>𝑖</sub>!), for 𝑋<sub>𝑖</sub> \> 0

and
- 𝜃 = {𝜆}

therefore, the log-likelihood function becomes:
- 𝐿𝐿(𝜃) = 𝛴<sub>1≤𝑖≤𝑛</sub> 𝑙𝑛\[𝑓(𝑋<sub>𝑖</sub>|𝜃)\]
- 𝐿𝐿(𝜆) = 𝛴<sub>1≤𝑖≤𝑛</sub> 𝑙𝑛\[𝑓(𝑋<sub>𝑖</sub>|𝜆)\]
- 𝐿𝐿(𝜆) = 𝛴<sub>1≤𝑖≤𝑛</sub> 𝑙𝑛\[𝑒<sup>−𝜆</sup>(𝜆<sup>𝑋<sub>𝑖</sub></sup>/𝑋<sub>𝑖</sub>!)\]
- 𝐿𝐿(𝜆) = 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑙𝑛(𝑒<sup>−𝜆</sup>) + 𝑙𝑛(𝜆<sup>𝑋<sub>𝑖</sub></sup>) - 𝑙𝑛(𝑋<sub>𝑖</sub>!)\]
- 𝐿𝐿(𝜆) = 𝛴<sub>1≤𝑖≤𝑛</sub> \[-𝜆𝑙𝑛(𝑒) + 𝑋<sub>𝑖</sub>𝑙𝑛(𝜆) - 𝑙𝑛(𝑋<sub>𝑖</sub>!)\]
- 𝐿𝐿(𝜆) = 𝛴<sub>1≤𝑖≤𝑛</sub> \[-𝜆 + 𝑋<sub>𝑖</sub>𝑙𝑛(𝜆) - 𝑙𝑛(𝑋<sub>𝑖</sub>!)\]
- 𝐿𝐿(𝜆) = 𝛴<sub>1≤𝑖≤𝑛</sub> \[-𝜆\] + 𝛴<sub>1≤𝑖≤𝑛</sub> \[𝑋<sub>𝑖</sub>𝑙𝑛(𝜆)\] - 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑙𝑛(𝑋<sub>𝑖</sub>!)\]
- 𝐿𝐿(𝜆) = -𝑛𝜆 + 𝑙𝑛(𝜆)𝛴<sub>1≤𝑖≤𝑛</sub> \[𝑋<sub>𝑖</sub>\] - 𝛴<sub>1≤𝑖≤𝑛</sub> \[𝑙𝑛(𝑋<sub>𝑖</sub>!)\]
- 𝐿𝐿(𝜆) = 𝑙𝑛(𝜆)𝛴<sub>1≤𝑖≤𝑛</sub> \[𝑋<sub>𝑖</sub>\] - 𝑛𝜆 - 𝛴<sub>1≤𝑖≤𝑛</sub> \[𝑙𝑛(𝑋<sub>𝑖</sub>!)\]
