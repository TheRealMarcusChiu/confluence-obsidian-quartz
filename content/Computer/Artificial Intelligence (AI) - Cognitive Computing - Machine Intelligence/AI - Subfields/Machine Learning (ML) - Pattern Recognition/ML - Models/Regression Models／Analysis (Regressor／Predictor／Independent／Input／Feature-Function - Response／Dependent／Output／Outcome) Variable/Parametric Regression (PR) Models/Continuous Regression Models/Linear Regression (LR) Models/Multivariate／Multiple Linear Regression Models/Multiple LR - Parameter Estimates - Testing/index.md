---
title: "Multiple LR - Parameter Estimates - Testing"
created: 2024-01-24T16:28:23.403-06:00
modified: 2024-01-25T00:38:26.979-06:00
parent: "[[Multivariate／Multiple Linear Regression Models]]"
children: []
---
Same as [here](http://confluence.marcuschiu.com/pages/viewpage.action?pageId=382287#:~:text=%F0%9D%90%B9%20statistic%20for%20testing,%F0%9D%9C%83%F0%9D%91%98%7D%29)

> [!expand-ui]- Test if all parameters 𝛽 = 0, assume 𝜎 is known
> The 𝑝⨯1 vector [[Multiple LR - Parameter Estimates - Expectation／Variance Conditional on {𝑥₁, ..., 𝑥ₙ}|parameter estimates 𝛽ˆ is Normal given {𝑥1, ..., 𝑥𝑛}]] with:
> - $Var[\hat{𝛽}] = 𝜎^2 (X^TX)^{-1}$
>
> If 𝛽ˆ is normal with [[Arithmetic Mean - Average - Location - Expected Value - Expectation Operator|mean]] = 0 and [[Covariance & Correlation Matrix|covariance matrix]] = 𝜎<sup>2</sup>(𝑋<sup>T</sup>𝑋)<sup>-1</sup>, then:
> - $z = \hat{𝛽}/SD[\hat{𝛽}]$
> - $z = \hat{𝛽}/\sqrt{𝜎^2(X^TX)^{-1}}$
> - $z = \hat{𝛽}/𝜎\sqrt{(X^TX)^{-1}}$
> - $z = \hat{𝛽}/𝜎\left(\sqrt{X^TX}\right)^{-1}$
> - $z = \sqrt{X^TX}\hat{𝛽}/𝜎$
>
> Is a [[Vectors|vector]] of independent [[z-distribution (Standard Normal Distribution) ｜ z-scores ｜ z-values ｜ z-table ｜ z-statistic ｜ Standardization - Standardized Values - Standard Scores - Normal Deviates|standard normal]] random variables.
>
> The distribution of 𝑧<sup>T</sup>𝑧 is therefore a [[Chi-Square Distribution|𝒳-squared]] with 𝑝 degrees of freedom and this can form the basis of a test.
> # TODO
>
> Fitted values 𝑦̂ for the design matrix 𝑋 are given by:
> - $\hat{y} = X\hat{𝛽} = X(X^TX)^{-1}X^Ty$
>
> The following 𝑛⨯𝑛 matrix 𝐻 is known as a hat matrix (a type of [[Projection／Idempotent Matrix (Projections onto Subspaces)|projection matrix]]):
> - $H = X(X^TX)^{-1}X^T$
>
> 𝐻 is symmetric and 𝐻<sup>2</sup> = 𝐻.
>
> The residual vector 𝑒̂ is defined as:
> - $\hat{e} = y - \hat{y}$
> - $\hat{e} = y - Hy$
> - $\hat{e} = (1 - H)y$
>
> The residual sum of squares is given by:
> - $\hat{e}^T\hat{e} = \left( (1 - H)y \right)^T (1 - H)y$
> - $\hat{e}^T\hat{e} = y^T(1 - H)^T (1 - H)y$
> - $\hat{e}^T\hat{e} = y^T(1 - H)(1 - H)y$
> - $\hat{e}^T\hat{e} = y^T(1 - 2H + H^2)y$
> - $\hat{e}^T\hat{e} = y^T(1 - 2H + H)y$
> - $\hat{e}^T\hat{e} = y^T(1 - H)y$
>
> and 𝑒̂<sup>T</sup>𝑒̂/𝜎<sup>2</sup> = 𝒳<sup>2</sup><sub>𝑛-𝑝</sub> is distributed as a [[Chi-Square Distribution|𝒳-square]] random variable with 𝑛-𝑝 degrees of freedom.
>
> To perform the test:
> - 𝐻<sub>0</sub>: 𝛽<sub>1</sub> = ... = 𝛽<sub>𝑝</sub> = 0
>
> We would need to fit a REDUCED model using NO predictors/parameters since the remaining are assumed to be 0.
>
> With the REDUCED model we compute:
> - 𝑦̂<sub>𝑟𝑒𝑑</sub>
> - <sub>𝐻𝑟𝑒𝑑</sub>
> - 𝑒̂<sub>𝑟𝑒𝑑</sub>
>
> (𝑒̂<sub>𝑟𝑒𝑑</sub><sup>T</sup>𝑒̂<sub>𝑟𝑒𝑑</sub> - 𝑒̂<sup>T</sup>𝑒̂)/𝜎<sup>2</sup> is distributed as a [[Chi-Square Distribution|𝒳-square]] random variable with 𝑝-1 degrees of freedom and is independent of 𝑒̂<sup>T</sup>𝑒̂
>
> The test statistic for the test is [[f-distribution ｜ f-scores ｜ f-value ｜ f-table ｜ f-statistic|𝐹 distributed]].
>
> An 𝐹 random variable with (𝜈<sub>1</sub>, 𝜈<sub>2</sub>) degrees of freedom is given as a certain ratio of independent 𝒳-squared random variables.
>
> That is:
> - $F_{𝜈_1, 𝜈_2} = \frac{𝒳^2_{𝜈_1}/𝜈_1}{𝒳^2_{𝜈_2}/𝜈_2}$
>
> Hence, the test statistic is:
> - $F_{p-1,n-p} = \frac{(\hat{e}_{red}^T\hat{e}_{red} - \hat{e}^T\hat{e})/(p-1)}{\hat{e}^T\hat{e}/(n-p)}$
>
> Now we would reject the hypothesis if the reduced residual sum of squares is too large. For this would suggest the assumption of putting 𝛽<sub>1</sub>, ..., 𝛽<sub>𝑝</sub> to 0 is not good.
>
> So we would reject 𝐻<sub>0</sub> if:
> - 𝐹<sub>𝑝-1,𝑛-𝑝</sub> \> 𝐹<sub>𝛼,𝑝-1,𝑛-𝑝</sub>
>
> where:
> - 𝐹<sub>𝛼,𝑝-1,𝑛-𝑝</sub> is the value for which an 𝐹 random variable with (𝑝-1,𝑛-𝑝) degrees of freedom exceed with probability 𝛼

> [!expand-ui]- Test if all parameters 𝛽 = 0, assume 𝜎 is unknown
> same test as "<font style="color: rgb(122,134,154);"><em>Test if all parameters 𝛽 = 0, assume 𝜎 is known</em></font>"

> [!expand-ui]- Test if a SUBSET of parameters 𝛽 = 0, assume 𝜎 is known
> The 𝑝⨯1 vector [[Multiple LR - Parameter Estimates - Expectation／Variance Conditional on {𝑥₁, ..., 𝑥ₙ}|parameter estimates 𝛽ˆ is Normal given {𝑥1, ..., 𝑥𝑛}]] with:
> - $Var[\hat{𝛽}] = 𝜎^2 (X^TX)^{-1}$
>
> If 𝛽ˆ is normal with [[Arithmetic Mean - Average - Location - Expected Value - Expectation Operator|mean]] = 0 vector and [[Covariance & Correlation Matrix|covariance matrix]] = 𝜎<sup>2</sup>(𝑋<sup>T</sup>𝑋)<sup>-1</sup>, then:
> - $z = \hat{𝛽}/SD[\hat{𝛽}]$
> - $z = \hat{𝛽}/ \sqrt{𝜎^2 (X^TX)^{-1}}$
> - $z = \hat{𝛽}/ 𝜎\sqrt{(X^TX)^{-1}}$
> - $z = \hat{𝛽}/ 𝜎\left(\sqrt{X^TX} \right)^{-1}$
> - $z = \sqrt{X^TX}\hat{𝛽}/ 𝜎$
>
> Is a [[Vectors|vector]] of independent [[z-distribution (Standard Normal Distribution) ｜ z-scores ｜ z-values ｜ z-table ｜ z-statistic ｜ Standardization - Standardized Values - Standard Scores - Normal Deviates|standard normal]] random variables.
>
> The distribution of 𝑧<sup>T</sup>𝑧 is therefore a [[Chi-Square Distribution|𝒳-squared]] with 𝑝 degrees of freedom and this can form the basis of a test.
> # TODO
>
> Fitted values 𝑦̂ for the design matrix 𝑋 are given by:
> - $\hat{y} = X\hat{𝛽} = X(X^TX)^{-1}X^Ty$
>
> The following 𝑛⨯𝑛 matrix 𝐻 is known as a hat matrix (a type of [[Projection／Idempotent Matrix (Projections onto Subspaces)|projection matrix]]):
> - $H = X(X^TX)^{-1}X^T$
>
> 𝐻 is symmetric and 𝐻<sup>2</sup> = 𝐻.
>
> The residual vector 𝑒̂ is defined as:
> - $\hat{e} = y - \hat{y}$
> - $\hat{e} = y - Hy$
> - $\hat{e} = (1 - H)y$
>
> The residual sum of squares is given by:
> - $\hat{e}^T\hat{e} = \left( (1 - H)y \right)^T (1 - H)y$
> - $\hat{e}^T\hat{e} = y^T(1 - H)^T (1 - H)y$
> - $\hat{e}^T\hat{e} = y^T(1 - H)(1 - H)y$
> - $\hat{e}^T\hat{e} = y^T(1 - 2H + H^2)y$
> - $\hat{e}^T\hat{e} = y^T(1 - 2H + H)y$
> - $\hat{e}^T\hat{e} = y^T(1 - H)y$
>
> and 𝑒̂<sup>T</sup>𝑒̂/𝜎<sup>2</sup> = 𝒳<sup>2</sup><sub>𝑛-𝑝</sub> is distributed as a [[Chi-Square Distribution|𝒳-square]] random variable with 𝑛-𝑝 degrees of freedom.
>
> To perform the test:
> - 𝐻<sub>0</sub>: 𝛽<sub>𝑞+1</sub> = ... = 𝛽<sub>𝑝</sub> = 0
>
> We would need to fit a REDUCED model using just {𝛽<sub>1</sub>, ..., 𝛽<sub>𝑞</sub>}. Since the remaining are assumed to be 0.
>
> With the REDUCED model we compute:
> - 𝑦̂<sub>𝑟𝑒𝑑</sub>
> - <sub>𝐻𝑟𝑒𝑑</sub>
> - 𝑒̂<sub>𝑟𝑒𝑑</sub>
>
> (𝑒̂<sub>𝑟𝑒𝑑</sub><sup>T</sup>𝑒̂<sub>𝑟𝑒𝑑</sub> - 𝑒̂<sup>T</sup>𝑒̂)/𝜎<sup>2</sup> is distributed as a [[Chi-Square Distribution|𝒳-square]] random variable with 𝑝-𝑞 degrees of freedom and is independent of 𝑒̂<sup>T</sup>𝑒̂
>
> The test statistic for the test is [[f-distribution ｜ f-scores ｜ f-value ｜ f-table ｜ f-statistic|𝐹 distributed]].
>
> An 𝐹 random variable with (𝜈<sub>1</sub>, 𝜈<sub>2</sub>) degrees of freedom is given as a certain ratio of independent 𝒳-squared random variables.
>
> That is:
> - $F_{𝜈_1, 𝜈_2} = \frac{𝒳^2_{𝜈_1}/𝜈_1}{𝒳^2_{𝜈_2}/𝜈_2}$
>
> Hence, the test statistic is:
> - $F_{p-q,n-q} = \frac{(\hat{e}_{red}^T\hat{e}_{red} - \hat{e}^T\hat{e})/(p-q)}{\hat{e}^T\hat{e}/(n-p)}$
>
> Now we would reject the hypothesis if the reduced residual sum of squares is too large. For this would suggest the assumption of putting 𝛽<sub>𝑞+1</sub>, ..., 𝛽<sub>𝑝</sub> to 0 is not good.
>
> So we would reject 𝐻<sub>0</sub> if:
> - 𝐹<sub>𝑝-𝑞,𝑛-𝑝</sub> \> 𝐹<sub>𝛼,𝑝-𝑞,𝑛-𝑝</sub>
>
> where:
> - 𝐹<sub>𝛼,𝑝-𝑞,𝑛-𝑝</sub> is the value for which an 𝐹 random variable with (𝑝-𝑞,𝑛-𝑝) degrees of freedom exceed with probability 𝛼

> [!expand-ui]- Test if a SUBSET of parameters 𝛽 = 0, assume 𝜎 is unknown
> same test as "<font style="color: rgb(122,134,154);"><em>Test if a SUBSET of parameters 𝛽 = 0, assume 𝜎 is known</em></font>"
