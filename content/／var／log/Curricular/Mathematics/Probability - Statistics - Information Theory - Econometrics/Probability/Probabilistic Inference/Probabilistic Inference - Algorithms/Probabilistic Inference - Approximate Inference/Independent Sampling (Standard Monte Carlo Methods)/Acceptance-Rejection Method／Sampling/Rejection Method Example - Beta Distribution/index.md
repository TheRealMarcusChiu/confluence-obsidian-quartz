---
title: "Rejection Method Example - Beta Distribution"
created: 2021-09-13T05:28:15.090-05:00
modified: 2025-09-08T19:06:51.241-05:00
parent: "[[Acceptance-Rejection Method／Sampling]]"
children: []
---
[[Beta Distribution|beta distribution]] has [[Probability Distribution Function Variants - Probability／Mass／Density／Cumulative／Survivor／Hazard／Cumulative-Hazard／Inverse／Moment-Generating Distribution Functions|probability density]]:

![[Rejection Method Example - Beta Distribution/beta-distribution-probability-density.png|350]]

For 𝛼 = 5.5 and 𝛽 = 3.1, this density is graphed

the density never exceeds 2.5, therefore we choose the bounding box with a = 0, b = 1, and c = 2.5. MATLAB commands for generating a Beta(𝛼, 𝛽) random variable by the rejection method are
```
alpha=5.5; beta=3.1; a=0; b=1; c=2.5;
X=0; Y=c; % Initial values
while Y > gamma(alpha+beta)/gamma(alpha)/gamma(beta) * X.ˆ(alpha-1) .* (1-X).ˆ(beta-1);
	U=rand;
	V=rand;
	X=a+(b-a)*U;
	Y=c*V;
end; X
```

A histogram of 10,000 random variables generated (in a loop) by this algorithm is shown below

![[Rejection Method Example - Beta Distribution/rejection-method-2.png|350]]
