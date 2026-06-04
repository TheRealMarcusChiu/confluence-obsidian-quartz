---
title: "Conditional Bayesian Networks"
created: 2021-09-13T05:26:44.623-05:00
modified: 2021-09-13T05:26:44.623-05:00
parent: "[[BN - Variants]]"
children: []
---
<strong>Conditional Bayesian Network</strong> is a [[Bayesian Networks (BN)|Bayesian Network]] with 3 types of variables:
- 𝑿 input variables - always observed, no parents
- 𝒀 output variables -
- 𝒁 encapsulated variables -

𝐏(𝒀,𝒁|𝑿) = ∏<sub>𝑊∊𝒀∪𝒁</sub> 𝐏(𝑊|𝑝𝑎𝑟𝑒𝑛𝑡𝑠(𝑊))

a [[Conditional Probability Distribution (CPD)]] is an <strong>Encapsulated CPD</strong> if it can be represented by a <strong>Conditional Bayesian Network</strong>
