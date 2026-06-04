---
title: "Probabilistic Inference - Approximate Inference"
created: 2021-09-13T05:27:39.981-05:00
modified: 2025-09-28T19:49:01.786-05:00
parent: "[[Probabilistic Inference - Algorithms]]"
children:
  - "[[(Point／Parameter - Predictor／Model Target Function／Distribution) Estimation／Estimator／Estimate]]"
  - "[[Dependent Sampling (Markov Chain Monte Carlo (MCMC) Methods) ]]"
  - "[[Independent Sampling (Standard Monte Carlo Methods)]]"
  - "[[Inverse Transform Method - Smirnov Transform]]"
  - "[[Monte Carlo (MC) Methods／Experiments／Simulations]]"
  - "[[Probabilistic Inference - Approximate Inference - Comparisons]]"
  - "[[Probability - Generating Random Variable(s) that Simulates a Distribution]]"
---
> [!expand]- probabilistic inference recap
> ![[Probabilistic Inference#^excerpt]]

<strong>Approximate Inference</strong> is a type of [[Probabilistic Inference - Algorithms|inference method]] used for the computation/estimation of [[Probability Distributions|distributions]], their [[Statistics - Terminology|parameters]], their [[Probability|probabilities]], and/or [[Probability Distribution - Theorems & Properties|distribution characteristics]]

related to:
- [[Point／Parameter Estimation／Estimator／Estimate／Approximation - Estimating Parameters of Parametric Distribution／Population Function／Model (Population Parameters - Sample Statistics)|point estimation]] ([[Inferential Statistics|inferential statistics]]) - given a [[Statistics - Terminology|sample]] of a [[Statistics - Terminology|population]], we use [[Statistics - Terminology|sample statistics]] as estimates of [[Statistics - Terminology|population parameters]]
- [[Probability - Generating Random Variable(s) that Simulates a Distribution|simulating distributions]]

# Approximate Inference Algorithm - Types

![](https://www.youtube.com/watch?v=Em6mQQy4wYA)
- deterministic/analytical approximations:
	- [[Inverse Transform Method - Smirnov Transform]] - only works if:
		- distribution is normalized (e.g. [[Probability Distributions|probability distribution]])
		- we know the distribution's [[Probability Distribution Function Variants - Probability／Mass／Density／Cumulative／Survivor／Hazard／Cumulative-Hazard／Inverse／Moment-Generating Distribution Functions|cumulative distribution function]] and is [[Inverse Function - Anti-Function|invertible]]
- non-deterministic/sampling approximations & stochastic simulations:
	- [[Independent Sampling (Standard Monte Carlo Methods)]] - is where the next value sampled from a distribution is INDEPENDENT on the previous sample
	- [[Dependent Sampling (Markov Chain Monte Carlo (MCMC) Methods) |Dependent Sampling (Markov Chain Monte Carlo (MCMC) Methods)]] is where the next value sampled from a distribution is DEPENDENT on the previous sample
	- [[(Point／Parameter - Predictor／Model Target Function／Distribution) Estimation／Estimator／Estimate|(Point/Parameter - Predictor/Model Target Function/Distribution) Estimation/Estimator/Estimate]]
		- [[Target Function／Distribution Predictor／Estimation／Estimator／Approximation／Approximators|Function Estimation/Estimator/Approximation]] - estimating hidden target function/distribution
		- [[Point／Parameter Estimation／Estimator／Estimate／Approximation - Estimating Parameters of Parametric Distribution／Population Function／Model (Population Parameters - Sample Statistics)|Point/Parameter Estimation/Estimator/Approximation]] - estimating parameters of parametric distribution/population function/model
			- [[Maximum Likelihood Estimation (MLE)]] - maximizes the likelihood function
			- [[Maximum a Posteriori (MAP)]] - maximizes the posterior distribution
- search-based:
	- [[Monte Carlo Tree Search (MCTS)]]
- elimination/propagation:
	- junction graph
	- variational inference
	- generalized belief propagation
- w-cutset - combines search and elimination
- variational algorithms

# Comparisons
```dataview
LIST
FROM ""
WHERE file.folder = [[Probabilistic Inference - Approximate Inference - Comparisons]].file.folder + "/" + [[Probabilistic Inference - Approximate Inference - Comparisons]].file.name
```
