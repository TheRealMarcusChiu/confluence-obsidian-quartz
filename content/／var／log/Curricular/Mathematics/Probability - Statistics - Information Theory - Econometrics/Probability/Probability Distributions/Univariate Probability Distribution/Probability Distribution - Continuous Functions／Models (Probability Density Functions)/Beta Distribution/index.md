---
title: "Beta Distribution"
created: 2021-09-13T05:27:23.197-05:00
modified: 2024-02-15T10:09:13.299-06:00
parent: "[[Probability Distribution - Continuous Functions／Models (Probability Density Functions)]]"
children: []
---
###### Beta Distribution
````excerpt
- is a family of [[Probability Distribution - Continuous Functions／Models (Probability Density Functions)|continuous probability distributions]] defined on the interval \[0, 1\] parametrized by two positive shape parameters, 𝛼 and 𝛽, that control the shape of the distribution.
- the generalization to multiple variables is called a [[Multivariate Beta Distribution (MBD) - Dirichlet Distribution|Dirichlet Distribution]]
````
^excerpt

# Probability Density Function
- 𝑓(𝑥) = (1 - 𝑥)<sup>𝛽-1</sup>𝑥<sup>𝛼-1</sup>/ 𝐵(𝛼,𝛽)

where:
- 𝐵(𝛼,𝛽) is the beta function, i.e.:
	- 𝐵(𝛼,𝛽) = \[𝛤(𝛼)𝛤(𝛽)\] / 𝛤(𝛼+𝛽)
	- 𝐵(𝛼,𝛽) = \[(𝛼-1)!(𝛽-1)!\] / (𝛼+𝛽-1)!

where:
- 𝛤 is the [[Gamma Function|gamma function]], i.e. 𝛤(𝑛) = (𝑛 - 1)!

###### Probability Density Function
![[Beta Distribution/beta-distribution-probability-density-function.png]]
###### Cumulative Distribution Function
![[Beta Distribution/beta-distribution-cumulative-distribution-function.png]]
