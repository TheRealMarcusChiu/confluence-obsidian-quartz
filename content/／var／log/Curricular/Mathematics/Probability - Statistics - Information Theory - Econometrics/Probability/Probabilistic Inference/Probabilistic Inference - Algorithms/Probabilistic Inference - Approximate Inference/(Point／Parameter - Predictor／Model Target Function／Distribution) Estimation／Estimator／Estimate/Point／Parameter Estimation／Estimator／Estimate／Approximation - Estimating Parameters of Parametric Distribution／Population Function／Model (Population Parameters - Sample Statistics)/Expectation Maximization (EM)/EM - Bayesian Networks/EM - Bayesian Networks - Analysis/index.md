---
title: "EM - Bayesian Networks - Analysis"
created: 2021-09-13T05:27:54.958-05:00
modified: 2024-12-05T10:51:28.660-06:00
parent: "[[EM - Bayesian Networks]]"
children: []
---
# Single Data Instance
- 𝑫 - set of observed variables in the data instance
- 𝒅 - values of 𝑫
- 𝑯 - set of hidden variables in the data instance
- 𝒉 - values of 𝑯
- 𝑸(𝑯) - joint probability distribution of 𝑯

data instance = {𝑫=𝒅, 𝑯=?}

[[Likelihood Function - Log-Likelihood Function - Score Function|log-likelihood function]] 𝓛(𝜃|?) of a [[Bayesian Networks (BN)|Bayesian Network]] of 𝑘 variables {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑘</sub>} wrt:
- a fully instantiated data instance {𝑫=𝒅, 𝑯=𝒉} is defined as:
	- 𝓛(𝜃|{𝒅,𝒉}) = 𝐏(𝒅,𝒉|𝜃)
	- 𝓛(𝜃|{𝒅,𝒉}) = 𝛴<sub>1≤𝑖≤𝑘</sub> 𝛴<sub>(𝑥<sub>𝑖</sub>,𝒖<sub>𝑖</sub>)∊𝑉𝑎𝑙(𝑋<sub>𝑖</sub>,𝑝𝑎𝑟𝑒𝑛𝑡𝑠-𝑜𝑓(𝑋<sub>𝑖</sub>))</sub><strong>\[</strong> (𝐼<sub>⟨𝒅,𝒉⟩</sub>\[𝑥<sub>𝑖</sub>,𝒖<sub>𝑖</sub>\]) · 𝑙𝑜𝑔(𝜃<sub>𝑥<sub>𝑖</sub>|𝒖<sub>𝑖</sub></sub>) <strong>\]</strong>
- a data instance {𝑫=𝒅, 𝑯=?} with 𝑸(𝑯) is defined as:
	- 𝐄<sub>𝑸</sub>\[<font style="color: rgb(128,128,128);">𝓛(𝜃|{𝒅,𝑯})</font>\] = 𝛴<sub>1≤𝑖≤𝑘</sub> 𝛴<sub>(𝑥<sub>𝑖</sub>,𝒖<sub>𝑖</sub>)∊𝑉𝑎𝑙(𝑋<sub>𝑖</sub>,𝑝𝑎𝑟𝑒𝑛𝑡𝑠-𝑜𝑓(𝑋<sub>𝑖</sub>))</sub><strong>\[ </strong>𝐄<sub>𝑸</sub>\[<font style="color: rgb(128,128,128);">(𝐼<sub>⟨𝒅,<font style="color: rgb(128,128,128);">𝑯</font>⟩</sub>\[𝑥<sub>𝑖</sub>,𝒖<sub>𝑖</sub>\])</font>\] · 𝑙𝑜𝑔(𝜃<sub>𝑥<sub>𝑖</sub>|𝒖<sub>𝑖</sub></sub>) <strong>\]</strong>
	- 𝐄<sub>𝑸</sub>\[<font style="color: rgb(128,128,128);">𝓛(𝜃|{𝒅,𝑯})</font>\] = 𝛴<sub>1≤𝑖≤𝑘</sub> 𝛴<sub>(𝑥<sub>𝑖</sub>,𝒖<sub>𝑖</sub>)∊𝑉𝑎𝑙(𝑋<sub>𝑖</sub>,𝑝𝑎𝑟𝑒𝑛𝑡𝑠-𝑜𝑓(𝑋<sub>𝑖</sub>))</sub><strong>\[ </strong><font style="color: rgb(128,128,128);">𝑸(𝑥<sub>𝑖</sub>,𝒖<sub>𝑖</sub>)</font> · 𝑙𝑜𝑔(𝜃<sub>𝑥<sub>𝑖</sub>|𝒖<sub>𝑖</sub></sub>) <strong>\]</strong>

