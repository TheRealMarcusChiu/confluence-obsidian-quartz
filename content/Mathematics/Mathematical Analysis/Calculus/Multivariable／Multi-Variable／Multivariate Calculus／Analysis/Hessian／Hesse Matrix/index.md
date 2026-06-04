---
title: "Hessian／Hesse Matrix"
created: 2021-09-13T05:25:57.321-05:00
modified: 2023-12-18T23:25:56.271-06:00
parent: "[[Multivariable／Multi-Variable／Multivariate Calculus／Analysis]]"
children: []
---
###### Hessian/Hesse Matrix - 𝐻
````excerpt
- is a [[Square Matrix|square]] and [[Symmetric Matrix|symmetric]] matrix of [[Derivative of Scalar-Valued Function (Partial Derivative - Total Derivative - Gradient - Directional Directive - Second Order Partial Derivative)|second-order partial derivatives]] of a [[Multi-Variable／Multivariable／Multivariate Functions|scalar-valued function / scalar field]]
- it describes the local [[Curvature Formula|curvature]] of a function of many variables
- equivalently, the Hessian is the [[Jacobian Matrix|Jacobian]] of the [[Gradient Descent／Ascent Algorithm - Bayesian Networks|gradient]] (However, Jacobian involves a vector-valued function?)
````
^excerpt

# Hessian Matrix - Definition
The Hessian matrix 𝐻(𝑓)(𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) is defined as:
- 𝐻(𝑓)(𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>)\[𝑖,𝑗\] = (𝛿/𝛿𝑥<sub>𝑖</sub>𝛿𝑥<sub>𝑗</sub>) 𝑓(𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) <font style="color: rgb(128,128,128);">\# for 𝑖,𝑗 = 1 to 𝑘</font>

Anywhere that the [[Derivative of Scalar-Valued Function (Partial Derivative - Total Derivative - Gradient - Directional Directive - Second Order Partial Derivative)|second partial derivatives]] are [[Continuous Functions (continuous at a point - continuous over／on an interval - continuous everywhere／over／on the entire domain)|continuous]], the differential operators are [[Commutativity／Commutative|commutative]]:
- (𝛿/𝛿<font style="color: rgb(255,0,0);">𝑥<sub>𝑖</sub></font>𝛿<font style="color: rgb(0,128,0);">𝑥<sub>𝑗</sub></font>) 𝑓(𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) = (𝛿/𝛿<font style="color: rgb(0,128,0);">𝑥<sub>𝑗</sub></font><font style="color: rgb(255,0,0);">𝛿𝑥<sub>𝑖</sub></font>) 𝑓(𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>)

This implies that 𝐻\[𝑖,𝑗\] = 𝐻\[𝑗,𝑖\] so the Hessian matrix is a [[Symmetric Matrix|symmetric matrix]]
