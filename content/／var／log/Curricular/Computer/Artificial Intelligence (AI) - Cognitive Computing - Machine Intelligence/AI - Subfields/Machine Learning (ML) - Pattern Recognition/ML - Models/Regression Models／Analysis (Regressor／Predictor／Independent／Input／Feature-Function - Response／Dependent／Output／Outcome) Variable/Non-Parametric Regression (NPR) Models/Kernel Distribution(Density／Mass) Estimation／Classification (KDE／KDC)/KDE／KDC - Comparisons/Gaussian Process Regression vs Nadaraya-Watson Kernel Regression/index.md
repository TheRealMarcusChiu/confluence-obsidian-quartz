---
title: "Gaussian Process Regression vs Nadaraya-Watson Kernel Regression"
created: 2022-02-21T16:21:06.297-06:00
modified: 2022-02-21T16:27:42.895-06:00
parent: "[[KDE／KDC - Comparisons]]"
children: []
---
# [[Gaussian Process Regression (GPR) - Kriging|Gaussian Process Regression]] vs [[Kernel Regression - Nadaraya-Watson Estimator (N-W KR)|Nadaraya-Watson Kernel Regression]]

There is a connection, depending on the GP covariance function and the kernel of the smoother. It's discussed in chapter 2 (section 2.6) of [Gaussian Processes for Machine Learning](http://www.gaussianprocess.org/gpml/chapters/RW2.pdf). Note that even a simple covariance function, such as the squared exponential, results in complex equivalent kernels due to the spectral properties of the function.

Other things to note are:
- in the multivariate setting:
	- N-WKR boils down to univariate regression in each dimension (see [this](https://stats.stackexchange.com/questions/125517/what-is-nadaraya-watson-kernel-regression-estimator-for-multivariate-response) answer)
	- GPs can model the full multivariate covariance
- there is no equivalent to the GP mean function
- the kernel in N-WKR needn't be a valid GP covariance function, and there may not be an equivalent covariance function for every kernel
- there is no obvious equivalent for e.g. periodic covariance functions as a kernel smoother
- in GPs you are free to combine covariance functions (e.g. through multiplication or addition), see e.g. the [kernel cookbook](http://www.cs.toronto.edu/~duvenaud/cookbook/index.html)
