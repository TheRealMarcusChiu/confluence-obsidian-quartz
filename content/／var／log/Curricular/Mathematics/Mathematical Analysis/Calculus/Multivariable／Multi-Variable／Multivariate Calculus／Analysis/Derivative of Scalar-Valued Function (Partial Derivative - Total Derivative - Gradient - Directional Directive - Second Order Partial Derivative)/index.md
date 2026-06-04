---
title: "Derivative of Scalar-Valued Function (Partial Derivative - Total Derivative - Gradient - Directional Directive - Second Order Partial Derivative)"
created: 2021-09-13T05:25:12.350-05:00
modified: 2024-08-30T01:04:32.946-05:00
parent: "[[Multivariable／Multi-Variable／Multivariate Calculus／Analysis]]"
children:
  - "[[Why the Gradient is the Direction of Steepest Ascent]]"
---
- $\textbf{x} = \begin{bmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{bmatrix}$

# Given a [[Scalar-Valued Functions - Scalar Fields|Scalar-Valued Function]] 𝑓(𝐱), the:

```merge-table
{
  "rows": [
    [
      {
        "content": "<strong>Partial Derivative</strong> over an element 𝑥<sub>𝑖</sub> in input vector 𝐱 = (𝑥<sub>1</sub>, ..., 𝑥<sub>𝑛</sub>)",
        "bg": "#F4F5F7"
      },
      "- $\\frac{𝜕f(\\textbf{x})}{𝜕x_i} = lim_{h \\rightarrow 0} \\left[ \\frac {f(x_1, \\; \\dots, \\;x_i + h, \\; \\dots, \\; x_n) - f(x_1, \\; \\dots, \\;x_i, \\; \\dots, \\; x_n)} {(x_i + h) - (x_i)} \\right]$"
    ],
    [
      {
        "content": "<strong>Total Derivative</strong> over all variables 𝑥<sub>𝑖</sub>s in coordinate direction",
        "bg": "#F4F5F7"
      },
      "- $df(\\textbf{x}) = \\sum_{i=1}^n \\left[ \\frac{𝛿f(\\textbf{x})}{𝛿x_i} dx_i \\right]$"
    ],
    [
      {
        "content": "<strong>[[Gradient (𝛻 ｜ 𝛻𝑓)|Gradient]]</strong> at point 𝐱 = (𝑥<sub>1</sub>, ..., 𝑥<sub>𝑛</sub>)",
        "bg": "#F4F5F7"
      },
      "- $\\nabla_\\textbf{x} f(\\textbf{x}) = \\begin{bmatrix} \\frac{𝜕f(\\textbf{x})}{𝜕x_1} \\; \\frac{𝜕f(\\textbf{x})}{𝜕x_2} \\;...\\; \\frac{𝜕f(\\textbf{x})}{𝜕x_n} \\end{bmatrix}$"
    ],
    [
      {
        "content": "<strong>Directional Derivative</strong> at point 𝐱 = (𝑥<sub>1</sub>, ..., 𝑥<sub>𝑛</sub>)\nwith <font style=\"color: rgb(255,0,0);\"><strong>UNIT</strong></font> direction 𝐯 = (𝑣<sub>1</sub>, ..., 𝑣<sub>𝑛</sub>)\n\nSimilar to the [[Chain Rule (Calculus) - Multivariable Chain Rule|Multivariable Chain Rule]]",
        "bg": "#F4F5F7"
      },
      "- $\\nabla_{\\textbf{x}·\\textbf{v}} f(\\textbf{x}) = \\nabla_\\textbf{x} f(\\textbf{x}) · \\textbf{v}$\n- $\\nabla_{\\textbf{x}·\\textbf{v}} f(\\textbf{x}) = \\begin{bmatrix} \\frac{𝜕f(\\textbf{x})}{𝜕x_1} \\; \\frac{𝜕f(\\textbf{x})}{𝜕x_2} \\;...\\; \\frac{𝜕f(\\textbf{x})}{𝜕x_n} \\end{bmatrix} · \\begin{bmatrix} v_1 \\\\ v_2 \\\\ \\vdots \\\\ v_n \\end{bmatrix}$\n- $\\nabla_{\\textbf{x}·\\textbf{v}} f(\\textbf{x}) = lim_{h \\rightarrow 0} \\left[ \\frac {f(\\textbf{x} + h \\textbf{v}) - f(\\textbf{x})} {h} \\right]$"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Second-order Derivative of a Scalar-Valued Function

<strong>Second Partial Derivative</strong> over a variable 𝑥<sub>𝑖</sub> followed by 𝑥<sub>𝑗</sub>

![[Derivative of Scalar-Valued Function (Partial Derivative - Total Derivative - Gradient - Directional Directive - Second Order Partial Derivative)/second-order-partial-derivatives.drawio.png|380x250]]
[[second-order-partial-derivatives.drawio]]
