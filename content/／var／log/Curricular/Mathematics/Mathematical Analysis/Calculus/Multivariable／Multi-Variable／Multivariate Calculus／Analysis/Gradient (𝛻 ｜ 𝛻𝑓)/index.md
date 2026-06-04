---
title: "Gradient (𝛻 ｜ 𝛻𝑓)"
created: 2023-12-15T19:56:17.488-06:00
modified: 2024-09-08T11:31:57.522-05:00
parent: "[[Multivariable／Multi-Variable／Multivariate Calculus／Analysis]]"
children: []
---
###### Gradient (𝛻 | 𝛻𝑓)
````excerpt
- the <em>gradient</em> is a [[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism|linear operator]] that transforms a [[Scalar-Valued Functions - Scalar Fields|scalar-valued]] [[Implicit Differentiation／Derivative／Differentiable／Differential Functions|differentiable]] function 𝑓 of several variables is the [[Vector-Valued Functions - Vector Fields|vector-valued function]] 𝛻𝑓 whose value at a point 𝑝 gives the direction and the rate of the fastest increase
- is a [[Vectors|vector]] of [[Derivative of Scalar-Valued Function (Partial Derivative - Total Derivative - Gradient - Directional Directive - Second Order Partial Derivative)|partial derivatives]] of a scalar-valued differentiable function 𝑓 of several variables
````
^excerpt

# Gradient - Definition

The gradient of a scalar-valued function 𝑓 with respect to vector input 𝐱 is defined as:

```merge-table
{
  "rows": [
    [
      "- $\\textbf{x} = \\begin{bmatrix} x_1    \\\\ x_2    \\\\ \\vdots \\\\ x_n \\end{bmatrix}$",
      "- $\\nabla_\\textbf{x} f = \\frac{𝜕f}{𝜕\\textbf{x}}$\n- $\\nabla_\\textbf{x} f = \\begin{bmatrix} \\frac{𝜕f}{𝜕x_1} \\; \\frac{𝜕f}{𝜕x_2} \\;...\\; \\frac{𝜕f}{𝜕x_n} \\end{bmatrix}$\n- $\\nabla_\\textbf{x} f(\\textbf{x}) = \\frac{𝜕f(\\textbf{x})}{𝜕\\textbf{x}}$\n- $\\nabla_\\textbf{x} f(\\textbf{x}) = \\begin{bmatrix} \\frac{𝜕f(\\textbf{x})}{𝜕x_1} \\; \\frac{𝜕f(\\textbf{x})}{𝜕x_2} \\;...\\; \\frac{𝜕f(\\textbf{x})}{𝜕x_n} \\end{bmatrix}$"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Gradient - Linearity

The gradient operator 𝛻 is a [[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism|linear operator]] such that it follows for any scalar-valued functions 𝑓<sub>1</sub> and 𝑓<sub>2</sub>, and scalar constants 𝛼 and 𝛽:
- $\nabla (𝛼f_1 + 𝛽f_2) = 𝛼\nabla f_1 + 𝛽 \nabla f_2$
- $\nabla_\textbf{x} (𝛼f_1 + 𝛽f_2)(\textbf{x}) = 𝛼\nabla_\textbf{x} f_1(\textbf{x}) + 𝛽 \nabla_\textbf{x} f_2(\textbf{x})$

# Gradient - Use Cases
- can be used to compute the [[Derivative of Scalar-Valued Function (Partial Derivative - Total Derivative - Gradient - Directional Directive - Second Order Partial Derivative)|directional derivative]]

# Resources
- [Steve Brunton's The Gradient Operator in Vector Calculus: Directions of Fastest Change & the Directional Derivative](https://www.youtube.com/watch?v=yXD5IlDstNk&list=PLMrJAkhIeNNQromC4WswpU1krLOq5Ro6S&index=3)
