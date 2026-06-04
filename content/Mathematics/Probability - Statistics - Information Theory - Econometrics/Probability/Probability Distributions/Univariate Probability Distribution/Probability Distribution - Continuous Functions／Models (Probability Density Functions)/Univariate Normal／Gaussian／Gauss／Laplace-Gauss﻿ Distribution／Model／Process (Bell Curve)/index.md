---
title: "Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)"
created: 2021-09-13T05:27:27.430-05:00
modified: 2024-02-10T10:11:16.090-06:00
parent: "[[Probability Distribution - Continuous Functions／Models (Probability Density Functions)]]"
children:
  - "[[Univariate Normal Distribution - Algebra]]"
  - "[[Univariate Normal Distribution - Derivation]]"
---
###### Univariate Normal/Gaussian/Gauss/Laplace-Gauss Distribution/Model/Process (Bell Curve)
````excerpt
- is a type of [[Gaussian／Normal Distribution／Model／Process|Gaussian/Normal Distribution/Model/Process]]
- is a type of gaussian [[Radial Basis "Kernel" Function (RBF)|Radial Basis Function (RBF)]] scaled by <font style="color: rgb(255,102,0);">(1/\[𝜎\*𝑠𝑞𝑟𝑡(2</font><font style="color: rgb(255,102,0);">𝜋)\])</font> which turns it into a [[Probability Distributions|probability distribution]] (i.e. area under curve = 1)
````
^excerpt

# Probability Density Function
- $f(X=x) = \frac{1}{𝜎 \sqrt{2 \pi}}e^{-\frac{(x - \mu)^2}{2𝜎^2}}$
- 𝑓(𝑋=𝑥) = <font style="color: rgb(255,102,0);">(1/\[𝜎\*𝑠𝑞𝑟𝑡(2𝜋)\])</font>·(𝑒<sup>-(𝑥-𝜇)²/(2𝜎²)</sup>) <font style="color: rgb(128,128,128);">\# for -∞ \< 𝑥 \<∞</font>

where:
- 𝜇- [[Arithmetic Mean - Average - Location - Expected Value - Expectation Operator|expectation/mean]], location parameter
- 𝜎 - [[Variance - Standard Deviation (Root Mean Square (RMS) Deviation)|standard deviation]], scale/spread parameter

# Probability Density Function (Using Precision)
- $f(X=x) = \sqrt{\frac{\beta }{2 \pi}} e^{-\frac{\beta (x - \mu)^2}{2}}$
- 𝑓(𝑋=𝑥) = 𝑠𝑞𝑟𝑡\[𝛽/(2𝜋)\] 𝑒<sup>-𝛽(𝑥-𝜇)²/(2)</sup> <font style="color: rgb(128,128,128);">\# for -∞ \< 𝑥 \<∞</font>

where:
- 𝛽 - precision with [[Real Intervals (Empty／Degenerate／Proper／Bounded／Finite／Half-Bounded／Unbounded／Left／Right／Open／Closed Intervals)|interval]]: (0,∞)

# Expectation
- 𝐄\[𝑋\] = 𝜇

