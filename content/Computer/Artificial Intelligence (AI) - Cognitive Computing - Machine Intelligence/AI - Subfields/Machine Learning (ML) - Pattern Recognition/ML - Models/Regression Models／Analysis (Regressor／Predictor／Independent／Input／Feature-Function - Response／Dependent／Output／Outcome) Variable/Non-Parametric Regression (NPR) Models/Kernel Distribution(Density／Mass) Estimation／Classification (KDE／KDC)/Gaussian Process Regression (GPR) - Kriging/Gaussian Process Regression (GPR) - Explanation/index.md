---
title: "Gaussian Process Regression (GPR) - Explanation"
created: 2021-10-31T21:46:24.059-05:00
modified: 2022-02-20T22:37:48.478-06:00
parent: "[[Gaussian Process Regression (GPR) - Kriging]]"
children: []
---
A [[Gaussian／Normal Distribution／Model／Process|Gaussian processes model]] is a probability distribution over possible functions that fit a set of points. Because we have the probability distribution over all possible functions, we can calculate the means as the function, and the variances to indicate how confident the predictions are. The key points are summarized as:
1. the function (posteriors) updates with new observations
2. a Gaussian process model is a probability distribution over possible functions, and any finite sample of functions are jointly Gaussian distributed
3. the mean function calculated by the posterior distribution of possible functions is the function used for regression predictions

The regression function modeled by a multivariate Gaussian is given as:
- 𝐏(𝐟|𝐗) = 𝑁(𝐟|𝜇,𝐊)

where:
- 𝐗 = \[𝑥<sub>1</sub>, ..., 𝑥<sub>𝑛</sub>\] <font style="color: rgb(122,134,154);">\# 𝐗 is a set of 𝑛 observed data points</font>
- 𝐟 = \[𝑓(<strong>𝑥</strong><sub>1</sub>), ..., 𝑓(<strong>𝑥</strong><sub>𝑛</sub>)\] <font style="color: rgb(122,134,154);">\# 𝐟 is the set of 𝑓 values for each observed data point</font>
- 𝜇 = \[𝑚(<strong>𝑥</strong><sub>1</sub>), ..., 𝑚(<strong>𝑥</strong><sub>𝑛</sub>)\] <font style="color: rgb(122,134,154);">\# 𝜇 is the "estimated" mean of 𝐟, 𝑚 represents the mean function (𝜇 is the "prior" that is later updated with 𝐟)</font>
- 𝐊<sub>𝑖𝑗</sub> = 𝑘(𝑥<sub>𝑖</sub>, 𝑥<sub>𝑗</sub>) <font style="color: rgb(122,134,154);">\# 𝑘 represents a <strong>positive definite</strong></font> [[Kernel Functions (Similarity Functions)|kernel function]]

With no observation, the mean function 𝑚 is defaulted to be 𝑚(𝐗) = 0 given that the data is often normalized to a zero mean. The Gaussian processes model is a distribution over functions whose shape (smoothness) is defined by 𝐊. If points 𝑥<sub>𝑖</sub> and 𝑥<sub>𝑗</sub> are considered to be similar by the kernel, function outputs of the two points, 𝑓(𝑥<sub>𝑖</sub>,) and 𝑓(𝑥<sub>𝑗</sub>) are expected to be similar.

The process of conducting regressions by Gaussian processes model is illustrated below: given the observed data (red points) and a mean function 𝑓 (blue line) estimated by these observed data points, we make predictions at new points 𝐗<sub>∗</sub> as 𝐟(𝐗<sub>∗</sub>)

![[Gaussian Process Regression (GPR) - Explanation/gaussian-regression-example-1.png|200]]

The joint distribution of  𝐟 and 𝐟<sub>∗</sub> is expressed as:

> [!indent]
> ![[Gaussian Process Regression (GPR) - Explanation/gaussian-regression-example-2.png|301]]

where:
- 𝐊 = 𝐾(𝐗, 𝐗)
- 𝐊<sub>∗</sub> = 𝐾(𝐗, 𝐗<sub>∗</sub>)
- 𝐊<sub>∗∗</sub> = 𝐾(𝐗<sub>∗</sub>, 𝐗<sub>∗</sub>)
- 𝑚(𝐗) = 0
- 𝑚(𝐗<sub>∗</sub>) = 0

