---
title: "Univariate Normal Distribution - Derivation"
created: 2021-11-21T03:54:40.559-06:00
modified: 2022-02-20T22:43:02.856-06:00
parent: "[[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)]]"
children: []
---
# Univariate Normal Distribution Derivation

[[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|Normal Distribution]] = 𝑓(𝑋=𝑥) = <font style="color: rgb(255,102,0);">(1/\[𝜎\*𝑠𝑞𝑟𝑡(2𝜋)\])</font>·(𝑒<sup>-(𝑥-𝜇)²/(2𝜎²)</sup>)

> [!expand-ui]- Basic Assumptions
> 1. deviates from the center become less likely moving away from it
> 2. deviates from the center along one direction (for example, horizontally) don’t condition ones along the perpendicular direction (vertically)
> 3. deviates do not depend on the orientation of the coordinate system
>
> ![[Univariate Normal Distribution - Derivation/2d-gaussian-distribution.png|301]]

> [!expand-ui]- Determining the Shape of Distribution
> ![[Univariate Normal Distribution - Derivation/2d-gaussian-distribution-probability.png|301]]
>
> The probability at point (𝑥,𝑦) is some [[Joint Probability Distribution (Compound - Bivariate - Multivariate - Full)|joint probability distribution]] 𝐏(𝑥,𝑦)
>
> By the independence assumption:
> - 𝐏(𝑥,𝑦) = 𝐏(𝑥)𝐏(𝑦)
>
> By the orientation-free assumption:
> - 𝐏(𝑥)𝐏(𝑦) = 𝐆(𝑟), where 𝑟 is the distance from the center
>
> By differentiating both sides w.r.t. 𝜃
> - 𝐏(𝑥)·\[𝑑𝐏(𝑦)/𝑑𝜃\] + 𝐏(𝑦)·\[𝑑𝐏(𝑥)/𝑑𝜃\] = 𝑑𝐆(𝑟)/𝑑𝜃 = 0
> - 𝐏(𝑥)·\[𝑑𝐏(𝑦)/𝑑𝑦\]·\[𝑑𝑦/𝑑𝜃\] + 𝐏(𝑦)·\[𝑑𝐏(𝑥)/𝑑𝑥\]·\[𝑑𝑥/𝑑𝜃\] = 0 <font style="color: rgb(122,134,154);">𝑑𝑦/𝑑𝑦 = 1</font>
> - 𝐏(𝑥)·𝐏'(𝑦)·\[𝑑𝑦/𝑑𝜃\] + 𝐏(𝑦)·𝐏'(𝑥)·\[𝑑𝑥/𝑑𝜃\] = 0 <font style="color: rgb(122,134,154);">simplified syntax 𝑑𝐏(𝑦)/𝑑𝑦 = 𝐏'(𝑦)</font>
>
> Using 𝑥 = 𝑟·𝑐𝑜𝑠(𝜃) and 𝑦 = 𝑟·𝑠𝑖𝑛(𝜃), we can rewrite the derivatives above:
> - 𝐏(𝑥)𝐏'(𝑦)\[𝑑𝑟·𝑠𝑖𝑛(𝜃)/𝑑𝜃\] + 𝐏(𝑦)𝐏'(𝑥)\[𝑑𝑟·𝑐𝑜𝑠(𝜃)/𝑑𝜃\] = 0
> - 𝐏(𝑥)𝐏'(𝑦)(𝑟·𝑐𝑜𝑠(𝜃)) + 𝐏(𝑦)𝐏'(𝑥)(-𝑟·𝑠𝑖𝑛(𝜃)) = 0
> - 𝐏(𝑥)𝐏'(𝑦)𝑥 - 𝐏(𝑦)𝐏'(𝑥)𝑦 = 0
> - 𝐏(𝑥)𝐏'(𝑦)𝑥 = 𝐏(𝑦)𝐏'(𝑥)𝑦
> - 𝐏'(𝑥) / \[𝐏(𝑥)𝑥\] = 𝐏'(𝑦) / \[𝐏(𝑦)𝑦\]
>
> This differential equation is true for any 𝑥 and 𝑦, and 𝑥 and 𝑦 are independent. This can only happen if the ratio defined is a constant:
> - 𝐏'(𝑥) / \[𝐏(𝑥)𝑥\] = 𝐏'(𝑦) / \[𝐏(𝑦)𝑦\] = 𝐶
>
> Solving:
> - 𝐏'(𝑥) / \[𝐏(𝑥)𝑥\] = 𝐶
> - 𝐏'(𝑥)/𝐏(𝑥) = 𝐶𝑥
> - 𝐏'(𝑥)/𝐏(𝑥) = 𝐶𝑥
> - ∫𝐏'(𝑥)/𝐏(𝑥)·𝑑𝑥 = ∫𝐶𝑥·𝑑𝑥
> - 𝑙𝑛𝐏(𝑥) = (𝐶/2)𝑥² + 𝑐
> - 𝐏(𝑥) = 𝑒<sup>(𝐶/2)𝑥² + 𝑐</sup> + 𝑐
> - 𝐏(𝑥) = 𝑒<sup>𝑐</sup>𝑒<sup>(𝐶/2)𝑥²</sup>
> - 𝐏(𝑥) = 𝐴𝑒<sup>(𝐶/2)𝑥²</sup>
>
> By assumption, large errors are less likely than small errors:
> - 𝐏(𝑥) = 𝐴𝑒<sup>(-𝑘/2)𝑥²</sup>, with 𝑘 positive

