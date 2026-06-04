---
title: "Linear Algebra vs Matrix Algebra"
created: 2023-06-10T13:16:32.813-05:00
modified: 2023-06-10T13:44:00.530-05:00
parent: "[[Algebra - Comparisons]]"
children: []
---
###### [[Linear Algebra]] vs [[Matrix Theory - Matrix Algebra|Matrix Algebra]]

A [[Matrix／Matrices|matrix]] is just a list of numbers, and you're allowed to add and multiply matrices by combining those numbers in a certain way. When you talk about matrices, you're allowed to talk about things like the entry in the 3rd row and 4th column, and so forth. In this setting, matrices are useful for representing things like transition probabilities in a Markov chain, where each entry indicates the probability of transitioning from one state to another. You can do lots of interesting numerical things with matrices, and these interesting numerical things are very important because matrices show up a lot in engineering and the sciences.

In linear algebra, however, you instead talk about linear transformations, which are not (I cannot emphasize this enough) a list of numbers, although sometimes it is convenient to use a particular matrix to write down a linear transformation. The difference between a linear transformation and a matrix is not easy to grasp the first time you see it, and most people would be fine with conflating the two points of view. However, when you're given a linear transformation, you're not allowed to ask for things like the entry in its 3rd row and 4th column because questions like these depend on a choice of basis. Instead, you're only allowed to ask for things that don't depend on the basis, such as the [[Matrix Rank|rank]], the trace, the [[Determinants - Invertible／Non-Singular - Not-Invertible／Singular|determinant]], or the set of [[Eigenvectors (Characteristic Vectors) - Eigenvalues (Spectrum)|eigenvalues]]. This point of view may seem unnecessarily restrictive, but it is fundamental to a deeper understanding of pure mathematics.
