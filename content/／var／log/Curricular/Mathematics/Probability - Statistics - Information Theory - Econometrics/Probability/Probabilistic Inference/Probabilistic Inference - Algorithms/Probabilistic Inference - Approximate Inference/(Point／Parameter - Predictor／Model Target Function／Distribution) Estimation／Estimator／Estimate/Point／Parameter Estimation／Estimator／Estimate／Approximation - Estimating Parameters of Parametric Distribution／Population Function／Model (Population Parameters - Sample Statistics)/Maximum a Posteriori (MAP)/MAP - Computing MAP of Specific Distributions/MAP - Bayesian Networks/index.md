---
title: "MAP - Bayesian Networks"
created: 2021-09-13T05:27:57.885-05:00
modified: 2021-09-13T05:27:57.885-05:00
parent: "[[MAP - Computing MAP of Specific Distributions]]"
children: []
---
given training/sample data 𝐷 the [[Maximum a Posteriori (MAP)|MAP solution]] to estimate 𝜃 is similar to [[MAP - Bernoulli Distribution|Bernoulli MAP]]/[[MAP - Multinoulli Distribution|Multinoulli MAP]]:
- 𝐏(𝑥|𝒖) = 𝜃<sub>𝑥|𝒖</sub> = \[ \#(𝑥,𝒖) + 𝛼<sub>𝑥|𝒖</sub> \] / \[ \#(𝒖) + 𝛼<sub>𝒖</sub> \]

where:
- 𝜃<sub>𝑥|𝒖</sub>- estimated probability that 𝑋 equals 𝑥 given its parent variables 𝑼=𝒖
- \#(𝑎,𝒖) - number of times the tuple (𝑎,𝒖) appears in data 𝐷
- \#(𝒖) - number of times the tuple (𝒖) appears in data 𝐷
- 𝛼<sub>𝒖</sub>= ∑<sub>𝑥∊𝑋</sub>\[𝛼<sub>𝑥|𝒖</sub>\] - these are the prior beliefs (𝛼<sub>𝑥|𝒖</sub>can be thought as prior sample counts, though they can be non-integers)

### Example - Binary Variables

given:
- simple bayesian network shown below (with unknown parameters 𝜃 = {𝜃<sub>𝐴</sub>, 𝜃<sub>𝐵|𝐴=0</sub>, 𝜃<sub>𝐵|𝐴=1</sub>})
- completed sample/training data 𝐷 of tuples:
	- (𝐴=0, 𝐵=0)  <font style="color: rgb(128,128,128);">\# complete tuple</font>
	- (𝐴=0, 𝐵=1)  <font style="color: rgb(128,128,128);">\# complete tuple</font>
	- (𝐴=1, 𝐵=1)  <font style="color: rgb(128,128,128);">\# complete tuple</font>

estimate the values of the unknown parameters 𝜃 = {𝜃<sub>𝐴</sub>, 𝜃<sub>𝐵|𝐴=0</sub>, 𝜃<sub>𝐵|𝐴=1</sub>} (NOTE: similar to [[MAP - Bernoulli Distribution|Bernoulli MAP]])

![[MAP - Bayesian Networks/maximum-likelihood-estimation-bayesian-network.png|301]]

let 𝐷 = {(𝐴<sub>1</sub>,𝐵<sub>1</sub>), ..., (𝐴<sub>𝑛</sub>,𝐵<sub>𝑛</sub>)} be 𝑛 observed instances

![[MAP - Bayesian Networks/map-bayesian-network-example.png]]

[[map-bayesian-network-example.xml]]
- instances are [[Probability Independence (Marginal Independence - Conditional Independence)|independent]] / [[BN - (D-Separation ｜ D-Connection)|d-separated]] from each other given the parameters {𝜃<sub>𝐴</sub>, 𝜃<sub>𝐵|0</sub>, 𝜃<sub>𝐵|1</sub>}
- parameters for individual variables are independent a priori: 𝐏(𝜃) = ∏<sub>𝑖∊𝑛𝑜𝑑𝑒𝑠-𝑜𝑓-𝑛𝑒𝑡𝑤𝑜𝑟𝑘</sub>\[𝐏(𝜃<sub>𝑖|𝑝𝑎𝑟𝑒𝑛𝑡𝑠-𝑜𝑓(𝑖)</sub>\]
- posteriors of 𝜃 are [[Probability Independence (Marginal Independence - Conditional Independence)|independent]] / [[BN - (D-Separation ｜ D-Connection)|d-separated]] given complete data:
	- thus, 𝐏(𝜃<sub>𝐴</sub>, 𝜃<sub>𝐵|𝐴</sub>|𝐷) = 𝐏(𝜃<sub>𝐴</sub>|𝐷)𝐏(𝜃<sub>𝐵|𝐴</sub>|𝐷)
	- as in MLE, we can solve each estimation problem separately
	- also holds for parameters within families: 𝐏(𝜃<sub>𝐵|𝐴</sub>|𝐷) = 𝐏(𝜃<sub>𝐵|0</sub>|𝐷)𝐏(𝜃<sub>𝐵|1</sub>|𝐷)
- posteriors of 𝜃 can be computed independently
	- for multinoulli likelihood 𝜃<sub>𝑥|𝒖</sub>if prior is Dirichlet(𝛼<sub>𝑥<sub>1</sub>|𝒖</sub>, ..., 𝛼<sub>𝑥<sub>𝑘</sub>|𝒖</sub>), then posterior is also Dirichlet(𝛼<sub>𝑥<sub>1</sub>|𝒖</sub> + \#(𝑥<sub>1</sub>,𝒖), ..., 𝛼<sub>𝑥<sub>𝑘</sub>|𝒖</sub>+ \#(𝑥<sub>𝑘</sub>,𝒖))
		- \#(𝑥<sub>𝑖</sub>,𝒖) - number of samples in data 𝐷 that matches (𝑥<sub>𝑖</sub>,𝒖)
