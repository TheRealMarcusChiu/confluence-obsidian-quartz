---
title: "Multiple LR - Moderations & Interaction Terms"
created: 2024-01-31T14:21:19.599-06:00
modified: 2024-01-31T16:25:16.128-06:00
parent: "[[Multivariate／Multiple Linear Regression Models]]"
children: []
---
- 𝑦 = 𝛽<sub>1</sub>𝑥<sub>1</sub> + 𝛽<sub>2</sub>𝑥<sub>2</sub> + 𝛽<sub>3</sub>𝑥<sub>1</sub>𝑥<sub>2</sub> + 𝜀

where:
- 𝑥<sub>1</sub>𝑥<sub>2</sub> is the interaction term
- 𝛽<sub>3</sub> is the moderation weight

# Test Whether 𝛽<sub>3</sub> = 0

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
      "- $\\hat{y}_f = \\hat{𝛽}_{f1}x_1 + \\hat{𝛽}_{f2}x_2 + \\hat{𝛽}_{f3}x_1x_2$\n- $\\hat{y}_f = X_r \\hat{𝛽}_{f}$"
    ],
    [
      {
        "content": "Reduced Model",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- $\\hat{y}_r = \\hat{𝛽}_{r1}x_1 + \\hat{𝛽}_{r2}x_2$\n- $\\hat{y}_r = X_r \\hat{𝛽}_{r}$"
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

Recall that

```merge-table
{
  "rows": [
    [
      {
        "content": "Full Model",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- $$"
    ],
    [
      {
        "content": "Reduced Model",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- $$"
    ]
  ]
}
```
