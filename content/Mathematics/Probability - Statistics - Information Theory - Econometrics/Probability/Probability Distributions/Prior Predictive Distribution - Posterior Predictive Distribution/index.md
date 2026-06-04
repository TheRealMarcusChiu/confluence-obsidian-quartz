---
title: "Prior Predictive Distribution - Posterior Predictive Distribution"
created: 2021-09-13T05:27:20.741-05:00
modified: 2026-05-24T14:31:43.453-05:00
parent: "[[Probability Distributions]]"
children:
  - "[[Posterior Predictive Check (PPC)]]"
  - "[[Posterior Predictive Distribution - Approximation／Estimation by Sampling]]"
  - "[[Posterior Predictive Distribution vs Posterior Distribution]]"
---
- <strong>prior predictive distribution</strong> - is the [[Probability Distributions|probability distribution]] of a data sample WITHOUT observed data sample(s)
- <strong>posterior predictive distribution</strong> - is the [[Probability Distributions|probability distribution]] of a data sample GIVEN observed data sample(s)

# Prior Predictive Distribution
a prior predictive distribution is denoted as 𝐏(𝑋) where:
- 𝑋 - data sample

continuous prior predictive distribution
- 𝐏(𝑋) = ∫<sub>𝜃∊𝜣</sub>𝐏(𝑋,𝜃)𝑑𝜃
- 𝐏(𝑋) = ∫<sub>𝜃∊𝜣</sub>𝐏(𝑋|𝜃)𝐏(𝜃)𝑑𝜃

where:
- 𝐏(𝑋|𝜃) - is the [[Likelihood Function - Log-Likelihood Function - Score Function|likelihood function]]
- 𝐏(𝜃) - is the [[Bayes' Rule／Theorem／Law (Prior - Posterior - Distribution - Likelihood - Probability of Evidence)|prior distribution]]

therefore, when we multiply a prior distribution with the likelihood function and integrate over the range of 𝜃 values, we get the prior predictive distribution
# Posterior Predictive Distribution
a posterior predictive distribution is denoted as 𝐏(𝑋ˆ|𝑋) where:
- 𝑋ˆ - new data sample
- 𝑋 - observed/given data sample

continuous posterior predictive distribution
- 𝐏(𝑋ˆ|𝑋) = ∫<sub>𝜃∊𝜣</sub>𝐏(𝑋ˆ,𝜃|𝑋)𝑑𝜃
- 𝐏(𝑋ˆ|𝑋) = ∫<sub>𝜃∊𝜣</sub>𝐏(𝑋ˆ|𝜃,𝑋)𝐏(𝜃|𝑋)𝑑𝜃
- 𝐏(𝑋ˆ|𝑋) = ∫<sub>𝜃∊𝜣</sub>𝐏(𝑋ˆ|𝜃)𝐏(𝜃|𝑋)𝑑𝜃 <font style="color: rgb(128,128,128);">\# normally when we condition on </font><font style="color: rgb(128,128,128);">𝜃, </font><font style="color: rgb(128,128,128);">𝑋ˆ is</font> [[Probability Independence (Marginal Independence - Conditional Independence)|conditionally independent]]<font style="color: rgb(128,128,128);"> to 𝑋 given 𝜃</font>

where:
- 𝐏(𝜃|𝑋) - is the [[Bayes' Rule／Theorem／Law (Prior - Posterior - Distribution - Likelihood - Probability of Evidence)|posterior distribution]] (difference between: [[Posterior Predictive Distribution vs Posterior Distribution]])
- 𝐏(𝑋ˆ|𝜃) - is the [[Likelihood Function - Log-Likelihood Function - Score Function|likelihood function]]

therefore, when we multiply a [[Bayes' Rule／Theorem／Law (Prior - Posterior - Distribution - Likelihood - Probability of Evidence)|posterior distribution]] with the [[Likelihood Function - Log-Likelihood Function - Score Function|likelihood function]] and integrate over the range of 𝜃 values, we get the posterior predictive distribution
# Prior/Posterior Predictive Distributions - Video

![](https://www.youtube.com/watch?v=R9NQY2Hyl14)
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
