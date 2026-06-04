---
title: "LR - Categorical Predictor Variables"
created: 2020-04-28T17:06:49.093-05:00
modified: 2021-12-21T04:16:43.048-06:00
parent: "[[Linear Regression (LR) Models]]"
children: []
---
- <strong>categorical variable</strong> - a variable that is [[Data／Variable Types - Measurement Scales (Nominal／Categorical／Factor - Ordinal - Interval - Ratio)|nominal]]

# Regression Model Representation

a categorical variable 𝒛 with cardinality 𝑐, can be represented with (𝑐-1) dummy binary variables {𝑧<sub>1</sub>, ..., 𝑧<sub>𝑐-1</sub>} where:
- 𝑧<sub>1</sub>equals 1 if 𝒛 has a label (1), otherwise 0
- 𝑧<sub>2</sub>equals 1 if 𝒛 has a label (2), otherwise 0
- ...
- 𝑧<sub>𝑐-1</sub>equals 1 if 𝒛 has a label (𝑐-1), otherwise 0

Thus, the regression model becomes:
- 𝐄\[𝑦|𝒛\] = 𝜃<sub>0</sub> + 𝜃<sub>1</sub>𝑧<sub>1</sub> + ... + 𝜃<sub>𝑐-1</sub>𝑧<sub>𝑐-1</sub>

# Testing Significance of a Categorical Variable

to test whether a categorical variable is significant, simultaneously test ALL corresponding slopes
- 𝐻<sub>0</sub>: 𝜃<sub>1</sub>= ... = 𝜃<sub>𝑐−1</sub>= 0
- 𝐻<sub>𝐴</sub>: at least one {𝜃<sub>1</sub>, ..., 𝜃<sub>𝑐−1</sub>} is non-zero

tested using an F-test with 𝑐−1 numerator d.f.
```
# Note: color is already a factor variable. If this is numeric, then we need to write:
# fit1 <- lm(y ~ x + factor(color))
```
# Example Code

> [!expand]- r code example 1
> read data
> ```
> jane <- read.table("jane.csv", sep=",", header=T)
> ```
>
> display data
> ```
> str(jane)
> 'data.frame': 150 obs. of 3 variables:
>  $ x     : int 1 1 1 2 2 2 3 3 3 4 ...
>  $ color : Factor w/ 3 levels "blue","green", "red": 3 1 2 3 1 ...
>  $ y     : num 24.9 12.3 16.6 25.2 12.1 ...
>
> attach(jane) # add to R so R could see the variable names directly
> table(color)
> color
>  blue green   red
>    50    50    50
> ```
>
> create a linear model with both x and color as predictors
> ```
> fit1 <- lm(y ~ x + color)
>
> # Note: color is already a factor variable. If this is
> # numeric, then we need to write:
> fit1 <- lm(y ~ x + factor(color))
> ```
>
> display summary of a linear model
> ```
> summary(fit1)
>
> Call:
> lm(formula = y ~ x + color)
>
> Residuals:
>      Min       1Q   Median       3Q      Max
> -14.2398  -2.9939   0.1725   3.5555  11.9747
>
> Coefficients:
>             Estimate  Std. Error  t value  Pr(>|t|)
> (Intercept) 13.16989     1.01710   12.948   < 2e-16 ***
> x            1.00344     0.02848   35.227   < 2e-16 ***
> colorgreen   2.12586     1.00688    2.111    0.0364 *
> colorred     6.60586     1.00688    6.561   8.7e-10 ***
> ---
> Signif. codes: 0'***' 0.001'**' 0.01'*' 0.05'.' 0.1' ' 1
>
> Residual standard error: 5.034 on 146 degrees of freedom
> Multiple R-squared: 0.898, Adjusted R-squared: 0.8959
> F-statistic: 428.6 on 3 and 146 DF, p-value: < 2.2e-16
> ```
>
> is color significant?
> ```
> fit2 <- lm(y~x)
>
> anova(fit2, fit1)
> Analysis of Variance Table
>
> Model 1: y ~ x
> Model 2: y ~ x + color
>   Res.Df    RSS  Df  Sum of Sq       F     Pr(>F)
> 1    148 4837.5  
> 2    146 3700.4   2     1137.1  22.433  3.197e-09 ***
> ---
> Signif. codes: 0'***' 0.001'**' 0.01'*' 0.05'.' 0.1' ' 1
> ```
>
> what is the predicted response for a subject with color:𝒛=blue and 𝑥=2?
> - 𝐄ˆ\[𝑦|𝑥,𝒛\] = 13.17 + 1.00𝑥 + 2.13𝑧<sub>𝑔𝑟𝑒𝑒𝑛</sub> + 6.61𝑧<sub>𝑟𝑒𝑑</sub>
> - 𝐄ˆ\[𝑦|𝑥,𝒛\] = 13.17 + 2.00 = 15.17 <font style="color: rgb(128,128,128);">\# 𝑧<sub>𝑔𝑟𝑒𝑒𝑛</sub> and 𝑧<sub>𝑟𝑒𝑑</sub>= 0 because 𝒛=blue</font>

> [!expand]- r code example 2
> ```
> data("Salaries", package = "carData")
> model <- lm(salary ~ factor(sex), data = Salaries)
> summary(model)$coef
>
> 			 Estimate  Std. Error    t value      Pr(>|t|)
> (Intercept) 101002.41    4809.386  21.001103  2.683482e-66
> sexMale      14088.01    5064.579   2.781674  5.667107e-03
> ```
> ```
> contrasts(Salaries$sex)
>
> 		Male
> Female  0
> Male    1
> ```
