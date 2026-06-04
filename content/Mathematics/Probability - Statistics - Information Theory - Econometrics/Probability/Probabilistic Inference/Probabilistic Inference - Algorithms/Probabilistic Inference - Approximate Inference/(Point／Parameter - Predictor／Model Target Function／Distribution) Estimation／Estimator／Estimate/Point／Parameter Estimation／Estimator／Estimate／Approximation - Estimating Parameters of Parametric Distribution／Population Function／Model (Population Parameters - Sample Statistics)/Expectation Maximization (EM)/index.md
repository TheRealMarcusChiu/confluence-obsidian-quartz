---
title: "Expectation Maximization (EM)"
created: 2021-09-13T05:27:53.957-05:00
modified: 2024-11-18T10:58:32.344-06:00
parent: "[[Point／Parameter Estimation／Estimator／Estimate／Approximation - Estimating Parameters of Parametric Distribution／Population Function／Model (Population Parameters - Sample Statistics)]]"
children:
  - "[[EM - Bayesian Networks]]"
  - "[[EM - Clustering]]"
  - "[[EM - Gaussian Mixture Models]]"
  - "[[EM - Random Bayesian Mixture Model]]"
---
###### Expectation Maximization (EM)
````excerpt
- is an iterative method to find [[Maximum Likelihood Estimation (MLE)|maximum likelihood estimate (MLE)]] or [[Maximum a Posteriori (MAP)|maximum a posteriori (MAP)]] estimates of parameters 𝜃 in statistical models, where the model depends on [[Data Observability Types (Complete／Fully-Observable Data ｜ Incomplete／Partially-Observable Data ｜ Latent／Hidden／Hypothetical Variables)|unobserved latent/hidden variables]]
- used in [[Clustering|clustering]]
````
^excerpt

# EM Algorithm
1. <strong>INITIALIZATION STEP</strong>: initialize the parameters 𝜃 to any value(s)
2. <strong>EXPECTATION STEP</strong>: for each partially observed sample tuple, compute all possible permutations. then for each permutation compute its weight based on the values of parameters 𝜃 (this results in a bigger data-set and is weighted)
3. <strong>MAXIMIZATION STEP</strong>: estimate new values for parameters 𝜃 relative to the completed data from Step 2. estimation done either:
	- [[Maximum Likelihood Estimation (MLE)|Maximum Likelihood Estimate (MLE)]] - maximize on the likelihood function
	- [[Maximum a Posteriori (MAP)|Maximum a Posterior Estimate (MAP)]] - maximize on the posterior
	- based:
		- 𝐏(𝜃|𝐷) ∝ 𝐏(𝐷|𝜃)·𝐏(𝜃)
		- posterior ∝ likelihood·prior
4. repeat from Step 2 until convergence or max iterations

# EM TODO
- EM In Practice - [https://www.coursera.org/lecture/probabilistic-graphical-models-3-learning/em-in-practice-VAI6r](https://www.coursera.org/lecture/probabilistic-graphical-models-3-learning/em-in-practice-VAI6r)
- EM Latent Variables - [https://www.coursera.org/lecture/probabilistic-graphical-models-3-learning/latent-variables-iNq9y](https://www.coursera.org/lecture/probabilistic-graphical-models-3-learning/latent-variables-iNq9y)

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
