---
title: "Likelihood Weighting Sampling"
created: 2021-09-13T05:28:16.827-05:00
modified: 2026-05-21T01:57:12.454-05:00
parent: "[[Independent Sampling (Standard Monte Carlo Methods)]]"
children: []
---
###### Likelihood Weighting Sampling
````excerpt
- is a specific form of [[Importance Sampling (IS)|importance sampling]] for [[Bayesian Networks (BN)|Bayesian Networks]] where the variables are sampled in the order defined by the network, and evidence is used to update the weights
- a special kind of importance sampling in which the proposal distribution equals the belief network obtained by clamping evidence
- is a combination of both:
	- [[Forward／Logic Sampling|logic/forward sampling]] - a special case of likelihood weighting that solves only [[Probabilistic Inference - Query／Task Types (Posterior Conditional - Prior Marginal ／ Probability of Evidence - MPE - MAP)|probability of evidence queries (i.e. 𝐏(𝐸=𝑒))]]
	- [[Importance Sampling (IS)|importance sampling]] - generalizes likelihood weighting
- performs POORLY when evidence is at the leaves
- syntax
> [!expand]- Click here to expand...
> ![[Probabilistic Inference - Syntax#^excerpt]]
````
^excerpt

# Solving [[Probabilistic Inference - Query／Task Types (Posterior Conditional - Prior Marginal ／ Probability of Evidence - MPE - MAP)|Posterior Conditional Query]]

> [!expand]- Click here to expand...
> is a specific version of [[Importance Sampling - Probability Inference Query|Normalized Importance Sampling]] where weights are only applied to the evidence
> ```
> LW-Sample(𝓑, 𝑬=𝒆) {
> 	// 𝓑 - bayesian network
> 	// 𝑬=𝒆 - set of evidence variables
> 	w = 1
> 	for each variable 𝑋ᵢ in topological order based on 𝓑
> 		if 𝑋ᵢ is an evidence variable
> 			𝑋ᵢ = 𝑒ᵢ
> 			w = w * 𝐏(𝑋ᵢ|𝑝𝑎??𝑒𝑛𝑡𝑠-𝑜𝑓(𝑋ᵢ))
> 		else
> 			𝑋ᵢ = sample from 𝐏(𝑋ᵢ|𝑝𝑎𝑟𝑒𝑛𝑡𝑠-𝑜𝑓(𝑋ᵢ)
> 	return (w, sample={𝑋₁, ..., 𝑋n}) // weighted sample
> }
> ```
>
> this process generates a weighted particle. We can now estimate a conditional probability 𝐏(𝑸=𝒒|𝑬=𝒆) by using LW-Sample 𝑛 times to generate a set of weighted particles {⟨𝑤\[1\],𝑠𝑎𝑚𝑝𝑙𝑒\[1\]⟩, ..., ⟨𝑤\[𝑛\],𝑠𝑎𝑚𝑝𝑙𝑒\[𝑛\]⟩}. We then estimate:
> - 𝐏(𝑸=𝒒|𝑬=𝒆) ≈ 𝐏ˆ(𝑸=𝒒|𝑬=𝒆) = <font style="color: rgb(0,128,0);"><strong>\[</strong>𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑤\[𝑖\]·𝐼{𝑠𝑎𝑚𝑝𝑙𝑒<sub>𝑸</sub>\[𝑖\] = 𝒒}\]<strong>\]</strong></font> / <font style="color: rgb(128,0,0);"><strong>\[</strong>𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑤\[𝑖\]\]<strong>\]</strong></font>
>
> where:
> - 𝑠𝑎𝑚𝑝𝑙𝑒<sub>𝑸</sub>\[𝑖\] - is a subset of 𝑠𝑎𝑚𝑝𝑙𝑒\[𝑖\] that contains variables 𝑸
> - 𝐼{𝑠𝑎𝑚𝑝𝑙𝑒<sub>𝑸</sub>\[𝑖\] = 𝒒}\] - is an [[Indicator Functions - Characteristic Functions - Membership Functions|indicator function]] that equals 1 when 𝑠𝑎𝑚𝑝𝑙𝑒<sub>𝑸</sub>\[𝑖\] is assigned 𝒒
# Solving [[Probabilistic Inference - Query／Task Types (Posterior Conditional - Prior Marginal ／ Probability of Evidence - MPE - MAP)|Probability of Evidence Query]]

