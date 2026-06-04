---
title: "Gibbs Sampling"
created: 2021-09-13T05:28:13.343-05:00
modified: 2025-09-08T17:52:47.466-05:00
parent: "[[Markov Chain Monte Carlo (MCMC)]]"
children: []
---
###### Gibbs Sampling
````excerpt
- is a [[Markov Chain Monte Carlo (MCMC)|Markov Chain Monte Carlo]] method for obtaining a sequence of random samples which converge to being distributed according to a target probability distribution for which direct sampling is difficult
- is a special case of [[Metropolis-Hastings (MH) Algorithm]] that accepts all proposals
- converts a hard inference problem into a sequence of "easy" sampling steps
- simplest MCMC for sampling [[Probabilistic Graphical Models (PGM) - Structured Probabilistic Models (SPM)|probabilistic graphical models]] (see: [[PGM - Gibbs Distribution|Gibbs Distribution & Probabilistic Graphical Models]])
````
^excerpt

# Gibbs Sampling - Introduction

[https://www.coursera.org/lecture/probabilistic-graphical-models-2-inference/gibbs-sampling-NkP41](https://www.coursera.org/lecture/probabilistic-graphical-models-2-inference/gibbs-sampling-NkP41)
- target distribution is some [[PGM - Gibbs Distribution|Gibbs Distribution]]: 𝐏<sub>ϕ</sub>(𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>)
- in the Markov Chain State Space each state is a complete assignment 𝒙 to 𝑿 = {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>}
- transition model given starting state 𝒙:
	- for 1 ≤ 𝑖 ≤ 𝑛
		- 𝑥<sub>𝑖</sub>' = sample from 𝐏<sub>ϕ</sub>(𝑋<sub>𝑖</sub>|𝒙<sub>-𝑖</sub>)
	- 𝒙' = {𝑥<sub>1</sub>', ..., 𝑥<sub>𝑛</sub>'}
- therefore, we have 𝑛 transition functions:
	- 𝑇<sub>𝑖</sub>((𝒙<sub>-𝑖</sub>, 𝑥<sub>𝑖</sub>) → (𝒙<sub>-𝑖</sub>, 𝑥<sub>𝑖</sub>')) = 𝐏<sub>ϕ</sub>(𝑋<sub>𝑖</sub>|𝒙<sub>-𝑖</sub>) <font style="color: rgb(128,128,128);">\# for 1 ≤ 𝑖 ≤ 𝑛</font>

###### computational cost of sampling from 𝐏<sub>ϕ</sub>(𝑋<sub>𝑖</sub>|𝒙<sub>-𝑖</sub>)
- 𝐏<sub>ϕ</sub>(𝑋<sub>𝑖</sub>|𝒙<sub>-𝑖</sub>) = 𝐏<sub>ϕ</sub>(𝑋<sub>𝑖</sub>,𝒙<sub>-𝑖</sub>) / 𝐏<sub>ϕ</sub>(𝒙<sub>-𝑖</sub>)
	- 𝐏<sub>ϕ</sub>(𝑋<sub>𝑖</sub>,𝒙<sub>-𝑖</sub>) = (1/𝑍) 𝐏<sub>ϕ</sub>'(𝑋<sub>𝑖</sub>,𝒙<sub>-𝑖</sub>)
	- 𝐏<sub>ϕ</sub>(𝒙<sub>-𝑖</sub>) = (1/𝑍) 𝐏<sub>ϕ</sub>'(𝒙<sub>-𝑖</sub>)
- 𝐏<sub>ϕ</sub>(𝑋<sub>𝑖</sub>|𝒙<sub>-𝑖</sub>) = \[(1/𝑍)𝐏<sub>ϕ</sub>'(𝑋<sub>𝑖</sub>,𝒙<sub>-𝑖</sub>)\] / \[(1/𝑍)𝐏<sub>ϕ</sub>'(𝒙<sub>-𝑖</sub>)\] <font style="color: rgb(128,128,128);">\# replace normalized distribution with un-normalized distribution</font>
- 𝐏<sub>ϕ</sub>(𝑋<sub>𝑖</sub>|𝒙<sub>-𝑖</sub>) = 𝐏<sub>ϕ</sub>'(𝑋<sub>𝑖</sub>,𝒙<sub>-𝑖</sub>) / 𝐏<sub>ϕ</sub>'(𝒙<sub>-𝑖</sub>) <font style="color: rgb(128,128,128);">\# (1/𝑍) is canceled out</font>
	- 𝐏<sub>ϕ</sub>'(𝑋<sub>𝑖</sub>,𝒙<sub>-𝑖</sub>) - is a product of factors/[[MN／MRF - Potential Functions (𝜙)|potential functions]]
	- 𝐏<sub>ϕ</sub>'(𝒙<sub>-𝑖</sub>) - is a product of factors/[[MN／MRF - Potential Functions (𝜙)|potential functions]]
- 𝐏<sub>ϕ</sub>(𝑋<sub>𝑖</sub>|𝒙<sub>-𝑖</sub>) = \[𝑝𝑟𝑜𝑑𝑢𝑐𝑡-𝑜𝑓-𝑓𝑎𝑐𝑡𝑜𝑟𝑠-𝑡𝘩𝑎𝑡-𝑐𝑜𝑛𝑡𝑎𝑖𝑛(𝑋<sub>𝑖</sub>)\] / 𝛴<sub>𝑥<sub>𝑖</sub>∊𝑋<sub>𝑖</sub></sub>\[𝑝𝑟𝑜𝑑𝑢𝑐𝑡-𝑜𝑓-𝑓𝑎𝑐𝑡𝑜𝑟𝑠-𝑡𝘩𝑎𝑡-𝑐𝑜𝑛𝑡𝑎𝑖𝑛(𝑋<sub>𝑖</sub>)\]

> [!expand]- for example
> ![[Gibbs Sampling/gibbs-sampling-example-1.png|301]]
>
> sample from: 𝐏<sub>ϕ</sub>(𝑋<sub>1</sub>|𝒙<sub>-1</sub>)
> - 𝐏<sub>ϕ</sub>(𝑋<sub>1</sub>|𝒙<sub>-1</sub>) = 𝐏<sub>ϕ</sub>'(𝑋<sub>𝑖</sub>,𝒙<sub>-𝑖</sub>) / 𝐏<sub>ϕ</sub>'(𝒙<sub>-𝑖</sub>)
> - 𝐏<sub>ϕ</sub>(𝑋<sub>1</sub>|𝒙<sub>-1</sub>) = 𝜙(𝑋<sub>1</sub>,𝑋<sub>2</sub>=𝑥<sub>2</sub>)𝜙(𝑋<sub>1</sub>,𝑋<sub>3</sub>=𝑥<sub>3</sub>)𝜙(𝑋<sub>2</sub>=𝑥<sub>2</sub>,𝑋<sub>4</sub>=𝑥<sub>4</sub>)𝜙(𝑋<sub>3</sub>=𝑥<sub>3</sub>,𝑋<sub>4</sub>=𝑥<sub>4</sub>) / 𝛴<sub>𝑥<sub>1</sub>∊𝑋<sub>1</sub></sub> \[𝜙(𝑋<sub>1</sub>=𝑥<sub>1</sub>,𝑋<sub>2</sub>=𝑥<sub>2</sub>)𝜙(𝑋<sub>1</sub>=𝑥<sub>1</sub>,𝑋<sub>3</sub>=𝑥<sub>3</sub>)𝜙(𝑋<sub>2</sub>=𝑥<sub>2</sub>,𝑋<sub>4</sub>=𝑥<sub>4</sub>)𝜙(𝑋<sub>3</sub>=𝑥<sub>3</sub>,𝑋<sub>4</sub>=𝑥<sub>4</sub>)\]
> - 𝐏<sub>ϕ</sub>(𝑋<sub>1</sub>|𝒙<sub>-1</sub>) = 𝜙(𝑋<sub>1</sub>,𝑋<sub>2</sub>=𝑥<sub>2</sub>)𝜙(𝑋<sub>1</sub>,𝑋<sub>3</sub>=𝑥<sub>3</sub>) / 𝛴<sub>𝑥<sub>1</sub>∊𝑋<sub>1</sub></sub> \[𝜙(𝑋<sub>1</sub>=𝑥<sub>1</sub>,𝑋<sub>2</sub>=𝑥<sub>2</sub>)𝜙(𝑋<sub>1</sub>=𝑥<sub>1</sub>,𝑋<sub>3</sub>=𝑥<sub>3</sub>)\] \# 𝜙's that don't contain 𝑋<sub>1</sub> cancels out
# Gibbs Sampling - Versions
###### standard gibbs
- 𝑥<sup>(𝑡+1)</sup> \~ 𝐏(𝑋|𝑦<sup>(𝑡)</sup>, 𝑧<sup>(𝑡)</sup>)
- 𝑦<sup>(𝑡+1)</sup> \~ 𝐏(𝑌|𝑥<sup>(𝑡+1)</sup>, 𝑧<sup>(𝑡)</sup>)
- 𝑧<sup>(𝑡+1)</sup> \~ 𝐏(𝑍|𝑥<sup>(𝑡+1)</sup>, 𝑦<sup>(𝑡+1)</sup>)

###### collapsed (variable 𝑍 is integrated out)
- 𝑥<sup>(𝑡+1)</sup> \~ 𝐏(𝑋|𝑦<sup>(𝑡)</sup>)
- 𝑦<sup>(𝑡+1)</sup> \~ 𝐏(𝑌|𝑥<sup>(𝑡+1)</sup>)

###### blocking (grouping 𝑋 and 𝑌)
- 𝑥<sup>(𝑡+1)</sup>, 𝑦<sup>(𝑡+1)</sup> \~ 𝐏(𝑋,𝑌|𝑧<sup>(𝑡)</sup>)
- 𝑧<sup>(𝑡+1)</sup> \~ 𝐏(𝑍|𝑥<sup>(𝑡+1)</sup>, 𝑦<sup>(𝑡+1)</sup>)

# Gibbs Sampling - Downsides
- requires us to know and sample from the conditional distribution 𝐏(𝑋<sub>𝑖</sub>|𝒙<sub>-𝑖</sub>)) or (product of factors):
	- in discrete models, it is easy
	- in continuous models, the conditional distribution may not be one that has a parametric form that allows sampling, so that Gibbs is not applicable
- often slow to mix, especially when probabilities are peaked. the Gibbs chain uses only very local moves over the state space: moves that change one variable at a time. In models where variables are tightly correlated, such moves often lead from states whose probability is high to states whose probability is very low. In this case, the high-probability states will form strong basins of attraction, and the chain will be very unlikely to move away from such a state; that is, the chain will mix very slowly. In this case, we often want to consider chains that allow a broader range of moves, including much larger steps in the space.
- slow when compared to random walk metropolis when a subset of variables in {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>} are correlated

# Resources
- [https://www.youtube.com/watch?v=ER3DDBFzH2g](https://www.youtube.com/watch?v=ER3DDBFzH2g)
