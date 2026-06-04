---
title: "Gaussian Process Regression (GPR) - Kriging"
created: 2021-08-14T15:05:40.178-05:00
modified: 2022-02-21T16:28:00.360-06:00
parent: "[[Kernel Distribution(Density／Mass) Estimation／Classification (KDE／KDC)]]"
children:
  - "[[Covariance Function (i.e. Kernel Function)]]"
  - "[[Gaussian Process Regression (GPR) - Explanation]]"
  - "[[Gaussian Process Regression (GPR) - Python Code]]"
---
###### Gaussian Process Regression (GPR) - Kriging
- originally in geostatistics, kriging or Kriging
- is a type of [[ML - Experience Type (Supervised／Unsupervised／Semi-Supervised／Self-Supervised／Multi-Instance／Reinforcement Learning)|supervised]] [[Regression Models／Analysis (Regressor／Predictor／Independent／Input／Feature-Function - Response／Dependent／Output／Outcome) Variable|regression]] method
- for a given set of training points, there are potentially infinitely many functions that fit the data. Gaussian processes offer an elegant solution to this problem by assigning a probability to each of these functions
- regression on [[Gaussian／Normal Distribution／Model／Process|Gaussian/Normal Distribution/Model/Process]]
- is a method of interpolation based on the Gaussian process governed by prior [[Covariation - Covariance|covariances]]. Under suitable assumptions on the priors, GPR gives the [[LLS - Comparisons (OLS vs WLS vs GLS) - Best Linear Unbiased Estimator (BLUE) - Minimum-Variance Unbiased Estimator (MVUE)|best linear unbiased estimate (BLUE)]] at unsampled locations
- is a type of [[Kernel Distribution(Density／Mass) Estimation／Classification (KDE／KDC)|Kernel Distribution(Density/Mass) Estimation/Classification (KDE/KDC)]] whose [[Kernel Functions (Similarity Functions)|kernel]] is a [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|Univariate Normal/Gaussian/Gauss/Laplace-Gauss﻿ Distribution/Model/Process (Bell Curve)]]
- can be thought of as an extension of the [[Multivariate Gaussian／Normal Distribution／Model／Process (MVN)|multivariate normal distribution]] to an infinite number of random variables covering each point on the input domain

# GPR - Covariance/Kernel Function
- see [[Covariance Function (i.e. Kernel Function)]]

# GPR - Types of Models

![[Gaussian／Normal Distribution／Model／Process#^excerpt]]
# GPR - Learning
- for learning Multivariate Unimodal Models: [[Gaussian Process Regression (GPR) - Explanation]]
- for learning Univariate Multimodal Models: [[EM - Gaussian Mixture Models]]

code examples:
- [[Gaussian Process Regression (GPR) - Python Code]]

# GPR - Other
- [[Linear Regression vs Gaussian Regression]]
- [[Gaussian Process Regression vs Nadaraya-Watson Kernel Regression]]

# Resources
- Gaussian Processes for Machine Learning \~ C. E. Rasmussen & C. K. I. Williams
- [http://www.infinitecuriosity.org/vizgp/](http://www.infinitecuriosity.org/vizgp/)
- [https://distill.pub/2019/visual-exploration-gaussian-processes/](https://distill.pub/2019/visual-exploration-gaussian-processes/)
- [[gaussian-process-regression-tutorial.pdf|intuitive-tutorial-to-gaussian-process-regression.pdf]]
