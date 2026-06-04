---
title: "Markov Chain Property - Time Homogenous／Heterogenous"
created: 2021-09-13T05:27:07.519-05:00
modified: 2021-09-13T05:27:07.519-05:00
parent: "[[Markov Chains／Chain (Transition Markov／Probability／Stochastic Matrix) - Discrete Time Markov Chains (DTMC)]]"
children: []
---
a [[Markov Chains／Chain (Transition Markov／Probability／Stochastic Matrix) - Discrete Time Markov Chains (DTMC)|Markov Chain]] is <strong>time homogenous</strong> iff the [[Markov Chains／Chain (Transition Markov／Probability／Stochastic Matrix) - Discrete Time Markov Chains (DTMC)|transition matrix]] is independent of time 𝑡. i.e. for all time 𝑡 and all 𝑎,𝑏∊{𝑡𝑟𝑎𝑛𝑠𝑖𝑡𝑖𝑜𝑛-𝑠𝑝𝑎𝑐𝑒}:
- 𝐏(𝑋<sub>𝑡+1</sub>=𝑎|𝑋<sub>𝑡</sub>=𝑏) = 𝑇\[𝑏\]\[𝑎\]

where:
- 𝐏(𝑋<sub>𝑡+1</sub>=𝑎|𝑋<sub>𝑡</sub>=𝑏) is the conditional probability going<sub></sub>from state 𝑏 to state 𝑎
- 𝑇 is the [[Markov Chains／Chain (Transition Markov／Probability／Stochastic Matrix) - Discrete Time Markov Chains (DTMC)|transition matrix]]
