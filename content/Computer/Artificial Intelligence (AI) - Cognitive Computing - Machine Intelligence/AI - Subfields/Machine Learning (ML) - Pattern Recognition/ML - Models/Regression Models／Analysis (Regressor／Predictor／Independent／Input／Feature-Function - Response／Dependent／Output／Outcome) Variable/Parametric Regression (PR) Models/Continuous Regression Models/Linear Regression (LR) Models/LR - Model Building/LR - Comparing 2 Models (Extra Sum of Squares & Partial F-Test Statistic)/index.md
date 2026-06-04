---
title: "LR - Comparing 2 Models (Extra Sum of Squares & Partial F-Test Statistic)"
created: 2020-11-01T15:28:02.790-06:00
modified: 2020-11-01T18:58:22.224-06:00
parent: "[[LR - Model Building]]"
children: []
---
read: [[Multivariate／Multiple Linear Regression Models|Multivariate/Multiple Linear Regression Models]]
- <strong>nested model</strong> - model 𝐴 is a nested model of 𝐵 if the predictors of 𝐴 is a subset of predictors of 𝐵

# <strong>Comparing 2 Models</strong>

the 2 models to be compared:
- <strong>𝑀<sub>𝐿</sub></strong> - <strong>larger model </strong>- predictors {𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>}
- <strong>𝑀<sub>𝑆</sub></strong>- <strong>smaller model (<strong>nested) </strong></strong>- predictors {𝑥<sub>1</sub>, ..., 𝑥<sub>𝑗</sub>} i.e. does not have {𝑥<sub>𝑗+1</sub>, ..., 𝑥<sub>𝑘</sub>}

### Extra Sum of Squares

<strong>extra sum of squares</strong> 𝑆𝑆<sub>𝐸𝑋</sub> is the difference of the models' sum of squares regressions 𝑆𝑆<sub>𝑅𝐸𝐺</sub> or sum of squares error 𝑆𝑆<sub>𝐸𝑅𝑅</sub>:
- 𝑆𝑆<sub>𝐸𝑋</sub>= 𝑆𝑆<sub>𝑅𝐸𝐺</sub>(𝑀<sub>𝐿</sub>) - 𝑆𝑆<sub>𝑅𝐸𝐺</sub>(𝑀<sub>𝑆</sub>)
- 𝑆𝑆<sub>𝐸𝑋</sub>= 𝑆𝑆<sub>𝐸𝑅𝑅</sub>(𝑀<sub>𝑆</sub>) - 𝑆𝑆<sub>𝐸𝑅𝑅</sub>(𝑀<sub>𝐿</sub>)

degrees of freedom of 𝑆𝑆<sub>𝐸𝑋</sub>:
- 𝑑𝑓<sub>𝐸𝑋</sub> = <font style="color: rgb(0,128,0);">𝑑𝑓<sub>𝑅𝐸𝐺</sub>(𝑀<sub>𝐿</sub>)</font> - <font style="color: rgb(128,0,0);">𝑑𝑓<sub>𝑅𝐸𝐺</sub>(𝑀<sub>𝑆</sub>)</font>
- 𝑑𝑓<sub>𝐸𝑋</sub> = <font style="color: rgb(0,128,0);">𝑛𝑢𝑚-𝑝𝑟𝑒𝑑𝑖𝑐𝑡𝑜𝑟-𝑣𝑎𝑟𝑖𝑎𝑏𝑙𝑒𝑠(𝑀<sub>𝐿</sub>)</font> - <font style="color: rgb(128,0,0);">𝑛𝑢𝑚-𝑝𝑟𝑒𝑑𝑖𝑐𝑡𝑜𝑟-𝑣𝑎𝑟𝑖𝑎𝑏𝑙𝑒𝑠(𝑀<sub>𝑆</sub>)</font>
- 𝑑𝑓<sub>𝐸𝑋</sub> = <font style="color: rgb(0,128,0);">𝑘</font> - <font style="color: rgb(128,0,0);">𝑗</font>

### Partial F-Test Statistic

significance of the additional explained variation (measured by 𝑆𝑆<sub>𝐸𝑋</sub>) is tested by a <strong>partial f-test statistic</strong>:
- 𝐹 = <font style="color: rgb(0,128,0);">𝑀𝑆<sub>𝐸𝑋</sub></font> / <font style="color: rgb(128,0,0);">𝑀𝑆<sub>𝐸𝑅𝑅</sub>(larger)</font>
- 𝐹 = <font style="color: rgb(0,128,0);">\[𝑆𝑆<sub>𝐸𝑋</sub>/(𝑘-𝑗)\]</font> / <font style="color: rgb(128,0,0);">\[𝑆𝑆<sub>𝐸𝑅𝑅</sub>(larger)/(𝑛-𝑘-1)\]</font>

