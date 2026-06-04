---
title: "LR - Model Building"
created: 2020-04-24T14:52:03.492-05:00
modified: 2021-12-21T04:05:43.329-06:00
parent: "[[Linear Regression (LR) Models]]"
children:
  - "[[LR - Comparing 2 Models (Extra Sum of Squares & Partial F-Test Statistic)]]"
  - "[[LR - Predictor Variable Selection (Stepwise Selection & Backward Elimination)]]"
  - "[[LR - Ramsey RESET Test for Functional Misspecification]]"
---
moving from [[Univariate／Single-Variable／Simple Linear Regression Models|Univariate/Single-Variable/Simple Linear Regression Models]] to [[Multivariate／Multiple Linear Regression Models|Multivariate/Multiple Linear Regression Models]] opens an almost unlimited opportunity for us to improve prediction by adding more and more predictor variables 𝑿 into our model. On the other hand, overfitting a model leads to a low prediction power. Moreover, it will often result in large variances 𝜎<sup>2</sup>(𝑏<sub>𝑖</sub>) and therefore, unstable regression estimates.

Then, how can we build a model with the right, optimal set of predictors ⊆𝑿 that will give us a good, accurate fit?
# Methods
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
