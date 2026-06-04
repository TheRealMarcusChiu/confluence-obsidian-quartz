---
title: "Probabilistic Inference - W-Cutset-Conditioning Algorithm"
created: 2021-09-13T05:28:26.923-05:00
modified: 2021-09-13T05:28:26.923-05:00
parent: "[[Probabilistic Inference - Cutset Conditioning Scheme]]"
children: []
---
<strong>W-Cutset-Conditioning</strong> <strong>Algorithm</strong>
- a type of [[Probabilistic Inference - Cutset Conditioning Scheme|Cutset Conditioning Algorithm]]
- applies search to the [[W-Cutset|w-cutset variables]] and [[Probabilistic Inference - Exact Inference|exact inference algorithm]] (e.g. [[Probabilistic Inference - Bucket Elimination (BE) - Variable Elimination (VE)|variable elimination]]) to the remaining network

### W-Cutset Conditioning - Algorithm
- w-cutset = remove variables from graph until its treewidth is bounded by 𝑤 <font style="color: rgb(128,128,128);">\# see</font> [[Minimum W-Cutset Problem]]
- for each assignment of w-cutset
	- condition the assignment on the original network
	- then apply exact inference algorithm to retrieve output probability
- return sum of all output probabilities

### W-Cutset Conditioning - Complexity
- space 𝑂(𝑑<sup>𝑤</sup>)
- time 𝑂(𝑑<sup>𝑤+𝑘</sup>) what is 𝑘?

where:
- 𝑤 - number of variables in cutset
- 𝑑 - size of each variable domain
