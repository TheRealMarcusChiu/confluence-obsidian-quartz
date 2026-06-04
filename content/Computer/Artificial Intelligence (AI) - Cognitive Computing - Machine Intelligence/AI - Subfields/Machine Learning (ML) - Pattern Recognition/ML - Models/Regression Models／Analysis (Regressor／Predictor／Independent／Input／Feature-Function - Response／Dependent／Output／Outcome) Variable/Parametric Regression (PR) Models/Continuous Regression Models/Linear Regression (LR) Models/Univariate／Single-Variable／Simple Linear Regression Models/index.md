---
title: "Univariate／Single-Variable／Simple Linear Regression Models"
created: 2020-04-22T18:03:45.786-05:00
modified: 2024-01-18T18:09:41.486-06:00
parent: "[[Linear Regression (LR) Models]]"
children:
  - "[[Simple LR - Bayesian Model - Intercept Estimate and Slope Estimate - Expectation／Variance／Standard-Deviation Conditional on {𝑥₁, ..., 𝑥ₙ}]]"
  - "[[Simple LR - Intercept Estimate and Slope Estimate - Expectation／Variance／Standard-Deviation Conditional on {𝑥₁, ..., 𝑥ₙ}]]"
  - "[[Simple LR - Intercept Estimate and Slope Estimate - Testing]]"
---
<strong>Univariate Linear Regression</strong> model assumes that the conditional expectation is a linear function of a single variable 𝑥:
- 𝑦̂ = 𝑓(𝑥) = 𝐄\[𝑌|𝑋=𝑥\] = 𝜃<sub>0</sub>+ 𝜃<sub>1</sub>𝑥

where:
- 𝜃<sub>0</sub> = 𝑓(0) <font style="color: rgb(128,128,128);">\# 𝑦 intercept</font>
- 𝜃<sub>1</sub> = 𝛿𝑦/𝛿𝑥 <font style="color: rgb(128,128,128);">\# slope along 𝑥 axis</font>

# Estimating 𝜃<sub>0</sub> and 𝜃<sub>1</sub>([[Ordinary Least Squares (OLS) Regression|Ordinary Least Squares Method]])

> [!expand]- Click here to expand...
> given training/sample data 𝐷 = {(𝑥<sub>1</sub>,𝑦<sub>1</sub>), ..., (𝑥<sub>𝑛</sub>,𝑦<sub>𝑛</sub>)} let us estimate the (intercept 𝜃<sub>0</sub>) and (slope 𝜃<sub>1</sub>) by the [[Method of Least Mean Squared／Squares Error／Estimation／Estimator (LMS／LSE／MMSE) - Sum of Square Errors／Residuals - Regression Variance／Standard-Deviation／Error of Regression／Residuals／Estimate - Root Mean Square Deviation／Error (RMSD／E - MSE)|method of least squares]]:
>
> The Sum of Square Error (𝑆𝑆<sub>𝐸𝑅𝑅</sub>) of 𝑓(𝑥) given 𝐷 is defined below:
> - 𝑆𝑆<sub>𝐸𝑅𝑅</sub> = 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑦<sub>𝑖</sub> - 𝑦̂<sub>𝑖</sub>\]<sup>2</sup>
> - 𝑆𝑆<sub>𝐸𝑅𝑅</sub> = 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑦<sub>𝑖</sub> - 𝑓(𝑥<sub>𝑖</sub>)\]<sup>2</sup>
> - 𝑆𝑆<sub>𝐸𝑅𝑅</sub> = 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑦<sub>𝑖</sub> - 𝜃<sub>0</sub>- 𝜃<sub>1</sub>𝑥<sub>𝑖</sub>\]<sup>2</sup>
>
> We want to minimize 𝑠𝑠𝑒 wrt 𝜃<sub>0</sub>and 𝜃<sub>1</sub>. We can do it by taking partial derivatives of 𝑠𝑠𝑒, equating them to 0, then solving for 𝜃<sub>0</sub> and 𝜃<sub>1</sub>.
>
> Therefore, the estimate of 𝜃<sub>0</sub> and 𝜃<sub>1</sub> is shown below:
> - <font style="color: rgb(128,0,0);"><font style="color: rgb(51,51,51);">estimate of 𝜃<sub>0</sub>=</font> 𝜃ˆ<sub>0</sub></font> = <font style="color: rgb(255,102,0);">𝑦̅ - 𝜃ˆ<sub>1</sub>𝑥̅</font>
> - <font style="color: rgb(128,0,0);"><font style="color: rgb(51,51,51);">estimate of 𝜃<sub>1</sub>=</font> 𝜃ˆ</font><sub><font style="color: rgb(128,0,0);">1</font></sub>= <font style="color: rgb(255,102,0);">𝑆<sub>𝑥𝑦</sub>/ 𝑆<sub>𝑥𝑥</sub></font>
>
> where:
> - <font style="color: rgb(255,102,0);"><font style="color: rgb(255,102,0);">𝑦̅ <font style="color: rgb(51,51,51);">- mean of all 𝑦's</font></font></font>
> - <font style="color: rgb(255,102,0);"><font style="color: rgb(255,102,0);">𝑥̅</font> <font style="color: rgb(51,51,51);">- mean of all 𝑥's</font></font>
> - <font style="color: rgb(255,102,0);">𝑆<sub>𝑥𝑦</sub></font> = 𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑦<sub>𝑖</sub> - 𝑦̅)(𝑥<sub>𝑖</sub> - 𝑥̅)\]
> - <font style="color: rgb(255,102,0);">𝑆<sub>𝑥𝑥</sub></font> = 𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑥<sub>𝑖</sub>- 𝑥̅)(𝑥<sub>𝑖</sub> - 𝑥̅)\]
>
> computation of the estimates
>
> > [!expand]- Click here to expand...
> > the partial derivatives are:
> > - 𝛿𝑠𝑠𝑒/𝛿𝜃<sub>0</sub> = -2 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑦<sub>𝑖</sub> - 𝜃<sub>0</sub>- 𝜃<sub>1</sub>𝑥<sub>𝑖</sub>\]
> > - 𝛿𝑠𝑠𝑒/𝛿𝜃<sub>1</sub> = -2 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑦<sub>𝑖</sub> - 𝜃<sub>0</sub>- 𝜃<sub>1</sub>𝑥<sub>𝑖</sub>\]𝑥<sub>𝑖</sub>
> >
> > equating them to 0, we obtain so-called normal equations:
> > - 0 = 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑦<sub>𝑖</sub> - 𝜃<sub>0</sub>- 𝜃<sub>1</sub>𝑥<sub>𝑖</sub>\]
> > - 0 = 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑦<sub>𝑖</sub> - 𝜃<sub>0</sub>- 𝜃<sub>1</sub>𝑥<sub>𝑖</sub>\]𝑥<sub>𝑖</sub>
> >
> > for the first normal equation:
> > - 0<sub></sub>= 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑦<sub>𝑖</sub>\] - 𝜃<sub>0</sub>𝛴<sub>1≤𝑖≤𝑛</sub>\[1\] - 𝜃<sub>1</sub>𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑥<sub>𝑖</sub>\]
> > - 0<sub></sub>= 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑦<sub>𝑖</sub>\] - 𝜃<sub>0</sub>𝑛 - 𝜃<sub>1</sub>𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑥<sub>𝑖</sub>\]
> > - 𝜃<sub>0</sub>𝑛<sub></sub>= 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑦<sub>𝑖</sub>\] - 𝜃<sub>1</sub>𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑥<sub>𝑖</sub>\]
> > - 𝜃<sub>0</sub><sub></sub>= 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑦<sub>𝑖</sub>\]/𝑛 - 𝜃<sub>1</sub>𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑥<sub>𝑖</sub>\]/𝑛
> > - 𝜃<sub>0</sub><sub></sub>= 𝑦̅ - 𝜃<sub>1</sub>𝑥̅ <font style="color: rgb(128,128,128);">\# 𝑦̅ and 𝑥̅ definition of the [sample mean](http://confluence.marcuschiu.com/display/NOT/Sample+Mean)</font>
> >
> > substitute this into the second equation:
> > - 0 = 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑦<sub>𝑖</sub> - 𝜃<sub>0</sub>- 𝜃<sub>1</sub>𝑥<sub>𝑖</sub>\]𝑥<sub>𝑖</sub>
> > - 0 = 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑦<sub>𝑖</sub> - (𝑦̅ - 𝜃<sub>1</sub>𝑥̅)<sub></sub>- 𝜃<sub>1</sub>𝑥<sub>𝑖</sub>\]𝑥<sub>𝑖</sub>
> > - 0 = 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑦<sub>𝑖</sub> - 𝑦̅ + 𝜃<sub>1</sub>𝑥̅<sub></sub>- 𝜃<sub>1</sub>𝑥<sub>𝑖</sub>\]𝑥<sub>𝑖</sub>
> > - 0 = 𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑦<sub>𝑖</sub> - 𝑦̅) + 𝜃<sub>1</sub>(𝑥̅<sub></sub>- 𝑥<sub>𝑖</sub>)\]𝑥<sub>𝑖</sub>
> > - 0 = 𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑦<sub>𝑖</sub> - 𝑦̅) - (-𝜃<sub>1</sub>(𝑥̅<sub></sub>- 𝑥<sub>𝑖</sub>))\]𝑥<sub>𝑖</sub>
> > - 0 = 𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑦<sub>𝑖</sub> - 𝑦̅) - 𝜃<sub>1</sub>(𝑥<sub>𝑖</sub>- 𝑥̅)\]𝑥<sub>𝑖</sub>
> > - 0 = 𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑦<sub>𝑖</sub> - 𝑦̅)𝑥<sub>𝑖</sub>\] - 𝜃<sub>1</sub>𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑥<sub>𝑖</sub>- 𝑥̅)𝑥<sub>𝑖</sub>\]
> > 	- 𝑆<sub>𝑥𝑦</sub> = 𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑦<sub>𝑖</sub> - 𝑦̅)𝑥<sub>𝑖</sub>\]
> > 	- 𝑆<sub>𝑥𝑦</sub>= 𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑦<sub>𝑖</sub> - 𝑦̅)𝑥<sub>𝑖</sub>\] - 𝑥̅·0
> > 	- 𝑆<sub>𝑥𝑦</sub>= 𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑦<sub>𝑖</sub> - 𝑦̅)𝑥<sub>𝑖</sub>\] - 𝑥̅·𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑦<sub>𝑖</sub> - 𝑦̅)\] <font style="color: rgb(128,128,128);">\# because 𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑦<sub>𝑖</sub> - 𝑦̅)\] = 0</font>
> > 	- 𝑆<sub>𝑥𝑦</sub>= 𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑦<sub>𝑖</sub> - 𝑦̅)𝑥<sub>𝑖</sub>\] - 𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑦<sub>𝑖</sub> - 𝑦̅)𝑥̅\]
> > 	- 𝑆<sub>𝑥𝑦</sub> = 𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑦<sub>𝑖</sub> - 𝑦̅)(𝑥<sub>𝑖</sub> - 𝑥̅)\]
> > 	- and
> > 	- 𝑆<sub>𝑥𝑥</sub> = 𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑥<sub>𝑖</sub>- 𝑥̅)𝑥<sub>𝑖</sub>\]
> > 	- 𝑆<sub>𝑥𝑥</sub> = 𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑥<sub>𝑖</sub>- 𝑥̅)𝑥<sub>𝑖</sub>\] - 𝑥̅·0
> > 	- 𝑆<sub>𝑥𝑥</sub> = 𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑥<sub>𝑖</sub>- 𝑥̅)𝑥<sub>𝑖</sub>\] - 𝑥̅·𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑥<sub>𝑖</sub>- 𝑥̅)\] <font style="color: rgb(122,134,154);">\# because 𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑥<sub>𝑖</sub>- 𝑥̅)\] = 0</font>
> > 	- 𝑆<sub>𝑥𝑥</sub> = 𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑥<sub>𝑖</sub>- 𝑥̅)𝑥<sub>𝑖</sub>\] - 𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑥<sub>𝑖</sub>- 𝑥̅)𝑥̅\]
> > 	- 𝑆<sub>𝑥𝑥</sub> = 𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑥<sub>𝑖</sub>- 𝑥̅)(𝑥<sub>𝑖</sub> - 𝑥̅)\]
> > - 0 = 𝑆<sub>𝑥𝑦</sub> - 𝜃<sub>1</sub>𝑆<sub>𝑥𝑥</sub>
> > - 𝜃<sub>1</sub>= 𝑆<sub>𝑥𝑦</sub>/ 𝑆<sub>𝑥𝑥</sub>
# (Regression Slope 𝜃<sub>1</sub>) in relation to (Correlation Coefficient 𝑟<sub>𝑥𝑦</sub>)

