---
title: "Generalized Least Squares (GLS)"
created: 2021-09-13T05:27:47.388-05:00
modified: 2021-12-20T15:03:21.339-06:00
parent: "[[Linear Least Squares (LLS)]]"
children:
  - "[[Feasible Generalized Least Squares (fGLS) - For Correcting Heteroscedasticity]]"
  - "[[Feasible Generalized Least Squares (fGLS) - For Correcting Serially／Auto Correlated Errors]]"
  - "[[Weighted Least Squares (WLS)]]"
---
###### Generalized Least Squares (GLS)
- is a technique of [[Point／Parameter Estimation／Estimator／Estimate／Approximation - Estimating Parameters of Parametric Distribution／Population Function／Model (Population Parameters - Sample Statistics)|parameter estimation]] that estimates the unknown [[Statistics - Terminology|parameters]] of a [[Ordinary Least Squares (OLS) Regression|linear regression model]] in cases where [[Ordinary Least Squares (OLS)|ordinary least squares (OLS)]] can be statistically [inefficient](https://en.wikipedia.org/wiki/Efficiency_(statistics)), no longer [[LLS - Comparisons (OLS vs WLS vs GLS) - Best Linear Unbiased Estimator (BLUE) - Minimum-Variance Unbiased Estimator (MVUE)|BLUE]], and even give misleading [inferences](https://en.wikipedia.org/wiki/Statistical_inference)
- these cases arise when there is:
	- [[Autocorrelation - Autocovariance - Auto／Serial Correlation／Covariance Function|auto-correlation]] between the residuals/errors
	- [[Heteroscedasticity - Homoscedasticity|heteroscedasticity]] - [[Pearson's Correlation Coefficient (R)|correlation]] between the [[Method of Least Mean Squared／Squares Error／Estimation／Estimator (LMS／LSE／MMSE) - Sum of Square Errors／Residuals - Regression Variance／Standard-Deviation／Error of Regression／Residuals／Estimate - Root Mean Square Deviation／Error (RMSD／E - MSE)|residual/error]] and the regressors within the regression model

# GLS - Resources
- [Ben Lambert's Video Lectures](https://www.youtube.com/watch?v=wCJ8I-MtJdQ&list=PLwJRxp3blEvZyQBTTOMFRP_TDaSdly3gU&index=128&ab_channel=BenLambert)

# GLS - Types

![](https://www.youtube.com/watch?v=wCJ8I-MtJdQ&list=PLwJRxp3blEvZyQBTTOMFRP_TDaSdly3gU&index=128&ab_channel=BenLambert&t=1s)

```merge-table
{
  "rows": [
    [
      {
        "content": "[[Weighted Least Squares (WLS)]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "the idea of weighting each residual differently as oppose to [[Ordinary Least Squares (OLS)]] which weights each residual equally\n\nused to correct [[Heteroscedasticity - Homoscedasticity|heteroscedasticity]], not [[Autocorrelation - Autocovariance - Auto／Serial Correlation／Covariance Function|serially/auto correlated]] errors"
    ],
    [
      {
        "content": "[[Feasible Generalized Least Squares (fGLS) - For Correcting Heteroscedasticity|fGLS - For Correcting Heteroscedasticity]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- <em>GLS</em> for correcting heteroscedasticity\n- a process of using <em>WLS</em> in practice"
    ],
    [
      {
        "content": "[[Feasible Generalized Least Squares (fGLS) - For Correcting Serially／Auto Correlated Errors|fGLS - For Correcting Serially/Auto Correlated Errors]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- <em>GLS</em> for correcting [[Autocorrelation - Autocovariance - Auto／Serial Correlation／Covariance Function|serially/auto correlated]] errors"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
