---
title: "Log-Likelihood Function - Binomial Distribution"
created: 2021-09-13T05:28:02.247-05:00
modified: 2021-12-21T16:24:56.155-06:00
parent: "[[Log-Likelihood Function - Of Specific Distributions]]"
children: []
---
Let {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>} be samples taken from a [[Binomial Distribution|Binomial(𝑝) Distribution]]

the generic [[Likelihood Function - Log-Likelihood Function - Score Function|log-likelihood function]] is as follows
- 𝐿𝐿(𝜃) = 𝛴<sub>1≤𝑖≤𝑛</sub> 𝑙𝑛\[𝑓(𝑋<sub>𝑖</sub>|𝜃)\]

we need to replace 𝑓(𝑋<sub>𝑖</sub>|𝜃) with the probability mass function of the [[Binomial Distribution|Binomial(𝑝) Distribution]] which is as follows
- 𝑓(𝑋<sub>𝑖</sub>|𝑝) = \[𝑛!/(𝑘!(𝑛-𝑘)!\] \* 𝑝<sup>𝑘</sup> \* (1-𝑝)<sup>(𝑛-𝑘)</sup>

and
- 𝜃 = {𝑝}

therefore, the log-likelihood function becomes:
- 𝐿𝐿(𝜃) = 𝛴<sub>1≤𝑖≤𝑛</sub> 𝑙𝑛\[𝑓(𝑋<sub>𝑖</sub>|𝜃)\]
- 𝐿𝐿(𝜆) = 𝛴<sub>1≤𝑖≤𝑛</sub> 𝑙𝑛\[𝑓(𝑋<sub>𝑖</sub>|𝑝)\]
- 𝐿𝐿(𝜆) = 𝛴<sub>1≤𝑖≤𝑛</sub> 𝑙𝑛\[\[𝑛!/(𝑘!(𝑛-𝑘)!\] \* 𝑝<sup>𝑘</sup> \* (1-𝑝)<sup>(𝑛-𝑘)</sup>\]
- 𝐿𝐿(𝜆) = 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑙𝑛(𝑛!/(𝑘!(𝑛-𝑘)!) + 𝑙𝑛(𝑝<sup>𝑘</sup>) + 𝑙𝑛((1-𝑝)<sup>(𝑛-𝑘)</sup>)\]
- 𝐿𝐿(𝜆) = 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑙𝑛(𝑛!/(𝑘!(𝑛-𝑘)!) + 𝑘·𝑙𝑛(𝑝) + (𝑛-𝑘)·𝑙𝑛(1-𝑝)\]
- 𝐿𝐿(𝜆) = 𝑛·𝑙𝑛(𝑛!/(𝑘!(𝑛-𝑘)!) + 𝑛·𝑘·𝑙𝑛(𝑝) + 𝑛·(𝑛-𝑘)·𝑙𝑛(1-𝑝)
