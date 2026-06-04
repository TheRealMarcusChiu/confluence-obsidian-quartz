---
title: "MLE - Exponential Family"
created: 2021-09-13T05:28:05.888-05:00
modified: 2021-09-13T05:28:05.888-05:00
parent: "[[MLE - Computing MLE of Specific Distributions]]"
children: []
---
###### [[Maximum Likelihood Estimation (MLE)]] for [[Exponential Family]]
- (𝛿/𝛿𝜃<sub>𝑗</sub>)𝑙𝑜𝑔\[𝑧(𝜃)\] = 𝐄<sub>𝜽</sub>\[𝑠<sub>𝑗</sub>(𝑥)\]
- <font style="color: rgb(128,0,0);"><font style="color: rgb(51,51,51);">𝐄<sub>𝜽</sub>\[𝑠<sub>𝑗</sub>(𝑥)\] = ∑<sub>1≤𝑖≤𝑛</sub>𝑠<sub>𝑗</sub>(𝑋<sub>𝑖</sub></font><font style="color: rgb(51,51,51);">) / 𝑛</font> <font style="color: rgb(128,128,128);">\#</font> [[Sample Mean|sample mean]]</font>

> [!expand]- computation
> let:
> - 𝑥 ∊ ℝ<sup>𝑑</sup>
> - 𝜽 ∊ ℝ<sup>𝑘</sup>
> - 𝜂(𝜽) = 𝜽
>
> 𝜽 = {𝜃<sub>1</sub>, ..., 𝜃<sub>𝑘</sub>} and 𝒔 = {𝑠<sub>1</sub>, ..., 𝑠<sub>𝑘</sub>} thus:
> - 𝐏(𝑥|𝜽) = 𝐏<sub>𝜽</sub>(𝑥) = 𝑒𝑥𝑝\[∑<sub>1≤𝑖≤𝑘</sub>𝜃<sub>𝑖</sub>𝑠<sub>𝑖</sub>(𝑥)\] · ℎ(𝑥) / 𝑧(𝜽)
> - 𝐏(𝑥|𝜽) = 𝐏<sub>𝜽</sub>(𝑥) = 𝑒𝑥𝑝\[𝜽<sup>𝑇</sup>𝒔(𝑥)\] · ℎ(𝑥) / 𝑧(𝜽)
>
> Let 𝐷 = {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>} be a sample from an Exponential(𝜽) Family, where each 𝑋<sub>𝑖</sub> ∊ ℝ<sup>𝑑</sup>
>
> How to estimate parameters 𝜽 = {𝜃<sub>1</sub>, ..., 𝜃<sub>𝑘</sub>} using [[Maximum Likelihood Estimation (MLE)|MLE method]]?
>
> the log-likelihood function 𝐿𝐿(𝜽) of an Exponential(𝜽) Family is as follows
> - 𝐿𝐿(𝜽) = 𝑙𝑜𝑔\[𝐿(𝜽|𝐷)\]
> - 𝐿𝐿(𝜽) = 𝑙𝑜𝑔\[𝐏(𝐷|𝜽)\]
> - 𝐿𝐿(𝜽) = 𝑙𝑜𝑔\[𝐏({𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>}|𝜽)\]
> - 𝐿𝐿(𝜽) = 𝑙𝑜𝑔\[∏<sub>1≤𝑖≤𝑛</sub>𝐏(𝑋<sub>𝑖</sub>|𝜽)\]
> - 𝐿𝐿(𝜽) = 𝑙𝑜𝑔\[∏<sub>1≤𝑖≤𝑛</sub>(𝑒𝑥𝑝\[𝜽<sup>𝑇</sup>𝒔(𝑋<sub>𝑖</sub>)\] · ℎ(𝑋<sub>𝑖</sub>) / 𝑧(𝜽))\]
> - 𝐿𝐿(𝜽) = 𝑙𝑜𝑔\[𝑧(𝜽)<sup>-𝑛</sup> · 𝑒𝑥𝑝\[𝜽<sup>𝑇</sup>∑<sub>1≤𝑖≤𝑛</sub>𝒔(𝑋<sub>𝑖</sub>)\] · ∏<sub>1≤𝑖≤𝑛</sub>ℎ(𝑋<sub>𝑖</sub>)\]
> - 𝐿𝐿(𝜽) = -𝑛·𝑙𝑜𝑔\[𝑧(𝜽)\] + 𝜽<sup>𝑇</sup>∑<sub>1≤𝑖≤𝑛</sub>𝒔(𝑋<sub>𝑖</sub>) + ∑<sub>1≤𝑖≤𝑛</sub>𝑙𝑜𝑔\[ℎ(𝑋<sub>𝑖</sub>)\]
>
> now differentiate 𝐿𝐿(𝜽) with respect to a parameter 𝜃<sub>𝑗</sub> ∊ {𝜃<sub>1</sub>, ..., 𝜃<sub>𝑘</sub>}
> - 𝐿𝐿'(𝜽) = -𝑛·(𝛿/𝛿𝜃<sub>𝑗</sub>)𝑙𝑜𝑔\[𝑧(𝜃)\] + (𝛿/𝛿𝜃<sub>𝑗</sub>)𝜃<sup>𝑇</sup>∑<sub>1≤𝑖≤𝑛</sub>𝒔(𝑋<sub>𝑖</sub>) + 0
> 	- (𝛿/𝛿𝜃<sub>𝑗</sub>)𝜃<sup>𝑇</sup>∑<sub>1≤𝑖≤𝑛</sub>𝒔(𝑋<sub>𝑖</sub>) = (𝛿/𝛿𝜃<sub>𝑗</sub>) \[<font style="color: rgb(128,0,0);">𝜃<sub>1</sub>∑<sub>1≤𝑖≤𝑛</sub>𝑠<sub>1</sub>(𝑋<sub>𝑖</sub>)</font> + ... + <font style="color: rgb(255,102,0);">𝜃<sub>𝑗</sub>∑<sub>1≤𝑖≤𝑛</sub>𝑠<sub>𝑗</sub>(𝑋<sub>𝑖</sub>)</font> + ... + <font style="color: rgb(0,128,0);">𝜃<sub>𝑘</sub>∑<sub>1≤𝑖≤𝑛</sub>𝑠<sub>𝑘</sub>(𝑋<sub>𝑖</sub>)</font>\]
> 	- (𝛿/𝛿𝜃<sub>𝑗</sub>)𝜃<sup>𝑇</sup>∑<sub>1≤𝑖≤𝑛</sub>𝒔(𝑋<sub>𝑖</sub>) = \[<font style="color: rgb(128,0,0);">0</font> + ... + <font style="color: rgb(255,102,0);">∑<sub>1≤𝑖≤𝑛</sub>𝑠<sub>𝑗</sub>(𝑋<sub>𝑖</sub>)</font> + ... + <font style="color: rgb(0,128,0);">0</font>\]
> - 𝐿𝐿'(𝜽) = -𝑛·(𝛿/𝛿𝜃<sub>𝑗</sub>)𝑙𝑜𝑔\[𝑧(𝜃)\] + <font style="color: rgb(255,102,0);">∑<sub>1≤𝑖≤𝑛</sub>𝑠<sub>𝑗</sub>(𝑋<sub>𝑖</sub>)</font>
> 	- (𝛿/𝛿𝜃<sub>𝑗</sub>)𝑙𝑜𝑔\[𝑧(𝜃)\] = \[1/𝑧(𝜃)\] (𝛿/𝛿𝜃<sub>𝑗</sub>) 𝑧(𝜃)
> 		- 𝑧(𝜃) is the normalization constant
> 		- 𝑧(𝜃) =<font style="color: rgb(128,0,0);"> ∫𝑒𝑥𝑝\[𝜽<sup>𝑇</sup>𝒔(𝑥)\]·ℎ(𝑥)·𝑑𝑥</font>
> 	- (𝛿/𝛿𝜃<sub>𝑗</sub>)𝑙𝑜𝑔\[𝑧(𝜃)\] = \[1/𝑧(𝜃)\] (𝛿/𝛿𝜃<sub>𝑗</sub>) <font style="color: rgb(128,0,0);">∫𝑒𝑥𝑝\[𝜽<sup>𝑇</sup>𝒔(𝑥)\]·ℎ(𝑥)·𝑑𝑥</font>
> 	- (𝛿/𝛿𝜃<sub>𝑗</sub>)𝑙𝑜𝑔\[𝑧(𝜃)\] = \[1/𝑧(𝜃)\] <font style="color: rgb(128,0,0);">∫<font style="color: rgb(128,0,0);">ℎ(𝑥)<font style="color: rgb(128,0,0);">·𝑑𝑥</font> </font>(𝛿/𝛿𝜃<sub>𝑗</sub>)𝑒𝑥𝑝\[𝜽<sup>𝑇</sup>𝒔(𝑥)\]</font>
> 		- (𝛿/𝛿𝜃<sub>𝑗</sub>)𝑒𝑥𝑝\[𝜽<sup>𝑇</sup>𝒔(𝑥)\] = 𝑒𝑥𝑝\[𝜽<sup>𝑇</sup>𝒔(𝑥)\] (𝛿/𝛿𝜃<sub>𝑗</sub>) \[𝜽<sup>𝑇</sup>𝒔(𝑥)\]
> 		- (𝛿/𝛿𝜃<sub>𝑗</sub>)𝑒𝑥𝑝\[𝜽<sup>𝑇</sup>𝒔(𝑥)\] = 𝑒𝑥𝑝\[𝜽<sup>𝑇</sup>𝒔(𝑥)\] (𝛿/𝛿𝜃<sub>𝑗</sub>) \[<font style="color: rgb(128,0,0);">𝜃<sub>1</sub>𝑠<sub>1</sub>(𝑥)</font> + ... + <font style="color: rgb(255,102,0);">𝜃<sub>𝑗</sub>𝑠<sub>𝑗</sub>(𝑥)</font> + ... + <font style="color: rgb(0,128,0);">𝜃<sub>𝑘</sub>𝑠<sub>𝑘</sub>(𝑥)</font>\]
> 		- (𝛿/𝛿𝜃<sub>𝑗</sub>)𝑒𝑥𝑝\[𝜽<sup>𝑇</sup>𝒔(𝑥)\] = 𝑒𝑥𝑝\[𝜽<sup>𝑇</sup>𝒔(𝑥)\] \[<font style="color: rgb(128,0,0);">0</font> + ... + <font style="color: rgb(255,102,0);">𝑠<sub>𝑗</sub>(𝑥)</font> + ... + <font style="color: rgb(0,128,0);">0</font>\]
> 		- (𝛿/𝛿𝜃<sub>𝑗</sub>)𝑒𝑥𝑝\[𝜽<sup>𝑇</sup>𝒔(𝑥)\] = 𝑒𝑥𝑝\[𝜽<sup>𝑇</sup>𝒔(𝑥)\] <font style="color: rgb(255,102,0);">𝑠<sub>𝑗</sub>(𝑥)</font>
> 	- <font style="color: rgb(255,102,0);"><font style="color: rgb(51,51,51);">(𝛿/𝛿𝜃<sub>𝑗</sub>)𝑙𝑜𝑔\[𝑧(𝜃)\] = \[1/𝑧(𝜃)\] ∫ℎ(𝑥)·𝑑𝑥 𝑒𝑥𝑝\[𝜽<sup>𝑇</sup>𝒔(𝑥)\] <font style="color: rgb(255,102,0);">𝑠<sub>𝑗</sub>(𝑥)</font></font></font>
> 	- <font style="color: rgb(255,102,0);"><font style="color: rgb(51,51,51);"><font style="color: rgb(255,102,0);"><font style="color: rgb(51,51,51);">(𝛿/𝛿𝜃<sub>𝑗</sub>)𝑙𝑜𝑔\[𝑧(𝜃)\] = ∫ 𝑠<sub>𝑗</sub>(𝑥) 𝑒𝑥𝑝\[𝜽<sup>𝑇</sup>𝒔(𝑥)\] ℎ(𝑥) / 𝑧(𝜃) ·𝑑𝑥</font></font></font></font>
> 	- <font style="color: rgb(255,102,0);"><font style="color: rgb(51,51,51);"><font style="color: rgb(255,102,0);"><font style="color: rgb(51,51,51);">(𝛿/𝛿𝜃<sub>𝑗</sub>)𝑙𝑜𝑔\[𝑧(𝜃)\] = ∫ 𝑠<sub>𝑗</sub>(𝑥)𝐏<sub>𝜽</sub>(𝑥)𝑑𝑥 <font style="color: rgb(128,128,128);">\# 𝐏<sub>𝜽</sub>(𝑥) = 𝑒𝑥𝑝\[𝜽<sup>𝑇</sup>𝒔(𝑥)\] ℎ(𝑥) / 𝑧(𝜃)</font></font></font></font></font>
> 	- <font style="color: rgb(255,102,0);"><font style="color: rgb(51,51,51);"><font style="color: rgb(255,102,0);"><font style="color: rgb(51,51,51);">(𝛿/𝛿𝜃<sub>𝑗</sub>)𝑙𝑜𝑔\[𝑧(𝜃)\] = <font style="color: rgb(128,0,0);">𝐄<sub>𝜽</sub>\[𝑠<sub>𝑗</sub>(𝑥)\]</font></font></font></font></font>
> - <font style="color: rgb(255,102,0);"><font style="color: rgb(51,51,51);"><font style="color: rgb(255,102,0);"><font style="color: rgb(51,51,51);">𝐿𝐿'(𝜽) = -𝑛·<font style="color: rgb(128,0,0);">𝐄<sub>𝜽</sub>\[𝑠<sub>𝑗</sub>(𝑥)\]</font> + <font style="color: rgb(255,102,0);">∑<sub>1≤𝑖≤𝑛</sub>𝑠<sub>𝑗</sub>(𝑋<sub>𝑖</sub>)</font></font></font></font></font>
>
> equate to 0 and solve for 𝜃
> - 0 = -𝑛·𝐄<sub>𝜽</sub>\[𝑠<sub>𝑗</sub>(𝑥)\] + ∑<sub>1≤𝑖≤𝑛</sub>𝑠<sub>𝑗</sub>(𝑋<sub>𝑖</sub>)
> - 𝑛·𝐄<sub>𝜽</sub>\[𝑠<sub>𝑗</sub>(𝑥)\] = ∑<sub>1≤𝑖≤𝑛</sub>𝑠<sub>𝑗</sub>(𝑋<sub>𝑖</sub>)
> - 𝐄<sub>𝜽</sub>\[𝑠<sub>𝑗</sub>(𝑥)\] = ∑<sub>1≤𝑖≤𝑛</sub>𝑠<sub>𝑗</sub>(𝑋<sub>𝑖</sub>) / 𝑛 <font style="color: rgb(128,128,128);">\#</font> [[Sample Mean|sample mean]]
>
> thus:
> - 𝐄<sub>𝜽</sub>\[𝒔(𝑥)\] = ∑<sub>1≤𝑖≤𝑛</sub>𝒔(𝑋<sub>𝑖</sub>) / 𝑛
### <font style="color: rgb(128,128,128);"><font style="color: rgb(60,64,67);">Example - Exponential Distribution</font></font>

