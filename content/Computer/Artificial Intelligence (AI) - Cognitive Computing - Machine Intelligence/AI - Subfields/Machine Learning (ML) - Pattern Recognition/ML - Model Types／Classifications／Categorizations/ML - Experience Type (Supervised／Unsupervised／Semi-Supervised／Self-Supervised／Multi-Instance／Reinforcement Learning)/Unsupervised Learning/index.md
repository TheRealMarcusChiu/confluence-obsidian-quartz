---
title: "Unsupervised Learning"
created: 2020-08-14T15:57:26.956-05:00
modified: 2024-08-21T21:30:13.651-05:00
parent: "[[ML - Experience Type (Supervised／Unsupervised／Semi-Supervised／Self-Supervised／Multi-Instance／Reinforcement Learning)]]"
children: []
---
###### Unsupervised Learning
````excerpt
- informally, unsupervised learning refers to most attempts to extract information from a distribution that does not require human labor to annotate examples
- usually associated with:
	- density estimation
	- learning to draw samples from a distribution
	- learning to de-noise data from some distribution
	- finding a manifold that the data lies near
	- clustering the data into groups of related examples
````
^excerpt

# Unsupervised Learning - For Finding Simpler Representation

a classic unsupervised learning task is to find the “best or simpler” representation. ways of defining simpler representation:
- <strong>lower-dimensional representations</strong> - attempts to compress as much information about x
- <strong>sparse representations</strong> - embed the dataset into a representation whose entries are mostly zeros for most inputs (typically requires increasing dimensionality of representation)
- <strong>independent representations</strong> - attempt to disentangle the sources of variation underlying the data distribution such that the dimensions of the representation are statistically independent
