---
title: "Random Projection"
created: 2024-08-27T05:02:26.407-05:00
modified: 2024-08-27T05:20:53.287-05:00
parent: "[[Feature Projection／Extraction - Embeddings]]"
children: []
---
###### Random Projection
````excerpt
- is a technique used to reduce the dimensionality of a set of points which lie in [[Euclidean Vector Spaces - Euclidean Spaces|Euclidean space]]
- is a simple and computationally efficient way to reduce the dimensionality of data by trading a controlled amount of error for faster processing times and smaller model sizes.
````
^excerpt

# Core Idea
The core idea behind random projection is given in the [Johnson-Lindenstrauss lemma](https://en.wikipedia.org/wiki/Johnson-Lindenstrauss_lemma), which states that if points in a vector space are of sufficiently high dimension, then they may be projected into a suitable lower-dimensional space in a way which approximately preserves pairwise distances between the points with high probability.
# Method
- 𝑋' = 𝑅𝑋

where:
- 𝑋 is the original set of 𝑁 𝑑-dimensional observations (i.e. 𝑁×𝑑)
- 𝑅 is theprojection matrix whose columns have unit lengths (i.e. 𝑘×𝑁)
- 𝑋' is the projection of data onto lower 𝑘-dimensional subspace (i.e. 𝑘×𝑑)

# Ways Choosing Projection Matrix

> [!expand-ui]- Gaussian Random Projection
> The random matrix 𝑅 can be generated using a [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|Gaussian distribution]].
> - the first row is a random unit vector uniformly chosen from 𝑆<sup>𝑑−1</sup>
> - the second row is a random unit vector from the space orthogonal to the first row
> - the third row is a random unit vector from the space orthogonal to the first two rows
> - and so on...
>
> In this way of choosing 𝑅, and the following properties are satisfied:
> - <strong>spherical symmetry</strong> - for any [[Unitary Matrix - Orthogonal／Orthonormal Matrix|orthogonal matrix]] 𝐴∈𝑂(𝑑), 𝑅𝐴 and 𝑅 have the same distribution
> - <strong>[[Orthogonal／Orthogonality - Orthogonal Sets - Orthogonal Complement|orthogonality]]</strong> - the rows of 𝑅 are orthogonal to each other
> - <strong>normality</strong> - the rows of 𝑅 are unit-length vectors

> [!expand-ui]- More computationally efficient random projections
> - TODO: [https://en.wikipedia.org/wiki/Random_projection](https://en.wikipedia.org/wiki/Random_projection)
# Uses Cases
- [[Feature Dimensional／Dimensionality Reduction|Dimensionality Reduction]]
- [[Randomized Numerical Linear Algebra (Randomized NLA - RandNLA)|RandNLA]]

# Resource
- [https://en.wikipedia.org/wiki/Random_projection](https://en.wikipedia.org/wiki/Random_projection)
