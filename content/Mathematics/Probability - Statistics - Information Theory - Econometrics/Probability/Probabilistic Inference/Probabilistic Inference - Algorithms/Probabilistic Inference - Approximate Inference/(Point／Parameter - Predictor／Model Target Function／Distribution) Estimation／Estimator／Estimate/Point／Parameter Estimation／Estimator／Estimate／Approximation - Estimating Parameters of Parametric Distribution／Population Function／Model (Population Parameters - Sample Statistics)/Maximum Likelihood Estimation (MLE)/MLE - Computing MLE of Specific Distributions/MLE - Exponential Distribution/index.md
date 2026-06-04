---
title: "MLE - Exponential Distribution"
created: 2021-09-13T05:28:05.519-05:00
modified: 2021-09-13T05:28:05.519-05:00
parent: "[[MLE - Computing MLE of Specific Distributions]]"
children: []
---
###### [[Maximum Likelihood Estimation (MLE)]] for [[Exponential Distribution]]

𝜆<sub>𝑀𝐿𝐸</sub><font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);"> = 1/𝑋̅</font><font style="color: rgb(60,64,67);"><font style="color: rgb(128,128,128);"> \# where 𝑋̅</font><font style="color: rgb(128,128,128);"> is the</font> [[Sample Mean|sample mean]]</font></font>

> [!expand]- computation
> Let {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>} be a sample from an Exponential(𝜆) Distribution
>
> How to estimate parameter 𝜆 using [[Maximum Likelihood Estimation (MLE)|MLE method]]?
>
> the log-likelihood function 𝓛(𝜃) of an Exponential(𝜆) Distribution is as follows
> - 𝓛(𝜆) = 𝑛·𝑙𝑛(𝜆) - 𝜆·∑<sub>1≤𝑖≤𝑛</sub> 𝑋<sub>𝑖</sub><sub></sub><font style="color: rgb(128,128,128);">\#</font> [[Log-Likelihood Function - Exponential Distribution|click here for computation]]
>
> now differentiate with respect to 𝜆
> - 𝓛'(𝜆) = 𝑛/𝜆 - ∑<sub>1≤𝑖≤𝑛</sub> 𝑋<sub>𝑖</sub>
>
> equate to 0 and solve for 𝜆
> - 0 = 𝑛/𝜆 - ∑<sub>1≤𝑖≤𝑛</sub> 𝑋<sub>𝑖</sub>
> - ∑<sub>1≤𝑖≤𝑛</sub> 𝑋<sub>𝑖</sub> = 𝑛/𝜆
> - <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">𝜆<sub>𝑀𝐿𝐸</sub> = 𝑛 / \[ ∑<sub>1≤𝑖≤𝑛</sub> 𝑋<sub>𝑖</sub> \]</font></font>
> - <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">𝜆<sub>𝑀𝐿𝐸</sub></font><font style="color: rgb(51,51,51);"> = 1/𝑋̅</font><font style="color: rgb(60,64,67);"><font style="color: rgb(128,128,128);"> \# where 𝑋̅</font><font style="color: rgb(128,128,128);"> is the</font> [[Sample Mean|sample mean]]</font></font>
