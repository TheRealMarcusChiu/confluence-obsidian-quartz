---
title: "MLE - Poisson Distribution"
created: 2021-09-13T05:28:06.965-05:00
modified: 2021-09-13T05:28:06.965-05:00
parent: "[[MLE - Computing MLE of Specific Distributions]]"
children: []
---
###### [[Maximum Likelihood Estimation (MLE)]] for [[MLE - Poisson Distribution]]
𝜆<sub>𝑀𝐿𝐸</sub> = 𝑋̅<font style="color: rgb(128,128,128);"> \# where 𝑋̅</font><font style="color: rgb(128,128,128);"> is the</font> [[Sample Mean|sample mean]]

> [!expand]- computation
> Let {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>} be a sample from an Poisson(𝜆) Distribution
>
> How to estimate parameter 𝜆 using [[Maximum Likelihood Estimation (MLE)|MLE method]]?
>
> the log-likelihood function 𝓛(𝜃) of an Poisson(𝜆) Distribution is as follows
> - 𝓛(𝜆) = 𝑙𝑛(𝜆)∑<sub>1≤𝑖≤𝑛</sub>\[𝑋<sub>𝑖</sub>\] - 𝜆𝑛 - ∑<sub>1≤𝑖≤𝑛</sub> \[𝑙𝑛(𝑋<sub>𝑖</sub>!)\]<font style="color: rgb(128,128,128);"> \# click here for [[Log-Likelihood Function - Poisson Distribution|step-by-step computation]] </font>
>
> now differentiate with respect to 𝜆
> - 𝓛'(𝜆) = (1/𝜆)∑<sub>1≤𝑖≤𝑛</sub>\[𝑋<sub>𝑖</sub>\] - 𝑛 - 0
> - 𝓛'(𝜆) = (1/𝜆)∑<sub>1≤𝑖≤𝑛</sub>\[𝑋<sub>𝑖</sub>\] − 𝑛
>
> equate to 0 and solve for 𝜆
> - 𝓛'(𝜆) = (1/𝜆)∑<sub>1≤𝑖≤𝑛</sub>\[𝑋<sub>𝑖</sub>\] − 𝑛
> - 0 = (1/𝜆)∑<sub>1≤𝑖≤𝑛</sub>\[𝑋<sub>𝑖</sub>\] − 𝑛
> - n = (1/𝜆)∑<sub>1≤𝑖≤𝑛</sub>\[𝑋<sub>𝑖</sub>\]
> - 𝜆n = ∑<sub>1≤𝑖≤𝑛</sub>\[𝑋<sub>𝑖</sub>\]
> - 𝜆 = ∑<sub>1≤𝑖≤𝑛</sub>\[𝑋<sub>𝑖</sub>\] / 𝑛
> - <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">𝜆<sub>𝑀𝐿𝐸</sub></font><font style="color: rgb(51,51,51);"> = 𝑋̅</font><font style="color: rgb(60,64,67);"><font style="color: rgb(128,128,128);"> \# where 𝑋̅</font><font style="color: rgb(128,128,128);"> is the</font> [[Sample Mean|sample mean]]</font></font>
