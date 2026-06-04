---
title: "Q-Function"
created: 2024-08-24T13:16:07.905-05:00
modified: 2024-08-24T13:59:01.107-05:00
parent: "[[Reinforcement Learning (RL)]]"
children: []
---
###### Q-Function
````excerpt
- captures the expected total future reward an agent in state, 𝑠, can receive by executing a certain action, 𝑎
	- 𝑄(𝑠<sub>𝑡</sub>,𝑎<sub>𝑡</sub>) = 𝐄\[𝑅<sub>𝑡</sub>|𝑠<sub>𝑡</sub>,𝑎<sub>𝑡</sub>\]
- where:
	- 𝑅<sub>𝑡</sub> - is the total reward, the discounted sum of all rewards obtained from time 𝑡, defined as:
		- 𝑅<sub>𝑡</sub> = 𝑟<sub>𝑡</sub> + 𝛾𝑟<sub>𝑡+1</sub> + 𝛾<sup>2</sup>𝑟<sub>𝑡+2</sub> + ...
	- 𝑠<sub>𝑡</sub> - state
	- 𝑎<sub>𝑡</sub> - action
````
^excerpt

# How to Act Given Q-Function

The agent needs a policy 𝜋(𝑠) to infer the best action to take given state 𝑠.

Given 𝑄(𝑠,𝑎) the policy 𝜋\*(𝑠) is implemented as:
- $\pi^*(s) = \arg\max_a Q(s,a)$
