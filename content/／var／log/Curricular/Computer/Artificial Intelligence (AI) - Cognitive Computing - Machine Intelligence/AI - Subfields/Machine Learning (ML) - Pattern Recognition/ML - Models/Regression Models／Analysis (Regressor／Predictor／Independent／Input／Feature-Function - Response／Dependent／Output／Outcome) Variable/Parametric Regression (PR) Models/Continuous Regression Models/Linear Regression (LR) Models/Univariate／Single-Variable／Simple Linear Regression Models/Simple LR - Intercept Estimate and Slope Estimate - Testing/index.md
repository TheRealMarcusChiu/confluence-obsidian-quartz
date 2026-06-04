---
title: "Simple LR - Intercept Estimate and Slope Estimate - Testing"
created: 2024-01-24T16:36:32.904-06:00
modified: 2024-01-25T00:40:00.469-06:00
parent: "[[Univariate／Single-Variable／Simple Linear Regression Models]]"
children: []
---
> [!expand-ui]- Test if 𝛽₁ = 0, assume 𝜎 is known
> The [[Simple LR - Intercept Estimate and Slope Estimate - Expectation／Variance／Standard-Deviation Conditional on {𝑥₁, ..., 𝑥ₙ}|slope estimate 𝛽₁ˆ is Normal given {𝑥1, ..., 𝑥𝑛}]] with:
> - $Var[\hat{𝛽_1}] = \frac{𝜎^2}{\sum_i (x_i - \bar{x})^2}$
> - $SD[\hat{𝛽_1}] = \frac{𝜎}{\sqrt{\sum_i (x_i - \bar{x})^2}}$
>
> with (1-𝛼)100% 2-tailed [[Confidence Interval (CI)|confidence interval]] for the regression slope 𝛽<sub>1</sub>:
> - = <font style="color: rgb(128,0,0);">slope estimate</font> ± <font style="color: rgb(255,102,0);">𝑧<sub>𝛼/2</sub></font>·<font style="color: rgb(0,128,0);">(std of <font style="color: rgb(128,0,0);">slope estimate</font>)</font> <font style="color: rgb(128,128,128);">\# [[z-distribution (Standard Normal Distribution) ｜ z-scores ｜ z-values ｜ z-table ｜ z-statistic ｜ Standardization - Standardized Values - Standard Scores - Normal Deviates|z-test]] is used when std of the estimator is known (i.e. 𝜎 is known)</font>
> - = <font style="color: rgb(128,0,0);">𝛽₁ˆ</font><sub></sub>± <font style="color: rgb(255,102,0);">𝑧<sub>𝛼/2</sub></font>·<font style="color: rgb(0,128,0);">\[𝜎<sup>2</sup>/𝛴(𝑥<sub>𝑖</sub> - 𝑥̅)<sup>2</sup>\]<sup>1/2</sup></font>
> - = <font style="color: rgb(128,0,0);">𝛽₁ˆ</font><sub></sub>± <font style="color: rgb(255,102,0);">𝑧<sub>𝛼/2</sub></font>·<font style="color: rgb(0,128,0);">\[𝜎/√(𝛴(𝑥<sub>𝑖</sub> - 𝑥̅)<sup>2</sup>)\]</font>

> [!expand-ui]- Test if 𝛽₁ = 0, assume 𝜎 is unknown
> The [[Simple LR - Intercept Estimate and Slope Estimate - Expectation／Variance／Standard-Deviation Conditional on {𝑥₁, ..., 𝑥ₙ}|slope estimate 𝛽₁ˆ is Normal given {𝑥1, ..., 𝑥𝑛}]] with:
> - $\hat{Var}[\hat{𝛽_1}] = \frac{\hat{𝜎}^2}{\sum_i (x_i - \bar{x})^2}$
> - $\hat{SD}[\hat{𝛽_1}] = \frac{\hat{𝜎}}{\sqrt{\sum_i (x_i - \bar{x})^2}}$
>
> with (1-𝛼)100% 2-tailed [[Confidence Interval (CI)|confidence interval]] for the regression slope (𝛽<sub>1</sub>)
> - = <font style="color: rgb(128,0,0);">slope estimate</font> ± <font style="color: rgb(255,102,0);">𝑡<sub>𝛼/2,𝑛-2</sub></font>·<font style="color: rgb(0,128,0);">(std of <font style="color: rgb(128,0,0);">slope estimate</font>)</font> <font style="color: rgb(128,128,128);">\# [[z-distribution (Standard Normal Distribution) ｜ z-scores ｜ z-values ｜ z-table ｜ z-statistic ｜ Standardization - Standardized Values - Standard Scores - Normal Deviates|z-test]] is used when std of the estimator is known (i.e. 𝜎 is known)</font>
> - = <font style="color: rgb(128,0,0);">𝛽₁ˆ</font><sub></sub>± <font style="color: rgb(255,102,0);">𝑡<sub>𝛼/2,𝑛-2</sub></font>·<font style="color: rgb(0,128,0);">\[𝜎̂<sup>2</sup>/𝛴(𝑥<sub>𝑖</sub> - 𝑥̅)<sup>2</sup>\]<sup>1/2</sup></font>
> - = <font style="color: rgb(128,0,0);">𝛽₁ˆ</font><sub></sub>± <font style="color: rgb(255,102,0);">𝑡<sub>𝛼/2,𝑛-2</sub></font>·<font style="color: rgb(0,128,0);">\[𝜎̂/√(𝛴(𝑥<sub>𝑖</sub> - 𝑥̅)<sup>2</sup>)\]</font>
