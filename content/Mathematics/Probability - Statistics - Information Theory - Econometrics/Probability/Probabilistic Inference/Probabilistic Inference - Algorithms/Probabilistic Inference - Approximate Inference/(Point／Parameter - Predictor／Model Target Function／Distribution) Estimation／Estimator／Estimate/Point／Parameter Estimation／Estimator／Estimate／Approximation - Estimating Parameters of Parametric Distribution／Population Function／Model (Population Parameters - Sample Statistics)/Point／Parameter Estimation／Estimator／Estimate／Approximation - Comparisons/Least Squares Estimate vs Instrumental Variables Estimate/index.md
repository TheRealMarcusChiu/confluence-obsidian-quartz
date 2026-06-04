---
title: "Least Squares Estimate vs Instrumental Variables Estimate"
created: 2021-09-13T05:28:09.302-05:00
modified: 2021-09-13T05:28:09.302-05:00
parent: "[[Point／Parameter Estimation／Estimator／Estimate／Approximation - Comparisons]]"
children: []
---
in the case of<strong> [[Endogenous／Endogenic Variable - Exogenous／Exogenic Variable - Endogenous vs Exogeneity|ENDOgeneity]]</strong> (<font style="color: rgb(128,128,128);">which BREAKS one of the</font> [[Gauss-Markov Assumptions - OLS Assumptions]]) and <font style="color: rgb(0,128,0);"><strong>GOOD</strong></font> instrument variables we have the following

```merge-table
{
  "rows": [
    [
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "[[Method of Least Mean Squared／Squares Error／Estimation／Estimator (LMS／LSE／MMSE) - Sum of Square Errors／Residuals - Regression Variance／Standard-Deviation／Error of Regression／Residuals／Estimate - Root Mean Square Deviation／Error (RMSD／E - MSE)|LS Estimator]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "[[Instrumental Variables (IV) Estimator|IV Estimator]]",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Estimator - Inductive Properties (Biasedness／Unbiasedness - Consistency／Consistent - Statistic Efficiency)|unbiased]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      }
    ],
    [
      {
        "content": "[[Estimator - Inductive Properties (Biasedness／Unbiasedness - Consistency／Consistent - Statistic Efficiency)|consistent]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      }
    ]
  ]
}
```

in the case of<strong> [[Endogenous／Endogenic Variable - Exogenous／Exogenic Variable - Endogenous vs Exogeneity|EXOgeneity]]</strong> (<font style="color: rgb(128,128,128);">which FOLLOWS one of the</font> [[Gauss-Markov Assumptions - OLS Assumptions]]) and <font style="color: rgb(0,128,0);"><strong>GOOD</strong></font> instrument variables we have the following

```merge-table
{
  "rows": [
    [
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "[[Method of Least Mean Squared／Squares Error／Estimation／Estimator (LMS／LSE／MMSE) - Sum of Square Errors／Residuals - Regression Variance／Standard-Deviation／Error of Regression／Residuals／Estimate - Root Mean Square Deviation／Error (RMSD／E - MSE)|LS Estimator]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "[[Instrumental Variables (IV) Estimator|IV Estimator]]",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Estimator - Inductive Properties (Biasedness／Unbiasedness - Consistency／Consistent - Statistic Efficiency)|unbiased]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\"><font style=\"color: rgb(0,128,0);\">✔</font></font>",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      }
    ],
    [
      {
        "content": "[[Estimator - Inductive Properties (Biasedness／Unbiasedness - Consistency／Consistent - Statistic Efficiency)|consistent]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\"><font style=\"color: rgb(0,128,0);\">✔</font></font>",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      }
    ]
  ]
}
```

in the case of <strong><font style="color: rgb(255,0,0);">BAD</font></strong> instrument variables then we have the following

```merge-table
{
  "rows": [
    [
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "[[Instrumental Variables (IV) Estimator|IV Estimator]]",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Estimator - Inductive Properties (Biasedness／Unbiasedness - Consistency／Consistent - Statistic Efficiency)|unbiased]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      }
    ],
    [
      {
        "content": "[[Estimator - Inductive Properties (Biasedness／Unbiasedness - Consistency／Consistent - Statistic Efficiency)|consistent]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      }
    ]
  ]
}
```