> [!expand-ui]- Determining Coefficient 𝐴
> From previous:
> - 𝐏(𝑥) = 𝐴𝑒<sup>(-𝑘/2)𝑥²</sup>, with 𝑘 positive
>
> For 𝐏(𝑥) to be a probability distribution, the total area under the curve must equal 1. We need to determine the value of 𝐴 that fits this criterion
> - <sub>-∞</sub>∫<sup>+∞</sup>𝐴𝑒<sup>(-𝑘/2)𝑥²</sup>𝑑𝑥 = 1
> - <sub>-∞</sub>∫<sup>+∞</sup>𝑒<sup>(-𝑘/2)𝑥²</sup>𝑑𝑥 = 1/𝐴
> - <sub>0</sub>∫<sup>+∞</sup>𝑒<sup>(-𝑘/2)𝑥²</sup>𝑑𝑥 = 1/(2𝐴) <font style="color: rgb(122,134,154);">because the symmetry of function</font>
> - (<sub>0</sub>∫<sup>+∞</sup>𝑒<sup>(-𝑘/2)𝑥²</sup>𝑑𝑥) · (<sub>0</sub>∫<sup>+∞</sup>𝑒<sup>(-𝑘/2)𝑦²</sup>𝑑𝑦) = 1/(4𝐴²) <font style="color: rgb(122,134,154);">because 𝑥 and 𝑦 are just dummy variables</font>
> - <sub>0</sub>∫<sup>+∞</sup><sub>0</sub>∫<sup>+∞</sup>𝑒<sup>(-𝑘/2)(𝑥²+𝑦²)</sup>𝑑𝑥𝑑𝑦 = 1/(4𝐴²) <font style="color: rgb(122,134,154);">because 𝑥 and 𝑦 are independent</font>
> - <sub>0</sub>∫<sup>𝜋/2</sup><sub>0</sub>∫<sup>+∞</sup>𝑒<sup>(-𝑘/2)𝑟²</sup>𝑟 𝑑𝑟𝑑𝜃 = 1/(4𝐴²) <font style="color: rgb(122,134,154);">in polar coordinates</font>
>
> To evaluate the polar form requires a [[Integration by Parts|u-substitution]] in an improper integral. Performing the integration with respect to 𝑟, we have
> - <sub>0</sub>∫<sup>𝜋/2</sup><sub>0</sub>∫<sup>+∞</sup>𝑒<sup>(-𝑘/2)𝑟²</sup>𝑟 𝑑𝑟𝑑𝜃 = 1/(4𝐴²)
> 	- 𝑢 = (-𝑘/2)𝑟²
> 	- 𝑑𝑢 = -𝑘𝑟 𝑑𝑟
> - <sub>0</sub>∫<sup>𝜋/2</sup><sub>0</sub>∫<sup>+∞</sup>𝑒<sup>(-𝑘/2)𝑟²</sup>𝑟(-𝑘/-𝑘) 𝑑𝑟𝑑𝜃 = 1/(4𝐴²)
> - <sub>0</sub>∫<sup>𝜋/2</sup>(1/-𝑘)<sub>0</sub>∫<sup>+∞</sup>𝑒<sup>(-𝑘/2)𝑟²</sup>𝑟(-𝑘) 𝑑𝑟𝑑𝜃 = 1/(4𝐴²)
> - <sub>0</sub>∫<sup>𝜋/2</sup>(1/-𝑘)<font style="color: rgb(255,0,0);"><sub>0</sub>∫<sup>-∞</sup>𝑒<sup>𝑢</sup>𝑑𝑢</font> 𝑑𝜃 = 1/(4𝐴²)
> 	- <sub>0</sub>∫<sup>-∞</sup>𝑒<sup>𝑢</sup>𝑑𝑢
> 	- 𝑒<sup>𝑢</sup><sub>0</sub>|<sup>-∞</sup>
> 	- 𝑒<sup>-∞</sup> - 𝑒<sup>0</sup>
> 	- 0 - 1
> 	- -1
> - <sub>0</sub>∫<sup>𝜋/2</sup>(1/-𝑘)<font style="color: rgb(255,0,0);">(-1)</font> 𝑑𝜃 = 1/(4𝐴²)
> - <sub>0</sub>∫<sup>𝜋/2</sup>(1/𝑘)𝑑𝜃 = 1/(4𝐴²)
> - (1/𝑘)<sub>0</sub>∫<sup>𝜋/2</sup>𝑑𝜃 = 1/(4𝐴²)
> - (1/𝑘) \[𝜃\]<sub>0</sub>|<sup>𝜋/2</sup> = 1/(4𝐴²)
> - (1/𝑘) \[𝜋/2 - 0\] = 1/(4𝐴²)
> - 𝜋/(2𝑘) = 1/(4𝐴²)
> - 𝜋/𝑘 = 1/(2𝐴²)
> - (2𝐴²)𝜋 = 𝑘
> - 𝐴² = 𝑘/(2𝜋)
> - 𝐴 = √𝑘/(2𝜋)\]
>
> Thus
> - 𝐏(𝑥) = √𝑘/(2𝜋)\] · 𝑒<sup>(-𝑘/2)𝑥²</sup>

