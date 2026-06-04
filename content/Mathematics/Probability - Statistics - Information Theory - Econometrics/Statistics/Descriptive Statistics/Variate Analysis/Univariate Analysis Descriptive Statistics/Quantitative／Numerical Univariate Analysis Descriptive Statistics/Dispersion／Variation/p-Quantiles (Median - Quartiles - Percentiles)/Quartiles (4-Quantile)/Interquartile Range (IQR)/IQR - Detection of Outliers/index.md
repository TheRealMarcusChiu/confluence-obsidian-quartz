---
title: "IQR - Detection of Outliers"
created: 2021-09-13T05:28:53.255-05:00
modified: 2023-10-23T14:19:32.685-05:00
parent: "[[Interquartile Range (IQR)]]"
children: []
---
###### Outliers
````excerpt
- is any point that falls outside the interval of \[𝑄<sub>1</sub>- 1.5\*𝐼𝑄𝑅, 𝑄<sub>3</sub> + 1.5\*𝐼𝑄𝑅\]
````
^excerpt

[[Interquartile Range (IQR)]] use in detecting of outliers

A “rule of thumb” for identifying outliers is the rule of 1.5(𝐼𝑄𝑅). Measure 1.5(𝑄<sub>3</sub>− 𝑄<sub>1</sub>) down from the first quartile and up from the third quartile. All the data points observed outside of this interval are assumed suspiciously far

ASSUMPTION: The rule of 1.5(𝐼𝑄𝑅) originally comes from the assumption that the data are nearly [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|normally distributed]]. If this is a valid assumption, then 99.3% of the population should appear within 1.5 interquartile ranges from quartiles
# Example

given:
- 𝑄<sub>1</sub> = -0.6745
- 𝑄<sub>3</sub> = 0.6745

thus, the Interquartile Range (𝐼𝑄𝑅) is:
- 1.5(𝐼𝑄𝑅) = 1.5(𝑄<sub>3</sub> − 𝑄<sub>1</sub>) = 2.0235

calculate range
- 𝑄<sub>1</sub>- 1.5(𝐼𝑄𝑅) = 𝑄<sub>1</sub>- 2.0235 = -2.698
- 𝑄<sub>3</sub>+ 1.5(𝐼𝑄𝑅) = 𝑄<sub>3</sub>+ 2.0235 = 2.698

thus, area between \[-2.698, 2.698\] in [Standard Normal Distribution](http://confluence.marcuschiu.com/pages/viewpage.action?pageId=2655466) = 99.3%
