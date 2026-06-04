---
title: "RL Chapter 10 (On-Policy Control with Approximation)"
created: 2025-12-11T13:59:22.033-06:00
modified: 2025-12-11T23:35:24.007-06:00
parent: "[[RL Chapters]]"
children: []
---
parametric approximation of 𝑞̂(𝑠,𝑎,𝐰) ≈ 𝑞(𝑠,𝑎)
# Episodic Semi-Gradient Control

general gradient-descent update for action-value prediction is:
- $𝐰_{t+1} = 𝐰_{t} + \alpha [U_t - \hat{q}(S_t,A_t,𝐰_{t})] \nabla \hat{q}(S_t,A_t,𝐰_{t})$

###### Episodic Semi-Gradient One-Step SARSA

One-Step SARSA update:
- $𝐰_{t+1} = 𝐰_{t} + \alpha [R_{t+1} + \gamma \hat{q}(S_{t+1},A_{t+1},𝐰_t) - \hat{q}(S_t,A_t,𝐰_{t})] \nabla \hat{q}(S_t,A_t,𝐰_{t})$

Episodic Semi-Gradient SARSA for Estimating 𝑞̂ ≈ 𝑞<sub>\*</sub>:
```
Input: a differentiable action-value function parameterization 𝑞̂ : SxAxℝ^d  -> ℝ
Algorithm parameters: step size 𝛼>0, small 𝜀>0
Initialize value-function weights w∊ℝ^d arbitrarily (e.g., w=0)

Loop for each episode:
	S, A = initial state and action of episode (e.g., 𝜀-greedy)
	Loop for each step of episode:
		Take action A, observe R, S'
		If S' is terminal:
			w = w + 𝛼 [R - 𝑞̂(S,A,w)] ∇𝑞̂(S,A,w)
			go to next episode
		Choose A' as a function of 𝑞̂(S',,w) e.g. ??-greedy
		w = w + 𝛼 [R + ??𝑞̂(S',A',w) - ??̂(S,A,w)] ∇𝑞̂(S,A,w)
		S = S'
		A = A'
```
# Semi-Gradient n-step SARSA

n-step return:
- $G_{t:t+n} = R_{t+1} + \gamma R_{t+2} + \gamma^2 R_{t+3} + ... + \gamma^{n-1} R_{t+n} + \gamma^n \hat{q}(S_{t+n},A_{t+n},𝐰_{t+n-1})$

the n-step update equation is:
- $𝐰_{t+n} = 𝐰_{t+n-1} + \alpha [G_{t:t+n} - \hat{q}(S_t,A_t,𝐰_{t+n-1})] \nabla \hat{q}(S_t,A_t,𝐰_{t+n-1})$

Episodic semi-gradient n-step SARSA for estimating 𝑞̂ ≈ 𝑞<sub>\*</sub> or 𝑞<sub>𝜋</sub>:
```
Input: a differentiable action-value function parameterization 𝑞̂ : SxAxℝ^d  -> ℝ
Input: a policy 𝜋 (if estimating q_𝜋)
Algorithm parameters: step size 𝛼>0, small 𝜀>0, positive integer 𝑛
Initialize value-function weights w∊ℝ^d arbitrarily (e.g., w=0)
All store and access operations (St, At, and Rt) can take their index mod n + 1

Loop for each episode:
	Initialize and store S0 != terminal
	Select and store an action A0 ~ 𝜋(·|S0) or "𝜀-greedy wrt 𝑞̂(S0,·,w)
	T = infinity
	Loop for t = 0, 1, 2, ...:
		If t < T , then:
			Take action At
			Observe and store the next reward as Rt+1 and the next state as St+1
			If St+1 is terminal, then:
				T = t + 1
			else:
				Select and store At+1 ~ 𝜋(·|St+1) or "𝜀-greedy wrt 𝑞̂(S0,·,w)
		𝜏 = t - n + 1 (𝜏 is the time whose estimate is being updated)
		If 𝜏 >= 0:
			G = \sum_{i=𝜏+1}^{min(𝜏+n,T)} 𝛾^{i-𝜏-1} R_i		
		If 𝜏 + n < T
			G = G + 𝛾^n 𝑞̂(S_{𝜏+n},A_{𝜏+n},w)
		w = w + 𝛼 [G - 𝑞̂(S_??,A_𝜏,w)] \nabla 𝑞̂(S_𝜏,A_𝜏,w)
	until 𝜏 = T - 1
```
# Average Reward: A New Problem Setting for Continuing Tasks
![[RL Chapter 10 (On-Policy Control with Approximation)/1.png|600]]
###### Differential semi-gradient SARSA for estimating 𝑞̂ ≈ 𝑞<sub>\*</sub>:

