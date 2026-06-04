---
title: "Linear Regression vs Gaussian Regression"
created: 2021-08-14T15:20:07.482-05:00
modified: 2021-12-21T04:24:16.405-06:00
parent: "[[ML - Model Comparisons]]"
children: []
---
comparing:
- [[Linear Regression (LR) Models]]
- [[Gaussian Process Regression (GPR) - Kriging]]

The statistical definition of a model being linear is that the model must be linear in its parameters.

GPR can be defined by using either the function-space view or the weight-space view to reach the formula for the posterior mean and posterior variance.

If we see the weight-space view, we can clearly see that GPR is indeed a linear model with non linear functions of the inputs. The model is defined as a bayesian linear regression model:
- <font style="color: rgb(0,128,0);">𝑦̂</font> = 𝜙(𝐱)<sup>𝑇</sup>𝐰
- <font style="color: rgb(51,102,255);">𝑦</font> = <font style="color: rgb(0,128,0);">𝑦̂</font> + <font style="color: rgb(128,0,0);">𝑒</font>

where:
- 𝐱 denotes the input vector for an input
- 𝜙(𝑋) denotes some basis function applied on the input space
- 𝐰 is the weight vector
- <font style="color: rgb(0,128,0);">𝑦̂</font> is the regression model
- <font style="color: rgb(128,0,0);">𝑒</font> is the error/noise with Gaussian distribution

However, the non-linearity of inputs doesn't affect the linearity of the model itself. Kindly refer to the derivation in the weight-space view section of [http://www.gaussianprocess.org/gpml/chapters/RW2.pdf](http://www.gaussianprocess.org/gpml/chapters/RW2.pdf) for more information
