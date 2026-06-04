---
title: "Cross Product - Vector Product - Directed Area Product"
created: 2021-09-13T05:25:47.732-05:00
modified: 2024-01-08T22:06:30.338-06:00
parent: "[[Linear Algebra - Operations／Operators]]"
children: []
---
###### Cross Product - Vector Product - Directed Area Product
````excerpt
- is a [[Binary／Dyadic Operations／Operators|binary operation]] on two [[Vectors|vectors]] in three-dimensional space
- is denoted by the symbol ×
- Given two linearly independent vectors 𝑣 and 𝑢, the cross product, 𝑣 × 𝑢, is a vector that is perpendicular to both 𝑣 and 𝑢 and thus normal to the plane containing them, and its magnitude is equal to the parallelogram produced by 𝑣 and 𝑢
- returns a pseudovector or more appropriately a 3D [[Bivectors - Binors - 2-vectors|bivector]]
- only works in 3D and 7D
- similar to [[Wedge Product - Exterior Product|wedge product]] in which it can work in any dimension
````
^excerpt

# Cross Product - Defined Computationally

Given two 3D vectors 𝑣 and 𝑢:
- $v = \begin{bmatrix} v_1 \\ v_2 \\ v_3 \\ \end{bmatrix} \;\;\; u = \begin{bmatrix} u_1 \\ u_2 \\ u_3 \\ \end{bmatrix}$

The cross product of 𝑣⨯𝑢 is defined as:
- $v×u = determinant( \begin{bmatrix} i & v_1 & u_1 \\ j & v_2 & u_2 \\ k & v_3 & u_3 \\ \end{bmatrix} )$
- $v×u = (v_2u_3 - v_3u_2)\hat{i} + (v_3u_1 - v_1u_3)\hat{j} + (v_1u_2 - v_2u_1)\hat{k}$
- $v×u = v = \begin{bmatrix} v_2u_3 - v_3u_2 \\ v_3u_1 - v_1u_3 \\ v_1u_2 - v_2u_1 \\ \end{bmatrix}$

# Cross Product - Defined Geometrically

What vector 𝑝=\[𝑝<sub>1</sub>, 𝑝<sub>2</sub>, 𝑝<sub>3</sub>\] has the property that:
- $\begin{bmatrix} p_1 \\ p_2 \\ p_3 \\ \end{bmatrix} - \begin{bmatrix} x \\ y \\ z \\ \end{bmatrix} = determinant( \begin{bmatrix} x & v_1 & u_1 \\ y & v_2 & u_2 \\ z & v_3 & u_3 \\ \end{bmatrix} )$

(area of parallelogram defined by 𝑣 and 𝑢)(component of \[𝑥, 𝑦, 𝑧\] perpendicular to 𝑣 and 𝑢)
(area of parallelogram defined by 𝑣 and 𝑢)(magnitude of projection onto line perpendicular to 𝑣 and 𝑢)

same as

(area of parallelogram defined by 𝑣 and 𝑢)(taking [[Dot Product - Scalar Product - Canonical／Euclidean／Standard Inner Product|dot-product]] of \[𝑥, 𝑦, 𝑧\] and a vector thats perpendicular to 𝑣 and 𝑢)
# Cross Product - Properties

Given [[Standard Basis Vectors|standard basis / unit vectors]] 𝑖, 𝑗, 𝑘; the following holds:
- 𝑖 × 𝑗 = 𝑘
- 𝑗 × 𝑖 = -𝑘
- 𝑗 × 𝑘 = 𝑖
- 𝑘 × 𝑗 = -𝑖
- 𝑘 × 𝑖 = 𝑗
- 𝑖 × 𝑘 = -𝑗

non linear independence
- 𝑖 × 𝑖 = 0
- 𝑗 × 𝑗 = 0
- 𝑘 × 𝑘 = 0

𝑣 × 𝑢 = 𝑝, where:
- 𝑝's magnitude equals area of parallelogram of sides 𝑣 and 𝑢
- 𝑝 is perpendicular to 𝑣 and 𝑢

![](https://www.youtube.com/watch?v=eu6i7WJeinw&t=4s)

![](https://www.youtube.com/watch?v=BaM7OCEm3G0)
