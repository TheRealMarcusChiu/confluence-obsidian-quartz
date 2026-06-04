---
title: "ML - Training／Validation／Test Data／Set - Training／Validation／Test Error"
created: 2020-08-13T15:16:39.313-05:00
modified: 2022-12-06T00:12:57.320-06:00
parent: "[[Machine Learning (ML) - Pattern Recognition]]"
children:
  - "[[Cross-Validation - K-Fold Cross-Validation]]"
  - "[[Leave-One-Out Cross-Validation]]"
  - "[[ML - Data Representation]]"
  - "[[Validation Data Set]]"
---
- <strong>training data </strong>- usually split into: <em>training-set</em> and <em>validation-set</em>
	- <strong>training set</strong>
		- examples that the training algorithm observes
		- used to learn the [[ML - Model Parameters & Hyperparameters|parameters]] of the model
		- typically 80% of training data
	- <strong>validation set</strong>
		- examples that the training algorithm does NOT see
		- used to estimate the generalization error of the trained model DURING training
		- used to learn the [[ML - Model Parameters & Hyperparameters|hyperparameters]] of the model
		- typically 20% of training data
- <strong>test set/data</strong>
	- examples coming from the same distribution as the training data
	- used to estimate the generalization error of the trained model AFTER the training is completed
	- examples are not used in any way to make choices about the model, including in the validation set
- <strong>training error</strong> - performance of the model over the training set
- <strong>validation error</strong> - performance of the model over the validation set
- <strong>test error</strong> - performance of the model over the test set

We could monitor the performance of the model AS it learns from the training set by plotting: training errors & validation error

As the algorithm learns, the training error goes down and so does the validation error. If we train for too long, training error may continue to decrease because the model is overfitting and learning the irrelevant detail and noise in the training dataset. However, at the same time, the validation error starts to rise again as the model’s ability to [[Estimator & Predictor／Model (Bias - Variance - Irreducible／Bayes／Noise) Error - Predictor／Model Capacity／Complexity - Generalization (Underfit - Goodfit - Overfit)|generalize]] decreases. The sweet spot is the point just before the validation error starts to increase where the model has good skill on both the training dataset and the unseen validation dataset

A test set is held back from your machine learning algorithms until the very end of the training process. At this post-training stage, you can evaluate the performance of the model on the test set to get a final objective idea of how the models might perform on unseen data
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Training Set Size

as the number of training examples increases:
- the expected test-error never increase
- a non-parametric model will yield lower test-error until the best possible test-error is achieved (i.e. Bayes Error)
- a parametric model (with less than optimal capacity) will asymptote to an error ABOVE [[Estimator & Predictor／Model (Bias - Variance - Irreducible／Bayes／Noise) Error - Predictor／Model Capacity／Complexity - Generalization (Underfit - Goodfit - Overfit)|Bayes Error]]
- a parametric model (with optimal capacity) will yield lower test-error until the best possible test-error is achieved (i.e. Bayes Error)
