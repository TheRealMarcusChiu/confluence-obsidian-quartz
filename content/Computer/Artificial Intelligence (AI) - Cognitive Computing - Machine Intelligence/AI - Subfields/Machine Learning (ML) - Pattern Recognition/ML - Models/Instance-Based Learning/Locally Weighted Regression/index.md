---
title: "Locally Weighted Regression"
created: 2020-06-02T16:47:06.404-05:00
modified: 2020-06-02T16:49:51.315-05:00
parent: "[[Instance-Based Learning]]"
children: []
---
###### Locally Weighted Regression
- 𝑋 - input vector
- 𝜃 - weight vector

𝑓(𝑋) = = 𝜃·𝑋
### Error Function E(Xq) We Could Choose From
1. minimize squared error over the k nearest neighbors:
	1. E1(Xq) = (1/2) Σ\[f(x) - f̂(x)\]² for each k-nearest neighbors x of Xq
2. minimize squared error over all training examples, while weighting the error of each training example by some function K inverse growing with respect to distance from query input Xq:
	1. E2(Xq) = (1/2) Σ\[(f(x) - f̂(x))² \* K(d(Xq, x))\] for each x in all training examples
3. combine 1 and 2:
	1. E3(Xq) = (1/2) Σ\[(f(x) - f̂(x))² \* K(d(Xq, x))\] for each k-nearest neighbors x of Xq

### Gradient Descent
1. Δ𝜃j = η \* Σ\[(f(X) - f̂(X)) \* Xj\] for each k-nearest neighbors X of Xq
2. Δ𝜃j = η \* Σ\[K(d(Xq, X)) \* (f(X) - f̂(X)) \* Xj\] for each X in all training examples
3. Δ𝜃j = η \* Σ\[K(d(Xq, X)) \* (f(X) - f̂(X)) \* Xj\] for each k-nearest neighbors X of Xq
