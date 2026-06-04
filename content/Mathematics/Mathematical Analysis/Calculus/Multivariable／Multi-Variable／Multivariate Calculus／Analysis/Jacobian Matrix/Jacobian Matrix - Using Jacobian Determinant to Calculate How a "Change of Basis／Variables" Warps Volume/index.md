---
title: "Jacobian Matrix - Using Jacobian Determinant to Calculate How a \"Change of Basis／Variables\" Warps Volume"
created: 2023-12-14T23:15:07.943-06:00
modified: 2023-12-20T15:57:15.601-06:00
parent: "[[Jacobian Matrix]]"
children: []
---
Based on: [Change of Variables and the Jacobian](https://www.youtube.com/watch?v=hhFzJvaY__U)
# Rough Idea
1. define an integral that integrates over the basis variables (this integral is hard to compute)
2. define another integral that integrates over a different set of basis variables (this integral is easy to compute)
3. add the scale factor function to the second integral and solve (this will be the answer for the first integral)

# Step Through

Say we have a function 𝑓: ℝ<sup>2</sup> → ℝ<sup>2</sup> defined as:
- $f(x,y) = \begin{bmatrix} f_1(x,y) \\ f_2(x,y) \\ \end{bmatrix}$

Say we want to take the integration of a [[Scalar-Valued Functions - Scalar Fields|scalar-valued function]] 𝑓(𝑥,𝑦) over the variables 𝑥 and 𝑦 such that the point (𝑥, 𝑦)∊𝐷.
- $∬_{(x,y)∊D} f(x,y) \; dx \; dy$

For this article, we say that this integration above is hard to compute. However, if we could consider some other basis variables let's say (𝜃 and 𝑟) instead of the original basis (𝑥 and 𝑦) such that reformulating the integration under the new basis will be easy to compute.
- $∬_{(𝜃,r)∊D} g(𝜃,r) \; dr \; d𝜃$

However, these 2 integrals are NOT the same:
- $∬_{(x,y)∊D} f(x,y) \; dx \; dy ≠ ∬_{(𝜃,r)∊D} g(𝜃,r) \; dr \; d𝜃$

This is because areas/volume are warped when switching between basis (𝜃,𝑟) and (𝑥,𝑦). To account for the warping, we need to add a scale factor function 𝑠(𝜃,r) such that:
- $∬_{(x,y)∊D} f(x,y) \; dx \; dy = ∬_{(𝜃,r)∊D} g(𝜃,r) s(𝜃,r) \; dr \; d𝜃$

This scale factor function 𝑠(𝜃,r) is defined as the determinant of the matrix that captures the "local linearity" transformations at each point (𝜃,r). This matrix is the [[Jacobian Matrix]].

Since we have computed our integral in (𝜃,r) basis and want to express that in (𝑥,𝑦) basis. We need to convert our basis variables (𝑥 and 𝑦) to (𝜃 and 𝑟). We need to represent 𝑥 in terms of 𝜃 and 𝑟. We also need to represent 𝑦 in terms of 𝜃 and 𝑟.
- $x = r \; cos(𝜃)$
- $y = r \; sin(𝜃)$

Our Jacobian matrix is then:
- $J = \begin{bmatrix} \frac{∂x}{∂r} & \frac{∂x}{∂𝜃} \\ \frac{∂y}{∂r} & \frac{∂y}{∂𝜃} \\ \end{bmatrix} = \begin{bmatrix} cos(𝜃) & -r \; sin(𝜃) \\ sin(𝜃) &  r \; cos(𝜃) \\ \end{bmatrix}$

To compute the scale factor function we need to compute the determinant of the Jacobian:
- $determinant(J) = cos(𝜃) \;r \; cos(𝜃) + r \; sin(𝜃) sin(𝜃)$
- $determinant(J) = r [cos^2(𝜃) + sin^2(𝜃)]$
- $determinant(J) = r$

Thus 𝑠(𝜃,𝑟) = 𝑟:
- $∬_{(x,y)∊D} f(x,y) \; dx \; dy = ∬_{(𝜃,r)∊D} g(𝜃,r) s(𝜃,r) \; dr \; d𝜃$
- $∬_{(x,y)∊D} f(x,y) \; dx \; dy = ∬_{(𝜃,r)∊D} g(𝜃,r) r \; dr \; d𝜃$

# Relation to Integration by Substitution

This is similar to [[U-Substitution - Integration by Substitution - Reverse Chain Rule - Change of Variables|Integration by Substitution]] where:
- the Jacobian Matrix is a 1⨯1 matrix containing just the element 𝑔'(𝑥)
- thus the scale factor function is 𝑔'(𝑥)

[[U-Substitution - Integration by Substitution - Reverse Chain Rule - Change of Variables|Integration by Substitution]] of a definite integral states:
- $\int_{u=g(a)}^{u=g(b)} f(u)du = \int_{x=a}^{x=b} f(\underbrace{g(x)}_{u}) \underbrace{g'(x)dx}_{du}$

# Resources
- [Change of Variables and the Jacobian](https://www.youtube.com/watch?v=hhFzJvaY__U)
- [What is Jacobian? | The right way of thinking derivatives and integrals](https://www.youtube.com/watch?v=wCZ1VEmVjVo)
