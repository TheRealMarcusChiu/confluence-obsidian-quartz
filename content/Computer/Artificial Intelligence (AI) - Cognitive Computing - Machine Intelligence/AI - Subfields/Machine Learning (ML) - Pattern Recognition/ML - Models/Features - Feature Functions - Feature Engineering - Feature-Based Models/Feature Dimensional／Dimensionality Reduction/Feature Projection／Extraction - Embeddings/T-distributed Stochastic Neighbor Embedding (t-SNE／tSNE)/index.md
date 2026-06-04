---
title: "T-distributed Stochastic Neighbor Embedding (t-SNE／tSNE)"
created: 2020-08-09T23:47:20.164-05:00
modified: 2023-07-18T22:06:23.177-05:00
parent: "[[Feature Projection／Extraction - Embeddings]]"
children: []
---
###### T-distributed Stochastic Neighbor Embedding (t-SNE/tSNE)
````excerpt
- is a [[Non-Linear／Nonlinear Dimensionality Reduction (NLDR) - Manifold Learning|non-linear dimensionality reduction]] technique useful for visualization of high-dimensional datasets
- introduced in 2008
- introduced by van der Maaten & Hinton
````
^excerpt

# tSNE - Algorithm
###### Convert Distance "Structure" Between Points in High Dimensional Raw Data into a Probability Distribution (Target)
1. measure distance from one point wrt every other point
2. map distance to the [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|normal probability distribution]]
3. scale distances to 1 (similar to softmax)
4. steps 2 & 3 can be combined with the following equation:
	- $P_{j|i} = \frac {norm(x_i - x_j)} {\sum_{k≠i} norm(x_i - x_k)}$
	- $P_{j|i} = \frac {exp(-||x_i - x_j||^2 / (2𝜎_i^2))}  {\sum_{k≠i} exp(-||x_i - x_k||^2 / (2𝜎_i^2))}$
5. convert conditional probabilities into joint probabilities
	1. $P_{ij} = \frac{P_{j|i} + P_{i|j}}{2n}$
6. (𝜎<sub>𝑖</sub>)<sup>2</sup> controls what "closeness" means; these variances are chosen so that the entropy equals a user-specific value called the perplexity
	1. $Perplexity = 2^{-\sum_j P_{j|i} log_2 P_{i|j}}$

###### Convert Distance "Structure" Between Points in Reduced Dimensional Space into a Probability Distribution
- Randomly plot all points onto low dimensional space (initialize)
- calculate probability distribution with [[t-distribution ｜ t-scores ｜ t-value ｜ t-table ｜ t-statistic ｜ student's t-distribution|t-distribution]]:
	- $Q{ij} = \frac{(1 + ||x_i - x_j||)^{-1}}{\sum_{k≠i}(1 + ||x_i - x_k||)^{-1}}$

###### Make Adjustments to Points in Reduced Space s.t. its Probability Distribution equals the Target Probability Distribution
- [[Univariate Entropy (Information Content - Entropy - Cross Entropy - KL Divergence)|KL divergence]] measures the "distance" between two probability distributions
	- $KL(P||Q) = \sum_{i,j} P_{ij}log(\frac{P_{ij}}{Q_{ij}})$
- Use [[Gradient Descent／Ascent Algorithms - The Method of Steepest Descent／Ascent Algorithms|gradient descent]] to minimize the sum of the KL divergence over all the points
- Take the [[Derivative of Scalar-Valued Function (Partial Derivative - Total Derivative - Gradient - Directional Directive - Second Order Partial Derivative)|partial derivative]] of the cost function wrt every point. This partial derivative tells us how to move the points within the reduced dimensional space.
	- $\frac{𝛿KL(P||Q)}{𝛿x_i} = 4 \sum_j \frac{P_{ij} - Q_{ij}}{(1 + ||x_i - x_j||)^{-1}} (x_i - x_j)$

# tSNE - Other
- [[tSNE vs UMAP]]

# Resources
- [https://distill.pub/2016/misread-tsne/](https://distill.pub/2016/misread-tsne/)
- [https://github.com/robkravec/t-SNE-Implementation/blob/main/Implementing%20t-SNE%20in%20Python%20with%20Optimized%20Code%20and%20Examples.ipynb](https://github.com/robkravec/t-SNE-Implementation/blob/main/Implementing%20t-SNE%20in%20Python%20with%20Optimized%20Code%20and%20Examples.ipynb)

![](https://www.youtube.com/watch?v=NEaUSP4YerM)
