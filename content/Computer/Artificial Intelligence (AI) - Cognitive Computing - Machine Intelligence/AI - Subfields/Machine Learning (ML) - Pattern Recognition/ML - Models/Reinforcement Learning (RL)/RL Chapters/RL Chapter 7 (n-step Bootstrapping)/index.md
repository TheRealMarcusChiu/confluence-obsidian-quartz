---
title: "RL Chapter 7 (n-step Bootstrapping)"
created: 2025-12-09T12:24:27.237-06:00
modified: 2025-12-10T19:51:44.694-06:00
parent: "[[RL Chapters]]"
children: []
---
###### n-step TD methods
- unifies MC and TD(0)
- introduces the idea of eligibility traces (chapter 12)

# n-step Prediction

complete return:
- $G_t = R_{t+1} + \gamma R_{t+2} + \gamma^2 R_{t+3} + ... + \gamma^{T-t-1} R_{T}$

estimates of complete return:
- one-step return:
	- $G_{t:t+1} = R_{t+1} + \gamma V_t(S_{t+1})$
- two-step return:
	- $G_{t:t+2} = R_{t+1} + \gamma R_{t+2} + \gamma^2 V_{t+1}(S_{t+2})$
- n-step return:
	- $G_{t:t+n} = R_{t+1} + \gamma R_{t+2} + \gamma^2 R_{t+3} + ... + \gamma^{n-1}R_{t+n} + \gamma^n V_{t+n-1}(S_{t+n})$

### N-Step TD
- $V_{t+n}(S_t) = V_{t+n-1}(S_t) + \alpha [G_{t:t+n} - V_{t+n-1}(S_t)]$

n-step TD for estimating 𝑣<sub>𝜋</sub>:
```
Input: a policy 𝜋
Algorithm parameters: step size 𝛼∊(0, 1], a positive integer n
Initialize V(s) arbitrarily, for all s∊S
All store and access operations (for St and Rt) can take their index mod n + 1

loop for each episode:
	initialize and store S0 != terminal
	T = infinity
	loop for t = 0,1,2,...
		if t < T
			take action according to 𝜋(|St)
			observe and store R_{t+1} and S_{t+1}
			if S_{t+1} is terminal:
				T = t + 1
		𝜏 = t - n + 1 (𝜏 is the time whose state's estimate is being updated)
		if 𝜏 >= 0:
			G = \sum_{i=𝜏+1}^{min(𝜏+n,T)} 𝛾^{i-𝜏-1} R_i
			if 𝜏+n < T
				G = G + 𝛾^n V(S_{𝜏+n})
			V(S𝜏) = V(S𝜏) + 𝛼 [G - V(S𝜏)]
	until 𝜏 = T - 1
```
# N-Step SARSA

redefine n-step returns in terms of action values:
- $G_{t:t+n} = R_{t+1} + \gamma R_{t+2} + \gamma^2 V_{t+1}(S_{t+2}) + ... + \gamma^{n-1}R_{t+n} + \gamma^n Q_{t+n-1}(S_{t+n}, A_{t+n})$

natural algorithm is then:
- $Q_{t+n}(S_t, A_t) = Q_{t+n-1}(S_t, A_t) + \alpha [G_{t:t+n} - Q_{t+n-1}(S_t,A_t)]$

n-step SARSA for estimating 𝑞<sub>\*</sub> or 𝑞<sub>𝜋</sub>:
```
Initialize Q(s, a) arbitrarily, for all s∊S, a∊A
Initialize 𝜋 to be "𝜀-greedy with respect to Q, or to a fixed given policy
Algorithm parameters: step size 𝛼∊(0, 1], small 𝜀>0, a positive integer n
All store and access operations (for St, At, and Rt) can take their index mod n+1

Loop for each episode:
	innitialize and store S0
	select and store an action A0 ~ 𝜋(|S0)
	T = infinity
	loop for t = 0, 1, 2, ...
		if t < T
			take action At
			observe and store R_{t+1} and S_{t+1}
			if S_{t+1} is terminal:
				T = t + 1
			else
				select and store action A_{t+1} ~ 𝜋(|S_{t+1})
		𝜏 = t - n + 1   (𝜏 is the time whose estimate is being updated)
		if 𝜏 >= 0:
 			G = \sum_{i=𝜏+1}^{min(𝜏+n,T)} 𝛾^{i-𝜏-1} R_i
			if 𝜏+n < T
				G = G + 𝛾^n Q(S_{𝜏+n}, A_{𝜏+n})
			Q(S𝜏,A𝜏) = Q(S𝜏,A𝜏) + 𝛼 [G - Q(S𝜏,A𝜏)]
			if 𝜋 is being learned, then ensure 𝜋(|S𝜏) is 𝜀-greedy wrt Q
	until 𝜏 = T - 1
```
# Expected SARSA

redefine n-step returns in terms of action values:
- $G_{t:t+n} = R_{t+1} + \gamma R_{t+2} + \gamma^2 V_{t+1}(S_{t+2}) + ... + \gamma^{n-1}R_{t+n} + \gamma^n \overline{V}_{t+n-1}(S_{t+n})$

