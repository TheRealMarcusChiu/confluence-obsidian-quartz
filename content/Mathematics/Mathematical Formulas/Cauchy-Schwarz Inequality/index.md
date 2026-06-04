---
title: "Cauchy-Schwarz Inequality"
created: 2021-09-13T05:26:07.764-05:00
modified: 2024-01-19T01:29:44.329-06:00
parent: "[[Mathematical Formulas]]"
children: []
---
> [!tabs]
>
> === Vectors
>
> # Cauchy-Schwarz Inequality (For 2 Vectors)
>
> For any 2 vectors 𝑢,𝑣∊𝑉 of an [[Inner Product Spaces|inner product space (𝑉,𝐹,⟨·,·⟩)]]:
> - $⟨u,v⟩^2 ≤ ⟨u,u⟩·⟨v,v⟩$
> - $|⟨u,v⟩| ≤ ||u||·||v||$
>
> where:
> - ⟨·,·⟩ is the [[Inner Products|inner product]]
> - ||·|| is the [[Norms - Semi-Norms|norm]] which is defined as: ||·||<sub>⟨·,·⟩</sub> = √⟨·,·⟩
>
> # Proof
>
> ![](https://www.youtube.com/watch?v=4HOvKSPl6yM&list=PLBh2i93oe2qsGKDOsuVVw-OCAfprrnGfr&index=10)
>
> === Random Variables
>
> # Cauchy-Schwarz Inequality (For 2 Random Variables)
> For any 2 random variables 𝑋 and 𝑌, if 𝑌=𝛼𝑋 for any scalar constant 𝛼∊ℝ then the following holds:
> - $\left\|𝐄[XY]\right\| ≤ \sqrt{𝐄[X^2]𝐄[Y^2]}$
>
> # Proof
> Define a random variable:
> - 𝑊 = (𝑌 - 𝛼𝑋)<sup>2</sup>
>
> 𝑊 is a non-negative random variable for any value 𝛼∊ℝ, thus:
> - 0 ≤ 𝐄\[𝑊\]
> - 0 ≤ 𝐄\[(𝑌 - 𝛼𝑋)<sup>2</sup>\]
> - 0 ≤ 𝐄\[(𝑌 - 𝛼𝑋)(𝑌 - 𝛼𝑋)\]
> - 0 ≤ 𝐄\[𝑌<sup>2</sup> - 2𝛼𝑌𝑋 + 𝛼<sup>2</sup>𝑋<sup>2</sup>\]
> - 0 ≤ 𝐄\[𝑌<sup>2</sup>\] - 𝐄\[2𝛼𝑌??\] + 𝐄\[𝛼<sup>2</sup>𝑋<sup>2</sup>\]
>
> Let 𝑓(𝑥) = 𝐄\[𝑌<sup>2</sup>\] - 𝐄\[2𝛼𝑌𝑋\] + 𝐄\[𝛼<sup>2</sup>𝑋<sup>2</sup>\], then we know that 𝑓(𝑥) ≥ 0 for all 𝛼∊ℝ.
>
> Moreover, if 𝑓(𝑥) = 0 for some 𝛼, then we have 𝐄\[𝑊\] = 𝐄\[(𝑌 - 𝛼𝑋)<sup>2</sup>\] = 0, which essentially means 𝑌 = 𝛼𝑋 with probability one
>
> To prove the Cauchy-Schwarz Inequality, choose:
> - 𝛼 = 𝐄\[𝑌𝑋\] / 𝐄\[𝑋<sup>2</sup>\]
>
> we obtain:
> - 0 ≤ 𝐄\[𝑌<sup>2</sup>\] - 𝐄\[2𝛼𝑌𝑋\] + 𝐄\[𝛼<sup>2</sup>𝑋<sup>2</sup>\]
> - 0 ≤ 𝐄\[??<sup>2</sup>\] - 2𝛼𝐄\[𝑌𝑋\] + 𝛼<sup>2</sup>𝐄\[𝑋<sup>2</sup>\]
> - 0 ≤ 𝐄\[𝑌<sup>2</sup>\] - 2(𝐄\[𝑌𝑋\]/𝐄\[𝑋<sup>2</sup>\])𝐄\[𝑌𝑋\] + \[(𝐄\[𝑌𝑋\])<sup>2</sup>/𝐄\[𝑋<sup>2</sup>\])<sup>2</sup>\]𝐄\[𝑋<sup>2</sup>\]
> - 0 ≤ 𝐄\[??<sup>2</sup>\] - 2𝐄\[𝑌𝑋\]<sup>2</sup>/𝐄\[??<sup>2</sup>\] + (𝐄\[𝑌𝑋\])<sup>2</sup>/𝐄\[𝑋<sup>2</sup>\])
> - 0 ≤ 𝐄\[??<sup>2</sup>\] - 𝐄\[𝑌𝑋\]<sup>2</sup>/𝐄\[𝑋<sup>2</sup>\]
>
> thus
> - 𝐄\[𝑌𝑋\]<sup>2</sup>/𝐄\[𝑋<sup>2</sup>\] ≤ 𝐄\[𝑌<sup>2</sup>\]
> - 𝐄\[𝑌𝑋\]<sup>2</sup>≤ 𝐄\[𝑌<sup>2</sup>\]𝐄\[𝑋<sup>2</sup>\]
> - |𝐄\[𝑌𝑋\]| ≤ 𝑠𝑞𝑟𝑡(𝐄\[𝑌<sup>2</sup>\]𝐄\[𝑋<sup>2</sup>\]) <font style="color: rgb(128,128,128);">\# hence Cauchy-Schwarz Inequality proved</font>
>
> also if |𝐄\[𝑌𝑋\]| = 𝑠𝑞𝑟𝑡(𝐄\[𝑌<sup>2</sup>\]𝐄\[𝑋<sup>2</sup>\]), we conclude that 𝑓(𝐄\[𝑌𝑋\]/𝐄\[𝑋<sup>2</sup>\]) = 0, which implies 𝑌 = (𝐄\[𝑌𝑋\]/𝐄\[𝑋<sup>2</sup>\])·𝑋 with probability one
