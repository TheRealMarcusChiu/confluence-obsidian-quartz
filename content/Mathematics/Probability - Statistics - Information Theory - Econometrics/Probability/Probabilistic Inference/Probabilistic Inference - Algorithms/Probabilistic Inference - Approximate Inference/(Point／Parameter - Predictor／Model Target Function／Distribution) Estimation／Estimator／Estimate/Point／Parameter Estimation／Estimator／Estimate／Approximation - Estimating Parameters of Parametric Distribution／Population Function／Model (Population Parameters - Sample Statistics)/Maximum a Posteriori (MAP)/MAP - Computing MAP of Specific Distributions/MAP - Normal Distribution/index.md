---
title: "MAP - Normal Distribution"
created: 2021-09-13T05:27:59.790-05:00
modified: 2021-09-13T05:27:59.790-05:00
parent: "[[MAP - Computing MAP of Specific Distributions]]"
children: []
---
### MAP Estimate of Mean

𝜃<sub>𝑀𝐴𝑃</sub> = \[𝑛/(𝑛 + 𝜎<sup>2</sup>)\]𝑋̅ + \[𝜎<sup>2</sup>/(𝑛 + 𝜎<sup>2</sup>)\]<em>μ</em> <font style="color: rgb(128,128,128);">\# [[Convex Combination|convex combination]] of [[Sample Mean|sample mean 𝑋̅]] and prior mean <em>μ</em></font>

> [!expand]- computation
> assume:
> - {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>} sampled from some Normal distribution
> - 𝜃 - is a random variable with distribution Normal(μ,1)
> - 𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub> are [[Probability Independence (Marginal Independence - Conditional Independence)|conditionally independent]] given 𝜃:
> 	- 𝐏(𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>|𝜃) = ∏<sub>1≤𝑖≤𝑛</sub>𝐏(𝑋<sub>𝑖</sub>|𝜃)
>
> then:
> - 𝜃<sub>𝑀𝐴𝑃</sub>= 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝜃</sub> 𝐏(𝜃|𝑋1, ..., 𝑋𝑛)
> - 𝜃<sub>𝑀𝐴𝑃</sub> = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝜃</sub> 𝐏(𝑋1, ..., 𝑋𝑛|𝜃)𝐏(𝜃)
> - 𝜃<sub>𝑀𝐴𝑃</sub> = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝜃</sub> 𝑙𝑜𝑔\[𝐏(𝑋1, ..., 𝑋𝑛|𝜃)𝐏(𝜃)\]
> - 𝜃<sub>𝑀𝐴𝑃</sub> = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝜃</sub> 𝑙𝑜𝑔\[𝐏(𝑋1, ..., 𝑋𝑛|𝜃)\] + 𝑙𝑜𝑔\[𝐏(𝜃)\]
>
> derivative, set to 0 and solve for 0:
> - 0 = (𝛿/𝛿𝜃)𝑙𝑜𝑔\[𝐏(𝑋1, ..., 𝑋𝑛|𝜃)\] + (𝛿/𝛿𝜃)𝑙𝑜𝑔\[𝐏(𝜃)\]
> 	- (𝛿/𝛿𝜃)𝑙𝑜𝑔\[𝐏(𝑋1, ..., 𝑋𝑛|𝜃)\] = (1/𝜎<sup>2</sup>)(∑<sub>1≤𝑖≤𝑛</sub>\[𝑋<sub>𝑖</sub>\] - 𝑛𝜃) <font style="color: rgb(128,128,128);">\# we just know</font>
> 	- (𝛿/𝛿𝜃)𝑙𝑜𝑔\[𝐏(𝜃)\] = (𝛿/𝛿𝜃)𝑙𝑜𝑔\[𝐏(𝜃)\]
> 		- 𝐏(𝜃) = \[1/√(2𝜋)\]𝑒<sup>-(1/2)(𝜃-μ)<sup>2</sup></sup>
> 		- 𝑙𝑜𝑔\[𝐏(𝜃)\] = -(1/2)𝑙𝑜𝑔(2𝜋) - (1/2)(𝜃-μ)<sup>2</sup>
> 		- (𝛿/𝛿𝜃)𝑙𝑜𝑔\[𝐏(𝜃)\] = 0 - (1/2)2(𝜃-μ)
> 		- (𝛿/𝛿𝜃)𝑙𝑜𝑔\[𝐏(𝜃)\] = 0 - (𝜃 - μ)
> 		- (𝛿/𝛿𝜃)𝑙𝑜𝑔\[𝐏(𝜃)\] = 0 - 𝜃 + μ
> 		- (𝛿/𝛿𝜃)𝑙𝑜𝑔\[𝐏(𝜃)\] = μ - 𝜃
> - 0 = (1/𝜎<sup>2</sup>)(∑<sub>1≤𝑖≤𝑛</sub>\[𝑋<sub>𝑖</sub>\] - 𝑛𝜃) + μ - 𝜃
> - 0 = (1/𝜎<sup>2</sup>)∑<sub>1≤𝑖≤𝑛</sub>\[𝑋<sub>𝑖</sub>\] - (1/𝜎<sup>2</sup>)(𝑛𝜃) + μ - 𝜃
> - 0 = (1/𝜎<sup>2</sup>)∑<sub>1≤𝑖≤𝑛</sub>\[𝑋<sub>𝑖</sub>\] + μ - (𝑛/𝜎<sup>2</sup>)𝜃 - 𝜃
> - 0 = (1/𝜎<sup>2</sup>)∑<sub>1≤𝑖≤𝑛</sub>\[𝑋<sub>𝑖</sub>\] + μ - 𝜃\[(𝑛/𝜎<sup>2</sup>) + 1\]
> - 𝜃\[(𝑛/𝜎<sup>2</sup>) + 1\] = (1/𝜎<sup>2</sup>)∑<sub>1≤𝑖≤𝑛</sub>\[𝑋<sub>𝑖</sub>\] + μ
> - 𝜃 = \[(1/𝜎<sup>2</sup>)∑<sub>1≤𝑖≤𝑛</sub>\[𝑋<sub>𝑖</sub>\] + μ\] / \[(𝑛/𝜎<sup>2</sup>) + 1\]
> - 𝜃 = \[∑<sub>1≤𝑖≤𝑛</sub>\[𝑋<sub>𝑖</sub>\] + 𝜎<sup>2</sup>μ\] / \[𝑛 + 𝜎<sup>2</sup>\]
> - 𝜃 = \[𝑛(1/𝑛)∑<sub>1≤𝑖≤𝑛</sub>\[𝑋<sub>𝑖</sub>\] + 𝜎<sup>2</sup>μ\] / \[𝑛 + 𝜎<sup>2</sup>\]
> - 𝜃 = \[𝑛𝑋̅ + 𝜎<sup>2</sup>μ\] / \[𝑛 + 𝜎<sup>2</sup>\]
> - 𝜃<sub>𝑀𝐴𝑃</sub> = \[𝑛/(𝑛 + 𝜎<sup>2</sup>)\]𝑋̅ + \[𝜎<sup>2</sup>/(𝑛 + 𝜎<sup>2</sup>)\]μ
### MAP Estimate of Variance

TODO
