---
title: "Data Preparation - Standardization／Standardizing／Normalizing Data Variables ／ Min-Max／Mean／Z-Score Feature Normalization／Scaling"
created: 2020-04-22T00:38:48.095-05:00
modified: 2020-10-01T14:11:52.769-05:00
parent: "[[Data Preparation／Scrubbing]]"
children: []
---
given 𝒙 = {𝑥<sub>1</sub>, ..., 𝑥<sub>𝑛</sub>}

```merge-table
{
  "rows": [
    [
      {
        "content": "<strong>Min-Max Normalization</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- 𝑥<sub>𝑖</sub> ← \\[𝑥<sub>𝑖</sub> - 𝑚𝑖𝑛(𝒙)\\] / \\[𝑚𝑎𝑥(𝒙) - 𝑚𝑖𝑛(𝒙)\\]"
    ],
    [
      {
        "content": "<strong>Mean Normalization</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- 𝑥<sub>𝑖</sub> ← \\[𝑥<sub>𝑖</sub> - 𝜇\\] / \\[𝑚𝑎𝑥(𝒙) - 𝑚𝑖𝑛(𝒙)\\]"
    ],
    [
      {
        "content": "<strong>Z-Score Normalization\n<strong>Standardization</strong></strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- 𝑥<sub>𝑖</sub> ← \\[𝑥<sub>𝑖</sub> - 𝜇\\] / 𝜎\n- <font style=\"color: rgb(128,128,128);\">transform all variables to have zero-mean and same [[Variance - Standard Deviation (Root Mean Square (RMS) Deviation)|standard deviation]] = 1</font>"
    ]
  ]
}
```

where:
- 𝜇 - mean
- 𝜎 - standard deviation

### Z-Score Normalization Advantages
- standardized variables are centered at 0 so that we don’t need to compute the y-axis intercept for [[Ordinary Least Squares (OLS) Regression|linear regression]]
- in [[Gradient Descent／Ascent Algorithms - The Method of Steepest Descent／Ascent Algorithms|gradient descent]] learning algorithms learns the model coefficients “equally” in multiple linear regression
- the slope is then exactly the same as the [[Correlation|correlation coefficient]], which saves another computational step
