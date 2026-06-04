---
title: "Markov Chain Property - Stationary／Stable／Invariant／Steady-State／Limiting／Marginal Probability Distribution Vector"
created: 2021-09-13T05:27:07.005-05:00
modified: 2022-09-18T15:08:45.635-05:00
parent: "[[Markov Chains／Chain (Transition Markov／Probability／Stochastic Matrix) - Discrete Time Markov Chains (DTMC)]]"
children: []
---
given a [[Markov Chains／Chain (Transition Markov／Probability／Stochastic Matrix) - Discrete Time Markov Chains (DTMC)|Markov Chain]], a <strong>stationary distribution</strong> is a vector 𝜋 such that:
- 𝜋(𝑇-𝐼) = 0 <font style="color: rgb(128,128,128);">\# matrix-vector form</font>
- 𝜋 = 𝜋𝑇 <font style="color: rgb(128,128,128);">\# matrix-vector form</font>
- 𝜋\[𝑥'\] = 𝛴<sub>𝑥</sub>\[ 𝜋\[𝑥\] · 𝑇(𝑥 → 𝑥') \]  for all 𝑥'∊𝒳 <font style="color: rgb(128,128,128);">\# expanded form</font>

where:
- 𝜋 - is a vector that is the stationary distribution with respect to 𝑇 (𝜋 is also an [[Eigenvectors (Characteristic Vectors) - Eigenvalues (Spectrum)|eigenvector]] with eigenvalue 1 with respect to 𝑇)
- 𝑇 - is the [[Markov Chains／Chain (Transition Markov／Probability／Stochastic Matrix) - Discrete Time Markov Chains (DTMC)|state transition matrix]] (i.e. all entries are non-negative, and each row sums to 1)
- 𝐼 - is the [[Identity Matrix|identity matrix]]

# Theorems
- any Markov Chain that is [[Markov Chain Property - Ergodic|ergodic]] (i.e. both [[Markov Chain Property - Irreducible／Irreducibility／Regular & Reducible／Reducibility|irreducible]] & [[Markov Chain Property - Periodic／Periodicity & Aperiodic／Aperiodicity|aperiodic]]) always has a UNIQUE stationary distribution 𝜋
- any Markov Chain that has a stationary distribution 𝜋 also has a [[Markov Chain Property - Reversibility|reversible matrix]] 𝑅(𝑥' → 𝑥) such that:
	- 𝜋\[𝑥'\]·𝑅(𝑥' → 𝑥) = 𝜋\[𝑥\]·𝑇(𝑥 → 𝑥')

# Finding Stationary Distribution of a Markov Chain - Example

> [!expand]- Click here to expand...
> we illustrate one way of analytically obtaining the stationary distribution for a finite discrete Markov chain
>
> Assume our probability transition matrix is:
>
> > [!indent]
> ![[Markov Chain Property - Stationary／Stable／Invariant／Steady-State／Limiting／Marginal Probability Distribution Vector/transition matrix.png|140]]
>
> since every state is accessible from every other state, this Markov Chain is irreducible. Every irreducible finite state space Markov Chain has a unique stationary distribution. We can solve for 𝜋 by:
> - 𝜋 = 𝜋𝑇
> - 0 = <font style="color: rgb(128,0,0);">𝜋𝑇</font> - <font style="color: rgb(0,128,0);">𝜋</font>
>
> subject to <font style="color: rgb(0,0,255);">𝜋<sub>1</sub> + 𝜋<sub>2</sub> + 𝜋<sub>3</sub> = 1</font> (because probability distributions add up to 1)
> - 0 = <font style="color: rgb(128,0,0);">0.7𝜋<sub>1</sub> + 0.4𝜋<sub>2</sub> + 0.0𝜋<sub>3</sub></font> - <font style="color: rgb(0,128,0);">1.0𝜋<sub>1</sub></font>
> - 0 = <font style="color: rgb(128,0,0);">0.2𝜋<sub>1</sub> + 0.6𝜋<sub>2</sub> + 1.0𝜋<sub>3</sub></font> - <font style="color: rgb(0,128,0);">1.0𝜋<sub>2</sub></font>
> - 0 = <font style="color: rgb(128,0,0);">0.1𝜋<sub>1</sub> + 0.0𝜋<sub>2</sub> + 0.0𝜋<sub>3</sub></font> - <font style="color: rgb(0,128,0);">1.0𝜋<sub>3</sub></font>
> - <font style="color: rgb(0,0,255);">1 = 𝜋<sub>1</sub> + 𝜋<sub>2</sub> + 𝜋<sub>3</sub></font>
>
> we find that:
> - 𝜋<sub>1</sub> ≈ 0.54054054
> - 𝜋<sub>2</sub> ≈ 0.40540541
> - 𝜋<sub>3</sub> ≈ 0.05405405
>
> it is interesting that as 𝑛 → ∞:
>
> > [!indent]
> ![[Markov Chain Property - Stationary／Stable／Invariant／Steady-State／Limiting／Marginal Probability Distribution Vector/transition-matrix-stationary-matrix.png|301]]
# Resources
- [Coursera - Transient Probabilities](https://www.coursera.org/lecture/quantitative-model-checking/transient-probabilities-Um0Oa)

![](https://www.youtube.com/watch?v=pyRJENi6O1Q)![](https://www.youtube.com/watch?v=YIHSJR2iJrw)
