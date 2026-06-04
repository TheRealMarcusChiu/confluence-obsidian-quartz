---
title: "Log-Likelihood Function - Markov Network"
created: 2021-09-13T05:28:01.286-05:00
modified: 2021-12-21T16:28:24.895-06:00
parent: "[[Log-Likelihood Function - Of Specific Distributions]]"
children: []
---
# Example

Let's compute the [[Likelihood Function - Log-Likelihood Function - Score Function|log-likelihood function]] for the following [[Markov Networks／Nets - Markov Random Fields (MRF)|Markov Network]]

![[Log-Likelihood Function - Markov Network/log-likelihood-markov-network.png|200]]

first the [[Joint Probability Distribution (Compound - Bivariate - Multivariate - Full)|joint probability]] of the Markov network:
- 𝐏(𝐴=𝑎,𝐵=𝑏,𝐶=𝑐|𝜃) = (1/𝘡(𝜃)) \* 𝜙(𝐴=𝑎,𝐵=𝑏|𝜃) \* 𝜙(𝐵=𝑏, 𝐶=𝑐|𝜃)

the generic [[Likelihood Function - Log-Likelihood Function - Score Function|log-likelihood function]] is as follows:
- 𝐿𝐿(𝜃) = 𝛴<sub>1≤𝑖≤𝑛</sub> 𝑙𝑛\[𝑓(𝑋<sub>𝑖</sub>|𝜃)\]

we need to replace 𝑓(𝑋<sub>𝑖</sub>|𝜃) with the [[Joint Probability Distribution (Compound - Bivariate - Multivariate - Full)|joint probability]] of the Markov Network:
- 𝑓(𝑋<sub>𝑖</sub>|𝜃) = 𝑓(𝐴=𝑎<sub>𝑖</sub>,𝐵=𝑏<sub>𝑖</sub>,𝐶=𝑐<sub>𝑖</sub>|𝜃)
- 𝑓(𝑋<sub>𝑖</sub>|𝜃) = (1/𝘡(𝜃)) \* 𝜙(𝐴=𝑎<sub>𝑖</sub>,𝐵=𝑏<sub>𝑖</sub>|𝜃) \* 𝜙(𝐵=𝑏<sub>𝑖</sub>, 𝐶=𝑐<sub>𝑖</sub>|𝜃)

therefore, the log-likelihood function becomes:
- 𝐿𝐿(𝜃) = 𝛴<sub>1≤𝑖≤𝑛</sub> 𝑙𝑛\[𝑓(𝑋<sub>𝑖</sub>|𝜃)\]
- 𝐿𝐿(𝜃) = 𝛴<sub>1≤𝑖≤𝑛</sub> 𝑙𝑛\[(1/𝘡(𝜃)) \* 𝜙(𝐴=𝑎<sub>𝑖</sub>,𝐵=𝑏<sub>𝑖</sub>|𝜃) \* 𝜙(𝐵=𝑏<sub>𝑖</sub>, 𝐶=𝑐<sub>𝑖</sub>|𝜃)\]
- 𝐿𝐿(𝜃) = 𝛴<sub>1≤𝑖≤𝑛</sub><strong>\[ </strong>-𝑙𝑛\[1/𝘡(𝜃)\] + 𝑙𝑛\[𝜙(𝐴=𝑎<sub>𝑖</sub>,𝐵=𝑏<sub>𝑖</sub>|𝜃)\] + 𝑙𝑛\[𝜙(𝐵=𝑏<sub>𝑖</sub>, 𝐶=𝑐<sub>𝑖</sub>|𝜃)\] <strong>\]</strong>

𝘡(𝜃) = 𝛴<sub>𝑎∊𝐴</sub>𝛴<sub>𝑏∊𝐵</sub>𝛴<sub>𝑐∊𝐶</sub>\[𝜙(𝐴=𝑎,𝐵=𝑏|𝜃)𝜙(𝐵=𝑏, 𝐶=𝑐|𝜃)\]

<font style="color: rgb(255,0,0);">partition function couples the parameters (𝜃):</font>
- <font style="color: rgb(255,0,0);">no decomposition of log-likelihood</font>
- <font style="color: rgb(255,0,0);">no closed-form solution</font>