> [!expand]- Click here to expand...
> To solve 𝐏(𝑸=𝒒) we can use the same algorithm as Solving [[Probabilistic Inference - Query／Task Types (Posterior Conditional - Prior Marginal ／ Probability of Evidence - MPE - MAP)|Posterior Conditional Query]]. However we can simplify it
> ```
> LW-Sample(𝓑) {
> 	// 𝓑 - bayesian network
> 	for each variable 𝑋ᵢ in topological order based on 𝓑
> 		𝑋ᵢ = sample from 𝐏(𝑋ᵢ|𝑝𝑎𝑟𝑒𝑛𝑡𝑠-𝑜𝑓(𝑋ᵢ)
> 	return {𝑋₁, ..., 𝑋n} // sample
> }
> ```
>
> this process generates a sample particle. We can now estimate a conditional probability 𝐏(𝑸=𝒒) by using LW-Sample 𝑛 times to generate a set of weighted particles {⟨𝑠𝑎𝑚𝑝𝑙𝑒\[1\], ..., 𝑠𝑎𝑚𝑝𝑙𝑒\[𝑛\]}. We then estimate:
> - 𝐏(𝑸=𝒒) ≈ 𝐏ˆ(𝑸=𝒒) = <font style="color: rgb(0,128,0);"><strong>\[</strong>𝛴<sub>1≤𝑖≤𝑛</sub> 𝐼{𝑠𝑎𝑚𝑝𝑙𝑒<sub>𝑸</sub>\[𝑖\] = 𝒒}<strong>\]</strong></font> / <font style="color: rgb(128,0,0);"><strong>\[</strong>𝑛<strong>\]</strong></font>
>
> where:
> - 𝑠𝑎𝑚𝑝𝑙𝑒<sub>𝑸</sub>\[𝑖\] - is a subset of 𝑠𝑎𝑚𝑝𝑙𝑒\[𝑖\] that contains variables 𝑸
> - 𝐼{𝑠𝑎𝑚𝑝𝑙𝑒<sub>𝑸</sub>\[𝑖\] = 𝒒}\] - is an [[Indicator Functions - Characteristic Functions - Membership Functions|indicator function]] that equals 1 when 𝑠𝑎𝑚𝑝𝑙𝑒<sub>𝑸</sub>\[𝑖\] is assigned 𝒒
>
> NOTE: This is the same as [[Forward／Logic Sampling|Forward/Logic Sampling]]
# Likelihood Weighting - Limitations

> [!expand]- Click here to expand...
> one of the limitations of likelihood weighting is that an evidence node affects the sample only for nodes that are its descendants. The effect on nodes that are non-descendants is accounted for only by weights. In cases where much of the evidence is at the leaves of the network, we are essentially sampling from the prior distribution, which is often very far from the desired posterior
# Likelihood Weighting or Importance Sampling

