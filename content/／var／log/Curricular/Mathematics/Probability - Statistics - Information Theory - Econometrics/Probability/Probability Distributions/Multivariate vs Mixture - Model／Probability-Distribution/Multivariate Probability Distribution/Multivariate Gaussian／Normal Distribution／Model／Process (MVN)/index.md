---
title: "Multivariate Gaussian／Normal Distribution／Model／Process (MVN)"
created: 2021-09-13T05:27:19.632-05:00
modified: 2021-11-12T05:30:35.138-06:00
parent: "[[Multivariate Probability Distribution]]"
children:
  - "[[Isotropic Gaussian]]"
  - "[[Multivariate Gaussian／Normal Distribution - Marginalizing & Conditioning]]"
---
<strong>Multivariate Gaussian/Normal Distribution (MVN)</strong>
- is a type of [[Multivariate Probability Distribution|multivariate probability distribution]]
- is a type of [[Gaussian／Normal Distribution／Model／Process|Gaussian/Normal Distribution/Model/Process]]
- not to be confused with [[Gaussian／Normal Mixture Distribution／Model／Process (GMM／NMM) - Bimodal／Trimodal／Multimodal|Gaussian/Normal Mixture Distribution/Model/Process (GMM/NMM)]]
- is a generalization of the [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|one-dimensional (univariate) normal distribution]] to higher dimensions
- is often used to approximate any set of (possibly) correlated real-valued random variables each of which clusters around a mean value

# MVN - Probability Density Function

A multivariate normal distribution is where each random variable is normally distributed and their joint distribution is also normal.

The multivariate normal distribution is defined by:
- mean vector 𝝁
- [[Covariance & Correlation Matrix|covariance matrix]] 𝚺

Visually, the multivariate normal distribution is:
- centered around the mean 𝝁
- its shape is defined by the covariance matrix 𝚺

### Covariance Matrix Types

> [!expand-ui]- Non-Degenerate Case
> The multivariate normal distribution is said to be "non-degenerate" when the symmetric [[Covariance & Correlation Matrix|covariance matrix]] is [[Positive／Negative Definite／Semi-Definite Indefinite Matrix|positive definite]]. In this case, the distribution has a [[Probability Distribution - Continuous Functions／Models (Probability Density Functions)|density]]
>
> > [!indent]
> ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/c66e6f6abd66698181e114a4b00da97446efd3c4)
>
> where:
> - 𝝁 is the 𝑘-dimensional mean vector
> - 𝐱 is a real 𝑘-dimensional column vector
> - 𝚺 is a 𝑘x𝑘 covariance matrix
> 	- 𝚺<sup>-1</sup> is the [[Inverse Matrix - Invertible／Non-Singular Matrix - 2-Sided Inverse Matrix - Invertible Matrix Theorem|inverse matrix]] of 𝚺
> 	- |𝚺| ≡ 𝑑𝑒𝑡 𝚺 is the [[Determinants - Invertible／Non-Singular - Not-Invertible／Singular|determinant]] of 𝚺 (also known as the [generalized variance](https://en.wikipedia.org/wiki/Generalized_variance))
>
> The equation above reduces to that of the [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|univariate normal distribution]] if:
> - 𝝁 is a 1-dimensional vector
> - 𝐱 is a 1-dimensional vector
> - 𝚺 is a 1x1 matrix

> [!expand-ui]- Degenerate Case
> TODO
# MVN - Bivariate Unimodal Model (Example)
![[Multivariate Gaussian／Normal Distribution／Model／Process (MVN)/bivariate-unimodal.jpg|301]]
# MVN - Regression / Learning Parameters
- see [[Gaussian Process Regression (GPR) - Kriging]]

# MVN - Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
