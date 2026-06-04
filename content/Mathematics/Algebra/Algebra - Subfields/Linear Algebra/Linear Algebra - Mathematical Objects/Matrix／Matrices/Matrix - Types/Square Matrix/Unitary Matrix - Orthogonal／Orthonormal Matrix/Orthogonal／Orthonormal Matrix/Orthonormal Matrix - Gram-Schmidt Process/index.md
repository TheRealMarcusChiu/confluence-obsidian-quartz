---
title: "Orthonormal Matrix - Gram-Schmidt Process"
created: 2021-09-13T05:26:00.815-05:00
modified: 2021-12-05T02:53:56.730-06:00
parent: "[[Orthogonal／Orthonormal Matrix]]"
children: []
---
<strong>Gram–Schmidt process</strong>
- is a method for [orthonormalizing](https://en.wikipedia.org/wiki/Orthonormal_basis) a set of [[Vectors|vectors]] in an [[Inner Product Spaces|inner product space]], most commonly the [[Euclidean Vector Spaces - Euclidean Spaces|Euclidean space]] ℝ<sup>𝑛</sup> equipped with the standard inner product
- takes a finite, [linearly independent](https://en.wikipedia.org/wiki/Linearly_independent) set of vectors 𝑆 = {𝑣<sub>1</sub>, …, 𝑣<sub><em>𝑘</em></sub>} for 𝑘 ≤ 𝑛 and generates an orthonormal set 𝑆<em>′</em> = {𝑢<sub>1</sub>, …, 𝑢<sub><em>𝑘</em></sub>} that spans the same 𝑘-dimensional subspace of ℝ<sup><em>𝑛</em></sup> as 𝑆

# Example
Consider the following set of vectors in ℝ<sup>2</sup> (with the conventional [[Inner Products|inner product]])
- 𝑆 = {𝑣<sub>1</sub>=\[3,1\]<sup>T</sup>, 𝑣<sub>2</sub>=\[2,2\]<sup>T</sup>}

###### 1 - Orthogonalize Vectors
- 𝑎<sub>1</sub> = 𝑣<sub>1</sub> = \[3,1\]<sup>T</sup>
- 𝑎<sub>2</sub> = 𝑣<sub>2</sub> - 𝑝𝑟𝑜𝑗<sub>𝑢1</sub>(𝑣<sub>2</sub>) = \[2,2\]<sup>T</sup> - 𝑝𝑟𝑜𝑗<sub>\[3,1\]T</sub>(\[2,2\]<sup>T</sup>) = \[2,2\]<sup>T</sup> - (8/10)\[3,1\]<sup>T</sup> = \[-2/5,6/5\]<sup>T</sup>

###### 2 - Normalize Vectors
- 𝑢<sub>1</sub> = (1/||𝑎<sub>1</sub>||)·𝑎<sub>1</sub> = (1/10<sup>1/2</sup>)\[3,1\]<sup>T</sup>
- 𝑢<sub>2</sub> = (1/||𝑎<sub>2</sub>||)·𝑎<sub>2</sub> = (1/(40/25)<sup>1/2</sup>)\[-2/5,6/5\]<sup>T</sup>

###### 3 - Resultant Orthonormal Matrix
- 𝑆<em>′</em> = {𝑢<sub>1</sub>, 𝑢<sub><em>2</em></sub>}

# Resources
- [Gilbert Strang's Video Lecture](https://youtu.be/0MtwqhIwdrI?t=1539)
