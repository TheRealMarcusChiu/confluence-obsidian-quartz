---
title: "EM - Random Bayesian Mixture Model"
created: 2021-09-13T05:27:55.416-05:00
modified: 2024-12-05T10:52:14.916-06:00
parent: "[[Expectation Maximization (EM)]]"
children: []
---
- Generate k random DAGs with random parameters (with certain constraints like a limited number of parents etc)
- Use a hidden variable which will have a "?" in the training data because this will never be observed.
- This hidden variable will act as a parent to all the k DAGs
- Use EM to optimize the parameters for the hidden variable and the other randomly initialized variables.
- after EM, sum out the hidden variable to generate a clique over the child nodes in all the DAGs, which produces the MixedRandomBayes graph
- Calculate the LLdiff between the original graph and the MixedRandomBayes graph.

given:
- completed sample/training data 𝐷 = {𝑿<sub>1</sub>, ..., 𝑿<sub>𝑛</sub>} (each 𝑿<sub>𝑖</sub> is sampled randomly from one of the 𝑘 bayesian networks):
	- 𝑿<sub>1</sub>= (𝑋<sub>11</sub>=0, ..., 𝑋<sub>1𝑚</sub>=0)  <font style="color: rgb(128,128,128);">\# complete tuple</font>
	- 𝑿<sub>2</sub>= (𝑋<sub>21</sub>=1, ..., 𝑋<sub>2𝑚</sub>=1)  <font style="color: rgb(128,128,128);">\# complete tuple</font>
	- ...
	- 𝑿<sub>𝑛</sub>= (𝑋<sub>𝑛1</sub>=0, ..., 𝑋<sub>𝑛𝑚</sub>=1)  <font style="color: rgb(128,128,128);">\# complete tuple</font>

estimate the structure and the values of the unknown parameters 𝜃 (NOTE: similar to [Bernoulli MLE](http://confluence.marcuschiu.com/display/NOT/MLE+-+Bernoulli+Distribution))

generate 𝑘 random [[Bayesian Networks (BN)|bayesian networks]], each with:
- 𝑚 variables/nodes
- unknown values for parameters 𝜃

let's add a hidden variable 𝐻 with Multinoulli Distribution having 𝑘 values. add this to each 𝑿<sub>𝑖</sub>:
- 𝑿<sub>1</sub>= (𝐻<sub>1</sub>=?, 𝑋<sub>11</sub>=0, ..., 𝑋<sub>1𝑚</sub>=0)  <font style="color: rgb(128,128,128);">\# incomplete tuple</font>
- 𝑿<sub>2</sub>= (𝐻<sub>2</sub>=?, 𝑋<sub>21</sub>=1, ..., 𝑋<sub>2𝑚</sub>=1)  <font style="color: rgb(128,128,128);">\# incomplete tuple</font>
- ...
- 𝑿<sub>𝑛</sub>= (𝐻<sub>𝑛</sub>=?, 𝑋<sub>𝑛1</sub>=0, ..., 𝑋<sub>𝑛𝑚</sub>=1)  <font style="color: rgb(128,128,128);">\# incomplete tuple</font>

Bert - [https://youtu.be/e6AE1Ws_nB4?t=1165](https://youtu.be/e6AE1Ws_nB4?t=1165)

Gogate - [https://youtu.be/8N0HsrBY7WI?t=2581](https://youtu.be/8N0HsrBY7WI?t=2581)
# EM Algorithm 1
1. <strong>INITIALIZATION STEP</strong>:
	1. generate 𝑘 random [[Bayesian Networks (BN)|bayesian networks]] each with 𝑚 variables/nodes
	2. initialize the parameters 𝜃 to random values
	3. initialize 𝑝 = \[𝑝<sub>1</sub>, ..., 𝑝<sub>𝑘</sub>\] = 1/k
	4. data\[𝑘\]\[num-orig-data-instances\] = // create 𝑘 data-instances for each original data-instance where:
		1. each of the 𝑘 data-instances contain 1 hidden variable instantiated to a value \[0,𝑘-1\]
2. <strong>EXPECTATION STEP</strong>:
	1. double\[\] weight-total-per-bayes-net = new double\[k\];
	2. double\[\]\[\] weights = new double\[k\]\[numSamples\];
	3. for i in range(k):
		1. for j in range(num-orig-data-instances)
			1. for bn in {bayes-nets}
				1. w = bn.estimateProbability(data\[i\]\[j\])
3. <strong>MAXIMIZATION STEP</strong>:
4. repeat from Step 2 until convergence or max iterations

# EM Algorithm 2
1. <strong>INITIALIZATION STEP</strong>:
	1. generate 𝑘 random [[Bayesian Networks (BN)|bayesian networks]] each with 𝑚 variables/nodes
	2. initialize the parameters 𝜃 to random values
	3. initialize 𝑝 = \[𝑝<sub>1</sub>, ..., 𝑝<sub>𝑘</sub>\] = 1/k
2. <strong>EXPECTATION STEP</strong>:
	1. double\[\] weight-total-per-bayes-net = new double\[k\];
	2. double\[\]\[\] weights = new double\[k\]\[numSamples\];
	3. for each 𝑿<sub>𝑖</sub>:
		1. total = 0.0
		2. for each bayes-net:
			1. 𝑤 = bayes-net.computeProbability(𝑿<sub>𝑖</sub>) \* 𝑝\[bayes-net\]
			2. weights\[bayes-net\]\[𝑿<sub>𝑖</sub>\] = 𝑤
			3. total += 𝑤
			4. weight-total-per-bayes-net\[bayes-net\] += 𝑤
		3. for each 1 to k:
			1. weights\[k\]\[𝑿<sub>𝑖</sub>\] /= total
3. <strong>MAXIMIZATION STEP</strong>:
	1. // estimate p
	2. for (int i = 0; i \< k; i++)
		1. 𝑝\[i\] = weight-total-per-bayes-net\[i\] / 𝑛
	3. // estimate parameters 𝜃
	4. for each bayes-net:
		1. run MLE on data with corresponding weights\[bayes-net\]
4. repeat from Step 2 until convergence or max iterations
