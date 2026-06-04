---
title: "Gauss-Markov Assumptions - OLS Assumptions"
created: 2021-09-13T05:27:44.825-05:00
modified: 2021-09-13T05:27:44.825-05:00
parent: "[[Linear Least Squares (LLS)]]"
children:
  - "[[Heteroscedasticity - Homoscedasticity]]"
  - "[[Multicollinearity - Endogeneity of Predictors]]"
---
###### Gauss-Markov Assumptions - OLS Assumptions

is set of conditions when are upheld, then the [[Ordinary Least Squares (OLS)]] is [[LLS - Comparisons (OLS vs WLS vs GLS) - Best Linear Unbiased Estimator (BLUE) - Minimum-Variance Unbiased Estimator (MVUE)|Best Linear Unbiased Estimator (BLUE)]]:

```merge-table
{
  "rows": [
    [
      {
        "content": "random",
        "header": true,
        "bg": "#F4F5F7",
        "colspan": 2
      },
      null,
      "- samples are [[Independent and Identically Distributed (IID)|i.i.d.]] of the population"
    ],
    [
      {
        "content": "linearity",
        "header": true,
        "bg": "#F4F5F7",
        "colspan": 2
      },
      null,
      "- the parameters 𝜽 = {𝜃<sub>0</sub>, ..., 𝜃<sub>𝑘</sub>} it's estimating is linear to the regression function 𝑓(𝒙<sub>𝑖</sub>) where 𝒙<sub>𝑖</sub> = {𝑥<sub>𝑖1</sub>, ..., 𝑥<sub>𝑖𝑘</sub>}\n\t- 𝑦̂<sub>𝑖</sub> = 𝑓(𝒙<sub>𝑖</sub>) = 𝜃<sub>0</sub> + 𝜃<sub>1</sub>𝑥<sub>𝑖1</sub> + ... + 𝜃<sub>𝑘</sub>𝑥<sub>𝑖𝑘</sub>"
    ],
    [
      {
        "content": "errors are normal distributed",
        "header": true,
        "bg": "#F4F5F7",
        "colspan": 2
      },
      null,
      "- error terms 𝑒<sub>𝑖</sub>s should be [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|normally distributed]] for all inputs of regressors {𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>}"
    ],
    [
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "zero mean",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- zero conditional mean of [[Method of Least Mean Squared／Squares Error／Estimation／Estimator (LMS／LSE／MMSE) - Sum of Square Errors／Residuals - Regression Variance／Standard-Deviation／Error of Regression／Residuals／Estimate - Root Mean Square Deviation／Error (RMSD／E - MSE)|errors 𝑒𝑖s]] for all inputs of regressors {𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>} (i.e. expected error is zero given 𝒙)\n\t- 𝐄\\[𝑒<sub>𝑖</sub>|𝒙<sub>𝑖</sub>\\] = 0 <font style=\"color: rgb(128,128,128);\">\\# regression function is</font> [[Estimator - Inductive Properties (Biasedness／Unbiasedness - Consistency／Consistent - Statistic Efficiency)|unbiased]] <font style=\"color: rgb(128,128,128);\">otherwise</font> [[Estimator - Inductive Properties (Biasedness／Unbiasedness - Consistency／Consistent - Statistic Efficiency)|bias]]"
    ],
    [
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "constant variance",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- variance of error terms 𝑒<sub>𝑖</sub>s is the same constant for all inputs of regressors {𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>}\n\t- 𝑉𝑎𝑟(𝑒<sub>𝑖</sub>|𝒙<sub>𝑖</sub>) = 𝑐𝑜𝑛𝑠𝑡𝑎𝑛𝑡 <font style=\"color: rgb(128,128,128);\">\\#</font> [[Heteroscedasticity - Homoscedasticity|homoscedasticity]] <font style=\"color: rgb(128,128,128);\">otherwise</font> [[Heteroscedasticity - Homoscedasticity|heteroscedasticity]]"
    ],
    [
      {
        "content": "[[Endogenous／Endogenic Variable - Exogenous／Exogenic Variable - Endogenous vs Exogeneity|exogeneity]] between:",
        "header": true,
        "bg": "#F4F5F7",
        "colspan": 3
      },
      null,
      null
    ],
    [
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "errors and regressors",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- no correlation between errors 𝑒<sub>𝑖</sub>s and any regressors {𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>}\n\t- 𝐶𝑜𝑣(𝑒<sub>𝑖</sub>,𝒙<sub>𝑖</sub>) = 0"
    ],
    [
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "errors",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- no [[Autocorrelation - Autocovariance - Auto／Serial Correlation／Covariance Function|serial/auto correlation]] between error terms 𝑒<sub>𝑖</sub>s\n\t- 𝐶𝑜𝑣(𝑒<sub>𝑖</sub>,𝑒<sub>𝑗</sub>) = 0 <font style=\"color: rgb(128,128,128);\">\\# for 𝑖≠𝑗</font>"
    ],
    [
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "regressors",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- no perfect [[Correlation - Correlation Coefficient|correlation]] between the regressors {𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>}\n\t- 𝐶𝑜𝑣(𝑥<sub>𝑖</sub>,𝑥<sub>𝑗</sub>) ≈ 0, for 𝑖≠𝑗 <font style=\"color: rgb(128,128,128);\">\\# non-collinearity otherwise [[Multicollinearity - Endogeneity of Predictors|multicollinearity]]</font>"
    ]
  ],
  "tableStyle": "width: 95.709%;"
}
```
### Resources
- [Ben Lambert's Video Lectures (31 - 60)](https://www.youtube.com/watch?v=NjTpHS5xLP8&list=PLwJRxp3blEvZyQBTTOMFRP_TDaSdly3gU&index=31)
- [Ben Lambert's Gauss-Markov Violations: Summary of Issues](https://www.youtube.com/watch?v=osl1hscP65c&list=PLwJRxp3blEvZyQBTTOMFRP_TDaSdly3gU&index=122&frags=wn&ab_channel=BenLambert)
