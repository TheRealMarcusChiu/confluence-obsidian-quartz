---
title: "Importance Sampling (IS) vs Monte Carlo Markov Chains (MCMC)"
created: 2025-09-28T19:49:23.295-05:00
modified: 2025-09-28T19:50:56.205-05:00
parent: "[[Probabilistic Inference - Approximate Inference - Comparisons]]"
children: []
---
# [[Importance Sampling (IS)]] vs [[Markov Chain Monte Carlo (MCMC)]]
- Use MCMC when the target distribution is complex, high-dimensional, or has multiple local modes, making it difficult to sample from directly or find a suitable proposal distribution for importance sampling
- Use Importance Sampling when you have a good proposal distribution that closely resembles the target distribution, as it can be more efficient for lower-dimensional problems where the proposal distribution doesn't lead to excessively imbalanced weights
