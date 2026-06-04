---
title: "Markov Chain Property - State Types (Transient／Positive／Null／Recurrent／Absorbing State)"
created: 2021-09-13T05:27:06.588-05:00
modified: 2022-06-20T01:25:51.199-05:00
parent: "[[Markov Chains／Chain (Transition Markov／Probability／Stochastic Matrix) - Discrete Time Markov Chains (DTMC)]]"
children: []
---
# Transient & Recurrent States

probability of FIRST RETURN to state 𝑠, after exactly 𝑛 steps
- 𝑓<sub>𝑠</sub>(𝑛) = 𝐏(𝑋<sub>𝑛</sub>=𝑠, 𝑋<sub>𝑛-1</sub>≠𝑠, ..., 𝑋<sub>1</sub>≠𝑠|𝑋<sub>0</sub>=𝑠)

probability of EVENTUAL RETURN to state 𝑠:
- 𝑓<sub>𝑠</sub> = 𝛴<sub>1≤𝑖≤∞</sub> \[𝑓<sub>𝑠</sub>(𝑖)\]

state 𝑠 is:
- <strong>transient</strong> if 𝑓<sub>𝑠</sub> \< 1 (positive probability that the DTMC will NEVER return to state 𝑠)
- <strong>recurrent</strong> if 𝑓<sub>𝑠</sub> = 1 (impossible to never come back to recurrent state)

# Positive & Null Recurrent States (Mean Recurrence Time)

for a <strong>recurrent state</strong> 𝑠, the mean number of steps between 2 successive visits to 𝑠:

𝑚<sub>𝑠</sub> = 𝛴<sub>1≤𝑖≤∞</sub> \[𝑖·𝑓<sub>𝑠</sub>(𝑖)\]

state 𝑠 is:
- <strong>positive recurrent</strong> if 𝑚<sub>𝑠</sub> \< ∞
- <strong>null recurrent</strong> if 𝑚<sub>𝑠</sub> = ∞

# Absorbing State

a state is absorbing if 𝐏(𝑠|𝑠) = 1

![[Markov Chain Property - State Types (Transient／Positive／Null／Recurrent／Absorbing State)/markov-chain-state-types.png]]

[[markov-chain-state-types.drawio]]
# Mutually Reachable States have the same "type"

lets 𝑠 and 𝑠' be mutually reachable from each other, then:
- 𝑠 is transient ↔ 𝑠' is transient
- 𝑠 is null-recurrent ↔ 𝑠' is null-recurrent
- 𝑠 is positive-recurrent ↔ 𝑠' is positive-recurrent
- 𝑠 has period 𝑑 ↔ 𝑠' has period 𝑑
