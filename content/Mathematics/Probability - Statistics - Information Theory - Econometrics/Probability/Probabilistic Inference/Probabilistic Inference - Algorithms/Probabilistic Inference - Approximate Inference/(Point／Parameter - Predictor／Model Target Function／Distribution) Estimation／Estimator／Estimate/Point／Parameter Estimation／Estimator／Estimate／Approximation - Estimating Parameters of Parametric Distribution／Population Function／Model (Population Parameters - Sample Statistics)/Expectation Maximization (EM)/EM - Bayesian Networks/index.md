---
title: "EM - Bayesian Networks"
created: 2021-09-13T05:27:54.471-05:00
modified: 2026-05-21T02:01:57.962-05:00
parent: "[[Expectation Maximization (EM)]]"
children:
  - "[[EM - Bayesian Networks - Analysis]]"
---
given:
- bayesian network structure
- uncomplete sample/training data e.g. (𝑎, 𝑏, 𝑐, 𝑑)
	- (1, ?, ?, 0) <font style="color: rgb(128,128,128);">\# un-complete</font>
	- (0, 0, ?, 0) <font style="color: rgb(128,128,128);">\# un-complete</font>
	- (0, 1, 1, 0) <font style="color: rgb(128,128,128);">\# complete sample</font>
	- ...
	- (?, ?, ?, 1) <font style="color: rgb(128,128,128);">\# un-complete</font>

estimate the values of the unknown parameters 𝜃 = {𝜃<sub>𝐴</sub>, 𝜃<sub>𝐵</sub>, 𝜃<sub>𝐶|0,0</sub>, 𝜃<sub>𝐶|0,1</sub>, 𝜃<sub>𝐶|1,0</sub>, 𝜃<sub>𝐶|1,1</sub>, 𝜃<sub>𝐷|0</sub>, 𝜃<sub>𝐷|1</sub>}

![[EM - Bayesian Networks/expacted-maximization-bayesian-networks.png|600]]
# EM Algorithm 1 - Original

