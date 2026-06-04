---
title: "RL Chapter 9 (On-Policy Prediction with Approximation)"
created: 2025-12-10T14:36:42.960-06:00
modified: 2025-12-10T22:43:59.761-06:00
parent: "[[RL Chapters]]"
children: []
---
# Value-Function Approximation

individual update notation:
- 𝑠 ↦ 𝑢

where:
- 𝑠 - state updated
- 𝑢 - update target

for example:

```merge-table
{
  "rows": [
    [
      "MC",
      "$S_t ↦ G_t$"
    ],
    [
      "TD(0)",
      "$S_t ↦ R_{t+1} + \\gamma \\hat{v}(S_{t+1}, w_t)$"
    ],
    [
      "n-step TD",
      "$S_t ↦ G_{t:t+n}$"
    ],
    [
      "DP policy evaluation",
      "$S_t ↦ E_\\pi[R_{t+1} + \\gamma \\hat{v}(S_{t+1},w_t)| S_t=s]$"
    ]
  ]
}
```
# Prediction Objective (Mean Squared Value Error (VE))

denoted as:
- $\overline{VE}(w) = \sum_{s \in S} \mu(s) [v_\pi(s) - \hat{v}(s,w)]^2$

where:
- $\mu(s) >= 0, \sum_s \mu(s) = 1$
- $\text{error in state } s = v_\pi(s) - \hat{v}(s,w)$
- $\hat{v}(s,w) \text{ approximate value}$
- $v_\pi(s) \text{ true value}$

# Stochastic Gradient Descent (SGD)

Stochastic gradient-descent (SGD) methods do this by adjusting the weight vector after each example by a small amount in the direction that would most reduce the error on that example:

> [!indent]
> ![[RL Chapter 9 (On-Policy Prediction with Approximation)/1.png|400]]

Gradient of 𝑓 wrt 𝑤:

> [!indent]
> ![[RL Chapter 9 (On-Policy Prediction with Approximation)/2.png|350]]

𝑣<sub>𝜋</sub>(𝑆<sub>𝑡</sub>) is usually noise corrupted, so 𝑈<sub>𝑡</sub>:
- $w_{t+1} = w_t + \alpha [U_t - \hat{v}(S_t,w_t)] \nabla \hat{v}(S_t,w_t)$

###### Gradient MC Algorithm for estimating 𝑣ˆ \~ 𝑣<sub>𝜋</sub>:
```
Input: the policy 𝜋 to be evaluated
Input: a differentiable function vˆ : S x ℝ^d -> ℝ
Algorithm parameter: step size 𝛼 > 0
Initialize value-function weights w∊ℝ^d arbitrarily (e.g., w = 0)

Loop forever (for each episode):
	Generate an episode S0, A0, R1, S1, A1, ..., RT, ST using 𝜋
	Loop for each step of episode, t = 0, 1, ..., T1:
		w = w + 𝛼 [G_t - vˆ(S_t,w)] 𝛻vˆ(S_t,w)
```
###### Semi-Gradient TD(0) for estimating 𝑣ˆ \~ 𝑣<sub>𝜋</sub>:

use the following as target:
- $U_t = R_{t+1} + \gamma \hat{v}(S_{t+1},w)$
```
Input: the policy 𝜋 to be evaluated
Input: a differentiable function vˆ : S x ℝ^d -> ℝ such that vˆ(terminal,·) = 0
Algorithm parameter: step size 𝛼 > 0
Initialize value-function weights w∊ℝ^d arbitrarily (e.g., w = 0)

Loop for each episode:
	Initialize S
	Loop until S is terminal:
		Choose A ~ 𝜋(·|S)
		Take action A, observe R, S'
		w = w + 𝛼 [R + 𝛾vˆ(S',w) - vˆ(S,w)] 𝛻vˆ(S,w)
		S = S'
```
# Linear Methods

given an x(s) real-valued vector

in the linear case SGD update simplifies to the form:
- $w_{t+1} = w_t + \alpha [U_t - \hat{v}(S_t,w_t)]x(S_t)$

![[RL Chapter 9 (On-Policy Prediction with Approximation)/3.png|600]]
# Feature Construction for Linear Methods
- polynomials
- fourier basis
- coarse coding - it sits conceptually between:
	- tabular representation (each state has its own feature)
	- global approximations like polynomial or Fourier bases
- tile coding - a form of course coding
- radial basis functions

coarse coding vs tile coding
- coarse coding - arbitrary overlapping shapes, varying sizes
- tile coding - grids of tiles, arranged in “tilings,” each covering space evenly

# Selecting Step-Size Parameters Manually
