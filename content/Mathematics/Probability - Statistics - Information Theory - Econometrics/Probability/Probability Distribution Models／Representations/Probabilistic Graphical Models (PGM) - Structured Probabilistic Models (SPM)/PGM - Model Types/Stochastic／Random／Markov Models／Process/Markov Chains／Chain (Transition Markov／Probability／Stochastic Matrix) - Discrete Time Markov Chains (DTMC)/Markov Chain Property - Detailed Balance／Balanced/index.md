---
title: "Markov Chain Property - Detailed Balance／Balanced"
created: 2025-09-15T17:54:16.421-05:00
modified: 2025-09-15T18:08:30.530-05:00
parent: "[[Markov Chains／Chain (Transition Markov／Probability／Stochastic Matrix) - Discrete Time Markov Chains (DTMC)]]"
children: []
---
We say a distribution 𝜋 satisfies <strong>detailed balance</strong> with respect to [[Markov Chains／Chain (Transition Markov／Probability／Stochastic Matrix) - Discrete Time Markov Chains (DTMC)|transition matrix]] 𝑇 if, for all states 𝑥' and 𝑥:
- $π(x) T(x \rightarrow x')  =  π(x') T(x' \rightarrow x)$

# Detailed Balanced Implies Stationary Distribution

Detailed balanced is a stronger condition than [[Markov Chain Property - Stationary／Stable／Invariant／Steady-State／Limiting／Marginal Probability Distribution Vector|stationary distribution]], thus every detailed balanced 𝜋 is also a stationary distribution
- 𝜋(<font style="color: rgb(128,0,0);">𝑥'</font>)𝑇(<font style="color: rgb(128,0,0);">𝑥' </font>→ <font style="color: rgb(0,128,0);">𝑥</font>) = 𝜋(<font style="color: rgb(0,128,0);">𝑥</font>)𝑇(<font style="color: rgb(0,128,0);">𝑥</font> →<font style="color: rgb(128,0,0);"> 𝑥'</font>) <font style="color: rgb(128,128,128);">\# definition of</font> [[Markov Chain Property - Detailed Balance／Balanced|detailed balance]]
- 𝛴<sub>𝑥</sub>\[𝜋(<font style="color: rgb(128,0,0);">𝑥'</font>)𝑇(<font style="color: rgb(128,0,0);">𝑥' </font>→ <font style="color: rgb(0,128,0);">𝑥</font>)\] = 𝛴<sub>𝑥</sub>\[𝜋(<font style="color: rgb(0,128,0);">𝑥</font>)𝑇(<font style="color: rgb(0,128,0);">𝑥</font> →<font style="color: rgb(128,0,0);"> 𝑥'</font>)\] <font style="color: rgb(128,128,128);">\# summation of all possible states 𝑥 maintains equality</font>
- 𝜋(<font style="color: rgb(128,0,0);">𝑥'</font>)𝛴<sub>𝑥</sub>\[𝑇(<font style="color: rgb(128,0,0);">𝑥' </font>→ <font style="color: rgb(0,128,0);">𝑥</font>)\] = 𝛴<sub>𝑥</sub>\[𝜋(<font style="color: rgb(0,128,0);">𝑥</font>)𝑇(<font style="color: rgb(0,128,0);">𝑥</font> →<font style="color: rgb(128,0,0);"> 𝑥'</font>)\] <font style="color: rgb(128,128,128);">\# factor out 𝜋(𝑥')</font>
- 𝜋(<font style="color: rgb(128,0,0);">𝑥'</font>)1 = 𝛴<sub>𝑥</sub>\[𝜋(<font style="color: rgb(0,128,0);">𝑥</font>)𝑇(<font style="color: rgb(0,128,0);">𝑥</font> →<font style="color: rgb(128,0,0);"> 𝑥'</font>)\] <font style="color: rgb(128,128,128);">\# probability from a state <font style="color: rgb(128,0,0);">𝑥'</font>transitioning to every possible state <font style="color: rgb(0,128,0);">𝑥</font> is 1</font>
- 𝜋(<font style="color: rgb(128,0,0);">𝑥'</font>) = 𝛴<sub>𝑥</sub>\[𝜋(<font style="color: rgb(0,128,0);">𝑥</font>)𝑇(<font style="color: rgb(0,128,0);">𝑥</font> →<font style="color: rgb(128,0,0);"> 𝑥'</font>)\] <font style="color: rgb(128,128,128);">\# definition of</font> [[Markov Chain Property - Stationary／Stable／Invariant／Steady-State／Limiting／Marginal Probability Distribution Vector|stationary distribution]]
- 𝜋 = 𝜋𝑇 <font style="color: rgb(128,128,128);">\# matrix-vector form</font>
