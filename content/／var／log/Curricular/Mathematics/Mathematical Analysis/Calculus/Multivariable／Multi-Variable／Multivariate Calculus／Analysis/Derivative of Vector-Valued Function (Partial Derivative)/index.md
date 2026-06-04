---
title: "Derivative of Vector-Valued Function (Partial Derivative)"
created: 2023-12-18T20:58:30.539-06:00
modified: 2024-08-28T14:10:20.088-05:00
parent: "[[Multivariable／Multi-Variable／Multivariate Calculus／Analysis]]"
children: []
---
# Derivative of Vector-Valued Function
- The derivative of a [[Scalar-Valued Functions - Scalar Fields|scalar-valued function]] with respect to multiple inputs is the [[Gradient (𝛻 ｜ 𝛻𝑓)|gradient]].
- The derivative of a [[Vector-Valued Functions - Vector Fields|vector-valued function]] with respect to an input is a tangent vector to the curve.

Let's say a vector-valued function 𝑓 is defined as:
- $f(t) = \begin{bmatrix} f_1(t) \\ f_2(t) \end{bmatrix}$

The derivative of 𝑓 over 𝑡 is defined as:
- $\frac{df}{dt} = \begin{bmatrix} f_1'(t) \\ f_2'(t) \end{bmatrix}$

# Partial Derivative of Vector-Valued Function

Let's say a vector-valued function 𝑓 of vector input 𝐱 = (𝑥<sub>1</sub>, 𝑥<sub>2</sub>) is defined as:
- $f(\textbf{x}) = \begin{bmatrix} f_1(\textbf{x}) \\ f_2(\textbf{x}) \end{bmatrix}$
- $f(x_1, x_2) = \begin{bmatrix} f_1(x_1, x_2) \\ f_2(x_1, x_2) \end{bmatrix}$
```merge-table
{
  "rows": [
    [
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "The [[Derivative of Scalar-Valued Function (Partial Derivative - Total Derivative - Gradient - Directional Directive - Second Order Partial Derivative)|partial derivative of scalar value function]] 𝑓<sub>1</sub> over 𝐱 is defined as:\n- $\\nabla_{\\textbf{x}}f_1 = \\frac{𝛿f_1}{𝛿\\textbf{x}} = \\begin{bmatrix} \\frac{𝛿f_1}{𝛿x_1} \\; \\frac{𝛿f_1}{𝛿x_2} \\end{bmatrix}$",
      "The partial derivative of 𝑓 over 𝑥<sub>1</sub> is defined as:\n- $\\frac{𝛿f}{𝛿x_1} = \\begin{bmatrix} \\frac{𝛿f_1}{𝛿x_1} \\\\ \\frac{𝛿f_2}{𝛿x_1} \\\\ \\end{bmatrix}$"
    ],
    [
      "The [[Derivative of Scalar-Valued Function (Partial Derivative - Total Derivative - Gradient - Directional Directive - Second Order Partial Derivative)|partial derivative of scalar value function]] 𝑓<sub>2</sub> over 𝐱 is defined as:\n- $\\nabla_{\\textbf{x}}f_2 = \\frac{𝛿f_2}{𝛿\\textbf{x}} = \\begin{bmatrix} \\frac{𝛿f_2}{𝛿x_1} \\; \\frac{𝛿f_2}{𝛿x_2} \\end{bmatrix}$",
      "The partial derivative of 𝑓 over 𝑥<sub>2</sub> is defined as:\n- $\\frac{𝛿f}{𝛿x_2} = \\begin{bmatrix} \\frac{𝛿f_1}{𝛿x_2} \\\\ \\frac{𝛿f_2}{𝛿x_2} \\\\ \\end{bmatrix}$"
    ]
  ]
}
```

This is used to build the [[Jacobian Matrix]], and in this case is:
- $J_f = \nabla_{\textbf{x}}f = \begin{bmatrix} \frac{𝛿f_1}{𝛿\textbf{x}} \\ \frac{𝛿f_2}{𝛿\textbf{x}} \\ \end{bmatrix} = \begin{bmatrix} \frac{𝛿f_1}{𝛿x_1} & \frac{𝛿f_1}{𝛿x_2} \\ \frac{𝛿f_2}{𝛿x_1} & \frac{𝛿f_2}{𝛿x_2} \\ \end{bmatrix}$