> [!expand]- Click here to expand...
> ###### EM Algorithm 1 - Steps
> 1. <strong>INITIALIZATION STEP</strong>: initialize the parameters 𝜃 to any value(s)
> > [!expand]- Click here to expand...
> > choose any values for all parameters 𝜃
> > - 𝜃<sub>𝐴</sub> = 0.3
> > - 𝜃<sub>𝐵</sub> = 0.9
> > - 𝜃<sub>𝐶|0,0</sub> = 0.83
> > - 𝜃<sub>𝐶|0,1</sub> = 0.09
> > - 𝜃<sub>𝐶|1,0</sub> = 0.6
> > - 𝜃<sub>𝐶|1,1</sub> = 0.2
> > - 𝜃<sub>𝐷|0</sub> = 0.1
> > - 𝜃<sub>𝐷|1</sub> = 0.8
> 2. <strong>EXPECTATION STEP</strong>: complete each partially observed data (?) in all possible permutations (this results in a bigger data-set and is weighted)
> > [!expand]- Click here to expand...
> > complete all partially observed data (leave all complete samples alone)
> >
> > let see how we complete a partially observed sample shown below
> > - (1, ?, ?, 0)
> >
> > first we list all permutations that match the observed data (? is wildcard):
> > - (1, 0, 0, 0)
> > - (1, 0, 1, 0)
> > - (1, 1, 0, 0)
> > - (1, 1, 1, 0)
> >
> > for each permutation compute its probability/weight based on the values assigned to the parameters 𝜃
> > - (1, 0, 0, 0) = 𝐏(𝑏̅,𝑐̅|𝑎,𝑑̅) = 𝐏(𝑏̅,𝑐̅,𝑎,𝑑̅)/𝐏(𝑎,𝑑̅)
> > - (1, 0, 1, 0) = 𝐏(𝑏̅,𝑐|𝑎,𝑑̅) = 𝐏(𝑏̅,𝑐,𝑎,𝑑̅)/𝐏(𝑎,𝑑̅)
> > - (1, 1, 0, 0) = 𝐏(𝑏,𝑐̅|𝑎,𝑑̅) = 𝐏(𝑏,𝑐̅,𝑎,𝑑̅)/𝐏(𝑎,𝑑̅)
> > - (1, 1, 1, 0) = 𝐏(𝑏,𝑐|𝑎,𝑑̅) = 𝐏(𝑏,𝑐,𝑎,𝑑̅)/𝐏(𝑎,𝑑̅)
> >
> > computing joint probabilities
> > - 𝐏(𝑏̅,𝑐̅,𝑎,𝑑̅) = 0.3 \* 0.1 \* 0.4 \* 0.9 = 0.0108
> > - 𝐏(𝑏̅,𝑐,𝑎,𝑑̅) = 0.3 \* 0.1 \* 0.6 \* 0.2 = 0.0036
> > - 𝐏(𝑏,𝑐̅,𝑎,𝑑̅) = 0.3 \* 0.9 \* 0.8 \* 0.9 = 0.1944
> > - 𝐏(𝑏,𝑐,𝑎,𝑑̅) = 0.3 \* 0.9 \* 0.2 \* 0.2 = 0.0108
> >
> > computing probability of evidence 𝐏(𝑎,𝑑̅)
> > - 𝐏(𝑎,𝑑̅) = 0.0108 + 0.0036 + 0.1944 + 0.0108 = 0.2196
> >
> > compute conditional probabilities (which are its weights):
> > - (1, 0, 0, 0) = 0.0108 / 0.2196 = 0.049180328
> > - (1, 0, 1, 0) = 0.0036 / 0.2196 = 0.016393443
> > - (1, 1, 0, 0) = 0.1944 / 0.2196 = 0.885245902
> > - (1, 1, 1, 0) = 0.0108 / 0.2196 = 0.049180328
> >
> > this results in a completed bigger data-set. samples in the data-set that came from an un-complete sample are weighted accordingly. Samples that are already complete have weight 1.
> 3. <strong>MAXIMIZATION STEP</strong>: estimate new values for parameters 𝜃 relative to the completed data from Step 2
> > [!expand]- Click here to expand...
> > now that we have a complete data-set, use any maximizing estimator to compute the new values of parameters 𝜃. maximizing estimators includes:
> > - [[Maximum Likelihood Estimation (MLE)]] - see [[MLE - Bayesian Networks]]
> > > [!expand]- Click here to expand...
> > > assume step 2 produced the completed data-set below
> > > - (1, 0, 0, 0): weight = 0.0492
> > > - (1, 0, 1, 0): weight = 0.0164
> > > - (1, 1, 0, 0): weight = 0.8852
> > > - (1, 1, 1, 0): weight = 0.0492
> > > - (0, 1, 1, 0): weight = 1 <font style="color: rgb(128,128,128);">\# original complete sample</font>
> > >
> > > each parameter 𝜃 is assigned a new value
> > > - 𝜃<sub>𝑥|𝒖</sub> = <font style="color: rgb(128,0,0);">∑<sub>𝑠∊𝑎𝑙𝑙-𝑠𝑎𝑚𝑝𝑙𝑒𝑠</sub>\[𝑠.𝑐𝑜𝑛𝑡𝑎𝑖𝑛𝑠(𝑥,𝒖)\*𝑠.𝑤𝑒𝑖𝑔𝘩𝑡\]</font> / <font style="color: rgb(0,128,0);">∑<sub>𝑠∊𝑎𝑙𝑙-𝑠𝑎𝑚𝑝𝑙𝑒𝑠</sub>\[𝑠.𝑐𝑜𝑛𝑡𝑎𝑖𝑛𝑠(𝒖)\*𝑠.𝑤𝑒𝑖𝑔𝘩𝑡\]</font>
> > >
> > > for example:
> > > - 𝜃<sub>𝐴</sub> = <font style="color: rgb(128,0,0);">0.0492 + 0.0164 + 0.8852 + 0.0492</font> / <font style="color: rgb(0,128,0);">0.0492 + 0.0164 + 0.8852 + 0.0492 + 1</font>
> > > - 𝜃<sub>𝐶|𝐴=1,𝐵=0</sub>= <font style="color: rgb(128,0,0);">0.0164</font> / <font style="color: rgb(0,128,0);">0.0492 + 0.0164</font>
> > > - 𝜃<sub>𝐶|𝐴=0,𝐵=0</sub>= <font style="color: rgb(128,0,0);">0</font> / <font style="color: rgb(0,128,0);">0</font>
> > - [[Maximum a Posteriori (MAP)]] - see [[MAP - Bayesian Networks]]
> > > [!expand]- Click here to expand...
> > > TODO
> 4. repeat from Step 2 until convergence or max iterations
>
> ###### EM Algorithm 1 - Complexity
>
> > [!expand]- Click here to expand...
> > 1. <strong>INITIALIZATION STEP</strong>: 𝑂(fast)
> > 2. <strong>EXPECTATION STEP</strong>: 𝑂(𝑛𝑚𝑑<sup>𝑝</sup>)
> > 3. <strong>MAXIMIZATION STEP</strong>: 𝑂(𝑚𝑛') + <font style="color: rgb(255,0,0);">\[</font>𝑂(𝑚𝑑<sup>(𝑘+1)</sup>) <font style="color: rgb(128,128,128);">\# normalize to \[0,1\] range<font style="color: rgb(255,0,0);">\]</font></font>
> >
> > where:
> > - 𝑛 - number of samples / data points in the given data-set
> > - 𝑛' - number of samples produced in E-STEP (𝑛' =𝑛𝑑<sup>𝑝</sup>)
> > - 𝑚 - number of variables
> > - 𝑝 - number of ? unknown variables in each sample
> > - 𝑑 - size of domain of a variable
> > - 𝑘 - number of parents of a variable
# EM Algorithm 2 - Using Probabilistic Inference Algorithms