# Multiple Data Instances

given a data-set of 𝑛 instances, we now have a set of 𝑸's for each data instance
- 𝑫\[𝑗\] - set of observed variables in the 𝑗<sup>𝑡ℎ</sup> data instance
- 𝒅\[𝑗\] - values of 𝑫\[𝑗\]
- 𝑯\[𝑗\] - set of hidden variables in the 𝑗<sup>𝑡ℎ</sup> data instance
- 𝒉\[𝑗\] - values of 𝑯\[𝑗\]
- 𝑸<sub>𝑗</sub>(𝑯\[𝑗\]) = 𝐏(𝑯\[𝑗\] | 𝒅\[𝑗\],𝜃)

[[Likelihood Function - Log-Likelihood Function - Score Function|log-likelihood function]] 𝓛(𝜃|?) of a [[Bayesian Networks (BN)|Bayesian Network]] of 𝑘 variables {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑘</sub>} wrt:
- 𝛴<sub>1≤𝑗≤𝑛</sub> <strong>\[</strong> 𝐄<sub>𝑸<sub>𝑗</sub></sub>\[<font style="color: rgb(128,128,128);">𝓛(𝜃|{𝒅\[𝑗\],𝑯\[𝑗\]})</font>\] <strong>\]</strong> = 𝛴<sub>1≤𝑗≤𝑛</sub>𝛴<sub>1≤𝑖≤𝑘</sub> 𝛴<sub>(𝑥<sub>𝑖</sub>,𝒖<sub>𝑖</sub>)∊𝑉𝑎𝑙(𝑋<sub>𝑖</sub>,𝑝𝑎𝑟𝑒𝑛𝑡𝑠-𝑜𝑓(𝑋<sub>𝑖</sub>))</sub><strong>\[ </strong><font style="color: rgb(128,128,128);">𝑸<sub>𝑗</sub>(𝑥<sub>𝑖</sub>,𝒖<sub>𝑖</sub>)</font> · 𝑙𝑜𝑔(𝜃<sub>𝑥<sub>𝑖</sub>|𝒖<sub>𝑖</sub></sub>) <strong>\]</strong>
- 𝛴<sub>1≤𝑗≤𝑛</sub> <strong>\[</strong> 𝐄<sub>𝑸<sub>𝑗</sub></sub>\[<font style="color: rgb(128,128,128);">𝓛(𝜃|{𝒅\[𝑗\],𝑯\[𝑗\]})</font>\] <strong>\]</strong> = 𝛴<sub>1≤𝑗≤𝑛</sub>𝛴<sub>1≤𝑖≤𝑘</sub> 𝛴<sub>(𝑥<sub>𝑖</sub>,𝒖<sub>𝑖</sub>)∊𝑉𝑎𝑙(𝑋<sub>𝑖</sub>,𝑝𝑎𝑟𝑒𝑛𝑡𝑠-𝑜𝑓(𝑋<sub>𝑖</sub>))</sub><strong>\[ </strong><font style="color: rgb(128,128,128);">𝐏(𝑥<sub>𝑖</sub>,𝒖<sub>𝑖</sub> | 𝒅\[𝑗\],𝜃)</font> · 𝑙𝑜𝑔(𝜃<sub>𝑥<sub>𝑖</sub>|𝒖<sub>𝑖</sub></sub>) <strong>\]</strong>
- 𝛴<sub>1≤𝑗≤𝑛</sub> <strong>\[</strong> 𝐄<sub>𝑸<sub>𝑗</sub></sub>\[<font style="color: rgb(128,128,128);">𝓛(𝜃|{𝒅\[𝑗\],𝑯\[𝑗\]})</font>\] <strong>\]</strong> =<sub></sub>𝛴<sub>1≤𝑖≤𝑘</sub> 𝛴<sub>(𝑥<sub>𝑖</sub>,𝒖<sub>𝑖</sub>)∊𝑉𝑎𝑙(𝑋<sub>𝑖</sub>,𝑝𝑎𝑟𝑒𝑛𝑡𝑠-𝑜𝑓(𝑋<sub>𝑖</sub>))</sub>𝛴<sub>1≤𝑗≤𝑛</sub><strong>\[ </strong><font style="color: rgb(128,128,128);">𝐏(𝑥<sub>𝑖</sub>,𝒖<sub>𝑖</sub> | 𝒅\[𝑗\],𝜃)</font> · 𝑙𝑜𝑔(𝜃<sub>𝑥<sub>𝑖</sub>|𝒖<sub>𝑖</sub></sub>) <strong>\]</strong>
- 𝛴<sub>1≤𝑗≤𝑛</sub> <strong>\[</strong> 𝐄<sub>𝑸<sub>𝑗</sub></sub>\[<font style="color: rgb(128,128,128);">𝓛(𝜃|{𝒅\[𝑗\],𝑯\[𝑗\]})</font>\] <strong>\]</strong> =<sub></sub>𝛴<sub>1≤𝑖≤𝑘</sub> 𝛴<sub>(𝑥<sub>𝑖</sub>,𝒖<sub>𝑖</sub>)∊𝑉𝑎𝑙(𝑋<sub>𝑖</sub>,𝑝𝑎𝑟𝑒𝑛𝑡𝑠-𝑜𝑓(𝑋<sub>𝑖</sub>))</sub><font style="color: rgb(128,128,128);">𝛴<sub>1≤𝑗≤𝑛</sub><strong>\[ </strong>𝐏(𝑥<sub>𝑖</sub>,𝒖<sub>𝑖</sub> | 𝒅\[𝑗\],𝜃) </font><strong><font style="color: rgb(128,128,128);">\]</font> </strong>· 𝑙𝑜𝑔(𝜃<sub>𝑥<sub>𝑖</sub>|𝒖<sub>𝑖</sub></sub>)
- 𝛴<sub>1≤𝑗≤𝑛</sub> <strong>\[</strong> 𝐄<sub>𝑸<sub>𝑗</sub></sub>\[<font style="color: rgb(128,128,128);">𝓛(𝜃|{𝒅\[𝑗\],𝑯\[𝑗\]})</font>\] <strong>\]</strong> =<sub></sub>𝛴<sub>1≤𝑖≤𝑘</sub> 𝛴<sub>(𝑥<sub>𝑖</sub>,𝒖<sub>𝑖</sub>)∊𝑉𝑎𝑙(𝑋<sub>𝑖</sub>,𝑝𝑎𝑟𝑒𝑛𝑡𝑠-𝑜𝑓(𝑋<sub>𝑖</sub>))</sub><font style="color: rgb(128,128,128);">𝑀̅<sub><font style="color: rgb(128,128,128);">𝜃</font></sub>\[<font style="color: rgb(128,128,128);">𝑥</font><sub>𝑖</sub><font style="color: rgb(128,128,128);">,𝒖</font><sub>𝑖</sub>\]</font> · 𝑙𝑜𝑔(𝜃<sub>𝑥<sub>𝑖</sub>|𝒖<sub>𝑖</sub></sub>)
