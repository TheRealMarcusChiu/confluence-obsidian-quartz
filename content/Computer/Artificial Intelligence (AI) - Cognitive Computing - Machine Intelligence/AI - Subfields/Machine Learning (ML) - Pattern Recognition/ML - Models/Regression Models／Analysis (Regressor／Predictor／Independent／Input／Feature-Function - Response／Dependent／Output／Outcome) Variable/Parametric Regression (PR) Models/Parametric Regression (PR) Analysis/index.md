---
title: "Parametric Regression (PR) Analysis"
created: 2020-10-12T14:11:10.152-05:00
modified: 2024-09-06T11:28:04.736-05:00
parent: "[[Parametric Regression (PR) Models]]"
children:
  - "[[Interactions Effects]]"
---
parametric regression analysis
- coefficients tell you how changes in the independent variables are associated with changes in the dependent variable
- p-values tell you if these coefficients are significantly different from zero

to obtain unbiased coefficient estimates that have the minimum variance/standard-error of the sampling distribution, and to be able to trust the p-values, the model must satisfy the seven classical assumptions of OLS Linear Regression (i.e. [[Gauss-Markov Assumptions - OLS Assumptions|Gauss-Markov Assumptions]])
# p-values
- help determine whether the relationships that you observe in your sample also exist in the larger population
- p-value for each independent variable tests the null hypothesis that the variable has no correlation with the dependent variable. If there is no correlation, there is no association between the changes in the independent variable and the shifts in the dependent variable. In other words, there is insufficient evidence to conclude that there is effect at the population level
- value:
	- if the p-value for a coefficient/variable is LESS than the significance level there is SUFFICIENT evidence in sample data to:
	- if the p-value for a coefficient/variable is GREATER than the significance level there is INSUFFICIENT evidence in sample data to:
		- reject the null hypothesis for the entire population
		- conclude that a non-zero correlation exists
		- conclude that changes in the independent variable are associated with changes in the response at the population level
		- conclude that this variable is statistically significant and probably a worthwhile addition to your regression model

# regression coefficient
- the SIGN of regression coefficient signifies whether there is a positive or negative correlation between each independent variable the dependent variable
	- a POSITIVE coefficient indicates that as the value of the independent variable increases, the mean of the dependent variable tends to INCREASE
	- a NEGATIVE regression coefficient indicates that as the value of the independent variable increases, the mean of the dependent variables tends to DECREASE
- the VALUE of regression coefficient signifies how much the mean of the dependent variable changes given one-unit shift in the independent variable while holding other variables in the model constant
- the regression coefficients of statistical output are estimates of the actual population parameters

# constant coefficient
- the constant is often defined as the mean of the dependent variable when you set all of the independent variables in your model to zero
- In a purely mathematical sense, this definition is correct. Unfortunately, it’s frequently impossible to set all variables to zero because this combination can be an impossible or irrational arrangement
- the constant absorbs the bias for the regression model
	- assume that all of the predictors in your model can reasonably equal zero and you specifically collect data in that area. You should be good to interpret the constant, right? Unfortunately, the y-intercept might still be garbage
	- for example, when you leave relevant variables out of the regression model, this can produce bias in the model. Bias exists if the residuals have an overall positive or negative mean. In other words, the model tends to make predictions that are systematically too high or too low. The constant term prevents this overall bias by forcing the residual mean to equal zero. In other words, the constant absorbs the bias
- the constant forces the residuals to have zero mean
- without the constant the regression model may exhibit bias
