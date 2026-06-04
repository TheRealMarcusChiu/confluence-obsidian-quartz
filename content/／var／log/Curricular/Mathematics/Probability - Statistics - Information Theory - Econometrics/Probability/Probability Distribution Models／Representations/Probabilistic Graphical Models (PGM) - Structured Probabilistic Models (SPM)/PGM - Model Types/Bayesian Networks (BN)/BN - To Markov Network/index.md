---
title: "BN - To Markov Network"
created: 2021-09-13T05:26:43.851-05:00
modified: 2021-09-13T05:26:43.851-05:00
parent: "[[Bayesian Networks (BN)]]"
children: []
---
When converting a [[Bayesian Networks (BN)|Bayesian Network]] to a [[Markov Networks／Nets - Markov Random Fields (MRF)|Markov Network]], the dependencies of Markov Network must be a superset of the Bayes Network dependencies.

I(Bayes) ⊆ I(Markov)
###### How Do We Do This

a [[Moral Graph - Moralization|moral graph]] of a [[Bayesian Networks (BN)|Bayesian Network]] (𝓑):
- is a [[Markov Networks／Nets - Markov Random Fields (MRF)|Markov Network]] (𝓜)
- is also a [[I-Map - D-Map - Minimal I-Map - Maximal D-Map - P-Map - I-Equivalence|Minimal I-Map]] of 𝓑

if the moral graph of 𝓑 does not add any edges, then the moral graph is a [[I-Map - D-Map - Minimal I-Map - Maximal D-Map - P-Map - I-Equivalence|P-Map]] of 𝓑
### Example
![[BN - To Markov Network/bayesian-network-moral-primal-graph.png|400]]
### Converting a Markov Network to Bayesian Network

the process is not the same (i.e. no one-to-one correspondence)

see: [[MN／MRF - To Bayesian Network|MN/MRF - To Bayesian Network]]
