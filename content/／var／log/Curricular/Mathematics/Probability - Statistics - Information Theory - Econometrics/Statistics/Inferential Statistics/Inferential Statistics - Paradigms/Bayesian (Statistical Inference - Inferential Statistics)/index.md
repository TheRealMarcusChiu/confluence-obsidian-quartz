---
title: "Bayesian (Statistical Inference - Inferential Statistics)"
created: 2021-09-13T05:29:12.157-05:00
modified: 2023-09-01T13:54:42.327-05:00
parent: "[[Inferential Statistics - Paradigms]]"
children: []
---
````excerpt
[[Bayesian (Statistical Inference - Inferential Statistics)|Bayesian Inference]] uses the [[Bayes' Rule／Theorem／Law (Prior - Posterior - Distribution - Likelihood - Probability of Evidence)|posterior distribution]] to infer the values of [[Statistics - Terminology|parameters]]. Like [[Inferential Statistics|Inferential Statistics Forms]], Bayesian Inference has 3 forms:
- [[Bayesian Point Estimation]] - e.g. [[Maximum a Posteriori (MAP)|MAP]]
- Bayesian Interval Estimation - e.g. [[Credible／Credibility Interval|Credible Intervals]]
- Bayesian Hypothesis Testing -

related: [[Bayes' Rule／Theorem／Law (Prior - Posterior - Distribution - Likelihood - Probability of Evidence)|Bayes' Rule]]
````
^excerpt

# Bayesian Priors

priors can be represented in different forms such as:
- explicitly expressed in probability distributions over parameters of the model
- the direct influence of the function itself and only indirectly acting on the parameters via their effect on the function
- implicitly expressed by choosing algorithms that are biased toward choosing some class of functions over another (smoothness prior or local constancy prior)

# Bayesian Estimation/Inference Steps
- before observing the dataset, we represent knowledge of 𝜃 with a prior probability distribution 𝐏(𝜃)
- usually, the selected prior distribution has "high entropy" to reflect a high degree of uncertainty in the value of 𝜃 (e.g. uniform distribution or Gaussian distribution with high entropy)
- next, the observation of data causes the posterior to lose entropy and concentrate around a few highly likely values of the parameters

Bayesian methods typically generalize much better when limited training data is available, but typically suffer from high computational cost when the number of training examples is large
# Other
- [[Bayesian Inference vs Frequentist Inference]]

# TODO
- [https://sites.google.com/site/compbayes14/lectures/lecture-01](https://sites.google.com/site/compbayes14/lectures/lecture-01)
- [http://yudkowsky.net/rational/bayes](http://yudkowsky.net/rational/bayes)
- Think Bayes [https://greenteapress.com/wp/think-bayes/](https://greenteapress.com/wp/think-bayes/)
- Textbook - [http://www.greenteapress.com/thinkbayes/thinkbayes.pdf](http://www.greenteapress.com/thinkbayes/thinkbayes.pdf)

![](https://www.youtube.com/watch?v=yvWlpwnT1nw&list=PLwJRxp3blEvZ8AKMXOy0fc0cqT61GsKCG&index=23)
