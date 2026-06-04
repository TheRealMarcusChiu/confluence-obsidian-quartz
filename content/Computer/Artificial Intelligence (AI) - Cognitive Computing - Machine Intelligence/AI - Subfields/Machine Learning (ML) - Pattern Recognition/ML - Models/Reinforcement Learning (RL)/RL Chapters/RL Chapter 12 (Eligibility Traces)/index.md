---
title: "RL Chapter 12 (Eligibility Traces)"
created: 2025-12-11T23:37:36.340-06:00
modified: 2025-12-12T15:17:23.359-06:00
parent: "[[RL Chapters]]"
children: []
---
Eligibility traces unify and generalize:
- MC methods
- TD methods

When TD methods are augmented with eligibility traces, they produce a family of methods spanning a spectrum that has:
- MC methods at one end (𝜆=1)
- one-step TD methods at the other (𝜆=0)
- in between are intermediate methods that are often better than either extreme method

# Eligibility Traces

For each time step 𝑡, eligibility traces are updated as:
### <strong>Accumulate Trace Form</strong> (most common)
- $e_t(s) = \begin{cases} 1 & \text{if } s = S_t \\ \lambda \gamma e_{t-1}(s) & \text{otherwise} \end{cases}$

Or, more compactly:
- $e_t(s) = \gamma\lambda e_{t-1}(s) + \mathbf{1}(s = S_t)$

Where:
- γ = discount factor
- λ = trace decay parameter (0 → short memory, 1 → long memory)
- 1(s=St)\\mathbf{1}(s = S\_t)1(s=St​) = 1 if you visited the state, 0 otherwise

Thus:
- If you just visited the state, its trace spikes to 1
- On every following step, it shrinks by factor 𝛾𝜆

# λ-return

𝜆-return is defined as:
- $G_t^\lambda = (1 - \lambda) \sum_{n=1}^{\inf} \lambda^{n-1} G_{t:t+n}$

𝜆-return (separated post-termination terms):
- $G_t^\lambda = (1 - \lambda) \sum_{n=1}^{T-t-1} \lambda^{n-1} G_{t:t+n} \;\; + \;\; \lambda^{T-t-1}G_t$

![[RL Chapter 12 (Eligibility Traces)/1.png|500]]

offline 𝜆-return algorithm:
- $𝐰_{t+1} = 𝐰\alpha [G_t^\lambda - \hat{v}(S_t,𝐰_t)] \nabla\hat{v}(S_t,𝐰_t), \text{ for } t = 0, ..., T-1$

![[RL Chapter 12 (Eligibility Traces)/2.png|600]]
# TD(λ)
- TD(λ) is literally averaging all n-step TD methods with geometric weights λ^{n−1}
- it approximates the offline λ-return algorithm

the eligibility trace vector is initiated to zero at the beginning of the episode, is incremented on each time step by the value gradient, and then fades away by 𝛾𝜆:
- $𝐳_{-1} = 0$
- $𝐳_{t} = \gamma \lambda 𝐳_{t-1} + \nabla \hat{v}(S_t,𝐰_t), \text{ 0 <= t <= T}$

The TD error for state-value prediction is:
- $\delta_t = R_{t+1} + \gamma \hat{v}(S_{t+1},𝐰_t) - \hat{v}(S_t,𝐰_t)$

weight vector is updated proportional to the scalar TD error and the vector eligibility trace:
- $𝐰_{t+1} = 𝐰_t + \alpha \delta_t 𝐳_{t}$

###### Semi-Gradient TD(𝜆) for estimating 𝑣̂ \~ 𝑣<sub>𝜋</sub>:
```
Input: the policy 𝜋 to be evaluated
Input: a di↵erentiable function 𝑣̂ : Sxℝ^d -> ℝ such that 𝑣̂(terminal,·) = 0
Algorithm parameters: step size 𝛼 > 0, trace decay rate  𝜆=[0, 1]
Initialize value-function weights 𝐰 arbitrarily (e.g., 𝐰 = 0)

loop for each episode:
	initialize 𝑆
	𝐳 = 0
	loop until 𝑆 is terminal:
		choose 𝐴 ~ 𝜋(|𝑆)
		take action 𝐴, observe 𝑅,𝑆'
		𝐳 = 𝛾𝜆𝐳 + ????̂(𝑆,𝐰)
		𝛿 = 𝑅 + 𝛾𝑣̂(𝑆',𝐰) - 𝑣̂(𝑆,𝐰)
	 	𝐰 = 𝐰 + 𝛼𝛿𝐳
		𝑆 = 𝑆'
```

for values of 𝜆:
- 𝜆=0 then algorithm simplifies to TD(0)
- 𝜆=? then
- 𝜆=1 then algorithm BEHAVES like MC

# SARSA(λ)

If you use them for action-values:
- $e_t(s,a) = \gamma\lambda e_{t-1}(s,a) + \mathbf{1}(s=S_t, a=A_t)$

Update:
- $Q(s,a) \leftarrow Q(s,a) + \alpha \delta_t e_t(s,a)$
