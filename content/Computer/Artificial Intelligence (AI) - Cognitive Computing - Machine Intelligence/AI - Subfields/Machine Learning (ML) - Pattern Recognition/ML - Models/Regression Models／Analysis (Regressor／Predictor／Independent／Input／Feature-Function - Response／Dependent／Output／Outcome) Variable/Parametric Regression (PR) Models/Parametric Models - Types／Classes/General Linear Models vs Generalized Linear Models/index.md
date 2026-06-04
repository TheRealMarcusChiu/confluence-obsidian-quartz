---
title: "General Linear Models vs Generalized Linear Models"
created: 2020-08-23T15:16:32.084-05:00
modified: 2023-09-21T15:01:09.219-05:00
parent: "[[Parametric Models - Types／Classes]]"
children:
  - "[[General Linear Models - General Multivariate Regression Models]]"
  - "[[Generalized Linear Models (GLiM／GLM)]]"
---
# General Linear Models vs Generalized Linear Models

```merge-table
{
  "rows": [
    [
      {
        "content": "###### [[General Linear Models - General Multivariate Regression Models|General Linear Models]]",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "<strong>[[Generalized Linear Models (GLiM／GLM)|Generalized Linear Models]]</strong>",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      "Is a type of [[Generalized Linear Models (GLiM／GLM)|Generalized Linear Model]], whose [[Method of Least Mean Squared／Squares Error／Estimation／Estimator (LMS／LSE／MMSE) - Sum of Square Errors／Residuals - Regression Variance／Standard-Deviation／Error of Regression／Residuals／Estimate - Root Mean Square Deviation／Error (RMSD／E - MSE)|residual/errors]] are [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|normally distributed]]",
      "Not all dependent variables 𝑦 can result in residuals that are normally distributed (e.g. count variables and categorical variables). But it turns out that as long as the errors follow a distribution from the [[Exponential Family|exponential family]], we can still fit a model."
    ],
    [
      "Some general linear models:\n- [[Linear Regression (LR) Models]]\n\t- [[Ordinary Least Squares (OLS) Regression|Ordinary Least Squares Regression (OLS)]]\n\t- [[Ridge Regression]]\n\t- etc\n- [[Analysis of Variance (ANOVA)|ANOVA]]\n- ANCOVA\n\nIn all of these models, there are the defining features:\n1. [[Method of Least Mean Squared／Squares Error／Estimation／Estimator (LMS／LSE／MMSE) - Sum of Square Errors／Residuals - Regression Variance／Standard-Deviation／Error of Regression／Residuals／Estimate - Root Mean Square Deviation／Error (RMSD／E - MSE)|residuals/errors]] are [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|normally distributed]]\n2. model parameters (e.g. regression coefficients 𝜽, means, [[Method of Least Mean Squared／Squares Error／Estimation／Estimator (LMS／LSE／MMSE) - Sum of Square Errors／Residuals - Regression Variance／Standard-Deviation／Error of Regression／Residuals／Estimate - Root Mean Square Deviation／Error (RMSD／E - MSE)|residual variance]]) are estimated using a technique called [[Linear Least Squares (LLS)]]",
      "Some generalized linear models:\n- [[Logistic (Logit) Regression Model|Logit Regression]]\n- [[Probit Regression Model|Probit Regression]]\n- [Poisson Regression](https://www.theanalysisfactor.com/poisson-and-negative-binomial-regression/)\n\nIn all of these models, there are the defining features:\n1. [[Method of Least Mean Squared／Squares Error／Estimation／Estimator (LMS／LSE／MMSE) - Sum of Square Errors／Residuals - Regression Variance／Standard-Deviation／Error of Regression／Residuals／Estimate - Root Mean Square Deviation／Error (RMSD／E - MSE)|residuals/errors]] come from a distribution in the [[Exponential Family|exponential family]] (you need to specify which one)\n2. [[Arithmetic Mean - Average - Location - Expected Value - Expectation Operator|expectation]] of 𝑦 has a linear form with model parameters 𝜽 only through a link function\n3. model parameters 𝜽 are estimated using [[Maximum Likelihood Estimation (MLE)|Maximum Likelihood Estimation]] (the method of [[Linear Least Squares (LLS)]] doesn’t work)"
    ],
    [
      "The latter feature contains many nice statistics that we can get from these models:\n- [[R² - R-Squared - Coefficient of Determination - Coefficient of Multiple Determination - Multiple R-Square|R-Squared]]\n- [[Method of Least Mean Squared／Squares Error／Estimation／Estimator (LMS／LSE／MMSE) - Sum of Square Errors／Residuals - Regression Variance／Standard-Deviation／Error of Regression／Residuals／Estimate - Root Mean Square Deviation／Error (RMSD／E - MSE)|MSE]]\n- Eta-Squared",
      ""
    ],
    [
      {
        "content": "- you can run a Linear Regression using either a Linear Regression or a General Linear Model procedure\n- you can run a Logistic Regression through either a Logistic Regression or a Generalized Linear Model procedure\n\nThe Logistic Procedure is just making some default assumptions about the model–for example, that the link function is a [[Power／Exponential Function - Logistic Function|logistic function]]. In the Generalized Linear Models procedure, you’d have to specify that.",
        "colspan": 2
      },
      null
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
