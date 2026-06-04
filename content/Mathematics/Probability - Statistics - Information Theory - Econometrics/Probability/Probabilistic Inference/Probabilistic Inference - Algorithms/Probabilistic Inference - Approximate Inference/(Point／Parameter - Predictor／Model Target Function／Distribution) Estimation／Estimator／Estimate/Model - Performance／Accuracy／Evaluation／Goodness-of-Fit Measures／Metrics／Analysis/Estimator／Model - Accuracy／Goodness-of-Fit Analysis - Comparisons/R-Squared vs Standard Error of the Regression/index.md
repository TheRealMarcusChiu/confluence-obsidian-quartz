---
title: "R-Squared vs Standard Error of the Regression"
created: 2021-09-13T05:27:42.604-05:00
modified: 2024-09-23T10:13:09.325-05:00
parent: "[[Estimator／Model - Accuracy／Goodness-of-Fit Analysis - Comparisons]]"
children: []
---
```merge-table
{
  "rows": [
    [
      {
        "content": "[[Method of Least Mean Squared／Squares Error／Estimation／Estimator (LMS／LSE／MMSE) - Sum of Square Errors／Residuals - Regression Variance／Standard-Deviation／Error of Regression／Residuals／Estimate - Root Mean Square Deviation／Error (RMSD／E - MSE)|Standard Error of the Regression (𝑆)]]",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "[[R² - R-Squared - Coefficient of Determination - Coefficient of Multiple Determination - Multiple R-Square|R-Squared (𝑅2)]]",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "both are key [[Model - Performance／Accuracy／Evaluation／Goodness-of-Fit Measures／Metrics／Analysis|goodness-of-fit measures]] for regression analysis\nboth of these measures give you a numeric assessment of how well a model fits the sample data",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      "- provides the absolute measure of the typical distance that the data points fall from the regression line",
      "- provides the relative measure of the percentage of the dependent variable variance that the model explains"
    ],
    [
      "- 𝑆 is in the units of the dependent variable",
      "- 𝑅<sup>2</sup> is unitless and ranges from 0 to 100%"
    ],
    [
      "- 𝑆 is valid for both [[Ordinary Least Squares (OLS) Regression|linear models]] and nonlinear models\n- 𝑆 can be used to compare the fit between linear and nonlinear models",
      "- 𝑅<sup>2</sup> is valid for only linear models\n- 𝑅<sup>2</sup> to CANNOT be used to compare the fit between linear and nonlinear models"
    ],
    [
      "- 𝑆 measures the precision of the model’s predictions\n- consequently, we can use 𝑆 to obtain a rough estimate of the 95% [[Confidence Interval (CI)|confidence interval]]. About 95% of the data points are within a range that extends from (±2\\*𝑆) from the fitted line",
      "- 𝑅<sup>2</sup> CANNOT be used for confidence intervals"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Resources
- [https://statisticsbyjim.com/regression/standard-error-regression-vs-r-squared/](https://statisticsbyjim.com/regression/standard-error-regression-vs-r-squared/)
