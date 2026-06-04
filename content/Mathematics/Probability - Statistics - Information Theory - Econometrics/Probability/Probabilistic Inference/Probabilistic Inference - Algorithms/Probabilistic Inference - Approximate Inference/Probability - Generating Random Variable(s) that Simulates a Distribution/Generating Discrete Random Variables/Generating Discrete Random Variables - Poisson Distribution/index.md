---
title: "Generating Discrete Random Variables - Poisson Distribution"
created: 2021-09-13T05:28:20.376-05:00
modified: 2021-09-13T05:28:20.376-05:00
parent: "[[Generating Discrete Random Variables]]"
children: []
---
Use the algorithm in [[Generating Discrete Random Variables]], to simulate a [[Poisson Distribution]]

Again, the [[Probability Distribution Function Variants - Probability／Mass／Density／Cumulative／Survivor／Hazard／Cumulative-Hazard／Inverse／Moment-Generating Distribution Functions|probability mass function (PMF)]] of a poisson distribution is:

![[Generating Discrete Random Variables - Poisson Distribution/poisson-distribution.png|320]]

Following the algorithm, we generate a Uniform random number 𝐔 and find the set 𝐴<sub>𝑖</sub> containing 𝐔, so that

𝑝<sub>0</sub>+ ... + 𝑝<sub>i−1</sub>≤ 𝐔 \< 𝑝<sub>0</sub>+ ... + 𝑝<sub>i−1</sub>+ 𝑝<sub>i</sub>,

or, in terms of the [[Probability Distribution Function Variants - Probability／Mass／Density／Cumulative／Survivor／Hazard／Cumulative-Hazard／Inverse／Moment-Generating Distribution Functions|cumulative distribution function (CDF)]],

𝐶𝐷𝐹(𝑖−1) ≤ 𝐔 \< 𝐶𝐷𝐹(𝑖)

This could done in MATLAB
```
lambda = 5;				% Parameter
U 	   = rand;			% Generated Uniform variable
i      = 0;         	% Initial value
F      = exp(-lambda)	% Initial value, F(0)
while (U >= F);			% The loop ends when U < F(i)
	F = F + exp(-lambda) ∗ lambdaˆi/gamma(i+1);
	i = i + 1;
end;
X=i
```
