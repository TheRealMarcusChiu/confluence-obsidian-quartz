---
title: "Adjusted R²／R-Square (Adjusted Coefficient of Determination)"
created: 2021-09-13T05:28:41.980-05:00
modified: 2021-09-13T05:28:41.980-05:00
parent: "[[Bivariate／Multivariate Analysis Descriptive Statistics]]"
children: []
---
<strong>Adjusted R-Square - Adjusted Coefficient of Determination</strong>
- as we add new predictor 𝑋<sub>𝑖</sub> to our model, it either explains additional portions of 𝑆𝑆<sub>𝑇𝑂𝑇</sub> or it doesn't. Therefore, regular [[R² - R-Squared - Coefficient of Determination - Coefficient of Multiple Determination - Multiple R-Square|𝑅2]]<sup></sup>can only stay the same or go up when we add 𝑋<sub>𝑖</sub>. Thus we expect [[R² - R-Squared - Coefficient of Determination - Coefficient of Multiple Determination - Multiple R-Square|𝑅2]]<sup></sup>to increase going from [[Univariate／Single-Variable／Simple Linear Regression Models|univariate regression]] to [[Multivariate／Multiple Linear Regression Models|multivariate regression]]
- <strong>Adjusted 𝑅<sup>2</sup></strong> is a modification of [[R² - R-Squared - Coefficient of Determination - Coefficient of Multiple Determination - Multiple R-Square|𝑅2]]<sup></sup>that penalizes the addition of a useless predictor variable 𝑋<sub>𝑖</sub>
- Adjusted 𝑅<sup>2</sup>ranges between \[0,1\]

original 𝑅<sup>2</sup> formula:
- 𝑅<sup>2</sup> = 𝑆𝑆<sub>𝑅𝐸𝐺</sub>/ 𝑆𝑆<sub>𝑇𝑂𝑇</sub><sub></sub>
- 𝑅<sup>2</sup> = (𝑆𝑆<sub>𝑇𝑂𝑇</sub>- 𝑆𝑆<sub>𝐸𝑅𝑅</sub>) / 𝑆𝑆<sub>𝑇𝑂𝑇</sub>
- 𝑅<sup>2</sup> = 1<sub></sub>- (𝑆𝑆<sub>𝐸𝑅𝑅</sub> / 𝑆𝑆<sub>𝑇𝑂𝑇</sub>)

adjusted 𝑅<sup>2</sup> formula:
- 𝑅<sup>2</sup><sub>𝑎𝑑𝑗</sub> = 1<sub></sub>- \[(𝑆𝑆<sub>𝐸𝑅𝑅</sub>/𝑑𝑓<sub>𝐸𝑅𝑅</sub>) / (𝑆𝑆<sub>𝑇𝑂𝑇</sub>/𝑑𝑓<sub>𝑇𝑂𝑇</sub>)\]
- 𝑅<sup>2</sup><sub>𝑎𝑑𝑗</sub> = 1<sub></sub>- \[(𝑆𝑆<sub>𝐸𝑅𝑅</sub>/(𝑛 - 𝑘 - 1)) / (𝑆𝑆<sub>𝑇𝑂𝑇</sub>/(𝑛 - 1))\]
- 𝑅<sup>2</sup><sub>𝑎𝑑𝑗</sub> = 1<sub></sub>- \[(𝑆𝑆<sub>𝐸𝑅𝑅</sub> / 𝑆𝑆<sub>𝑇𝑂𝑇</sub>) · ((𝑛 - 1) / (𝑛 - 𝑘 - 1))\]
- 𝑅<sup>2</sup><sub>𝑎𝑑𝑗</sub> = 1<sub></sub>- \[(𝑆𝑆<sub>𝐸𝑅𝑅</sub> / 𝑆𝑆<sub>𝑇𝑂𝑇</sub>) · (𝑑𝑓<sub>𝑇𝑂𝑇</sub> / 𝑑𝑓<sub>𝐸𝑅𝑅</sub>)\]

where:
- 𝑆𝑆<sub>𝐸𝑅𝑅</sub>= [[Method of Least Mean Squared／Squares Error／Estimation／Estimator (LMS／LSE／MMSE) - Sum of Square Errors／Residuals - Regression Variance／Standard-Deviation／Error of Regression／Residuals／Estimate - Root Mean Square Deviation／Error (RMSD／E - MSE)|Sum of Square Error]]
- 𝑆𝑆<sub>𝐸𝑅𝑅</sub>/𝑑𝑓<sub>𝐸𝑅𝑅</sub>= [[Method of Least Mean Squared／Squares Error／Estimation／Estimator (LMS／LSE／MMSE) - Sum of Square Errors／Residuals - Regression Variance／Standard-Deviation／Error of Regression／Residuals／Estimate - Root Mean Square Deviation／Error (RMSD／E - MSE)|Mean Square Error (MSE) = Regression Variance]]

imagine adding a non-significant predictor variable 𝑋<sub>𝑖</sub>. The number of estimated slopes 𝑘 increments by 1. However, if this variable is not able to explain any variation of the response 𝑌 (𝑖.𝑒. 𝑆𝑆<sub>𝑇𝑂𝑇</sub>) then the sum of squares: 𝑆𝑆<sub>𝐸𝑅𝑅</sub> and 𝑆𝑆<sub>𝑅𝐸𝐺</sub> will remain the same. Then (𝑆𝑆<sub>𝐸𝑅𝑅</sub>/𝑑𝑓<sub>𝐸𝑅𝑅</sub>) will increase and 𝑅<sup>2</sup><sub>𝑎𝑑𝑗</sub>will decrease
