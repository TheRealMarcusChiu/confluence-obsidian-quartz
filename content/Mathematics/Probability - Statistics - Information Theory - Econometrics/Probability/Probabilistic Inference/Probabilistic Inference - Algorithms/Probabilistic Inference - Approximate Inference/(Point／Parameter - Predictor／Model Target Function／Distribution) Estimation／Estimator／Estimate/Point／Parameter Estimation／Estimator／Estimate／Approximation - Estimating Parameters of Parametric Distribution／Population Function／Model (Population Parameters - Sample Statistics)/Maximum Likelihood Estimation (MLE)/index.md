---
title: "Maximum Likelihood Estimation (MLE)"
created: 2021-09-13T05:28:00.325-05:00
modified: 2024-02-11T09:50:44.051-06:00
parent: "[[Point／Parameter Estimation／Estimator／Estimate／Approximation - Estimating Parameters of Parametric Distribution／Population Function／Model (Population Parameters - Sample Statistics)]]"
children:
  - "[[Likelihood Function - Log-Likelihood Function - Score Function]]"
  - "[[MLE - Asymptotic Distribution of the MLE]]"
  - "[[MLE - Computing MLE of Specific Distributions]]"
  - "[[MLE - Relation to (Cross Entropy & Relative Entropy)]]"
---
###### Maximum Likelihood Estimation (MLE)
````excerpt
- is a method of [[Point／Parameter Estimation／Estimator／Estimate／Approximation - Estimating Parameters of Parametric Distribution／Population Function／Model (Population Parameters - Sample Statistics)|estimating the population parameters (𝜃)]] of a [[Probability Distribution Models／Representations|probability distribution model]] by maximizing the [[Likelihood Function - Log-Likelihood Function - Score Function|likelihood function]] so that under the assumed distribution/statistical model the observed data is most probable
- the point in the parameter space that maximizes the likelihood function is called the maximum likelihood estimate (MLE 𝜃ˆ)
````
^excerpt

see: [[Mathematical Syntax]]
# MLE - Intuition

let:
- 𝐏<sub>𝑑𝑎𝑡𝑎</sub>(𝐱) be the true but unknown [[Population Distribution|population distribution]]
- 𝐏ˆ<sub>𝑑𝑎𝑡𝑎</sub>(𝐱) be the known but sampled [[Empirical／Sample Distribution|empirical distribution]] defined by a set of 𝑛 examples 𝕏 = \[𝑥<sup>(1)</sup>, ..., 𝑥<sup>(𝑛)</sup>\] drawn [[Independent and Identically Distributed (IID)|i.i.d.]] from 𝐏<sub>𝑑𝑎𝑡𝑎</sub>(𝐱)
- 𝐏<sub>𝑚𝑜𝑑𝑒𝑙</sub>(𝐱;𝜃) be the model distribution, a parametric family of probability distributions over the space indexed by 𝜃

goal:
- MLE is an attempt to make the model distribution 𝐏<sub>𝑚𝑜𝑑𝑒𝑙</sub>(𝐱;𝜃) match the empirical distribution 𝐏ˆ<sub>𝑑𝑎𝑡𝑎</sub>(𝐱) by finding the right values of 𝜃
- ideally, we would like 𝐏<sub>𝑚𝑜𝑑𝑒𝑙</sub>(𝐱;𝜃) to match the true population distribution 𝐏<sub>𝑑𝑎𝑡𝑎</sub>(𝐱), but we have no direct access to this distribution

