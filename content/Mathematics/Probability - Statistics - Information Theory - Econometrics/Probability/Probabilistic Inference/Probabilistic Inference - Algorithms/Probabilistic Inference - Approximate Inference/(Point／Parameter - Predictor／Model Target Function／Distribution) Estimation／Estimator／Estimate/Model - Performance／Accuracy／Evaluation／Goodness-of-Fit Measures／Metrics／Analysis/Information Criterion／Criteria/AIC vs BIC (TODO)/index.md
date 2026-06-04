---
title: "AIC vs BIC (TODO)"
created: 2023-10-23T15:10:05.698-05:00
modified: 2024-09-03T22:36:56.701-05:00
parent: "[[Information Criterion／Criteria]]"
children: []
---
# [[Akaike's Information Criterion／Criteria (AIC)|Akaike's Information Criteria]] vs [[Bayesian Information Criterion／Criteria (BIC)|Bayesian Information Criteria]]
- AIC tries to select the model that most adequately describes an unknown, high dimensional reality. This means that reality is never in the set of candidate models that are being considered
- BIC tries to find the TRUE model among the set of candidates. I find it quite odd the assumption that reality is instantiated in one of the models that the researchers built along the way. This is a real issue for BIC

TODO
- AIC is equivalent to [[Cross-Validation - K-Fold Cross-Validation|K-fold cross-validation]]
- BIC is equivalent to [[Leave-One-Out Cross-Validation|leave-one-out cross-validation]]

Still, both theorems hold only in case of [[Linear Regression (LR) Models|linear regression]]
- AIC is best for prediction as it is asymptotically equivalent to cross-validation
- BIC is best for explanation as it allows consistent estimation of the underlying data generating process

AIC=LOO and BIC=K-fold where K is a complicated function of the sample size
