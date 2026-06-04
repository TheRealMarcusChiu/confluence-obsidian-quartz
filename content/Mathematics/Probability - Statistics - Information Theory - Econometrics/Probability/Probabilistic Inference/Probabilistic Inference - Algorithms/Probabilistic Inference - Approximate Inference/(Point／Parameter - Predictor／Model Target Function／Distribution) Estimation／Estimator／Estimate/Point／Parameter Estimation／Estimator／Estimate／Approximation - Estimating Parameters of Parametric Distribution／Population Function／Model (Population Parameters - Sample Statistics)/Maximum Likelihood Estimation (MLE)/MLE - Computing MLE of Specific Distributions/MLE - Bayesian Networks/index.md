---
title: "MLE - Bayesian Networks"
created: 2021-09-13T05:28:04.720-05:00
modified: 2021-09-13T05:28:04.720-05:00
parent: "[[MLE - Computing MLE of Specific Distributions]]"
children: []
---
given training/sample data 𝐷 the [[Maximum Likelihood Estimation (MLE)|MLE solution]] to estimate 𝜃 is similar to [[MLE - Bernoulli Distribution|Bernoulli MLE]] / [[MAP - Multinoulli Distribution|MAP Multinoulli]]:
- 𝐏(𝑥|𝒖) = 𝜃<sub>𝑥|𝒖</sub> = \#(𝑥,𝒖) / \#(𝒖)

where:
- 𝜃<sub>𝑥|𝒖</sub>- estimated probability that 𝑋 equals 𝑥 given its parent variables 𝑼=𝒖
- \#(𝑥,𝒖) - number of times the tuple (𝑥,𝒖) appears in data 𝐷
- \#(𝒖) - number of times the tuple (𝒖) appears in data 𝐷

### Example (Bernoulli Variables)

given:
- simple bayesian network shown below (with unknown parameters 𝜃 = {𝜃<sub>𝐴</sub>, 𝜃<sub>𝐵|𝐴=0</sub>, 𝜃<sub>𝐵|𝐴=1</sub>})
- completed sample/training data 𝐷 of tuples:
	- (𝐴=0, 𝐵=0)  <font style="color: rgb(128,128,128);">\# complete tuple</font>
	- (𝐴=0, 𝐵=1)  <font style="color: rgb(128,128,128);">\# complete tuple</font>
	- (𝐴=1, 𝐵=1)  <font style="color: rgb(128,128,128);">\# complete tuple</font>

estimate the values of the unknown parameters 𝜃 = {𝜃<sub>𝐴</sub>, 𝜃<sub>𝐵|𝐴=0</sub>, 𝜃<sub>𝐵|𝐴=1</sub>} (NOTE: similar to [[MLE - Bernoulli Distribution|Bernoulli MLE]])

![[MLE - Bayesian Networks/maximum-likelihood-estimation-bayesian-network.png|301]]

How to estimate parameter {𝜃<sub>𝐴</sub>, 𝜃<sub>𝐵|𝐴=0</sub>, 𝜃<sub>𝐵|𝐴=1</sub>} using [[Maximum Likelihood Estimation (MLE)|MLE method]]?

