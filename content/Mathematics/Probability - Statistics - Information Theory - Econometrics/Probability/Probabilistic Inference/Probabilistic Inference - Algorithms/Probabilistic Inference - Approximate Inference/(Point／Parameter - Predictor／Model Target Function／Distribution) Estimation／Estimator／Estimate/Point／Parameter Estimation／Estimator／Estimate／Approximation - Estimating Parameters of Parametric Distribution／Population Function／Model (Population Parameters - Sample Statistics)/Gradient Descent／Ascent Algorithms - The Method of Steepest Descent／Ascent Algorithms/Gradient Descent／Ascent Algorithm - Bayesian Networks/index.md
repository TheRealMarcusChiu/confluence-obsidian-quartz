---
title: "Gradient Descent／Ascent Algorithm - Bayesian Networks"
created: 2021-09-13T05:27:56.003-05:00
modified: 2023-07-16T17:20:18.452-05:00
parent: "[[Gradient Descent／Ascent Algorithms - The Method of Steepest Descent／Ascent Algorithms]]"
children: []
---
given:
- Bayesian network structure
- uncomplete sample/training data e.g. (𝑎, 𝑏, 𝑐, 𝑑)
	- (1, ?, ?, 0) <font style="color: rgb(128,128,128);">\# un-complete</font>
	- (0, 0, ?, 0) <font style="color: rgb(128,128,128);">\# un-complete</font>
	- (0, 1, 1, 0) <font style="color: rgb(128,128,128);">\# complete sample</font>
	- ...
	- (?, ?, ?, 1) <font style="color: rgb(128,128,128);">\# un-complete</font>

estimate the values of the unknown parameters 𝜃 = {𝜃<sub>𝐴</sub>, 𝜃<sub>𝐵</sub>, 𝜃<sub>𝐶|0,0</sub>, 𝜃<sub>𝐶|0,1</sub>, 𝜃<sub>𝐶|1,0</sub>, 𝜃<sub>𝐶|1,1</sub>, 𝜃<sub>𝐷|0</sub>, 𝜃<sub>𝐷|1</sub>}

