---
title: "Maximum a Posteriori (MAP)"
created: 2021-09-13T05:27:57.157-05:00
modified: 2024-02-11T10:08:31.970-06:00
parent: "[[Point／Parameter Estimation／Estimator／Estimate／Approximation - Estimating Parameters of Parametric Distribution／Population Function／Model (Population Parameters - Sample Statistics)]]"
children:
  - "[[MAP - Computing MAP of Specific Distributions]]"
  - "[[MAP - Similarities to MLE with Parameter Regularization]]"
---
###### Maximum a Posteriori (MAP)
````excerpt
- is a method of [[Point／Parameter Estimation／Estimator／Estimate／Approximation - Estimating Parameters of Parametric Distribution／Population Function／Model (Population Parameters - Sample Statistics)|estimating the population parameters (𝜃)]] of a [[Probability Distribution Models／Representations|parametric probability distribution model]] by maximizing the [[Prior Probability Distribution - Posterior Probability Distribution|a posterior]], so that under the assumed distribution/statistical model the observed data is most probable
````
^excerpt

# MAP - Intuition

Consider a set of 𝑛 examples 𝑿 = {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>} drawn [i.i.d.](http://confluence.marcuschiu.com/pages/viewpage.action?pageId=14353248) from the true but unknown distribution 𝐏<sub>𝑑𝑎𝑡𝑎</sub>(𝑋<sub>𝑖</sub>)

Let 𝐏<sub>𝑚𝑜𝑑𝑒𝑙</sub>(𝑋<sub>𝑖</sub>;𝜃) be a parametric family of probability distributions over the space indexed by 𝜃

The MAP estimator for 𝜃, denoted as 𝜃ˆ<sub>𝑀𝐴𝑃</sub>, is defined as choosing a value(s) for 𝜃 that maximizes the posterior probability 𝐏(𝜃|𝑿):
- 𝜃ˆ<sub>𝑀𝐴𝑃</sub> = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝜃</sub> 𝐏(𝜃|𝑿)
- 𝜃ˆ<sub>𝑀𝐴𝑃</sub> = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝜃</sub> 𝐏(𝑿|𝜃)𝐏(𝜃) / 𝐏(𝑿) <font style="color: rgb(122,134,154);">\# by [[Bayes' Rule／Theorem／Law (Prior - Posterior - Distribution - Likelihood - Probability of Evidence)|Bayes Theorem]]</font>
- 𝜃ˆ<sub>𝑀𝐴𝑃</sub> = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝜃</sub> 𝐏(𝑿|𝜃)𝐏(𝜃) <font style="color: rgb(122,134,154);">\# 𝐏(𝑿) is a constant </font>
- 𝜃ˆ<sub>𝑀𝐴𝑃</sub> = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝜃</sub> \[ 𝑙𝑜𝑔𝐏(𝑿|𝜃) + 𝑙𝑜𝑔𝐏(𝜃) \] <font style="color: rgb(122,134,154);">\# where:</font>
	- <font style="color: rgb(122,134,154);">𝑙𝑜𝑔𝐏(𝑥|𝜃) - log-likelihood term; which is equivalent to the </font>[[Maximum Likelihood Estimation (MLE)|MLE estimator]]
	- <font style="color: rgb(122,134,154);">𝑙𝑜𝑔𝐏(𝜃) - log prior term (corresponding to the </font>[[Prior Probability Distribution - Posterior Probability Distribution|prior distribution]]<font style="letter-spacing: 0.0px;color: rgb(122,134,154);">)</font>

the MAP estimate may not be unique
# MAP - Methods Estimating 𝜃

> [!expand]- enumeration
> - enumerate all possible samples

> [!expand]- analytical - iterative
> - [[Expectation Maximization (EM)|Expectation-Maximization (EM)]]
> - [[Gradient Descent／Ascent Algorithms - The Method of Steepest Descent／Ascent Algorithms|Gradient Descent]]

> [!expand]- analytical - closed form
> seek the value 𝜃 that maximizes the posterior given data {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>}:
> - 𝐏(𝜃|𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>) = 𝐏(𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>|𝜃)𝐏(𝜃) / 𝐏(𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>)
>
> we then have:
> - 𝜃<sub>𝑀𝐴𝑃</sub> = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝜃</sub>𝐏(𝜃|𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>)
> - 𝜃<sub>𝑀𝐴𝑃</sub> = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝜃</sub>𝐏(𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>|𝜃)𝐏(𝜃) / 𝐏(𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>)
> - 𝜃<sub>𝑀𝐴𝑃</sub> = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝜃</sub>𝐏(𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>|𝜃)𝐏(𝜃)
> - 𝜃<sub>𝑀𝐴𝑃</sub> = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝜃</sub>𝛱<sub>1≤𝑖≤𝑛</sub>𝐏(𝑋<sub>𝑖</sub>|𝜃)𝐏(𝜃)
> - 𝜃<sub>𝑀𝐴𝑃</sub> = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝜃</sub>𝑙𝑜𝑔\[𝛱<sub>1≤𝑖≤𝑛</sub>𝐏(𝑋<sub>𝑖</sub>|𝜃)𝐏(𝜃)\]
> - 𝜃<sub>𝑀𝐴𝑃</sub> = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝜃</sub>𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑙𝑜𝑔𝐏(𝑋<sub>𝑖</sub>|𝜃)\] + 𝑙𝑜𝑔𝐏(𝜃)
# MAP - Choosing a Prior 𝐏(𝜃)

Choosing a [[Conjugate Prior|conjugate prior]] (i.e. the prior 𝐏(𝜃) is the <strong>CONJUGATE PRIOR</strong> of the likelihood function 𝐏(𝑋|𝜃), if the resulting posterior 𝐏(𝜃|𝑋) has the same distribution model as the prior 𝐏(𝜃))
- cons - sometimes unrealistic
- pros - no maths, can generate the posterior distribution 𝐏(𝜃|𝑋)  exactly

# MAP - Subpages
- [[MLE vs MAP]]
> [!list-indent-undo]
> ```dataview
> LIST
> FROM ""
> WHERE file.folder = this.file.folder + "/" + this.file.name
> ```

# MAP - Resources

![](https://www.youtube.com/watch?v=kkhdIriddSI)
