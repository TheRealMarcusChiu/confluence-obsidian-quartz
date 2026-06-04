---
title: "BE／VE Algorithm - Solving Prior Query"
created: 2021-09-13T05:28:24.712-05:00
modified: 2021-09-13T05:28:24.712-05:00
parent: "[[Probabilistic Inference - Bucket Elimination (BE) - Variable Elimination (VE)]]"
children: []
---
using [[Probabilistic Inference - Bucket Elimination (BE) - Variable Elimination (VE)|BE/VE Algorithm]] to solve a [[Probabilistic Inference - Query／Task Types (Posterior Conditional - Prior Marginal ／ Probability of Evidence - MPE - MAP)|Prior Query]]
- <font style="color: rgb(128,128,128);">𝐏(𝐐) = <strong>∑</strong><sub><strong>𝐡</strong>∊<strong>𝐇 </strong></sub>\[ 𝐏(𝐐</font><font style="color: rgb(128,128,128);">, <strong>𝐇</strong>=<strong>𝐡</strong></font><font style="color: rgb(128,128,128);">) \]</font>

### Algorithm

input:
- [[Graphical Models|graphical model]] 𝒢 = ⟨<strong>𝐗</strong>, <strong>𝐃</strong>, 𝐒, <strong>𝐅</strong>, <strong>𝐂</strong>⟩
- query variable 𝐐 ⊆ 𝐗

output:
- the distribution of 𝐐

algorithm:
- let <strong>𝐇</strong> = 𝐗 \\ 𝐐
- compute both:
	- <font style="color: rgb(128,128,128);">𝐏(𝐐) = <strong>∑</strong><sub><strong>𝐡</strong>∊<strong>𝐇 </strong></sub>\[ 𝐏(𝐐, <strong>𝐇</strong>=<strong>𝐡</strong>) \]</font>