where:
- $\overline{V}_{t+n-1}(S_{t+n}) = \sum_a \pi(a|s) Q_t(s,a)$

# Backup Diagrams (n-step TD, n-step SARSA, n-step Expected SARSA)
![[RL Chapter 7 (n-step Bootstrapping)/2.png|400]]

![[RL Chapter 7 (n-step Bootstrapping)/1.png|600]]
# N-Step Off-Policy Learning

<strong>N-Step TD Off-Policy</strong> - simply weighted by 𝜌<sub>𝑡:𝑡+𝑛-1</sub>:
- $V_{t+n}(S_t) = V_{t+n-1}(S_t) + \alpha \rho_{t:t+n-1} [G_{t:t+n} - V_{t+n-1}(S_t)]$

<strong>N-Step SARSA Off-Policy</strong> - simply weighted by :
- $Q_{t+n}(S_t,A_t) = Q_{t+n-1}(S_t,A_t) + \alpha \rho_{t:t+n} [G_{t:t+n} - Q_{t+n-1}(S_t,A_t)]$

where, the IS ratio is the relative probability under the 2 policies of taking the n actions from 𝐴<sub>𝑡</sub> to 𝐴<sub>𝑡+𝑛-1</sub>:
- $\rho_{t:h} = \prod_{k=t}^{min(h,T-1)} \frac {\pi(A-k|S_k)} {b(A_k|S_k)}$

Off-Policy n-step SARSA for estimating 𝑞<sub>\*</sub> or 𝑞<sub>𝜋</sub>:
```
Input: an arbitrary behavior policy b such that b(a|s) > 0, for all s∊S, a∊A
Initialize Q(s, a) arbitrarily, for all s∊S, a∊A
Initialize 𝜋 to be greedy with respect to Q, or as a fixed given policy
Algorithm parameters: step size 𝛼∊(0, 1], a positive integer n
All store and access operations (for St, At, and Rt) can take their index mod n + 1

loop for each episode:
	initialize and store S0
	select and store action A0 ~ b(|S0)
	T = infinity
	loop for t = 0, 1, 2, ...
		if t < T:
			take action At
			observe and store R_{t+1} and S_{t+1}
			if S_{t+1} is terminal
				T = t + 1
			else
				select and store action A_{t+1} ~ b(|S_{t+1})
		𝜏 = t - n + 1
		if 𝜏 >= 0
			𝜌 = \prod_{i=𝜏+1}^{min(𝜏+n-1,T-1)} [𝜋(Ai|Si) / b(Ai|Si)]
 			G = \sum_{i=𝜏+1}^{min(𝜏+n,T)} 𝛾^{i-𝜏-1} R_i
			if 𝜏+n < T
				G = G + 𝛾^n Q(S_{𝜏+n}, A_{𝜏+n})
			Q(S𝜏,A𝜏) = Q(S𝜏,A𝜏) + 𝛼 𝜌 [G - Q(S𝜏,A𝜏)]
			if 𝜋 is being learned, then ensure 𝜋(|S𝜏) is 𝜀-greedy wrt Q
	until 𝜏 = T - 1
```
# Off-Policy Learning w/o IS: The n-step Tree Backup Algorithm

NOT READ

![[RL Chapter 7 (n-step Bootstrapping)/3.png]]

n-step Tree Backup for estimating  𝑞<sub>\*</sub> or 𝑞<sub>𝜋</sub>:
```
Initialize Q(s, a) arbitrarily, for all s∊S, a∊A
Initialize 𝜋 to be greedy with respect to Q, or as a fixed given policy
Algorithm parameters: step size 𝛼∊(0, 1], a positive integer n
All store and access operations (for St, At, and Rt) can take their index mod n + 1

loop for each episode:
	initialize and store S0
	select and store action A0 arbitrarily as a function of S0
	T = infinity
	loop for t = 0, 1, 2, ...
		if t < T:
			take action At
			observe and store R_{t+1} and S_{t+1}
			if S_{t+1} is terminal
				T = t + 1
			else
				select and store action A_{t+1} as a function of S_{t+1}
		𝜏 = t - n + 1
		if 𝜏 >= 0
			if 𝜏+1 >= T
				G = R_T
			else
				G = R_{t+1} + 𝛾 sum_a 𝜋(a|S_{t+1}) Q(S_{t+1},a)
			loop for k = min(t,T-1) down to 𝜏+1:
				G = R_k + 𝛾 \sum_{a!=A_k} 𝜋(a|S_k) Q(S_k,a) + 𝛾 𝜋(A_k|S_k)*G
			Q(S𝜏,A𝜏) = Q(S𝜏,A𝜏) + 𝛼 [G - Q(S𝜏,A𝜏)]
			if 𝜋 is being learned, then ensure 𝜋(|S𝜏) is 𝜀-greedy wrt Q
	until 𝜏 = T - 1
```
# A Unifying Algorithm: N-Step 𝑄(𝜎)

NOT READ

![[RL Chapter 7 (n-step Bootstrapping)/4.png|600]]
