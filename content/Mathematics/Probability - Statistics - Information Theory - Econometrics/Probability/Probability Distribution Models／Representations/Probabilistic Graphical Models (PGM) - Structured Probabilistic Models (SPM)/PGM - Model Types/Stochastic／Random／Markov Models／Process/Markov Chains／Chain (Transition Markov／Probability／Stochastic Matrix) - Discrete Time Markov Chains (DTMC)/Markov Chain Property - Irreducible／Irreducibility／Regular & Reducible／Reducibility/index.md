---
title: "Markov Chain Property - Irreducible／Irreducibility／Regular & Reducible／Reducibility"
created: 2021-09-13T05:27:05.315-05:00
modified: 2022-06-20T01:21:52.420-05:00
parent: "[[Markov Chains／Chain (Transition Markov／Probability／Stochastic Matrix) - Discrete Time Markov Chains (DTMC)]]"
children: []
---
- a [[Markov Chains／Chain (Transition Markov／Probability／Stochastic Matrix) - Discrete Time Markov Chains (DTMC)|Markov Chain]] is <strong>irreducible</strong>/<strong>regular</strong> if every state is reachable from each other
- a [[Markov Chains／Chain (Transition Markov／Probability／Stochastic Matrix) - Discrete Time Markov Chains (DTMC)|Markov Chain]] is <strong>reducible</strong> if there are states that are NOT reachable from each other

# Irreducible/Regular Markov Chain

A Markov chain is irreducible if for all states 𝑎,𝑏∊{𝑠𝑡𝑎𝑡𝑒-𝑠𝑝𝑎𝑐𝑒}, there exists a time 𝑡\>0 such that
- 𝐏(𝑋<sub>𝑡</sub>=𝑏|𝑋<sub>0</sub>=𝑎) \> 0

In other words, there is a non-zero probability to get to state 𝑏 from state 𝑎 after some 𝑡 time transitions

![[Markov Chain Property - Irreducible／Irreducibility／Regular & Reducible／Reducibility/markov-chains-irreducibility.png]]
###### Example Irreducible Markov chain
![[Markov Chain Property - Irreducible／Irreducibility／Regular & Reducible／Reducibility/markov-chain-example.png]]

? - must be non-zero probabilities
