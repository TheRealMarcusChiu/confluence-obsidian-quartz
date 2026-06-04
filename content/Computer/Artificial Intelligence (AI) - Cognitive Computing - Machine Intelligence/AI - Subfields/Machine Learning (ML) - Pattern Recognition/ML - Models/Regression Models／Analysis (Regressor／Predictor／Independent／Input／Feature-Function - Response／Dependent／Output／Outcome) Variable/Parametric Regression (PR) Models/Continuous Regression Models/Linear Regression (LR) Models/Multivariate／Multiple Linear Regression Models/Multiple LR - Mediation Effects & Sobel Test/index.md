---
title: "Multiple LR - Mediation Effects & Sobel Test"
created: 2024-02-01T12:49:14.667-06:00
modified: 2024-02-01T13:12:46.074-06:00
parent: "[[Multivariate／Multiple Linear Regression Models]]"
children: []
---
# Sobel Test - A Test on No Mediation Effect

Let 𝑚<sub>𝑖</sub> be a possible mediation variable between 𝑥<sub>𝑖</sub> and 𝑦<sub>𝑖</sub>such that:
- 𝑥<sub>𝑖</sub> → 𝑚<sub>𝑖</sub> → 𝑦<sub>𝑖</sub>

3 models:
- 𝑦<sub>𝑖</sub> = 𝛽<sub>11</sub> + 𝛽<sub>12</sub>𝑥<sub>𝑖</sub> + 𝜀<sub>𝑖</sub>
- 𝑚<sub>𝑖</sub> = 𝛽<sub>21</sub> + 𝛽<sub>22</sub>𝑥<sub>𝑖</sub> + 𝜀<sub>𝑖</sub>
- 𝑦<sub>𝑖</sub> = 𝛽<sub>31</sub> + 𝛽<sub>32</sub>𝑚<sub>𝑖</sub> + 𝛽<sub>33</sub>𝑥<sub>𝑖</sub> + 𝜀<sub>𝑖</sub>

There is no mediation effect if either:
- 𝛽<sub>22</sub> = 0
- 𝛽<sub>32</sub> = 0

In each of these cases:
- 𝛽<sub>12</sub> = 𝛽<sub>33</sub>

The test is formally:
- 𝐻: 𝛽<sub>12</sub> = 𝛽<sub>33</sub>

Under the null hypothesis:
- $𝐄[\hat{𝛽}_{12} - \hat{𝛽}_{33}] = 0$

The "test statistic" based on$\hat{𝛽}_{12} - \hat{𝛽}_{33}$

under the null hypothesis is normally distributed with:
- $mean = 0$
- $variance = \hat{𝛽}_{22}^2 Var[\hat{𝛽}_{32}] + \hat{𝛽}_{32}^2 Var[\hat{𝛽}_{22}]$
- 
> [!expand]- Click here to expand...
> It can be checked that:
> - $\hat{𝛽}_{12} - \hat{𝛽}_{33} = \hat{𝛽}_{22}\hat{𝛽}_{32}$
>
> Thus, the variance is the same between the two:
> - $Var \left[\hat{𝛽}_{12} - \hat{𝛽}_{33}\right] = Var \left[ \hat{𝛽}_{22}\hat{𝛽}_{32} \right]$
>
> The variance can be approximated by:
> - $Var \left[\hat{𝛽}_{12} - \hat{𝛽}_{33}\right] = Var \left[ \hat{𝛽}_{22}\hat{𝛽}_{32} \right] = \hat{𝛽}_{22}^2 Var[\hat{𝛽}_{32}] + \hat{𝛽}_{32}^2 Var[\hat{𝛽}_{22}]$<font style="color: rgb(122,134,154);">\# see [[Variance of Product of Two Random Variables|here]]</font>

![[Multiple LR - Mediation Effects & Sobel Test/Screenshot 2024-02-01 at 1.12.04 PM.png|400]]