The MLE estimator for 𝜃, denoted as 𝜃ˆ<sub>𝑀𝐿𝐸</sub>, is defined as choosing a value(s) for 𝜃 that maximizes the likelihood probability 𝐏<sub>𝑚𝑜𝑑𝑒𝑙</sub>(𝕏;𝜃):
- 𝜃ˆ<sub>𝑀𝐿𝐸</sub> = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝜃</sub> 𝐏<sub>𝑚𝑜𝑑𝑒𝑙</sub>(𝕏;𝜃)
- 𝜃ˆ<sub>𝑀𝐿𝐸</sub> = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝜃</sub> 𝐏<sub>𝑚𝑜𝑑𝑒𝑙</sub>(𝑥<sup>(1)</sup>, ..., 𝑥<sup>(𝑛)</sup>;𝜃) <font style="color: rgb(122,134,154);">\# by definition of 𝕏 = \[𝑥<sup>(1)</sup>, ..., 𝑥<sup>(𝑛)</sup>\]</font>
- 𝜃ˆ<sub>𝑀𝐿𝐸</sub> = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝜃</sub> 𝛱<sub>1≤𝑖≤𝑛</sub> 𝐏<sub>𝑚𝑜𝑑𝑒𝑙</sub>(𝑥<sup>(𝑖)</sup>;𝜃) <font style="color: rgb(122,134,154);">\# because {𝑥<sup>(1)</sup>, ..., 𝑥<sup>(𝑛</sup>} are [[Independent and Identically Distributed (IID)|i.i.d.]] we use the definition of [[Probability Independence|probability independence]]</font>
- 𝜃ˆ<sub>𝑀𝐿𝐸</sub> = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝜃</sub> 𝛴<sub>1≤𝑖≤𝑛</sub> 𝑙𝑜𝑔𝐏<sub>𝑚𝑜𝑑𝑒𝑙</sub>(𝑥<sup>(𝑖)</sup>;𝜃) <font style="color: rgb(122,134,154);">\# the product of numbers is the summation of the log of numbers</font>
- 𝜃ˆ<sub>𝑀𝐿𝐸</sub> = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝜃</sub> (1/𝑛) 𝛴<sub>1≤𝑖≤𝑛</sub> 𝑙𝑜𝑔𝐏<sub>𝑚𝑜𝑑𝑒𝑙</sub>(𝑥<sup>(𝑖)</sup>;𝜃) = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝜃</sub> 𝐄<sub>𝐱\~𝐏ˆ<sub>𝑑𝑎𝑡𝑎</sub></sub>\[ 𝑙𝑜𝑔𝐏<sub>𝑚𝑜𝑑𝑒𝑙</sub>(𝐱;𝜃) \] <font style="color: rgb(122,134,154);">\# because the 𝑎𝑟𝑔𝑚𝑎𝑥 does not change when we rescale the cost function, we can divide by 𝑛 to obtain a version of the criterion that is expressed as an expectation with respect to the empirical distribution 𝐏ˆ<sub>𝑑𝑎𝑡𝑎</sub> defined by the training data</font>

there may be multiple values of 𝜃ˆ<sub>𝑀𝐿𝐸</sub>
# MLE - Generalized to Conditional Log-Likelihood

MLE can be generalized to estimate a true but unknown [[Conditional Probability Distribution (CPD)|conditional probability]] 𝐏<sub>𝑑𝑎𝑡𝑎</sub>(𝐲|𝐱)
- 𝕐 set of training example targets (i.e. 𝕐 = \[𝒚<sup>(1)</sup>, ..., 𝒚<sup>(𝑛)</sup>\])
	- 𝒚<sup>(𝑖)</sup><sub></sub>= \[𝑦<sup>(𝑖)</sup><sub>1</sub>, ..., 𝑦<sup>(𝑖)</sup><sub>𝑎</sub>\]
- 𝕏 set of training example inputs (i.e. 𝕏 = \[𝒙<sup>(1)</sup>, ..., 𝒙<sup>(𝑛)</sup>\])
	- 𝒙<sup>(𝑖)</sup><sub></sub>= \[𝑥<sup>(𝑖)</sup><sub>1</sub>, ..., 𝑥<sup>(𝑖)</sup><sub>𝑏</sub>\]
- <strong>𝜽</strong> set of parameters (i.e. <strong>𝜽</strong> = \[𝜃<sub>1</sub>, ..., 𝜃<sub>𝑘</sub>\])

conditional maximum likelihood estimator for <strong>𝜽</strong> is defined as:
- <strong>𝜽</strong>ˆ<sub><strong>𝑀𝐿𝐸</strong></sub> = 𝑎𝑟𝑔𝑚𝑎𝑥<sub><strong>𝜽</strong></sub> 𝐏<sub>𝑚𝑜𝑑𝑒𝑙</sub>(𝕐|𝕏;<strong>𝜽</strong>)
- <strong>𝜽</strong>ˆ<sub><strong>𝑀𝐿𝐸</strong></sub> = 𝑎𝑟𝑔𝑚𝑎𝑥<sub><strong>𝜽</strong></sub> 𝛱<sub>1≤𝑖≤𝑛</sub> 𝐏<sub>𝑚𝑜𝑑𝑒𝑙</sub>(𝒚<sup>(𝑖)</sup>|𝒙<sup>(𝑖)</sup>;<strong>𝜽</strong>) <font style="color: rgb(128,128,128);">\# only if training examples are </font>[[Independent and Identically Distributed (IID)|i.i.d.]]
- <strong>𝜽</strong>ˆ<sub><strong>𝑀𝐿𝐸</strong></sub> = 𝑎𝑟𝑔𝑚𝑎𝑥<sub><strong>𝜽</strong></sub> 𝛴<sub>1≤𝑖≤𝑛</sub> 𝑙𝑜𝑔𝐏<sub>𝑚𝑜𝑑𝑒𝑙</sub>(𝒚<sup>(𝑖)</sup>|𝒙<sup>(𝑖)</sup>;<strong>𝜽</strong>)
- <strong>𝜽</strong>ˆ<sub><strong>𝑀𝐿𝐸</strong></sub> = 𝑎𝑟𝑔𝑚𝑎𝑥<sub><strong>𝜽</strong></sub> 𝐄<sub>𝐱,𝐲\~𝐏ˆ<sub>𝑑𝑎𝑡𝑎</sub></sub>\[ 𝑙𝑜𝑔𝐏<sub>𝑚𝑜𝑑𝑒𝑙</sub>(𝒚<sup>(𝑖)</sup>|𝒙<sup>(𝑖)</sup>;<strong>𝜽</strong>) \]

