---
title: "Non-Linear Regression (NLR) Models"
created: 2020-09-30T16:38:50.563-05:00
modified: 2021-12-21T04:18:15.760-06:00
parent: "[[Continuous Regression Models]]"
children: []
---
###### Non-Linear Regression (NLR) Models
- a type of [[Continuous Regression Models|continuous regression model]] whose function/estimator is non-linear with respect to the regression coefficients {𝜃<sub>1</sub>, ..., 𝜃<sub>𝑝</sub>}
- provides greater flexibility to fit curves than [[Linear Regression (LR) Models|linear regression models]]
- like [[Ordinary Least Squares (OLS)|OLS]], nonlinear regression estimates the parameters {𝜃<sub>1</sub>, ..., 𝜃<sub>𝑝</sub>} by [[Method of Least Mean Squared／Squares Error／Estimation／Estimator (LMS／LSE／MMSE) - Sum of Square Errors／Residuals - Regression Variance／Standard-Deviation／Error of Regression／Residuals／Estimate - Root Mean Square Deviation／Error (RMSD／E - MSE)|minimizing the SSE]]. However, nonlinear models use an iterative algorithm rather than the linear approach of solving them directly with matrix equations. What this means for you is that you need to worry about which algorithm to use, specifying good starting values, and the possibility of either not converging on a solution or converging on a local minimum rather than a global minimum SSE

# NLR - Model Types
````excerpt
[[Non-Linear Regression (NLR) Models|Non-Linear Regression Models]] - takes an input vector 𝑥∊ℝ<sup>𝑛</sup> as input and predicts the value of a <strong>scalar</strong> 𝑦∊ℝ as output (whose function/estimator is linear wrt the coefficients {𝜃<sub>0</sub>, ..., 𝜃<sub>𝑝</sub>})

```merge-table
{
  "rows": [
    [
      {
        "content": "Non-Linear Regression Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Function Form Example",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "power",
        "bg": "#F4F5F7"
      },
      "𝑦̂ = 𝜃<sub>1</sub>𝑥<sup>𝜃<sub>2</sub></sup>"
    ],
    [
      {
        "content": "weibull growth",
        "bg": "#F4F5F7"
      },
      "𝑦̂ = 𝜃<sub>1</sub> + (𝜃<sub>2</sub>- 𝜃<sub>1</sub>)·𝑒𝑥𝑝(-𝜃<sub>3</sub>𝑥<sup>𝜃<sub>4</sub></sup>)"
    ],
    [
      {
        "content": "[[Fourier Analysis|fourier]]",
        "bg": "#F4F5F7"
      },
      "𝑦̂ = 𝜃<sub>0</sub> + 𝜃<sub>1</sub>𝑐𝑜𝑠(𝑥 + 𝜃<sub>4</sub>) + 𝜃<sub>2</sub>𝑐𝑜𝑠(2𝑥 + 𝜃<sub>4</sub>)"
    ]
  ]
}
```
````
^excerpt