> [!expand]- Click here to expand...
> ###### EM Algorithm 2 - Steps
> 1. <strong>INITIALIZATION STEP</strong>: initialize the parameters 𝜃 to any value(s)
> 2. <strong>EXPECTATION STEP</strong>: use the current values of parameters 𝜃 to compute the <em>expected sufficient statistics</em>:
> > [!expand]- Click here to expand...
> > 1. for each data case 𝐨<sup>(𝑖)</sup>in {𝐨<sup>(1)</sup>, ..., 𝐨<sup>(𝑛)</sup>}
> > 	1. for each family (𝑋,𝑼)
> > 		1. compute [[Joint Probability Distribution (Compound - Bivariate - Multivariate - Full)|joint probability distribution]] 𝐏(𝑋,𝑼|𝐨<sup>(𝑖)</sup>) using [[Probabilistic Inference - Algorithms|probabilistic inference algorithm]] (e.g. [[Probabilistic Inference - Bucket Elimination (BE) - Variable Elimination (VE)|variable elimination]])
> > 2. compute the <em>expected sufficient statistics</em>: for each (𝑥,𝒖) as:
> > 	1. ∑<sub>𝑖∊𝑎𝑙𝑙-𝑠𝑎𝑚𝑝𝑙𝑒𝑠</sub>\[𝐏(𝑋=𝑥,𝑼=𝒖|𝐨<sup>(𝑖)</sup>)\]
> 3. <strong>MAXIMIZATION STEP</strong>: estimate new values for parameters 𝜃 relative to the completed data from Step 2. estimation done either:
> > [!expand]- Click here to expand...
> > - maximum likelihood estimate
> > 	- <font style="color: rgb(0,128,0);"><font style="color: rgb(51,51,51);">𝜃<sub>𝑥|𝒖</sub>= 𝐏(𝑋=𝑥|𝑼=𝒖) = <font style="color: rgb(128,0,0);">∑<sub>𝑠∊𝑎𝑙𝑙-𝑠𝑎𝑚𝑝𝑙𝑒𝑠</sub>\[𝐏(𝑋=𝑥,𝑼=𝒖|𝐨<sup>(𝑠)</sup>)\]</font> / <font style="color: rgb(0,128,0);">∑<sub>𝑠∊𝑎𝑙𝑙-𝑠𝑎𝑚𝑝𝑙</sub></font></font><sub>𝑒𝑠</sub>\[𝐏(𝑼=𝒖|𝐨<sup>(𝑠)</sup>)</font><font style="color: rgb(0,128,0);">\] <font style="color: rgb(128,128,128);">\# ALGORITHM 2 FORMULA</font></font>
> > 	- <font style="color: rgb(128,128,128);">𝜃<sub>𝑥|𝒖</sub>= ∑<sub>𝑠∊𝑎𝑙𝑙-𝑠𝑎𝑚𝑝𝑙𝑒𝑠</sub>\[𝑠.𝑐𝑜𝑛𝑡𝑎𝑖𝑛𝑠(𝑥,𝒖)\*𝑠.𝑤𝑒𝑖𝑔𝘩𝑡\] / ∑<sub>𝑠∊𝑎𝑙𝑙-𝑠𝑎𝑚𝑝𝑙𝑒𝑠</sub>\[𝑠.𝑐𝑜𝑛𝑡𝑎𝑖𝑛𝑠(𝒖)\*𝑠.𝑤𝑒𝑖𝑔𝘩𝑡\] \# ALGORITHM 1 FORMULA</font>
> > - maximum a posterior estimate
> > 	- TODO
> 4. repeat from Step 2 until convergence or max iterations
>
> ###### EM Algorithm 2 - Complexity
>
> > [!expand]- Click here to expand...
> > 1. <strong>INITIALIZATION STEP</strong>: 𝑂(fast)
> > 2. <strong>EXPECTATION STEP</strong>: 𝑂(𝑛·𝐼)
> > 3. <strong>MAXIMIZATION STEP</strong>: 𝑂(?)
> >
> > where:
> > - 𝑛 - number of samples in the given data-set
> > - 𝐼 - the time-complexity of the [[Probabilistic Inference - Algorithms|inference algorithm]] used (e.g. [[Probabilistic Inference - Exact Inference|Exact Inference]] or [[Probabilistic Inference - Approximate Inference|Approximate Inference]] algorithms)
> > - 𝑚 - number of variables
> >
> > ###### Junction Tree Algorithm
> > - <strong>EXPECTATION STEP</strong>: 𝑂(𝑚\*𝑛\*𝑒𝑥𝑝(𝑤+1))
> >
> > since [[Probabilistic Inference - Exact Inference|Exact Inference]] will be exponential to [[Cluster／Clique／Join／Junction Trees - Tree Decompositions - Tree-Width|tree-width]] (𝑤), one often use [[Probabilistic Inference - Approximate Inference|Approximate Inference]] such as:
> > - [[Probabilistic Inference - Iterative／Loopy／Cluster／Clique／Join／Junction Graph Belief Propagation|Iterative/Loopy/Cluster/Join Graph Belief Propagation]]
> > - Sampling Algorithms:
> > 	- [[Independent Sampling (Standard Monte Carlo Methods)]]
> > 	- [[Dependent Sampling (Markov Chain Monte Carlo (MCMC) Methods) |Dependent Sampling (Markov Chain Monte Carlo (MCMC) Methods)]]
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