One-Step SARSA update:
- $𝐰_{t+1} = 𝐰_{t} + \alpha \delta_t \nabla \hat{q}(S_t,A_t,𝐰_{t})$
- $𝐰_{t+1} = 𝐰_{t} + \alpha [R_{t+1} - \overline{R}_t + \gamma \hat{q}(S_{t+1},A_{t+1},𝐰_t) - \hat{q}(S_t,A_t,𝐰_{t})] \nabla \hat{q}(S_t,A_t,𝐰_{t})$
```
Input: a differentiable action-value function parameterization 𝑞̂ : SxAxℝ^d  -> ℝ
Algorithm parameters: step sizes 𝛼,𝛽 > 0
Initialize value-function weights w∊ℝ^d arbitrarily (e.g., w = 0)
Initialize average reward estimate \overline{R}∊ℝ arbitrarily (e.g. \overline{R} = 0)

Initialize state S, and action A
Loop for each step:
	Take action A, observe R, S0
	Choose A' as a function of 𝑞̂(S',,w) (e.g., 𝜀-greedy)
	𝛿 = R - \overline{R} + 𝑞̂(S',A',w) - 𝑞̂(S,A,w)
	\overline{R} = \overline{R} + 𝛽𝛿
	w = w + 𝛼𝛿 ∇𝑞̂(S,A,w)
	S = S'
	A = A'
```
# Deprecating the Discounted Setting

TO READ
# Differential Semi-Gradient n-step SARSA

generalize n-step return to its differential form:
- $G_{t:t+n} = R_{t+1} - \overline{R}_{t+n-1} + ... + R_{t+n} - \overline{R}_{t+n-1} + \hat{q}(S_{t+n},A_{t+n},w_{t+n-1})$

where:
- $\overline{R} \text{ is an estimate of average reward } r(\pi)$

the n-step TD error is then:
- $\delta_t = G_{t:t+n} - \hat{q}(S_t,A_t,w)$

Differential semi-gradient n-step SARSA for estimating 𝑞̂ ≈ 𝑞<sub>\*</sub>or 𝑞<sub>𝜋</sub>:
```
Input:
- a differentiable action-value function parameterization 𝑞̂ : SxAxℝ^d  -> ℝ
- a policy 𝜋
Initialize
- value-function weights w∊ℝ^d arbitrarily (e.g., w = 0)
- average reward estimate \overline{R}∊ℝ arbitrarily (e.g. \overline{R} = 0)
Algorithm parameters: step size 𝛼,𝛽 > 0, a positive integer 𝑛
All store and access operations (St, At, and Rt) can take their index mod n+1

Initialize state S0 and action A0
Loop for each step, t = 0, 1, 2, ...:
	Take action At
	observe and store R_{t+1} S_{t+1}
	Select and store A_{t+1} ~ 𝜋(|S_{t+1}) or 𝜀-greedy wrt 𝑞̂(S_{t+1},,w)
	𝜏 = 𝑡 - 𝑛 + 1
	if 𝜏 >= 0:
		𝛿 = \sum_{i=𝜏+1}^{𝜏+n} (R_i - \overline{R}) + 𝑞̂(S_{𝜏+n},A_{𝜏+n},w) - 𝑞̂(S_𝜏,A_𝜏,w)
	\overline{R} = \overline{R} + 𝛽𝛿
	w = w + 𝛼𝛿 ∇𝑞̂(S_𝜏,A_𝜏,w)
```
