---
title: "Simple LR - Intercept Estimate and Slope Estimate - Expectation／Variance／Standard-Deviation Conditional on {𝑥₁, ..., 𝑥ₙ}"
created: 2024-01-24T14:45:44.707-06:00
modified: 2024-02-12T12:09:13.741-06:00
parent: "[[Univariate／Single-Variable／Simple Linear Regression Models]]"
children: []
---
```merge-table
{
  "rows": [
    [
      {
        "content": "Estimate",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Estimate Formula",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Expectation of Estimate",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Variance of Estimate",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Slope Estimate 𝛽₁ˆ",
        "bg": "#F4F5F7"
      },
      "$\\hat{𝛽_1} = \\frac{\\sum_i (x_i - \\bar{x})(y_i - \\bar{y})}{\\sum_j (x_j - \\bar{x})^2}$",
      "$𝐄[\\hat{𝛽_1}] = 𝛽_1$\n\n> [!expand]- derivation\n> Let's derive the [[Arithmetic Mean - Average - Location - Expected Value - Expectation Operator|expectation]] of 𝛽₁ˆ conditional on {𝑥₁, ..., 𝑥ₙ}:\n> - $𝐄[\\hat{𝛽_1}] = 𝐄 \\left[ \\frac{\\sum_i (x_i - \\bar{x})(y_i - \\bar{y})}{\\sum_j (x_j - \\bar{x})^2} \\right]$\n> - $𝐄[\\hat{𝛽_1}] = 𝐄 \\left[ \\frac{\\sum_i (x_i - \\bar{x})y_i - \\sum_i (x_i - \\bar{x})\\bar{y}}{\\sum_j (x_j - \\bar{x})^2} \\right]$\n> - $𝐄[\\hat{𝛽_1}] = 𝐄 \\left[ \\frac{\\sum_i (x_i - \\bar{x})y_i - \\bar{y}\\sum_i (x_i - \\bar{x})}{\\sum_j (x_j - \\bar{x})^2} \\right]$\n> - $𝐄[\\hat{𝛽_1}] = 𝐄 \\left[ \\frac{\\sum_i (x_i - \\bar{x})y_i - \\bar{y}0}{\\sum_j (x_j - \\bar{x})^2} \\right] \\;\\;\\; \\text{because } \\sum_i (x_i - \\bar{x}) = 0$\n> - $𝐄[\\hat{𝛽_1}] = 𝐄 \\left[ \\frac{\\sum_i (x_i - \\bar{x})y_i}{\\sum_j (x_j - \\bar{x})^2} \\right]$\n> - $𝐄[\\hat{𝛽_1}] = \\frac{\\sum_i (x_i - \\bar{x})𝐄[y_i]}{\\sum_j (x_j - \\bar{x})^2}$\n> - $𝐄[\\hat{𝛽_1}] = \\frac{\\sum_i (x_i - \\bar{x})(𝛽_0 + 𝛽_1x_i)}{\\sum_j (x_j - \\bar{x})^2}$\n> - $𝐄[\\hat{𝛽_1}] = \\frac{\\sum_i (x_i - \\bar{x})𝛽_0 + \\sum_i (x_i - \\bar{x})𝛽_1x_i}{\\sum_j (x_j - \\bar{x})^2}$\n> - $𝐄[\\hat{𝛽_1}] = \\frac{𝛽_0\\sum_i (x_i - \\bar{x}) + 𝛽_1\\sum_i (x_i - \\bar{x})x_i}{\\sum_j (x_j - \\bar{x})^2}$\n> - $𝐄[\\hat{𝛽_1}] = \\frac{𝛽_00 + 𝛽_1\\sum_i (x_i - \\bar{x})x_i}{\\sum_j (x_j - \\bar{x})^2} \\;\\;\\; \\text{because } \\sum_i (x_i - \\bar{x}) = 0$\n> - $𝐄[\\hat{𝛽_1}] = 𝛽_1\\frac{\\sum_i (x_i - \\bar{x})x_i}{\\sum_j (x_j - \\bar{x})^2}$\n> - $𝐄[\\hat{𝛽_1}] = 𝛽_1\\frac{\\sum_i (x_i - \\bar{x})x_i - 0}{\\sum_j (x_j - \\bar{x})^2}$\n> - $𝐄[\\hat{𝛽_1}] = 𝛽_1\\frac{\\sum_i (x_i - \\bar{x})x_i - \\sum_i (x_i - \\bar{x})}{\\sum_j (x_j - \\bar{x})^2} \\;\\;\\; \\text{because } \\sum_i (x_i - \\bar{x}) = 0$\n> - $𝐄[\\hat{𝛽_1}] = 𝛽_1\\frac{\\sum_i (x_i - \\bar{x})x_i - \\bar{x}\\sum_i (x_i - \\bar{x})}{\\sum_j (x_j - \\bar{x})^2}$\n> - $𝐄[\\hat{𝛽_1}] = 𝛽_1\\frac{\\sum_j (x_j - \\bar{x})^2}{\\sum_j (x_j - \\bar{x})^2}$\n> - $𝐄[\\hat{𝛽_1}] = 𝛽_1$",
      "$𝑉𝑎𝑟[\\hat{𝛽_1}] = \\frac{𝜎^2}{\\sum_j (x_j - \\bar{x})^2}$\n\n> [!expand]- derivation\n> Let's derive the [[Arithmetic Mean - Average - Location - Expected Value - Expectation Operator|v]][[Variance - Standard Deviation (Root Mean Square (RMS) Deviation)|ariance]] of 𝛽₁ˆ conditional on {𝑥₁, ..., 𝑥ₙ}:\n> - $𝑉𝑎𝑟[\\hat{𝛽_1}] = 𝑉𝑎𝑟 \\left[ \\frac{\\sum_i (x_i - \\bar{x})(y_i - \\bar{y})}{\\sum_j (x_j - \\bar{x})^2} \\right]$\n> - $𝑉𝑎𝑟[\\hat{𝛽_1}] = 𝑉𝑎𝑟 \\left[ \\frac{\\sum_i (x_i - \\bar{x})y_i - \\sum_i (x_i - \\bar{x})\\bar{y}}{\\sum_j (x_j - \\bar{x})^2} \\right]$\n> - $𝑉𝑎𝑟[\\hat{𝛽_1}] = 𝑉𝑎𝑟 \\left[ \\frac{\\sum_i (x_i - \\bar{x})y_i - \\bar{y}\\sum_i (x_i - \\bar{x})}{\\sum_j (x_j - \\bar{x})^2} \\right]$\n> - $𝑉𝑎𝑟[\\hat{𝛽_1}] = 𝑉𝑎𝑟 \\left[ \\frac{\\sum_i (x_i - \\bar{x})y_i - \\bar{y}0}{\\sum_j (x_j - \\bar{x})^2} \\right] \\;\\;\\; \\text{because } \\sum_i (x_i - \\bar{x}) = 0$\n> - $𝑉𝑎𝑟[\\hat{𝛽_1}] = 𝑉𝑎𝑟 \\left[ \\frac{\\sum_i (x_i - \\bar{x})y_i}{\\sum_j (x_j - \\bar{x})^2} \\right]$\n> - $𝑉𝑎𝑟[\\hat{𝛽_1}] = \\frac{ 𝑉𝑎𝑟 \\left[ \\sum_i (x_i - \\bar{x})y_i\\right]}{\\left(\\sum_j (x_j - \\bar{x})^2\\right)^2}$\n> - $𝑉𝑎𝑟[\\hat{𝛽_1}] = \\frac{ \\sum_i 𝑉𝑎𝑟 \\left[ (x_i - \\bar{x})y_i\\right]}{\\left(\\sum_j (x_j - \\bar{x})^2\\right)^2} \\;\\;\\; \\text{random variables } y_i \\text{ are i.i.d. so we don't need to worry about covariances between each } y_i \\text{'s}$\n> - $𝑉𝑎𝑟[\\hat{𝛽_1}] = \\frac{ \\sum_i (x_i - \\bar{x})^2 𝑉𝑎𝑟[y_i]}{\\left(\\sum_j (x_j - \\bar{x})^2\\right)^2}$\n> - $𝑉𝑎𝑟[\\hat{𝛽_1}] = \\frac{ \\sum_i (x_i - \\bar{x})^2 𝑉𝑎𝑟[𝛽_0 + 𝛽_1x_i + 𝜎𝜀_i]}{\\left(\\sum_j (x_j - \\bar{x})^2\\right)^2}$\n> - $𝑉𝑎𝑟[\\hat{𝛽_1}] = \\frac{ \\sum_i (x_i - \\bar{x})^2 𝑉𝑎𝑟[𝜎𝜀_i]}{\\left(\\sum_j (x_j - \\bar{x})^2\\right)^2} \\;\\;\\; \\text{only } 𝜀_i \\text{ is a random variable}$\n> - $𝑉𝑎𝑟[\\hat{𝛽_1}] = \\frac{ \\sum_i (x_i - \\bar{x})^2 𝜎^2𝑉𝑎𝑟[𝜀_i]}{\\left(\\sum_j (x_j - \\bar{x})^2\\right)^2}$\n> - $𝑉𝑎𝑟[\\hat{𝛽_1}] = \\frac{ \\sum_i (x_i - \\bar{x})^2 𝜎^21}{\\left(\\sum_j (x_j - \\bar{x})^2\\right)^2} \\;\\;\\; \\text{} 𝜀_i \\text{ is a standard normal random variable}$\n> - $𝑉𝑎𝑟[\\hat{𝛽_1}] = 𝜎^2\\frac{ \\sum_i (x_i - \\bar{x})^2}{\\left(\\sum_j (x_j - \\bar{x})^2\\right)^2}$\n> - $𝑉𝑎𝑟[\\hat{𝛽_1}] = \\frac{𝜎^2}{\\sum_j (x_j - \\bar{x})^2}$"
    ],
    [
      {
        "content": "Intercept Estimate 𝛽₀ˆ",
        "bg": "#F4F5F7"
      },
      "$\\hat{𝛽_0} = \\bar{y} - 𝛽_1\\bar{x}$",
      "$𝐄[\\hat{𝛽_0}] = 𝛽_0$\n\n> [!expand]- derivation\n> Let's derive the expectation of 𝛽₀ˆ conditional on {𝑥₁, ..., 𝑥ₙ}:\n> - $𝐄[\\hat{𝛽_0}] = 𝐄\\left[ \\bar{y} - 𝛽_1\\bar{x} \\right]$\n> - $𝐄[\\hat{𝛽_0}] = 𝐄[\\bar{y}] - 𝛽_1\\bar{x}$\n> - $𝐄[\\hat{𝛽_0}] = 𝐄[𝛽_0 + 𝛽_1\\bar{x} + 𝜎𝜀] - 𝛽_1\\bar{x}$\n> - $𝐄[\\hat{𝛽_0}] = 𝛽_0 + 𝛽_1\\bar{x} + 0 - 𝛽_1\\bar{x}$\n> - $𝐄[\\hat{𝛽_0}] = 𝛽_0$",
      "$𝑉𝑎𝑟[\\hat{𝛽_0}] = 𝜎^2 \\left( \\frac{1}{n} + \\frac{\\bar{x}^2}{\\sum_j (x_j - \\bar{x})^2} \\right)$\n\n> [!expand]- derivation\n> Let's derive the variance of 𝛽₀ˆ conditional on {𝑥₁, ..., 𝑥ₙ}:\n> - $𝑉𝑎𝑟[\\hat{𝛽_0}] = 𝑉𝑎𝑟\\left[ \\bar{y} - 𝛽_1\\bar{x} \\right]$\n> - TODO: [https://stats.stackexchange.com/questions/64195/how-do-i-calculate-the-variance-of-the-ols-estimator-beta-0-conditional-on](https://stats.stackexchange.com/questions/64195/how-do-i-calculate-the-variance-of-the-ols-estimator-beta-0-conditional-on)"
    ]
  ]
}
```