> [!expand]- Click here to expand...
> - 𝜃<sub>1</sub>= 𝑟<sub>𝑥𝑦</sub>(𝑠<sub>𝑦</sub>/𝑠<sub>𝑥</sub>)
> - 𝜃<sub>1</sub>= 𝑠<sub>𝑥𝑦</sub><sup>2</sup>/𝑠<sub>𝑥</sub><sup>2</sup>
>
> [[Correlation|sample correlation]] is defined below:
> - 𝑟<sub>𝑥𝑦</sub> = 𝑠<sub>𝑥𝑦</sub><sup>2</sup><sub></sub>/ (𝑠<sub>𝑥</sub>𝑠<sub>𝑦</sub>)
>
> where:
> - 𝑠<sub>𝑥𝑦</sub><sup>2</sup> = <font style="color: rgb(128,0,0);">𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑥<sub>𝑖</sub> - 𝑥̅)(𝑦<sub>𝑖</sub> - 𝑦̅)\]</font> / <font style="color: rgb(0,128,0);">\[𝑛 - 1\] <font style="color: rgb(128,128,128);">\# </font>[[Covariation - Covariance|sample covariance]]</font>
> - 𝑠<sub>𝑥</sub>= 𝑟𝑜𝑜𝑡<strong>\[</strong><font style="color: rgb(128,0,0);">𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑥<sub>𝑖</sub> - 𝑥̅)<sup>2</sup>\]</font> / <font style="color: rgb(0,128,0);">\[𝑛 - 1\]</font><strong>\] </strong><font style="color: rgb(128,128,128);">\# </font>[[Sample Variance - Sample Standard Deviation - Adjusted Sample Variance - Adjusted Sample Standard Deviation|sample standard deviation]]
> - 𝑠<sub>𝑦</sub>= 𝑟𝑜𝑜𝑡<strong>\[</strong><font style="color: rgb(128,0,0);">𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑦<sub>𝑖</sub> - 𝑦̅)<sup>2</sup>\]</font> / <font style="color: rgb(0,128,0);">\[𝑛 - 1\]</font><strong>\] </strong><font style="color: rgb(128,128,128);">\# </font>[[Sample Variance - Sample Standard Deviation - Adjusted Sample Variance - Adjusted Sample Standard Deviation|sample standard deviation]]
>
> proof:
>
> > [!expand]- Click here to expand...
> > recall that 𝜃<sub>1</sub>= 𝑆<sub>𝑥𝑦</sub>/ 𝑆<sub>𝑥𝑥</sub>
> >
> > where:
> > - 𝑆<sub>𝑥𝑦</sub> = 𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑦<sub>𝑖</sub> - 𝑦̅)(𝑥<sub>𝑖</sub> - 𝑥̅)\]
> > - 𝑆<sub>𝑥𝑥</sub> = 𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑥<sub>𝑖</sub>- 𝑥̅)(𝑥<sub>𝑖</sub> - 𝑥̅)\]
> >
> > therefore:
> > - 𝜃<sub>1</sub>= 𝑆<sub>𝑥𝑦</sub>/𝑆<sub>𝑥𝑥</sub>
> > - 𝜃<sub>1</sub>= \[𝑆<sub>𝑥𝑦</sub>/(𝑛-1)\]<sub></sub>/ \[𝑆<sub>𝑥𝑥</sub>/(𝑛-1)\]
> > - 𝜃<sub>1</sub>= \[𝑠<sub>𝑥𝑦</sub><sup>2</sup><sub></sub>/ 𝑠<sub>𝑥</sub><sup>2</sup>\] <font style="color: rgb(128,128,128);">\# 𝑠</font><font style="color: rgb(128,128,128);"><sub>𝑥𝑦</sub><sup>2</sup></font><font style="color: rgb(128,128,128);"> =</font> [[Covariation - Covariance|sample covariance]]<font style="color: rgb(128,128,128);"> & 𝑠<sub>𝑥</sub><sup>2</sup></font><font style="color: rgb(128,128,128);"> =</font> [[Variance - Standard Deviation (Root Mean Square (RMS) Deviation)|sample variance]] <font style="color: rgb(128,128,128);">& 𝑠<sub>𝑥</sub>=</font> [[Variance - Standard Deviation (Root Mean Square (RMS) Deviation)|sample standard deviation]]
> > - 𝜃<sub>1</sub>= \[𝑠<sub>𝑥𝑦</sub><sup>2</sup><sub></sub>/ 𝑠<sub>𝑥</sub><sup>2</sup>\] \[𝑠<sub>𝑦</sub>/𝑠<sub>𝑦</sub>\] <font style="color: rgb(128,128,128);">\#</font> <font style="color: rgb(128,128,128);">𝑠</font><font style="color: rgb(128,128,128);"><sub>𝑦</sub></font><font style="color: rgb(128,128,128);">=</font> [[Variance - Standard Deviation (Root Mean Square (RMS) Deviation)|sample standard deviation]]
> > - 𝜃<sub>1</sub>= <font style="color: rgb(0,128,0);">\[𝑠<sub>𝑥𝑦</sub><sup>2</sup><sub></sub>/ 𝑠<sub>𝑥</sub></font><font style="color: rgb(0,128,0);">𝑠<sub>𝑦</sub>\]</font> \[𝑠<sub>𝑦</sub>/𝑠<sub>𝑥</sub>\]
> > - 𝜃<sub>1</sub>= <font style="color: rgb(0,128,0);">𝑟<sub>𝑥𝑦</sub></font> \[𝑠<sub>𝑦</sub>/𝑠<sub>𝑥</sub>\] <font style="color: rgb(128,128,128);">\# 𝑟<sub>𝑥𝑦</sub> = [[Pearson's Correlation Coefficient (R)|sample correlation coefficient]]</font>
> >
> > Both the [[Pearson's Correlation Coefficient (R)|correlation coefficient]] and regression slope is:
> > - positive for positively correlated 𝑋 and 𝑌
> > - negative for negatively correlated 𝑋 and 𝑌
> >
> > The difference is:
> > - [[Pearson's Correlation Coefficient (R)|correlation coefficient]] is dimensionless ranging from \[-1,1\]
> > - slope is measured in units of 𝑌 per unit of 𝑋
# (Regression Slope 𝜃<sub>1</sub>) in relation to (Covariance 𝑠<sub>𝑥𝑦</sub><sup>2</sup>)

> [!expand]- Click here to expand...
> - 𝜃<sub>1</sub>= 𝑠<sub>𝑥𝑦</sub><sup>2</sup>/𝑠<sub>𝑥</sub><sup>2</sup>
>
> where:
> - 𝑠<sub>𝑥𝑦</sub><sup>2</sup> = <font style="color: rgb(128,0,0);">𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑥<sub>𝑖</sub> - 𝑥̅)(𝑦<sub>𝑖</sub> - 𝑦̅)\]</font> / <font style="color: rgb(0,128,0);">\[𝑛 - 1\] <font style="color: rgb(128,128,128);">\# </font>[[Covariation - Covariance|sample covariance]]</font>
> - 𝑠<sub>𝑥</sub>= 𝑟𝑜𝑜𝑡<strong>\[</strong><font style="color: rgb(128,0,0);">𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑥<sub>𝑖</sub> - 𝑥̅)<sup>2</sup>\]</font> / <font style="color: rgb(0,128,0);">\[𝑛 - 1\]</font><strong>\] </strong><font style="color: rgb(128,128,128);">\# </font>[[Sample Variance - Sample Standard Deviation - Adjusted Sample Variance - Adjusted Sample Standard Deviation|sample standard deviation]]
>
> ###### Intuition
>
> ```merge-table
> {
>   "rows": [
>     [
>       "Given:\n- 𝑋 is [[z-distribution (Standard Normal Distribution) ｜ z-scores ｜ z-values ｜ z-table ｜ z-statistic ｜ Standardization - Standardized Values - Standard Scores - Normal Deviates|standard normal]], thus:\n\t- 𝐄\\[𝑋\\] = 0\n\t- 𝑉𝑎𝑟(𝑋) = 1\n- 𝑦 = 𝜃<sub>0</sub>+ 𝜃<sub>1</sub>𝑥 + 𝜎𝜀\n\t- 𝐄\\[𝜀\\] = 0\n\nThen:\n- 𝐄\\[𝑌|𝑋\\] = 𝐄\\[𝜃<sub>0</sub>+ 𝜃<sub>1</sub>𝑋 + 𝜎𝜀|𝑋\\]\n- 𝐄\\[𝑌|𝑋\\] = 𝐄\\[𝜃<sub>0</sub>|𝑋\\] + 𝐄\\[𝜃<sub>1</sub>𝑋|𝑋\\] + 𝐄\\[𝜎𝜀|𝑋\\]\n- 𝐄\\[𝑌|𝑋\\] = 𝜃<sub>0</sub> + 𝜃<sub>1</sub>𝑋 + 0\n- 𝐄\\[𝑌|𝑋\\] = 𝜃<sub>0</sub>+ 𝜃<sub>1</sub>𝑋\n\nso\n- 𝐄\\[𝑌𝑋\\] = 𝐄\\[(𝜃<sub>0</sub><sub></sub>+ 𝜃<sub>1</sub>𝑋 + 𝜎𝜀)𝑋\\]\n- 𝐄\\[𝑌𝑋\\] = 𝐄\\[𝜃<sub>0</sub>𝑋<sub></sub>+ 𝜃<sub>1</sub>𝑋<sup>2</sup> + 𝜎𝜀𝑋\\]\n- 𝐄\\[𝑌𝑋\\] = 𝐄\\[𝜃<sub>0</sub>𝑋\\]<sub></sub>+ 𝐄\\[𝜃<sub>1</sub>𝑋<sup>2</sup>\\] + 𝐄\\[𝜎𝜀𝑋\\]\n- 𝐄\\[𝑌𝑋\\] = 𝜃<sub>0</sub>𝐄\\[𝑋\\]<sub></sub>+ 𝜃<sub>1</sub>𝐄\\[𝑋<sup>2</sup>\\] + 𝜎𝐄\\[𝜀𝑋\\]\n- 𝐄\\[𝑌𝑋\\] = 𝜃<sub>0</sub>0<sub></sub>+ 𝜃<sub>1</sub>𝐄\\[𝑋<sup>2</sup>\\] + 𝜎𝐄\\[𝜀𝑋\\]\n- 𝐄\\[𝑌𝑋\\] = 𝜃<sub>1</sub>𝐄\\[𝑋<sup>2</sup>\\] + 𝜎𝐄\\[𝜀𝑋\\]\n\t- 𝑉𝑎𝑟(𝑋) = 𝐄\\[𝑋<sup>2</sup>\\] - 𝐄\\[𝑋\\]<sup>2</sup>\n\t- 𝑉𝑎𝑟(𝑋) = 𝐄\\[𝑋<sup>2</sup>\\] + 0<sup>2</sup>\n\t- 𝑉𝑎𝑟(𝑋) = 𝐄\\[𝑋<sup>2</sup>\\]\n\t- 1 = 𝐄\\[𝑋<sup>2</sup>\\] <font style=\"color: rgb(122,134,154);\">\\# 𝑉𝑎𝑟(𝑋) = 1 as given above</font>\n- 𝐄\\[𝑌𝑋\\] = 𝜃<sub>1</sub>1 + 𝜎𝐄\\[𝜀𝑋\\]\n- 𝐄\\[𝑌𝑋\\] = 𝜃<sub>1</sub> + 𝜎𝐄\\[𝜀𝑋\\]\n\t- 𝐶𝑜𝑣(𝜀,𝑋) = 𝐄\\[𝜀𝑋\\] - 𝐄\\[𝜀\\]𝐄\\[𝑋\\]\n\t- 𝐶𝑜𝑣(𝜀,𝑋) = 𝐄\\[𝜀𝑋\\] + 0·0\n\t- 𝐶𝑜𝑣(𝜀,𝑋) = 𝐄\\[𝜀𝑋\\]\n\t- 0 = 𝐄\\[𝜀𝑋\\] <font style=\"color: rgb(122,134,154);\">\\# 𝐶𝑜𝑣(𝜀,𝑋) = 0 based on assumption of the linear model</font>\n- 𝐄\\[𝑌𝑋\\] = 𝜃<sub>1</sub> + 𝜎·0\n- 𝐄\\[𝑌𝑋\\] = 𝜃<sub>1</sub>\n\nHence:\n- 𝐶𝑜𝑣(𝑌,𝑋) = 𝜃<sub>1</sub>\n\nWe know 𝜃<sub>1</sub> is key to linear dependence, covariance formalizes it. In general:\n- 𝐶𝑜𝑣(𝑌,𝑋) = 𝐄\\[𝑌𝑋\\] - 𝐄\\[𝑌\\]𝐄\\[𝑋\\]"
>     ],
>     [
>       "Even if:\n- 𝑋 is NOT [[z-distribution (Standard Normal Distribution) ｜ z-scores ｜ z-values ｜ z-table ｜ z-statistic ｜ Standardization - Standardized Values - Standard Scores - Normal Deviates|standard normal]], like:\n\t- 𝐄\\[𝑋\\] = 𝜇\n\t- 𝑉𝑎𝑟(𝑋) = 𝜎<sup>2</sup>\n- 𝑦 = 𝜃<sub>0</sub>+ 𝜃<sub>1</sub>𝑥 + 𝜎𝜀\n\nThen:\n- 𝐄\\[𝑌|𝑋\\] = 𝜃<sub>0</sub>+ 𝜃<sub>1</sub>𝑋\n\nso\n- 𝐄\\[𝑌𝑋\\] = 𝐄\\[𝜃<sub>0</sub>𝑋<sub></sub>+ 𝜃<sub>1</sub>𝑋<sup>2</sup>\\]\n- 𝐄\\[𝑌𝑋\\] = 𝐄\\[𝜃<sub>0</sub>𝑋\\]<sub></sub>+ 𝐄\\[𝜃<sub>1</sub>𝑋<sup>2</sup>\\]\n- 𝐄\\[𝑌𝑋\\] = 𝜃<sub>0</sub>𝜇<sub></sub>+ 𝜃<sub>1</sub>𝐄\\[𝑋<sup>2</sup>\\]\n- 𝐄\\[𝑌𝑋\\] = 𝜃<sub>0</sub>𝜇<sub></sub>+ 𝜃<sub>1</sub>𝐄\\[𝑋<sup>2</sup>\\]\n\t- 𝑉𝑎𝑟(𝑌,𝑋) = 𝜎<sup>2</sup> = 𝐄\\[𝑋<sup>2</sup>\\] - 𝐄\\[𝑋\\]<sup>2</sup>\n\t- 𝑉𝑎𝑟(𝑌,𝑋) = 𝜎<sup>2</sup> = 𝐄\\[𝑋<sup>2</sup>\\] - 𝜇<sup>2</sup>\n\t- 𝜎<sup>2</sup> + 𝜇<sup>2</sup>= 𝐄\\[𝑋<sup>2</sup>\\]\n- 𝐄\\[𝑌𝑋\\] = 𝜃<sub>0</sub>𝜇<sub></sub>+ 𝜃<sub>1</sub>(𝜎<sup>2</sup> + 𝜇<sup>2</sup>)\n\t- 𝐶𝑜𝑣(𝑌,𝑋) = 𝐄\\[𝑌𝑋\\] - 𝐄\\[𝑌\\]𝐄\\[𝑋\\]\n\t- 𝐶𝑜𝑣(𝑌,𝑋) = 𝜃<sub>0</sub>𝜇<sub></sub>+ 𝜃<sub>1</sub>(𝜎<sup>2</sup> + 𝜇<sup>2</sup>) - 𝐄\\[𝑌\\]𝐄\\[𝑋\\]\n\t- 𝐶𝑜𝑣(𝑌,𝑋) = 𝜃<sub>0</sub>𝜇<sub></sub>+ 𝜃<sub>1</sub>(𝜎<sup>2</sup> + 𝜇<sup>2</sup>) - 𝐄\\[𝜃<sub>0</sub>+ 𝜃<sub>1</sub>𝑋\\]𝐄\\[𝑋\\]\n\t- 𝐶𝑜𝑣(𝑌,𝑋) = 𝜃<sub>0</sub>𝜇<sub></sub>+ 𝜃<sub>1</sub>(𝜎<sup>2</sup> + 𝜇<sup>2</sup>) - 𝐄\\[𝜃<sub>0</sub>+ 𝜃<sub>1</sub>𝑋\\]𝜇\n\t- 𝐶𝑜𝑣(𝑌,𝑋) = 𝜃<sub>0</sub>𝜇<sub></sub>+ 𝜃<sub>1</sub>(𝜎<sup>2</sup> + 𝜇<sup>2</sup>) - (𝜃<sub>0</sub>+ 𝜃<sub>1</sub>𝜇)𝜇\n\t- 𝐶𝑜𝑣(𝑌,𝑋) = 𝜃<sub>0</sub>𝜇<sub></sub>+ 𝜃<sub>1</sub>(𝜎<sup>2</sup> + 𝜇<sup>2</sup>) - (𝜃<sub>0</sub>𝜇 + 𝜃<sub>1</sub>𝜇<sup>2</sup>)\n\t- 𝐶𝑜𝑣(𝑌,𝑋) = 𝜃<sub>0</sub>𝜇<sub></sub>+ 𝜃<sub>1</sub>𝜎<sup>2</sup> + 𝜃<sub>1</sub>𝜇<sup>2</sup> - 𝜃<sub>0</sub>𝜇 - 𝜃<sub>1</sub>𝜇<sup>2</sup>\n\t- 𝐶𝑜𝑣(𝑌,𝑋) = 𝜃<sub>1</sub>𝜎<sup>2</sup>\n\nThen:\n- 𝐶𝑜𝑣(𝑌,𝑋) = 𝜃<sub>1</sub>𝜎<sup>2</sup>\n\nThus:\n- 𝜃<sub>1</sub> = 𝐶𝑜𝑣(𝑌,𝑋) / 𝜎<sup>2</sup>\n- 𝜃<sub>1</sub> = 𝐶𝑜𝑣(𝑌,𝑋) / 𝑉𝑎𝑟(𝑋)\n\nThe estimations:\n- 𝐶𝑜𝑣(𝑌,𝑋) = 𝑠<sub>𝑥𝑦</sub><sup>2</sup>\n- 𝑉𝑎𝑟(𝑋) = 𝑠<sub>𝑥</sub><sup>2</sup>\n\nThus:\n- 𝜃<sub>1</sub>= 𝑠<sub>𝑥𝑦</sub><sup>2</sup>/𝑠<sub>𝑥</sub><sup>2</sup>"
>     ]
>   ]
> }
> ```
# Analysis of Variance (ANOVA) - Prediction - Further Inference

