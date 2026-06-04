---
title: "RL Chapter 6 (Temporal Difference Learning)"
created: 2025-12-09T00:50:38.658-06:00
modified: 2025-12-11T19:32:36.600-06:00
parent: "[[RL Chapters]]"
children: []
---
# Temporal Difference Learning

is a combination of DP and MC methods
# TD Prediction

Constant-𝛼 MC
- $V(S_t) = V(S_t) + \alpha [G_t - V(S_t)]$

TD(0) or one-step TD (simplest):
- $V(S_t) = V(S_t) + \alpha [R_{t+1} + \gamma V(S_{t+1}) - V(S_t)]$
```
Input: the policy 𝜋 to be evaluated
Algorithm parameter: step size 𝛼∊(0, 1]
Initialize V(s), for all s∊S+, arbitrarily except that V(terminal) = 0

Loop for each episode:
	Initialize S
	Loop until S is terminal:
		A action given by 𝜋 for S
		Take action A, observe R, S'
		V(S) = V(S) + 𝛼 [R + 𝛾 V(S') - V(S)]
		S = S'
```

TD error:
- $\delta_t = R_{t+1} + \gamma V(S_{t+1}) - V(S_t)$

# Advantages of TD Prediction Methods
- does not need model of reward and next-state distributions like DP
- does not need to wait until end of episode for an update like MC

# Optimality of TD(0)

Batch Updating - given a batch experience, compute increments for every time step, but value function is changed ONLY once, by sum of all increments. then process another batch.
# Sarsa: On-Policy TD Control
1. learn action-value function 𝑞<sub>𝜋</sub>(𝑠,𝑎)
2. $Q(S_t, A_t) = Q(S_t, A_t) + \alpha [R_{t+1} + \gamma Q(S_{t+1},A_{t+1}) - Q(S_t, A_t)]$

SARSA (on-policy TD control) for estimating Q \~ q\*
```
Algorithm parameters: step size 𝛼∊(0, 1], small 𝜀 > 0
Initialize Q(s, a), for all s∊S+, a∊A(s), arbitrarily except that Q(terminal,·) = 0

Loop for each episode:
	Initialize non-terminal S
	Choose A from S using policy derived from Q (e.g., 𝜀-greedy)
	Loop until S is terminal:
		Take action A, observe R, S'
		Choose A' from S' using policy derived from Q (e.g., 𝜀-greedy)
		Q(S, A) = Q(S, A) + 𝛼 [R + 𝛾 Q(S', A') - Q(S, A)]
		S = S'
		A = A'
```
# Q-Learning: Off-Policy TD Control

Q-Learning:
- $Q(S_t, A_t) = Q(S_t, A_t) + \alpha [R_{t+1} + \gamma max_a  Q(S_{t+1},a) - Q(S_t, A_t)]$

Q-Learning (off-policy TD control) for estimating 𝜋<sub>\*</sub>
```
Algorithm parameters: step size 𝛼∊(0, 1], small 𝜀>0
Initialize Q(s, a), for all s∊S+, a∊A(s), arbitrarily except that Q(terminal,·) = 0

loop for each episode:
	initialize S
	loop for until S is terminal:
		choose A from S using policy derived from Q (e.g. 𝜀-greedy)
		take action A, observe R,S'
		Q(S,A) = Q(S,A) + 𝛼 [R + 𝛾 max_a Q(S',a) - Q(S,A)]
		S = S'
```
# Expected SARSA

like Q-learning but instead of max we take expected:
- $Q(S_t, A_t) = Q(S_t, A_t) + \alpha [R_{t+1} + \gamma E[Q(S_{t+1},A_{t+1})|S_{t+1}] - Q(S_t, A_t)]$
- $Q(S_t, A_t) = Q(S_t, A_t) + \alpha [R_{t+1} + \gamma \sum_a [\pi(a|S_{t+1}) Q(S_{t+1},a)] - Q(S_t, A_t)]$

# Maximization Bias & Double Learning
### Double SARSA

TODO
### Double Q-Learning
- if a flipped coin comes up heads, the update is:
	- $Q_1(S_t, A_t) = Q_1(S_t, A_t) + \alpha [R_{t+1} + \gamma Q_2(S_{t+1}, argmax_a Q_1(S_{t+1},a)) - Q_1(S_t, A_t)]$
- else if tails:
	- $Q_2(S_t, A_t) = Q_2(S_t, A_t) + \alpha [R_{t+1} + \gamma Q_1(S_{t+1}, argmax_a Q_2(S_{t+1},a)) - Q_2(S_t, A_t)]$

Double Q-Learning for estimating 𝑞<sub>\*</sub>:
```
Algorithm parameters: step size 𝛼∊(0, 1], small 𝜀>0
Initialize Q1(s, a) and Q2(s, a), for all s∊S+, a∊A(s), such that Q(terminal,·) = 0

loop for each episode:
	initialize S
	loop until S is terminal:
		choose A from S using the policy 𝜀-greedy in Q1 + Q2
		take action A, observe R,S'
		with probability 0.5:
 			Q_1(S, A) = Q_1(S, A) + 𝛼 [R + 𝛾 Q_2(S', argmax_a Q_1(S',a)) - Q_1(S, A)] 
		else:
			Q_2(S, A) = Q_2(S, A) + 𝛼 [R + 𝛾 Q_1(S', argmax_a Q_2(S',a)) - Q_2(S, A)]
```
### Double Expected SARSA

TODO
# Games, Afterstates, and Other Special Cases

NOT READ
