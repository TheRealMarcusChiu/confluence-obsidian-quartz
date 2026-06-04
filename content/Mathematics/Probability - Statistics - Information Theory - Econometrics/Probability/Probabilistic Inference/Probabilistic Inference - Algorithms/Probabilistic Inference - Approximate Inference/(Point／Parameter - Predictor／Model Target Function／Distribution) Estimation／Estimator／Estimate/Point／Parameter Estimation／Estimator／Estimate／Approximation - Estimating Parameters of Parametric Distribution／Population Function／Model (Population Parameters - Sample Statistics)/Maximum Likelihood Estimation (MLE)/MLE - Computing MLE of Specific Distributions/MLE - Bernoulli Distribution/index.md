---
title: "MLE - Bernoulli Distribution"
created: 2021-09-13T05:28:05.285-05:00
modified: 2021-09-13T05:28:05.285-05:00
parent: "[[MLE - Computing MLE of Specific Distributions]]"
children: []
---
###### [[Maximum Likelihood Estimation (MLE)]] for [[Bernoulli Distribution|Bernoulli Distribution]]

𝑝<sub>𝑀𝐿𝐸</sub> = 𝑘 / 𝑛
### Computation

> [!expand]- computation
> Let {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>} be samples taken from a [[Bernoulli Distribution|Bernoulli(𝑝) Distribution]]
>
> How to estimate parameter 𝑝 using [[Maximum Likelihood Estimation (MLE)|MLE method]]?
>
> the log-likelihood function 𝓛(𝜃) of 𝑛 Bernoulli Distribution is as follows
> - <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">𝓛(𝑝) = 𝑘·𝑙𝑛(𝑝) + (𝑛-𝑘)·𝑙𝑛(1-𝑝)</font><font style="color: rgb(51,51,51);"> <font style="color: rgb(128,128,128);">\# click here for </font>[[Log-Likelihood Function - Bernoulli Distribution|step-by-step computation]]</font></font>
>
> now differentiate with respect to 𝑝
> - 𝓛(𝑝) = 𝑘·𝑙𝑛(𝑝) + (𝑛-𝑘)·𝑙𝑛(1-𝑝)
> - 𝓛'(𝑝) = 𝑘/𝑝 - (𝑛-𝑘)/(1-𝑝)
>
> equate to 0 and solve for 𝑝
> - 𝓛'(𝑝) = 𝑘/𝑝 - (𝑛-𝑘)/(1-𝑝)
> - 0 = 𝑘/𝑝 - (𝑛-𝑘)/(1-𝑝)
> - (𝑛-𝑘)/(1-𝑝) = 𝑘/𝑝
> - (𝑛-𝑘)𝑝 = 𝑘(1-𝑝)
> - 𝑛𝑝 - 𝑘𝑝 = 𝑘 - 𝑘𝑝
> - 𝑛𝑝 - 𝑘𝑝 + 𝑘𝑝 = 𝑘
> - 𝑛𝑝 = 𝑘
> - 𝑝<sub>𝑀𝐿𝐸</sub> = 𝑘 / 𝑛
