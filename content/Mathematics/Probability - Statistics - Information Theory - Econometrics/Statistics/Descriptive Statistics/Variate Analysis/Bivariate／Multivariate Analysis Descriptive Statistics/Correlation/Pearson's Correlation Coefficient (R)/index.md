---
title: "Pearson's Correlation Coefficient (R)"
created: 2021-09-13T05:28:42.929-05:00
modified: 2024-01-18T15:37:07.666-06:00
parent: "[[Correlation]]"
children:
  - "[[Properties of Pearson's Correlation]]"
  - "[[Sampling Distribution of Sample Pearson's Correlation - Sample Pearson's Correlation Distribution]]"
  - "[[Zero／0 Correlation does not imply Independence]]"
---
###### Pearson's Correlation Coefficient (R)
- a type of [[Correlation|correlation]] that measures the strength of the <strong>linear</strong> [[Causality／Causation vs Dependence vs Correlation vs Relationships vs Association vs Laws|relationship/association]] between 2 variables (i.e. how close the points are to a straight line)
	- since, 2 variables can be associated non-linearly and can have 0 correlation, [zero/0 correlation does not imply Independence](http://confluence.marcuschiu.com/pages/viewpage.action?pageId=3277858)
- assumes that both variables are [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|normally distributed]] (i.e. requires them to be truly continuous and unbounded)
- ranges from -1 to 1
- linear relationship between the 2 variables is strongest at -1 and 1
- is weakest at 0. means no linear relationship. but there may be non-linear relationship
- is a stepping stone to [[R² - R-Squared - Coefficient of Determination - Coefficient of Multiple Determination - Multiple R-Square|R²]]
- is the ratio between covariance over "total" variance (sort of like: how much of the total variance is explained by the covariance)
- is not sensitive to the scale of the data (unlike [[Covariation - Covariance|covariance]])

# Correlation Formula
###### <strong>population correlation</strong>

