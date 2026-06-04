---
title: "Multiple LR - Parameter Estimates - Expectation／Variance Conditional on {𝑥₁, ..., 𝑥ₙ}"
created: 2024-01-24T15:33:56.110-06:00
modified: 2024-01-25T13:31:47.015-06:00
parent: "[[Multivariate／Multiple Linear Regression Models]]"
children: []
---
The parameter estimates 𝛽ˆ is defined as:
- $\hat{𝛽} = (X^TX)^{-1}X^Ty$

where:
- $X \text{ - is a matrix whose rows are the instances } x_i$
- $y \text{ - is a n⨯1 vector whose elements are } y_i$

> [!expand-ui]- Expectation of Parameter Estimates Conditional on {𝑥₁, ..., 𝑥ₙ}
> Let's derive the [[Arithmetic Mean - Average - Location - Expected Value - Expectation Operator|expectation]] of 𝛽ˆ conditional on {𝑥₁, ..., 𝑥ₙ}:
> - $𝐄[\hat{𝛽}] = 𝐄[(X^TX)^{-1}X^Ty]$
> - $𝐄[\hat{𝛽}] = (X^TX)^{-1}X^T𝐄[y]$
> - $𝐄[\hat{𝛽}] = (X^TX)^{-1}X^T𝐄[X𝛽 + 𝜎𝜀]$
> - $𝐄[\hat{𝛽}] = (X^TX)^{-1}X^T(X𝛽 + 0)$
> - $𝐄[\hat{𝛽}] = (X^TX)^{-1}X^TX𝛽$
> - $𝐄[\hat{𝛽}] = 𝛽$

> [!expand-ui]- Variance of Parameter Estimates Conditional on {𝑥₁, ..., 𝑥ₙ} with 𝜎 Known
> Let's derive the [[Arithmetic Mean - Average - Location - Expected Value - Expectation Operator|v]][[Variance - Standard Deviation (Root Mean Square (RMS) Deviation)|ariance]] of 𝛽ˆ conditional on {𝑥₁, ..., 𝑥ₙ}:
> - $Var[\hat{𝛽}] = Var[(X^TX)^{-1}X^Ty]$
> 	- If 𝑣 is a random vector and 𝑧 = 𝐴𝑣, then:
> 	- $Cov(z) = A \; Cov(v) \; A^T$
> - $Var[\hat{𝛽}] = (X^TX)^{-1}X^TVar[y] \left( (X^TX)^{-1}X^T \right)^T$
> - $Var[\hat{𝛽}] = (X^TX)^{-1}X^TVar[y] X \left( (X^TX)^{-1} \right)^T$
> - $Var[\hat{𝛽}] = (X^TX)^{-1}X^TVar[y] X \left( (X^TX)^{-1} \right)^T$
> - $Var[\hat{𝛽}] = (X^TX)^{-1}X^TVar[X𝛽 + 𝜎𝜀] X \left( (X^TX)^{-1} \right)^T$
> - $Var[\hat{𝛽}] = (X^TX)^{-1}X^TVar[𝜎𝜀] X \left( (X^TX)^{-1} \right)^T$
> - $Var[\hat{𝛽}] = (X^TX)^{-1}X^T𝜎^2Var[𝜀] X \left( (X^TX)^{-1} \right)^T$
> - $Var[\hat{𝛽}] = (X^TX)^{-1}X^T𝜎^2 X \left( (X^TX)^{-1} \right)^T \;\;\; \text{ 𝜀 is a standard normal random variable}$
> - $Var[\hat{𝛽}] = 𝜎^2(X^TX)^{-1}X^T X \left( (X^TX)^{-1} \right)^T$
> - $Var[\hat{𝛽}] = 𝜎^2 \left( (X^TX)^{-1} \right)^T$
> - $Var[\hat{𝛽}] = 𝜎^2 (X^TX)^{-1} \;\;\; \text{ the inverse of a symmetric matrix is also symmetric. }  X^TX \text{ is a symmetric matrix}$
> - this is a [[Covariance & Correlation Matrix|covariance matrix]]

> [!expand-ui]- Variance of a SINGLE Parameter Estimate Conditional on {𝑥₁, ..., 𝑥ₙ} with 𝜎 Known
> Let's derive the [[Arithmetic Mean - Average - Location - Expected Value - Expectation Operator|v]][[Variance - Standard Deviation (Root Mean Square (RMS) Deviation)|ariance]] of 𝛽<sub>𝑗</sub>ˆ conditional on {𝑥₁, ..., 𝑥ₙ}:
> - $Var[\hat{𝛽}_j] = Var[\hat{𝛽}][j][j] = 𝜎^2 \left( (X^TX)^{-1}[j][j] \right)$

> [!expand-ui]- Variance of Parameter Estimates Conditional on {𝑥₁, ..., 𝑥ₙ} with 𝜎 Unknown
> Let's derive the [[Arithmetic Mean - Average - Location - Expected Value - Expectation Operator|v]][[Variance - Standard Deviation (Root Mean Square (RMS) Deviation)|ariance]] of 𝛽ˆ conditional on {𝑥₁, ..., 𝑥ₙ}: with unknown 𝜎:
> - $Var[\hat{𝛽}] = \hat{𝜎}^2 (X^TX)^{-1}$
>
> where:
> - $\hat{𝜎}^2 = \frac{(y - \hat{y})^T(y - \hat{y})}{n - p}$
> - see: [[Multiple LR - Estimating Regression Variance 𝜎²]]

> [!expand-ui]- Variance of a SINGLE Parameter Estimate Conditional on {𝑥₁, ..., 𝑥ₙ} with 𝜎 Unknown
> Let's derive the [[Variance - Standard Deviation (Root Mean Square (RMS) Deviation)|variance]] of 𝛽<sub>𝑗</sub>ˆ conditional on {𝑥₁, ..., 𝑥ₙ} with unknown 𝜎:
> - $\hat{Var[\hat{𝛽}_j]} = \hat{𝜎}^2 \left( (X^TX)^{-1}[j][j] \right)$
>
> where:
> - $\hat{𝜎}^2 = \frac{(y - \hat{y})^T(y - \hat{y})}{n - p}$
> - see: [[Multiple LR - Estimating Regression Variance 𝜎²]]
