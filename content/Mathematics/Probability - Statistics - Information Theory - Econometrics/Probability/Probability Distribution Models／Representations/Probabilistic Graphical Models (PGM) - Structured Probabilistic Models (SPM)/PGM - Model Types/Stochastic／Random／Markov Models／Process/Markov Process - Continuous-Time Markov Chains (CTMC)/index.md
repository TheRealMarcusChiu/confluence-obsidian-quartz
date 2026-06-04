---
title: "Markov Process - Continuous-Time Markov Chains (CTMC)"
created: 2021-09-13T05:26:59.360-05:00
modified: 2025-09-13T15:06:22.236-05:00
parent: "[[Stochastic／Random／Markov Models／Process]]"
children: []
---
###### Markov Process - Continuous-Time Markov Chains (CTMC)
````excerpt
- is a continuous [[Stochastic／Random／Markov Models／Process|stochastic process]] in which, for each state, the process will change state according to an exponential random variable and then move to a different state as specified by the probabilities of a stochastic matrix
````
^excerpt

# DTMC → CTMC: One Random Variable Per State
- for every state 𝑖, add a random variable 𝑋<sub>𝑖</sub> \~ [[Exponential Distribution|𝐸𝑥𝑝𝑜𝑛𝑒𝑛𝑡𝑖𝑎𝑙]](𝜆𝑖)
- this represents the state residence time distribution in CTMC
- operational behavior when in state 𝑖:
	- stay 𝐄\[𝑋<sub>𝑖</sub>\] time units in state 𝑖
	- transition to next state based on transition probability matrix 𝑇
	- repeat behavior ad infinitum

# CTMC - Components

CTMC is a tuple (𝑆,𝑅):
- 𝑆 is a finite set of states
- 𝑅 rate matrix where:
	- 𝑅\[𝑖,𝑗\] = 𝜆<sub>𝑖</sub>·𝑇\[𝑖,𝑗\]
- exit rate 𝐸(𝑠) from state 𝑠:
	- 𝐸(𝑠) = 𝑅(𝑠,𝑆) = 𝛴<sub>𝑠'∊𝑆\\{𝑠}</sub> \[ 𝑅(𝑠,𝑠') \]
- state 𝑠 is [[Markov Chain Property - State Types (Transient／Positive／Null／Recurrent／Absorbing State)|absorbing]] if:
	- 𝐸(𝑠) = 0

# TODO

continue at: [https://www.coursera.org/lecture/quantitative-model-checking/generator-matrix-BoJeS](https://www.coursera.org/lecture/quantitative-model-checking/generator-matrix-BoJeS)
# Resources
- [Coursera - Continuous Time Markov Chains (CTMC)](https://www.coursera.org/lecture/quantitative-model-checking/definition-of-a-ctmc-DWlJz)
