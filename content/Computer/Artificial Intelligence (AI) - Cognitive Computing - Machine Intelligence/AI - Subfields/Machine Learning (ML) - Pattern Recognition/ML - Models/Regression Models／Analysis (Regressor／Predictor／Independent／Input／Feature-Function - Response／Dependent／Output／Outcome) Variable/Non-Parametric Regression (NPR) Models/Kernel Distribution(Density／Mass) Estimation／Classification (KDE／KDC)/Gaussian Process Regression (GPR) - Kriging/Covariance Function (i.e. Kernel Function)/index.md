---
title: "Covariance Function (i.e. Kernel Function)"
created: 2021-11-02T02:06:38.728-05:00
modified: 2021-11-13T23:42:06.719-06:00
parent: "[[Gaussian Process Regression (GPR) - Kriging]]"
children: []
---
###### Covariance Function (i.e. Kernel Function)
- used in [[Gaussian Process Regression (GPR) - Kriging]]

They encode all assumptions about the form of function that we are modeling. In general, covariance represents some form of distance or similarity. Consider two input points (locations) 𝑥<sub>𝑖</sub> and 𝑥<sub>𝑗</sub> with the corresponding observed values 𝑦<sub>𝑖</sub> and 𝑦<sub>𝑗</sub>. If the inputs 𝑥<sub>𝑖</sub> and 𝑥<sub>𝑗</sub> are close to each other, we generally expect that 𝑦<sub>𝑖</sub> and 𝑦<sub>𝑗</sub> will be close as well. This measure of similarity is embedded in the covariance function
# Covariance Function - Types
- the most common type is the [[Radial Basis "Kernel" Function (RBF)|Gaussian Kernel Function]] (aka Squared Exponential Covariance Function)
- for others see: [[Kernel Functions (Similarity Functions)]]

# Resources
- [http://evelinag.com/Ariadne/covarianceFunctions.html](http://evelinag.com/Ariadne/covarianceFunctions.html)
