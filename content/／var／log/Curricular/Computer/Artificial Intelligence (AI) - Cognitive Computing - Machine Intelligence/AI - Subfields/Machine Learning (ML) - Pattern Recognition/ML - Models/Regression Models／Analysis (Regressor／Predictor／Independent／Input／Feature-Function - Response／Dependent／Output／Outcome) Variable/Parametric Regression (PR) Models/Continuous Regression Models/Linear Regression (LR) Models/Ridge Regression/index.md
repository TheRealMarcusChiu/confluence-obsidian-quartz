---
title: "Ridge Regression"
created: 2021-12-20T15:16:06.976-06:00
modified: 2024-02-21T11:19:32.690-06:00
parent: "[[Linear Regression (LR) Models]]"
children: []
---
###### Ridge Regression
````excerpt
- is a type of [[Linear Regression (LR) Models|Linear Regression Model]] for estimating the coefficients of multiple-regression models in scenarios where independent variables are highly [[Correlation|correlated]] (i.e. [[Multiple LR - Collinearity／Colinear Correlation Among the Predictor Variables|colinear]] problem)
- utilizes [[Adjusted R²／R-Square (Adjusted Coefficient of Determination)|Adjusted R Squared]]?
````
^excerpt

# Ridge Regression

The solution or estimator for 𝛽ˆ using ridge regression is defined as:
- $\hat{𝛽}_R = (X^TX + 𝛬)^{-1}X^Ty$

where:
- $𝛬 = diag(𝜆_j) \text{ is a diagonal matrix of positive numbers, which are to be chosen}$

If 𝑋<sup>T</sup>𝑋 = 𝐷, then:
- $Var(\hat{𝛽}_{Rj}) = 𝜎^2 \frac{d_j}{(d_j + 𝜆_j)^2}$

The downside to reducing the variance is that the estimator is biased:
- $𝐄[\hat{𝛽}_{Rj}] = 𝛽_j \frac{d_j}{d_j + 𝜆_j}$

The [[Method of Least Mean Squared／Squares Error／Estimation／Estimator (LMS／LSE／MMSE) - Sum of Square Errors／Residuals - Regression Variance／Standard-Deviation／Error of Regression／Residuals／Estimate - Root Mean Square Deviation／Error (RMSD／E - MSE)|mean square error (MSE)]] is given by:
- $𝛽_j^2 \frac{𝜆_j^2}{(d_j + 𝜆_j)^2} + 𝜎^2 \frac{d_j^2}{(d_j + 𝜆_j)^2}$

The aim would be to set 𝜆<sub>𝑗</sub> so this is minimized.

Not able to minimize exactly since 𝛽<sub>𝑗</sub> is unknown.

Note that:
- $\hat{𝛽}_{Rj} = \hat{𝛽}_j \frac{d_j}{d_j + 𝜆_j}$

and so 𝛽<sub>𝑅𝑗</sub>ˆ is being shrunk towards the origin. Known as a shrinkage estimator.
# Another Way to Derive

The ridge estimator can be derived using "regularization", or the inclusion of a penalty term in the objective function.

Suppose instead of minimizing:
- 𝐼(𝛽) = (𝑦 - 𝑋𝛽)<sup>T</sup>(𝑦 - 𝑋𝛽)

We minimize:
- 𝐼(𝛽) = (𝑦 - 𝑋𝛽)<sup>T</sup>(𝑦 - 𝑋𝛽) + 𝜆||𝛽||<sup>2</sup>

Now we get:
- $\frac{\partial I_R}{\partial 𝛽} = 2X^TX𝛽 - 2X^Ty + 2𝜆𝛽$
- $0 = 2X^TX𝛽 - 2X^Ty + 2𝜆𝛽$
- $2X^Ty = 2X^TX𝛽 + 2𝜆𝛽$
- $X^Ty = X^TX𝛽 + 𝜆𝛽$
- $X^Ty = (X^TX + 𝜆𝛪)𝛽$
- $(X^TX + 𝜆𝛪)^{-1}X^Ty = 𝛽$
- $\hat{𝛽}_R = (X^TX + 𝜆𝛪)^{-1}X^Ty$

It is easy to see how to make this more general with different 𝜆s.

Regularization methods for estimating 𝛽 are now standard:
- 𝐼(𝛽) = (𝑦 - 𝑋𝛽)<sup>T</sup>(𝑦 - 𝑋𝛽) + 𝑃(𝛽)

for some penalty term 𝑃.

The penalty terms prevent the estimator 𝛽 from becoming large and indeed some can set some components of the estimator to be 0.
# Ridge Regression - Example

> [!expand]- Click here to expand...
> Take:
> - 𝑛 = 100
> - 𝑝 = 5
>
> 𝑥<sub>𝑖𝑗</sub> are independent standard uniform for 𝑗 = 1:4 and for 𝑗=5 we take 𝑥<sub>𝑖5</sub> = 𝑥<sub>𝑖1</sub> + 0.01𝑧<sub>𝑖</sub> where 𝑧<sub>𝑖</sub> are indepedent standard normal.
>
> The:
> - true 𝜎=1 which we assume to be known
> - true 𝛽<sup>T</sup> = \[2, -1, 3, -2, 0\]
>
> The first and last columns of 𝑋<sup>T</sup>𝑋 are highly colinear.
>
> The smallest eigenvalue of 𝑋<sup>T</sup>𝑋 is 0.005. This will cause a high variance for some of the 𝛽<sub>𝑗</sub>.
>
> The diagonal elements of (𝑋<sup>T</sup>𝑋)<sup>-1</sup> are (95.92, 0.10, 0.10, 0.11, 96.33).
>
> The estimator of 𝛽 is:
> - 𝛽ˆ<sup>T</sup> = (9.78, -1.19, 3.00, -2.09, -7.77)
>
> The first and fifth estimators are unreliable, as anticipated.
>
> We can get 𝛽<sub>𝑅</sub>ˆ for a range of 𝜆 values.
>
> In practice a choice of 𝜆 could be close to 0, with no need for a large value.
>
> A plot of the 𝛽<sub>𝑅1</sub>ˆ and 𝛽<sub>𝑅5</sub>ˆ as 𝜆 ranges between 0 and 5 is shown below
>
> ![[Ridge Regression/ridge-regression-example.png|400]]
# Subpages
- [[Ridge Regression vs LASSO Regression]]

# Resources
- [http://r-statistics.co/Ridge-Regression-With-R.html](http://r-statistics.co/Ridge-Regression-With-R.html)
