---
title: "Naive Bayes Model - Learning"
created: 2021-09-13T05:28:35.778-05:00
modified: 2021-09-13T05:28:35.778-05:00
parent: "[[Naive Bayes Model - Bayes Model]]"
children: []
---
- 𝑌 - set of possible classes
- 𝑋 - vector of input attributes 𝑋<sub>𝑖</sub>'s
- 𝑋<sub>𝑖</sub> - is an input attribute of 𝑋 at index 𝑖 (either discrete and/or continuous)

- 𝑦 - class value
- 𝑥 - vector of input attribute values 𝑥<sub>𝑖</sub>'s
- 𝑥<sub>𝑖</sub> - is an input attribute value of 𝑥 at index 𝑖

# Probability Rule
- 𝐏(𝑌=𝑦|𝑋=𝑥) = 𝐏(𝑌=𝑦)𝐏(𝑋=𝑥|𝑌=𝑦) / 𝐏(𝑋=𝑥)
- 𝐏(𝑌=𝑦|𝑋=𝑥) ∝ 𝐏(𝑌=𝑦)𝐏(𝑋=𝑥|𝑌=𝑦)

[[Probability Independence (Marginal Independence - Conditional Independence)|conditional independence]] states that 𝐏(𝐴𝐵|𝑌) = 𝐏(𝐴|𝐵𝑌)𝐏(𝐵|𝑌) = 𝐏(𝐴|𝑌)𝐏(𝐵|𝑌)
- 𝐏(𝑌=𝑦|𝑋=𝑥) ∝ 𝐏(𝑌=𝑦) 𝛱<sub>𝑥<sub>𝑖</sub>∊𝑋</sub>𝐏(𝑋<sub>𝑖</sub>=𝑥<sub>𝑖</sub>|𝑌=𝑦)

Therefore given input values 𝑋 we calculate 𝐏(𝑌=𝑦|𝑋=𝑥) for each 𝑦 in 𝑌, and class 𝑦 with highest probability is "assigned" to 𝑋
- 𝑌 ← 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝑦</sub> \[ 𝐏(𝑌=𝑦) 𝛱<sub>𝑥<sub>𝑖</sub>∊𝑋</sub>𝐏(𝑋<sub>𝑖</sub>=𝑥<sub>𝑖</sub>|𝑌=𝑦) \]

# Learning From Training Set
- estimate 𝐏(𝑌=𝑦) for each possible 𝑦
- estimate 𝐏(𝑋<sub>𝑖</sub>=𝑥<sub>𝑖</sub>|𝑌=𝑦) for each possible 𝑦

###### Estimating 𝐏(𝑌=𝑦)
- 𝐏(𝑌=𝑦) = 𝑐𝑜𝑢𝑛𝑡(𝑌=𝑦) / total-training-examples
- 𝐏(𝑌=𝑦) may equal 0, we should smooth it:
- 𝐏(𝑌=𝑦) = \[𝑐𝑜𝑢𝑛𝑡(𝑌=𝑦) + 𝑙\] / \[total-training-examples + (𝑙 \* 𝑛𝑢𝑚-𝑐𝑙𝑎𝑠𝑠𝑒𝑠-𝑜𝑓-𝑌)\]

###### Estimating 𝐏(𝑋<sub>𝑖</sub>=𝑥<sub>𝑖</sub>|𝑌=𝑦)

when input feature 𝑋<sub>𝑖</sub>is a discrete variable (either a [[Bernoulli Distribution|bernoulli]] or [[Multinoulli／Categorical Distribution - Generalized Bernoulli Distribution|multinoulli]])
- 𝐏(𝑋<sub>𝑖</sub>=𝑥<sub>𝑖</sub>|𝑌=𝑦) = 𝑐𝑜𝑢𝑛𝑡(𝑋<sub>𝑖</sub>=𝑥<sub>𝑖</sub>,𝑌=𝑦) / 𝑐𝑜𝑢𝑛𝑡(𝑌=𝑦)
- 𝐏(𝑋<sub>𝑖</sub>=𝑥<sub>𝑖</sub>|𝑌=𝑦) estimate may equal 0, we should smooth it:
- 𝐏(𝑋<sub>𝑖</sub>=𝑥<sub>𝑖</sub>|𝑌=𝑦) = \[𝑐𝑜𝑢𝑛𝑡(𝑋<sub>𝑖</sub>=𝑥<sub>𝑖</sub>,𝑌=𝑦) + 𝑙\] / \[𝑐𝑜𝑢𝑛𝑡(𝑌=𝑦) + (𝑙 \* 𝑛𝑢𝑚-𝑐𝑙𝑎𝑠𝑠𝑒𝑠-𝑜𝑓-𝑋<sub>𝑖</sub>)\]

when input feature 𝑋<sub>𝑖</sub>is a continuous variable having a [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|gaussian distribution]]
- 𝐏(𝑋<sub>𝑖</sub>=𝑥<sub>𝑖</sub>|𝑌=𝑦) = 1/\[𝜎√(2𝜋)\] \* 𝑒<sup>-(𝑥-𝜇)²/(2\*𝜎²)</sup>
	- 𝜇 = 1/𝑐𝑜𝑢𝑛𝑡(𝑌=𝑦) \* 𝛴 𝑥<sub>𝑖</sub> for each training example where its class 𝑌 = 𝑦
	- 𝑣𝑎𝑟𝑖𝑎𝑛𝑐𝑒 = 1/\[𝑐𝑜𝑢𝑛𝑡(𝑌=𝑦) - 1\] \* 𝛴(𝑥<sub>𝑖</sub> - 𝜇)² for each training example where its class 𝑌 = 𝑦
	- 𝜎 = √𝑣𝑎𝑟𝑖𝑎𝑛𝑐𝑒
