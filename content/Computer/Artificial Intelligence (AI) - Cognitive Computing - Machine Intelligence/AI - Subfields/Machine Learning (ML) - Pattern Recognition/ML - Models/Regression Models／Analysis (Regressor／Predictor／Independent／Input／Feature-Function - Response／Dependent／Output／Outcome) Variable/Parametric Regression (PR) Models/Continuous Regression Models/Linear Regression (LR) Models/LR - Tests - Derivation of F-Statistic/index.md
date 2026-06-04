---
title: "LR - Tests - Derivation of F-Statistic"
created: 2024-02-01T15:10:46.086-06:00
modified: 2024-02-01T15:37:06.218-06:00
parent: "[[Linear Regression (LR) Models]]"
children:
  - "[[LR - Tests - T-Statistic vs F-Statistic]]"
---
# Test Whether 𝛽<sub>2</sub> = 0

Train the following 2 models against the dataset

```merge-table
{
  "rows": [
    [
      {
        "content": "Full Model",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- $\\hat{y}_f = \\hat{𝛽}_{f1}x_1 + \\hat{𝛽}_{f2}x_2$\n- $\\hat{y}_f = X_r \\hat{𝛽}_{f}$"
    ],
    [
      {
        "content": "Reduced Model",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- $\\hat{y}_r = \\hat{𝛽}_{r1}x_1$\n- $\\hat{y}_r = X_r \\hat{𝛽}_{r}$"
    ]
  ]
}
```

After training, compute the residual sum of squares:

```merge-table
{
  "rows": [
    [
      {
        "content": "Full Model",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- $\\hat{e}_f = y - \\hat{y}_f$"
    ],
    [
      {
        "content": "Reduced Model",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- $\\hat{e}_r = y - \\hat{y}_r$"
    ]
  ]
}
```

The corresponding residual sum of squares are independent [[Chi-Square Distribution|𝒳-square]] random variables:

```merge-table
{
  "rows": [
    [
      {
        "content": "Full Model",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- $\\frac{\\hat{e}_f^T\\hat{e}_f}{𝜎^2} = \\mathcal{X}_{n-p}^2$"
    ],
    [
      {
        "content": "Reduced Model",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- $\\frac{\\hat{e}_r^T\\hat{e}_r}{𝜎^2} = \\mathcal{X}_{n-p+1}^2$"
    ],
    [
      {
        "content": "Further",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- $\\frac{\\hat{e}_r^T\\hat{e}_r - \\hat{e}_f^T\\hat{e}_f}{𝜎^2} = \\mathcal{X}_{(n-p+1) - (n-p)}^2 = \\mathcal{X}_{1}^2$"
    ]
  ]
}
```

Hence, from the definition of an 𝐹 variable (note that the 𝜎 cancels):
- $F = \frac{(\hat{e}_r^T\hat{e}_r - \hat{e}_f^T\hat{e}_f)/(1)}{\hat{e}_f^T\hat{e}_f/(n-p)}$