> [!expand]- Click here to expand...
> ###### Solving [[Probabilistic Inference - Query／Task Types (Posterior Conditional - Prior Marginal ／ Probability of Evidence - MPE - MAP)|Probability of Evidence Query]] of a [[Bayesian Networks (BN)|Bayesian Network]]
>
> > [!expand]- Click here to expand...
> > given evidence 𝑬=𝒆, we clamp the bayesian network
> >
> > compute proposal distribution 𝐐(𝑯) over the clamped bayesian network
> >
> > express 𝐏(𝑬=𝒆) as follows:
> > - 𝐏(𝑬=𝒆) = 𝛴<sub>𝘩<sub>1</sub>∊𝐻<sub>1</sub></sub> ... 𝛴<sub>𝘩<sub>𝑡</sub>∊𝐻<sub>𝑡</sub></sub> \[ 𝐏(𝑯=𝒉, 𝑬=𝒆) \]
> > - 𝐏(𝑬=𝒆) = 𝛴<sub>𝘩<sub>1</sub>∊𝐻<sub>1</sub></sub> ... 𝛴<sub>𝘩<sub>𝑡</sub>∊𝐻<sub>𝑡</sub></sub> \[ 𝐏(𝑯=𝒉, 𝑬=𝒆) 𝐐(𝑯=𝒉)/𝐐(𝑯=𝒉) \]
> > - 𝐏(𝑬=𝒆) = 𝛴<sub>𝘩<sub>1</sub>∊𝐻<sub>1</sub></sub> ... 𝛴<sub>𝘩<sub>𝑡</sub>∊𝐻<sub>𝑡</sub></sub> \[ \[<font style="color: rgb(128,0,0);">𝐏(𝑯=𝒉, 𝑬=𝒆)</font>/<font style="color: rgb(0,128,0);">𝐐(𝑯=𝒉)</font>\] · 𝐐(𝑯=𝒉) \]
> > - 𝐏(𝑬=𝒆) = 𝐄<sub>𝐐</sub>\[ <font style="color: rgb(128,0,0);">𝐏(𝑯=𝒉, 𝑬=𝒆)</font> /<font style="color: rgb(0,128,0);"> 𝐐(𝑯=𝒉)</font> \]
> > - 𝐏(𝑬=𝒆) = 𝐄<sub>𝐐</sub>\[ <font style="color: rgb(128,0,0);">\[𝐏(𝐻<sub>1</sub>=𝘩<sub>1</sub>|𝑝𝑎𝑟𝑒𝑛𝑡𝑠-𝑜𝑓(𝐻<sub>1</sub>))· ... ·𝐏(𝐻<sub>𝑡</sub>=𝘩<sub>𝑡</sub>|𝑝𝑎𝑟𝑒𝑛𝑡𝑠-𝑜𝑓(𝐻<sub>𝑡</sub>))·𝐏(𝐸<sub>1</sub>=𝑒<sub>1</sub><font style="color: rgb(128,0,0);">|𝑝𝑎𝑟𝑒𝑛𝑡𝑠-𝑜𝑓(</font><font style="color: rgb(128,0,0);">𝐸<sub>𝑠</sub></font>))· ... ·𝐏(𝐸<sub>𝑠</sub>=𝑒<sub>𝑠</sub><font style="color: rgb(128,0,0);">|𝑝𝑎𝑟𝑒𝑛𝑡𝑠-𝑜𝑓(<font style="color: rgb(128,0,0);">𝐸<sub>𝑠</sub></font></font>))\]</font> / <font style="color: rgb(0,128,0);">\[<font style="color: rgb(0,128,0);">𝐐</font>(𝐻<sub>1</sub>=𝘩<sub>1</sub>|𝑝𝑎𝑟𝑒𝑛𝑡𝑠-𝑜𝑓(𝐻<sub>1</sub>))· ... ·<font style="color: rgb(0,128,0);">𝐐</font>(𝐻<sub>𝑡</sub>=𝘩<sub>𝑡</sub>|𝑝𝑎𝑟𝑒𝑛𝑡𝑠-𝑜𝑓(𝐻<sub>𝑡</sub>))\]</font> \]
> > - 𝐏(𝑬=𝒆) = 𝐄<sub>𝐐</sub>\[ <font style="color: rgb(128,0,0);">\[𝐏(𝐻<sub>1</sub>=𝘩<sub>1</sub>|𝑝𝑎𝑟𝑒𝑛𝑡𝑠-𝑜𝑓(𝐻<sub>1</sub>))· ... ·𝐏(𝐻<sub>𝑡</sub>=𝘩<sub>𝑡</sub>|𝑝𝑎𝑟𝑒𝑛𝑡𝑠-𝑜𝑓(𝐻<sub>𝑡</sub>))·𝐏(𝐸<sub>1</sub>=𝑒<sub>1</sub><font style="color: rgb(128,0,0);">|𝑝𝑎𝑟𝑒𝑛𝑡𝑠-𝑜𝑓(</font><font style="color: rgb(128,0,0);">𝐸<sub>𝑠</sub></font>))· ... ·𝐏(𝐸<sub>𝑠</sub>=𝑒<sub>𝑠</sub><font style="color: rgb(128,0,0);">|𝑝𝑎𝑟𝑒𝑛𝑡𝑠-𝑜𝑓(<font style="color: rgb(128,0,0);">𝐸<sub>𝑠</sub></font></font>))\]</font> / <font style="color: rgb(0,128,0);">\[<font style="color: rgb(128,0,0);">𝐏</font>(𝐻<sub>1</sub>=𝘩<sub>1</sub>|𝑝𝑎𝑟𝑒𝑛𝑡𝑠-𝑜𝑓(𝐻<sub>1</sub>))· ... ·<font style="color: rgb(128,0,0);">𝐏</font>(𝐻<sub>𝑡</sub>=𝘩<sub>𝑡</sub>|𝑝𝑎𝑟𝑒𝑛𝑡𝑠-𝑜𝑓(𝐻<sub>𝑡</sub>))\]</font> \] <font style="color: rgb(128,128,128);">\# 𝐐 is over the same distribution as 𝐏</font>
> > - 𝐏(𝑬=𝒆) = 𝐄<sub>𝐐</sub>\[ <font style="color: rgb(128,0,0);">𝐏(𝐸<sub>1</sub>=𝑒<sub>1</sub><font style="color: rgb(128,0,0);">|𝑝𝑎𝑟𝑒𝑛𝑡𝑠-𝑜𝑓(</font><font style="color: rgb(128,0,0);">𝐸<sub>𝑠</sub></font>))· ... ·𝐏(𝐸<sub>𝑠</sub>=𝑒<sub>𝑠</sub><font style="color: rgb(128,0,0);">|𝑝𝑎𝑟𝑒𝑛𝑡𝑠-𝑜𝑓(<font style="color: rgb(128,0,0);">𝐸<sub>𝑠</sub></font></font>))</font> \]
> > - 𝐏(𝑬=𝒆) = 𝐄<sub>𝐐</sub>\[ <font style="color: rgb(128,0,0);">𝐏(𝑬=𝒆<font style="color: rgb(128,0,0);">|𝑝𝑎𝑟𝑒𝑛𝑡𝑠-𝑜𝑓(</font><font style="color: rgb(128,0,0);"><font style="color: rgb(128,0,0);">𝑬</font></font>))</font> \]
> >
> > generate 𝑛 samples from proposal distribution 𝐐 and estimate 𝐏(𝑬=𝒆) using the following Monte Carlo estimate:
> > - 𝐏ˆ(𝑬=𝒆) = (1/𝑛) 𝛴<sub>1≤𝑖≤𝑛</sub> \[ 𝐏(𝑬=𝒆 | 𝑝𝑎𝑟𝑒𝑛𝑡𝑠-𝑜𝑓(𝑬) 𝑎𝑠𝑠𝑖𝑔𝑛𝑒𝑑 𝑤𝑖𝑡𝘩 𝑣𝑎𝑙𝑢𝑒𝑠 𝑑𝑟𝑎𝑤𝑛 𝑓𝑟𝑜𝑚 𝑝𝑟𝑜𝑝𝑜𝑠𝑎𝑙 𝑑𝑖𝑠𝑡𝑟𝑖𝑏𝑢𝑡𝑖𝑜𝑛 𝑜𝑟 𝑒𝑣𝑖𝑑𝑒𝑛𝑐𝑒) \]
> ###### Solving [[Probabilistic Inference - Query／Task Types (Posterior Conditional - Prior Marginal ／ Probability of Evidence - MPE - MAP)|Probability of Evidence Query]] of a [[Bayesian Networks (BN)|Bayesian Network]] - Example
>
> > [!expand]- Click here to expand...
> > - given a [[Bayesian Networks (BN)|bayesian network]] below
> > - given evidence (𝑔=0, 𝑠=0), we clamp the [[Conditional Probability Table (CPT)|conditional probability tables]] of the [[Bayesian Networks (BN)|bayesian network]]
> > - compute proposal distribution 𝐐 defined over the clamped bayesian network
> > - 𝐏ˆ(𝑬=𝒆) = 𝑎𝑣𝑒𝑟𝑎𝑔𝑒-𝑜𝑓\[ 𝐏(𝑠𝑎𝑚𝑝𝑙𝑒, 𝑒𝑣𝑖𝑑𝑒𝑛𝑐𝑒) / 𝐐(𝑠𝑎𝑚𝑝𝑙𝑒) \]
> > - 𝐏ˆ(𝑬=𝒆) = (1/𝑛) 𝛴<sub>1≤𝑖≤𝑛</sub> \[ 𝐏(𝑠𝑎𝑚𝑝𝑙𝑒<sup>𝑖</sup>, 𝑒𝑣𝑖𝑑𝑒𝑛𝑐𝑒) / 𝐐(𝑠𝑎𝑚𝑝𝑙𝑒<sup>𝑖</sup>) \]
> > - 𝐏ˆ(𝑬=𝒆) = (1/𝑛) 𝛴<sub>1≤𝑖≤𝑛</sub> \[ 𝐏(𝑯=𝒉<sup>𝑖</sup>, 𝑬=𝒆)/𝐐(𝑯=𝒉<sup>𝑖</sup>) \]
> > - 𝐏ˆ(𝑬=𝒆) = (1/𝑛) 𝛴<sub>1≤𝑖≤𝑛</sub> \[ 𝐏(𝐷=𝑑<sup>𝑖</sup>, 𝐼=𝑖<sup>𝑖</sup>, 𝐺=0, 𝐿=𝑙<sup>𝑖</sup>, 𝑆=0) / 𝐐(𝐷=𝑑<sup>𝑖</sup>, 𝐼=𝑖<sup>𝑖</sup>, 𝐿=𝑙<sup>𝑖</sup>) \]
> > - 𝐏ˆ(𝑬=𝒆) = (1/𝑛) 𝛴<sub>1≤𝑖≤𝑛</sub><strong>\[</strong> \[𝐏(𝐷=𝑑<sup>𝑖</sup>)·𝐏(𝐼=𝑖<sup>𝑖</sup>)·𝐏(𝐺=0|𝐷=𝑑<sup>𝑖</sup>,𝐼=𝑖<sup>𝑖</sup>)·𝐏(𝐿=𝑙<sup>𝑖</sup>|𝐺=0)·𝐏(𝑆=0|𝐼=𝑖<sup>𝑖</sup>)\] / \[𝐐(𝐷=𝑑<sup>𝑖</sup>)·𝐐(𝐼=𝑖<sup>𝑖</sup>)·𝐐(𝐿=𝑙<sup>𝑖</sup>|𝐺=0)\] <strong>\]</strong>
> > - 𝐏ˆ(𝑬=𝒆) = (1/𝑛) 𝛴<sub>1≤𝑖≤𝑛</sub><strong>\[</strong> \[𝐏(𝐷=𝑑<sup>𝑖</sup>)·𝐏(𝐼=𝑖<sup>𝑖</sup>)·𝐏(𝐺=0|𝐷=𝑑<sup>𝑖</sup>,𝐼=𝑖<sup>𝑖</sup>)·𝐏(𝐿=𝑙<sup>𝑖</sup>|𝐺=0)·𝐏(𝑆=0|𝐼=𝑖<sup>𝑖</sup>)\] / \[𝐏(𝐷=𝑑<sup>𝑖</sup>)·𝐏(𝐼=𝑖<sup>𝑖</sup>)·𝐏(𝐿=𝑙<sup>𝑖</sup>|𝐺=0)\] <strong>\]</strong>
> > - 𝐏ˆ(𝑬=𝒆) = (1/𝑛) 𝛴<sub>1≤𝑖≤𝑛</sub><strong>\[</strong> 𝐏(𝐺=0|𝐷=𝑑<sup>𝑖</sup>,𝐼=𝑖<sup>𝑖</sup>)·𝐏(𝑆=0|𝐼=𝑖<sup>𝑖</sup>) <strong>\]</strong>
> >
> > ```merge-table
> > {
> >   "rows": [
> >     [
> >       "###### bayesian network\n\n![[Likelihood Weighting Sampling/importance-sampling-bayesian-network-example.png|400]]",
> >       "###### clamped bayesian network\n![[Likelihood Weighting Sampling/likelihood-weighting-bayesian-network.png|400]]"
> >     ]
> >   ],
> >   "tableStyle": "width: 99.9521%;"
> > }
> > ```
> >
> > 𝐏ˆ(𝑬=𝒆) = (1/𝑛) 𝛴<sub>1≤𝑖≤𝑛</sub> \[ 𝐏(𝐺=0|𝐷=𝑑<sup>𝑖</sup>,𝐼=𝑖<sup>𝑖</sup>)·𝐏(𝑆=0|𝐼=𝑖<sup>𝑖</sup>) \]
> > - sample 𝑖=1 = (𝐷=0, 𝐼=0, 𝐿=0)
> > 	- 𝐏(𝐺=0|𝐷=0,𝐼=0)·𝐏(𝑆=0|𝐼=0) = 0.3 \* 0.95 = 0.285
> > - sample 𝑖=2 = (𝐷=0, 𝐼=1, 𝐿=1)
> > 	- 𝐏(𝐺=0|𝐷=0,𝐼=1)·𝐏(𝑆=0|𝐼=1) = 0.9 \* 0.2 = 0.18
> > - and so on...
> >
> > 𝐏ˆ(𝑬=𝒆) = (1/𝑛) (0.285 + 0.18 + ... + 𝑛<sup>𝑡𝘩</sup> 𝑠𝑎𝑚𝑝𝑙𝑒)
> >
> > NOTE: performs POORLY when evidence is at the leaves
