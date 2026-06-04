---
title: "Multiple LR - Leverage Score ／ Influence - Studentized Residuals"
created: 2024-01-24T21:39:23.143-06:00
modified: 2024-01-25T00:36:00.001-06:00
parent: "[[Multivariate／Multiple Linear Regression Models]]"
children: []
---
# Leverage Score / Influence

The leverage score for the 𝑖<sup>th</sup> observation is given by ℎ<sub>𝑖𝑖</sub>, the 𝑖<sup>th</sup> diagonal element of 𝐻, where 𝐻 is defined as:
- $H = X(X^TX)^{-1}X^T$

The larger the value, the larger the influence of the 𝑖<sup>th</sup> observation.

Recall the fitted values are given by:
- $\hat{y} = X\hat{𝛽} = Hy$
```merge-table
{
  "rows": [
    [
      "From:\n- $\\hat{e} = (I - H)y$\n\nwe get:\n- $Cov(\\hat{e}) = 𝜎^2(I - H)$\n\nSo:\n- $Var[\\hat{e}_i] = 𝜎^2(1-h_{ii})$\n\nWe can show 0 \\< ℎ<sub>𝑖𝑖</sub> \\< 1 from the joint facts that:\n- 𝐻 is symmetric\n- 𝐻<sup>2</sup> = 𝐻\n\nSo as ℎ<sub>𝑖𝑖</sub>increases, 𝑉𝑎𝑟(𝑒̂<sub>𝑖</sub>) reduces; indicating (𝑦<sub>𝑖</sub> - 𝑦̂<sub>𝑖</sub>) will have a small variance."
    ]
  ]
}
```
# Studentized Residuals

The studentized residuals 𝑒̃<sub>𝑖</sub> are defined as:
- $\tilde{e}_i = \frac{\hat{e}_i}{𝜎\sqrt{1 - h_{ii}}}$

These can be used to investigate any possible violations of the assumptions made for the model. Such as:
- independent normal assumptions for 𝜀<sub>𝑖</sub>
- the variables enter the model linearly
