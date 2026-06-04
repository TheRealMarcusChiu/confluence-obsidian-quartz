---
title: "R² - R-Squared - Coefficient of Determination - Coefficient of Multiple Determination - Multiple R-Square"
created: 2021-09-13T05:28:44.973-05:00
modified: 2026-05-21T03:11:59.507-05:00
parent: "[[Bivariate／Multivariate Analysis Descriptive Statistics]]"
children: []
---
````excerpt
<strong>[[R² - R-Squared - Coefficient of Determination - Coefficient of Multiple Determination - Multiple R-Square|R-Square - Coefficient of Determination - Coefficient of Multiple Determination - Multiple R-Square]]</strong>
- 𝑅<sup>2</sup>is very similar to [[Pearson's Correlation Coefficient (R)]]
- 𝑅<sup>2</sup>[[Model - Performance／Accuracy／Evaluation／Goodness-of-Fit Measures／Metrics／Analysis|measures]] the proportion of the <em>total variation</em> (<font style="color: rgb(51,102,255);">𝑆𝑆<sub>𝑇𝑂𝑇</sub></font>) explained by [[Ordinary Least Squares (OLS) Regression|regression model]] (<font style="color: rgb(0,128,0);">𝑆𝑆<sub>𝑅𝐸𝐺</sub></font>) In other words, how close the data fits the regression model
- 𝑅<sup>2</sup>ranges between the [[Real Intervals (Empty／Degenerate／Proper／Bounded／Finite／Half-Bounded／Unbounded／Left／Right／Open／Closed Intervals)|interval]] \[0,1\]
- in univariate regression, 𝑅<sup>2</sup>also equals the [[Correlation|correlation coefficient]] SQUARED
- as new regressors are added to regression model, additional portions of the <font style="color: rgb(128,128,0);">total variation 𝑆𝑆</font><sub><font style="color: rgb(128,128,0);">𝑇𝑂𝑇</font></sub>are explained or it doesn't. Therefore, 𝑅<sup>2</sup>either goes up or remains the same and<sup></sup>NEVER goes down as we add more regressors. Thus, we expect 𝑅<sup>2</sup>to increase going from [[Univariate／Single-Variable／Simple Linear Regression Models|univariate regression]] to [[Multivariate／Multiple Linear Regression Models|multivariate regression]]
- for penalizing the addition of USELESS regressors see: [[Adjusted R²／R-Square (Adjusted Coefficient of Determination)|Adjusted R-Square]]

formula:
- 𝑅<sup>2</sup> = <font style="color: rgb(0,128,0);">(</font><font style="color: rgb(51,102,255);">variance-about-the-mean</font><font style="color: rgb(0,128,0);"> - [[Method of Least Mean Squared／Squares Error／Estimation／Estimator (LMS／LSE／MMSE) - Sum of Square Errors／Residuals - Regression Variance／Standard-Deviation／Error of Regression／Residuals／Estimate - Root Mean Square Deviation／Error (RMSD／E - MSE)|Mean Square Error (MSE)]]</font><font style="color: rgb(0,128,0);">)</font> / <font style="color: rgb(51,102,255);">variance-about-the-mean</font>
- 𝑅<sup>2</sup> = <font style="color: rgb(0,128,0);">(</font><font style="color: rgb(51,102,255);">variance-about-the-mean</font><font style="color: rgb(0,128,0);"> - </font><font style="color: rgb(128,0,0);">variance-about-the-regression-line</font><font style="color: rgb(0,128,0);">)</font> / <font style="color: rgb(51,102,255);">variance-about-the-mean</font>
- 𝑅<sup>2</sup> = <font style="color: rgb(0,128,0);">(</font><font style="color: rgb(51,102,255);">variance-about-the-mean</font><font style="color: rgb(0,128,0);"> - </font><font style="color: rgb(128,0,0);">variance-of-errors-not-explained-by-model</font><font style="color: rgb(0,128,0);">)</font> / <font style="color: rgb(51,102,255);">variance-about-the-mean</font>
- 𝑅<sup>2</sup> = <font style="color: rgb(0,128,0);">variance-explained-by-model</font> / <font style="color: rgb(51,102,255);">variance-about-the-mean</font>
- 𝑅<sup>2</sup> = <font style="color: rgb(0,128,0);">𝑆𝑆</font><sub><font style="color: rgb(0,128,0);">𝑅𝐸𝐺</font></sub>/ <font style="color: rgb(51,102,255);">𝑆𝑆<sub>𝑇𝑂𝑇</sub></font>

visual of <font style="color: rgb(51,102,255);">variance-about-the-mean</font> vs <font style="color: rgb(128,0,0);">variance-about-the-regression-line</font>

> [!indent]
> ![[R² - R-Squared - Coefficient of Determination - Coefficient of Multiple Determination - Multiple R-Square/r-squared-regression-line-errors.png|301]]

###### R<sup>2</sup>- Formal Definition
- in <strong>[[Univariate／Single-Variable／Simple Linear Regression Models|Univariate/Single-Variable/Simple Linear Regression Models]]</strong> 𝑅<sup>2</sup>is known as <strong>Coefficient of Determination</strong>:
	- 𝑅<sup>2</sup>= \[<font style="color: rgb(51,102,255);">𝑉𝑎𝑟(mean)</font> - <font style="color: rgb(128,0,0);">𝑉𝑎𝑟(model)</font>\] / <font style="color: rgb(51,102,255);">𝑉𝑎𝑟(mean)</font>
	- 𝑅<sup>2</sup>= [[Correlation|𝐶𝑜𝑟𝑟𝑒𝑙𝑎𝑡𝑖𝑜𝑛]](𝑋,𝑌)<sup>2</sup>
- in <strong>[[Multivariate／Multiple Linear Regression Models|Multivariate/Multiple Linear Regression Models]]</strong> 𝑅<sup>2</sup> is known as <strong>Coefficient of Multiple Determination</strong> or <strong>Multiple R-Squared</strong>:
	- 𝑅<sup>2</sup>= \[<font style="color: rgb(51,102,255);">𝑉𝑎𝑟(mean)</font> - <font style="color: rgb(128,0,0);">𝑉𝑎𝑟(model)</font>\] / <font style="color: rgb(51,102,255);">𝑉𝑎𝑟(mean)<font style="color: rgb(128,128,128);"> \# </font></font><font style="color: rgb(128,128,128);">where</font> <font style="color: rgb(0,128,0);">variance-explained-by-model</font> = \[<font style="color: rgb(51,102,255);">𝑉𝑎𝑟(mean)</font> - <font style="color: rgb(128,0,0);">𝑉𝑎𝑟(model)</font>\]

###### R<sup>2</sup>- Properties
- 𝑅<sup>2</sup>ranges between \[0,1\]. This means the <font style="color: rgb(128,0,0);">variation of a model</font> is always less than or equal to <font style="color: rgb(51,102,255);">variation of mean</font>
- high 𝑅<sup>2</sup> (and hence |𝑟|) → points are tightly clustered around the regression model → predicted 𝑦̂'s are close to observed 𝑦's → [[Method of Least Mean Squared／Squares Error／Estimation／Estimator (LMS／LSE／MMSE) - Sum of Square Errors／Residuals - Regression Variance／Standard-Deviation／Error of Regression／Residuals／Estimate - Root Mean Square Deviation／Error (RMSD／E - MSE)|residuals/errors]] are small → fit is good

###### R<sup>2</sup> - Example
![[R² - R-Squared - Coefficient of Determination - Coefficient of Multiple Determination - Multiple R-Square/r-squared-visual-example.png|400]]
````
^excerpt

# Resources

![](https://www.youtube.com/watch?v=2AQKmw14mHM)