> [!expand]- Click here to expand...
> Exponential(𝜃) for 𝜃 \> 0
> - 𝐏(𝑥|𝜃) = 𝐏<sub>𝜃</sub>(𝑥) = 𝜃·𝑒𝑥𝑝(-𝜃𝑥)·𝐼(𝑥≥0)
>
> where:
> - 𝑑 = 1
> - 𝑘 = 1
> - 𝜃 ∊ (0,∞)
> - 𝛩 = (0,∞)
> - 𝜂<sub>1</sub>(𝜃) = 𝜃
> - 𝑠<sub>1</sub>(𝑥) = -𝑥
> - ℎ(𝑥) = 𝐼(𝑥≥0)
> - 𝑧(𝜃) = 1/𝜃
>
> we know (𝛿/𝛿𝜃<sub>𝑗</sub>)𝑙𝑜𝑔\[𝑧(𝜃)\] = 𝐄<sub>𝜽</sub>\[𝑠<sub>𝑗</sub>(𝑥)\]:
> - (𝛿/𝛿𝜃<sub>𝑗</sub>)𝑙𝑜𝑔\[𝑧(𝜃)\] = 𝐄<sub>𝜽</sub>\[𝑠<sub>𝑗</sub>(𝑥)\]
> - (𝛿/𝛿𝜃<sub>1</sub>)𝑙𝑜𝑔\[𝑧(𝜃)\] = 𝐄<sub>𝜽</sub>\[𝑠<sub>1</sub>(𝑥)\]
> 	- (𝛿/𝛿𝜃)𝑙𝑜𝑔\[𝑧(𝜃)\] = (𝛿/𝛿𝜃)𝑙𝑜𝑔\[1/𝜃\]
> 	- (𝛿/𝛿𝜃)𝑙𝑜𝑔\[𝑧(𝜃)\] = 𝜃 (𝛿/𝛿𝜃)(1/𝜃)
> 	- (𝛿/𝛿𝜃)𝑙𝑜𝑔\[𝑧(𝜃)\] = 𝜃 · -(1/𝜃<sup>2</sup>)
> 	- (𝛿/𝛿𝜃)𝑙𝑜𝑔\[𝑧(𝜃)\] = -(1/𝜃)
> - -(1/𝜃) = 𝐄<sub>𝜽</sub>\[𝑠<sub>1</sub>(𝑥)\]
> 	- 𝐄<sub>𝜽</sub>\[𝑠(𝑥)\] = 𝐄<sub>𝜽</sub>\[-𝑥\]
> 	- 𝐄<sub>𝜽</sub>\[𝑠(𝑥)\] = -𝐄<sub>𝜽</sub>\[𝑥\]
> - -(1/𝜃) = -𝐄<sub>𝜽</sub>\[𝑥\]
> - (1/𝜃) = 𝐄<sub>𝜽</sub>\[𝑥\]
> - 𝐄<sub>𝜽</sub>\[𝑥\] = (1/𝜃)
>
> we know 𝐄<sub>𝜽</sub>\[𝑠<sub>𝑗</sub>(𝑥)\] = ∑<sub>1≤𝑖≤𝑛</sub>𝑠<sub>𝑗</sub>(𝑋<sub>𝑖</sub><font style="color: rgb(128,0,0);"><font style="color: rgb(51,51,51);">) / 𝑛</font></font>
> - -(1/𝜃) = 𝐄<sub>𝜽</sub>\[𝑠<sub>1</sub>(𝑥)\]
> - -(1/𝜃) = ∑<sub>1≤𝑖≤𝑛</sub>𝑠<sub>1</sub>(𝑋<sub>𝑖</sub><font style="color: rgb(128,0,0);"><font style="color: rgb(51,51,51);">) / 𝑛</font></font>
> - <font style="color: rgb(128,0,0);"><font style="color: rgb(51,51,51);">-(1/𝜃) = ∑<sub>1≤𝑖≤𝑛</sub><font style="color: rgb(128,0,0);"><font style="color: rgb(51,51,51);">-𝑋<sub>𝑖</sub> / 𝑛</font></font></font></font>
> - <font style="color: rgb(128,0,0);"><font style="color: rgb(51,51,51);"><font style="color: rgb(128,0,0);"><font style="color: rgb(51,51,51);">(1/𝜃) = ∑<sub>1≤𝑖≤𝑛</sub><font style="color: rgb(128,0,0);"><font style="color: rgb(51,51,51);">𝑋<sub>𝑖</sub> / 𝑛</font></font></font></font></font></font>
> - <font style="color: rgb(128,0,0);"><font style="color: rgb(51,51,51);"><font style="color: rgb(128,0,0);"><font style="color: rgb(51,51,51);"><font style="color: rgb(128,0,0);"><font style="color: rgb(51,51,51);">𝜃 = 𝑛 / ∑<sub>1≤𝑖≤𝑛</sub><font style="color: rgb(128,0,0);"><font style="color: rgb(51,51,51);">𝑋<sub>𝑖</sub></font></font></font></font></font></font></font></font>
> - 𝜃 = 1/𝑋̅ <font style="color: rgb(128,128,128);">\# </font><font style="color: rgb(128,128,128);">𝑋̅ is the</font> [[Sample Mean|sample mean]]
