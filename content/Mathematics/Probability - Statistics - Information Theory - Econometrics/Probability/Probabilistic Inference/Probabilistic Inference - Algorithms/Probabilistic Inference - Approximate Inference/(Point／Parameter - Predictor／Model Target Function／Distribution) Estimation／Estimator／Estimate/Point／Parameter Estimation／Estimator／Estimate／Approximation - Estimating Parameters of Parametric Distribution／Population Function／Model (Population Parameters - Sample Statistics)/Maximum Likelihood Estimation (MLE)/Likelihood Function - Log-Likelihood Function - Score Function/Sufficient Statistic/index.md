---
title: "Sufficient Statistic"
created: 2021-09-13T05:28:03.760-05:00
modified: 2021-11-06T19:37:44.562-05:00
parent: "[[Likelihood Function - Log-Likelihood Function - Score Function]]"
children: []
---
a [[Functions (Domain - Codomain - Preimage - Image - Range)|function]] 𝑓(𝐷 = {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>}) is a <strong>sufficient statistic</strong> is a type of [[Statistics - Terminology|statistic]] where the following cases are satisfied:
- 𝑓 is a function that maps <font style="color: rgb(255,102,0);">instances 𝐷 = {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>}</font> → <font style="color: rgb(255,0,255);">vector ℝ<sup>𝑘</sup></font>
- for any 2 datasets: 𝐷 and 𝐷', and any 𝜃∊𝚯 we have:
	- <font style="color: rgb(128,0,0);">𝑓(𝐷) = 𝑓(𝐷')</font> ⇒ <font style="color: rgb(0,128,0);">𝐿(𝜃|𝐷) = 𝐿(𝜃|𝐷')</font>

# Sufficient Statistic - Example

Given:
- data 𝐷 = {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>} where each 𝑋<sub>𝑖</sub>is sampled from a [[Bernoulli Distribution]]

The possible examples of <strong>sufficient statistics 𝑓(𝐷)</strong> for the [[Log-Likelihood Function - Bernoulli Distribution|likelihood of Bernoulli Distribution]] are:
- one that outputs the number of 1's in the data 𝐷
- one that outputs the number of 0's in the data 𝐷
