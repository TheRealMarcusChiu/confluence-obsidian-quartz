---
title: "RL Chapter 5 (Monte Carlo Methods)"
created: 2025-12-08T18:39:06.605-06:00
modified: 2026-05-15T18:31:10.126-05:00
parent: "[[RL Chapters]]"
children: []
---
# Monte Carlo Methods

learn from sampled sequences of (states, actions, rewards)
# Monte Carlo Prediction
- first-visit MC estimates v\_\\pi(s) as the average of the returns following first visits to s
- every-visit MC estimates v\_\\pi(s) as the average of the returns following all visits to s

First-visit MC prediction - for estimating V \~ v\_pi:
```
Input: a policy ⇡ to be evaluated
Initialize:
- V(s) 2R, arbitrarily, for all s 2S
- Returns(s) an empty list, for all s 2S

Loop forever (for each episode):
    Generate an episode following ⇡: S0, A0, R1, S1, A1, R2, ..., ST1, AT1, RT
    G = 0
    Loop for each step of episode, t = T-1, T-2, ..., 0:
        G = G + R_{t+1}
        Unless S_t appears in S0, S1, . . . , St-1:
            Append G to Returns(St)
            V(S_t) = average(Returns(S_t))
```
# Monte Carlo Estimation of Action Values

w/o model state values alone are not sufficient for estimation, we need action-values.
# Monte Carlo Control

to approximate optimal policies

for each s deterministically choose an action with maximal action-value:
- $\pi(s) = argmax_a q(s,a)$

policy improvement:
- $q_{\pi_k}(s, \pi_{k+1}(s)) = q_{\pi_k}(s, argmax_a q_{\pi_k}(s,a))$
- $q_{\pi_k}(s, \pi_{k+1}(s)) = max_a q_{\pi_k}(s,a)$
- $q_{\pi_k}(s, \pi_{k+1}(s)) >= q_{\pi_k}(s,\pi_k(a))$
- $q_{\pi_k}(s, \pi_{k+1}(s)) >= v_{\pi_k}(s)$

MC (Exploring Starts) for estimating \\pi \~ \\pi\*
```
Initialize:
    \pi(s) ∊ A(s) (arbitrarily), for all s∊S
    Q(s, a) ∊ ℝ (arbitrarily), for all s∊S, a∊A(s)
    Returns(s, a) empty list, for all s∊S, a∊A(s)

Loop forever (for each episode):
    Choose S_0 ∊ S, A_0 ∊ A(S_0) randomly such that all pairs have probability > 0
    Generate an episode from S_0, A_0, following \pi: S_0, A_0, R_1, ..., S_{T-1}, A_{T-1}, R_{T-1}
    G = 0
    Loop for each step of episode, t = T-1, T-2, ..., 0:
        G = 𝛾G + R_{t+1}
        Unless the pair (S_t, A_t) appears in S_0, A_0, S_1, A_1 ..., S_{t-1}, A_{t-1}:
            Append G to Returns(S_t, A_t)
            Q(S_t, A_t) = average(Returns(S_t,A_t))
            \pi(S_t) = argmax_a Q(S_t,a)
```
# Monte Carlo w/o Exploring Starts
- on-policy methods - evaluate/improve the policy used to generate data
- off-policy methods - evaluate/improve the policy different from another policy used to generate data
	- behavior policy - generate behavior
	- target policy - being evaluated or improved
```
Algorithm parameter: small " > 0
Initialize:
    𝜋 an arbitrary "-soft policy
    Q(s, a) ∊ ℝ (arbitrarily), for all s∊S, a∊A(s)
    Returns(s, a) empty list, for all s∊S, a∊A(s)

Repeat forever (for each episode):
    Generate an episode following 𝜋: S0, A0, R1, ..., ST1, AT1, RT
    G = 0
    Loop for each step of episode, t = T-1, T-2, ..., 0:
    G = 𝛾G + R_{t+1}
    Unless the pair St, At appears in S0, A0, S1, A1 . . . , St-1, At-1:
        Append G to Returns(St, At)
		Q(St, At) = average(Returns(St, At))
		A* = argmax_a Q(St, a)
		For all a ∊ A(St):
			if a = A^*
                𝜋(a|St) = 1 - 𝜀 + 𝜀/|A(St)|
            if a != A^*
		        𝜋(a|St) = 𝜀/|A(St)|
```
# Off-Policy Prediction via Importance Sampling

