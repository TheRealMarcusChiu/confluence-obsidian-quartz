---
title: "Non-Linear SVM (SVM With Kernels)"
created: 2020-08-16T22:55:25.441-05:00
modified: 2023-07-27T17:16:08.267-05:00
parent: "[[Support Vector Machines (SVM)]]"
children: []
---
###### Non-Linear SVM (SVM With Kernels)
````excerpt
- is an extension of [[Linear SVM (SVM Without Kernel)|Linear SVM]] that uses [[Kernel Functions (Similarity Functions)|kernel functions]] to expand its [[Estimator & Predictor／Model (Bias - Variance - Irreducible／Bayes／Noise) Error - Predictor／Model Capacity／Complexity - Generalization (Underfit - Goodfit - Overfit)|model capacity]] to include complex [[ML - Linear Models vs Non-Linear Models|non-linear models]]
- a [[Kernel Machines／Methods|kernel method]] learning algorithm
- [[Estimator & Predictor／Model (Bias - Variance - Irreducible／Bayes／Noise) Error - Predictor／Model Capacity／Complexity - Generalization (Underfit - Goodfit - Overfit)|capacity]] extended to complex [[ML - Linear Models vs Non-Linear Models|non-linear models]]
- there are various kernels to use (e.g. [[Gaussian Process Regression vs Nadaraya-Watson Kernel Regression|gaussian kernel]], [[Polynomial Kernel Function|polynomial kernel]], etc)
````
^excerpt

# Non-Linear SVM - Representation
- 𝒙 - input attribute values vector (i.e. 𝒙 = \[𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>\])
- 𝑦 - binary output value (0 or 1)
- 𝜽 - weight/parameter vector (i.e. 𝜽 = \[𝜃<sub>0</sub>, ..., 𝜃<sub>𝑛</sub>\]) <font style="color: rgb(255,0,0);">\# 𝜽 ∊ ℝ<sup>𝑛+1</sup>while in Linear SVM <font style="color: rgb(255,0,0);">𝜽 ∊ ℝ</font><sup>𝑘</sup></font>

given 𝑛 training examples:
- (𝒙<sup>(1)</sup>,𝑦<sup>(1)</sup>)
- ...
- (𝒙<sup>(𝑛)</sup>,𝑦<sup>(𝑛)</sup>)

# Non-Linear SVM - Cost Function With Regularization

here is the Linear SVM's regularized cost function:
- 𝐽(𝜽) = <strong>\[ </strong>𝐶·𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑦<sup>(𝑖)</sup>·𝑐𝑜𝑠𝑡<sub>1</sub>(𝜽<sup>𝑇</sup>𝒙<sup>(𝑖)</sup>) + (1-𝑦<sup>(𝑖)</sup>)·𝑐𝑜𝑠𝑡<sub>0</sub>(𝜽<sup>𝑇</sup>𝒙<sup>(𝑖)</sup>)\] + (1/2)·(𝜽<sup>𝑇</sup>𝜽) <strong>\]</strong>

instead of 𝒙<sup>(𝑖)</sup>we replace it with a feature function 𝑓<sup>(𝑖)</sup>:
- 𝐽(𝜽) = <strong>\[ </strong>𝐶·𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑦<sup>(𝑖)</sup>·𝑐𝑜𝑠𝑡<sub>1</sub>(𝜽<sup>𝑇</sup><font style="color: rgb(255,0,0);">𝒇<sup>(𝑖)</sup></font>) + (1-𝑦<sup>(𝑖)</sup>)·𝑐𝑜𝑠𝑡<sub>0</sub>(𝜽<sup>𝑇</sup><font style="color: rgb(255,0,0);"><font style="color: rgb(255,0,0);">𝒇</font><sup>(𝑖)</sup></font>)\] + (1/2)·(𝜽<sup>𝑇</sup>𝑀𝜽) <strong>\]</strong>

where:
- 𝑛 - number of training examples
- 𝜽 is now a vector in ℝ<sup>𝑛+1</sup>
- 𝒇<sup>(𝑖)</sup>is now a vector in ℝ<sup>𝑛+1</sup>
	- 𝒇<sup>(𝑖)</sup>= \[𝑓<sup>(𝑖)</sup><sub>0</sub>, 𝑓<sup>(𝑖)</sup><sub>1</sub>, ..., 𝑓<sup>(𝑖)</sup><sub>𝑛</sub>\]
		- 𝑓<sup>(𝑖)</sup><sub>0</sub>= 𝑘(𝒙<sup>(𝑖)</sup>, 𝒙<sup>(0)</sup>)
		- ...
		- 𝑓<sup>(𝑖)</sup><sub>𝑛</sub>= 𝑘(𝒙<sup>(𝑖)</sup>, 𝒙<sup>(𝑛)</sup>)
	- 𝑓<sup>(𝑖)</sup><sub>𝑗</sub><sup></sup>is a scalar value computed by 𝑘(𝒙<sup>(𝑖)</sup>,𝒙<sup>(𝑗)</sup>) which is a kernel function of your choice
- hyperparameters:
	- 𝐶 - regularization parameter
		- large 𝐶: high variance & low bias
		- small 𝐶: low variance & high bias
	- 𝑀 - distance matrix of your choice

# Non-Linear SVM - Learning 𝜽's

goal: optimize values of 𝜽 wrt cost function 𝐽(𝜽)
# Non-Linear SVM - Hypothesis

given 𝒙 and the learned parameters 𝜽, the assigned output value is defined as (i.e. hypothesis):
- ℎ<sub>𝜽</sub>(𝒙) = 1, if 𝜽<sup>𝑇</sup>𝒇 ≥ 0
- ℎ<sub>𝜽</sub>(𝒙) = 0, otherwise

# Non-Linear SVM - Processes
- perform [[Data Preparation - Methods Transforming Data to Normal Distribution|feature scaling]] on 𝒙
- choose hyperparameter 𝐶
- choose distance matrix 𝑀
- choose kernel function type (see: [[Kernel Functions (Similarity Functions)|kernel functions]])
- construct & minimize the cost function
