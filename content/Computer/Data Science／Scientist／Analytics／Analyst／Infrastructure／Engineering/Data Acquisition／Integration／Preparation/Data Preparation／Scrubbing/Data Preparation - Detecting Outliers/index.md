---
title: "Data Preparation - Detecting Outliers"
created: 2020-04-30T17:10:41.498-05:00
modified: 2020-05-29T00:13:54.390-05:00
parent: "[[Data Preparation／Scrubbing]]"
children: []
---
based on: [http://r-statistics.co/Outlier-Treatment-With-R.html](http://r-statistics.co/Outlier-Treatment-With-R.html)
### Methods in Detecting Outliers

univariate approach
- [[IQR - Detection of Outliers]]

bivariate approach
- TODO

multivariate approach
- TODO

### Treating Outliers
- capping - for values that lie outside the 1.5 \* IQR limits, we could cap it by replacing those observations outside the lower limit with the value of 5th %ile and those that lie above the upper limit, with the value of 95th %ile
- remove that value and use the following methods discussed in [[Data Preparation - Handling Missing Values|Handling Missing Values]]
