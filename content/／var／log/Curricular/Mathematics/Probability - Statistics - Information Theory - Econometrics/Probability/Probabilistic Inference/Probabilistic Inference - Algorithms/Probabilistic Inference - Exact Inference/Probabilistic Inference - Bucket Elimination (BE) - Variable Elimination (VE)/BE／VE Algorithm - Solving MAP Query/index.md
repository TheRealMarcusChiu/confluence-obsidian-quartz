---
title: "BE／VE Algorithm - Solving MAP Query"
created: 2021-09-13T05:28:23.984-05:00
modified: 2021-09-13T05:28:23.984-05:00
parent: "[[Probabilistic Inference - Bucket Elimination (BE) - Variable Elimination (VE)]]"
children: []
---
using [[Probabilistic Inference - Bucket Elimination (BE) - Variable Elimination (VE)|BE/VE Algorithm]] to solve a MAP Query
- <font style="color: rgb(128,128,128);"><strong>𝑀𝐴𝑃</strong>(𝐐=?, 𝐄=𝐞) = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝐪</sub><strong>\[</strong> <strong>∑</strong><sub><strong>𝐡</strong>∊<strong>𝐇 </strong></sub>\[ 𝐏(𝐐=𝐪, 𝐇=𝐡 | 𝐄=𝐞) \] <strong>\]</strong></font>

MAP seeks an assignment to a SUBSET of variables that has the maximal probability given evidence
- <font style="color: rgb(255,0,0);">is a combination of [[BE／VE Algorithm - Solving Conditional Posterior Query|BE/VE Algorithm - Solving Conditional Posterior Query]] and [[BE／VE Algorithm - Solving MPE Query|BE/VE Algorithm - Solving MPE Query]]:</font>
	- <font style="color: rgb(255,0,0);">[[BE／VE Algorithm - Operator Types|sum-marginalize operators (∑)]] eliminates non-MAP variables</font>
	- <font style="color: rgb(255,0,0);">[[BE／VE Algorithm - Operator Types|max-marginalize operators (𝑚𝑎𝑥)]] eliminates MAP variables</font>
- if a function/factor is a constant, we have 2 options:
	- when computing the MAP value/probability: we place it directly in the first bucket
	- when computing just the MAP tuple: we can remove it

### Algorithm

input:
- [[Graphical Models|graphical model]] 𝒢 = ⟨<strong>𝐗</strong>, <strong>𝐃</strong>, 𝐒, <strong>𝐅</strong>, <strong>𝐂</strong>⟩
- MAP variables 𝐐⊆𝐗
- evidence 𝐄=𝐞

output:
- the most probable assignment 𝐐=𝐪

algorithm:
- let 𝐇 = 𝐗 \\ {𝐐 ∪ 𝐄}
- return 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝐪</sub><strong>\[</strong> <strong>∑</strong><sub><strong>𝐡</strong>∊<strong>𝐇 </strong></sub>\[ 𝐏(𝐐=𝐪, 𝐇=𝐡 | 𝐄=𝐞) \] <strong>\]</strong>

### Recovering MAP Tuple

same as in: [[BE／VE Algorithm - Solving MPE Query|BE/VE Algorithm - Solving MPE Query]]
