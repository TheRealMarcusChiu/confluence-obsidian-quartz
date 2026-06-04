---
title: "The Realizability Assumption"
created: 2024-01-21T22:21:48.843-06:00
modified: 2024-01-21T23:08:02.809-06:00
parent: "[[Understanding Machine Learning： From Theory to Algorithms]]"
children: []
---
###### The Realizability Assumption
````excerpt
- the assumption:
	- there exists ℎ\*∈𝐻 such that 𝐿<sub>(𝐷,𝑓)</sub>(ℎ\*) = 0
	- there exists ℎ\*∈𝐻 such that 𝐏<sub>𝑥∼𝐷</sub>(ℎ\*(𝑥) = 𝑓(𝑥)) = 1
- Note that this assumption implies that with probability 1 over random samples, 𝑆, where the instances of 𝑆 are sampled according to 𝐷 and are labeled by 𝑓, we have 𝐿<sub>𝑆</sub>(ℎ\*) = 0
````
^excerpt
