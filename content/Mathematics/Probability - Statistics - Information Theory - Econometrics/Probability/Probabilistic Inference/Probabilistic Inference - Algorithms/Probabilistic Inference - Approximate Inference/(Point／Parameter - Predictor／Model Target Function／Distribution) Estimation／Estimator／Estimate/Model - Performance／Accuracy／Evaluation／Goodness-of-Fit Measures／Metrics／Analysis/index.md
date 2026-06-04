---
title: "Model - Performance／Accuracy／Evaluation／Goodness-of-Fit Measures／Metrics／Analysis"
created: 2021-09-13T05:27:41.638-05:00
modified: 2024-09-26T12:45:00.342-05:00
parent: "[[(Point／Parameter - Predictor／Model Target Function／Distribution) Estimation／Estimator／Estimate]]"
children:
  - "[[0-1／Zero-One Loss Function]]"
  - "[[Cross-Entropy Loss Function - Log Loss Function - Negative Log Likelihood Loss Function]]"
  - "[[Estimator／Model - Accuracy／Goodness-of-Fit Analysis - Comparisons]]"
  - "[[Estimator／Model - Error Measures - Pointwise Error]]"
  - "[[Exponential Loss Function]]"
  - "[[Hinge Loss Function]]"
  - "[[Information Criterion／Criteria]]"
  - "[[Logistic Loss Function]]"
  - "[[Mean Absolute Error (MAE)]]"
  - "[[Mean Absolute Percentage Error (MAPE)]]"
  - "[[Method of Least Mean Squared／Squares Error／Estimation／Estimator (LMS／LSE／MMSE) - Sum of Square Errors／Residuals - Regression Variance／Standard-Deviation／Error of Regression／Residuals／Estimate - Root Mean Square Deviation／Error (RMSD／E - MSE)]]"
  - "[[Min-Max Accuracy]]"
  - "[[Minimum Description Length (MDL) Principle]]"
  - "[[Receiver-Operator Curve (ROC) - Area Under Curve (AUC)]]"
  - "[[Savage Loss Function]]"
  - "[[Tangent Loss Function]]"
  - "[[True／False Positive／Negative Sensitivity Recall Hit／Miss／False-Discovery／False-Omission Rate Fall-Out Threat／F1 Score Critical Success Index Accuracy Specificity Precision Predictive-Value]]"
---
###### Performance/Accuracy/Goodness-of-Fit Measures/Analysis
````excerpt
- used for measuring/determining how well a trained [[(Point／Parameter - Predictor／Model Target Function／Distribution) Estimation／Estimator／Estimate|model]] describes the [[Population Distribution|population distribution]]
- related: [[Objective Function／Criterion - Cost／Loss／Error Function - Expected Cost／Loss／Error|Objective Function/Criterion - Cost/Loss/Error Function - Expected Cost/Loss/Error]]
````
^excerpt

# Type Comparisons
```dataview
LIST
FROM ""
WHERE file.folder = [[Estimator／Model - Accuracy／Goodness-of-Fit Analysis - Comparisons]].file.folder + "/" + [[Estimator／Model - Accuracy／Goodness-of-Fit Analysis - Comparisons]].file.name
```

# Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Loss Functions",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Output Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Function",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "L1/Manhattan Loss Function",
        "bg": "#F4F5F7"
      },
      "- $ℝ$",
      "- $||y - \\hat{y}||_1$"
    ],
    [
      {
        "content": "L2/Euclidean Loss Function",
        "bg": "#F4F5F7"
      },
      "- $ℝ$",
      "- $||y - \\hat{y}||_2$"
    ],
    [
      {
        "content": "[[0-1／Zero-One Loss Function|Zero-One Loss Function]]",
        "bg": "#F4F5F7"
      },
      "- binary [[Classification Tasks／Problems|classification]] {0, 1}",
      "- $\\begin{cases} 0 & \\text{if } y = \\hat{y} \\\\ 1 & \\text{if } y ≠ \\hat{y} \\\\ \\end{cases}$"
    ],
    [
      {
        "content": "[[Cross-Entropy Loss Function - Log Loss Function - Negative Log Likelihood Loss Function|Binary Cross Entropy]]\n[[Cross-Entropy Loss Function - Log Loss Function - Negative Log Likelihood Loss Function|Negative Log Likelihood]]",
        "bg": "#F4F5F7"
      },
      "- binary [[Classification Tasks／Problems|classification]] {0, 1}",
      "- $- log \\;\\; p(y)$\n- $- \\left[ y \\; log \\; p(1) + (1 - y) \\; log \\; p(0) \\right]$\n\nwhere:\n- $p(0) = 1 - \\sigma(\\hat{z})$\n- $p(1) = \\sigma(\\hat{z})$"
    ],
    [
      {
        "content": "Cross Entropy\n[[Softmax Activation Function|Softmax Loss Function]]",
        "bg": "#F4F5F7"
      },
      "- multi-class [[Classification Tasks／Problems|classification]] {1, ..., 𝐶}",
      "- $- log \\;\\; p(y)$\n\nwhere:\n- $p(y) = softmax(y)$"
    ],
    [
      {
        "content": "[[Exponential Loss Function]]",
        "bg": "#F4F5F7"
      },
      "- binary [[Classification Tasks／Problems|classification]] {0, 1}",
      ""
    ],
    [
      {
        "content": "[[Hinge Loss Function]]",
        "bg": "#F4F5F7"
      },
      "- binary [[Classification Tasks／Problems|classification]] {0, 1}",
      ""
    ],
    [
      {
        "content": "[[Savage Loss Function]]",
        "bg": "#F4F5F7"
      },
      "- binary [[Classification Tasks／Problems|classification]] {0, 1}",
      ""
    ],
    [
      {
        "content": "[[Tangent Loss Function]]",
        "bg": "#F4F5F7"
      },
      "- binary [[Classification Tasks／Problems|classification]] {0, 1}",
      ""
    ],
    [
      {
        "content": "[[Logistic Loss Function]]",
        "bg": "#F4F5F7"
      },
      "- binary [[Classification Tasks／Problems|classification]] {0, 1}",
      ""
    ]
  ]
}
```

```merge-table
{
  "rows": [
    [
      {
        "content": "[[Receiver-Operator Curve (ROC) - Area Under Curve (AUC)|Receiver-Operator Curve (ROC)]]\n[[Receiver-Operator Curve (ROC) - Area Under Curve (AUC)|Area Under Curve (AUC)]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      ""
    ],
    [
      {
        "content": "[[True／False Positive／Negative Sensitivity Recall Hit／Miss／False-Discovery／False-Omission Rate Fall-Out Threat／F1 Score Critical Success Index Accuracy Specificity Precision Predictive-Value|True/False Positive/Negative (etc)]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "higher the better"
    ],
    [
      {
        "content": "[[R² - R-Squared - Coefficient of Determination - Coefficient of Multiple Determination - Multiple R-Square|R-Squared]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "higher the better (> 0.70) <font style=\"color: rgb(128,128,128);\">\\# valid only for [[Ordinary Least Squares (OLS) Regression|linear models]]</font>"
    ],
    [
      {
        "content": "[[Adjusted R²／R-Square (Adjusted Coefficient of Determination)|Adjusted R-Squared]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "higher the better <font style=\"color: rgb(128,128,128);\">\\# valid only for [[Ordinary Least Squares (OLS) Regression|linear models]]</font>"
    ],
    [
      {
        "content": "[[Method of Least Mean Squared／Squares Error／Estimation／Estimator (LMS／LSE／MMSE) - Sum of Square Errors／Residuals - Regression Variance／Standard-Deviation／Error of Regression／Residuals／Estimate - Root Mean Square Deviation／Error (RMSD／E - MSE)|Mean Square Error (MSE)]]\n[[Method of Least Mean Squared／Squares Error／Estimation／Estimator (LMS／LSE／MMSE) - Sum of Square Errors／Residuals - Regression Variance／Standard-Deviation／Error of Regression／Residuals／Estimate - Root Mean Square Deviation／Error (RMSD／E - MSE)|Root Mean Square Error (RMSE)]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "lower the better"
    ],
    [
      {
        "content": "[[Mean Absolute Percentage Error (MAPE)]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "lower the better"
    ],
    [
      {
        "content": "[[Mean Absolute Error (MAE)]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "lower the better"
    ],
    [
      {
        "content": "[[Standard Error (SE) - Estimated Standard Error (SEˆ)|Standard Error]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "closer to zero the better"
    ],
    [
      {
        "content": "[[f-distribution ｜ f-scores ｜ f-value ｜ f-table ｜ f-statistic|f-statistic]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "higher the better"
    ],
    [
      {
        "content": "[[t-distribution ｜ t-scores ｜ t-value ｜ t-table ｜ t-statistic ｜ student's t-distribution|t-statistic]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "higher the better (e.g. greater 1.96 for p-value to be less than 0.05)"
    ],
    [
      {
        "content": "[[Akaike's Information Criterion／Criteria (AIC)|Akaike's Information Criterion/Criteria (AIC)]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "lower the better"
    ],
    [
      {
        "content": "[[Bayesian Information Criterion／Criteria (BIC)|Bayesian Information Criterion/Criteria (BIC)]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "lower the better"
    ],
    [
      {
        "content": "Mallows's Cp",
        "header": true,
        "bg": "#F4F5F7"
      },
      "should be close to the number of predictors in the model"
    ],
    [
      {
        "content": "[[Min-Max Accuracy]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "higher the better"
    ],
    [
      {
        "content": "[[Cross-Entropy Loss Function - Log Loss Function - Negative Log Likelihood Loss Function|Cross-Entropy Cost Function]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "lower better"
    ],
    [
      {
        "content": "[[Conditional Relative Entropy]] Cost Function",
        "header": true,
        "bg": "#F4F5F7"
      },
      ""
    ]
  ]
}
```
