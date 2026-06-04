---
title: "BE／VE Algorithm - Solving MPE Query"
created: 2021-09-13T05:28:24.252-05:00
modified: 2021-09-13T05:28:24.252-05:00
parent: "[[Probabilistic Inference - Bucket Elimination (BE) - Variable Elimination (VE)]]"
children: []
---
using [[Probabilistic Inference - Bucket Elimination (BE) - Variable Elimination (VE)|BE/VE Algorithm]] to solve a MPE Query
- <font style="color: rgb(128,128,128);"><strong>𝑀𝑃𝐸</strong>(𝐐=?, 𝐄=𝐞) = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝐪</sub>\[ 𝐏(𝐐=𝐪 | 𝐄=𝐞) \]</font>

MPE seeks an assignment to all variables that has the maximal probability given evidence
- <font style="color: rgb(255,0,0);">similar to [[BE／VE Algorithm - Solving Conditional Posterior Query|BE/VE Algorithm - Solving Conditional Posterior Query]], but instead of [[BE／VE Algorithm - Operator Types|sum-marginalize operators (∑)]] are replaced with [[BE／VE Algorithm - Operator Types|max-marginalize operators (𝑚𝑎𝑥)]]</font>
- if a function/factor is a constant, we have 2 options:
	- when computing the MPE value/probability: we place it directly in the first bucket
	- when computing just the MPE tuple: we can remove it

### Algorithm

input:
- [[Graphical Models|graphical model]] 𝒢 = ⟨<strong>𝐗</strong>, <strong>𝐃</strong>, 𝐒, <strong>𝐅</strong>, <strong>𝐂</strong>⟩
- evidence 𝐄=𝐞
- MPE variables 𝐐 = 𝐗 \\ 𝐄

output:
- the most probable assignment 𝐐=𝐪

algorithm:
- return 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝐪</sub><sub></sub>\[ 𝐏(𝐐=𝐪 | 𝐄=𝐞) \]

### Recovering MPE Tuple
![[BE／VE Algorithm - Solving MPE Query/BE - MPE.png]]
