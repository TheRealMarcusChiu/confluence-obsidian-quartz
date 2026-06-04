---
title: "Independent Sampling (Standard Monte Carlo Methods)"
created: 2021-09-13T05:28:14.215-05:00
modified: 2025-09-28T17:52:01.686-05:00
parent: "[[Probabilistic Inference - Approximate Inference]]"
children:
  - "[[Acceptance-Rejection Method／Sampling]]"
  - "[[Forward／Logic Sampling]]"
  - "[[Importance Sampling (IS)]]"
  - "[[Likelihood Weighting Sampling]]"
  - "[[Particle Filtering Sampling - Sequential Monte Carlo]]"
  - "[[Simple Sampling - Simple Monte Carlo]]"
---
###### Independent Sampling (Standard Monte Carlo Methods)
````excerpt
- is where the next value sampled from a distribution is INDEPENDENT on the previous sample (as oppose to [[Dependent Sampling (Markov Chain Monte Carlo (MCMC) Methods) |Dependent Sampling]])
````
^excerpt

# Independence Sampling - Types
- [[Simple Sampling - Simple Monte Carlo|Simple Sampling (Simple Monte Carlo)]] - similar to [[Maximum Likelihood Estimation (MLE)|MLE]]
	- requires sampling from the actual distribution in order to make estimations
	- if one can't sample from actual distribution, use rejection sampling, importance sampling, etc
- [[Acceptance-Rejection Method／Sampling|Rejection Sampling]] - as you scale to higher dimensions the inefficiency scales exponentially (requires evaluation of target distribution)
- Sampling in [[Bayesian Networks (BN)|Bayesian Networks]]:
	- [[Forward／Logic Sampling|Forward/Logic Sampling]] - approximates 𝐏(𝑬=𝒆) queries, and some 𝐏(𝑸=𝒒|𝑬=𝒆) queries
	- [[Likelihood Weighting Sampling]] - approximates 𝐏(𝑸=𝒒|𝑬=𝒆) and 𝐏(𝑬=𝒆) queries
- [[Importance Sampling (IS)]] - for both types of importance sampling: hard to choose appropriate proposal/sampling distribution and as you scale to higher dimensions the variance of weight (i.e. 𝐏(𝑋)/𝐐(𝑋)) increases exponentially. Therefore, not very useful for high dimensional distributions unless we could decompose it into several smaller distributions. If it can't be done, consider using [[Markov Chain Monte Carlo (MCMC)|MCMC]]
	- [[Un-Normalized Importance Sampling (UNIS)]]:
		- solves the problem in Simple Sampling by sampling from a different distribution and prescribe weights (importance) to each sample. This would simulate sampling from the actual distribution. However, in order to compute weights it requires evaluation of target distribution
		- if one can't evaluate the target distribution, use normalized importance sampling
	- [[Normalized Importance Sampling (NIS)]] - solves 𝐏(𝑸=𝒒|𝑬=𝒆) more accurately than Un-normalized Importance Sampling
- [[Particle Filtering Sampling - Sequential Monte Carlo]] - generates all the samples for one variable before moving to the next variable
