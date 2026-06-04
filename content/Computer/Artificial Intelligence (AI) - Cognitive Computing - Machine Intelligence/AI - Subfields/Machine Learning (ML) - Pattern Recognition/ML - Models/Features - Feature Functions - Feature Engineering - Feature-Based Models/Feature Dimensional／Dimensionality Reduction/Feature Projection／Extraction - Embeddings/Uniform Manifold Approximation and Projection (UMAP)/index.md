---
title: "Uniform Manifold Approximation and Projection (UMAP)"
created: 2020-08-09T23:44:09.972-05:00
modified: 2023-07-18T13:26:55.698-05:00
parent: "[[Feature Projection／Extraction - Embeddings]]"
children: []
---
###### Uniform Manifold Approximation and Projection (UMAP)
````excerpt
- is a [[Feature Dimensional／Dimensionality Reduction|dimension reduction technique]] similarly to [[T-distributed Stochastic Neighbor Embedding (t-SNE／tSNE)|t-SNE]]
- is also a general [[Non-Linear／Nonlinear Dimensionality Reduction (NLDR) - Manifold Learning|non-linear dimension reduction]]
- introduced in 2018
````
^excerpt

# UMAP - Assumptions

The algorithm is founded on three assumptions about the data:
1. the data is [[Uniform Distribution|uniformly distributed]] on [[Riemannian Manifolds - Riemannian Spaces|Riemannian manifold]]
2. the [[Riemannian Metric - Riemannian Metric Tensor|Riemannian metric]] is locally constant (or can be approximated as such)
3. the manifold is locally connected

From these assumptions it is possible to model the manifold with a fuzzy topological structure. The embedding is found by searching for a low dimensional projection of the data that has the closest possible equivalent fuzzy topological structure.
# UMAP - Other
- [[tSNE vs UMAP]]

# Resources
- [https://umap-learn.readthedocs.io/en/latest/](https://umap-learn.readthedocs.io/en/latest/)
- [https://pair-code.github.io/understanding-umap/](https://pair-code.github.io/understanding-umap/)
- [https://towardsdatascience.com/how-exactly-umap-works-13e3040e1668](https://towardsdatascience.com/how-exactly-umap-works-13e3040e1668)

![](https://www.youtube.com/watch?v=eN0wFzBA4Sc)

![](https://www.youtube.com/watch?v=jth4kEvJ3P8)

![](https://www.youtube.com/watch?v=nq6iPZVUxZU)
