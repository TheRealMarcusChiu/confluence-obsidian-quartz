---
title: "Multicollinearity - Endogeneity of Predictors"
created: 2021-09-13T05:27:47.091-05:00
modified: 2021-09-13T05:27:47.091-05:00
parent: "[[Gauss-Markov Assumptions - OLS Assumptions]]"
children: []
---
<strong>Multicollinearity - Endogeneity of Predictors</strong>
- occurs when [[Regression Models／Analysis (Regressor／Predictor／Independent／Input／Feature-Function - Response／Dependent／Output／Outcome) Variable|predictor variables]] (𝑥s) in a [[Ordinary Least Squares (OLS) Regression|regression model]] are highly correlated (i.e. those predictors are [[Endogenous／Endogenic Variable - Exogenous／Exogenic Variable - Endogenous vs Exogeneity|endogenous variables]])
- breaks one of the [[Gauss-Markov Assumptions - OLS Assumptions]]
- multicollinearity affects the interpretation of [[Ordinary Least Squares (OLS) Regression|regression coefficients (𝜃s)]] and the p-values
- multicollinearity doesn’t affect the predictions or [[Estimator & Predictor／Model (Bias - Variance - Irreducible／Bayes／Noise) Error - Predictor／Model Capacity／Complexity - Generalization (Underfit - Goodfit - Overfit)|goodness-of-fit]]. If you just want to make predictions, the model with severe multicollinearity is just as good

### Multicollinearity - Types

there are two basic kinds of multicollinearity:

```merge-table
{
  "rows": [
    [
      {
        "content": "<strong>structural multicollinearity</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- this type occurs when we create a model term using other terms. In other words, it’s a byproduct of the model that we specify rather than being present in the data itself\n- for example, if you square term 𝑥 to model curvature, clearly there is a correlation between 𝑥 and 𝑥<sup>2</sup>"
    ],
    [
      {
        "content": "<strong>data multicollinearity</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- this type of multicollinearity is present in the data itself rather than being an artifact of our model\n- observational experiments are more likely to exhibit this kind of multicollinearity"
    ]
  ]
}
```
### Testing for Multicollinearity with Variance Inflation Factors (VIF)

variance inflation factor (VIF) identifies correlation between independent variables and the strength of that correlation. VIF for each independent variable. VIFs start at 1 and have no upper limit. A value of 1 indicates that there is no correlation between this independent variable and any others. VIFs between 1 and 5 suggest that there is a moderate correlation, but it is not severe enough to warrant corrective measures. VIFs greater than 5 represent critical levels of multicollinearity where the coefficients are poorly estimated, and the p-values are questionable
### Dealing With Multicollinearity

<strong>structural multicollinearity</strong> can be get rid of by centering the correlated variables to have zero mean

<strong>data multicollinearity</strong> is harder

The potential solutions include the following:
- remove some of the highly correlated independent variables
- linearly combine the independent variables, such as adding them together
- perform an analysis designed for highly correlated variables, such as [[Principal Component Analysis (PCA)|principal components analysis]] or partial least squares regression