This is the joint probability distribution equation 𝐏(𝐟,𝐟<sub>∗</sub>|𝐗,𝐗<sub>∗</sub>) over 𝐟 and 𝐟<sub>∗</sub>, but regressions need the conditional distribution 𝐏(𝐟<sub>∗</sub>|𝐟,𝐗,𝐗<sub>∗</sub>) over 𝐟<sub>∗</sub> only. The derivation from the joint distribution 𝐏(𝐟,𝐟<sub>∗</sub>|𝐗,𝐗<sub>∗</sub>) to the conditional 𝐏(𝐟<sub>∗</sub>|𝐟,𝐗,𝐗<sub>∗</sub>) uses the following [[Multivariate Gaussian／Normal Distribution - Marginalizing & Conditioning|theorem]]. The result is:
- 𝐟<sub>∗</sub>|𝐟,𝐗,𝐗<sub>∗</sub>∼ 𝑁(𝐊<sub>∗</sub><sup>T</sup>𝐊𝐟, 𝐊<sub>∗∗</sub> - 𝐊<sub>∗</sub><sup>T</sup>𝐊<sup>-1</sup>𝐊<sub>∗</sub>

In more realistic situations, we don’t have access to true function values but noisy versions thereof:
- 𝑦 = 𝑓(𝑥) + ε

Assuming there is an additive [[Independent and Identically Distributed (IID)|independent and identically distributed (i.i.d.)]] Gaussian noise with variance 𝜎<sub>𝑛</sub><sup>2</sup>, the prior on the noisy observations becomes 𝑐𝑜𝑣(𝑦) = 𝐊 + 𝜎<sub>𝑛</sub><sup>2</sup>𝐼. The joint distribution of the observed values and the function values at new testing points becomes:

![[Gaussian Process Regression (GPR) - Explanation/gaussian-regression-example-4.png|200]]

By deriving the conditional distribution, we get the predictive equations for Gaussian processes regression as:

> [!indent]
> ![[Gaussian Process Regression (GPR) - Explanation/gaussian-regression-example-5.png|200]]

where:

> [!indent]
> ![[Gaussian Process Regression (GPR) - Explanation/gaussian-regression-example-6.png|270]]

In the variance function 𝑐𝑜𝑣(𝐟<sub>∗</sub>), it can be noted that the variance does not depend on the observed output 𝐲 but only on the inputs 𝐗 and 𝐗<sub>∗</sub>. This is a property of the Gaussian distribution
# Computation Complexity for learning Multivariate Unimodal Gaussian Models

for standard or vanilla Gaussian processes, there are two main constraints:
- the overall computation complexity is 𝑂(𝑁<sup>3</sup>) where 𝑁 is the dimension of the covariance matrix 𝐾
- the memory consumption is quadratic

Because of the computation complexity and memory consumption, the standard Gaussian processes model gets struck quickly. For regression tasks with a big dataset, Sparse GP is used to reduce computational complexity
# Hyperparameters Optimization

Kernel functions play significant roles in GPR. The choice of kernel functions determines almost all the generalization properties of a GP model. There are many covariance functions to choose or make your own for a Gaussian process depending on your specific problem. These criteria include if the model is smooth, if it is sparse, if it can change drastically, and if it needs to be differentiable. More depth information on choosing a kernel/covariance function for a Gaussian process can be found in \[5\]. In kernels, hyperparameters optimization is essential. Here we will use the most widely used kernel, RBF, as an example to explain the hyperparameters optimization. The general RBF function is given by:

![[Gaussian Process Regression (GPR) - Explanation/gaussian-regression-example-7.png|350]]

where the hyperparameters are:
- 𝜎<sub>𝑓</sub> - is the vertical scale that describes how vertically the function can span
- 𝑙 - is the horizontal scale that indicates how quickly the correlation relationship between two points drops as their distance increases

![[Gaussian Process Regression (GPR) - Explanation/gaussian-regression-example8.png|550]]

The optimized hyperparameters 𝚯<sup>∗</sup> are determined by the log marginal likelihood as:
- 𝚯<sup>∗</sup> = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝚯</sub> \[ 𝑙𝑜𝑔 𝐏(𝐲|𝐗,𝚯) \]

Thus, considering hyperparameters, a more general equation of predictions at the new testing points is:
- 𝐟 ̄<sub>∗</sub>|𝐗,𝐲,𝐗<sub>∗</sub>,𝚯 ∼ 𝑁(𝐟 ̄<sub>∗</sub>, 𝑐𝑜𝑣(𝐟<sub>∗</sub>))

Note that after learning/tuning the hyperparameters, the predictive variance 𝑐𝑜𝑣(𝐟<sub>∗</sub>) depends on not only the inputs 𝐗 and 𝐗<sub>∗</sub> but also the outputs 𝐲
