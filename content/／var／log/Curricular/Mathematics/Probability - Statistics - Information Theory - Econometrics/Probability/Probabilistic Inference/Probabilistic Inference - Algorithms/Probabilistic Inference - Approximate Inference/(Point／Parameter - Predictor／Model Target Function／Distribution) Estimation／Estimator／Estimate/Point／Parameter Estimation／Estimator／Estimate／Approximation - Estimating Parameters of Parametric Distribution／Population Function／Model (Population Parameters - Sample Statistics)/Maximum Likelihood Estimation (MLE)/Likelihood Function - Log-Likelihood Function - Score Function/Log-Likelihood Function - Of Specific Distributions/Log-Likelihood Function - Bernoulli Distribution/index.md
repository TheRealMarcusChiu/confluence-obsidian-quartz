---
title: "Log-Likelihood Function - Bernoulli Distribution"
created: 2021-09-13T05:28:02.049-05:00
modified: 2021-12-21T16:25:53.701-06:00
parent: "[[Log-Likelihood Function - Of Specific Distributions]]"
children: []
---
Let {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>} be samples taken from a [[Bernoulli Distribution|Bernoulli(𝑝) Distribution]]

the generic [[Likelihood Function - Log-Likelihood Function - Score Function|log-likelihood function]] is as follows
- 𝐿𝐿(𝜃) = 𝛴<sub>1≤𝑖≤𝑛</sub> 𝑙𝑛\[𝑓(𝑋<sub>𝑖</sub>|𝜃)\]

we need to replace 𝑓(𝑋<sub>𝑖</sub>|𝜃) with the probability mass function of the [[Bernoulli Distribution|Bernoulli(𝑝) Distribution]] which is as follows
- 𝑓(𝑋<sub>𝑖</sub>|𝑝) = 𝑝<sup>𝑥</sup>(1-𝑝)<sup>1-𝑥</sup> <font style="color: rgb(128,128,128);">\# for 𝑥 = 0 or 1</font>

and
- 𝜃 = {𝑝}

therefore, the log-likelihood function becomes:
- 𝐿𝐿(𝜃) = 𝛴<sub>1≤𝑖≤𝑛</sub> 𝑙𝑛\[𝑓(𝑋<sub>𝑖</sub>|𝜃)\]
- 𝐿𝐿(𝜆) = 𝛴<sub>1≤𝑖≤𝑛</sub> 𝑙𝑛\[𝑓(𝑋<sub>𝑖</sub>|𝑝)\]
- 𝐿𝐿(𝜆) = 𝛴<sub>1≤𝑖≤𝑛</sub> 𝑙𝑛\[<font style="color: rgb(128,0,0);">𝑝<sup>𝑥<sub>𝑖</sub></sup></font><font style="color: rgb(0,128,0);">(1-𝑝)<sup>(1-𝑥<sub>𝑖</sub>)</sup></font>\]
- 𝐿𝐿(𝜆) = 𝛴<sub>1≤𝑖≤𝑛</sub>\[<font style="color: rgb(128,0,0);">𝑙𝑛(𝑝<sup>𝑥<sub>𝑖</sub></sup>)</font> + <font style="color: rgb(0,128,0);">𝑙𝑛((1-𝑝)<sup>(1-𝑥<sub>𝑖</sub>)</sup>)</font>\]
- 𝐿𝐿(𝜆) = 𝛴<sub>1≤𝑖≤𝑛</sub>\[<font style="color: rgb(128,0,0);">𝑥<sub>𝑖</sub>·𝑙𝑛(𝑝)</font> +<font style="color: rgb(0,128,0);"> (1-𝑥<sub>𝑖</sub>)·𝑙𝑛(1-𝑝)</font>\]
- 𝐿𝐿(𝜆) = <font style="color: rgb(128,0,0);">𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑥<sub>𝑖</sub>·𝑙𝑛(𝑝)\]</font> + <font style="color: rgb(0,128,0);">𝛴<sub>1≤𝑖≤𝑛</sub>\[(1-𝑥<sub>𝑖</sub>)·𝑙𝑛(1-𝑝)\]</font>
- 𝐿𝐿(𝜆) = <font style="color: rgb(128,0,0);">𝑘·𝑙𝑛(𝑝)</font> + <font style="color: rgb(0,128,0);">(𝑛-𝑘)·𝑙𝑛(1-𝑝)</font>
