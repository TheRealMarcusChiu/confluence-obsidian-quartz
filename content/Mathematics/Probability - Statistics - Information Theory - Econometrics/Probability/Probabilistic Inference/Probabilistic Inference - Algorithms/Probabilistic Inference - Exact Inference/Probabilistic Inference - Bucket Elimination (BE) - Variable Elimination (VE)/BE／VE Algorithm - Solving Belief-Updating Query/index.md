---
title: "BE／VE Algorithm - Solving Belief-Updating Query"
created: 2021-09-13T05:28:22.780-05:00
modified: 2021-09-13T05:28:22.780-05:00
parent: "[[Probabilistic Inference - Bucket Elimination (BE) - Variable Elimination (VE)]]"
children: []
---
using [[Probabilistic Inference - Bucket Elimination (BE) - Variable Elimination (VE)|BE/VE Algorithm]] to solve a [[Probabilistic Inference - Query／Task Types (Posterior Conditional - Prior Marginal ／ Probability of Evidence - MPE - MAP)|Belief-Updating Query]]
- <font style="color: rgb(128,128,128);">𝐏(𝑄|𝐄=𝐞) = <strong>𝛴</strong><sub><strong>𝐡</strong>∊<strong>𝐇 </strong></sub>\[ 𝐏(𝑄</font><font style="color: rgb(128,128,128);">, <strong>𝐇</strong>=<strong>𝐡</strong></font><font style="color: rgb(128,128,128);">, 𝐄=𝐞) \] / 𝐏(𝐄=𝐞)</font>

used to answer posterior/conditional query of one query variable given zero or more evidence variables
### Algorithm

input:
- [[Graphical Models|graphical model]] 𝒢 = ⟨<strong>𝐗</strong>, <strong>𝐃</strong>, 𝐒, <strong>𝐅</strong>, <strong>𝐂</strong>⟩
- evidence 𝐄=𝐞
- query variable 𝑄 ∈ 𝐗 \\ 𝐄

output:
- the distribution of 𝑄

algorithm:
- let <strong>𝐇</strong> = 𝐗 \\ {𝐄, 𝑄}
- compute both:
	- <font style="color: rgb(128,128,128);">𝐏(𝑄, 𝐄=𝐞) = <font style="color: rgb(128,128,128);"><strong>𝛴</strong><sub><strong>𝐡</strong>∊<strong>𝐇 </strong></sub>\[ 𝐏(𝑄</font><font style="color: rgb(128,128,128);">, <strong>𝐇</strong>=<strong>𝐡</strong></font><font style="color: rgb(128,128,128);">, 𝐄=𝐞) \]</font></font>
	- <font style="color: rgb(128,128,128);">𝐏(𝐄=𝐞) = <strong>𝛴</strong><sub><strong>𝑞</strong>∊𝑄</sub><font style="color: rgb(128,128,128);">𝐏(𝑄=𝑞, 𝐄=𝐞)</font></font>
- then use [[Bayes' Rule／Theorem／Law (Prior - Posterior - Distribution - Likelihood - Probability of Evidence)|Baye's Theorem]]:
	- <font style="color: rgb(128,128,128);">𝐏(𝑄|𝐄=𝐞) = 𝐏(𝑄, 𝐄=𝐞) / 𝐏(𝐄=𝐞)</font>
