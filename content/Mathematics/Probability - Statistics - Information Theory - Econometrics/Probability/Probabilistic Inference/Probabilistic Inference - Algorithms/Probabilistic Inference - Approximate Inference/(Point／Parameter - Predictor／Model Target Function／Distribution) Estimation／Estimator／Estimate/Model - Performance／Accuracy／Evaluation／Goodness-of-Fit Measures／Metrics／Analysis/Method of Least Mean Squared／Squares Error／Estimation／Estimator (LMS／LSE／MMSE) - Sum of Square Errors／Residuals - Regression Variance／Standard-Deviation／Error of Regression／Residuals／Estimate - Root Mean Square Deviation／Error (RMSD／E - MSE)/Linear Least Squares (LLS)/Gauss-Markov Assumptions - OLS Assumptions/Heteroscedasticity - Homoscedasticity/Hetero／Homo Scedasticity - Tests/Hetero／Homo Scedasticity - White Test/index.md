---
title: "Hetero／Homo Scedasticity - White Test"
created: 2021-09-13T05:27:46.358-05:00
modified: 2021-09-13T05:27:46.358-05:00
parent: "[[Hetero／Homo Scedasticity - Tests]]"
children: []
---
###### White Test
- a test for [[Heteroscedasticity - Homoscedasticity|heteroscedasticity/homoscedasticity]]
- more general test than [[Hetero／Homo Scedasticity - Goldfeld-Quandt Test|Goldfeld-Quandt Test]] & [[Hetero／Homo Scedasticity - Breusch Pagan Test|Breusch Pagan Test]]

### White Test - Process
- given a [[Ordinary Least Squares (OLS) Regression|linear regression model]]: 𝑦̂ = 𝜃<sub>0</sub>+ 𝜃<sub>1</sub>𝑥<sub>1</sub> + ... + 𝜃<sub>𝑘</sub>𝑥<sub>𝑘</sub>
- we are testing whether 𝑉𝑎𝑟(𝑒𝑟𝑟𝑜𝑟|𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) <font style="color: rgb(128,128,128);">(</font><font style="color: rgb(128,128,128);">where </font>[[Method of Least Mean Squared／Squares Error／Estimation／Estimator (LMS／LSE／MMSE) - Sum of Square Errors／Residuals - Regression Variance／Standard-Deviation／Error of Regression／Residuals／Estimate - Root Mean Square Deviation／Error (RMSD／E - MSE)|𝑒𝑟𝑟𝑜𝑟 is the distance between 𝑦̂ and 𝑦]]<font style="color: rgb(128,128,128);">)</font> equals either:
	- a constant 𝛿<sub>0</sub><font style="color: rgb(128,128,128);">which makes the model homoscedastic</font>
	- a linear function 𝛿<sub>0</sub> + 𝛿<sub>1</sub>·𝑦̂ + 𝛿<sub>2</sub>·𝑦̂<sup>2</sup> + ... + 𝛿<sub>𝑑</sub>·𝑦̂<sup>𝑑</sup><sub></sub><font style="color: rgb(128,128,128);">which makes the model heteroscedastic</font>
- do a F-Test on the null-hypothesis that 𝛿<sub>1</sub>= ... = 𝛿<sub>𝑑</sub> = 0, such that:
	- 𝑉𝑎𝑟(𝑒𝑟𝑟𝑜𝑟|𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) = 𝛿<sub>0</sub> + 0·𝑦̂ + 0·𝑦̂<sup>2</sup> + ... + 0·𝑦̂<sup>𝑑</sup>
- if failed to reject null-hypothesis, then conclude the given model is homoscedastic
- if null-hypothesis is rejected, then conclude the given model is heteroscedastic

### Resources

![](https://www.youtube.com/watch?v=M5xqpKzhyAM&list=PLwJRxp3blEvZyQBTTOMFRP_TDaSdly3gU&index=117&frags=wn&ab_channel=BenLambert)
