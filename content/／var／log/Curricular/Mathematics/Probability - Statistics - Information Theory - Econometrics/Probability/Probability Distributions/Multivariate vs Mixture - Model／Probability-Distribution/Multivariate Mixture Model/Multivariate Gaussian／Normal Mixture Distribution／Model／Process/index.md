---
title: "Multivariate Gaussian／Normal Mixture Distribution／Model／Process"
created: 2021-09-13T05:27:17.057-05:00
modified: 2021-10-31T20:02:58.410-05:00
parent: "[[Multivariate Mixture Model]]"
children: []
---
###### Multivariate Gaussian/Normal Mixture Distribution/Model/Process
- is a type of [[Gaussian／Normal Distribution／Model／Process|Gaussian/Normal Distribution/Model/Process]]
- is a distribution/model/process that is both:
	- [[Multivariate Gaussian／Normal Distribution／Model／Process (MVN)|Multivariate Gaussian/Normal Distribution/Model/Process (MVN)]]
	- [[Gaussian／Normal Mixture Distribution／Model／Process (GMM／NMM) - Bimodal／Trimodal／Multimodal|Gaussian/Normal Mixture Distribution/Model/Process (GMM/NMM) - Bimodal/Trimodal/Multimodal]]

# Bivariate Trimodal Model (Example)
![[Multivariate Gaussian／Normal Mixture Distribution／Model／Process/gaussian-mixture-model.png|600]]
# Example Covariances

samples from a Gaussian mixture model. In the example below, there are three components. From left to right:
- the first component has an <strong>isotropic covariance</strong> <strong>matrix</strong>, meaning it has the same amount of variance in each direction
- the second has a <strong>diagonal covariance matrix</strong>, meaning it can control the variance separately along each axis-aligned direction. This example has more variance along the 𝑥<sub>2</sub> axis than along the 𝑥<sub>1</sub> axis
- the third component has a <strong>full-rank covariance matrix</strong>, allowing it to control the variance separately along with an arbitrary basis of directions

![[Multivariate Gaussian／Normal Mixture Distribution／Model／Process/mixture-gaussian-model-distributions.png|301]]
# Learning Parameters

see [[Gaussian Process Regression (GPR) - Kriging]]
