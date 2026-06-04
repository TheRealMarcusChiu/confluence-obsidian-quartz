---
title: "Method of Least Mean Squared／Squares Error／Estimation／Estimator (LMS／LSE／MMSE) - Sum of Square Errors／Residuals - Regression Variance／Standard-Deviation／Error of Regression／Residuals／Estimate - Root Mean Square Deviation／Error (RMSD／E - MSE)"
created: 2021-09-13T05:27:43.868-05:00
modified: 2026-05-14T14:04:18.838-05:00
parent: "[[Model - Performance／Accuracy／Evaluation／Goodness-of-Fit Measures／Metrics／Analysis]]"
children:
  - "[[Linear Least Squares (LLS)]]"
  - "[[Non-Linear Least Squares (NLLS)]]"
---
```merge-table
{
  "rows": [
    [
      {
        "content": "Residual\nError Term\nDiscrepancy",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "is the [[Distance Measures／Metrics／Semi-Metrics／Functions|distance 𝑑]] between observed responses 𝑦<sub>𝑖</sub> and their fitted values 𝑦̂<sub>𝑖</sub> = 𝑓(𝒙<sub>𝑖</sub>):\n- 𝑒<sub>𝑖</sub> = 𝑑(𝑦<sub>𝑖,</sub> 𝑦̂<sub>𝑖</sub>) = 𝑑(𝑦<sub>𝑖</sub>, 𝑓(𝒙<sub>𝑖</sub>))\n\nThe distance 𝑑 is usually the [[L1／Manhattan／Rectilinear Distance Metric|L1 distance]], thus:\n- 𝑒<sub>𝑖</sub> = |𝑦<sub>𝑖</sub>- 𝑦̂<sub>𝑖</sub>| = |𝑦<sub>𝑖</sub>- 𝑓(𝒙<sub>𝑖</sub>)|\n\nerror term accounts for the variation in the dependent variable 𝑦<sub>𝑖</sub> that the independent variables 𝒙<sub>𝑖</sub> do not explain",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "Sum of Squared Errors (SSE)\nSum of Squared Residuals (SSR)\nSum of Squared Deviations (SSD)",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "is the SUM of <em>residual/error/discrepancy</em> wrt the given data {(𝑥<sub>1</sub>,𝑦<sub>1</sub>), ..., (𝑥<sub>𝑛</sub>,𝑦<sub>𝑛</sub>)}\n- 𝑆𝑆𝐸 = 𝛴<sub>1≤𝑖≤𝑛</sub>\\[𝑒<sub>𝑖</sub>\\]<sup>2</sup>",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "Variance of Regression\nVariance of Residuals\nMean Square Error/Deviation (MSE/D)\nRegression Variance",
        "header": true,
        "bg": "#F4F5F7"
      },
      "is the AVERAGE of <em>residual/error/discrepancy</em> wrt the given data {(𝑥<sub>1</sub>,𝑦<sub>1</sub>), ..., (𝑥<sub>𝑛</sub>,𝑦<sub>𝑛</sub>)}\n- 𝑀𝑆𝐸 = 𝑆𝑆𝐸 / (𝑛-𝑑)<font style=\"color: rgb(128,128,128);\"> \\# 𝑑 is the number of parameters 𝜽</font><font style=\"color: rgb(128,128,128);\"> in 𝑓(𝒙)</font>",
      {
        "content": "both can be used for [[Model - Performance／Accuracy／Evaluation／Goodness-of-Fit Measures／Metrics／Analysis|model analysis]]\n\nboth frequently used measure of the differences between values predicted by a model/estimator 𝑦̂ and the values observed 𝑦",
        "rowspan": 2
      }
    ],
    [
      {
        "content": "Standard Error/Deviation of Regression\nStandard Error/Deviation of Residuals\nStandard Error/Deviation of Estimate\nRoot Mean Square Deviation/Error (RMSD/E)\nRegression Standard Deviation/Error",
        "header": true,
        "bg": "#F4F5F7"
      },
      "is the square-root of the 𝑀𝑆𝐸\n- 𝑅𝑀𝑆𝐷 = √𝑀𝑆𝐸"
    ],
    [
      {
        "content": "Method of Least Square Error\nLeast Squares Estimation/Estimator (LSE)\nLeast Mean Squares (LMS)\nMinimum Mean Square Error (MMSE)",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "is a method used to [[Point／Parameter Estimation／Estimator／Estimate／Approximation - Estimating Parameters of Parametric Distribution／Population Function／Model (Population Parameters - Sample Statistics)|estimate model parameters]] 𝜽 by minimizing the<em> <strong>squared errors</strong></em> wrt the given data {(𝑥<sub>1</sub>,𝑦<sub>1</sub>), ..., (𝑥<sub>𝑛</sub>,𝑦<sub>𝑛</sub>)}\n- [Deriving Least Squares Estimator](https://www.youtube.com/watch?v=Hi5EJnBHFB4&list=PLwJRxp3blEvZyQBTTOMFRP_TDaSdly3gU&index=15)\n\ntypes:\n```dataview\nLIST\nFROM \"\"\nWHERE file.folder = this.file.folder + \"/\" + this.file.name\n```",
        "colspan": 2
      },
      null
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