sections:
- evaluate the goodness of fit of the chosen regression model to the observed data
- estimate the variance of response variable 𝑌<sub>𝑖</sub>given 𝑋<sub>𝑖</sub>: 𝑉𝑎𝑟(𝑌<sub>𝑖</sub>|𝑋<sub>𝑖</sub>) = 𝜎<sup>2</sup>with 𝜎̂<sup>2</sup>
- then use 𝜎̂<sup>2</sup> to test the significance of regression parameters: 𝜃<sub>0</sub>and 𝜃<sub>1</sub>
- construct [[Confidence Interval (CI)|confidence intervals]] and prediction intervals

###### Total Sum of Squares = Regression Sum of Squares + Error Sum of Squares

> [!expand]- Click here to expand...
> ###### total sum of squares
> - measures the total variation among observed responses (variation of 𝑦<sub>𝑖</sub> about their sample mean 𝑦̅)
> - does not change wrt regression model
>
> formula:
> - 𝑆𝑆<sub>𝑇𝑂𝑇</sub> = 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑦<sub>𝑖</sub> - 𝑦̅\]<sup>2</sup>
> - 𝑆𝑆<sub>𝑇𝑂𝑇</sub> = (𝑛 - 1)(𝑠<sub>𝑦</sub>)<sup>2</sup>
>
> 𝑆𝑆<sub>𝑇𝑂𝑇</sub> can be partitioned into 2 parts:
> - 𝑆𝑆<sub>𝑇𝑂𝑇</sub> = 𝑆𝑆<sub>𝑅𝐸𝐺</sub>+ 𝑆𝑆<sub>𝐸𝑅𝑅</sub>
>
> where:
> - <strong>𝑆𝑆<sub>𝑅𝐸𝐺</sub>regression sum of squares</strong> - measures the total variation explained by the regression model
> 	- 𝑆𝑆<sub>𝑅𝐸𝐺</sub> = 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑦̂<sub>𝑖</sub> - 𝑦̅\]<sup>2</sup>
> > [!expand]- is often computed as
> > - 𝑆𝑆<sub>𝑅𝐸𝐺</sub> = 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝜃<sub>0</sub>+ 𝜃<sub>1</sub>𝑥<sub>𝑖</sub> - 𝑦̅\]<sup>2</sup>
> > - 𝑆𝑆<sub>𝑅𝐸𝐺</sub> = 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑦̅ - 𝜃<sub>1</sub>𝑥̅ + 𝜃<sub>1</sub>𝑥<sub>𝑖</sub> - 𝑦̅\]<sup>2</sup><font style="color: rgb(128,128,128);">\# substitute 𝜃<sub>0</sub>= 𝑦̅ - 𝜃<sub>1</sub>𝑥̅</font>
> > - 𝑆𝑆<sub>𝑅𝐸𝐺</sub> = 𝜃<sub>1</sub>𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑥<sub>𝑖</sub> - 𝑥̅\]<sup>2</sup>
> > - 𝑆𝑆<sub>𝑅𝐸𝐺</sub> = (𝑛 - 1)𝜃<sub>1</sub>(𝑠<sub>𝑥</sub>)<sup>2</sup>
> > - 𝑆𝑆<sub>𝑅𝐸𝐺</sub> = 𝜃<sub>1</sub>·𝑆<sub>𝑥𝑥</sub>
> - <strong>𝑆𝑆<sub>𝐸𝑅𝑅</sub>error sum of squares</strong> - measures the total variation NOT explained by the regression model
> 	- 𝑆𝑆<sub>𝐸𝑅𝑅</sub> = 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑦<sub>𝑖</sub> - 𝑦̂<sub>𝑖</sub>\]<sup>2</sup>= 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑒<sub>𝑖</sub>\]<sup>2</sup>
###### R-Square (Coefficient of Determination)

