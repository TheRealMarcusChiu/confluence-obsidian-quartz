---
title: "Multinomial Distribution"
created: 2021-09-13T05:27:34.569-05:00
modified: 2026-05-23T11:27:40.515-05:00
parent: "[[Probability Distribution - Discrete Functions／Models (Probability Mass Functions)]]"
children: []
---
###### Multinomial Distribution
````excerpt
- is a generalization of the [[Binomial Distribution|binomial distribution]]
- The [[Binomial Distribution|binomial distribution]] is a special case of the multinomial when 𝑘 = 2
- is the number of successes for an event 𝑖 in a sequence of 𝑛 independent [[Multinoulli／Categorical Distribution - Generalized Bernoulli Distribution|multinoulli trials]]
````
^excerpt

# Multinomial Distribution - Definition
- $P(n_1,n_2,...,n_k|n) = \frac{n!}{(n_1!)(n_2!)...(n_k!)}p_1^{n_1}p_2^{n_2}...p_k^{n_k}$

Its parameters are:
- 𝑛 - the fixed total number of [[Multinoulli／Categorical Distribution - Generalized Bernoulli Distribution|multinoulli trials]]
- 𝑝<sub>𝑖</sub> - the fixed probability of outcome 𝑖 for each multinoulli trial
	- 𝛴<sub>1≤𝑖≤𝑘</sub>\[𝑝<sub>𝑖</sub>\] = 1
- 𝑛<sub>𝑖</sub> - is the number of times outcome 𝑖 occurs in question
	- 𝛴<sub>1≤𝑖≤𝑘</sub>\[𝑛<sub>𝑖</sub>\] = 𝑛
- Each multinoulli trial has 𝑘 outcomes

# Multinomial Distribution - Example

For the chess example:
- 𝑛 = 12 (12 games are played)
- 𝑛<sub>1</sub> = 7 (number won by Player A)
- 𝑛<sub>2</sub>= 2 (number won by Player B)
- 𝑛<sub>3</sub> = 3 (the number drawn)
- 𝑝<sub>1</sub> = 0.40 (probability Player A wins)
- 𝑝<sub>2</sub> = 0.35 (probability Player B wins)
- 𝑝<sub>3</sub> = 0.25 (probability of a draw)

Thus:
- $P(7,2,3|12) = \frac{12!}{(7!)(2!)(3!)}0.40^{7}0.35^{2}0.25^{3} = 0.0248$
