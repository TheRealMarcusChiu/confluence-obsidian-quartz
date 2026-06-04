---
title: "Data Observability Types (Complete／Fully-Observable Data ｜ Incomplete／Partially-Observable Data ｜ Latent／Hidden／Hypothetical Variables)"
created: 2020-06-17T17:16:01.339-05:00
modified: 2022-11-30T16:07:41.178-06:00
parent: "[[Data Types (Data Science／Analytics)]]"
children: []
---
###### Data Observability Types
- <strong>complete/fully-observable data</strong> - are data where each instance is a full instantiation to all variables
- <strong>incomplete/partially-observed data</strong> - are data where each/some instance, some variables are not instantiated
- <strong>latent variable</strong> - are variables that can only be inferred indirectly through a mathematical model from other observable variables that can be directly observed or measured
	- <strong>hidden variables</strong> - are latent variables that correspond to aspects of physical reality. These could in principle be measured, but may not be for practical reasons (reflecting the fact that the variables are meaningful, but not observable). Occurs when:
		- set of variables in data is unknown
		- existence of a variable is known but it could not be observed directly
	- <strong>hypothetical variables</strong> - are latent variables that correspond to abstract concepts, like categories, behavioral or mental states, or data structures

# The Effect of Ignoring Latent Variables

The use of latent variables can serve to [[Feature Dimensional／Dimensionality Reduction|reduce the dimensionality]] of data

the model on the right is an [[I-Map - D-Map - Minimal I-Map - Maximal D-Map - P-Map - I-Equivalence|I-Map]] for the distribution represented by the model on the left, where the hidden variable is marginalized. The counts indicate the number of independent parameters, under the assumption that the variables are binary-valued. The variable 𝐻 is hidden and hence is shown as a white oval

![[Data Observability Types (Complete／Fully-Observable Data ｜ Incomplete／Partially-Observable Data ｜ Latent／Hidden／Hypothetical Variables)/effect-of-ignoring-hidden-variables.png|450]]
