---
title: "Probably Approximately Correct (PAC) Learning Model"
created: 2024-01-17T11:49:13.907-06:00
modified: 2024-01-21T22:41:48.636-06:00
parent: "[[Computational Learning Theory (CoLT)]]"
children: []
---
###### Probably Approximately Correct (PAC) Learning Model
````excerpt
- is a framework for the [[Mathematical Analysis|mathematical analysis]] of [[Machine Learning (ML) - Pattern Recognition|machine learning]]
- it was proposed in 1984 by [Leslie Valiant](https://en.wikipedia.org/wiki/Leslie_Valiant)
- it aims to address the challenge of building models that can generalize well to unseen data
- it defines the probability that the available training data are large enough to attain the true error rate
````
^excerpt

# PAC - Framework

In this framework, the learner receives samples and must select a generalization function (called the hypothesis) from a certain class of possible functions. The goal is that, with high probability (the "probably" part), the selected function will have low generalization error (the "approximately correct" part).

see:
- [[Chapter 2 - Empirical Risk Minimization (ERM)]]
- [[Chapter 3 - A Formal Learning Model - Probably Approximately Correct (PAC)]]

# Resources
- [https://en.wikipedia.org/wiki/Probably_approximately_correct_learning](https://en.wikipedia.org/wiki/Probably_approximately_correct_learning)
