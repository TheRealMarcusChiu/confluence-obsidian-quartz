---
title: "MLE - Multinoulli Distribution"
created: 2021-09-13T05:28:06.498-05:00
modified: 2021-09-13T05:28:06.498-05:00
parent: "[[MLE - Computing MLE of Specific Distributions]]"
children: []
---
###### [[Maximum Likelihood Estimation (MLE)]] for [[Multinoulli／Categorical Distribution - Generalized Bernoulli Distribution|Multinoulli Distribution]]

𝑝<sub>𝑖𝑀𝐿𝐸</sub> = 𝑛𝑢𝑚-𝑠𝑎𝑚𝑝𝑙𝑒𝑠-𝑤𝑖𝑡𝘩(𝑐𝑙𝑎𝑠𝑠-𝑖) / 𝑡𝑜𝑡𝑎𝑙-𝑠𝑎𝑚𝑝𝑙𝑒𝑠

> [!expand]- computation
> Let {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>} be samples taken from a [[Multinoulli／Categorical Distribution - Generalized Bernoulli Distribution|Multinoulli(𝑝1, ..., 𝑝𝑘) Distribution]]
>
> How to estimate parameter 𝑝<sub>𝑖</sub> using [[Maximum Likelihood Estimation (MLE)|MLE method]]?
>
> the log-likelihood function 𝓛(𝜃) of 𝑛 Mutinoulli Distribution is as follows
> - <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">𝓛(𝑝<sub>1</sub>, ..., 𝑝<sub>𝑘</sub>) = <font style="color: rgb(128,0,0);">𝑛𝑢𝑚-𝑠𝑎𝑚𝑝𝑙𝑒𝑠-𝑤𝑖𝑡𝘩(𝑐𝑙𝑎𝑠𝑠-1)</font><font style="color: rgb(128,0,0);">·𝑙𝑛(𝑝<sub>1</sub>)</font> + ... + <font style="color: rgb(0,128,0);">𝑛𝑢𝑚-𝑠𝑎𝑚𝑝𝑙𝑒𝑠-𝑤𝑖𝑡𝘩(𝑐𝑙𝑎𝑠𝑠-𝑘)</font><font style="color: rgb(0,128,0);">·𝑙𝑛(𝑝<sub>𝑘</sub>)</font></font><font style="color: rgb(51,51,51);"> <font style="color: rgb(128,128,128);">\# click here for </font>[[Log-Likelihood Function - Multinoulli Distribution|step-by-step computation]]</font></font>
>
> now differentiate with respect to 𝑝<sub>𝑖</sub>
> - 𝓛(𝑝<sub>1</sub>, ..., 𝑝<sub>𝑘</sub>) = <font style="color: rgb(128,0,0);">𝑛𝑢𝑚-𝑠𝑎𝑚𝑝𝑙𝑒𝑠-𝑤𝑖𝑡𝘩(𝑐𝑙𝑎𝑠𝑠-1)</font><font style="color: rgb(128,0,0);">·𝑙𝑛(𝑝<sub>1</sub>)</font> + ... + <font style="color: rgb(0,128,0);">𝑛𝑢𝑚-𝑠𝑎𝑚𝑝𝑙𝑒𝑠-𝑤𝑖𝑡𝘩(𝑐𝑙𝑎𝑠𝑠-𝑘)</font><font style="color: rgb(0,128,0);">·𝑙𝑛(𝑝<sub>𝑘</sub>)</font>
>
> equate to 0 and solve for 𝑝<sub>𝑖</sub>
> - 𝓛'(𝑝) = TODO
> - 0 = TODO
> - 𝑝<sub>𝑖𝑀𝐿𝐸</sub> = 𝑛𝑢𝑚-𝑠𝑎𝑚𝑝𝑙𝑒𝑠-𝑤𝑖𝑡𝘩(𝑐𝑙𝑎𝑠𝑠-𝑖) / 𝑡𝑜𝑡𝑎𝑙-𝑠𝑎𝑚𝑝𝑙𝑒𝑠
