---
title: "PGM - Model Learning (Structure and／or Parameter)"
created: 2021-09-13T05:26:34.756-05:00
modified: 2021-09-13T05:26:34.756-05:00
parent: "[[Probabilistic Graphical Models (PGM) - Structured Probabilistic Models (SPM)]]"
children:
  - "[[Structure Learning]]"
---
Given data sampled from true distribution 𝐏, design a PGM 𝓜 that most likely represents 𝐏

![[PGM - Model Learning (Structure and／or Parameter)/pgm-learning.png|600]]
### PGM Model Learning - Tutorials
- [Daphne Koller - PGM Learning Lectures](https://www.coursera.org/learn/probabilistic-graphical-models-3-learning)

### PGM Model Learning - Dimensions

problem domain dimensions:
- complete/fully-observed data or incomplete/partially-observed data -
- known PGM structure or unknown PGM structure -
	- model structure type:
		- directed structure or undirected structure -
		- tree structure or graph structure -
- learning style:
	- frequentist (mle) or bayesian (map) -

### PGM Model Learning - Generic
- <strong>[[Structure Learning|structure learning]]</strong> - given data learn the structure
- <strong>parameter learning</strong> (if model is parametric) - given data learn the parameters of the structure
	- [[Point／Parameter Estimation／Estimator／Estimate／Approximation - Estimating Parameters of Parametric Distribution／Population Function／Model (Population Parameters - Sample Statistics)|Estimating Parameters of Parametric Distribution/Population Function/Model]]

### PGM Model Learning - Specific
- [[BN - Learning Structure & Parameters|Bayesian Networks - Learning Structure & Parameters]]
- Markov Networks - Learning Structure & Parameters

# <strong>Learning Summary - Extra (TODO combine with Linear Regression)</strong>

> [!expand]- Click here to expand...
> ### Learning
> - hypothesis (model) space
> - objective function
> - optimization algorithm
>
> ### Hypothesis Space
> - what are we searching for:
> 	- parameters
> 	- structure
> - imposing constraints:
> 	- for computational efficiency
> 	- to reduce model capacity
> 	- to incorporate prior knowledge
>
> ### Objective Function
> - penalize likelihood
> 	- 𝓛((𝐺,𝜃)|𝐷) + 𝓡(𝐺,𝜃)
> 	- parameter prior
> 	- structure complexity penalty
> - bayesian score
> 	- 𝑙𝑜𝑔𝐏(𝐺|𝐷) = 𝑙𝑜𝑔𝐏(𝐷|𝐺) + 𝑙𝑜𝑔𝐏(𝐺) + 𝑐𝑜𝑛𝑠𝑡𝑎𝑛𝑡
> 	- where:
> 		- 𝑙𝑜𝑔𝐏(𝐺|𝐷) - log of posterior
> 		- 𝑙𝑜𝑔𝐏(𝐷|𝐺) - log of marginal likelihood
> 		- 𝑙𝑜𝑔𝐏(𝐺) - graph prior
>
> ### Optimization Algorithm
> - continuous space
> 	- closed form - BNs with bernoulli/multinoulli variables
> 	- gradient ascent
> 		- MRF learning
> 		- learning with missing data
> 	- expectation maximization
> 		- learning with missing data
> - discrete space
> 	- max spanning tree
> 	- hill-climbing
> - discrete + continuous
>
> ### Hyperparameters
> - model hyperparameters
> 	- equivalent sample size for parameter prior
> 	- regularization strength for L1 or L2
> 	- stopping criterion for EM
> 	- stength of structure penalty
> 	- set of features
> 	- cardinality (number of values) of latent variable
> - optimize on validation
> 	- training on training set, then evaluate on validation set. we then pick the hyperparameters based on the best evaluation on the validation set instead of the training set
>
> ### Troubleshooting Underfitting
> - training and test performance both low
> - solutions:
> 	- decrease regularization
> 	- reduce structure penalties
> 	- add feature via error analysis
>
> ### Troubleshooting Overfitting
> - training performance high
> - test performance is low
> - solutions:
> 	- increase regularization
> 	- impose capacity constraints
> 	- reduce feature set
>
> ### Troubleshooting Optimization
> - optimization may not be converging to good/global optimum
> - can happen even if problem is convex
> - compare different learning rates
> - try different random initializations
>
> ### Troubleshooting Objective Mismatch
>
> if the following is the case
> - objective(model 1) \>\> objective(model 2)
> - performance(model 1) \<\< performance(model 2)
>
> then need to redesign the objective function to match the desired performance criterion
> ### Typical Learning Loop
> 1. design model template
> 2. select hyperparameters via cross-validation on training set
> 3. train on training set with the chosen hyperparameters
> 4. evaluate performance on the held-out set
> 5. error analysis and model redesign
> 6. repeat step from 1
> 7. report results on separate test set
>
> ### When PGMs?
> - when we have noisy dat and uncertainty
> - when we have lots of prior knowledge
> - when we wish to reason about multiple variables
> - when we want to construct richly structured models from modular building blocks
>
> ### Intertwined Design Choices
>
> design choices in:
> - <strong>representation</strong>
> 	- affects the cost of inference and learning
> - <strong>inference algorithm</strong>
> 	- used as a subroutine in learning
> 	- some are only usable in certain types of models
> - <strong>learning algorithm</strong>
> 	- learnability imposes modeling constraints
> 	- resulting structure affects cost of inference algorithm
>
> ### Example Image Segmentation
> - [[Bayesian Networks (BN)|Bayesian Networks]] vs [[Markov Networks／Nets - Markov Random Fields (MRF)|Markov Random Fields]] vs [[Conditional／Discriminative Random Fields (CRF)|Conditional Random Fields]]
> 	- naturalness of model
> 	- using rich features
> 	- inference cost
> 	- training cost - easier with bayesian networks
> 	- learn with missing data
>
> ### Mix & Match: Modeling
> - mix directed and undirected edges
> - e.g. image segmentation from unlabeled images
> 	- undirected edges over labels similar cluster pixels 𝑆 - natural directionality
> 	- directed for 𝐏(𝑋|𝑆) - easy learning (without inference)
>
> ### Mix & Match: Inference
> - apply different inference algorithms to different part of model
> - e.g. combine approximate inference (BP or MCMC) with exact inference over subsets of variables
>
> ### Mix & Match: Learning
> - apply different learning algorithms to different parts of model
> - e.g. combine high-accuracy, easily-trained model (e.g. SVM) for node potentials 𝐏(𝑆|𝑋) with CRF learning for higher-order potentials
>
> ### TODO
> - [https://www.coursera.org/lecture/probabilistic-graphical-models-3-learning/learning-overview-iBevr](https://www.coursera.org/lecture/probabilistic-graphical-models-3-learning/learning-overview-iBevr)
# <strong>PGM Learning - Extra</strong>

> [!expand]- Click here to expand...
> ### LEARNING TASKS
>
> model constraints (first axis)
> - extent to which our input constrains the hypothesis space (the class of models that we are allowed to consider as possible outputs of our learning algorithm)
> 	- given a graph structure we have to learn the parameters from data
> 	- learn both parameters and structure from data
> 	- the complete set of variables is unknown, we may only observe some subset of variables in the domain and possibly be unaware of others
> - the less prior knowledge, the larger the hypothesis space
>
> data observability (second axis)
> - problem depends on the extent of the observability of out training set:
> 	- complete data or fully observed -
> 	- incomplete data or partially observed - each training instance some variables are not observed
> 	- hidden variable - a variable whose value is never observed in any training instance
>
> ###### taxonomy of learning tasks
> - based on these 3 axes, we can provide a taxonomy of different learning tasks
>
> complete data and known structure
> - bayesian networks and complete data, parameter estimation is easy and even has closed form solution
> - but does not hold for markov networks (global partition function induces entanglement of the parameters)
> - nevertheless, fixed structure and complete data, can be solved using simple iterated numerical optimization algorithms. unfortunately, each iterations requires inference over the network, which can be expensive for large models
>
> with unknown structure, hypothesis space now contains a super-exponential set of possible structure
> - bayesian networks - the same property that allowed a closed-form solution for the parameters also allows the score for a candidate network to be computed in closed form.
> - markov networks - most natural scores of network structure cannot be computed in closed form because of the global partition function
>
> incomplete data, induces an increase hypothesis-space regarding the values of the unobserved variables. also induces a nonconvex, multimodal optimization problem in parameter space
>
> the amount of data required to estimate parameters reliably grows linearly with the number of parameters, so that the amount of data required can grow exponentially with the network connectivity
> ### Bias-Variance Tradeoff
> - high-variance = low-bias = overfit
> - low-variance = high-bias = underfit
>
> - if our hypothesis space is very limited, it might not be able to represent the true target distribution P even with unlimited data. This is called BIAS sd the learning procedure is limited in how close it can approximate the target distribution
> - if we select a hypothesis space that is highly expressive, we are more likely to be able to represent the target distribution P. However, with rich hypothesis space and limited data set, cause higher variance of results.
>
> with limited data, the error introduced by variance may be larger than the potential error introduced by bias, and we may choose to restrict our learning to models that are too simple to correctly encode true P
>
> although the learned model is guaranteed to be incorrect, our ability to estimate its parameters more reliably may well compensate for the error arising from incorrect structural assumptions
>
> restricting the space of possible models leads us to select models M whose performance on the training objective is poorer, but whose distance to true P is better
> ### Methods to Reduce Overfitting
> - reducing features
> - regularization:
> 	- keep all features, but reduce magnitude/values of parameters
> 	- works well when we have a lot of features, each of which contributes a bit to predicting y
> - restricting our model (bound hypothesis space)
> - change training objective to incorporate a soft preference for simpler models. learning objective includes opposing components:
> 	- components that move towards models that fit well with observed data
> 	- components that provide REGULARIZATION that prevents moving to extremes
>
> ### Design and Evaluation of Learning Procedures
> - question in learning is to evaluate the performance of a learning procdure. 2 questions:
> 	- relative sense: compare 2 or more alternatives (e.g. hypothesis space, or training objectives)
> 	- absolute sense: test whether the model has learned the target distribution
>
> ### Evaluating Generalization Performance
> - methods in evaluating the performance of a given model(s) on unseen data:
> 	- use holdout testing - measuring loss using instances that are unseen during the training, and not on ones for which we optimized our performance. Therefore, generalizing. Naturally the performance of training set will be better than test-set, but if the difference is very large then the model maybe overfitting to the training data and may want to consider a less expressive model class, or some other method for discouraging overfitting. randomly divide data into 2 distint sets:
> 		- training set
> 		- test set
>
> when data is scarce we want to to use all data as training data, holdout testing may not be liked
> - k-fold cross-validation - partition data into k equal size sets. then at each iteration do holdout-testing by holding out 1 iteration and training on the rest.
> 	- an extreme case is when k = number of samples
> 	- cross-validation - not only allows us to estimate the average performance of the learning algorithm, but also the extent to which this performance VARIES across the different folds
> 	- cross-validation however, constructs k models and therefore does not result in a single model that can be used
> - both holdout-test and cross-validation - are primarily used for evaluating a learning procedure. It is used to compare different learning procedures. If we want to end up with a real model that we can use in a given domain, we would prob use cross-validation or holdout testing to select an algorithm and ensure that it is working satisfactorily, but then train our model on the entire data set, thereby making use of the maximum amount of available data to learn a single model
>
> ### Selecting a learning Procedure
> - if we use cross-validation of holdout-testing, and want to have an unbiased estimate of how well our selected procedure will perform on unseen data, we must hold back a completely separate test-set that is never used in selecting any aspect of the model, on which our model's final performance will be evaluated.
> - in this setting:
> 	- training set - used to learn the model
> 	- validation set - used to evaluate different variants of our learning procedure and select among them
> 	- test set - used to evaluate the performance of the best learning procedure
>
> ### Goodness of Fit
> - goodness of fit
> 	- evaluate whether learned model really captures everything there is to capture about the distribution
> 	- harder to answer
> - general idea: after learning the model, we ask whether the data behaves as though they were sampled from this distribution. We do this, by comparing the properties/statistics of training data and the simulated data of same size produced by the model.
> 	- if property f(training-data) differs significantly from f(simulated-data) we would probably reject the model
> - there are many choices of property f, eg:
> 	- empirical log-loss in data-set
