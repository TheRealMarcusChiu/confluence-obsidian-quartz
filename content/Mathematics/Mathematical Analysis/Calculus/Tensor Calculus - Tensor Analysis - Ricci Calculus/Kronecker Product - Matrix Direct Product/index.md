---
title: "Kronecker Product - Matrix Direct Product"
created: 2023-08-03T14:33:08.509-05:00
modified: 2026-05-21T00:30:45.529-05:00
parent: "[[Tensor Calculus - Tensor Analysis - Ricci Calculus]]"
children: []
---
###### Kronecker Product - Matrix Direct Product - ⊗
````excerpt
- is an operation on two matrices of arbitrary size resulting in a block matrix
- it is a specialization of the [[Tensor Product|tensor product]] from [[Vectors|vectors]] to [[Matrix／Matrices|matrices]] and gives the matrix of the tensor product a linear map with respect to a standard choice of basis
- is to be distinguished from the usual matrix multiplication, which is an entirely different operation
````
^excerpt

# Kronecker Product - Definition

If 𝐴 is an 𝑚×𝑛 matrix and 𝐵 is a 𝑝×𝑞 matrix, then the Kronecker product 𝐴⊗𝐵 is the 𝑝𝑚×𝑞𝑛 block matrix:
- $A \otimes B = \begin{bmatrix} a_{11} B & \cdots & a_{1n} B \\ \vdots   & \ddots & \vdots   \\ a_{m1} B & \cdots & a_{mn} B \end{bmatrix}$

More explicitly:
- $A \otimes B = \begin{bmatrix} a_{11} b_{11} & a_{11} b_{12} & \cdots & a_{11} b_{1q} & \cdots & \cdots & a_{1n} b_{11} & a_{1n} b_{12} & \cdots & a_{1n} b_{1q} \\ a_{11} b_{21} & a_{11} b_{22} & \cdots & a_{11} b_{2q} & \cdots & \cdots & a_{1n} b_{21} & a_{1n} b_{22} & \cdots & a_{1n} b_{2q} \\ \vdots & \vdots & \ddots & \vdots & & & \vdots & \vdots & \ddots & \vdots \\ a_{11} b_{p1} & a_{11} b_{p2} & \cdots & a_{11} b_{pq} & \cdots & \cdots & a_{1n} b_{p1} & a_{1n} b_{p2} & \cdots & a_{1n} b_{pq} \\ \vdots & \vdots & & \vdots & \ddots & & \vdots & \vdots & & \vdots \\ \vdots & \vdots & & \vdots & & \ddots & \vdots & \vdots & & \vdots \\ a_{m1} b_{11} & a_{m1} b_{12} & \cdots & a_{m1} b_{1q} & \cdots & \cdots & a_{mn} b_{11} & a_{mn} b_{12} & \cdots & a_{mn} b_{1q} \\ a_{m1} b_{21} & a_{m1} b_{22} & \cdots & a_{m1} b_{2q} & \cdots & \cdots & a_{mn} b_{21} & a_{mn} b_{22} & \cdots & a_{mn} b_{2q} \\ \vdots & \vdots & \ddots & \vdots & & & \vdots & \vdots & \ddots & \vdots \\ a_{m1} b_{p1} & a_{m1} b_{p2} & \cdots & a_{m1} b_{pq} & \cdots & \cdots & a_{mn} b_{p1} & a_{mn} b_{p2} & \cdots & a_{mn} b_{pq} \end{bmatrix}$

# Kronecker Product - Examples

