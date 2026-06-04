---
title: "Log-Linear Model - Log-Level Model - Structured Logistic Regression"
created: 2021-09-13T05:26:52.198-05:00
modified: 2023-06-04T09:40:40.065-05:00
parent: "[[MN／MRF - Variants (Gibbs Distribution)]]"
children: []
---
###### Log-Linear Model - Log-Level Model - Structured Logistic Regression
````excerpt
- 𝑙𝑜𝑔(𝑦) = 𝜃𝑥 <font style="color: rgb(128,128,128);">\# one UNIT change in 𝑥 leads to 100\*𝜃 PERCENT change in 𝑦 [[(Level／Linear／Log-Level／Linear／Log) Regression Model|(Level-Level/Log-Linear/Linear-Log/Log-Log)]]</font>
- can be used as a [[ML - Generative／Joint vs Discriminative／Conditional Models|generative model]], a different way of representing [[Markov Networks／Nets - Markov Random Fields (MRF)|Markov Networks]]
- can be used as a [[ML - Generative／Joint vs Discriminative／Conditional Models|discriminative model]], [[Conditional／Discriminative Random Fields (CRF)|Conditional Random Fields (CRF)]]
- a type of [[Features - Feature Functions - Feature Engineering - Feature-Based Models|feature-based model]], allowing non-numerical input and output by defining [[Features - Feature Functions - Feature Engineering - Feature-Based Models|feature functions]]
- a "structured" (special-case of) [[Logistic (Logit) Regression Model|logistic regression]] where 𝑘 = (𝑛 number of input values)
- can be normalized to form a [[Probability Distributions|probability distribution]] that belongs to the [[Exponential Family|exponential family]]
````
^excerpt

# Input/Output Relation
- 𝑠(𝒙,𝒚) = 𝜃<sub>0</sub> + 𝛴<sub>1≤𝑖≤𝑘</sub>\[𝜃<sub>𝑖</sub>𝑓<sub>𝑖</sub>(𝒙,𝒚)\] <font style="color: rgb(128,128,128);">\# weighted sum of 𝑘 [[Features - Feature Functions - Feature Engineering - Feature-Based Models|feature functions]]</font>
- 𝑙𝑜𝑔\[ℎ(𝒙)\] = -𝑠(𝒙,𝒚) <font style="color: rgb(128,128,128);">\# definition of log-linear model: 𝑙𝑜𝑔(𝑦) = 𝜃𝑥</font>
- ℎ(𝒙) = 𝑒<sup>-𝑠(𝒙,𝒚)</sup> <font style="color: rgb(128,128,128);">\# unnormalized distribution (derived from log-linear model)</font>
- 𝐏(𝒀=𝒚|𝒙) = 𝑒<sup>-𝑠(𝒙,𝒚)</sup> / 𝛴<sub>𝒚'∊𝒀</sub>\[𝑒<sup>-𝑠(𝒙,𝒚')</sup>\] <font style="color: rgb(128,128,128);">\# normalized distribution, probability of </font><font style="color: rgb(128,128,128);">𝒀</font><font style="color: rgb(128,128,128);">=</font><font style="color: rgb(128,128,128);">𝒚 given 𝒙 (example of [[Exponential Family]] Distributions)</font>

where:
- 𝜃<sub>𝑖</sub> - parameter coefficient
- 𝑓<sub>𝑖</sub>() - [[Features - Feature Functions - Feature Engineering - Feature-Based Models|feature function]] (an [[Indicator Functions - Characteristic Functions - Membership Functions|indicator function]] that outputs either: 0 or 1)
- input:
	- 𝒙 = {𝑥<sub>1</sub>, ..., 𝑥<sub>𝑛</sub>} - observed variables, real-valued features <font style="color: rgb(128,128,128);">\# n dimensional</font>
	- 𝒚 = {𝑦<sub>1</sub>, ..., 𝑦<sub>𝑛</sub>} - hidden variables
- output 𝑝<sub>𝑐</sub>: [[Multinoulli／Categorical Distribution - Generalized Bernoulli Distribution|Multinoulli Distribution]] <font style="color: rgb(128,128,128);">\# m dimensional</font>

# Estimating Parameter Values 𝜃
- [[Maximum Likelihood Estimation (MLE)]]
- [[Gradient Descent／Ascent Algorithms - The Method of Steepest Descent／Ascent Algorithms|Gradient Descent]]

# Smoothing
- [Log-Linear Models - Smoothing & Regularization](https://www.youtube.com/watch?v=zNCRFZNZ4zM&list=PL94TcMmnwF144_zn0aUfZnWNvZ74EmNL6&index=9)

# Resources
- [Intro with R code](https://data.library.virginia.edu/an-introduction-to-loglinear-models/)
- [Youtube Playlist](https://www.youtube.com/watch?v=IS-uxts3RaQ&list=PL94TcMmnwF144_zn0aUfZnWNvZ74EmNL6)
- [Daphne Koller - Coursera](https://www.coursera.org/lecture/probabilistic-graphical-models/log-linear-models-iuc7O)
