---
title: "Geometric Distribution"
created: 2021-09-13T05:27:33.480-05:00
modified: 2026-05-21T03:35:19.584-05:00
parent: "[[Probability Distribution - Discrete Functions／Models (Probability Mass Functions)]]"
children: []
---
###### Geometric Distribution
````excerpt
- is the number of [[Bernoulli Distribution|Bernoulli trials]] needed to get the first success
````
^excerpt

# Probability Mass Function
- 𝐏(𝑋=𝑥) = 𝐏{the 1<sup>𝑠𝑡</sup> success occurs on the 𝑥<sup>𝑡ℎ</sup> bernoulli trial}
- 𝐏(𝑋=𝑥) = (1−𝑝)<sup>𝑥−1</sup>𝑝

# Expectation

𝐄\[𝑋\] = 1/𝑝

> [!expand]- Click here to expand...
> - 𝐄\[𝑋\] = 𝛴<sub>1≤𝑥≤∞</sub>\[𝑥·𝐏(𝑋=𝑥)\] <font style="color: rgb(122,134,154);">\# see</font> [[Discrete Distribution - Calculating (Expected Value - Expectation - Mean - Average)|calculating the expected value of a discrete distribution]]
> - 𝐄\[𝑋\] = 𝛴<sub>1≤𝑥≤∞</sub>\[𝑥·(1-𝑝)<sup>𝑥−1</sup>𝑝\]
> - 𝐄\[𝑋\] = 𝛴<sub>1≤𝑥≤∞</sub>\[𝑥𝑞<sup>𝑥−1</sup>𝑝\] <font style="color: rgb(122,134,154);">\# let 𝑞 = 1-𝑝</font>
> - 𝐄\[𝑋\] = 𝑝 \* 𝛴<sub>1≤𝑥≤∞</sub>\[𝑥𝑞<sup>𝑥−1</sup>\]
> - 𝐄\[𝑋\] = 𝑝 \* \[1/(1−𝑞)<sup>2</sup>\] <font style="color: rgb(122,134,154);">\# see expand below</font>
> 	- 
> > [!expand]- Click here to expand...
> > [[Geometric Series／Succession|geometric series (infinite)]] 𝑠(𝑞) = 𝛴<sub>0≤𝑥≤∞</sub>\[𝑞<sup>𝑥</sup>\] equals 1/(1-𝑞) for 𝑞\<1
> >
> > taking the derivative of 𝑞:
> >
> > > [!list-indent-undo]
> > > > [!indent]
> > > > ![[Geometric Distribution/geomtetric-distribution-expectation.png|400]]
> - 𝐄\[𝑋\] = 𝑝 \* \[1/(1−(1-𝑝))<sup>2</sup>\]
> - 𝐄\[𝑋\] = 𝑝 \* \[1/(1−1+𝑝)<sup>2</sup>\]
> - 𝐄\[𝑋\] = 𝑝 \* \[1/(0+𝑝)<sup>2</sup>\]
> - 𝐄\[𝑋\] = 𝑝 \* (1/𝑝<sup>2</sup>)
> - 𝐄\[𝑋\] = 𝑝/𝑝<sup>2</sup>
> - 𝐄\[𝑋\] = 1/𝑝
# Variance

𝑉𝑎𝑟(𝑋) = (1-𝑝) / 𝑝<sup>2</sup>

> [!expand]- Click here to expand...
> proof of variance [https://math.stackexchange.com/questions/1299465/proof-variance-of-geometric-distribution](https://math.stackexchange.com/questions/1299465/proof-variance-of-geometric-distribution)
# Cumulative Distribution Function

TODO - [http://www.math.wm.edu/~leemis/chart/UDR/PDFs/Geometric.pdf](http://www.math.wm.edu/~leemis/chart/UDR/PDFs/Geometric.pdf)
# Moment Generating Function
- $M-X(t) = E[e^{tX}] = \frac{pe^t}{ 1 - qe^t}$

See: [[Moment-Generating Function - Geometric Distribution]]
# Subpages
- [[Geometric Distribution vs Binomial Distribution]]
- [[Geometric Distribution vs Negative Binomial Distribution]]
- Geometric Distribution is the only Discrete Distribution with the [[Probability Distribution - Memoryless Property|Memoryless Property]] (similar to its continuous counterpart [[Exponential Distribution]])