the set of predictor variables in 𝑀<sub>1</sub>\\𝑀<sub>2</sub>= {𝑋<sub>𝑘+1</sub>, ..., 𝑋<sub>𝑚</sub>} affect the response 𝑌 if at least one of the slopes {𝜷<sub>𝑘+1</sub>, ..., 𝜷<sub>𝑚</sub>} is not zero in 𝑀<sub>1</sub>. The partial F-test is a test of:
- <strong>null hypothesis</strong> 𝐻<sub>0</sub>:
	- 𝜃<sub>𝑗+1</sub> = ... = 𝜃<sub>𝑘</sub> = 0
	- the full model does not capture more variation than the reduced model
- <strong>alternative hypothesis</strong> 𝐻<sub>𝐴</sub>:
	- at least one of {𝜃<sub>𝑗+1</sub>, ..., 𝜃<sub>𝑘</sub>} is ≠ 0
	- the full model captures more variation than the reduced model

null hypothesis 𝐻<sub>0</sub>'s [[Statistical Hypothesis Test - Null Distribution|null distribution]]:
- 𝐹<sub>(𝑘-𝑗),(𝑛-𝑘-1)</sub>

The partial F-test is used for sequential selection of predictors in [[Multivariate／Multiple Linear Regression Models|multivariate regression]]
- rejection region:
	- <code>qf(0.95, df1=k-j, df2=n-k-1)</code>
- p-value:
	- <code>pf(𝐹<sub>𝑜𝑏𝑠</sub>, df1=k-j, df2=n-k-1)</code>

### Example R Code

