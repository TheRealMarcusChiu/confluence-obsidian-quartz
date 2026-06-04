---
title: "Generalized Linear Models (GLiM／GLM)"
created: 2021-12-21T04:36:53.861-06:00
modified: 2023-09-21T15:53:58.019-05:00
parent: "[[General Linear Models vs Generalized Linear Models]]"
children:
  - "[[Generalized Additive Models (GAM)]]"
---
###### Generalized Linear Models (GLiM/GLM)
````excerpt
- is a flexible generalization of ordinary [[Linear Regression (LR) Models|linear regression]]
- is a family of statistical models that includes:
	- [[Linear Regression (LR) Models|linear regression]]
	- [[Logistic (Logit) Regression Model|logistic regression]]
	- [[Poisson Regression Model|Poisson regression]]
````
^excerpt

# GLM - 3 Components

All GLMs have 3 main components:
- the dependent variable 𝑌 conditional on independent variables 𝑋 has a distribution belonging to the [[Exponential Family|Exponential Family of Distributions]], with:
	- 𝜉 - location parameter
	- 𝜙 - scale parameter
- We specify a linear predictor 𝜃 = 𝑋𝛽 with:
	- 𝛽 - set of parameters
	- 𝜃 - having support 𝜃∊ℝ
- For 𝐄\[𝑌|𝑋\] = 𝜉, we link the linear predictor 𝜃 to the location parameter 𝜉 by "link function" 𝑔(𝜉):
	- 𝐄\[𝑌|𝑋\] = 𝜉 = 𝑔<sup>-1</sup>(𝜉)
	- 𝜃 = 𝑔(𝜉)

# GLM - Canonical Form & Non-Canonical Form
###### Canonical Form

Random variable 𝑌 has [[Probability Distribution - Continuous Functions／Models (Probability Density Functions)|probability density function (PDF)]] 𝑓(𝑦;𝜉,𝜙) that can be parameterized in the form:
- 𝑓(𝑦;𝜉,𝜙) = 𝑒𝑥𝑝<strong>\[ <font style="color: rgb(0,128,0);">(</font></strong> <font style="color: rgb(128,0,0);">\[𝑇(𝑦)𝑟(𝜉) - 𝑏(𝜉)\]</font> / <font style="color: rgb(128,0,0);">\[𝑎(𝜙)\]</font> <font style="color: rgb(0,128,0);"><strong>)</strong></font> + <font style="color: rgb(255,102,0);">𝑐(𝑦,𝜙)</font> <strong>\]</strong>

where:
- 𝜉 - location parameter
- 𝜙 - scale parameter

###### Non-Canonical Form

If:
- <font style="color: rgb(128,0,0);">𝑇(𝑦)</font> is the identity function (i.e. <font style="color: rgb(128,0,0);">𝑇(𝑦)</font> = 𝑦)
- link function 𝜃 = 𝑔(𝜉) is equivalent to <font style="color: rgb(128,0,0);">𝑟(𝜉)</font> (i.e. <font style="color: rgb(128,0,0);">𝑟(𝜉)</font> = 𝑔(𝜉))

Then the PDF reduces to the canonical form. In the case of the canonical form, we also reparametrize <font style="color: rgb(128,0,0);">𝑏(𝜉)</font> as a function of 𝜃 instead of 𝜉 (i.e. <font style="color: rgb(128,0,0);">𝑏(𝜃)</font>)
- 𝑓(𝑦;𝜉,𝜙) = 𝑒𝑥𝑝<strong>\[ <font style="color: rgb(0,128,0);">(</font></strong> <font style="color: rgb(128,0,0);">\[𝑇(𝑦)𝑟(𝜉) - 𝑏(𝜉)\]</font> / <font style="color: rgb(128,0,0);">\[𝑎(𝜙)\]</font> <font style="color: rgb(0,128,0);"><strong>)</strong></font> + <font style="color: rgb(255,102,0);">𝑐(𝑦,𝜙)</font> <strong>\]</strong>
- 𝑓(𝑦;𝜉,𝜙) = 𝑒𝑥𝑝<strong>\[ <font style="color: rgb(0,128,0);">(</font></strong> <font style="color: rgb(128,0,0);">\[𝑦·𝑔(𝜉) - 𝑏(𝜉)\]</font> / <font style="color: rgb(128,0,0);">\[𝑎(𝜙)\]</font> <font style="color: rgb(0,128,0);"><strong>)</strong></font> + <font style="color: rgb(255,102,0);">𝑐(𝑦,𝜙)</font> <strong>\]</strong>
- 𝑓(𝑦;𝜉,𝜙) = 𝑒𝑥𝑝<strong>\[ <font style="color: rgb(0,128,0);">(</font></strong> <font style="color: rgb(128,0,0);">\[𝑦𝜃 - 𝑏(𝜃)\]</font> / <font style="color: rgb(128,0,0);">\[𝑎(𝜙)\]</font> <font style="color: rgb(0,128,0);"><strong>)</strong></font> + <font style="color: rgb(255,102,0);">𝑐(𝑦,𝜙)</font> <strong>\]</strong>

# GLM - Fisher Information Review

TODO
# Other
- [[General Linear Models vs Generalized Linear Models]]
> [!list-indent-undo]
> ```dataview
> LIST
> FROM ""
> WHERE file.folder = this.file.folder + "/" + this.file.name
> ```

# Resources
- Part 1 - [https://towardsdatascience.com/generalized-linear-models-a-rigorous-mathematical-formulation-58ac2ec7d9ea](https://towardsdatascience.com/generalized-linear-models-a-rigorous-mathematical-formulation-58ac2ec7d9ea)
- Part 2 - [https://towardsdatascience.com/glms-part-ii-newton-raphson-fisher-scoring-iteratively-reweighted-least-squares-irls-a-1a1e2911047](https://towardsdatascience.com/glms-part-ii-newton-raphson-fisher-scoring-iteratively-reweighted-least-squares-irls-a-1a1e2911047)
- Part 3 - [https://towardsdatascience.com/glms-part-iii-deep-neural-networks-as-recursive-generalized-linear-models-ccb02817c9b5](https://towardsdatascience.com/glms-part-iii-deep-neural-networks-as-recursive-generalized-linear-models-ccb02817c9b5)
