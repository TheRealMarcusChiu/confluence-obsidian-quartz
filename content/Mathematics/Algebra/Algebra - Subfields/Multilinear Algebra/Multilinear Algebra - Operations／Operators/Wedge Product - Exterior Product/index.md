---
title: "Wedge Product - Exterior Product"
created: 2024-01-08T15:46:51.882-06:00
modified: 2024-01-08T17:47:11.919-06:00
parent: "[[Multilinear Algebra - Operations／Operators]]"
children: []
---
###### Wedge Product - Exterior Product (𝑣∧𝑢)
````excerpt
- is a [[Multilinear Algebra - Operations／Operators|multilinear algebra operation]] that produces a [[Bivectors - Binors - 2-vectors|bivector]] from two [[Vectors|vectors]]
- the wedge product ∧ of two vectors 𝑣,𝑢 is represented as 𝑣∧𝑢
- is used to construct the [[Geometric Product|geometric product]]
- is similar to the [[Outer Product|outer product]]
- is similar to the [[Cross Product - Vector Product - Directed Area Product|cross product]]
````
^excerpt

# Wedge Product - 3D Definition

Given two vectors 𝑣,𝑢 in ℝ<sup>3</sup>:
- 𝑣 = 𝑣<sub>1</sub>e<sub>1</sub> + 𝑣<sub>2</sub>e<sub>2</sub>+ 𝑣<sub>3</sub>e<sub>3</sub>
- 𝑢 = 𝑢<sub>1</sub>e<sub>1</sub> + 𝑢<sub>2</sub>e<sub>2</sub>+ 𝑢<sub>3</sub>e<sub>3</sub>

the wedge product 𝑣∧𝑢 is defined as:
- 𝑣∧𝑢 = (𝑣<sub>2</sub>𝑢<sub>3</sub>- 𝑣<sub>3</sub>𝑢<sub>2</sub>)e<sub>2</sub>e<sub>3</sub>+ (𝑣<sub>3</sub>𝑢<sub>1</sub>- 𝑣<sub>1</sub>𝑢<sub>3</sub>)e<sub>3</sub>e<sub>1</sub>+ (𝑣<sub>1</sub>𝑢<sub>2</sub>- 𝑣<sub>2</sub>𝑢<sub>1</sub>)e<sub>1</sub>e<sub>2</sub>

the wedge product 𝑣∧𝑢 can be represented as a [[Bivectors - Binors - 2-vectors|bivector]] (which is syntactically similar to a vector):
- $v∧u = \begin{bmatrix} 𝑣_2𝑢_3 - 𝑣_3𝑢_2 \\ 𝑣_3𝑢_1 - 𝑣_1𝑢_3 \\ 𝑣_1𝑢_2 - 𝑣_2𝑢_1 \\ \end{bmatrix}$
- where each element in this vector is a scalar that represents the magnitude in the associated direction
	- (e.g. scalar 𝑣<sub>2</sub>𝑢<sub>3</sub>- 𝑣<sub>3</sub>𝑢<sub>2</sub>in direction e<sub>2</sub>e<sub>3</sub> which is part of a [[Basis Bivectors|basis bivector]])

# Wedge Product - General Definition

TODO