the log-likelihood function 𝓛(𝜃) of the given Bayesian Network (<font style="color: rgb(255,0,0);">NOTE: the log-likelihood function changes wrt the Bayesian Network</font>):
- 𝓛(𝜃) =
	- <font style="color: rgb(128,0,0);">\#(𝐴=1)·</font><font style="color: rgb(128,0,0);">𝑙𝑛(𝜃<sub>𝐴</sub>) <font style="color: rgb(51,51,51);">+ </font><font style="color: rgb(0,128,0);">\#(𝐴=0)·𝑙𝑛(1 - 𝜃<sub>𝐴</sub><font style="color: rgb(255,102,0);"><font style="color: rgb(0,128,0);">)</font> <font style="color: rgb(51,51,51);">+</font></font></font> </font>
	- <font style="color: rgb(128,0,0);">\#(𝐴=1,𝐵=1)·𝑙𝑛(𝜃<sub>𝐵|𝐴=1</sub>)</font><font style="color: rgb(128,0,0);"><font style="color: rgb(128,128,0);"><font style="color: rgb(128,0,0);"><font style="color: rgb(51,51,51);"> +</font> <font style="color: rgb(0,128,0);">\#(𝐴=1,𝐵=0)·𝑙𝑛(</font></font><font style="color: rgb(0,128,0);">1 - 𝜃<sub>𝐵|𝐴=1</sub></font></font><font style="color: rgb(0,128,0);">)</font></font> +
	- <font style="color: rgb(128,0,0);">\#(𝐴=0,𝐵=1)·𝑙𝑛(𝜃<sub>𝐵|𝐴=0</sub>) </font>+<font style="color: rgb(0,128,0);">\#(𝐴=0,𝐵=0)·𝑙𝑛(1 - 𝜃<sub>𝐵|𝐴=0</sub>) <font style="color: rgb(128,128,128);">\# click here for </font>[[Log-Likelihood Function - Bayesian Network (Binary Variables)|step-by-step computation]]</font>

now differentiate with respect to 𝜃<sub>𝐴</sub>
- 𝛿𝓛(𝜃) / 𝛿𝜃<sub>𝐴</sub> = <font style="color: rgb(128,0,0);">\#(𝐴=1)</font><font style="color: rgb(128,0,0);">/𝜃<sub>𝐴</sub> <font style="color: rgb(51,51,51);">- </font><font style="color: rgb(0,128,0);">\#(𝐴=0)/(1 - 𝜃<sub>𝐴</sub><font style="color: rgb(255,102,0);"><font style="color: rgb(0,128,0);">) <font style="color: rgb(51,51,51);">+ 0 + 0 + 0 + 0</font></font></font></font></font>

equate to 0 and solve for 𝜃<sub>𝐴</sub>
- 𝜃<sub>𝐴=1</sub> = \[\#(𝐴=1)\] / \[∑<sub>𝑎∊𝐴</sub>\#(𝐴=𝑎)\] <font style="color: rgb(128,128,128);">\# see calculations in </font>[[MLE - Bernoulli Distribution|MLE Bernoulli]]
- 𝜃<sub>𝐴=1</sub> = \[\#(𝐴=1)\] / \[𝑛\]

repeat for {𝜃<sub>𝐵|𝐴=0</sub>, 𝜃<sub>𝐵|𝐴=1</sub>} and we get:
- 𝜃<sub>𝐵=1|𝐴=0</sub> = \[\#(𝐵=1,𝐴=0)\] / \[∑<sub>𝑏∊𝐵</sub>\#(𝐵=𝑏,𝐴=0)\] = \[\#(𝐵=1,𝐴=0)\] / \[\#(𝐴=0)\]
- 𝜃<sub>𝐵=1|𝐴=1</sub> = \[\#(𝐵=1,𝐴=1)\] / \[∑<sub>𝑏∊𝐵</sub>\#(𝐵=𝑏,𝐴=1)\] = \[\#(𝐵=1,𝐴=1)\] / \[\#(𝐴=1)\]

therefore, with the completed sample/training data 𝐷 of tuples:
- (𝐴=0, 𝐵=0)  <font style="color: rgb(128,128,128);">\# complete tuple</font>
- (𝐴=0, 𝐵=1)  <font style="color: rgb(128,128,128);">\# complete tuple</font>
- (𝐴=1, 𝐵=1)  <font style="color: rgb(128,128,128);">\# complete tuple</font>

we estimate the parameters as so:
- 𝜃<sub>𝐴=1</sub>= 1 / 3
- 𝜃<sub>𝐵=1|𝐴=0</sub>= 1 / 2
- 𝜃<sub>𝐵=1|𝐴=1</sub>= 1 / 1

### When Denominator 0

In cases where denominator is 0, one can use (laplace smoothing or [[MAP - Bayesian Networks|MAP Bayesian Networks]])
