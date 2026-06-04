---
title: "Markov Chain Property - Ergodic (Definition #3)"
created: 2025-09-15T02:38:43.034-05:00
modified: 2026-05-15T18:26:51.497-05:00
parent: "[[Markov Chain Property - Ergodic]]"
children: []
---
based on: [https://www.youtube.com/watch?v=ZjrJpkD3o1w](https://www.youtube.com/watch?v=ZjrJpkD3o1w)
# Theorem

If (𝑋<sub>0</sub>, 𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>) is an [[Markov Chain Property - Irreducible／Irreducibility／Regular & Reducible／Reducibility|irreducible]] [[Markov Chain Property - Time Homogenous／Heterogenous|time-homogeneous]] discrete [[Markov Chains／Chain (Transition Markov／Probability／Stochastic Matrix) - Discrete Time Markov Chains (DTMC)|Markov chain]] with [[Markov Chain Property - Stationary／Stable／Invariant／Steady-State／Limiting／Marginal Probability Distribution Vector|stationary distribution]] 𝜋, then:
- $\frac{1}{n} \sum_{i=1}^n f(X_i) \xrightarrow[n \rightarrow ∞]{} E[f(x)]$

where:
- 𝑋 \~ 𝜋
- $f: 𝒳 \rightarrow ℝ \;\;\; \text{and is bounded}$

Further, if the Markov chain is aperiodic, then:
- $P(X_n=x|X_0=x_0) \xrightarrow[n \rightarrow ∞]{} \pi(x) \;\;\;\;\;\; \forall x, x_0 \in 𝒳$
