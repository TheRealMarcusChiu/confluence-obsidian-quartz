---
title: "Probabilistic Inference - Inference by Enumeration Algorithm"
created: 2021-09-13T05:28:27.258-05:00
modified: 2021-12-11T05:12:28.337-06:00
parent: "[[Probabilistic Inference - Exact Inference]]"
children: []
---
````excerpt
> [!expand]- probabilistic inference recap
> ![[Probabilistic Inference#^excerpt]]

<strong>[[Probabilistic Inference - Inference by Enumeration Algorithm|Inference by Enumeration]]</strong>
- is a type of [[Probabilistic Inference - Exact Inference|exact inference algorithm]] that naively computes the [[Probability|probability]] of a [[Probabilistic Inference - Query／Task Types (Posterior Conditional - Prior Marginal ／ Probability of Evidence - MPE - MAP)|probabilistic query]]
- an extension of this is called the [[Probabilistic Inference - Bucket Elimination (BE) - Variable Elimination (VE)|Bucket/Variable Elimination Algorithm]] where it pushes the summation operator into the factor products

# Inference by Enumeration Algorithm - Intuition
answering [[Probabilistic Inference - Query／Task Types (Posterior Conditional - Prior Marginal ／ Probability of Evidence - MPE - MAP)|probabilistic queries]] often involves the summation/marginalization of [[Joint Probability Distribution (Compound - Bivariate - Multivariate - Full)|full joint probabilities]]

for example, given a [[Joint Probability Distribution (Compound - Bivariate - Multivariate - Full)|full joint probability]] <font style="color: rgb(128,128,128);">𝐏(𝑎, 𝑏, 𝑐)</font> the computation of a probabilistic query <font style="color: rgb(128,128,128);">𝐏(𝑎|</font><font style="color: rgb(128,128,128);">𝑏</font><font style="color: rgb(128,128,128);">)</font> is as follows
- <font style="color: rgb(128,128,128);">𝐏(𝑎|𝑏) = 𝐏(𝑎,𝑏) / 𝐏(𝑏) <font style="color: rgb(51,51,51);">\# because </font>[[Bayes' Rule／Theorem／Law (Prior - Posterior - Distribution - Likelihood - Probability of Evidence)|bayes rule]]</font>
- <font style="color: rgb(128,128,128);">𝐏(𝑎|𝑏) = \[ 𝛴<sub>𝑐∊𝐶</sub> 𝐏(𝑎,𝑏,𝑐)</font><font style="color: rgb(128,128,128);"> \] / \[ 𝛴<sub>𝑎∊𝐴</sub>𝛴<sub>𝑐∊</sub><sub>𝐶</sub><sub></sub>𝐏(𝑎,𝑏,𝑐) \] <font style="color: rgb(51,51,51);">\# because [[Marginal Probability Distribution|marginal probability rule]]</font></font>

however, storing a full joint probability in table-formis not practical because it takes 𝑂(𝑘<sup>𝑛</sup>) space, where:
- 𝑛 is the number of variables
- 𝑘 is the max cardinality of each variable

to solve this problem, we often encode the full joint probability in a [[Probabilistic Graphical Models (PGM) - Structured Probabilistic Models (SPM)|probabilistic graphical model]]. They require much less space but still retain the ability to represent the full joint probability. The only downside of is that it requires an extra step to obtain the value of the full joint probability

acquiring these values depends on the probabilistic graphical model:
- in the context of [[Bayesian Networks (BN)|Bayesian Networks]], a [[Probabilistic Inference - Inference by Enumeration Algorithm|full joint probability is the product of conditional probabilities]]
	- 𝑃(𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>) = 𝛱<sub><sub>𝑋<sub>𝑖</sub>∈𝐗</sub></sub> \[ 𝐏(𝑋<sub>𝑖</sub>|𝑝𝑎𝑟𝑒𝑛𝑡𝑠-𝑜𝑓(𝑋<sub>𝑖</sub>)) \]
- in the context of [[Markov Networks／Nets - Markov Random Fields (MRF)|Markov Networks]], a [[Markov Networks／Nets - Markov Random Fields (MRF)|full joint probability is the product of potential functions]]
	- 𝑃(𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>) = (1/𝘡) \* 𝛱<sub>𝑐∊</sub><sub><strong>𝐶 </strong></sub>\[ 𝜙<sub>𝑐</sub>(𝒙<sub>𝑐</sub>) \]

order to solve this query <font style="color: rgb(128,128,128);">𝐏(𝑎|</font><font style="color: rgb(128,128,128);">𝑏</font><font style="color: rgb(128,128,128);">) </font>we need to know the value of the full joint probability <font style="color: rgb(128,128,128);">𝐏(𝑎</font><font style="color: rgb(128,128,128);">,𝑏</font><font style="color: rgb(128,128,128);">,𝑐)</font>

Once the probability value is acquired we plug it into the equation, then we continue to enumerate through each summation <font style="color: rgb(128,128,128);">𝛴</font> and each time we calculate the full joint probability value based on the probabilistic graphical model
- <font style="color: rgb(128,128,128);">𝐏(𝑎|𝑏) = \[ 𝛴<sub>𝑐∊𝐶</sub> 𝐏(𝑎,𝑏,𝑐)</font><font style="color: rgb(128,128,128);"> \] / \[ 𝛴<sub>𝑎∊𝐴</sub>𝛴<sub>𝑐∊</sub><sub>𝐶</sub><sub></sub>𝐏(𝑎,𝑏,𝑐) \]</font>

the Inference by Enumeration algorithm simply enumerates through each summation <font style="color: rgb(128,128,128);">𝛴</font>
````
^excerpt

# Inference by Enumeration in Specific Probabilistic Graphical Models
- [[HMM - Inference By Enumeration & Variable Elimination|Hidden Markov Model]]
- [[BN - Exact Inference - Inference By Enumeration & Variable Elimination|Bayesian Networks]]
- [[MN／MRF - Exact Inference - Inference by Enumeration & Variable Elimination|Markov Networks]]
