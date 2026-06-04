---
title: "MN／MRF - To Bayesian Network"
created: 2021-09-13T05:26:49.287-05:00
modified: 2021-09-13T05:26:49.287-05:00
parent: "[[Markov Networks／Nets - Markov Random Fields (MRF)]]"
children: []
---
Finding a [[Bayesian Networks (BN)|Bayesian Network]] 𝓑 that is a [[I-Map - D-Map - Minimal I-Map - Maximal D-Map - P-Map - I-Equivalence|minimal I-Map]] for a given [[Markov Networks／Nets - Markov Random Fields (MRF)|Markov Network]] 𝓜 is:
- conceptually and computationally more difficult than [[BN - To Markov Network|Bayesian Network To Markov Network]]
- resulting Bayesian Network can be considerably larger

However, if a Markov Network 𝓜 is a [[Chordal Graphs|chordal graph]] then there exist a Bayesian Network 𝓑 such that: 𝓜 and 𝓑 are [[I-Map - D-Map - Minimal I-Map - Maximal D-Map - P-Map - I-Equivalence|I-Equivalent]]

![[MN／MRF - To Bayesian Network/markov-network-to-bayesian-network-example.png]]
### Converting a Bayesian Network to Markov Network

the process is not the same (i.e. no one-to-one correspondence)

see: [[BN - To Markov Network]]
