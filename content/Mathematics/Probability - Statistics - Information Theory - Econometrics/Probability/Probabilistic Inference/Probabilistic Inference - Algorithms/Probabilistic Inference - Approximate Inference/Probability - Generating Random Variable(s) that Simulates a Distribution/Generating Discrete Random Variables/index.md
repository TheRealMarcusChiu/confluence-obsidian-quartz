---
title: "Generating Discrete Random Variables"
created: 2021-09-13T05:28:19.933-05:00
modified: 2021-09-13T05:28:19.933-05:00
parent: "[[Probability - Generating Random Variable(s) that Simulates a Distribution]]"
children:
  - "[[Generating Discrete Random Variables - Poisson Distribution]]"
---
general method of generating discrete random variables of a particular [[Probability Distribution - Discrete Functions／Models (Probability Mass Functions)|discrete distribution]]

consider an arbitrary discrete random variable 𝐗 that takes values 𝑥<sub>0</sub>, 𝑥<sub>1</sub>, ... with probabilities <em>𝑝</em><sub>0</sub>, <em>𝑝</em><sub>1</sub>, ...
- <em><em>𝑝</em></em><sub>i</sub> = 𝐏{𝐗 = 𝑥<sub>i</sub>}
- <strong>∑</strong><em><em>𝑝</em></em><sub>i</sub> = 1

simulating 𝐗 can be done with the following steps
1. Divide the interval \[0, 1\] into subintervals as shown in Figure,
	1. 𝐴<sub>0</sub>= \[0, <em>𝑝</em><sub>0</sub>)
	2. 𝐴<sub>1</sub>= \[<em>𝑝</em><sub>0</sub>, <em>𝑝</em><sub>0</sub>+<em>𝑝</em><sub>1</sub>)
	3. 𝐴<sub>2</sub>= \[<em>𝑝</em><sub>0</sub>+<em>𝑝</em><sub>1</sub>, <em>𝑝</em><sub>0</sub>+<em>𝑝</em><sub>1</sub>+<em>𝑝</em><sub>2</sub>)
	4. etc
2. subinterval 𝐴<sub>i</sub>will have length <em>𝑝</em><sub>i</sub>; there may be a finite or infinite number of them, according to possible values of 𝐗
3. obtain a [[Uniform Distribution|Standard Uniform]] random variable 𝐔 from a [[Pseudo-Random Number Generator (PRNG) - Deterministic Random Bit Generator (DRBG)|random number generator]] or a table of random numbers
4. if 𝐔 belongs to 𝐴<sub>i</sub>, let 𝐗=x<sub>i</sub>

from the Uniform Distribution, it follows that:

𝐏{𝐗 = 𝑥<sub>i</sub>} = 𝐏{𝐔 ∈ 𝐴<sub>i</sub>} = <em>𝑝</em><sub>i</sub>

Hence, the generated variable 𝐗 has the desired distribution
