---
title: "Linear Discriminant Analysis (LDA) vs Quadratic Discriminant Analysis (QDA)"
created: 2021-08-17T21:44:15.186-05:00
modified: 2023-09-20T13:41:41.426-05:00
parent: "[[ML - Model Comparisons]]"
children: []
---
Comparing:
- [[Linear／Normal Discriminant／Discriminative Analysis (LDA／NDA)|Linear/Normal Discriminant/Discriminative Analysis (LDA/NDA)]]
- [[Quadratic Discriminant／Discriminative Analysis (QDA)|Quadratic Discriminant/Discriminative Analysis (QDA)]]

LDA is a much less flexible classifier than QDA, and so has substantially lower variance. This can potentially lead to improved prediction performance. But there is a trade-off: if LDA’s assumption that the predictor variable share a common variance across each <em>Y</em> response class is badly off, then LDA can suffer from high bias. Roughly speaking, LDA tends to be a better bet than QDA if there are relatively few training observations so reducing variance is crucial. In contrast, QDA is recommended if the training set is very large, so that the variance of the classifier is not a major concern, or if the assumption of a common covariance matrix is clearly untenable
