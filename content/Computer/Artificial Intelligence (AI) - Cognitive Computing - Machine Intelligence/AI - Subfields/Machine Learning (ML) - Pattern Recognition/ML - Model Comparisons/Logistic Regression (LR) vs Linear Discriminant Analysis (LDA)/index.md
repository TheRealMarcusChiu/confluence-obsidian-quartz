---
title: "Logistic Regression (LR) vs Linear Discriminant Analysis (LDA)"
created: 2021-08-15T22:45:14.461-05:00
modified: 2023-09-20T13:38:01.276-05:00
parent: "[[ML - Model Comparisons]]"
children: []
---
Comparing:
- [[Logistic (Logit) Regression Model]]
- [[Linear／Normal Discriminant／Discriminative Analysis (LDA／NDA)|Linear/Normal Discriminant/Discriminative Analysis (LDA/NDA)]]

Logistic regression indeed does not assume any specific shapes of densities in the space of predictor variables, but LDA does. Here are some differences between the two analyses, briefly.

<strong>Binary Logistic regression</strong> (BLR) vs <strong>Linear Discriminant analysis</strong> (with 2 groups: also known as Fisher's LDA):
- <strong>BLR</strong>: Based on [[Maximum Likelihood Estimation (MLE)|Maximum Likelihood Estimation]]. <strong>LDA</strong>: Based on [[Method of Least Mean Squared／Squares Error／Estimation／Estimator (LMS／LSE／MMSE) - Sum of Square Errors／Residuals - Regression Variance／Standard-Deviation／Error of Regression／Residuals／Estimate - Root Mean Square Deviation／Error (RMSD／E - MSE)|Least Squares Estimation]]; equivalent to [[Linear Regression (LR) Models|linear regression]] with binary predictand (coefficients are proportional and R-square = 1-Wilk's lambda)
- <strong>BLR</strong>: Estimates probability (of group membership) immediately (the predictand is itself taken as probability, observed one) and conditionally. <strong>LDA</strong>: estimates probability mediately (the predictand is viewed as a binned continuous variable, the discriminant) via a classificatory device (such as naive Bayes) which uses both conditional and marginal information.
- <strong>BLR</strong>: Not so exigent to the level of the scale and the form of the distribution in predictors. <strong>LDA</strong>: Predictors desirably interval level with multivariate normal distribution.
- <strong>BLR</strong>: No requirements about the within-group covariance matrices of the predictors. <strong>LDA</strong>: The within-group covariance matrices should be identical in population.
- <strong>BLR</strong>: The groups may have quite different 𝑛. <strong>LDA</strong>: The groups should have similar 𝑛.
- <strong>BLR</strong>: Not so sensitive to outliers. <strong>LDA</strong>: Quite sensitive to outliers.
- <strong>BLR</strong>: Younger method. <strong>LDA</strong>: Older method.
- <strong>BLR</strong>: Usually preferred, because less exigent / more robust. <strong>LDA</strong>: With all its requirements met, often classifies better than BLR (asymptotic relative efficiency 3/2 time higher then)
- <strong>BLR</strong>: categorical variables can be used as independent variables while making predictions. <strong>LDA</strong>: works when all the independent/predictor variables are continuous (not categorical) and follow a Normal distribution
- When the classes of the response variable <em>Y</em> (i.e. <em>default = “Yes”, default = “No”</em>) are well-separated, the parameter estimates for the logistic regression model are surprisingly unstable. LDA & QDA do not suffer from this problem.
- If <em>n</em> is small and the distribution of the predictors <em>X</em> is approximately normal in each of the classes, the LDA & QDA models are again more stable than the logistic regression model.
- LDA & QDA are often preferred over logistic regression when we have more than two non-ordinal response classes (i.e.: <em>stroke</em>, <em>drug overdose</em>, and <em>epileptic seizure</em>)
- Both LDA and QDA assume that the predictor variables <em>X</em> are drawn from a multivariate Gaussian (aka <em>normal</em>) distribution.
- LDA assumes equality of covariances among the predictor variables <em>X</em> across all levels of <em>Y</em>. This assumption is relaxed with the QDA model.
- LDA and QDA require the number of predictor variables (<em>p</em>) to be less than the sample size (<em>n</em>). Furthermore, it is important to keep in mind that performance will severely decline as <em>p</em> approaches <em>n</em>. A simple rule of thumb is to use LDA & QDA on data sets where n≥5×pn≥5×p