see how this is related to [[MLE - Relation to (Cross Entropy & Relative Entropy)|minimizing cross-entropy (]][[MLE - Relation to (Cross Entropy & Relative Entropy)|negative-log-likelihood]][[MLE - Relation to (Cross Entropy & Relative Entropy)|)]]
# MLE - Methods in Estimating 𝜃, Computing 𝜃ˆ<sub>𝑀𝐿𝐸</sub>

> [!expand]- MLE - Estimating MLE 𝜃ˆ of 𝜃 - Enumeration
> enumerate all possible values of 𝜃

> [!expand]- MLE - Computing MLE 𝜃ˆ of 𝜃 - Analytical - Iterative
> - [[Gradient Descent／Ascent Algorithms - The Method of Steepest Descent／Ascent Algorithms|Gradient Descent]]
> - [[Expectation Maximization (EM)]]

> [!expand]- MLE - Computing MLE 𝜃ˆ of 𝜃 - Analytical - Closed Form
> Suppose we observed 𝑛 samples {𝑥<sub>1</sub>, ..., 𝑥<sub>𝑛</sub>} drawn [[Independent and Identically Distributed (IID)|i.i.d.]] from the true but unknown distribution 𝐏<sub>𝑑𝑎𝑡𝑎</sub>(𝐱|𝜃)
>
> Then, we maximize the [[Likelihood Function - Log-Likelihood Function - Score Function|log-likelihood function]] with respect to 𝜃
> - 𝐿𝐿(𝜃) = 𝑙𝑜𝑔(𝐿(𝜃)) = 𝛴<sub>1≤𝑖≤𝑛</sub> 𝑙𝑜𝑔\[𝐏<sub>𝑑𝑎𝑡𝑎</sub>(𝑥<sub>𝑖</sub>|𝜃)\]
>
> to find the maximum, we find the derivative
> - 𝛿/𝛿𝜃 𝐏(𝑥<sub>1</sub>, ..., 𝑥<sub>𝑛</sub>|𝜃) = 𝛴<sub>1≤𝑖≤𝑛</sub>𝛿/𝛿𝜃 𝑙𝑜𝑔\[𝐏<sub>𝑑𝑎𝑡𝑎</sub>(𝑥<sub>𝑖</sub>|𝜃)\]
>
> equate to 0
> - 0 = 𝛴<sub>1≤𝑖≤𝑛</sub>𝛿/𝛿𝜃 𝑙𝑜𝑔\[𝐏<sub>𝑑𝑎𝑡𝑎</sub>(𝑥<sub>𝑖</sub>|𝜃)\]
>
> solve for 𝜃
>
> the value will be the MLE 𝜃<font style="color: rgb(0,51,102);">ˆ</font> of 𝜃
# MLE - Properties
- MLE is the best estimator asymptotically in terms of its rate of convergence as the training set increases
- ML Estimator is consistent (i.e. as the number of training examples increases, the MLE of a parameter converges to the true value of the parameter) BUT ONLY UNDER THESE CONDITIONS:
	- the true distribution must lie within the model family
	- the true distribution must correspond to exactly one value of 𝜃. otherwise, ML can recover the correct true distribution, but will not be able to determine which value of 𝜃 was used by the data-generating processing

# Subpages
- [[MLE vs MAP]]
- [[LR - Methods Estimating Unknown Coefficients - MLE|Solving Linear Regression With MLE]]
> [!list-indent-undo]
> ```dataview
> LIST
> FROM ""
> WHERE file.folder = this.file.folder + "/" + this.file.name
> ```

# Resources

![](https://www.youtube.com/watch?v=Fd7w1_x1Gn4)
