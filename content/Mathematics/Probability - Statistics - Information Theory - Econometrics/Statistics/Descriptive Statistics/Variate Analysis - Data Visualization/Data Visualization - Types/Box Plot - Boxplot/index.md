---
title: "Box Plot - Boxplot"
created: 2021-09-13T05:28:58.306-05:00
modified: 2026-02-09T11:42:39.798-06:00
parent: "[[Data Visualization - Types]]"
children: []
---
###### Box Plot
````excerpt
- TODO
````
^excerpt

# Boxplot - Intro
we draw a box between the first and the third quartiles, a line inside a box for a median, and extend whiskers to the smallest and the largest observations, thus representing a so-called five-point summary:
- five-point summary = (min, Q<sub>1</sub>, median, Q<sub>3</sub>, max)

extra:
- [[Sample Mean|sample mean]] 𝑋̅ is also depicted with a dot · or a cross +
- observations further than 1.5 [[Interquartile Range (IQR)|interquartile ranges (IQR)]] are usually drawn separately from whiskers, indicating the possibility of outliers. This is in accordance with the [[IQR - Detection of Outliers|1.5(IQR) Rule]]

# Boxplots - Example

five-point summary = (min, Q<sub>1</sub>, Median, Q<sub>3</sub>, max)
- min = 9
- Q<sub>1</sub> = 34
- Median = 42.5
- Q<sub>3</sub> = 59
- max =139

extra:
- [[Sample Mean|sample mean]] 𝑋̅ = 48.2333
- we also know that 139 is more than 1.5([[Interquartile Range (IQR)|IQR]]) away from the third quartile, and we suspect that it may be an outlier

![[Box Plot - Boxplot/box-plot.png|400x201]]

From this box plot, one can conclude:
- the distribution of data is right skewed because (1) the mean exceeds the median, and (2) the right half of the box is larger than the left half.
- Each half of a box and each whisker represents approximately 25% of the population. For example, we expect about 25% of all data to fall between 42.5 and 59 seconds

# Boxplots - Creation
- [[R - Boxplot]]