> [!expand-ui]- Determining Coefficient 𝑘
> From previous:
> - 𝐏(𝑥) = √𝑘/(2𝜋)\] · 𝑒<sup>(-𝑘/2)𝑥²</sup>
>
> A question often asked about probability distributions is "what are the mean and variance of the distribution?" Perhaps the value of 𝑘 has something to do with the answer to these questions.
> - The mean, 𝜇, is defined to be the value of the integral <sub>-∞</sub>∫<sup>+∞</sup>𝑥𝐏(𝑥)𝑑𝑥
> - The variance, 𝜎², is defined to be the value of the integral <sub>-∞</sub>∫<sup>+∞</sup>(𝑥-𝜇)²𝐏(𝑥)𝑑𝑥
>
> Since 𝑥𝐏(𝑥) is an odd function, we know the mean is zero. The value of the variance needs further computation.
> - <sub>-∞</sub>∫<sup>+∞</sup>𝑥²𝐏(𝑥)𝑑𝑥 = 𝜎²
> - 2<sub>0</sub>∫<sup>+∞</sup>𝑥²𝐏(𝑥)𝑑𝑥 = 𝜎²
> - 2√𝑘/(2𝜋)\] <sub>0</sub>∫<sup>+∞</sup>𝑥²𝑒<sup>(-𝑘/2)𝑥²</sup>𝑑𝑥 = 𝜎²
> 	- [[Integration by Parts|Integration by parts]] states: <code><font style="color: rgb(122,134,154);">∫𝑢·𝑑𝑣 = 𝑢·𝑣 - ∫𝑣·𝑑𝑢</font></code>
> 		- 𝑢 = 𝑥
> 		- 𝑑𝑢 = 1
> 		- 𝑣 = -(1/𝑘)𝑒<sup>(-𝑘/2)𝑥²</sup>
> 		- 𝑑𝑣 = 𝑥𝑒<sup>(-𝑘/2)𝑥²</sup>
> 	- Thus:
> 		- <font style="color: rgb(255,102,0);">\[-(𝑥/𝑘)𝑒<sup>(-𝑘/2)𝑥²</sup></font><font style="color: rgb(255,102,0);">\]<sub>0</sub>|<sup>+∞</sup></font> + (1/𝑘)<sub>0</sub>∫<sup>+∞</sup>𝑒<sup>(-𝑘/2)𝑥²</sup>𝑑𝑥
> 		- <font style="color: rgb(255,102,0);">0</font> + (1/𝑘)<sub>0</sub>∫<sup>+∞</sup>𝑒<sup>(-𝑘/2)𝑥²</sup>𝑑𝑥
> 		- (1/𝑘)<sub>0</sub>∫<sup>+∞</sup>𝑒<sup>(-𝑘/2)𝑥²</sup>𝑑𝑥
> 		- (1/𝑘) 1/(2𝐴)
> 		- <font style="color: rgb(0,128,0);">(1/𝑘) 1/(2√𝑘/(2𝜋)\])</font>
> - 2√𝑘/(2𝜋)\] <font style="color: rgb(0,128,0);"><sub>0</sub>∫<sup>+∞</sup>𝑥²𝑒<sup>(-𝑘/2)𝑥²</sup>𝑑𝑥</font> = 𝜎²
> - 2√𝑘/(2𝜋)\] <font style="color: rgb(0,128,0);">(1/𝑘) 1/(2√𝑘/(2𝜋)\])</font> = 𝜎²
> - <font style="color: rgb(0,128,0);">(1/𝑘) </font>= 𝜎²
> - 𝑘 = 1/𝜎²
>
> Thus:
> - 𝐏(𝑥) = √1/(2𝜋𝜎²)\] · 𝑒<sup>-1/(2𝜎²)𝑥²</sup>
> - 𝐏(𝑥) = 1/\[𝜎√2𝜋)\] · 𝑒<sup>-(1/2)(𝑥/𝜎)²</sup>
# Resources
- [[normal-distribution-derivation.pdf]]
- [https://math.stackexchange.com/questions/384893/how-was-the-normal-distribution-derived](https://math.stackexchange.com/questions/384893/how-was-the-normal-distribution-derived)
