---
title: "Forward／Logic Sampling"
created: 2021-09-13T05:28:15.587-05:00
modified: 2025-09-28T14:51:37.687-05:00
parent: "[[Independent Sampling (Standard Monte Carlo Methods)]]"
children: []
---
###### Forward/Logic Sampling
- a sampling technique used in [[Bayesian Networks (BN)|Bayesian Networks]]
- a special case of [[Likelihood Weighting Sampling]] where that solves probability queries with no evidence
```
forward-sample(𝓑) {
	// 𝓑 is the bayesian network
	for each variable 𝑋ᵢ in topological order based on 𝓑
		𝑋ᵢ = sample from 𝐏(𝑋ᵢ|𝑝𝑎𝑟𝑒𝑛𝑡𝑠-𝑜𝑓(𝑋ᵢ)
    return {𝑋₁, ..., 𝑋n} // sample
}
```

this process generates a sample particle. We can now estimate a conditional probability 𝐏(𝑸=𝒒) by using <em>forward-sample</em> 𝑛 times to generate a set of sample particles {⟨𝑠𝑎𝑚𝑝𝑙𝑒\[1\], ..., 𝑠𝑎𝑚𝑝𝑙𝑒\[𝑛\]}. We then estimate:
- 𝐏(𝑸=𝒒) ≈ 𝐏ˆ(𝑸=𝒒) = <font style="color: rgb(0,128,0);"><strong>\[</strong>𝛴<sub>1≤𝑖≤𝑛</sub> 𝐼{𝑠𝑎𝑚𝑝𝑙𝑒<sub>𝑸</sub>\[𝑖\] = 𝒒}<strong>\]</strong></font> / <font style="color: rgb(128,0,0);"><strong>\[</strong>𝑛<strong>\]</strong></font>

where:
- 𝑠𝑎𝑚𝑝𝑙𝑒<sub>𝑸</sub>\[𝑖\] - is a subset of 𝑠𝑎𝑚𝑝𝑙𝑒\[𝑖\] that contains variables 𝑸
- 𝐼{𝑠𝑎𝑚𝑝𝑙𝑒<sub>𝑸</sub>\[𝑖\] = 𝒒}\] - is an [[Indicator Functions - Characteristic Functions - Membership Functions|indicator function]] that equals 1 when 𝑠𝑎𝑚𝑝𝑙𝑒<sub>𝑸</sub>\[𝑖\] is assigned 𝒒

# Solving Posterior Conditional Probability Query

What if we want to solve something like 𝐏(𝑸=𝒒|𝑬=𝒆)? We can't always use forward sampling. If the evidence are at the leaves, it doesn't affect the sampling of variables at the top of the bayesian network (forward sampling samples variables in [[Topological Sort／Ordering|topological order]]). Only when the set of evidence variables are roots or all of its parents are other evidence from the same set then forward sampling can be used. If this is not the case we can use [[Likelihood Weighting Sampling]]
