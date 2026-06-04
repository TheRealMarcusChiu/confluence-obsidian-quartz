---
title: "Markov Chain Property - Ergodic (Definition #1)"
created: 2025-09-15T02:37:07.468-05:00
modified: 2026-05-15T18:23:55.690-05:00
parent: "[[Markov Chain Property - Ergodic]]"
children: []
---
For a [[Markov Chains／Chain (Transition Markov／Probability／Stochastic Matrix) - Discrete Time Markov Chains (DTMC)|Markov Chain]] to be ergodic, two technical conditions are required of its states and the non-zero transition probabilities; these
- [[Markov Chain Property - Irreducible／Irreducibility／Regular & Reducible／Reducibility|irreducibility]] - the first ensures that there is a sequence of transitions of non-zero probability from any state to any other
- [[Markov Chain Property - Periodic／Periodicity & Aperiodic／Aperiodicity|aperiodicity]] - ensures that the states are not partitioned into sets such that all state transitions occur cyclically from one set to another

# Properties of Ergodicity

For any Markov Chain that is ergodic, there exists a unique [[Markov Chain Property - Stationary／Stable／Invariant／Steady-State／Limiting／Marginal Probability Distribution Vector|stationary distribution]] vector 𝜋 that is the principal left [[Eigenvectors (Characteristic Vectors) - Eigenvalues (Spectrum)|eigenvector]] of [[Markov Chains／Chain (Transition Markov／Probability／Stochastic Matrix) - Discrete Time Markov Chains (DTMC)|transition matrix]] 𝑇, then:
- 𝑙𝑖𝑚𝑡→∞\[𝜂(𝑖,𝑡)/𝑡\] = 𝜋(𝑖)

where:
- 𝑡 - the number of steps
- 𝑖 - a state in the Markov chain
- 𝜂(𝑖,𝑡) - the number of visits to state 𝑖 over a period of 𝑡 steps
- 𝜋(𝑖) \> 0 - the [[Markov Chain Property - Stationary／Stable／Invariant／Steady-State／Limiting／Marginal Probability Distribution Vector|stationary distribution]] value for state 𝑖
