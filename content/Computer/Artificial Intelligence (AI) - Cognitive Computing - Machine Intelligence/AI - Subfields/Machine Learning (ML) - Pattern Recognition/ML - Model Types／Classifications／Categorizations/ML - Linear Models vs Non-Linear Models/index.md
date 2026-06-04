---
title: "ML - Linear Models vs Non-Linear Models"
created: 2020-08-16T00:31:38.817-05:00
modified: 2020-11-13T20:06:40.713-06:00
parent: "[[ML - Model Types／Classifications／Categorizations]]"
children: []
---
### Linear Model vs Non-Linear Models

comparing [[Ordinary Least Squares (OLS) Regression|linear regression]] / [[Logistic (Logit) Regression Model|logistic regression]] to [[Artificial Neural Networks (ANN)|neural networks]]
- [non-linear hypothesis - (linear regression / logistic regression) problem](https://www.coursera.org/lecture/machine-learning/non-linear-hypotheses-OAOhO)
- [non-linear hypothesis - neural networks (part 1)](https://www.coursera.org/lecture/machine-learning/examples-and-intuitions-i-rBZmG)
- [non-linear hypothesis - neural networks (part 2)](https://www.coursera.org/lecture/machine-learning/examples-and-intuitions-ii-solUx)

summary:
- linear regression and logistic regression cannot learn non-linear functions wrt inputs
- neural networks can learn non-linear functions wrt inputs

### Linear Models

types of linear models:
- [[Logistic (Logit) Regression Model|Logistic Regression]]
- [[Ordinary Least Squares (OLS) Regression|Linear Regression]]

linear models can be fit efficiently and reliably (either in closed form or with convex optimization)

downside of linear models is its [[Estimator & Predictor／Model (Bias - Variance - Irreducible／Bayes／Noise) Error - Predictor／Model Capacity／Complexity - Generalization (Underfit - Goodfit - Overfit)|capacity]] is limited to linear functions (i.e. cannot understand the interaction between any 2 input variables)
### Non-Linear Models (Extending Linear Models)

to extend linear models to represent non-linear functions of 𝑥, we can apply the linear model not to 𝑥 itself but to a transformed input 𝜙(𝑥), where 𝜙 is a non-linear transformation

equivalently we can apply the [[Support Vector Machines (SVM)|kernel trick]] to obtain a non-linear learning algorithm based on implicitly applying the 𝜙 mapping

how to choose the feature mapping 𝜙:
1. use a very generic 𝜙, such as the infinite-dimensional 𝜙 that is implicitly used by kernel machines based on the RBF kernel.
	1. if 𝜙(x) is high enough dimension:
		1. we can always have enough capacity to fit the training set
		2. generalization to the test set often remains poor
	2. very generic feature mappings are usually based only on the principle of local smoothness and do not encode enough prior information to solve advanced problems
2. manually engineer 𝜙:
	1. before the advent of deep learning this was the dominant approach
	2. requires decades of human effort for each separate task
3. auto learn 𝜙 with deep learning
	1. we have a model: 𝑦 = 𝑓(𝑥;𝜃,𝑤) = 𝜙(𝑥;𝜃)<sup>??</sup>??
	2. we now have parameters:
		1. 𝜃 that we use to learn 𝜙 from a broad class of functions
		2. 𝑤 that map 𝜙 to the desired output
	3. this is an example of deep feedforward network with 𝜙 defining a hidden layer
	4. this approach is the only one of the three that gives up on the convexity of the problem
	5. this approach can capture the benefit:
		1. first approach by being highly generic (by using a very broad family 𝜙(𝑥;𝜃)
		2. second approach by allowing human practitioners to encode their knowledge to help generalization by designing families 𝜙(𝑥;𝜃) that the human practitioner expect will perform well (the advantage is that the human designer only needs to find the right general function family rather than finding precisely the right function)

###### Deep Learning Modelss

other models will apply the third principle to:
- learning deterministic feature mappings from 𝑥 to 𝑦 (lacking feedback connections)
- learning stochastic mappings
- learning function with feedback
- learning probability distributions over a single vector

a common example of Deep Learning Model is the [[Vanilla／Feed-Forward Neural Networks (FNN／FFNN／FFN) - Multi-Layer／Multilayer Perceptrons (MLP)|Feed-Forward Neural Network - Multi-Layer Perceptrons (MLP)]]
