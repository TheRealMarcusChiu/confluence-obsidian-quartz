---
title: "HMM - Learning - Maximum Likelihood Estimation (MLE)"
created: 2021-09-13T05:27:01.109-05:00
modified: 2021-09-13T05:27:01.109-05:00
parent: "[[Hidden Markov Models (HMM)]]"
children: []
---
given training set of size 𝑛:
- \[𝑦<sub>1</sub><sup>(1)</sup>, 𝑥<sub>1</sub><sup>(1)</sup>, ..., 𝑦<sub>𝑘</sub><sup>(1)</sup>, 𝑥<sub>𝑘</sub><sup>(1)</sup>\]
- \[𝑦<sub>1</sub><sup>(2)</sup>, 𝑥<sub>1</sub><sup>(2)</sup>, ..., 𝑦<sub>𝑘</sub><sup>(2)</sup>, 𝑥<sub>𝑘</sub><sup>(2)</sup>\]
- ...
- \[𝑦<sub>1</sub><sup>(𝑛)</sup>, 𝑥<sub>1</sub><sup>(𝑛)</sup>, ..., 𝑦<sub>𝑘</sub><sup>(𝑛)</sup>, 𝑥<sub>𝑘</sub><sup>(𝑛)</sup>\]

we would like to learn the the probabilities of a [[Hidden Markov Models (HMM)]]:
- starting state probabilities: 𝐏<sub>𝑠𝑡𝑎𝑟𝑡</sub>(𝑌<sub>1</sub>=𝑦)
- ending state probabilities: 𝐏<sub>𝑒𝑛𝑑</sub>(𝑌<sub>𝑇</sub>=𝑦)
- state transition matrix/function: 𝐏<sub>𝑡𝑟𝑎𝑛𝑠</sub>(𝑌<sub>𝑡</sub>=𝑦<sub>𝑢</sub>|𝑌<sub>𝑡-1</sub>=𝑦<sub>𝑣</sub>)
- emission matrix/function: 𝐏<sub>𝑒𝑚𝑖𝑠𝑠</sub>(𝑋=𝑥|𝑌=𝑦)

first we compute counts:
- <strong>start counts</strong> - how often is state 𝑦 the initial state
	- 𝐶<sub>𝑠𝑡𝑎𝑟𝑡</sub>(𝑌=𝑦) = 𝛴<sub>1≤𝑖≤𝑛</sub> \[𝐼(𝑦<sub>1</sub><sup>(𝑖)</sup>=𝑦)\]
- <strong>transition counts</strong> - how often does state 𝑦<sub>𝑢</sub>transit to state 𝑦<sub>𝑣</sub>
	- 𝐶<sub>𝑡𝑟𝑎𝑛𝑠</sub>(𝑦<sub>𝑢</sub>, 𝑦<sub>𝑣</sub>) = 𝛴<sub>1≤𝑖≤𝑛</sub>𝛴<sub>2≤𝑗≤𝑘</sub>\[ 𝐼(𝑦<sub>𝑗-1</sub><sup>(𝑖)</sup>=𝑦<sub>𝑢</sub> & 𝑦<sub>𝑗</sub><sup>(𝑖)</sup>=𝑦<sub>𝑣</sub>) \]
- <strong>end counts</strong> - how often is state 𝑦 the final state
	- 𝐶<sub>𝑒𝑛𝑑</sub>(𝑌=𝑦) = 𝛴<sub>1≤𝑖≤𝑛</sub> \[𝐼(𝑦<sub>𝑘</sub><sup>(𝑖)</sup>=𝑦)\]
- <strong>emission counts</strong> - how often does state 𝑦 produce observation 𝑥
	- 𝐶<sub>𝑒𝑚𝑖𝑠𝑠</sub>(𝑋=𝑥,𝑌=𝑦) = 𝛴<sub>1≤𝑖≤𝑛</sub>𝛴<sub>1≤𝑗≤𝑘</sub>\[ 𝐼(𝑦<sub>𝑗</sub><sup>(𝑖)</sup>=𝑦 & 𝑥<sub>𝑗</sub><sup>(𝑖)</sup>=𝑥) \]

next normalize counts into probability distributions:
- 𝐏<sub>𝑠𝑡𝑎𝑟𝑡</sub>(𝑌<sub>1</sub>=𝑦) = 𝐶<sub>𝑠𝑡𝑎𝑟𝑡</sub>(𝑌=𝑦) / \[ 𝛴<sub>𝑦'∊𝑌</sub> 𝐶<sub>𝑠𝑡𝑎𝑟𝑡</sub>(𝑌=𝑦') \]
- 𝐏<sub>𝑒𝑛𝑑</sub>(𝑌<sub>𝑇</sub>=𝑦) = 𝐶<sub>𝑒𝑛𝑑</sub>(𝑌=𝑦) / \[ 𝛴<sub>𝑦'∊𝑌</sub> <strong>\[</strong> 𝐶<sub>𝑡𝑟𝑎𝑛𝑠</sub>(𝑦',𝑦) + 𝐶<sub>𝑒𝑛𝑑</sub>(𝑌=𝑦) <strong>\]</strong> \]
- 𝐏<sub>𝑡𝑟𝑎𝑛𝑠</sub>(𝑌<sub>𝑡</sub>=𝑦<sub>𝑢</sub>|𝑌<sub>𝑡-1</sub>=𝑦<sub>𝑣</sub>) = 𝐶<sub>𝑡𝑟𝑎𝑛𝑠</sub>(𝑦<sub>𝑢</sub>,𝑦<sub>𝑣</sub>) / \[ 𝛴<sub>𝑦'∊𝑌</sub> <strong>\[</strong> 𝐶<sub>𝑡𝑟𝑎𝑛𝑠</sub>(𝑦',𝑦<sub>𝑣</sub>) + 𝐶<sub>𝑒𝑛𝑑</sub>(𝑌=𝑦<sub>𝑣</sub>) <strong>\]</strong> \]
- 𝐏<sub>𝑒𝑚𝑖𝑠𝑠</sub>(𝑋=𝑥|𝑌=𝑦) = 𝐶<sub>𝑒𝑚𝑖𝑠𝑠</sub>(𝑥,𝑦) / \[ 𝛴<sub>𝑥'∊𝑋</sub> 𝐶<sub>𝑒𝑚𝑖𝑠𝑠</sub>(𝑥',𝑦) \]
