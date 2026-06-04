---
title: "Random Fields"
created: 2021-09-13T05:26:39.202-05:00
modified: 2023-12-25T12:26:02.059-06:00
parent: "[[PGM - Model Types]]"
children: []
---
###### Random Fields
````excerpt
- a random function over an arbitrary domain (i.e. a function 𝑓(𝑥) that takes on a random value at each point 𝑥∊ℝ<sup>𝑛</sup> (or some other domain))
- is a generalization of a [[Stochastic／Random／Markov Models／Process|stochastic process]] where the underlying (time) parameter need no longer be real or integer-valued but can instead take values that are multidimensional vectors or points on some [[Manifolds (n-Dimensional Manifold (n-Manifold)|manifold]]
````
^excerpt

# Random Fields - Formal Definition
given:
- [[Probability Spaces (Sample Space - Event Space - Probability Measure)|probability space]] (𝛺, 𝐹, 𝐏)

an 𝑋-valued random field 𝑹 is a collection of 𝑋-valued random variables indexed by elements in a topological space 𝑇

in other words, a random field 𝑹 is a collection:
- {𝑅<sub>𝑡</sub> : 𝑡 ∊ 𝑇}

where each 𝑅<sub>𝑡</sub>is an 𝑋-valued random variable
# Random Fields - Types
- [[Markov Networks／Nets - Markov Random Fields (MRF)|Markov Random Field (MRF)]]
	- [[Conditional／Discriminative Random Fields (CRF)|Conditional Random Field (CRF)]]
- [Gibbs Random Field](https://en.wikipedia.org/wiki/Gibbs_random_field)
- [Gaussian Random Field](https://en.wikipedia.org/wiki/Gaussian_random_field)
