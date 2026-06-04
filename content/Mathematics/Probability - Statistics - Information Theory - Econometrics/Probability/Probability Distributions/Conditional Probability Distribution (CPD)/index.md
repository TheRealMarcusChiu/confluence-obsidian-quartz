---
title: "Conditional Probability Distribution (CPD)"
created: 2021-09-13T05:27:12.866-05:00
modified: 2021-09-13T05:27:12.866-05:00
parent: "[[Probability Distributions]]"
children:
  - "[[CPD - Representations]]"
---
````excerpt
<strong>[[Conditional Probability Distribution (CPD)|conditional probability distribution]] (CPD) </strong>of event 𝑋 given event 𝑌 is the [[Probability Distributions|probability distribution]] that 𝑋 occurs when 𝑌 is known to occur (denoted as 𝐏(𝑋|𝑌=𝑦)), 𝑋 and 𝑌 are [[Joint Probability Distribution (Compound - Bivariate - Multivariate - Full)|jointly distributed]] random variables
````
^excerpt

### CPD - Relation to Other Probability Distributions & Baye's Theorem

see: [[Bayes' Rule／Theorem／Law (Prior - Posterior - Distribution - Likelihood - Probability of Evidence)|Baye's Theorem]]
- 𝐏(𝑋|𝑌=𝑦) = 𝐏(𝑋,𝑌=𝑦) / 𝐏(𝑌=𝑦)

where:
- 𝐏(𝑋|𝑌=𝑦) - conditional probability
- 𝐏(𝑋,𝑌=𝑦) - unconditional joint probility
- 𝐏(𝑌=𝑦) - unconditional marginal probability

### CPD - Continuous vs Discrete
- a<strong> Continuous CPD </strong>is called a<strong> Conditional Probability Density Function</strong> which is a type of [[Probability Distribution - Continuous Functions／Models (Probability Density Functions)|probability density function]]
- a <strong><strong>Discrete CPD</strong></strong> is called a<strong> Conditional Probability Mass Function</strong> which is a type of [[Probability Distribution - Discrete Functions／Models (Probability Mass Functions)|probability mass function]]

### CPD - 1-Dimensional (Univariate) vs Multi-Dimensional (Multivariate/Joint)

1-Dimensional/Univariate Conditional Probability Distribution
- 𝐏(𝑋<sub>1</sub>=𝑥<sub>1</sub> | 𝐸<sub>1</sub>=𝑒<sub>1</sub>, ..., 𝐸<sub>𝑛</sub>=𝑒<sub>𝑛</sub>)

𝑛-Dimensional/Multivariate/Joint Conditional Probability Distribution
- 𝐏(𝑋<sub>1</sub>=𝑥<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>=𝑥<sub>𝑛</sub> | 𝐸<sub>1</sub>=𝑒<sub>1</sub>, ..., 𝐸<sub>𝑛</sub>=𝑒<sub>𝑛</sub>)

### CPD - Relation to Independence
Random variables 𝑋 and 𝑌 are [[Probability Independence (Marginal Independence - Conditional Independence)|independent]] if and only if the conditional distribution of 𝑋 given 𝑌 is, for all possible realizations of 𝑌, equal to the [[Unconditional Probability Distribution|unconditional distribution]] of 𝑋

for discrete random variables
- 𝐏(𝑋=𝑥|𝑌=𝑦) = 𝐏(𝑋=𝑥) <font style="color: rgb(128,128,128);">\# for all possible 𝑥 and 𝑦  with 𝑃(𝑌=𝑦) \> 0</font>

for continuous random variables
- 𝑓<sub>𝑋</sub>(𝑥|𝑌=𝑦) = 𝑓<sub>𝑋</sub>(𝑥) <font style="color: rgb(128,128,128);">\# for all possible 𝑥 and 𝑦 with 𝑓<sub>𝑌</sub>(𝑦) \> 0</font>

### CPD - Relation to Conditional Independence

if the random variables 𝑋 and 𝑌 are [[Probability Independence (Marginal Independence - Conditional Independence)|conditionally independent]] given 𝑍, then:
- 𝐏(𝑋|𝑌,𝑍) = 𝐏(𝑋|𝑍)

discrete vs continuous:
- for discrete random variables
  𝐏(𝑋=𝑥|𝑌=𝑦,𝑍=𝑧) = 𝐏(𝑋=𝑥|𝑍=𝑧) for all possible values: 𝑥, 𝑦, and 𝑧
- for continuous random variables
- 𝑓<sub>𝑋</sub>(𝑥|𝑌=𝑦,𝑍=𝑧) = 𝑓<sub>𝑋</sub>(𝑥|𝑍=𝑧) for all possible values: 𝑥, 𝑦 and 𝑧

### CPD - Representations
- [[Conditional Probability Table (CPT)]]- multiple CPTs are used in [[Bayesian Networks (BN)|Bayesian Networks]]
- [[Tree Conditional Probability Distribution (CPD)|Tree-CPD]] - can be used to represent a full CPT or simpler models
- Logistic-Based CPD
- [[Noisy-OR Model as CPD|Noisy-OR CPD]]
- [[Deterministic CPD]]
- Rule-Based CPD
- Nueral-Network CPD

other:
- [[Hybrid Bayesian Networks (Discrete & Continuous Variables)|Mixing Discrete & Continuous Variables]] - also used in Bayesian Networks