```merge-table
{
  "rows": [
    [
      "- $\\begin{bmatrix} 1 & 2 \\end{bmatrix} ⊗ \\begin{bmatrix} 3 & 4 \\end{bmatrix} = \\begin{bmatrix} 1 [3 & 4] & 2 [3 & 4] \\end{bmatrix} = \\begin{bmatrix} [3 & 4] & [6 & 8] \\end{bmatrix} = \\left[\\begin{array}{cc|cc} 3 & 4 & 6 & 8 \\end{array}\\right]$"
    ],
    [
      "- $\\begin{bmatrix} 1 & 2 \\end{bmatrix} ⊗ \\begin{bmatrix} 3 \\\\ 4 \\end{bmatrix} = \\begin{bmatrix} 1 \\begin{bmatrix} 3 \\\\ 4 \\end{bmatrix} & 2 \\begin{bmatrix} 3 \\\\ 4 \\end{bmatrix} \\end{bmatrix} = \\begin{bmatrix} \\begin{bmatrix} 3 \\\\ 4 \\end{bmatrix} & \\begin{bmatrix} 6 \\\\ 8 \\end{bmatrix} \\end{bmatrix} = \\left[\\begin{array}{c|c} 3 & 6 \\\\ 4 & 8 \\end{array}\\right]$"
    ],
    [
      "- $\\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix} ⊗ \\begin{bmatrix} 3 & 4 \\end{bmatrix} = \\begin{bmatrix} 1 [3 & 4] \\\\ 2 [3 & 4] \\end{bmatrix} = \\begin{bmatrix} [3 & 4] \\\\ [6 & 8] \\end{bmatrix} = \\left[\\begin{array}{} 3 & 4 \\\\ \\hline 6 & 8 \\end{array}\\right]$"
    ],
    [
      "- $\\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix} ⊗ \\begin{bmatrix} 3 \\\\ 4 \\end{bmatrix} = \\begin{bmatrix} 1 \\begin{bmatrix} 3 \\\\ 4 \\end{bmatrix} \\\\ 2 \\begin{bmatrix} 3 \\\\ 4 \\end{bmatrix} \\end{bmatrix} = \\begin{bmatrix} \\begin{bmatrix} 3 \\\\ 4 \\end{bmatrix} \\\\ \\begin{bmatrix} 6 \\\\ 8 \\end{bmatrix} \\end{bmatrix} = \\left[\\begin{array}{} 3 \\\\ 4 \\\\ \\hline 6 \\\\ 8 \\end{array}\\right]$"
    ],
    [
      "- $\\begin{bmatrix} 1 & 2 \\end{bmatrix} ⊗ \\begin{bmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{bmatrix} = \\begin{bmatrix} 1 \\begin{bmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{bmatrix} & 2 \\begin{bmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{bmatrix} \\end{bmatrix} = \\begin{bmatrix} \\begin{bmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{bmatrix} & \\begin{bmatrix} 2 & 4 & 6 \\\\ 8 & 10 & 12 \\end{bmatrix} \\end{bmatrix} = \\left[\\begin{array}{ccc|ccc} 1 & 2 & 3 & 2 & 4  & 6  \\\\ 4 & 5 & 6 & 8 & 10 & 12 \\\\ \\end{array}\\right]$"
    ],
    [
      "- $\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\\\ \\end{bmatrix} \\otimes \\begin{bmatrix} 0 & 5 \\\\ 6 & 7 \\\\ \\end{bmatrix} = \\begin{bmatrix} 1 \\begin{bmatrix} 0 & 5 \\\\ 6 & 7 \\\\ \\end{bmatrix} & 2 \\begin{bmatrix} 0 & 5 \\\\ 6 & 7 \\\\ \\end{bmatrix} \\\\ 3 \\begin{bmatrix} 0 & 5 \\\\ 6 & 7 \\\\ \\end{bmatrix} & 4 \\begin{bmatrix} 0 & 5 \\\\ 6 & 7 \\\\ \\end{bmatrix} \\\\ \\end{bmatrix} = \\left[\\begin{array}{cc|cc} 1\\times 0 & 1\\times 5 & 2\\times 0 & 2\\times 5 \\\\ 1\\times 6 & 1\\times 7 & 2\\times 6 & 2\\times 7 \\\\ \\hline 3\\times 0 & 3\\times 5 & 4\\times 0 & 4\\times 5 \\\\ 3\\times 6 & 3\\times 7 & 4\\times 6 & 4\\times 7 \\\\ \\end{array}\\right] = \\left[\\begin{array}{cc|cc} 0 &  5 &  0 & 10 \\\\ 6 &  7 & 12 & 14 \\\\ \\hline 0 & 15 &  0 & 20 \\\\ 18 & 21 & 24 & 28 \\end{array}\\right]$"
    ]
  ]
}
```
