---
title: "Estimator - Inductive Properties (Biasedness／Unbiasedness - Consistency／Consistent - Statistic Efficiency)"
created: 2021-09-13T05:27:41.327-05:00
modified: 2023-12-24T14:49:18.809-06:00
parent: "[[(Point／Parameter - Predictor／Model Target Function／Distribution) Estimation／Estimator／Estimate]]"
children: []
---
###### Estimator (Point Estimator) Inductive Properties
- unbiasedness vs biasedness
- consistent vs inconsistent
- statistic efficiency
- linear wrt parameters

# Estimator's Unbiasedness

an estimator is unbiased iff the [[Arithmetic Mean - Average - Location - Expected Value - Expectation Operator|expectation]] of the estimator's point estimate 𝜃ˆ equals the true population parameter 𝜃
- 𝐄(𝜃ˆ) = 𝜃

# Estimator's Consistency

consistency is the behavior of an estimator as the number of training examples increases, the point estimate 𝜃ˆ converges to the true value 𝜃
- 𝑝𝑙𝑖𝑚<sub>𝑛→∞</sub> 𝜃ˆ = 𝜃 <font style="color: rgb(128,128,128);">\# consistency</font>

where:
- 𝑝𝑙𝑖𝑚<sub>𝑛</sub> - indicates convergence in probability, i.e. for any 𝜖 \> 0, \[ 𝐏(|𝜃ˆ - 𝜃| \> 𝜖) → 0 \] as \[ 𝑛 → ∞ \]

some principles that can derive consistent estimators are:
- [[Maximum Likelihood Estimation (MLE)]] - based on [[Frequentist (Statistical Inference - Inferential Statistics)|frequentist inference]]
- [[Maximum a Posteriori (MAP)|Maximum a Posteriori Estimation (MAP)]] - based on [[Bayesian (Statistical Inference - Inferential Statistics)|bayesian inference]]

# Estimator's Statistic Efficiency

![](https://www.youtube.com/watch?v=UxbY85Cm9SQ&list=PLwJRxp3blEvZyQBTTOMFRP_TDaSdly3gU&index=7)

[Ben Lambert - Unbiased & Consistency Example](https://www.youtube.com/watch?v=6i7mqDJICzQ&list=PLwJRxp3blEvZyQBTTOMFRP_TDaSdly3gU&index=9)

statistic efficiency is the behavior of an estimator's [[Standard Error (SE) - Estimated Standard Error (SEˆ)|generalization/standard error]]

two consistent estimators can differ in their statistic efficiency given a fixed number of training examples: one consistent estimator may obtain lower standard error, or equivalently, may require fewer examples to obtain a fixed level of standard error

statistical efficiency is typically studied in [[ML - Parametric vs Non-Parametric|parametric models]] where the goal is to estimate the value of a parameter 𝜃, not the value of a function
# Estimator's Training Sample Size
###### Large Number of Training Examples

a way to measure how close the estimated parameter is to the true parameter is by the Expected Mean-Squared-Error (i.e. the squared difference between the point-estimate 𝜃ˆ and the true parameter value 𝜃, where the expectation is over 𝑛 training examples)

the parametric mean-square-error decreases as 𝑛 increases, and for large 𝑛, the Cramer-Rao lower bound shows that no consistent estimator has a lower mean squared error than the [[Maximum Likelihood Estimation (MLE)|maximum likelihood estimator]]

and for these reasons (consistency and statistical efficiency), maximum likelihood is often considered the preferred estimator to use for machine learning
###### Small Number of Training Examples

when number of examples is small enough to yield overfitting behavior, regularization strategies such as [[Regularization - Parameter Weight Decay|parameter weight decay]] to obtain a biased version of ML that has less variance when training data is limited
