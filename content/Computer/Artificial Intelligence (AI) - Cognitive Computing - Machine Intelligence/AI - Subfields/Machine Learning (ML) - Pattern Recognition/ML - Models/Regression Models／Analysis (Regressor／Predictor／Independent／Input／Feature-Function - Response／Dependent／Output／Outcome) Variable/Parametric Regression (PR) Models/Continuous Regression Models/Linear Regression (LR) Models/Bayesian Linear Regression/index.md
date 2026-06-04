---
title: "Bayesian Linear Regression"
created: 2024-02-09T17:10:52.218-06:00
modified: 2024-02-23T10:41:03.587-06:00
parent: "[[Linear Regression (LR) Models]]"
children: []
---
###### Bayesian Linear Regression
````excerpt
- TODO
````
^excerpt

# When to Use Bayesian Regression
- [https://crunchingthedata.com/when-to-use-bayesian-regression/](https://crunchingthedata.com/when-to-use-bayesian-regression/)

# TODO

```merge-table
{
  "rows": [
    [
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      "- The set of {𝑦<sub>1</sub>, 𝑦<sub>2</sub>, ..., 𝑦<sub>𝑛</sub>} independent given 𝑤\n- $y_i = N(w^Tx_i, a^{-1})$\n\nwhere:\n- $a > 0$"
    ],
    [
      {
        "content": "prior",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- $𝐏(w) = N(0, b^{-1}I)$\n- $𝐏(w) ∝ exp(- \\frac{b}{2}w^Tw)$\n\nwhere:\n- $b > 0$"
    ],
    [
      {
        "content": "likelihood",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- $𝐏(D|w) ∝ exp\\left( - \\frac{a}{2}(y - Xw)^T(y-Xw) \\right)$\n\nwhere:\n- $X = \\begin{bmatrix} -x_1- \\\\ -x_2- \\\\ \\vdots \\\\ -x_n- \\end{bmatrix}$\n- $y = \\begin{bmatrix} y_1 \\\\ y_2 \\\\ \\vdots \\\\ y_n \\end{bmatrix}$"
    ],
    [
      {
        "content": "posterior",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- $𝐏(w|D) ∝ 𝐏(D|w)𝐏(w)$\n- $𝐏(w|D) ∝ exp\\left( - \\frac{a}{2}(y - Xw)^T(y-Xw) \\right)𝐏(w)$\n- $𝐏(w|D) ∝ exp\\left( - \\frac{a}{2}(y - Xw)^T(y-Xw) \\right)exp(- \\frac{b}{2}w^Tw)$\n- $𝐏(w|D) ∝ exp\\left( - \\frac{a}{2}(y - Xw)^T(y-Xw) - \\frac{b}{2}w^Tw \\right)$\n- TODO\n- [https://www.youtube.com/watch?v=nrd4AnDLR3U](https://www.youtube.com/watch?v=nrd4AnDLR3U)"
    ]
  ]
}
```
