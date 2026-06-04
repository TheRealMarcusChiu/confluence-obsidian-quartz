---
title: "LR - Methods Estimating Unknown Regression Coefficients"
created: 2020-06-09T13:33:41.151-05:00
modified: 2023-09-05T15:31:33.086-05:00
parent: "[[Linear Regression (LR) Models]]"
children:
  - "[[LR - Methods Estimating Unknown Coefficients - MAP (Bayesian Linear Regression)]]"
  - "[[LR - Methods Estimating Unknown Coefficients - MLE]]"
  - "[[LR - Methods Estimating Unknown Coefficients - Method of Least Squares (Gradient Descent)]]"
  - "[[LR - Methods Estimating Unknown Coefficients - Method of Least Squares (Projection Matrix - Normal Equation - Pseudoinverse)]]"
  - "[[LR - Methods Estimating Unknown Coefficients - Newton-Raphson (N-R) Technique]]"
---
````excerpt
[[Point／Parameter Estimation／Estimator／Estimate／Approximation - Estimating Parameters of Parametric Distribution／Population Function／Model (Population Parameters - Sample Statistics)|Methods estimating unknown coefficients {𝜃0, ..., 𝜃𝑘}]] of 𝐄\[𝑌|𝑋<sub>1</sub>=𝑥<sub>1</sub>, ..., 𝑋<sub>𝑘</sub>=𝑥<sub>𝑘</sub>\] = ℎ(𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) = 𝑦̂ = 𝜃<sub>0</sub>+ 𝜃<sub>1</sub>𝑓<sub>1</sub>(𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) + ... + 𝜃<sub>𝑘</sub>𝑓<sub>𝑘</sub>(𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>)

```merge-table
{
  "rows": [
    [
      {
        "content": "Method",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[LR - Methods Estimating Unknown Coefficients - Method of Least Squares (Gradient Descent)|Method of Least Squares]]\n[[LR - Methods Estimating Unknown Coefficients - Method of Least Squares (Gradient Descent)|(Gradient Descent)]]",
        "bg": "#F4F5F7"
      },
      "- idea: minimizing [[Method of Least Mean Squared／Squares Error／Estimation／Estimator (LMS／LSE／MMSE) - Sum of Square Errors／Residuals - Regression Variance／Standard-Deviation／Error of Regression／Residuals／Estimate - Root Mean Square Deviation／Error (RMSD／E - MSE)|square error]] via GRADIENT DESCENT\n- need to choose learning rate 𝛼\n- need many iterations\n- works well when the number of training examples 𝑋 is large"
    ],
    [
      {
        "content": "[[LR - Methods Estimating Unknown Coefficients - Method of Least Squares (Projection Matrix - Normal Equation - Pseudoinverse)|Method of Least Squares]]\n[[LR - Methods Estimating Unknown Coefficients - Method of Least Squares (Projection Matrix - Normal Equation - Pseudoinverse)|(Projection Matrix - Normal Equation)]]",
        "bg": "#F4F5F7"
      },
      "- idea: minimizing [[Method of Least Mean Squared／Squares Error／Estimation／Estimator (LMS／LSE／MMSE) - Sum of Square Errors／Residuals - Regression Variance／Standard-Deviation／Error of Regression／Residuals／Estimate - Root Mean Square Deviation／Error (RMSD／E - MSE)|square error]] via NORMAL EQUATIONS\n- no need to choose learning rate 𝛼\n- do not need to iterate\n- need to compute (𝑋<sup>𝑇</sup>𝑋)<sup>-1</sup>𝑋<sup>𝑇</sup> or 𝑉𝐷<sup>-1</sup>𝑈<sup>𝑇</sup>\n- slow if the number of training examples 𝑋 is large because computing the inverse of a matrix is 𝑂(𝑛<sup>3</sup>)"
    ],
    [
      {
        "content": "[[LR - Methods Estimating Unknown Coefficients - MLE|Maximum Likelihood Estimation]]",
        "bg": "#F4F5F7"
      },
      "- idea: maximize the [[Bayes' Rule／Theorem／Law (Prior - Posterior - Distribution - Likelihood - Probability of Evidence)|likelihood]]/[[Likelihood Function - Log-Likelihood Function - Score Function|likelihood function]]\n- For [[Ordinary Least Squares (OLS) Regression|OLS]] to be mathematically equivalent to MLE, the errors are assumed to be [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|normally distributed]] and [[Independent and Identically Distributed (IID)]]"
    ],
    [
      {
        "content": "[[LR - Methods Estimating Unknown Coefficients - MAP (Bayesian Linear Regression)|MAP (Bayesian Linear Regression)]]",
        "bg": "#F4F5F7"
      },
      "- idea: maximize the [[Bayes' Rule／Theorem／Law (Prior - Posterior - Distribution - Likelihood - Probability of Evidence)|posterior]]"
    ],
    [
      {
        "content": "[[LR - Methods Estimating Unknown Coefficients - Newton-Raphson (N-R) Technique|Newton-Raphson (N-R) Technique]]",
        "bg": "#F4F5F7"
      },
      "- idea: TODO"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
````
^excerpt
