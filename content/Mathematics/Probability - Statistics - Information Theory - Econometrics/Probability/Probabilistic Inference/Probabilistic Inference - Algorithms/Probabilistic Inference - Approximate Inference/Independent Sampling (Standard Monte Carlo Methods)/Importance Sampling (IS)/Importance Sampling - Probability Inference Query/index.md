---
title: "Importance Sampling - Probability Inference Query"
created: 2021-09-13T05:28:16.266-05:00
modified: 2025-09-28T14:43:13.299-05:00
parent: "[[Importance Sampling (IS)]]"
children: []
---
syntax

> [!expand]- Click here to expand...
> ![[Probabilistic Inference - Syntax#^excerpt]]
### Solving [[Probabilistic Inference - Query／Task Types (Posterior Conditional - Prior Marginal ／ Probability of Evidence - MPE - MAP)|Probability of Evidence Query]] Using Un-Normalized Importance Sampling

> [!expand]- Click here to expand...
> use a proposal distribution 𝐐(𝑯) where:
> - 𝑯 = 𝑿\\𝑬
> - 𝐏(𝑯=𝒉, 𝑬=𝒆) \> 0 → 𝐐(𝑯=𝒉) \> 0
>
> express 𝐏(𝑬=𝒆) as follows:
> - 𝐏(𝑬=𝒆) = 𝛴<sub>𝘩<sub>1</sub>∊𝐻<sub>1</sub></sub> ... 𝛴<sub>𝘩<sub>𝑡</sub>∊𝐻<sub>𝑡</sub></sub> \[ 𝐏(𝑯=𝒉, 𝑬=𝒆) \]
> - 𝐏(𝑬=𝒆) = 𝛴<sub>𝘩<sub>1</sub>∊𝐻<sub>1</sub></sub> ... 𝛴<sub>𝘩<sub>𝑡</sub>∊𝐻<sub>𝑡</sub></sub> \[ 𝐏(𝑯=𝒉, 𝑬=𝒆) 𝐐(𝑯=𝒉)/𝐐(𝑯=𝒉) \]
> - 𝐏(𝑬=𝒆) = 𝐄<sub>𝐐</sub>\[ 𝐏(𝑯=𝒉, 𝑬=𝒆)/𝐐(𝑯=𝒉) \]
> - 𝐏(𝑬=𝒆) = 𝐄<sub>𝐐</sub>\[ 𝑤(𝒉) \]
>
> generate 𝑛 samples from proposal distribution 𝐐 and estimate 𝐏(𝑬=𝒆) using the following Monte Carlo estimate:
> - 𝐏ˆ(𝑬=𝒆) = (1/𝑛) 𝛴<sub>1≤𝑖≤𝑛</sub> \[ 𝐏(𝑯=𝒉<sup>𝑖</sup>, 𝑬=𝒆)/𝐐(𝑯=𝒉<sup>𝑖</sup>) \]
> - 𝐏ˆ(𝑬=𝒆) = (1/𝑛) 𝛴<sub>1≤𝑖≤𝑛</sub> \[ 𝑤(𝒉<sup>𝑖</sup>) \]
### Solving [[Probabilistic Inference - Query／Task Types (Posterior Conditional - Prior Marginal ／ Probability of Evidence - MPE - MAP)|Probability of Evidence Query]] Using Un-Normalized Importance Sampling - Example

> [!expand]- Click here to expand...
> - given the [[Bayesian Networks (BN)|Bayesian Network]] below
> - let 𝑙=1 and 𝑠=0 be the evidence
> - imagine uniform distribution 𝐐 defined over (𝐷, 𝐼, 𝐺)
> - 𝐏ˆ(𝑬=𝒆) = 𝑎𝑣𝑒𝑟𝑎𝑔𝑒-𝑜𝑓\[ 𝐏(𝑠𝑎𝑚𝑝𝑙𝑒, 𝑒𝑣𝑖𝑑𝑒𝑛𝑐𝑒) / 𝐐(𝑠𝑎𝑚𝑝𝑙𝑒) \]
> - 𝐏ˆ(𝑬=𝒆) = (1/𝑛) 𝛴<sub>1≤𝑖≤𝑛</sub> \[ 𝐏(𝑠𝑎𝑚𝑝𝑙𝑒<sup>𝑖</sup>, 𝑒𝑣𝑖𝑑𝑒𝑛𝑐𝑒) / 𝐐(𝑠𝑎𝑚𝑝𝑙𝑒<sup>𝑖</sup>) \]
> - 𝐏ˆ(𝑬=𝒆) = (1/𝑛) 𝛴<sub>1≤𝑖≤𝑛</sub> \[ 𝐏(𝑯=𝒉<sup>𝑖</sup>, 𝑬=𝒆)/𝐐(𝑯=𝒉<sup>𝑖</sup>) \]
> - 𝐏ˆ(𝑬=𝒆) = (1/𝑛) 𝛴<sub>1≤𝑖≤𝑛</sub> \[ 𝐏(𝐷=𝑑<sup>𝑖</sup>, 𝐼=𝑖<sup>𝑖</sup>, 𝐺=𝑔<sup>𝑖</sup>, 𝐿=1, 𝑆=0) / 𝐐(𝐷=𝑑<sup>𝑖</sup>, 𝐼=𝑖<sup>𝑖</sup>, 𝐺=𝑔<sup>𝑖</sup>) \]
> - 𝐏ˆ(𝑬=𝒆) = (1/𝑛) 𝛴<sub>1≤𝑖≤𝑛</sub> <strong>\[</strong> \[𝐏(𝐷=𝑑<sup>𝑖</sup>)·𝐏(𝐼=𝑖<sup>𝑖</sup>)·𝐏(𝐺=𝑔<sup>𝑖</sup>|𝐷=𝑑<sup>𝑖</sup>,𝐼=𝑖<sup>𝑖</sup>)·𝐏(𝐿=1|𝐺=𝑔<sup>𝑖</sup>)·𝐏(𝑆=0|𝐼=𝑖<sup>𝑖</sup>)\] / \[𝐐(𝐷=𝑑<sup>𝑖</sup>)·𝐐(𝐼=𝑖<sup>𝑖</sup>)·𝐐(𝐺=𝑔<sup>𝑖</sup>|𝐷=𝑑<sup>𝑖</sup>,𝐼=𝑖<sup>𝑖</sup>)\] <strong>\]</strong>
>
> ![[Importance Sampling - Probability Inference Query/importance-sampling-bayesian-network-example.png]]
> - sample 𝑖=1 = (𝐷=0, 𝐼=0, 𝐺=0)
> 	- 𝐏(𝑠𝑎𝑚𝑝𝑙𝑒<sup>𝑖</sup>, 𝑒𝑣𝑖𝑑𝑒𝑛𝑐𝑒) = 0.6 \* 0.7 \* 0.3 \* 0.9 \* 0.95 = 0.10773
> 	- 𝐐(𝑠𝑎𝑚𝑝𝑙𝑒<sup>𝑖</sup>) = 0.5 \* 0.5 \* 0.33 = 0.0825
> 	- 𝐏(𝑠𝑎𝑚𝑝𝑙𝑒<sup>𝑖</sup>, 𝑒𝑣𝑖𝑑𝑒𝑛𝑐𝑒) / 𝐐(𝑠𝑎𝑚𝑝𝑙𝑒<sup>𝑖</sup>) = 0.10773 / 0.0825 = 1.305818182
> - sample 𝑖=2 = (𝐷=0, 𝐼=0, 𝐺=0)
> 	- 𝐏(𝑠𝑎𝑚𝑝𝑙𝑒<sup>𝑖</sup>, 𝑒𝑣𝑖𝑑𝑒𝑛𝑐𝑒) = 0.4 \* 0.7 \* 0.3 \* 0.9 \* 0.95 = 0.07182
> 	- 𝐐(𝑠𝑎𝑚𝑝𝑙𝑒<sup>𝑖</sup>) = 0.5 \* 0.5 \* 0.33 = 0.0825
> 	- 𝐏(𝑠𝑎𝑚𝑝𝑙𝑒<sup>𝑖</sup>, 𝑒𝑣𝑖𝑑𝑒𝑛𝑐𝑒) / 𝐐(𝑠𝑎𝑚𝑝𝑙𝑒<sup>𝑖</sup>) = 0.07182 / 0.0825 = 0.870545455
> - and so on...
> - 𝐏ˆ(𝑬=𝒆) = (1/𝑛) (1.305818182 + 0.870545455 + ... + 𝑛<sup>𝑡𝘩</sup>𝑠𝑎𝑚𝑝𝑙𝑒)
### Solving [[Probabilistic Inference - Query／Task Types (Posterior Conditional - Prior Marginal ／ Probability of Evidence - MPE - MAP)|Posterior Conditional Query]] Using Un-Normalized Importance Sampling (Ratio Likelihood Weighting)

> [!expand]- Click here to expand...
> [[Probabilistic Inference - Query／Task Types (Posterior Conditional - Prior Marginal ／ Probability of Evidence - MPE - MAP)|posterior conditional query]] 𝐏(𝑄=𝒒|𝑬=𝒆)
>
> estimate the numerator and denominator with un-normalized importance sampling
> - 𝐏ˆ(𝑄=𝒒|𝑬=𝒆) = <font style="color: rgb(128,0,0);">𝐏ˆ(𝑄=𝒒,𝑬=𝒆)</font> / <font style="color: rgb(0,128,0);">𝐏ˆ(𝑬=𝒆)</font>
> 	- <font style="color: rgb(128,0,0);">𝐏ˆ(𝑄=𝒒,𝑬=𝒆)</font> = <font style="color: rgb(128,0,0);">(1/𝑛<font style="color: rgb(255,0,255);">'</font>) 𝛴<sub>1≤𝑖≤𝑛<font style="color: rgb(255,0,255);">'</font></sub></font> <font style="color: rgb(128,0,0);">\[ 𝑤<font style="color: rgb(255,0,255);">'</font>(𝒉<sup>𝑖</sup>) \]</font>
> 	- <font style="color: rgb(128,0,0);"><font style="color: rgb(0,128,0);">𝐏ˆ(𝑬=𝒆) <font style="color: rgb(51,51,51);">=</font> (1/𝑛) 𝛴<sub>1≤𝑖≤𝑛</sub> \[ 𝑤(𝒉<sup>𝑖</sup>) \]</font></font>
> - 𝐏ˆ(𝑄=𝒒|𝑬=𝒆) = <font style="color: rgb(128,0,0);"><strong>\[ </strong>(1/𝑛<font style="color: rgb(255,0,255);">'</font>) 𝛴<sub>1≤𝑖≤𝑛<font style="color: rgb(255,0,255);">'</font></sub></font> <font style="color: rgb(128,0,0);">\[ 𝑤<font style="color: rgb(255,0,255);">'</font>(𝒉<sup>𝑖</sup>) \] <strong>\]</strong></font> /<font style="color: rgb(0,128,0);"> <strong>\[ </strong>(1/𝑛) 𝛴<sub>1≤𝑖≤𝑛</sub> \[ 𝑤(𝒉<sup>𝑖</sup>) \] <strong>\]</strong></font>
>
> However, this ratio estimate is often very bad because the numerator and denominator errors may be cumulative and may have a different source. For example, if the numerator is an under-estimate and the denominator is an over-estimate
>
> how to fix this?
>
> use normalized importance sampling
### Solving [[Probabilistic Inference - Query／Task Types (Posterior Conditional - Prior Marginal ／ Probability of Evidence - MPE - MAP)|Posterior Conditional Query]] Using Normalized Importance Sampling (Normalized Likelihood Weighting)

> [!expand]- Click here to expand...
> given a [[Dirac Delta Distribution Function - Unit Impluse|dirac delta function]] 𝛿<sub>𝒄</sub>(𝒉) (which is 1 if 𝒉 contains 𝑪=𝒄, otherwise 0)
> - 𝐏(𝑪=𝒄|𝑬=𝒆) = 𝐏(𝑪=𝒄,𝑬=𝒆) / 𝐏(𝑬=𝒆)
> - 𝐏(𝑪=𝒄|𝑬=𝒆) = 𝛴<sub>𝘩<sub>1</sub>∊𝐻<sub>1</sub></sub> ... 𝛴<sub>𝘩<sub>𝑡</sub>∊𝐻<sub>𝑡</sub></sub> \[ 𝛿<sub>𝒄</sub>(𝒉)·𝐏(𝑯=𝒉,𝑬=𝒆) \] / 𝛴<sub>𝘩<sub>1</sub>∊𝐻<sub>1</sub></sub> ... 𝛴<sub>𝘩<sub>𝑡</sub>∊𝐻<sub>𝑡</sub></sub> \[ 𝐏(𝑯=𝒉,𝑬=𝒆) \]
>
> where:
> - 𝑿 - is set of all variables
> - 𝑯 = 𝑿\\𝑬
> - 𝑪 ⊆ 𝑯
>
> use a proposal distribution 𝐐(𝑯) where:
> - 𝑯 = 𝑿\\𝑬
> - 𝐏(𝑯=𝒉, 𝑬=𝒆) \> 0 → 𝐐(𝑯=𝒉) \> 0
>
> now we can use the same samples from proposal distribution 𝐐 to estimate both the numerator and denominator
> - 𝐏(𝑪=𝒄|𝑬=𝒆) = <font style="color: rgb(128,0,0);">𝛴<sub>𝘩<sub>1</sub>∊𝐻<sub>1</sub></sub> ... 𝛴<sub>𝘩<sub>𝑡</sub>∊𝐻<sub>𝑡</sub></sub> \[ 𝛿<sub>𝒄</sub>(𝒉)·𝐏(𝑯=𝒉,𝑬=𝒆) \]</font> / <font style="color: rgb(0,128,0);">𝛴<sub>𝘩<sub>1</sub>∊𝐻<sub>1</sub></sub> ... 𝛴<sub>𝘩<sub>𝑡</sub>∊𝐻<sub>𝑡</sub></sub> \[ 𝐏(𝑯=𝒉,𝑬=𝒆) \]</font>
> - 𝐏(𝑪=𝒄|𝑬=𝒆) = <font style="color: rgb(128,0,0);">𝛴<sub>𝒉∊𝑯</sub>\[𝛿<sub>𝒄</sub>(𝒉)·𝐏(𝑯=𝒉,𝑬=𝒆)\]</font> / <font style="color: rgb(0,128,0);">𝛴<sub>𝒉∊𝑯</sub>\[𝐏(𝑯=𝒉,𝑬=𝒆)\]</font>
> - 𝐏(𝑪=𝒄|𝑬=𝒆) = <font style="color: rgb(128,0,0);">𝛴<sub>𝒉∊𝑯</sub>\[𝛿<sub>𝒄</sub>(𝒉)·𝐏(𝑯=𝒉,𝑬=𝒆) · 𝐐(𝑯=𝒉)/𝐐(𝑯=𝒉) \]</font> / <font style="color: rgb(0,128,0);">𝛴<sub>𝒉∊𝑯</sub>\[𝐏(𝑯=𝒉,𝑬=𝒆) · 𝐐(𝑯=𝒉)/𝐐(𝑯=𝒉)\]</font>
> - 𝐏(𝑪=𝒄|𝑬=𝒆) =<font style="color: rgb(128,0,0);"> 𝛴<sub>𝒉∊𝑯</sub>\[𝛿<sub>𝒄</sub>(𝒉)·\[𝐏(𝑯=𝒉,𝑬=𝒆)/𝐐(𝑯=𝒉)\] · 𝐐(𝑯=𝒉)\]</font> / <font style="color: rgb(0,128,0);">𝛴<sub>𝒉∊𝑯</sub>\[\[𝐏(𝑯=𝒉,𝑬=𝒆)/𝐐(𝑯=𝒉)\] · 𝐐(𝑯=𝒉)\]</font>
> - 𝐏(𝑪=𝒄|𝑬=𝒆) = <font style="color: rgb(128,0,0);">𝐄<sub>𝐐</sub>\[𝛿<sub>𝒄</sub>(𝒉)·\[𝐏(𝑯=??,𝑬=𝒆)/𝐐(𝑯=𝒉)\]\]</font> / <font style="color: rgb(0,128,0);">𝐄<sub>𝐐</sub>\[𝐏(𝑯=𝒉,𝑬=𝒆)/𝐐(𝑯=𝒉)\]</font>
> - 𝐏(𝑪=𝒄|𝑬=𝒆) = <font style="color: rgb(128,0,0);">𝐄<sub>𝐐</sub>\[𝛿<sub>𝒄</sub>(𝒉)·\[𝐏(𝑯=𝒉,𝑬=𝒆)/𝐐(𝑯=𝒉)\]\]</font> / <font style="color: rgb(0,128,0);">𝐄<sub>𝐐</sub>\[𝐏(𝑯=𝒉,𝑬=𝒆)/𝐐(𝑯=𝒉)\]</font>
> - 𝐏(𝑪=𝒄|𝑬=𝒆) ≈ <font style="color: rgb(128,0,0);">(1/𝑛) 𝛴<sub>1≤𝑖≤𝑛</sub> \[ 𝛿<sub>𝒄</sub>(𝒉<sup>𝑖</sup>)·\[𝐏(𝑯=𝒉<sup>𝑖</sup>,𝑬=𝒆)/𝐐(𝑯=𝒉<sup>𝑖</sup>)\] \]</font> / <font style="color: rgb(0,128,0);">(1/𝑛) 𝛴<sub>1≤𝑖≤𝑛</sub> \[ <font style="color: rgb(0,128,0);">𝐏(𝑯=𝒉<sup>𝑖</sup>,𝑬=𝒆)/𝐐(𝑯=<font style="color: rgb(0,128,0);"><font style="color: rgb(0,128,0);">𝒉<sup>𝑖</sup></font></font>)</font> \]</font> <font style="color: rgb(128,128,128);">\# monte carlo estimate, where:</font>
> 	- <font style="color: rgb(128,128,128);">𝑛 is the number of samples</font>
> 	- <font style="color: rgb(128,128,128);">𝒉<sup>𝑖</sup> - is the 𝑖<sup>𝑡𝘩</sup> sample</font>
> 	- <font style="color: rgb(128,128,128);">{<font style="color: rgb(128,128,128);">𝒉<sup>1</sup></font>, ..., <font style="color: rgb(128,128,128);">𝒉<sup>𝑛</sup></font>} are samples drawn from the proposal distribution 𝐐</font>
> - <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">𝐏(𝑪=𝒄|𝑬=𝒆) ≈</font> <font style="color: rgb(128,0,0);">𝛴<sub>1≤𝑖≤𝑛</sub> \[ 𝛿<sub>𝒄</sub>(𝒉<sup>𝑖</sup>)·\[𝐏(𝑯=𝒉<sup>𝑖</sup>,𝑬=𝒆)/𝐐(𝑯=𝒉<sup>𝑖</sup>)\] \]</font> / <font style="color: rgb(0,128,0);">𝛴<sub>1≤𝑖≤𝑛</sub> \[ <font style="color: rgb(0,128,0);">𝐏(𝑯=𝒉<sup>𝑖</sup>,𝑬=𝒆)/𝐐(𝑯=<font style="color: rgb(0,128,0);"><font style="color: rgb(0,128,0);">𝒉<sup>𝑖</sup></font></font>)</font> \]</font> <font style="color: rgb(128,128,128);">\# rem</font></font><font style="color: rgb(128,128,128);">ove (1/𝑛)</font>
> - <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">𝐏(𝑪=𝒄|𝑬=𝒆) ≈</font> <font style="color: rgb(128,0,0);">𝛴<sub>1≤𝑖≤𝑛</sub> \[ 𝛿<sub>𝒄</sub>(𝒉<sup>𝑖</sup>)·𝑤(𝒉<sup>𝑖</sup>)\] \]</font> / <font style="color: rgb(0,128,0);">𝛴<sub>1≤𝑖≤𝑛</sub> \[ </font><font style="color: rgb(0,128,0);">𝑤(𝒉<sup>𝑖</sup>) \]</font> \# 𝑤(𝒉<sup>𝑖</sup>) is the importance weight</font>
