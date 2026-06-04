---
title: "Empirical／Sample Distribution"
created: 2021-09-13T05:27:20.364-05:00
modified: 2024-01-17T21:53:59.820-06:00
parent: "[[Population Distribution - Sample／Empirical Distribution]]"
children: []
---
###### Empirical/Sample Distribution
````excerpt
- its value at a given point is equal to the proportion of observations from the sample that are less than or equal to that point
- <font style="color: rgb(255,0,0);">is NOT the same as</font> [[Sampling Distribution - Finite-Sample Distribution]]
````
^excerpt

# Mathematical Definition

let:
- 𝐷 = \[𝑥<sub>1</sub>, ..., 𝑥<sub>𝑛</sub>\] be a set of 𝑛 samples taken from some true [[Population Distribution|population distribution]] 𝐏

the empirical distribution 𝐏ˆ<sub>𝐷</sub>is defined as:
- 𝐏ˆ<sub>𝐷</sub>(𝐴) = (1/|𝐷|) 𝛴<sub>𝑥<sub>𝑖</sub>∊𝐷</sub>𝐼(𝑥<sub>𝑖</sub>∊𝐴)

where:
- 𝐴 - an event
- 𝐼(𝑥<sub>𝑖</sub>∊𝐴) - is an [[Indicator Functions - Characteristic Functions - Membership Functions|indicator function]] that is equal to 1 if 𝑥<sub>𝑖</sub>is found in 𝐴 and 0 otherwise

note:
- 𝐏ˆ<sub>𝐷</sub>is an estimate of true distribution 𝐏
- 𝐏ˆ<sub>𝐷</sub>(𝐴) is the probability of the event 𝐴 is simply the fraction of training examples that satisfy 𝐴
- as the number of training examples grows, the empirical distribution approaches the true [[Population Distribution|population distribution]] 𝐏
	- 𝑙𝑖𝑚<sub>𝑛→ ∞</sub> 𝐏ˆ<sub>𝐷</sub>(𝐴) = 𝐏(𝐴)
