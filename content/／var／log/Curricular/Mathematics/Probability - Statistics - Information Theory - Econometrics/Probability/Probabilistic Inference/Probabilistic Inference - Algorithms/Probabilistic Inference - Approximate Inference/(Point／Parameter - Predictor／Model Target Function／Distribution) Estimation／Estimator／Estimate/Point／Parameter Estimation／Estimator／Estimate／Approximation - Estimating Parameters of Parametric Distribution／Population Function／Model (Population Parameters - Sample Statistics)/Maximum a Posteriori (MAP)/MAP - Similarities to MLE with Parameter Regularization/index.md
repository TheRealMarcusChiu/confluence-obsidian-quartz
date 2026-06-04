---
title: "MAP - Similarities to MLE with Parameter Regularization"
created: 2021-09-13T05:27:57.429-05:00
modified: 2021-09-13T05:27:57.429-05:00
parent: "[[Maximum a Posteriori (MAP)]]"
children: []
---
### MAP Similarities to [[Maximum Likelihood Estimation (MLE)|MLE]] with [[Regularization - Parameter Weight Decay|Parameter Regularization]]

many regularized estimation strategies, such as maximum likelihood learning regularized with weight-decay, can be interpreted as making the MAP approximation to Bayesian inference

not all regularization correspond to MAP Bayesian Inference, e.g.:
- some regularizer terms may not be the logarithm of a probability distribution
- other regularization terms depend on the data (which of course a prior probability distribution is not allowed to do)
