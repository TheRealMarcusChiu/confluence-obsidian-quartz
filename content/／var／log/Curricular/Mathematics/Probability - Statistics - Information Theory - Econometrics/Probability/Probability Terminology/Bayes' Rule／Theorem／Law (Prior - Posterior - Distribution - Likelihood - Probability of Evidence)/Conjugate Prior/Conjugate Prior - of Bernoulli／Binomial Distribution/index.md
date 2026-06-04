---
title: "Conjugate Prior - of Bernoulli／Binomial Distribution"
created: 2021-09-13T05:28:33.233-05:00
modified: 2021-09-13T05:28:33.233-05:00
parent: "[[Conjugate Prior]]"
children: []
---
for example, in the [[Bernoulli Distribution|bernoulli distribution]] case:
- likelihood
	- 𝐏(𝑋|𝜃,𝑀=𝑏𝑒𝑟𝑛𝑜𝑢𝑙𝑙𝑖) ∝ 𝜃<sup>𝑧</sup>(1-𝜃)<sup>𝑛-𝑧</sup>
	- 𝐏(𝑋|𝜃,𝑀=𝑏𝑒𝑟𝑛𝑜𝑢𝑙𝑙𝑖) ∝ [[Beta Distribution|Beta(𝑧, 𝑛-𝑧) Distribution]]
- prior
	- 𝐏(𝜃|𝑀=𝑏𝑒𝑟𝑛𝑜𝑢𝑙𝑙𝑖) ∝ 𝜃<sup>𝛼-1</sup>(1-𝜃)<sup>β-1</sup>
	- 𝐏(𝜃|𝑀=𝑏𝑒𝑟𝑛𝑜𝑢𝑙𝑙𝑖) ∝ [[Beta Distribution|Beta(𝛼, β) Distribution]]
- posterior = likelihood \* prior:
	- 𝐏(𝜃|𝑋,𝑀=𝑏𝑒𝑟𝑛𝑜𝑢𝑙𝑙𝑖) ∝ 𝐏(𝑋|𝜃,𝑀=𝑏𝑒𝑟𝑛𝑜𝑢𝑙𝑙𝑖) 𝐏(𝜃|𝑀=𝑏𝑒𝑟𝑛𝑜𝑢𝑙𝑙𝑖)
	- 𝐏(𝜃|𝑋,𝑀=𝑏𝑒𝑟𝑛𝑜𝑢𝑙𝑙𝑖) ∝ 𝜃<sup>𝑧</sup>(1-𝜃)<sup>𝑛-𝑧</sup>𝜃<sup>𝛼-1</sup>(1-𝜃)<sup>β-1</sup>
	- 𝐏(𝜃|𝑋,𝑀=𝑏𝑒𝑟𝑛𝑜𝑢𝑙𝑙𝑖) ∝ 𝜃<sup>𝑧+𝛼-1</sup>(1-𝜃)<sup>𝑛-𝑧+β-1</sup>
	- 𝐏(𝜃|𝑋,𝑀=𝑏𝑒𝑟𝑛𝑜𝑢𝑙𝑙𝑖) ∝ [[Beta Distribution|Beta(𝑧+𝛼, 𝑛-𝑧+β) Distribution]]

prior 𝐏(𝜃|𝑀=𝑏𝑒𝑟𝑛𝑜𝑢𝑙𝑙𝑖) is the conjugate of the likelihood function, because the posterior has the same distribution as the prior
