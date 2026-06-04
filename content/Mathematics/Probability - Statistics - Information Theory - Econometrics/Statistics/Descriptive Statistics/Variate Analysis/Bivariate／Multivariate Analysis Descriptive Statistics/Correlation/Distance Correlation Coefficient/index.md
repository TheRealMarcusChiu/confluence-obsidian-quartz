---
title: "Distance Correlation Coefficient"
created: 2021-09-13T05:28:44.596-05:00
modified: 2021-11-12T02:07:14.215-06:00
parent: "[[Correlation]]"
children: []
---
###### Distance Correlation Coefficient
- addresses the deficiency of [[Pearson's Correlation Coefficient (R)|Pearson's Correlation]], that it can easily be zero for dependent variables
	- [[Pearson's Correlation Coefficient (R)|pearson's correlation]] = 0 (uncorrelatedness) does not imply [[Probability Independence (Marginal Independence - Conditional Independence)|independence]]
	- distance correlation = 0 does imply independence
- the distance correlation coefficient is zero if and only if the random vectors are independent
- outputs a scalar value between \[0, 1\]
	- 𝑑𝐶𝑜𝑟(𝑋,𝑌) = 0 iff 𝑋 and 𝑌 are independent
	- 𝑑𝐶𝑜𝑟(𝑋,𝑌) = 1 implies that dimensions of the linear subspaces spanned by 𝑋 and 𝑌 samples respectively are almost surely equal and if we assume that these subspaces are equal, then in this subspace 𝑌 = 𝐴 + 𝑏𝐶𝑋 for some vector 𝐴, scalar 𝑏, and orthonormal matric 𝐶

# Distance Correlation
- 𝑑𝐶𝑜𝑟(𝑋,𝑌) = 𝑑𝐶𝑜𝑣(𝑋,𝑌) / 𝑠𝑞𝑟𝑡\[𝑑𝑉𝑎𝑟(𝑋)·𝑑𝑉𝑎𝑟(𝑌)\]

where:
- 𝑑𝐶𝑜𝑣(,) - [[Distance Covariance／Covariation|Distance Covariance/Covariation]]
- 𝑑𝑉𝑎𝑟(,) - [[Distance Covariance／Covariation|Distance Covariance/Covariation]] variable against itself