Given starting state S\_t, the probability of the subsequent state-action trajectory (i.e. A\_t, S\_{t+1}, A\_{t+1}, ..., S\_T) occurring under any policy 𝜋 is:
- $P(A_t, S_{t+1}, A_{t+1}, ..., S_T| S_t, A_{t:T-1} ~ 𝜋) = 𝜋(A_t|S_t)p(S_{t+1}|S_t,A_t)𝜋(A_{t+1}|S_{t+1}) ... p(S_T|S_{T-1},A_{T-1})$
- $P(A_t, S_{t+1}, A_{t+1}, ..., S_T| S_t, A_{t:T-1} ~ 𝜋) = \prod _{k=t}^{T-1} 𝜋(A_k|S_k)p(S_{k+1}|S_k,A_k)$

Thus, the relative probability of the trajectory under the target and behavior policies (importance sampling ratio) is:
- $\rho_{t:T-1} = \frac {\prod_{k=t}^{T-1} \pi(A_k|S_k)p(S_{k+1}|S_k,A_k)} {\prod_{k=t}^{T-1} b(A_k|S_k)p(S_{k+1}|S_k,A_k)}$
- $\rho_{t:T-1} = \frac {\prod_{k=t}^{T-1} \pi(A_k|S_k)} {\prod_{k=t}^{T-1} b(A_k|S_k)}$

The returns have wrong expectation
- $E[G_t | S_t = s] = v_b(s)$

and so cannot be averaged to obtain v<sub>𝜋</sub>. Thus we add the ratio:
- $E[\rho_{t:T-1}G_t | S_t = s] = v_\pi(s)$

### Ordinary Importance Sampling

To estimate 𝑣<sub>𝜋</sub>(𝑠) scale the returns by the ratios and average the results:
- $V(s) = \frac {\sum_{t∊𝒯(s)} \rho_{t:T(t)-1}G_t} {|𝒯(s)|}$

where:
- $𝒯(s) \text{ is the set of all time steps in which state s is visited}$

### Weighted Importance Sampling
- $V(s) = \frac {\sum_{t∊𝒯(s)} \rho_{t:T(t)-1}G_t} {\sum_{t∊𝒯(s)} \rho_{t:T(t)-1}}$

# Incremental Implementation
### Ordinary Importance Sampling

Can reuse incremental methods of chapter 2.
### Weighted Importance Sampling
![[RL Chapter 5 (Monte Carlo Methods)/1.png|600]]

Off-Policy MC prediction (policy evaluation) for estimating Q \~ q<sub>𝜋</sub>:
```
Input: an arbitrary target policy ⇡
Initialize, for all s 2S, a 2A(s):
    Q(s, a) ∊ ℝ (arbitrarily)
    C(s, a) = 0

Loop forever (for each episode):
	b any policy with coverage of ⇡
	Generate an episode following b: S0, A0, R1, ..., ST1, AT1, RT
	G = 0
	W = 1
	Loop for each step of episode, t= T1, T2, ..., 0, while W != 0:
		G = 𝛾G + R_{t+1}
		C(St, At) = C(St, At) + W
		Q(St, At) = Q(St, At) + [W / C(St,At)] * [G - Q(St,At)]
        W = W * [𝜋(At|St) / b(At|St)]
```
# Off-Policy Monte Carlo Control

Off-policy weighted IS for estimating 𝜋<sub>\*</sub> and 𝑞<sub>\*</sub>
```
Initialize, for all s∊S, a∊A(s):
	Q(s, a) ∊ ℝ (arbitrarily)
	C(s, a) = 0
	𝜋(s) = argmax_a Q(s, a) (with ties broken consistently)

Loop forever (for each episode):
	b = any soft policy
	Generate an episode using b: S0, A0, R1, ..., ST1, AT1, RT
	G = 0
	W = 1
	Loop for each step of episode, t= T1, T2, ..., 0:
		G = 𝛾G + R_{t+1}
		C(St, At) = C(St, At) + W
		Q(St, At) = Q(St, At) + [W / C(St,At)] * [G - Q(St,At)]
		𝜋(St) = argmax_a Q(St, a) (with ties broken consistently)
		If A_t != 𝜋(S_t) then exit inner Loop (proceed to next episode)
		W = W * [1 / b(At|St)]
```