![](http://youtube.com/watch?v=xZ_z8KWkhXE)
- 𝜌(𝑋,𝑌) = <font style="color: rgb(128,0,0);">𝐶𝑜𝑣(𝑋,𝑌)</font> / \[<font style="color: rgb(255,102,0);">𝜎</font><font style="color: rgb(255,102,0);">(𝑋) </font>· <font style="color: rgb(0,128,0);">𝜎</font><font style="color: rgb(0,128,0);">(𝑌)</font>\]
- 𝜌(𝑋,𝑌) = <font style="color: rgb(128,0,0);">(𝐄\[</font><font style="color: rgb(128,0,0);letter-spacing: 0.0px;">𝑋</font><font style="color: rgb(128,0,0);letter-spacing: 0.0px;">𝑌</font><font style="letter-spacing: 0.0px;color: rgb(128,0,0);">\] - </font><font style="color: rgb(128,0,0);">𝐄\[𝑋\]𝐄\[𝑌</font><font style="color: rgb(128,0,0);">\])</font> / \[<font style="letter-spacing: 0.0px;color: rgb(255,102,0);">𝜎</font><font style="letter-spacing: 0.0px;color: rgb(255,102,0);">(𝑋) </font>· <font style="color: rgb(0,128,0);letter-spacing: 0.0px;">𝜎</font><font style="color: rgb(0,128,0);letter-spacing: 0.0px;">(𝑌)</font>\]
- 𝜌(𝑋,𝑌) = <font style="color: rgb(128,0,0);">\[𝛴(𝑥<sub>𝑖</sub> - 𝜇<sub>𝑥</sub>)(𝑦<sub>𝑖</sub> - 𝜇<sub>𝑦</sub>)\]</font> / \[<font style="color: rgb(255,102,0);letter-spacing: 0.0px;">𝜎</font><font style="color: rgb(255,102,0);letter-spacing: 0.0px;">(𝑋) </font>· <font style="color: rgb(0,128,0);letter-spacing: 0.0px;">𝜎</font><font style="color: rgb(0,128,0);letter-spacing: 0.0px;">(𝑌)</font>\]
- 𝜌(𝑋,𝑌) = <font style="letter-spacing: 0.0px;color: rgb(128,0,0);">\[𝛴(𝑥<sub>𝑖</sub> - 𝜇<sub>𝑥</sub>)(𝑦<sub>𝑖</sub> - 𝜇<sub>𝑦</sub>)\]</font> / \[<font style="color: rgb(255,102,0);letter-spacing: 0.0px;">\[𝛴(𝑥<sub>𝑖</sub> - 𝜇<sub>𝑥</sub>)<sup>2</sup>\]<sup>1/2</sup></font>· <font style="color: rgb(0,128,0);letter-spacing: 0.0px;">\[𝛴(𝑥<sub>𝑖</sub> - 𝜇<sub>𝑥</sub>)<sup>2</sup>\]<sup>1/2</sup></font>\]
- 𝜌(𝑋,𝑌) = (1/𝑛) <font style="color: rgb(128,0,0);"><font style="color: rgb(51,51,51);">𝛴<strong>(</strong></font><font style="color: rgb(51,102,255);">\[(𝑥</font></font><font style="color: rgb(51,102,255);"><sub>𝑖</sub> - 𝜇<sub>𝑥</sub></font><font style="color: rgb(128,0,0);"><font style="color: rgb(255,102,0);"><font style="color: rgb(51,102,255);">)/𝜎(𝑋)\]</font> <font style="color: rgb(51,51,51);">·</font></font> <font style="color: rgb(128,0,128);">\[(𝑦</font></font><font style="color: rgb(128,0,128);"><sub>𝑖</sub> - 𝜇<sub>𝑦</sub>)/𝜎(𝑌)\]</font><strong>)</strong>

where:
- 𝐶𝑜𝑣 - population [[Covariation - Covariance|covariance]]
- 𝜎 - population [[Variance - Standard Deviation (Root Mean Square (RMS) Deviation)|standard deviation]]
- <font style="color: rgb(128,0,0);"><font style="color: rgb(51,102,255);">(𝑥</font></font><font style="color: rgb(51,102,255);"><sub>𝑖</sub> - 𝜇<sub>𝑥</sub></font><font style="color: rgb(128,0,0);"><font style="color: rgb(255,102,0);"><font style="color: rgb(51,102,255);">)/𝜎(𝑋) </font></font></font>- [[z-distribution (Standard Normal Distribution) ｜ z-scores ｜ z-values ｜ z-table ｜ z-statistic ｜ Standardization - Standardized Values - Standard Scores - Normal Deviates|z-score]] of data-point 𝑥<sub>𝑖</sub>(assuming <font style="color: rgb(51,102,255);">𝑋 </font>is [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|normally distributed]])
- <font style="color: rgb(128,0,0);"><font style="color: rgb(128,0,128);">(𝑦</font></font><font style="color: rgb(128,0,128);"><sub>𝑖</sub> - 𝜇<sub>𝑦</sub>)/𝜎(𝑌)</font> - z-score of data-point 𝑦<sub>𝑖</sub>(assuming <font style="color: rgb(51,102,255);"><font style="color: rgb(128,0,128);">𝑌</font> </font>is [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|normally distributed]])

###### <strong>sample correlation</strong>
- 𝑟(𝑋,𝑌) = 𝐶𝑜𝑣'(𝑋,𝑌) / \[𝑠(𝑋)·𝑠(𝑌)\]

where:
- 𝐶𝑜𝑣' - sample covariance
- 𝑠 - [[Sample Variance - Sample Standard Deviation - Adjusted Sample Variance - Adjusted Sample Standard Deviation|sample standard deviation]]

# Correlation Properties

When the data-points:
- fall on a straight line, then the covariance accounts for the exact same variance as \[<font style="color: rgb(255,102,0);">𝜎</font><font style="color: rgb(255,102,0);">(𝑋)</font>·<font style="color: rgb(0,128,0);">𝜎</font><font style="color: rgb(0,128,0);">(𝑌)</font>\], thus correlation has magnitude equal to 1
- do not fall on a straight line, then the covariance accounts for less variance than \[<font style="color: rgb(255,102,0);">𝜎</font><font style="color: rgb(255,102,0);">(𝑋)</font>·<font style="color: rgb(0,128,0);">𝜎</font><font style="color: rgb(0,128,0);">(𝑌)</font>\], thus correlation has magnitude less than 1

# Correlation Diagrams
![[Pearson's Correlation Coefficient (R)/pearsons-correlation-examples.png|900]]
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
