---
title: "Posterior Predictive Distribution - Approximation／Estimation by Sampling"
created: 2021-09-13T05:27:21.365-05:00
modified: 2021-09-13T05:27:21.365-05:00
parent: "[[Prior Predictive Distribution - Posterior Predictive Distribution]]"
children: []
---
how do we estimate the [[Prior Predictive Distribution - Posterior Predictive Distribution|posterior predictive distribution]] 𝐏(𝑋ˆ|𝑋)?

steps:
1. sample from the [[Bayes' Rule／Theorem／Law (Prior - Posterior - Distribution - Likelihood - Probability of Evidence)|posterior distribution]] 𝐏(𝜃|𝑋) to get a value 𝜃<sub>𝑖</sub>
2. sample from the sampling distribution 𝐏(𝑋ˆ|𝜃<sub>𝑖</sub>) to get a sample 𝑋ˆ<sub>𝑖</sub>

repeat steps 1 and 2 many times

draw a histogram of the 𝑋ˆ<sub>𝑖</sub>'s, and that would give us an approximation of our posterior predictive distribution

there are 2 sources of uncertainty, 1 in each step:
- we have uncertainty over the parameter value (1<sup>st</sup> step)
- we have uncertainty over the data generating process (2<sup>nd</sup> step)

### Video
![](https://www.youtube.com/watch?v=TMnXQ6G6E5Y&list=PLwJRxp3blEvZ8AKMXOy0fc0cqT61GsKCG&index=24)
