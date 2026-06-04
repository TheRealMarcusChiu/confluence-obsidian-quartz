---
title: "MomentUm Orthogonalized by Newton-Schulz (Muon) Optimizer"
created: 2025-10-02T23:08:52.722-05:00
modified: 2025-10-20T23:10:27.381-05:00
parent: "[[Gradient Descent／Ascent Algorithms - The Method of Steepest Descent／Ascent Algorithms]]"
children: []
---
###### Muon Optimizer
````excerpt
- an optimizer for hidden layers in [[Artificial Neural Networks (ANN)|neural networks]]
- unlike [[Adam Optimizer|Adam]], which treats network parameters as flat vectors, Muon is a matrix-aware optimizer that leverages the unique geometric structure of a neural network's weight matrices
- first computes a momentum buffer based on past gradients, similar to traditional momentum-based optimizers. It then applies an iterative Newton-Schulz method to orthogonalize the update matrix before applying it to the weights. This process is equivalent to replacing the update with its closest semi-orthogonal matrix based on a [[Singular Value Decomposition／Factorization (SVD) - Reduced SVD|Singular Value Decomposition (SVD)]]
````
^excerpt

# Intro

![](https://www.youtube.com/watch?v=bO5nvE289ec)
# Resources
- [https://kellerjordan.github.io/posts/muon/](https://kellerjordan.github.io/posts/muon/)
