---
title: "MLE - Binomial Distribution"
created: 2021-09-13T05:28:04.459-05:00
modified: 2021-09-13T05:28:04.459-05:00
parent: "[[MLE - Computing MLE of Specific Distributions]]"
children: []
---
###### [[Maximum Likelihood Estimation (MLE)]] for [[Binomial Distribution]]

Let {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>} be samples taken from a [[Binomial Distribution|Binomial(𝑝) Distribution]]

How to estimate parameter 𝑝 using [[Maximum Likelihood Estimation (MLE)|MLE method]]?

the log-likelihood function 𝓛(𝜃) of an [[Binomial Distribution|Binomial(𝑝) Distribution]] is as follows
- <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">𝓛(𝑝) = 𝑛·𝑙𝑛(𝑛!/(𝑘!(𝑛-𝑘)!) + 𝑛·𝑘·𝑙𝑛(𝑝) + 𝑛·(𝑛-𝑘)·𝑙𝑛(1-𝑝) <font style="color: rgb(128,128,128);">\# click here for </font>[[Log-Likelihood Function - Binomial Distribution|step-by-step computation]]</font></font>

### Estimating 𝑝

𝑝<sub>𝑀𝐿𝐸</sub> = 𝑘 / 𝑛

> [!expand]- Click here to expand...
> now differentiate with respect to 𝑝
> - 𝓛(𝑝) = 𝑛·𝑙𝑛(𝑛!/(𝑘!(𝑛-𝑘)!) + 𝑛·𝑘·𝑙𝑛(𝑝) + 𝑛·(𝑛-𝑘)·𝑙𝑛(1-𝑝)
> - 𝓛'(𝑝) = 0 + 𝑛·𝑘/𝑝 - 𝑛·(𝑛-𝑘)/(1-𝑝)
> - 𝓛'(𝑝) = 𝑛·𝑘/𝑝 - 𝑛·(𝑛-𝑘)/(1-𝑝)
>
> equate to 0 and solve for 𝑝
> - 𝓛'(𝑝) = 𝑛·𝑘/𝑝 - 𝑛·(𝑛-𝑘)/(1-𝑝)
> - 0 = 𝑛·𝑘/𝑝 - 𝑛·(𝑛-𝑘)/(1-𝑝)
> - 𝑛·(𝑛-𝑘)/(1-𝑝) = 𝑛·𝑘/𝑝
> - 𝑝𝑛(𝑛-𝑘) = (1-𝑝)𝑛𝑘
> - 𝑝𝑛(𝑛-𝑘) = 𝑛𝑘 - 𝑝𝑛𝑘
> - 𝑝𝑛(𝑛-𝑘) + 𝑝𝑛𝑘 = 𝑛𝑘
> - 𝑝𝑛𝑛 - 𝑝𝑛𝑘 + 𝑝𝑛𝑘 = 𝑛𝑘
> - 𝑝𝑛𝑛 = 𝑛𝑘
> - 𝑝 = 𝑛𝑘 / 𝑛𝑛
> - 𝑝<sub>𝑀𝐿𝐸</sub> = 𝑘 / 𝑛