> [!expand]- Click here to expand...
> read the home price data
> ```
> home <- read.table("homeprice_multiple_predictors.txt", sep=",", header=T)
> ```
>
> display contents
> ```
> str(home)
> 'data.frame': 29 obs. of 7 variables:
> $ list         : num 80 151 310 295 339  ...
> $ sale         : num 118 151 300 275 340 ...
> $ full         : int 1 1 2 2 2 1 3 1 1 1 ...
> $ half         : int 0 0 1 1 0 1 0 1 2 0 ...
> $ bedrooms     : int 3 4 4 4 3 4 3 3 3 1 ...
> $ rooms        : int 6 7 9 8 7 8 7 7 7 3 ...
> $ neighborhood : int 1 1 3 3 4 3 2 2 3 2 ...
> ```
>
> attach the dataset in R's memory so that we can directly use the names of the variables
> ```
> attach(home)
> ```
>
> look at distributions of some predictors
> ```
> table(bedrooms)
> bedrooms
> 1  2  3  4  5
> 1  3 16  8  1
>
> table(full)
> full
> 1  2  3
> 13 11 5
>
> table(half)
> half
> 0  1  2
> 13 13 3
>
> table(neighborhood)
> neighborhood
> 1  2  3  4  5
> 2  8 12  5  2
> ```
>
> Create reduced model: regress sale price on \# bedrooms and neighborhood
> ```
> fit1 <- lm(sale ~ bedrooms + neighborhood
> summary(fit1)
> Call:
> lm(formula = sale ~ bedrooms + neighborhood)
>
> Residuals:
>     Min      1Q  Median      3Q     Max
> -90.871 -39.861   0.636  28.815 107.660
>
> Coefficients:
>              Estimate  Std. Error  t-value  Pr(>|t|)
> (Intercept)  -132.057      40.341   -3.273  0.003001 **
> bedrooms       42.483      11.446    3.712  0.000987 ***
> neighborhood   93.493       9.101   10.273  1.21e-10 ***
> ---
> Signif. codes: 0'***' 0.001'**' 0.01'*' 0.05'.' 0.1' ' 1
>
> Residual standard error: 47.3 on 26 degrees of freedom
> Multiple R-squared: 0.8491, Adjusted R-squared: 0.8375
> F-statistic: 73.16 on 2 and 26 DF, p-value: 2.1e-11
> ```
>
> create another model: add \# full and half baths to previous model
> ```
> fit2 <- update(fit1, . ~ . + full + half)
> summary(fit2)
>
> Call:
> lm(formula = sale ~ bedrooms + neighborhood + full + half)
>
> Residuals:
>     Min      1Q  Median      3Q     Max
> -56.554 -38.067   6.027  26.998  53.311
>
> Coefficients:
>              Estimate  Std. Error  t value  Pr(>|t|)
> (Intercept)  -125.121      33.136   -3.776  0.000926 ***
> bedrooms       29.513      10.091    2.925  0.007419 **
> neighborhood   78.724       9.669    8.142  2.31e-08 ***
> full           27.345      13.604    2.010  0.055785 .
> half           45.553      12.129	 3.756  0.000974 ***
> ---
> Signif. codes: 0'***' 0.001'**' 0.01'*' 0.05'.' 0.1' ' 1
>
> Residual standard error: 38.79 on 24 degrees of freedom
> Multiple R-squared: 0.9063, Adjusted R-squared: 0.8907
> F-statistic: 58.05 on 4 and 24 DF, p-value: 5.425e-12	
> ```
>
> drop \# full baths
> ```
> fit3 <- update(fit2, . ~ . - full)
> summary(fit3)
>
> Call:
> lm(formula = sale ~ bedrooms + neighborhood + half)
>
> Residuals:
>    Min     1Q Median     3Q    Max
> -67.55 -42.27   7.17  26.93  68.83
>
> Coefficients:
>             Estimate  Std. Error  t value  Pr(>|t|)
> (Intercept) -127.348      35.073   -3.631   0.00127 **
> bedrooms      35.649      10.187    3.500   0.00177 **
> neighborhood  90.982       7.947   11.449  1.95e-11 ***
> half          37.004      12.030    3.076   0.00503 **
> ---
> Signif. codes: 0'***' 0.001'**' 0.01'*' 0.05'.' 0.1' ' 1
>
> Residual standard error: 41.08 on 25 degrees of freedom
> Multiple R-squared: 0.8905, Adjusted R-squared: 0.8774
> F-statistic: 67.8 on 3 and 25 DF, p-value: 3.808e-12
> ```
>
> compare the nested models
> ```
> # check anova.lm
> ```
>
> important node: when comparing 2 models using <code><font style="color: rgb(128,128,128);">anova</font></code> the results are as expected from the partial F-test. However, when more than 2 models are compared using <code><font style="color: rgb(128,128,128);">anova</font></code>, the F-statistic and p-value may not be what we would like. The reason for this is that the F-statistic compares the mean 𝑆𝑆<sub>𝐸𝑋</sub> to the 𝑀𝑆<sub>𝐸𝑅𝑅</sub> for the largest model considered in sequential order
> ```
> anova(fit1, fit3, fit2)
> Analysis of Variance Table
>
> Model 1: sale ~ bedrooms + neighborhood
> Model 2: sale ~ bedrooms + neighborhood + half
> Model 3: sale ~ bedrooms + neighborhood + full + half
>   Res.Df   RSS  Df  Sum of Sq        F    Pr(>F)
> 1  26    58164   
> 2  25    42194   1    15970.1  10.6132  0.003338 **
> 3  24    36114   1     6080.1   4.0406  0.055785 .
> ---
> Signif. codes: 0'***' 0.001'**' 0.01'*' 0.05'.' 0.1' ' 1
> ```
> ```
> anova(fit1, fit2)
> Analysis of Variance Table
>
> Model 1: sale ~ bedrooms + neighborhood
> Model 2: sale ~ bedrooms + neighborhood + full + half
>   Res.Df    RSS  Df  Sum of Sq       F    Pr(>F)
> 1     26  58164
> 2     24  36114   2      22050  7.3269  0.003283 **
> ---
> Signif. codes: 0'***' 0.001'**' 0.01'*' 0.05'.' 0.1' ' 1
> ```
> ```
> anova(fit3, fit2)
> Analysis of Variance Table
>
> Model 1: sale ~ bedrooms + neighborhood + half
> Model 2: sale ~ bedrooms + neighborhood + full + half
>   Res.Df    RSS  Df  Sum of Sq       F  Pr(>F)
> 1     25  42194
> 2     24  36114   1     6080.1  4.0406  0.05579 .
> ---
> Signif. codes: 0'***' 0.001'**' 0.01'*' 0.05'.' 0.1' ' 1
> ```
>
> residual plot
> ```
> plot(fitted(fit3), resid(fit3))
> abline(h=0)	
> ```
>
> ![[LR - Comparing 2 Models (Extra Sum of Squares & Partial F-Test Statistic)/house-residual-plot.png|301]]
>
> QQ plot
> ```
> qqnorm(resid(fit3))
> qqline(resid(fit3))
> ```
>
> ![[LR - Comparing 2 Models (Extra Sum of Squares & Partial F-Test Statistic)/house-qq-plot.png|301]]
>
> take <code><font style="color: rgb(128,128,128);">sqrt(sale)</font></code> rather than <code><font style="color: rgb(128,128,128);">sale</font></code> as response
> ```
> fit4 <- update(fit3, sqrt(sale) ~ .)
> ```
>
> new QQ plot
> ```
> qqnorm(resid(fit4))
> qqline(resid(fit4))
> ```
>
> ![[LR - Comparing 2 Models (Extra Sum of Squares & Partial F-Test Statistic)/house-new-qq-plot.png|301]]
