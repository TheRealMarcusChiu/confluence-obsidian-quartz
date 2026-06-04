---
title: "Positive Definite Matrix - Always Invertible"
created: 2021-12-21T00:42:21.979-06:00
modified: 2021-12-21T01:03:15.152-06:00
parent: "[[Positive Definite Matrix]]"
children: []
---
# Theorem

If 𝐴 is [[Positive Definite Matrix|positive definite]] then 𝐴 is [[Determinants - Invertible／Non-Singular - Not-Invertible／Singular|invertible]] and 𝐴<sup>−1</sup> is positive definite
# Proof
###### Prove 𝐴 is invertible
- If 𝐴 is positive definite, then 𝑣<sup>𝑇</sup>𝐴𝑣 \> 0 for all 𝑣≠0
- Thus, 𝐴𝑣≠0 for all 𝑣≠0
- Thus, 𝐴 has [[Matrix Rank|full rank]]
- Thus, 𝐴 is invertible

###### Prove 𝐴<sup>-1</sup> is positive definite
- For any invertible matrix 𝐴, (𝐴<sup>-1</sup>)<sup>𝑇</sup>= (𝐴<sup>𝑇</sup>)<sup>-1</sup>
	- \[𝐴<sup>𝑇</sup>(𝐴<sup>-1</sup>)<sup>𝑇</sup>\]<sup>𝑇</sup> = 𝐴<sup>-1</sup>𝐴<sup>𝑇</sup> = 𝐼
	- 𝐴<sup>𝑇</sup>(𝐴<sup>-1</sup>)<sup>𝑇</sup> = 𝐼<sup>𝑇</sup> = 𝐼
	- (𝐴<sup>-1</sup>)<sup>𝑇</sup>𝐴<sup>𝑇</sup> = 𝐼
- If 𝐴 is symmetric and invertible, then (𝐴<sup>-1</sup>)<sup>𝑇</sup>= (𝐴<sup>𝑇</sup>)<sup>-1</sup> = 𝐴<sup>-1</sup>
- Thus, 𝐴<sup>-1</sup> is symmetric
- Consider 𝑣<sup>𝑇</sup>𝐴<sup>-1</sup>𝑣 for any 𝑣≠0. Then:
	- 𝑣<sup>𝑇</sup>𝐴<sup>-1</sup>𝑣 = 𝑣<sup>𝑇</sup>𝐴<sup>-1</sup>𝐴𝐴<sup>-1</sup>𝑣
	- 𝑣<sup>𝑇</sup>𝐴<sup>-1</sup>𝑣 = (𝐴<sup>-1</sup>𝑣)<sup>𝑇</sup>𝐴(𝐴<sup>-1</sup>𝑣) <font style="color: rgb(122,134,154);">\# 𝐴<sup>-1</sup> is symmetric</font>
	- 𝑣<sup>𝑇</sup>𝐴<sup>-1</sup>𝑣 = 𝑢<sup>𝑇</sup>𝐴𝑢
	- 𝑣<sup>𝑇</sup>𝐴<sup>-1</sup>𝑣 \> 0 <font style="color: rgb(122,134,154);">\# 𝐴 is positive definite</font>
