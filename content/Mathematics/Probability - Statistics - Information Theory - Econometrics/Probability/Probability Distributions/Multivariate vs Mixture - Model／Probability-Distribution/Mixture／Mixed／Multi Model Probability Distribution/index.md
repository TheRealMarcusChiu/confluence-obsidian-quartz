---
title: "Mixture／Mixed／Multi Model Probability Distribution"
created: 2021-09-13T05:27:17.660-05:00
modified: 2021-10-31T03:11:29.679-05:00
parent: "[[Multivariate vs Mixture - Model／Probability-Distribution]]"
children:
  - "[[Boltzmann／Gibbs Distribution]]"
  - "[[Gaussian／Normal Mixture Distribution／Model／Process (GMM／NMM) - Bimodal／Trimodal／Multimodal]]"
  - "[[Maxwell-Boltzmann Distribution]]"
---
````excerpt
<strong>[[Mixture／Mixed／Multi Model Probability Distribution|Mixture/Mixed/Multi Model Probability Distribution]]</strong> is a model comprised of an unspecified combination of multiple [[Probability Distributions|probability distribution functions]] (univariate and/or multivariate)
````
^excerpt

# Definition

on each trial, the choice of which probability distribution generates the sample is determined by sampling a distribution identity from a [[Mixture／Mixed／Multi Model Probability Distribution|multinoulli distribution]]
- 𝐏(𝑥) = 𝛴<sub>𝑖</sub>𝐏(𝑐=𝑖)𝐏(𝑥|𝑐=𝑖)

where:
- 𝐏(𝑐) - is the [[Mixture／Mixed／Multi Model Probability Distribution|multinoulli distribution]] over distribution identities

# Example

a mixed distribution modeled with 3 [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|normal distributions]]

![[Mixture／Mixed／Multi Model Probability Distribution/Skewness-Resulting-from-Mixing-Normal-Distributions-with-Different-Mean-Values.png]]
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
