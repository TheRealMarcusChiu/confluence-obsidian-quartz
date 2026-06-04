---
title: "BN - Learning Structure & Parameters"
created: 2021-09-13T05:26:40.794-05:00
modified: 2023-12-26T20:36:04.453-06:00
parent: "[[Bayesian Networks (BN)]]"
children: []
---
given data learn the structure and parameters of a [[Bayesian Networks (BN)|Bayesian Network]]

see: [[PGM - Model Learning (Structure and／or Parameter)|PGM - Model Learning (Structure and/or Parameter)]]
# Learning Structure

TODO
# Learning Parameters

In Bayesian networks, if parameters are independent a priori, then also independent in the posterior

for Bernoulli/Multinoulli [[Bayesian Networks (BN)|Bayesian Networks]], estimation uses [[Sufficient Statistic|sufficient statistics]] \#(𝑎<sub>𝑖</sub>,𝒖)
- [[MLE - Bayesian Networks|MLE Method]] (Bernoulli/Multinoulli Likelihood) or (Bernoulli Likelihood)
	- 𝐏(𝑎|𝒖) = 𝜃<sub>𝑎|𝒖</sub> = \#(𝑎,𝒖) / \#(𝒖)
- [[MAP - Bayesian Networks|MAP Method]] (Multinoulli Likelihood & Dirichlet Prior/Posterior) or (Bernoulli Likelihood & Beta Prior/Posterior)
	- 𝐏(𝑎|𝒖) = 𝜃<sub>𝑎|𝒖</sub> = \[𝛼<sub>𝑎|𝒖</sub> + \#(𝑎,𝒖)\] / \[𝛼<sub>𝒖</sub> + \#(𝒖)\]

bayesian methods (e.g. MAP) require a choice of the prior distribution and its parameter values
- can be elicited as prior network and equivalent sample size

fragmentation/decomposition:
- BN with disjoint sets of parameters in CPDs, likelihood decomposes as the product of local likelihood functions, one per variable
- furthermore, in each node with table CPDs, local likelihood further decomposes as the product of likelihood for multinomials, one for each parent combination (i.e. 2<sup>(\#-of-parents)</sup> for binary variables)

Fragmentation and Overfitting
- for nodes with a large number of parents → most buckets will have few instances → poor parameter estimation
