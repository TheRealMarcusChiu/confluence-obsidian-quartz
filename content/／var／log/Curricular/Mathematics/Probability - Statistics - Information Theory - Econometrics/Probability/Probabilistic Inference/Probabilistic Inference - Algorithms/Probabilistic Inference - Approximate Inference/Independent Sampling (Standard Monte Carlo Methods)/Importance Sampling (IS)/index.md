---
title: "Importance Sampling (IS)"
created: 2021-09-13T05:28:15.842-05:00
modified: 2025-09-28T19:51:10.329-05:00
parent: "[[Independent Sampling (Standard Monte Carlo Methods)]]"
children:
  - "[[Importance Sampling - Probability Inference Query]]"
  - "[[Normalized Importance Sampling (NIS)]]"
  - "[[Un-Normalized Importance Sampling (UNIS)]]"
---
###### Importance Sampling
````excerpt
- a type of [[Monte Carlo (MC) Methods／Experiments／Simulations|Monte Carlo Simulation]]
- allows us to learn the properties/[[Statistics - Terminology|parameters]] of a distribution (<em>target distribution</em>) by sampling from another distribution (<em>proposal/sampling distribution</em>)
- is a general approach for estimating the expectation of a function 𝑓(𝑥) relative to some distribution 𝐏(𝑋), typically called the <em>target distribution </em>
- works for a 1-dimensional example (where computing integrals is typically quite straightforward), importance sampling can be used in higher dimensions where it is usually not possible to compute integrals analytically
- samples are weighted
- the samples do not need to come from the actual distribution, but can be from (almost) any distribution, with the weights adjusted to reflect the difference between the distributions
- can also be combined with exact inference. not all variables need to be sampled. some variables can be summed out and some sampled
````
^excerpt

# IS - Introduction

![](https://www.youtube.com/watch?v=C3p2wI4RAi8)
# IS - How it Works
- <strong>Define the Goal</strong>: You want to compute an expectation of a function 𝑓(𝑥) with respect to a target distribution 𝐏(𝑥)
- <strong>Choose a Proposal Distribution</strong>: Select a proposal distribution, 𝑸(𝑥), from which you can easily draw samples. This distribution should be "close" to the target distribution and ideally have higher probability density in the regions where 𝑓(𝑥)𝐏(𝑥) is large
- <strong>Sample from the Proposal</strong>: Draw independent samples, 𝑥⁽¹⁾, 𝑥⁽²⁾, ..., 𝑥⁽ⁿ⁾, from the proposal distribution 𝑸(𝑥)
- <strong>Calculate Weights</strong>: For each sample 𝑥⁽ⁱ⁾, calculate a weight w(𝑥⁽ⁱ⁾) = 𝐏(𝑥⁽ⁱ⁾) / 𝑸(𝑥⁽ⁱ⁾). This ratio adjusts for the fact that samples are not drawn from the target distribution
- <strong>Estimate the Expectation</strong>: Compute the weighted average of 𝑓(𝑥⁽ⁱ⁾) \* 𝑤(𝑥⁽ⁱ⁾) over all the samples

# IS - When it's Used
- <strong>Infeasibility of Direct Sampling</strong>: It's often hard or impossible to generate random samples directly from a complex target distribution
- <strong>Variance Reduction</strong>: Importance sampling can significantly reduce the variance of Monte Carlo estimators, leading to more accurate results with the same number of samples
- <strong>Focus on Important Regions</strong>: By biasing the sampling towards "important" regions where the function 𝑓(𝑥) is large or the target density 𝐏(𝑥) is high, you increase the chances of capturing significant parts of the distribution
- <strong>Unnormalized Densities</strong>: It can handle cases where the target distribution 𝐏(𝑥) is only known up to a constant factor, as this unknown constant cancels out in the weighting ratio

# IS - Performance
- performance depends how close the proposal distribution is to the posterior distribution
- for bayesian networks:
	- for optimum performance, the proposal distribution 𝑸 should be as close as possible to 𝐏(𝑋|𝐸=𝑒)
		- when 𝑸 = 𝐏(𝑋|𝐸=𝑒), the weight of every sample is 𝐏(𝐸=𝑒)! However, achieving this is [[P - NP - NPC - NPI - NPO - NPH|NP-hard]]
	- if evidence at roots, it's perfect
	- if evidence is closer to the leaves, proposal distribution is basically the prior over unobserved nodes (i.e. ignores the evidence)

# IS - Versions
- <strong>[[Un-Normalized Importance Sampling (UNIS)|un-normalized importance sampling]]</strong> - normalization constant(s) are KNOWN
- <strong>[[Normalized Importance Sampling (NIS)|normalized importance sampling]]</strong> - normalization constant(s) are UNKNOWN

other versions
- <strong>backward importance sampling</strong> - generates samples for parents of evidence variables
- <strong>adaptive importance sampling</strong> - learn a proposal distribution from the samples

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

- [[Importance Sampling (IS) vs Monte Carlo Markov Chains (MCMC)]]