> [!expand]- Click here to expand...
> - 𝐄\[𝑋\] = <sub>-∞</sub>∫<sup>∞</sup>𝑥·𝑓(𝑥)·𝑑𝑥 <font style="color: rgb(122,134,154);">\# </font>[[Continuous Distribution - Calculating (Expected Value - Expectation - Mean - Average)|see this]]
> - 𝐄\[𝑋\] = <sub>-∞</sub>∫<sup>∞</sup> 𝑥·<font style="color: rgb(255,102,0);">(1/\[𝜎\*𝑠𝑞𝑟𝑡(2𝜋)\])</font>·(𝑒<sup>-(𝑥-𝜇)²/(2𝜎²)</sup>)·𝑑𝑥
> - 𝐄\[𝑋\] = <font style="color: rgb(255,102,0);">(1/\[𝜎\*𝑠𝑞𝑟𝑡(2𝜋)\])·</font><sub>-∞</sub>∫<sup>∞</sup> 𝑥·(𝑒<sup>-(𝑥-𝜇)²/(2𝜎²)</sup>)·𝑑𝑥
> - 𝐄\[𝑋\] = <font style="color: rgb(255,102,0);">(1/\[𝜎\*𝑠𝑞𝑟𝑡(2𝜋)\])·</font><sub>-∞</sub>∫<sup>∞</sup> 𝑥·(𝑒<sup>-(𝑥-𝜇)²/(2𝜎²)</sup>)·𝑑𝑥
> - 𝐄\[𝑋\] = TODO <font style="color: rgb(122,134,154);">\# </font>[[Integration by Parts|integration by parts]]
> 	- 
> > [!expand]- Click here to expand...
> > - ∫𝑥·(𝑒<sup>-(𝑥-𝜇)²/(2𝜎²)</sup>)·𝑑𝑥
> > - ∫𝑥·(𝑒<sup>-(𝑥-𝜇)²/(2𝜎²)</sup>)·𝑑𝑥
> > - ∫<font style="color: rgb(255,0,255);">𝑢</font>·<font style="color: rgb(255,102,0);">𝑑𝑣</font> = <font style="color: rgb(255,0,255);">𝑢</font>·<font style="color: rgb(51,204,204);">𝑣</font> - ∫<font style="color: rgb(51,204,204);">𝑣</font>·<font style="color: rgb(0,128,0);">𝑑𝑢</font>
> >
> > TODO
> > - 
> > 	- <font style="color: rgb(255,0,255);">𝑢 = 𝑥</font>
> > 	- <font style="color: rgb(255,102,0);">𝑑𝑣 = (𝑒<sup>-(𝑥-𝜇)²/(2𝜎²)</sup>)·𝑑𝑥</font>
> > 	- <font style="color: rgb(0,128,0);">𝑑𝑢 = 1</font>
> > 	- <font style="color: rgb(51,204,204);">𝑣 = -\[𝜎²/(𝑥-𝜇)\]·(𝑒<sup>-(𝑥-𝜇)²/(2𝜎²)</sup>)</font>
> > - ∫<font style="color: rgb(255,0,255);">𝑥</font>·<font style="color: rgb(255,102,0);">(𝑒<sup>-(𝑥-𝜇)²/(2𝜎²)</sup>)·𝑑𝑥 </font>= <font style="color: rgb(255,0,255);">𝑥</font>·<font style="color: rgb(51,204,204);">-\[𝜎²/(𝑥-𝜇)\]·(𝑒<sup>-(𝑥-𝜇)²/(2𝜎²)</sup>)</font> - ∫<font style="color: rgb(51,204,204);">-\[𝜎²/(𝑥-𝜇)\]·(𝑒<sup>-(𝑥-𝜇)²/(2𝜎²)</sup>)</font>·<font style="color: rgb(0,128,0);">1</font>
> > - ∫<font style="color: rgb(255,0,255);">𝑥</font>·<font style="color: rgb(255,102,0);">(𝑒<sup>-(𝑥-𝜇)²/(2𝜎²)</sup>)·𝑑𝑥 </font>= -<font style="color: rgb(255,0,255);">𝑥</font>·<font style="color: rgb(51,204,204);">\[𝜎<sup>2</sup>/(𝑥-𝜇)\]·(𝑒<sup>-(𝑥-𝜇)²/(2𝜎²)</sup>)</font> + ∫<font style="color: rgb(51,204,204);">\[𝜎²/(𝑥-𝜇)\]·(𝑒<sup>-(𝑥-𝜇)²/(2𝜎²)</sup>)</font>·<font style="color: rgb(0,128,0);">1</font>
> >
> > <br>
> >
> > - 
> > 	- <font style="color: rgb(255,0,255);">𝑢 = (𝑒<sup>-(𝑥-𝜇)²/(2𝜎²)</sup>)</font>
> > 	- <font style="color: rgb(255,102,0);">𝑑𝑣 = 𝑥·𝑑𝑥</font>
> > 	- <font style="color: rgb(0,128,0);">𝑑𝑢 = -(1/𝜎²)·(𝑥-𝜇)·(𝑒<sup>-(𝑥-𝜇)²/(2𝜎²)</sup>)</font>
> > 	- <font style="color: rgb(51,204,204);">𝑣 = (1/2)𝑥²</font>
> > - ∫<font style="color: rgb(255,102,0);">𝑥</font>·<font style="color: rgb(255,0,255);">(𝑒<sup>-(𝑥-𝜇)²/(2𝜎²)</sup>)</font>·<font style="color: rgb(255,102,0);">𝑑𝑥</font> = <font style="color: rgb(255,0,255);">(𝑒<sup>-(𝑥-𝜇)²/(2𝜎²)</sup>)</font>·<font style="color: rgb(51,204,204);">(1/2)𝑥²</font> - ∫<font style="color: rgb(51,204,204);">(1/2)𝑥²</font>·<font style="color: rgb(0,128,0);">-(1/𝜎²)·(𝑥-𝜇)·(𝑒<sup>-(𝑥-𝜇)²/(2𝜎²)</sup>)</font>
> - TODO
# Variance
𝑉𝑎𝑟(𝑋) = 𝜎²
# Subpages
- [[z-distribution (Standard Normal Distribution) ｜ z-scores ｜ z-values ｜ z-table ｜ z-statistic ｜ Standardization - Standardized Values - Standard Scores - Normal Deviates|z-distribution (Standard Normal Distribution)]]
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Regression / Learning 𝜇 & 𝜎 Parameters
- see [[Gaussian Process Regression (GPR) - Kriging]]
