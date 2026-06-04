---
title: "LR - R Code Examples"
created: 2020-11-01T00:07:26.749-05:00
modified: 2020-11-01T15:22:33.621-06:00
parent: "[[Linear Regression (LR) Models]]"
children: []
---
> [!tabs]
>
> === house
>
> ```
> x <- house$size
> y <- house$price
>
> house.reg <- lm(y ~ x)
>
> # ANOVA TABLE
> (anova(house.reg))
> Analysis of Variance Table
> Response: y
>           Df  Sum Sq  Mean Sq  F value    Pr(>F)
> x         1    71534    71534   184.62  <2.2e-16 ***
> Residuals 56   21698      387
>
> # TESTING FOR ZERO SLOPE
> summary(house.reg)
> Call:
> lm(formula = y ~ x)
>
> Residuals:
>     Min      1Q  Median     3Q    Max 
> -38.489 -14.512  -1.422 14.919 54.389
>
> Coefficients:
>             Estimate Std.  Error  t value  Pr(>|t|)
> (Intercept)         5.432  8.191    0.663      0.51
> x                  56.083  4.128   13.587    <2e-16 ***
> ---
> Signif. codes: 0'***'0.001'**'0.01'*'0.05'.'0.1' '1
>
> Residual standard error: 19.68 on 56 degrees of freedom
> Multiple R-squared: 0.7673, Adjusted R-squared: 0.7631
> F-statistic: 184.6 on 1 and 56 DF, p-value: < 2.2e-16
>
> # CONFIDENCE INTERVAL FOR SLOPE
> confint(house.reg)
>                  2.5 %     97.5 %
> (Intercept)  -10.97619   21.83933
> x             47.81473   64.35183
>
> # PREDICTION AT A NEW X
> x.new <- data.frame(x=3)
> (predict(house.reg, newdata=x.new)) 
>        1
> 173.6814
>
> # Use fitted(house.reg) to get the fitted values
> # Use resid(house.reg) to get the residuals
> ```
> ### Plots for Checking the [[Gauss-Markov Assumptions - OLS Assumptions|Gauss-Markov Assumptions]]
> ```
> # RESIDUAL PLOT
> plot(fitted(house.reg), resid(house.reg))
> abline(h=0)
> ```
>
> ![[LR - R Code Examples/residual-plot.png]]
> ```
> # QQ PLOT
> qqnorm(resid(house.reg))
> qqline(resid(house.reg))
> ```
>
> ![[LR - R Code Examples/normal-qq-plot.png]]
> ```
> # TIME SERIES PLOT OF RESIDUALS
> plot(resid(house.reg), type="l")
> abline(h=0)
> ```
>
> ![[LR - R Code Examples/time-series-plot.png]]
>
> === cars
>
> ```
> library(datasets)
> data('cars')
> scatter.smooth(x=cars$speed, y=cars$dist, main="Distance ~ Speed")
> ```
>
> ![[LR - R Code Examples/cars-1.png|301]]
> ```
> linearMod <- lm(dist ~ speed, data=cars)
> abline(linearMod)
> ```
>
> ![[LR - R Code Examples/cars-2.png|301]]
>
> === non-linear
>
> ```
> plot(x,y)
> linearMod <- lm(y ~ x)
> abline(linearMod)
> ```
>
> ![[LR - R Code Examples/non-linear-1.png|600]]
> ```
> plot(1/x,y)
> t = 1/x
> linearMod <- lm(y ~ t)
> abline(linearMod)
> ```
>
> ![[LR - R Code Examples/non-linear-2.png|600]]
