---
title: "EM - Clustering"
created: 2021-09-13T05:27:54.260-05:00
modified: 2024-12-05T10:49:35.116-06:00
parent: "[[Expectation Maximization (EM)]]"
children: []
---
𝑥,𝑦 are vectors
###### Bayesian Formula
- 𝐏(𝑌=𝑦|𝑋=𝑥) = 𝐏(𝑋=𝑥|𝑌=𝑦)𝐏(𝑌=𝑦)/𝐏(𝑋=𝑥)

###### Law of Total Probability
- 𝐏(𝑋=𝑥) = 𝛴<sub>𝑦ᵣ∈𝑌</sub> \[𝐏(𝑋=𝑥|𝑌=𝑦ᵣ)𝐏(𝑌=𝑦ᵣ)\]

###### Mixture Components (Likelihood)
- 𝐏(𝑋=𝑥|𝑌=𝑦ᵣ)
- likelihood

###### Mixture Weights (Prior)
- 𝐏(𝑌=𝑦ᵣ)
- prior probability

###### Membership Weights (Posterior)
- membership weight of data point 𝑥ᵢ in cluster 𝑟
	- 𝑤ᵢᵣ = 𝐏(𝑌=𝑦ᵣ|𝑋=𝑥ᵢ) = 𝐏(𝑋=𝑥|𝑌=𝑦ᵣ)𝐏(𝑌=𝑦ᵣ)/𝐏(𝑋=𝑥ᵢ)
- 𝑤ᵢᵣ also called posterior probability

# Clustering - Example Gaussian Mixture Models

> [!expand]- Click here to expand...
> see: [[EM - Gaussian Mixture Models]]
>
> each mixture component, 𝐏(𝑋=𝑥|𝑌=𝑦ᵣ), can be represented as a multivariate gaussian density
> - 𝐏(𝑋=𝑥|𝑌=𝑦ᵣ) = 1/√(2<strong>𝜋</strong>𝛴𝑆ᵣ) 𝑒<sup>-(1/2)(𝑥-𝜇ᵣ)ᵀ(𝑥-𝜇ᵣ)(Σᵣ)⁻¹</sup>
>
> each class 𝑦ᵣ has its own parameters {𝜇ᵣ, 𝛴ᵣ}
> ### EM Algorithm for Gaussian Mixture Models
> ###### E-step
> - compute 𝑤ᵢᵣ for all data-points 𝑥ᵢ 1≤𝑖≤𝑁 and all mixture components 1≤𝑟≤𝐾
> - yields a 𝑁x𝐾 matrix
>
> ###### M-step
> - 𝑁ᵣ = 𝛴<sub>1≤𝑖≤𝑁</sub> 𝑤ᵢᵣ
> - for 1≤𝑟≤𝐾:
> 	- 𝐏(𝑌=𝑦ᵣ) = 𝑁ᵣ/𝑁
> 	- 𝜇ᵣ = (1/𝑁ᵣ) 𝛴<sub>1≤𝑖≤𝑁</sub> \[𝑤ᵢᵣ𝑥ᵢ\]
> 	- 𝛴ᵣ = (1/𝛮ᵣ) 𝛴<sub>1≤𝑖≤𝑁</sub> \[𝑤ᵢᵣ(𝑥ᵢ-𝜇ᵣ)ᵀ(𝑥ᵢ-𝜇ᵣ)\]
