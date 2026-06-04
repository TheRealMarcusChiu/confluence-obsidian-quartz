---
title: "Multiple LR - Collinearity／Colinear Correlation Among the Predictor Variables"
created: 2024-01-24T22:02:40.571-06:00
modified: 2024-01-25T15:12:51.306-06:00
parent: "[[Multivariate／Multiple Linear Regression Models]]"
children: []
---
# Problem

Recall:
- $\hat{𝛽}_j = N(𝛽_j, 𝜎^2C_j)$

where:
- 𝐶<sub>𝑗</sub> is the 𝑗<sup>th</sup> diagonal element of (𝑋<sup>𝑇</sup>𝑋)<sup>-1</sup>

So if 𝐶<sub>𝑗</sub> is big, there is a large variance for 𝛽<sub>𝑗</sub> and the estimator could be unreliable.

It makes sense therefore to understand when 𝐶<sub>𝑗</sub> can be large and to see how about to solve that problem.
###### EXAMPLE

Consider the linear model:
- $y_i = x_{i1} + 2x_{i2} + 𝜀_i$

where:
- 𝑥<sub>𝑖1</sub> - is the standard normal
- 𝑥<sub>𝑖2</sub> = 0.9𝑥<sub>𝑖1</sub> + 0.01𝑧<sub>𝑖</sub>
- 𝑧𝑖 - is the standard normal

Thus:
- 𝛽<sub>1</sub> = 1
- 𝛽<sub>2</sub> = 2

Generating 𝑛=100 samples from this linear model, the estimates of {𝛽<sub>1</sub>, 𝛽<sub>2</sub>} are as follows:
- 𝛽<sub>1</sub>ˆ = 15.57
- 𝛽<sub>2</sub>ˆ = -14.30

These estimates {𝛽<sub>1</sub>ˆ, 𝛽<sub>2</sub>ˆ} are UNACCEPTABLE!!!
###### HOW & WHEN THIS HAPPENS

To understand what has happened, recall:
- $X^TX = \begin{bmatrix} \sum_{i=1}^n x_{i1}^2 & \sum_{i=1}^n x_{i1}x_{i2}\\ \sum_{i=1}^n x_{i1}x_{i2} & \sum_{i=1}^n x_{i2}^2 \\ \end{bmatrix}$

So:
- $(X^TX)^{-1} = adjoint(X^TX) / determinant(X^TX)$
- $(X^TX)^{-1} = \begin{bmatrix} \sum_{i=1}^n x_{i2}^2 & -\sum_{i=1}^n x_{i1}x_{i2}\\ -\sum_{i=1}^n x_{i1}x_{i2} & \sum_{i=1}^n x_{i1}^2 \\ \end{bmatrix} / W$

where:
- $W = \sum_{i=1}^n x_{i1}^2 \sum_{i=1}^n x_{i2}^2 - \left( \sum_{i=1}^n x_{i1}x_{i2} \right)^2$

Thus:
- if 𝑥<sub>𝑖1</sub>=𝑥<sub>𝑖2</sub>, then 𝑊=0, then (𝑋<sup>𝑇</sup>𝑋)<sup>-1</sup> will have large entries, then 𝛽<sub>𝑗</sub>ˆ \~ 𝑁(𝛽<sub>𝑗</sub>, 𝜎<sup>2</sup>𝐶<sub>𝑗</sub>) will have large variance
- if 𝑥<sub>𝑖1</sub>similar 𝑥<sub>𝑖2</sub>, then 𝑊 near 0, then (𝑋<sup>𝑇</sup>𝑋)<sup>-1</sup> will have large entries, then 𝛽<sub>𝑗</sub>ˆ \~ 𝑁(𝛽<sub>𝑗</sub>, 𝜎<sup>2</sup>𝐶<sub>𝑗</sub>) will have large variance

###### ANOTHER HOW & WHEN THIS HAPPENS

𝑊 will be small if the smallest [[Eigenvectors (Characteristic Vectors) - Eigenvalues (Spectrum)|eigenvalue]] of 𝑋<sup>𝑇</sup>𝑋 is close to zero.

To make the following arguments simpler to follow, assume that 𝑋<sup>𝑇</sup>𝑋=𝐷, [[Diagonal Matrix|diagonal matrix]]. Then:
- 𝑉𝑎𝑟(𝛽<sub>𝑗</sub>ˆ) = 𝜎<sup>2</sup>/𝑑<sub>𝑗</sub>

and if one of the eigenvalues 𝑑<sub>𝑗</sub> is small, the corresponding variance is large.
# Solution
[[Ridge Regression]]
