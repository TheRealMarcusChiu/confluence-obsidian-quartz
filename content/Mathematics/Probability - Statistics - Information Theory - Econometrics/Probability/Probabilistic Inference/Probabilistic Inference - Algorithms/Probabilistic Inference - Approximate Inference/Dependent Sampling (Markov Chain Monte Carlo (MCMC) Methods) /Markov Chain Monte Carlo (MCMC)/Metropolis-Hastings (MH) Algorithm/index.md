---
title: "Metropolis-Hastings (MH) Algorithm"
created: 2021-09-13T05:28:13.957-05:00
modified: 2025-09-15T22:42:20.402-05:00
parent: "[[Markov Chain Monte Carlo (MCMC)]]"
children: []
---
###### Metropolis-Hastings Algorithm
````excerpt
- is a [[Markov Chain Monte Carlo (MCMC)|Markov Chain Monte Carlo]] method for obtaining a sequence of random samples which converge to being distributed according to a target probability distribution for which direct sampling is difficult
````
^excerpt

# Introduction

Problem:
- approximate or sample from target distribution 𝜋

Solution:
- [[Markov Chains／Chain (Transition Markov／Probability／Stochastic Matrix) - Discrete Time Markov Chains (DTMC)|Markov Chain]] idea: given an [[Markov Chain Property - Ergodic (Definition #1)|ergodic]] [[Markov Chains／Chain (Transition Markov／Probability／Stochastic Matrix) - Discrete Time Markov Chains (DTMC)|transition matrix]] 𝑇 there exists a [[Markov Chain Property - Stationary／Stable／Invariant／Steady-State／Limiting／Marginal Probability Distribution Vector|stationary distribution]] 𝜋
- Metropolis Algorithm idea: given a target distribution 𝜋 construct an [[Markov Chain Property - Ergodic (Definition #1)|ergodic]] transition matrix 𝑇 that will produce 𝜋
	- the [[Markov Chain Property - Ergodic (Definition #1)|ergodic theorem]] states that sampling from this Markov chain 𝑇 will approximate the target distribution 𝜋
	- 
> [!expand]- Click here to expand...
> - 𝑙𝑖𝑚<sub>𝑡→∞</sub>\[<em>𝜂</em>(𝑖,𝑡)/𝑡\] = <em>𝜋</em>(𝑖)
>
> where:
> - 𝑡 - the number of steps
> - 𝑖 - a state in the Markov chain
> - 𝜂(𝑖,𝑡) - the number of visits to state 𝑖 over a period of 𝑡 steps
> - <em>𝜋</em>(𝑖) \> 0 - the [stationary distribution](http://confluence.lan/pages/viewpage.action?pageId=1026538) value for state 𝑖

Metropolis Algorithm:
- given current state 𝒙, sample next state 𝒙' from a proposal distribution 𝐐(𝒙 → 𝒙')
- accept next state 𝒙' with acceptance probability 𝐀(𝒙 → 𝒙')
	- if accepted, move to 𝒙'
	- otherwise stay at 𝒙
- repeat 𝑛 number of times

From the algorithm, the [[Markov Chains／Chain (Transition Markov／Probability／Stochastic Matrix) - Discrete Time Markov Chains (DTMC)|transition function]] 𝑇 is defined as:
- if 𝒙 ≠ 𝒙': 𝑇(<font style="color: rgb(0,128,0);">𝑥<sup>𝑐𝑢𝑟𝑟𝑒𝑛𝑡</sup></font> → <font style="color: rgb(128,0,0);">𝑥<sup>𝑛𝑒𝑥𝑡</sup></font>) = 𝐐(<font style="color: rgb(0,128,0);">𝑥<sup>𝑐𝑢𝑟𝑟𝑒𝑛𝑡</sup></font> → <font style="color: rgb(128,0,0);">𝑥<sup>𝑛𝑒𝑥𝑡</sup></font>)𝐀(<font style="color: rgb(0,128,0);">𝑥<sup>𝑐𝑢𝑟𝑟𝑒𝑛𝑡</sup></font> → <font style="color: rgb(128,0,0);">𝑥<sup>𝑛𝑒𝑥𝑡</sup></font>)
- if 𝒙 = 𝒙': 𝑇(<font style="color: rgb(0,128,0);">𝑥<sup>𝑐𝑢𝑟𝑟𝑒𝑛𝑡</sup></font> → <font style="color: rgb(128,0,0);"><font style="color: rgb(0,128,0);">𝑥<sup>𝑐𝑢𝑟𝑟𝑒𝑛𝑡</sup></font></font>) = 𝐐(<font style="color: rgb(0,128,0);">𝑥<sup>𝑐𝑢𝑟𝑟𝑒𝑛𝑡</sup></font> → <font style="color: rgb(128,0,0);"><font style="color: rgb(0,128,0);">𝑥<sup>𝑐𝑢𝑟𝑟𝑒𝑛𝑡</sup></font></font>) + 𝛴<sub>𝒙≠𝒙'</sub> \[𝐐(<font style="color: rgb(0,128,0);">𝑥<sup>𝑐𝑢𝑟𝑟𝑒𝑛𝑡</sup></font> → <font style="color: rgb(128,0,0);">𝑥<sup>𝑛𝑒𝑥𝑡</sup></font>)(1 - 𝐀(<font style="color: rgb(0,128,0);">𝑥<sup>𝑐𝑢𝑟𝑟𝑒𝑛𝑡</sup></font> → <font style="color: rgb(128,0,0);">𝑥<sup>𝑛𝑒𝑥𝑡</sup></font>))\]

construct acceptance probability 𝐀 such that [[Markov Chain Property - Detailed Balance／Balanced|detailed balance]] holds for 𝑇 ([[Markov Chain Property - Detailed Balance／Balanced|detailed balance implies stationary distribution]], and thus the ergodic theorem above applies):
- 𝜋(<font style="color: rgb(128,0,0);">𝑥'</font>)𝑇(<font style="color: rgb(128,0,0);">𝑥' </font>→ <font style="color: rgb(0,128,0);">𝑥</font>) = 𝜋(<font style="color: rgb(0,128,0);">𝑥</font>)𝑇(<font style="color: rgb(0,128,0);">𝑥</font> →<font style="color: rgb(128,0,0);"> 𝑥'</font>) <font style="color: rgb(122,134,154);">\# by definition of [[Markov Chain Property - Detailed Balance／Balanced|detailed balanced]]</font>
- 𝜋(<font style="color: rgb(128,0,0);">𝑥'</font>)𝐐(<font style="color: rgb(0,128,0);"><font style="color: rgb(128,0,0);">𝑥'</font></font> → <font style="color: rgb(0,128,0);">𝑥</font>)𝐀(<font style="color: rgb(0,128,0);"><font style="color: rgb(128,0,0);">𝑥'</font></font> → <font style="color: rgb(0,128,0);">𝑥</font>) = 𝜋(<font style="color: rgb(0,128,0);">𝑥</font>)𝐐(<font style="color: rgb(0,128,0);">𝑥</font> → <font style="color: rgb(128,0,0);">𝑥'</font>)𝐀(<font style="color: rgb(0,128,0);">𝑥</font> → <font style="color: rgb(128,0,0);">𝑥'</font>)
	- 𝐀(<font style="color: rgb(0,128,0);">𝑥</font> → <font style="color: rgb(128,0,0);">𝑥'</font>) / 𝐀(<font style="color: rgb(0,128,0);"><font style="color: rgb(128,0,0);">𝑥'</font></font> → <font style="color: rgb(0,128,0);">𝑥</font>) = 𝜋(<font style="color: rgb(128,0,0);">𝑥'</font>)𝐐(<font style="color: rgb(0,128,0);"><font style="color: rgb(128,0,0);">𝑥'</font></font> → <font style="color: rgb(0,128,0);">𝑥</font>) / 𝜋(<font style="color: rgb(0,128,0);">𝑥</font>)𝐐(<font style="color: rgb(0,128,0);">𝑥</font> → <font style="color: rgb(128,0,0);">𝑥'</font>)
	- 𝐀(<font style="color: rgb(0,128,0);">𝑥</font> → <font style="color: rgb(128,0,0);">𝑥'</font>) = 𝑚𝑖𝑛(1, <font style="color: rgb(255,102,0);">\[</font>𝜋(<font style="color: rgb(128,0,0);">𝑥'</font>)𝐐(<font style="color: rgb(0,128,0);"><font style="color: rgb(128,0,0);">𝑥'</font></font> → <font style="color: rgb(0,128,0);">𝑥</font>)<font style="color: rgb(255,102,0);">\]</font> / <font style="color: rgb(255,102,0);">\[</font>𝜋(<font style="color: rgb(0,128,0);">𝑥</font>)𝐐(<font style="color: rgb(0,128,0);">𝑥</font> → <font style="color: rgb(128,0,0);">𝑥'</font>)<font style="color: rgb(255,102,0);">\]</font>)
	- 𝐀(<font style="color: rgb(0,128,0);">𝑥</font> → <font style="color: rgb(128,0,0);">𝑥'</font>) = 𝑚𝑖𝑛(1, <font style="color: rgb(255,102,0);">\[</font>𝜋'(<font style="color: rgb(128,0,0);">𝑥'</font>)/𝑍 𝐐(<font style="color: rgb(0,128,0);"><font style="color: rgb(128,0,0);">𝑥'</font></font> → <font style="color: rgb(0,128,0);">𝑥</font>)<font style="color: rgb(255,102,0);">\]</font> / <font style="color: rgb(255,102,0);">\[</font>𝜋'(<font style="color: rgb(0,128,0);">𝑥</font>)/𝑍 𝐐(<font style="color: rgb(0,128,0);">𝑥</font> → <font style="color: rgb(128,0,0);">𝑥'</font>)<font style="color: rgb(255,102,0);">\]</font>) <font style="color: rgb(122,134,154);">\# </font><font style="color: rgb(122,134,154);">because 𝜋(𝑥) is assumed to be hard to compute because of its normalizing constant 1/𝑍, we can rewrite it as 𝜋(𝑥) = 𝜋'(𝑥)/𝑍</font>
	- 𝐀(<font style="color: rgb(0,128,0);">𝑥</font> → <font style="color: rgb(128,0,0);">𝑥'</font>) = 𝑚𝑖𝑛(1, <font style="color: rgb(255,102,0);">\[</font>𝜋'(<font style="color: rgb(128,0,0);">𝑥'</font>) 𝐐(<font style="color: rgb(0,128,0);"><font style="color: rgb(128,0,0);">𝑥'</font></font> → <font style="color: rgb(0,128,0);">𝑥</font>)<font style="color: rgb(255,102,0);">\]</font> / <font style="color: rgb(255,102,0);">\[</font>𝜋'(<font style="color: rgb(0,128,0);">𝑥</font>) 𝐐(<font style="color: rgb(0,128,0);">𝑥</font> → <font style="color: rgb(128,0,0);">𝑥'</font>)<font style="color: rgb(255,102,0);">\]</font>) <font style="color: rgb(122,134,154);">\# the normalizing constants are cancelled out, rendering 𝐀(𝑥 → 𝑥') to be easy to compute</font>

# Choice of Proposal Distribution 𝐐

𝐐 must be [[Markov Chain Property - Reversibility|reversible]]:
- 𝐐(<font style="color: rgb(0,128,0);"><font style="color: rgb(128,0,0);">𝑥'</font></font> → <font style="color: rgb(0,128,0);">𝑥</font>) \> 0 implies 𝐐(<font style="color: rgb(0,128,0);">𝑥</font> → <font style="color: rgb(0,128,0);"><font style="color: rgb(0,128,0);"><font style="color: rgb(128,0,0);">𝑥'</font></font></font>) \> 0

opposing forces:
- 𝐐 should be spread out to improve mixing
- but then acceptance probability will be low, which in turn slows down mixing

###### random walk metropolis

If 𝐐 is chosen to be symmetric (i.e. 𝐐(𝑥 → 𝑥') = 𝐐(𝑥' → 𝑥) for all 𝑥' and 𝑥), then the acceptance probability 𝐀 becomes:
- 𝐀(<font style="color: rgb(0,128,0);">𝑥</font> → <font style="color: rgb(128,0,0);">𝑥'</font>) = 𝑚𝑖𝑛(1, \[𝜋(𝑥')𝐐(𝑥'→ 𝑥)\] / \[𝜋(𝑥)𝐐(𝑥 → 𝑥')\])
- 𝐀(<font style="color: rgb(0,128,0);">𝑥</font> → <font style="color: rgb(128,0,0);">𝑥'</font>) = 𝑚𝑖𝑛(1, 𝜋(𝑥')/𝜋(𝑥))

now:
- if 𝑥' has density greater than or equal to 𝑥's density (i.e. 𝜋(𝑥') ≥ 𝜋(𝑥)) then we will always accept 𝑥'
- if 𝑥' has density less than 𝑥's density (i.e. 𝜋(𝑥') \< 𝜋(𝑥)) then we will always accept 𝑥' with probability 𝜋(𝑥')/𝜋(𝑥)

###### independent metropolis-hastings proposal

If 𝐐 is chosen to be independent (i.e. 𝐐(𝑥 → 𝑥') = 𝐐(𝑥')), then the acceptance probability becomes:
- 𝐀(<font style="color: rgb(0,128,0);">𝑥</font> → <font style="color: rgb(128,0,0);">𝑥'</font>) = 𝑚𝑖𝑛(1, \[𝜋(𝑥')𝐐(𝑥'→ 𝑥)\] / \[𝜋(𝑥)𝐐(𝑥 → 𝑥')\])
- 𝐀(<font style="color: rgb(0,128,0);">𝑥</font> → <font style="color: rgb(128,0,0);">𝑥'</font>) = 𝑚𝑖𝑛(1, \[𝜋(𝑥')𝐐(𝑥)\] / \[𝜋(𝑥)𝐐(𝑥')\])

# Resources
- [YouTube - Very Normal](https://www.youtube.com/watch?v=Jr1GdNI3Vfo)
- [YouTube - mathematicalmonk](https://www.youtube.com/watch?v=gxHe9wAWuGQ)
- [YouTube - Jarad Niemi](https://www.youtube.com/watch?v=VGRVRjr0vyw)
- [YouTube - Kapil Sachdeva](https://www.youtube.com/watch?v=oX2wIGSn4jY)
- [https://www.coursera.org/lecture/probabilistic-graphical-models-2-inference/metropolis-hastings-algorithm-UPVWC](https://www.coursera.org/lecture/probabilistic-graphical-models-2-inference/metropolis-hastings-algorithm-UPVWC)