> [!expand]- Click here to expand...
> ![[R² - R-Squared - Coefficient of Determination - Coefficient of Multiple Determination - Multiple R-Square#^excerpt]]
###### Standard Regression Assumptions

> [!expand]- Click here to expand...
> ![[LR - Standard Regression Assumptions#^excerpt]]
###### Degrees of Freedom

> [!expand]- Click here to expand...
> let us compute [[Degrees of Freedom (DoF - df)|degrees of freedom]] of all three sum of squares 𝑆𝑆:
>
> 𝑑𝑓<sub>𝑇𝑂𝑇</sub> = 𝑑𝑓<sub>𝑅𝐸𝐺</sub>+ 𝑑𝑓<sub>𝐸𝑅𝑅</sub>
> - 𝑆𝑆<sub>𝑇𝑂𝑇</sub> has 𝑑𝑓<sub>𝑇𝑂𝑇</sub> = (𝑛 - 1)
> > [!expand]- Click here to expand...
> > 𝑑𝑓<sub>𝑇𝑂𝑇</sub> = (𝑛 - 1) because it is computed directly from the sample variance (𝑠<sub>𝑦</sub>)<sup>2</sup>
> >
> > 𝑆𝑆<sub>𝑇𝑂𝑇</sub>= (𝑛 - 1)(𝑠<sub>𝑦</sub>)<sup>2</sup>
> - 𝑆𝑆<sub>𝑅𝐸𝐺</sub> has 𝑑𝑓<sub>𝑅𝐸𝐺</sub> = 1
> > [!expand]- Click here to expand...
> > 𝑑𝑓<sub>𝑅𝐸𝐺</sub> = 1 because the number of degrees is the dimensions of the corresponding space. regression line, which is just a straight line, has deminsion 1
> - 𝑆𝑆<sub>𝐸𝑅𝑅</sub>has 𝑑𝑓<sub>𝐸𝑅𝑅</sub> = (𝑛 - 2)
> > [!expand]- Click here to expand...
> > the error degrees of freedom also follow the formula below:
> > - 𝑑𝑓<sub>𝐸𝑅𝑅</sub>= (sample size) - (number of estimated location parameters)
> > - 𝑑𝑓<sub>𝐸𝑅𝑅</sub>= 𝑛 - 2
###### Estimating Population-Error/Regression Variance 𝜎<sup>2</sup>= 𝑉𝑎𝑟(𝑌|𝑋) With 𝜎̂<sup>2</sup> Mean Square Error (MSE)

> [!expand]- Click here to expand...
> see also: [Ben Lambert's Video Lecture](https://www.youtube.com/watch?v=H8tAmuk1lDc&list=PLwJRxp3blEvZyQBTTOMFRP_TDaSdly3gU&index=80)
>
> with the computed <em>degrees of freedom</em>, we can now estimate the [[Method of Least Mean Squared／Squares Error／Estimation／Estimator (LMS／LSE／MMSE) - Sum of Square Errors／Residuals - Regression Variance／Standard-Deviation／Error of Regression／Residuals／Estimate - Root Mean Square Deviation／Error (RMSD／E - MSE)|regression variance]] 𝑌 given 𝑋:
> - 𝜎̂<sup>2</sup>= estimated regression variance
> - 𝜎̂<sup>2</sup> = 𝐄\[(𝑦<sub>𝑖</sub> - 𝑦̂<sub>𝑖</sub>)<sup>2</sup>\]
> - 𝜎̂<sup>2</sup> = <font style="color: rgb(128,0,0);">𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑦<sub>𝑖</sub> - 𝑦̂<sub>𝑖</sub>\]<sup>2</sup></font>/ <font style="color: rgb(0,128,0);">(𝑛 - 2)</font>
> - 𝜎̂<sup>2</sup> = <font style="color: rgb(128,0,0);">𝑆𝑆</font><sub><font style="color: rgb(128,0,0);">𝐸𝑅𝑅</font></sub>/ <font style="color: rgb(0,128,0);">𝑑𝑓</font><font style="color: rgb(0,128,0);"><sub>𝐸𝑅𝑅</sub></font>
>
> 𝜎̂<sup>2</sup> estimates 𝜎<sup>2</sup>= 𝑉𝑎𝑟(𝑌|𝑋) unbiasedly
>
> <font style="color: rgb(128,128,128);">NOTE: the usual sample variance:</font>
> - <font style="color: rgb(128,128,128);">(𝑠<sub>𝑦</sub>)<sup>2</sup>= 𝑆𝑆<sub>𝑇𝑂𝑇</sub>/ (𝑛 - 1)</font>
> - <font style="color: rgb(128,128,128);">(𝑠<sub>𝑦</sub>)<sup>2</sup>= 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑦<sub>𝑖</sub> - 𝑦̅\]<sup>2</sup> / (𝑛 - 1)</font>
>
> <font style="color: rgb(128,128,128);">is biased because 𝑦̅ no longer estimates the expectation of 𝑌<sub>𝑖</sub></font>
###### ANOVA Table Summary
- <font style="color: rgb(51,102,255);">𝑆𝑆<sub>𝑇𝑂𝑇</sub></font> = (𝑛 - 1)𝑉𝑎𝑟(𝑦)
- <font style="color: rgb(0,128,0);">𝑆𝑆<sub>𝑅𝐸𝐺</sub></font> = 𝑟<sup>2</sup>(𝑛 - 1)𝑉𝑎𝑟(𝑦)
- <font style="color: rgb(128,0,0);">𝑆𝑆<sub>𝐸𝑅𝑅</sub></font> = (1 - 𝑟<sup>2</sup>)(𝑛 - 1)𝑉𝑎𝑟(𝑦)

![[LR - ANOVA Table#^excerpt]]
###### T-Test on Regression Slope (𝜃<sub>1</sub>)

> [!expand]- Click here to expand...
> having estimated the regression variance 𝜎<sup>2</sup> with 𝜎̂<sup>2</sup>, we can use it to create confidence intervals for the regression slope 𝜃<sub>1</sub> and use it for hypothesis testing
>
> according to <em>[[LR - Standard Regression Assumptions|standard regression assumptions]]</em> (defined above)
> - 𝑦<sub>𝑖</sub>'s are independent Normal random variables with:
> 	- mean 𝐄\[𝑌<sub>𝑖</sub>|𝑋=𝑥<sub>𝑖</sub>\] = 𝜃<sub>0</sub>+ 𝜃<sub>1</sub>𝑥<sub>𝑖</sub>
> 	- constant variance = 𝜎<sup>2</sup>
> - predictor 𝑥<sub>𝑖</sub>is non-random
>
> As a consequence, regression estimates 𝜃ˆ<sub>0</sub>and 𝜃ˆ<sub>1</sub> have Normal distribution
>
> let's compute the expectation & variance of 𝜃ˆ<sub>1</sub>:
> - 𝐄\[𝜃ˆ<sub>1</sub>\] = 𝜃<sub>1</sub>
> > [!expand]- Click here to expand...
> > see also: [Ben Lambert's Video Lecture](https://www.youtube.com/watch?v=n5vh2CozAlU&list=PLwJRxp3blEvZyQBTTOMFRP_TDaSdly3gU&index=76)
> >
> > the slope 𝜃<sub>1</sub> is estimated by:
> > - 𝜃ˆ<sub>1</sub><sub></sub>= 𝑆<sub>𝑥𝑦</sub>/ 𝑆<sub>𝑥𝑥</sub>
> > - 𝜃ˆ<sub>1</sub> = 𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑦<sub>𝑖</sub> - 𝑦̅)(𝑥<sub>𝑖</sub> - 𝑥̅)\] / 𝑆<sub>𝑥𝑥</sub>
> > - 𝜃ˆ<sub>1</sub> = 𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑦<sub>𝑖</sub>)(𝑥<sub>𝑖</sub> - 𝑥̅)\] / 𝑆<sub>𝑥𝑥</sub><font style="color: rgb(128,128,128);">\# because 𝑦̅𝛴<sub>1≤𝑖≤𝑛</sub>(𝑥<sub>𝑖</sub> - 𝑥̅) = 0</font>
> >
> > according to <em>[[LR - Standard Regression Assumptions|standard regression assumptions]]</em> (defined above):
> > - 𝑦<sub>𝑖</sub>are Normal Variables
> > - 𝑥<sub>𝑖</sub>are non-random
> > - 𝜃ˆ<sub>1</sub>is also Normal because it is a linear function of 𝑦<sub>𝑖</sub>
> >
> > therefore:
> > - 𝐄\[𝜃ˆ<sub>1</sub>\] = 𝐄\[𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑦<sub>𝑖</sub>)(𝑥<sub>𝑖</sub> - 𝑥̅)\] / 𝑆<sub>𝑥𝑥</sub>\]
> > - 𝐄\[𝜃ˆ<sub>1</sub>\] = 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝐄\[𝑦<sub>𝑖</sub>\](𝑥<sub>𝑖</sub> - 𝑥̅)\] / 𝑆<sub>𝑥𝑥</sub>
> > - 𝐄\[𝜃ˆ<sub>1</sub>\] = 𝛴<sub>1≤𝑖≤𝑛</sub>\[(<font style="color: rgb(128,0,0);">𝜃</font><sub><font style="color: rgb(128,0,0);">0</font></sub>+ 𝜃<sub>1</sub>𝑥<sub>𝑖</sub>)(𝑥<sub>𝑖</sub> - 𝑥̅)\] / 𝑆<sub>𝑥𝑥</sub>
> > - 𝐄\[𝜃ˆ<sub>1</sub>\] = 𝛴<sub>1≤𝑖≤𝑛</sub>\[(<font style="color: rgb(128,0,0);">𝑦̅ - 𝜃<sub>1</sub>𝑥̅</font><sub></sub>+ 𝜃<sub>1</sub>𝑥<sub>𝑖</sub>)(𝑥<sub>𝑖</sub> - 𝑥̅)\] / 𝑆<sub>𝑥𝑥</sub>
> > - 𝐄\[𝜃ˆ<sub>1</sub>\] = 𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑦̅)(𝑥<sub>𝑖</sub> - 𝑥̅)<sub></sub>+ (𝜃<sub>1</sub>𝑥<sub>𝑖</sub>- 𝜃<sub>1</sub>𝑥̅)(𝑥<sub>𝑖</sub> - 𝑥̅)\] / 𝑆<sub>𝑥𝑥</sub>
> > - 𝐄\[𝜃ˆ<sub>1</sub>\] = (𝑦̅)𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑥<sub>𝑖</sub> - 𝑥̅)\]<sub></sub>+ 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝜃<sub>1</sub>(𝑥<sub>𝑖</sub>- 𝑥̅)(𝑥<sub>𝑖</sub> - 𝑥̅)\] / 𝑆<sub>𝑥𝑥</sub>
> > - 𝐄\[𝜃ˆ<sub>1</sub>\] = 0<sub></sub>+ 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝜃<sub>1</sub>(𝑥<sub>𝑖</sub> - 𝑥̅)<sup>2</sup>\] / 𝑆<sub>𝑥𝑥</sub><font style="color: rgb(128,128,128);">\# 𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑥<sub>𝑖</sub> - 𝑥̅)\] = 0</font>
> > - 𝐄\[𝜃ˆ<sub>1</sub>\] = 𝜃<sub>1</sub>·𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑥<sub>𝑖</sub> - 𝑥̅)<sup>2</sup>\] / 𝑆<sub>𝑥𝑥</sub>
> > - 𝐄\[𝜃ˆ<sub>1</sub>\] = 𝜃<sub>1</sub>·1 <font style="color: rgb(128,128,128);">\# 𝑆<sub>𝑥𝑥</sub>= 𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑥<sub>𝑖</sub> - 𝑥̅)<sup>2</sup>\]</font>
> > - 𝐄\[𝜃ˆ<sub>1</sub>\] = 𝜃<sub>1</sub>
> >
> > thus 𝜃ˆ<sub>1</sub> is an unbiased estimator of 𝜃<sub>1</sub>
> - 𝑉𝑎𝑟(𝜃ˆ<sub>1</sub>|𝑥<sub>1</sub>) = 𝜎̂<sup>2</sup>/𝑆<sub>𝑥𝑥</sub>
> > [!expand]- computation
> > see also: [Ben Lambert's Video Lecture](https://www.youtube.com/watch?v=_3WiM5WmL3M&list=PLwJRxp3blEvZyQBTTOMFRP_TDaSdly3gU&index=78)
> >
> > the slope 𝜃<sub>1</sub> is estimated by:
> > - 𝜃ˆ<sub>1</sub><sub></sub>= 𝑆<sub>𝑥𝑦</sub>/ 𝑆<sub>𝑥𝑥</sub>
> > - 𝜃ˆ<sub>1</sub> = 𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑦<sub>𝑖</sub> - 𝑦̅)(𝑥<sub>𝑖</sub> - 𝑥̅)\] / 𝑆<sub>𝑥𝑥</sub>
> > - 𝜃ˆ<sub>1</sub> = 𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑦<sub>𝑖</sub>)(𝑥<sub>𝑖</sub> - 𝑥̅)\] / 𝑆<sub>𝑥𝑥</sub><font style="color: rgb(128,128,128);">\# because 𝑦̅𝛴<sub>1≤𝑖≤𝑛</sub>(𝑥<sub>𝑖</sub> - 𝑥̅) = 0</font>
> >
> > according to <em>[[LR - Standard Regression Assumptions|standard regression assumptions]]</em> (defined above):
> > - 𝑦<sub>𝑖</sub>are Normal Variables
> > - 𝑥<sub>𝑖</sub>are non-random
> > - 𝜃ˆ<sub>1</sub>is also Normal because it is a linear function of 𝑦<sub>𝑖</sub>
> >
> > therefore:
> > - 𝑉𝑎𝑟(𝜃ˆ<sub>1</sub>|𝑥<sub>1</sub>) = 𝑉𝑎𝑟<strong>\[</strong>𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑦<sub>𝑖</sub>)(𝑥<sub>𝑖</sub> - 𝑥̅)\] / 𝑆<sub>𝑥𝑥</sub><strong>\]</strong>
> > - 𝑉𝑎𝑟(𝜃ˆ<sub>1</sub>|𝑥<sub>1</sub>) = 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑉𝑎𝑟(𝑦<sub>𝑖</sub>)(𝑥<sub>𝑖</sub> - 𝑥̅)<sup>2</sup>\] / (𝑆<sub>𝑥𝑥</sub>)<sup>2</sup>
> > - 𝑉𝑎𝑟(𝜃ˆ<sub>1</sub>|𝑥<sub>1</sub>) = 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝜎<sup>2</sup>(𝑥<sub>𝑖</sub> - 𝑥̅)<sup>2</sup>\] / (𝑆<sub>𝑥𝑥</sub>)<sup>2</sup>
> > - 𝑉𝑎𝑟(𝜃ˆ<sub>1</sub>|𝑥<sub>1</sub>) = 𝜎<sup>2</sup>𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑥<sub>𝑖</sub> - 𝑥̅)<sup>2</sup>\] / (𝑆<sub>𝑥𝑥</sub>)<sup>2</sup>
> > - 𝑉𝑎𝑟(𝜃ˆ<sub>1</sub>|𝑥<sub>1</sub>) = 𝜎<sup>2</sup> / 𝑆<sub>𝑥𝑥</sub><font style="color: rgb(128,128,128);">\# 𝑆<sub>𝑥𝑥</sub>= 𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑥<sub>𝑖</sub> - 𝑥̅)<sup>2</sup>\]</font>
>
> thus 𝜃ˆ<sub>1</sub> is Normal(𝜇<sub>𝜃<sub>1</sub></sub>, (𝜎<sub>𝜃<sub>1</sub></sub>)<sup>2</sup>) with:
> - 𝜇<sub>𝜃<sub>1</sub></sub> = 𝜃<sub>1</sub>
> - (𝜎<sub>𝜃<sub>1</sub></sub>)<sup>2</sup> = 𝜎<sup>2</sup> / 𝑆<sub>𝑥𝑥</sub>
>
> and 𝜃ˆ<sub>1</sub>is estimated Normal(𝜇̂<sub>𝜃<sub>1</sub></sub>, (𝜎̂<sub>𝜃<sub>1</sub></sub>)<sup>2</sup>) with:
> - 𝜇̂<sub>𝜃<sub>1</sub></sub> = 𝜃ˆ<sub>1</sub>
> - (𝜎̂<sub>𝜃<sub>1</sub></sub>)<sup>2</sup> =  𝜎̂<sup>2</sup> / 𝑆<sub>𝑥𝑥</sub>
>
> with (1-𝛼)100% 2-tailed [[Confidence Interval (CI)|confidence interval]] for the regression slope (𝜃<sub>1</sub>)
> - = <font style="color: rgb(128,0,0);">estimate</font> ± <font style="color: rgb(255,102,0);">𝑧<sub>𝛼/2</sub></font>·<font style="color: rgb(0,128,0);">(std of <font style="color: rgb(128,0,0);">estimate</font>)</font> <font style="color: rgb(128,128,128);">\# [[z-distribution (Standard Normal Distribution) ｜ z-scores ｜ z-values ｜ z-table ｜ z-statistic ｜ Standardization - Standardized Values - Standard Scores - Normal Deviates|z-test]] is used when std of the estimator is known</font>
> - = <font style="color: rgb(128,0,0);">estimate</font> ± <font style="color: rgb(255,102,0);">𝑡<sub>𝛼/2,𝑛-2</sub></font>·<font style="color: rgb(0,128,0);">(estimated std of <font style="color: rgb(128,0,0);">estimate</font>)</font> <font style="color: rgb(128,128,128);">\# [[t-distribution ｜ t-scores ｜ t-value ｜ t-table ｜ t-statistic ｜ student's t-distribution|t-test]] is used when std of the estimator is estimated</font>
> - = <font style="color: rgb(128,0,0);">𝜃ˆ</font><sub><font style="color: rgb(128,0,0);">1</font></sub>± <font style="color: rgb(255,102,0);">𝑡<sub>𝛼/2,𝑛-2</sub></font>·<font style="color: rgb(0,128,0);">\[𝜎̂<sup>2</sup>/(𝑆<sub>𝑥𝑥</sub>)\]<sup>1/2</sup></font>
> - = <font style="color: rgb(128,0,0);">𝜃ˆ</font><sub><font style="color: rgb(128,0,0);">1</font></sub>± <font style="color: rgb(255,102,0);">𝑡<sub>𝛼/2,𝑛-2</sub></font>·<font style="color: rgb(0,128,0);">\[𝜎̂/√(𝑆<sub>𝑥𝑥</sub>)\]</font>
>
> hypothesis-testing:
> - 𝐻<sub>0</sub>: 𝜃<sub>1</sub>= 𝐵
> - 𝐻<sub>𝑎</sub>: 𝜃<sub>1</sub>≠ 𝐵
>
> use the [[t-distribution ｜ t-scores ｜ t-value ｜ t-table ｜ t-statistic ｜ student's t-distribution|t-statistic]] with parameters <font style="color: rgb(255,102,0);">𝛼/2</font><font style="color: rgb(255,102,0);">,</font><font style="color: rgb(255,102,0);">𝑛-2</font>:
> - 𝑡 = (𝜃ˆ<sub>1</sub>- 𝐵) / 𝑆𝐸'(𝜃ˆ<sub>1</sub>) <font style="color: rgb(128,128,128);">\# 𝑆𝐸'(𝜃ˆ<sub>1</sub>) is the [[Standard Error (SE) - Estimated Standard Error (SEˆ)|estimated standard error]] of statistic 𝜃ˆ<sub>1</sub></font>
> - 𝑡 = (𝜃ˆ<sub>1</sub>- 𝐵) / 𝜎̂/√(𝑆<sub>𝑥𝑥</sub>)
>
> To see if 𝑋 is significant for the prediction of 𝑌, test the null hypothesis with 𝐵 = 0:
> - 𝐻<sub>0</sub>: 𝜃<sub>1</sub>= 0
> - 𝐻<sub>𝐴</sub>: 𝜃<sub>1</sub>≠ 0
###### ANOVA F-Test on Model Significance

> [!expand]- Click here to expand...
> <strong>ANOVA F-test</strong>
> - popular for testing ratios of variances and significance of models
> - compares the portion of variation explained by regression with the portion that remains unexplained
> - is always one-sided and right-tail because only large values of the [[f-distribution ｜ f-scores ｜ f-value ｜ f-table ｜ f-statistic|F-statistic]] show a large portion of explained variation and the overall significance of the model
>
> under the null-hypothesis:
> - 𝐻<sub>0</sub>: 𝜃<sub>1</sub>= 0
>
> the [[f-distribution ｜ f-scores ｜ f-value ｜ f-table ｜ f-statistic|f-statistic]] value is computed as follows:
> - 𝐹 = 𝑀𝑆<sub>𝑅𝐸𝐺</sub>/ 𝑀𝑆<sub>𝐸𝑅𝑅</sub>
>
> and has [[f-distribution ｜ f-scores ｜ f-value ｜ f-table ｜ f-statistic|F-distribution]] and has two parameters:
> - numerator 𝑑𝑓 = 𝑑𝑓<sub>𝑅𝐸𝐺</sub> = 1
> - denominator 𝑑𝑓 = 𝑑𝑓<sub>𝐸𝑅𝑅</sub> = (𝑛 − 2)
###### F-Test vs T-Test

> [!expand]- Click here to expand...
> - T-test for testing individual regression slope
> - F-test for testing the entire model significance
>
> For the [[Univariate／Single-Variable／Simple Linear Regression Models|univariate linear regression]], they are absolutely equivalent. In fact, the F-statistic equals the SQUARED T-statistic for testing 𝐻<sub>0</sub>: 𝜃<sub>1</sub>= 0:
> - 𝑡<sup>2</sup> = (𝜃ˆ<sub>1</sub>)<sup>2</sup> / (𝜎̂<sup>2</sup>/𝑆<sub>𝑥𝑥</sub>)
> - 𝑡<sup>2</sup> = (𝑆<sub>𝑥𝑦</sub>/𝑆<sub>𝑥𝑥</sub>)<sup>2</sup> / (𝜎̂<sup>2</sup>/𝑆<sub>𝑥𝑥</sub>) <font style="color: rgb(128,128,128);">\# 𝜃ˆ<sub>1</sub>= 𝑆<sub>𝑥𝑦</sub>/𝑆<sub>𝑥𝑥</sub></font>
> - 𝑡<sup>2</sup> = \[(𝑆<sub>𝑥𝑦</sub>)<sup>2</sup>/𝑆<sub>𝑥𝑥</sub>\] / \[𝜎̂<sup>2</sup>\] <font style="color: rgb(128,128,128);">\# factored out 𝑆<sub>𝑥𝑥</sub></font>
> - 𝑡<sup>2</sup> = \[(𝑆<sub>𝑥𝑦</sub>)<sup>2</sup>/(𝑆<sub>𝑦𝑦</sub>𝑆<sub>𝑥𝑥</sub>)\] \* \[𝑆<sub>𝑦𝑦</sub>/𝜎̂<sup>2</sup>\] <font style="color: rgb(128,128,128);">\# multiplied 𝑆<sub>𝑦𝑦</sub>/𝑆<sub>𝑦𝑦</sub></font>
> - 𝑡<sup>2</sup> = \[𝑟<sup>2</sup>\] \* \[𝑆<sub>𝑦𝑦</sub>/𝜎̂<sup>2</sup>\] <font style="color: rgb(128,128,128);">\# 𝑟<sub>𝑥𝑦</sub> = 𝑠<sub>𝑥𝑦</sub>/ (𝑠<sub>𝑥</sub>\*𝑠<sub>𝑦</sub>) and (𝑠<sub>𝑥</sub>)<sup>2</sup> = 𝑆<sub>𝑥𝑥</sub></font>
> - 𝑡<sup>2</sup> = \[𝑟<sup>2</sup>\] \* \[𝑆𝑆<sub>𝑇𝑂𝑇</sub>/𝜎̂<sup>2</sup>\] <font style="color: rgb(128,128,128);">\# 𝑆𝑆<sub>𝑇𝑂𝑇</sub>= 𝑆<sub>𝑦𝑦</sub></font>
> - 𝑡<sup>2</sup> = \[𝑟<sup>2</sup>\*𝑆𝑆<sub>𝑇𝑂𝑇</sub>/𝜎̂<sup>2</sup>\]
> - 𝑡<sup>2</sup> = \[𝑆𝑆<sub>𝑅𝐸𝐺</sub>/𝜎̂<sup>2</sup>\] <font style="color: rgb(128,128,128);">\# 𝑟<sup>2</sup> = 𝑆𝑆<sub>𝑅𝐸𝐺</sub> / 𝑆𝑆<sub>𝑇𝑂𝑇</sub></font>
> - 𝑡<sup>2</sup> = \[𝑀𝑆<sub>𝑅𝐸𝐺</sub>/𝜎̂<sup>2</sup>\] <font style="color: rgb(128,128,128);">\# 𝑀𝑆<sub>𝑅𝐸𝐺</sub> = 𝑆𝑆<sub>𝑅𝐸𝐺</sub> / 𝑑𝑓<sub>𝑅𝐸𝐺</sub> and 𝑑𝑓<sub>𝑅𝐸𝐺</sub> = 1</font>
> - 𝑡<sup>2</sup> = \[𝑀𝑆<sub>𝑅𝐸𝐺</sub>/𝑀𝑆<sub>𝐸𝑅𝑅</sub>\] <font style="color: rgb(128,128,128);">\# 𝑀𝑆<sub>𝐸𝑅𝑅</sub>= 𝜎̂<sup>2</sup></font>
> - 𝑡<sup>2</sup> = 𝑓 <font style="color: rgb(128,128,128);">\# definition of f-statistic</font>
###### Prediction (Confidence Interval & Prediction Interval)

> [!expand]- Click here to expand...
> given a value of the predictor 𝑋:
> - 𝑋=𝑥<sub>𝑧</sub>
>
> the TRUE mean/expectation of response 𝑌 is:
> - 𝜇<sub>𝑧</sub> = 𝐄\[𝑌|𝑋=𝑥<sub>𝑧</sub>\]
> - 𝜇<sub>𝑧</sub> = 𝜃<sub>0</sub>+ 𝑥<sub>𝑧</sub>𝜃<sub>1</sub>
>
> the ESTIMATED mean/expectation of response 𝑌 is:
> - 𝑦̂<sub>𝑧</sub> = 𝐄\[𝑌|𝑋=𝑥<sub>𝑧</sub>\]
> - 𝑦̂<sub>𝑧</sub> = 𝜃ˆ<sub>0</sub>+ 𝑥<sub>𝑧</sub>𝜃ˆ<sub>1</sub>
>
> How reliable are regression predictions, and how close are they to the real true values? we construct:
> - a (1-𝛼)100% <strong>confidence interval </strong>for the expectation
> 	- 𝜇<sub>𝑧</sub> = 𝐄\[𝑌|𝑋=𝑥<sub>𝑧</sub>\]
> - a (1-𝛼)100% <strong>prediction interval</strong> for the actual value of 𝑌=𝑦<sub>𝑧</sub> when 𝑋=𝑥<sub>𝑧</sub>
>
> ###### Confidence Interval for the Mean of Response
>
> (1-𝛼)100% confidence interval for the mean 𝜇<sub>𝑧</sub> = 𝐄\[𝑌|𝑋=𝑥<sub>𝑧</sub>\] of all responses with 𝑋=𝑥<sub>𝑧</sub> is:
> - 𝜃ˆ<sub>0</sub> + 𝜃ˆ<sub>1</sub>𝑥<sub>𝑧</sub> ± 𝑡<sub>𝛼/2</sub>·𝜎̂·√<strong>\[ </strong>(1/𝑛) + \[(𝑥<sub>𝑧</sub> - 𝑥̅)<sup>2</sup> / 𝑆<sub>𝑥𝑥</sub>\] <strong>\]</strong>
>
> computation:
>
> > [!expand]- Click here to expand...
> > the expectation:
> > - 𝜇<sub>𝑧</sub> = 𝐄\[𝑌|𝑋=𝑥<sub>𝑧</sub>\] = 𝜃<sub>0</sub>+ 𝑥<sub>𝑧</sub>𝜃<sub>1</sub>
> >
> > is the population parameter. 𝜇<sub>𝑧</sub> is the mean response for the entire subpopulation of units where the independent variable 𝑋=𝑥<sub>𝑧</sub>
> >
> > 𝜇<sub>𝑧</sub>is estimated by:
> > - 𝑦̂<sub>𝑧</sub> = <font style="color: rgb(128,0,0);">𝜃ˆ<sub>0</sub></font>+ 𝜃ˆ<sub>1</sub>𝑥<sub>𝑧</sub>
> > - 𝑦̂<sub>𝑧</sub> =<font style="color: rgb(128,0,0);"> 𝑦̅ - 𝜃ˆ<sub>1</sub>𝑥̅</font> + 𝜃ˆ<sub>1</sub>𝑥<sub>𝑧</sub>
> > - 𝑦̂<sub>𝑧</sub> =<font style="color: rgb(128,0,0);"> 𝑦̅</font> + 𝜃ˆ<sub>1</sub>𝑥<sub>𝑧</sub><font style="color: rgb(128,0,0);">- 𝜃ˆ<sub>1</sub>𝑥̅</font>
> > - 𝑦̂<sub>𝑧</sub> = <font style="color: rgb(255,102,0);">𝑦̅</font> + <font style="color: rgb(0,128,0);">𝜃ˆ<sub>1</sub></font> · (𝑥<sub>𝑧</sub>- 𝑥̅)
> > - 𝑦̂<sub>𝑧</sub> =<font style="color: rgb(255,102,0);"> (1/𝑛)(𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑦<sub>𝑖</sub>\])</font> + <font style="color: rgb(0,128,0);">(𝛴<sub>1≤𝑖≤𝑛</sub>\[(𝑥<sub>𝑖</sub>-𝑥̅)𝑦<sub>𝑖</sub></font><font style="color: rgb(0,128,0);">\])/(𝑆<sub>𝑥𝑥</sub>)</font> · (𝑥<sub>𝑧</sub>- 𝑥̅)
> > - 𝑦̂<sub>𝑧</sub> = (𝛴<sub>1≤𝑖≤𝑛</sub>\[(1/𝑛)𝑦<sub>𝑖</sub>\]) + (𝛴<sub>1≤𝑖≤𝑛</sub>\[(1/𝑆<sub>𝑥𝑥</sub>)(𝑥<sub>𝑖</sub>-𝑥̅)(𝑥<sub>𝑧</sub>- 𝑥̅)𝑦<sub>𝑖</sub>\])
> > - 𝑦̂<sub>𝑧</sub> = (𝛴<sub>1≤𝑖≤𝑛</sub>\[(1/𝑛)<font style="color: rgb(255,0,0);">𝑦<sub>𝑖</sub></font> + (1/𝑆<sub>𝑥𝑥</sub>)(𝑥<sub>𝑖</sub>-𝑥̅)(𝑥<sub>𝑧</sub>- 𝑥̅)<font style="color: rgb(255,0,0);">𝑦<sub>𝑖</sub></font>\])
> > - 𝑦̂<sub>𝑧</sub> = (𝛴<sub>1≤𝑖≤𝑛</sub>\[(1/𝑛) + (1/𝑆<sub>𝑥𝑥</sub>)(𝑥<sub>𝑖</sub>-𝑥̅)(𝑥<sub>𝑧</sub>- 𝑥̅)\]·<font style="color: rgb(255,0,0);">𝑦<sub>𝑖</sub></font>)
> >
> > we see that the estimator is a linear function of responses 𝑦<sub>𝑖</sub>. Then under [[LR - Standard Regression Assumptions|standard regression assumptions]], 𝑦̂<sub>𝑧</sub> is Normal with:
> > - mean = 𝜇<sub>𝑧</sub>
> > 	- 𝐄\[𝑦̂<sub>𝑧</sub>\] = 𝐄\[𝜃ˆ<sub>0</sub>\] + 𝐄\[𝜃ˆ<sub>1</sub>\]𝑥<sub>𝑧</sub>
> > 	- 𝐄\[𝑦̂<sub>𝑧</sub>\] = 𝜃<sub>0</sub>+ 𝜃<sub>1</sub>𝑥<sub>𝑧</sub>
> > 	- 𝐄\[𝑦̂<sub>𝑧</sub>\] = 𝜇<sub>𝑧</sub>
> > - variance = 𝜎<sup>2</sup><strong>\[ </strong>(1/𝑛) + \[(𝑥<sub>𝑧</sub> - 𝑥̅)<sup>2</sup> / 𝑆<sub>𝑥𝑥</sub>\] <strong>\]</strong>
> > > [!list-indent-undo]
> > > > [!indent]
> > > > ![[Univariate／Single-Variable／Simple Linear Regression Models/univariate-linear-regression-variance-of-expected-response.png|400]]
> >
> > we can estimate the regression variance 𝜎<sup>2</sup>with 𝜎̂<sup>2</sup> and obtain the following confidence interval
> >
> > (1-𝛼)100% confidence interval for the mean 𝜇<sub>𝑧</sub> = 𝐄\[𝑌|𝑋=𝑥<sub>𝑧</sub>\] of all responses with 𝑋=𝑥<sub>𝑧</sub> is:
> > - 𝜃ˆ<sub>0</sub> + 𝜃ˆ<sub>1</sub>𝑥<sub>𝑧</sub> ± 𝑡<sub>𝛼/2</sub>·𝜎̂·√<strong>\[ </strong>(1/𝑛) + \[(𝑥<sub>𝑧</sub> - 𝑥̅)<sup>2</sup> / 𝑆<sub>𝑥𝑥</sub>\] <strong>\]</strong>
> ###### Prediction Interval for the Individual Response
>
> instead of estimating a population parameter, we are now predicting the actual value of a random variable
>
> (1-𝛼)100% prediction interval for the individual response 𝑌 when 𝑋=𝑥<sub>𝑧</sub>:
> - 𝜃ˆ<sub>0</sub> + 𝜃ˆ<sub>1</sub>𝑥<sub>𝑧</sub> ± 𝑡<sub>𝛼/2</sub>·𝜎̂·√<strong>\[ </strong><font style="color: rgb(255,0,0);">1 +</font> (1/𝑛) + \[(𝑥<sub>𝑧</sub> - 𝑥̅)<sup>2</sup> / 𝑆<sub>𝑥𝑥</sub>\] <strong>\]</strong>
>
> computation:
>
> > [!expand]- Click here to expand...
> > an interval \[𝑎,𝑏\] is a (1-𝛼)100% prediction interval for the individual response 𝑌 corresponding to predictor 𝑋=𝑥<sub>𝑧</sub> if it contains the value of 𝑌 with probability (1-𝛼):
> > - 𝐏{𝑎 ≤ 𝑌 ≤ 𝑏 | 𝑋=𝑥<sub>𝑧</sub>} = 1 - 𝛼
> >
> > this time, all 3 quantities: 𝑌, 𝑎, and 𝑏, are random variables
> >
> > predicting 𝑌 by 𝑦̂<sub>𝑧</sub>:
> >
> > the standard deviation
> > - 𝑆𝑡𝑑(𝑌 - 𝑦̂<sub>𝑧</sub>) = √\[𝑉𝑎𝑟(𝑌) + 𝑉𝑎𝑟(𝑦̂<sub>𝑧</sub>)\]
> > - 𝑆𝑡𝑑(𝑌 - 𝑦̂<sub>𝑧</sub>) = 𝜎·√<strong>\[</strong> 1 + (1/𝑛) + \[(𝑥<sub>𝑧</sub> - 𝑥̅)<sup>2</sup> / 𝑆<sub>𝑥𝑥</sub>\] <strong>\]</strong>
> >
> > is estimated by:
> > - 𝑆𝑡𝑑ˆ(𝑌 - 𝑦̂<sub>𝑧</sub>) = <font style="color: rgb(255,0,0);">𝜎̂</font>·√<strong>\[</strong> 1 + (1/𝑛) + \[(𝑥<sub>𝑧</sub> - 𝑥̅)<sup>2</sup> / 𝑆<sub>𝑥𝑥</sub>\] <strong>\]</strong>
> >
> > and standardizing all 3 parts of the inequality:
> > - 𝑎 ≤ 𝑌 ≤ 𝑏
> >
> > we realize that the (1-𝛼)100% prediction interval for 𝑌 has to satisfy the equation
> >
> > > [!indent]
> ![[Univariate／Single-Variable／Simple Linear Regression Models/univariate-linear-regression-prediction-interval-1.png|400]]
> >
> > at the same time, the properly standardized (𝑌 - 𝑦̂<sub>𝑧</sub>) has [[t-distribution ｜ t-scores ｜ t-value ｜ t-table ｜ t-statistic ｜ student's t-distribution|t-distribution]]:
> >
> > > [!indent]
> ![[Univariate／Single-Variable／Simple Linear Regression Models/univariate-linear-regression-prediction-interval-2.png|310]]
> >
> > a prediction interval is now computed by solving the following equation for 𝑎 and 𝑏:
> >
> > > [!indent]
> ![[Univariate／Single-Variable／Simple Linear Regression Models/univariate-linear-regression-prediction-interval-3.png|340]]
> >
> > thus, the (1-𝛼)100% prediction interval for the individual response 𝑌 when 𝑋=𝑥<sub>𝑧</sub>:
> >
> > > [!indent]
> 𝜃ˆ<sub>0</sub> + 𝜃ˆ<sub>1</sub>𝑥<sub>𝑧</sub> ± 𝑡<sub>𝛼/2</sub>·𝜎̂·√<strong>\[ </strong>1 + (1/𝑛) + \[(𝑥<sub>𝑧</sub> - 𝑥̅)<sup>2</sup> / 𝑆<sub>𝑥𝑥</sub>\] <strong>\]</strong>
