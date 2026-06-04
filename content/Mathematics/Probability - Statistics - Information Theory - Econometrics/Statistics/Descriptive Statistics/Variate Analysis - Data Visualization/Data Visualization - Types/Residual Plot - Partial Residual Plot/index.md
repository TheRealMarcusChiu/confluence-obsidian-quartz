---
title: "Residual Plot - Partial Residual Plot"
created: 2021-09-13T05:28:59.490-05:00
modified: 2023-08-31T15:28:53.151-05:00
parent: "[[Data Visualization - Types]]"
children: []
---
- <strong>Residual Plot</strong> is a graph that shows the [[Method of Least Mean Squared／Squares Error／Estimation／Estimator (LMS／LSE／MMSE) - Sum of Square Errors／Residuals - Regression Variance／Standard-Deviation／Error of Regression／Residuals／Estimate - Root Mean Square Deviation／Error (RMSD／E - MSE)|residuals]] on the vertical axis and the [[Ordinary Least Squares (OLS) Regression|independent-variable/regressor]] on the horizontal axis
- <strong>Partial Residual Plot</strong> is a graphical technique that attempts to show the relationship between a given independent variable and the response variable given that other independent variables are also in the model

# How It's Constructed

Given an [[(Point／Parameter - Predictor／Model Target Function／Distribution) Estimation／Estimator／Estimate|estimator/model]] ℎ(𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) that predicts an output 𝑦 when given a set of inputs {𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>}:
- 𝑦̂ = ℎ(𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) <font style="color: rgb(128,128,128);">\# e.g. a [[Ordinary Least Squares (OLS) Regression|linear regression model]] such as 𝑦̂ = 𝜃<sub>0</sub> + 𝜃<sub>1</sub>·𝑥<sub>1</sub> + ... + 𝜃<sub>𝑘</sub>·𝑥<sub>𝑘</sub></font>

Given training/sample data (𝑦<sub>𝑖</sub>, 𝑥<sub>𝑖1</sub>, ..., 𝑥<sub>𝑖𝑘</sub>), the residual of that point is the distance between 𝑦<sub>𝑖</sub>and 𝑦̂<sub>𝑖</sub>. Then we plot against one of the regressors 𝑥 for every training example in order to get the residual plot
# Use Cases

```merge-table
{
  "rows": [
    [
      "Residual plots can be used to check whether the regression model is [[Estimator - Inductive Properties (Biasedness／Unbiasedness - Consistency／Consistent - Statistic Efficiency)|unbiased or biased]]\n- If the points in a residual plot are randomly dispersed around the horizontal axis the regression model is UNBIASED and appropriate for the data\n- Otherwise, the regression model is BIASED and not appropriate for the data\n\nresidual plots can be used for checking for [[Heteroscedasticity - Homoscedasticity|heteroscedasticity or homoscedasticity]]\n- Even when the regression model is UNBIASED the residuals may not have constant variance across the horizontal axis. In this case, there is HETEROSCEDASTICITY\n- Otherwise, it is HOMOSCEDASTICITY",
      "![[Residual Plot - Partial Residual Plot/unbiased-biased-heteroscedastic-homoscedastic.png|350]]"
    ]
  ]
}
```