![[Gradient Descent／Ascent Algorithm - Bayesian Networks/expacted-maximization-bayesian-networks.png|600]]
# Algorithm 1 - Steps
1. <strong>INITIALIZATION STEP</strong>: initialize the parameters 𝜃 to any value(s)
> [!expand]- Click here to expand...
> choose any values for all parameters 𝜃
> - 𝜃<sub>𝐴</sub> = 0.3
> - 𝜃<sub>𝐵</sub> = 0.9
> - 𝜃<sub>𝐶|0,0</sub> = 0.83
> - 𝜃<sub>𝐶|0,1</sub> = 0.09
> - 𝜃<sub>𝐶|1,0</sub> = 0.6
> - 𝜃<sub>𝐶|1,1</sub> = 0.2
> - 𝜃<sub>𝐷|0</sub> = 0.1
> - 𝜃<sub>𝐷|1</sub> = 0.8
2. <strong>OBJECTIVE FUNCTION & DIFFERENTIATE STEP</strong>: compute the [[Objective Function／Criterion - Cost／Loss／Error Function - Expected Cost／Loss／Error|objective function]], then compute the derivative of the objective function with respect to each parameter 𝜃<sub>𝑥|𝒖</sub>
> [!expand]- Click here to expand...
> [[Gradient Descent／Ascent Algorithms - The Method of Steepest Descent／Ascent Algorithms|general gradient ascent/descent formula]]
>
> the <em>objective function</em> (𝑓<sub>𝑜𝑏𝑗</sub>) depends on:
> - [[Maximum Likelihood Estimation (MLE)]] - 𝑓<sub>𝑜𝑏𝑗</sub> = likelihood or log-likelihood
> - [[Maximum a Posteriori (MAP)|Maximum a Posterior Estimation (MAP)]] - 𝑓<sub>𝑜𝑏𝑗</sub> = posterior = likelihood \* prior
>
> ###### Maximum Likelihood Estimation (MLE)
>
> > [!expand]- Method 1
> > compute the derivative of 𝐿𝐿 with respect to 𝜃<sub>𝑥|𝒖</sub>:
> > - for a partially observed data-instance 𝒐:
> > 	- 𝛿𝐏(𝒐) / 𝛿𝐏(𝑥|𝒖)  = \[1/𝐏(𝑥|𝒖)\] \* 𝐏(𝑥,𝒖,𝒐)
> > - for a partially observed data-set 𝐷 = {𝒐<sup>(1)</sup>, ..., 𝒐<sup>(𝑛)</sup>}:
> > 	- 𝛿𝑙𝑜𝑔𝐏(𝐷|𝜽) / 𝛿𝐏(𝑥|𝒖)  = \[1/𝐏(𝑥|𝒖)\] \* 𝛴<sub>1≤𝑖≤𝑛</sub>𝐏(𝑥,𝒖|𝒐<sup>(𝑖)</sup>,𝜽)
> > - suppose that the CPD entries of 𝐏(𝑋|𝑼) are written as functions of some set of parameters 𝜽. Then, for a specific parameter 𝜃 ∈ 𝜽, we have:
> > 	- 𝛿𝑙𝑜𝑔𝐏(𝐷|𝜽) / 𝛿𝜃 = 𝛴<sub>𝑥∊𝑋</sub>𝛴<sub>𝒖∊𝑼</sub><strong>\[</strong><font style="color: rgb(128,0,0);">\[𝛿𝑙𝑜𝑔𝐏(𝐷|𝜽) / 𝛿𝐏(𝑥|𝒖)\]</font> \* <font style="color: rgb(0,128,0);">\[𝛿𝐏(𝑥|𝒖) / 𝛿𝜃\]</font><strong>\]</strong>
> >
> > ###### example
> >
> > > [!expand]- Click here to expand...
> > > > [!expand]- given 1 data-instance
> > > > given the data-instance 𝒐:
> > > > - 𝒐 = (𝐴=1, 𝐵=?, 𝐶=?, 𝐷=0)
> > > >
> > > > compute the gradient of one family of parameters 𝐏(𝐷|𝐶=0) given the observation 𝒐:
> > > > - 𝛿𝑙𝑜𝑔𝐏(𝒐|𝜃) / 𝛿𝐏(𝐷=0|𝐶=0) = \[1/𝐏(𝐷=0|𝐶=0)\] \* 𝐏(𝐷=0,𝐶=0|𝒐)
> > > > - 𝛿𝑙𝑜𝑔𝐏(𝒐|𝜃) / 𝛿𝐏(𝐷=0|𝐶=1) = \[1/𝐏(𝐷=0|𝐶=1)\] \* 𝐏(𝐷=0,𝐶=1|𝒐)
> > > > - 𝛿𝑙𝑜𝑔𝐏(𝒐|𝜃) / 𝛿𝐏(𝐷=1|𝐶=0) = \[1/𝐏(𝐷=1|𝐶=0)\] \* 𝐏(𝐷=1,𝐶=0|𝒐)
> > > > - 𝛿𝑙𝑜𝑔𝐏(𝒐|𝜃) / 𝛿𝐏(𝐷=1|𝐶=1) = \[1/𝐏(𝐷=1|𝐶=1)\] \* 𝐏(𝐷=1,𝐶=1|𝒐)
> > > >
> > > > first, we list all permutations that match the observed data 𝒐:
> > > > - (𝐴=1, 𝐵=0, 𝐶=0, 𝐷=0)
> > > > - (𝐴=1, 𝐵=0, 𝐶=1, 𝐷=0)
> > > > - (𝐴=1, 𝐵=1, 𝐶=0, 𝐷=0)
> > > > - (𝐴=1, 𝐵=1, 𝐶=1, 𝐷=0)
> > > >
> > > > next for each permutation, we compute its joint probability based on the current values of the parameters 𝜃:
> > > > - 𝐏(𝐴=1, 𝐵=0, 𝐶=0, 𝐷=0) = 0.3 \* 0.1 \* 0.4 \* 0.9 = 0.0108
> > > > - 𝐏(𝐴=1, 𝐵=0, 𝐶=1, 𝐷=0) = 0.3 \* 0.1 \* 0.6 \* 0.2 = 0.0036
> > > > - 𝐏(𝐴=1, 𝐵=1, 𝐶=0, 𝐷=0) = 0.3 \* 0.9 \* 0.8 \* 0.9 = 0.1944
> > > > - 𝐏(𝐴=1, 𝐵=1, 𝐶=1, 𝐷=0) = 0.3 \* 0.9 \* 0.2 \* 0.2 = 0.0108
> > > >
> > > > now compute 𝐏(𝒐) = 𝐏(𝐴=1, 𝐷=0) which will be used for next step
> > > > - 𝐏(𝒐) = 𝐏(𝐴=1, 𝐷=0)
> > > > - 𝐏(𝒐) = 𝛴<sub>𝑏∊𝐵</sub>𝛴<sub>𝑐∊𝐶</sub>𝐏(𝐴=1, 𝐵=𝑏, 𝐶=𝑐, 𝐷=0)
> > > > - 𝐏(𝒐) = 0.0108 + 0.0036 + 0.1944 + 0.0108
> > > > - 𝐏(𝒐) = 0.2196
> > > >
> > > > now compute the posterior probability of these instances given the partial observation 𝒐
> > > > - 𝐏(𝐴=1, 𝐵=0, 𝐶=0, 𝐷=0 | 𝒐) = 𝐏(𝐵=0, 𝐶=0 | 𝐴=1, 𝐷=0) = 𝐏(𝐴=1, 𝐵=0, 𝐶=0, 𝐷=0) / 𝐏(𝐴=1, 𝐷=0) = 0.0108 / 0.2196 = 0.049180328
> > > > - 𝐏(𝐴=1, 𝐵=0, 𝐶=1, 𝐷=0 | 𝒐) = 𝐏(𝐵=0, 𝐶=1 | 𝐴=1, 𝐷=0) = 𝐏(𝐴=1, 𝐵=0, 𝐶=1, 𝐷=0) / 𝐏(𝐴=1, 𝐷=0) = 0.0036 / 0.2196 = 0.016393443
> > > > - 𝐏(𝐴=1, 𝐵=1, 𝐶=0, 𝐷=0 | 𝒐) = 𝐏(𝐵=1, 𝐶=0 | 𝐴=1, 𝐷=0) = 𝐏(𝐴=1, 𝐵=1, 𝐶=0, 𝐷=0) / 𝐏(𝐴=1, 𝐷=0) = 0.1944 / 0.2196 = 0.885245902
> > > > - 𝐏(𝐴=1, 𝐵=1, 𝐶=1, 𝐷=0 | 𝒐) = 𝐏(𝐵=1, 𝐶=1 | 𝐴=1, 𝐷=0) = 𝐏(𝐴=1, 𝐵=1, 𝐶=1, 𝐷=0) / 𝐏(𝐴=1, 𝐷=0) = 0.0108 / 0.2196 = 0.049180328
> > > >
> > > > using these computations we get:
> > > > - 𝛿𝑙𝑜𝑔𝐏(𝒐|𝜃) / 𝛿𝐏(𝐷=0|𝐶=0) = \[1/𝐏(𝐷=0|𝐶=0)\] \* 𝐏(𝐷=0,𝐶=0|𝒐) = \[1/𝜃<sub>𝐷=0|𝐶=0</sub>\] \* 𝐏(𝐷=0,𝐶=0|𝒐) = \[1/0.9\] \* \[0.885245902 + 0.049180328\] = 1.038251367
> > > > - 𝛿𝑙𝑜𝑔𝐏(𝒐|𝜃) / 𝛿𝐏(𝐷=0|𝐶=1) = \[1/𝐏(𝐷=0|𝐶=1)\] \* 𝐏(𝐷=0,𝐶=1|𝒐) = \[1/𝜃<sub>𝐷=0|𝐶=1</sub>\] \* 𝐏(𝐷=0,𝐶=1|𝒐) = \[1/0.2\] \* \[0.049180328 + 0.016393443\] = 0.327868855
> > > > - 𝛿𝑙𝑜𝑔𝐏(𝒐|𝜃) / 𝛿𝐏(𝐷=1|𝐶=0) = \[1/𝐏(𝐷=1|𝐶=0)\] \* 𝐏(𝐷=1,𝐶=0|𝒐) = \[1/𝜃<sub>𝐷=1|𝐶=0</sub>\] \* 𝐏(𝐷=1,𝐶=0|𝒐) = \[1/0.1\] \* 0 = 0
> > > > - 𝛿𝑙𝑜𝑔𝐏(𝒐|𝜃) / 𝛿𝐏(𝐷=1|𝐶=1) = \[1/𝐏(𝐷=1|𝐶=1)\] \* 𝐏(𝐷=1,𝐶=1|𝒐) = \[1/𝜃<sub>𝐷=1|𝐶=1</sub>\] \* 𝐏(𝐷=1,𝐶=1|𝒐) = \[1/0.8\] \* 0 = 0
> > >
> > > > [!expand]- given another data-instance
> > > > given the data-instance 𝒐':
> > > > - 𝒐' = (𝐴=0, 𝐵=?, 𝐶=?, 𝐷=1)
> > > >
> > > > compute the gradient of one family of parameters 𝐏(𝐷|𝐶=0) given the observation 𝒐' (see example above):
> > > > - 𝛿𝑙𝑜𝑔𝐏(𝒐'|𝜃) / 𝛿𝐏(𝐷=0|𝐶=0) = \[1/𝐏(𝐷=0|𝐶=0)\] \* 𝐏(𝐷=0,𝐶=0|𝒐') = \[1/𝜃<sub>𝐷=0|𝐶=0</sub>\] \* 𝐏(𝐷=0,𝐶=0|𝒐') = 0 / 0.9 = 0
> > > > - 𝛿𝑙𝑜𝑔𝐏(𝒐'|𝜃) / 𝛿𝐏(𝐷=0|𝐶=1) = \[1/𝐏(𝐷=0|𝐶=1)\] \* 𝐏(𝐷=0,𝐶=1|𝒐') = \[1/𝜃<sub>𝐷=0|𝐶=1</sub>\] \* 𝐏(𝐷=0,𝐶=1|𝒐') = 0 / 0.2 = 0
> > > > - 𝛿𝑙𝑜𝑔𝐏(𝒐'|𝜃) / 𝛿𝐏(𝐷=1|𝐶=0) = \[1/𝐏(𝐷=1|𝐶=0)\] \* 𝐏(𝐷=1,𝐶=0|𝒐') = \[1/𝜃<sub>𝐷=1|𝐶=0</sub>\] \* 𝐏(𝐷=1,𝐶=0|𝒐') = 0.2836 / 0.1 = 2.836
> > > > - 𝛿𝑙𝑜𝑔𝐏(𝒐'|𝜃) / 𝛿𝐏(𝐷=1|𝐶=1) = \[1/𝐏(𝐷=1|𝐶=1)\] \* 𝐏(𝐷=1,𝐶=1|𝒐') = \[1/𝜃<sub>𝐷=1|𝐶=1</sub>\] \* 𝐏(𝐷=1,𝐶=1|𝒐') = 0.7164 / 0.8 = 0.8955
> > > >
> > > > suppose our data set consists only of these 2 instances {𝒐, 𝒐'}. the gradient of the log-likelihood function is the sum of the gradient with respect to the 2 instances. Thus:
> > > > - 𝛿𝑙𝑜𝑔𝐏(𝒐, 𝒐'|𝜃) / 𝛿𝐏(𝐷=0|𝐶=0) = 1.038251367
> > > > - 𝛿𝑙𝑜𝑔𝐏(𝒐, 𝒐'|𝜃) / 𝛿𝐏(𝐷=0|𝐶=1) = 0.327868855
> > > > - 𝛿𝑙𝑜𝑔𝐏(𝒐, 𝒐'|𝜃) / 𝛿𝐏(𝐷=1|𝐶=0) = 2.836
> > > > - 𝛿𝑙𝑜𝑔𝐏(𝒐, 𝒐'|𝜃) / 𝛿𝐏(𝐷=1|𝐶=1) = 0.8955
> > >
> > > > [!expand]- putting it together
> > > > we have:
> > > > - 𝐏(𝐷=1|𝐶=0) = 𝜃<sub>𝐷=1|𝐶=0</sub>
> > > > - 𝐏(𝐷=0|𝐶=0) = 1 - 𝜃<sub>𝐷=1|𝐶=0</sub>
> > > >
> > > > using the chain rule of conditional probabilities, we have:
> > > > - 𝛿𝑙𝑜𝑔𝐏(𝒐, 𝒐'|𝜃) / 𝛿𝜃<sub>𝐷=1|𝐶=0</sub> = <font style="color: rgb(128,0,0);">\[𝛿𝐏(𝐷=1|𝐶=0) / 𝛿𝜃<sub>𝐷=1|𝐶=0</sub>\] </font>\* <font style="color: rgb(255,102,0);">\[</font><font style="color: rgb(255,102,0);">𝛿𝑙𝑜𝑔𝐏(𝒐, 𝒐'|𝜃) / 𝛿𝐏(𝐷=1|𝐶=0)\]</font> + <font style="color: rgb(128,128,0);">\[𝛿𝐏(𝐷=0|𝐶=0) / 𝛿𝜃<sub>𝐷=1|𝐶=0</sub>\]</font> \* <font style="color: rgb(0,128,0);">\[𝛿𝑙𝑜𝑔𝐏(𝒐, 𝒐'|𝜃) / 𝛿𝐏(𝐷=0|𝐶=0)\]</font>
> > > > - 𝛿𝑙𝑜𝑔𝐏(𝒐, 𝒐'|𝜃) / 𝛿𝜃<sub>𝐷=1|𝐶=0</sub> = <font style="color: rgb(128,0,0);">1</font>\*<font style="color: rgb(255,102,0);">\[</font><font style="color: rgb(255,102,0);">𝛿𝑙𝑜𝑔𝐏(𝒐, 𝒐'|𝜃) / 𝛿𝐏(𝐷=1|𝐶=0)\]</font> + <font style="color: rgb(128,128,0);">-1</font>\*<font style="color: rgb(0,128,0);">\[𝛿𝑙𝑜𝑔𝐏(𝒐, 𝒐'|𝜃) / 𝛿𝐏(𝐷=0|𝐶=0)\]</font>
> > > > - 𝛿𝑙𝑜𝑔𝐏(𝒐, 𝒐'|𝜃) / 𝛿𝜃<sub>𝐷=1|𝐶=0</sub> = <font style="color: rgb(255,102,0);">\[</font><font style="color: rgb(255,102,0);">𝛿𝑙𝑜𝑔𝐏(𝒐, 𝒐'|𝜃) / 𝛿𝐏(𝐷=1|𝐶=0)\]</font> - <font style="color: rgb(0,128,0);">\[𝛿𝑙𝑜𝑔𝐏(𝒐, 𝒐'|𝜃) / 𝛿𝐏(𝐷=0|𝐶=0)\]</font>
> > > > - 𝛿𝑙𝑜𝑔𝐏(𝒐, 𝒐'|𝜃) / 𝛿𝜃<sub>𝐷=1|𝐶=0</sub> = 2.836 - 1.038251367
> > > > - 𝛿𝑙𝑜𝑔𝐏(𝒐, 𝒐'|𝜃) / 𝛿𝜃<sub>𝐷=1|𝐶=0</sub>= 1.797748633
> > > >
> > > > thus, in this case, we prefer to:
> > > > - increase 𝐏(𝐷=1|𝐶=0)
> > > > - decrease 𝐏(𝐷=0|𝐶=0)
> > > >
> > > > since the resulting increase in the probability of 𝒐' will be larger than the decrease in the probability of 𝒐
>
> > [!expand]- Method 2
> > log-likelihood of a data-set {𝒐<sup>(1)</sup>, ..., 𝒐<sup>(𝑛)</sup>} is defined as:
> > - 𝐿𝐿 = 𝑙𝑜𝑔\[𝐏(𝒐<sup>(1)</sup>, ..., 𝒐<sup>(𝑛)</sup>|𝜃)\]
> > - 𝐿𝐿 = 𝑙𝑜𝑔\[𝐏(𝒐<sup>(1)</sup>|𝜃) \* ... \* 𝐏(𝒐<sup>(𝑛)</sup>|𝜃)\]
> > - 𝐿𝐿 = 𝑙𝑜𝑔\[𝛱<sub>1≤𝑖≤𝑛</sub>𝐏(𝒐<sup>(𝑖)</sup>|𝜃)\]
> > - 𝐿𝐿 = 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑙𝑜𝑔𝐏(𝒐<sup>(𝑖)</sup>|𝜃)\]
> >
> > log-likelihood of a single data-instance 𝒐 is defined as below:
> > - 𝐿𝐿 = 𝑙𝑜𝑔𝐏(𝒐|𝜃)
> >
> > ###### example single data-instance
> >
> > > [!expand]- Click here to expand...
> > > given the data-instance:
> > > - 𝒐 = (𝐴=1, 𝐵=?, 𝐶=?, 𝐷=0)
> > >
> > > the log-likelihood is:
> > > - 𝐿𝐿 = 𝑙𝑜𝑔𝐏(𝒐|𝜃)
> > > - 𝐿𝐿 = 𝑙𝑜𝑔𝐏(𝐴=1,𝐷=0|𝜃)
> > > - 𝐿𝐿 = 𝑙𝑜𝑔\[𝛴<sub>𝑏∊𝐵</sub>𝛴<sub>𝑐∊𝐶</sub>𝐏(𝐴=1,𝐵=𝑏,𝐶=𝑐𝐷=0|𝜃)\]
> > > - 𝐿𝐿 = 𝑙𝑜𝑔\[<font style="color: rgb(128,0,0);">𝐏(𝐴=1,𝐵=0,𝐶=0,𝐷=0|𝜃)</font> + <font style="color: rgb(255,102,0);">𝐏(𝐴=1,𝐵=0,𝐶=1,𝐷=0|𝜃)</font> + <font style="color: rgb(128,128,0);">𝐏(𝐴=1,𝐵=1,𝐶=0,𝐷=0|𝜃)</font> + <font style="color: rgb(0,128,0);">𝐏(𝐴=1,𝐵=1,𝐶=1,𝐷=0|𝜃)</font>\]
> > > - 𝐿𝐿 = 𝑙𝑜𝑔\[<font style="color: rgb(128,0,0);">(𝜃<sub>𝐴</sub>)\*(1-𝜃<sub>𝐵</sub>)\*(1-𝜃<sub>𝐶|1,0</sub>)\*(1-𝜃<sub>𝐷|0</sub>)</font> + <font style="color: rgb(255,102,0);">(𝜃<sub>𝐴</sub>)\*(1-𝜃<sub>𝐵</sub>)\*(𝜃<sub>𝐶|1,0</sub>)\*(1-𝜃<sub>𝐷|1</sub></font><font style="color: rgb(255,102,0);">)</font> + <font style="color: rgb(128,128,0);">(𝜃<sub>𝐴</sub>)\*(𝜃<sub>𝐵</sub>)\*(1-𝜃<sub>𝐶|1,1</sub>)\*(1-𝜃<sub>𝐷|0</sub>)</font> + <font style="color: rgb(0,128,0);">(𝜃<sub>𝐴</sub>)\*(𝜃<sub>𝐵</sub>)\*(𝜃<sub>𝐶|1,1</sub>)\*(1-𝜃<sub>𝐷</sub></font><font style="color: rgb(0,128,0);"><sub>|1</sub>)</font>\]
> > >
> > > for example, for a single data instance 𝒐, the derivative of 𝐿𝐿 with respect to 𝜃<sub>𝐷|1</sub>:
> > > - 𝛿𝐿𝐿 / 𝛿𝜃<sub>𝐷|1</sub> = 𝑙𝑜𝑔𝐏(𝒐|𝜃)
> > > - 𝛿𝐿𝐿 / 𝛿𝜃<sub>𝐷|1</sub> = 𝑙𝑜𝑔𝐏(𝐴=1,𝐷=0|𝜃)
> > > - 𝛿𝐿𝐿 / 𝛿𝜃<sub>𝐷|1</sub> = \[1/𝐏(𝐴=1,𝐷=0|𝜃)\] \* 𝛿/𝛿𝜃<sub>𝐷|1</sub> 𝐏(𝐴=1,𝐷=0|𝜃)
> > > - 𝛿𝐿𝐿 / 𝛿𝜃<sub>𝐷|1</sub> = \[1/𝐏(𝐴=1,𝐷=0|𝜃)\] \* 𝛿/𝛿𝜃<sub>𝐷|1</sub> \[<font style="color: rgb(128,0,0);">(𝜃<sub>𝐴</sub>)\*(1-𝜃<sub>𝐵</sub>)\*(1-𝜃<sub>𝐶|1,0</sub>)\*(1-𝜃<sub>𝐷|0</sub>)</font> + <font style="color: rgb(255,102,0);">(𝜃<sub>𝐴</sub>)\*(1-𝜃<sub>𝐵</sub>)\*(𝜃<sub>𝐶|1,0</sub>)\*(1-𝜃<sub>𝐷|1</sub></font><font style="color: rgb(255,102,0);">)</font> + <font style="color: rgb(128,128,0);">(𝜃<sub>𝐴</sub>)\*(𝜃<sub>𝐵</sub>)\*(1-𝜃<sub>𝐶|1,1</sub>)\*(1-𝜃<sub>𝐷|0</sub>)</font> + <font style="color: rgb(0,128,0);">(𝜃<sub>𝐴</sub>)\*(𝜃<sub>𝐵</sub>)\*(𝜃<sub>𝐶|1,1</sub>)\*(1-𝜃<sub>𝐷</sub></font><font style="color: rgb(0,128,0);"><sub>|1</sub>)</font>\]
> > > - 𝛿𝐿𝐿 / 𝛿𝜃<sub>𝐷|1</sub> = \[1/𝐏(𝐴=1,𝐷=0|𝜃)\] \* \[0 - <font style="color: rgb(255,102,0);">(𝜃<sub>𝐴</sub>)\*(1-𝜃<sub>𝐵</sub>)\*(𝜃<sub>𝐶|1,0</sub>)</font> + 0 - <font style="color: rgb(0,128,0);">(𝜃<sub>𝐴</sub>)\*(𝜃<sub>𝐵</sub>)\*(𝜃<sub>𝐶|1,1</sub>)</font>\]
> > > - 𝛿𝐿𝐿 / 𝛿𝜃<sub>𝐷|1</sub> = \[1/𝐏(𝐴=1,𝐷=0|𝜃)\] \* \[-<font style="color: rgb(255,102,0);">(𝜃<sub>𝐴</sub>)\*(1-𝜃<sub>𝐵</sub>)\*(𝜃<sub>𝐶|1,0</sub>)</font> - <font style="color: rgb(0,128,0);">(𝜃<sub>𝐴</sub>)\*(𝜃<sub>𝐵</sub>)\*(𝜃<sub>𝐶|1,1</sub>)</font>\]
> > > - 𝛿𝐿𝐿 / 𝛿𝜃<sub>𝐷|1</sub> = \[1/𝐏(𝐴=1,𝐷=0|𝜃)\] \* \[-<font style="color: rgb(255,102,0);">𝐏(𝐴=1,𝐵=0,𝐶=1)</font> - <font style="color: rgb(0,128,0);">𝐏(𝐴=1,𝐵=1,𝐶=1)</font>\]
3. repeat Step 2 until convergence or until max iteration
