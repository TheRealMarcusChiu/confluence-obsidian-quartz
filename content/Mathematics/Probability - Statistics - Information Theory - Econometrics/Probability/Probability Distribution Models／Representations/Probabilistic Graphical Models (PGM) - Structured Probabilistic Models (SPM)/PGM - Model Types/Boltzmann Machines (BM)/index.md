---
title: "Boltzmann Machines (BM)"
created: 2023-12-25T12:17:16.621-06:00
modified: 2024-08-18T17:10:21.754-05:00
parent: "[[PGM - Model Types]]"
children:
  - "[[Deep Boltzmann Machines (DBM)]]"
  - "[[Restricted Boltzmann Machines (RBM)]]"
---
###### Boltzmann Machines (BM)
````excerpt
- could be thought of as an extension to [[Hopfield Networks - Associative Memory Models - Ising–Lenz–Little Models - Nakano-Amari-Hopfield Networks|Hopfield Networks]] (i.e. Boltzmann Machine = Hopfield Network + stochasticity +  hidden units)
- is a [[Probabilistic Graphical Models (PGM) - Structured Probabilistic Models (SPM)|probabilistic graphical model]] which follows [[Boltzmann／Gibbs Distribution|Boltzmann distribution]]:
	- $p(v,h) = \frac{e^{-E(v,h)}}{\sum_{v,h} e^{-E(v,h)}}$
- where 𝐸(𝑣,ℎ) is known as the energy function
````
^excerpt

# Introduction

![](https://www.youtube.com/watch?v=_bqa_I5hNAo)
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
