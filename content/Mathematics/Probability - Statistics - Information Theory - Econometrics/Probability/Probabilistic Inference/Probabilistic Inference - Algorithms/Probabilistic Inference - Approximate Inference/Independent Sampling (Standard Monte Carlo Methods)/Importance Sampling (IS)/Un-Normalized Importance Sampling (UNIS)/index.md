---
title: "Un-Normalized Importance Sampling (UNIS)"
created: 2025-09-28T14:44:11.681-05:00
modified: 2025-09-28T14:45:08.060-05:00
parent: "[[Importance Sampling (IS)]]"
children: []
---
###### Un-Normalized Importance Sampling (UNIS)
````excerpt
- a version of [[Importance Sampling (IS)]]
````
^excerpt

# UNIS - General Formula
- 𝐄<sub>𝐏</sub>\[𝑓(𝑋)\] ≈ (1/𝑛) 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑓(𝑥<sub>𝑖</sub>)·𝐏(𝑥<sub>𝑖</sub>)/𝑸(𝑥<sub>𝑖</sub>)\]
- <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">𝐄<sub>𝐏</sub>\[𝑓(𝑋)\] ≈ (1/𝑛) 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑓(𝑥<sub>𝑖</sub>)·𝑤(𝑥<sub>𝑖</sub>)\]</font></font>

where
- 𝑛 is the number of samples generated
- 𝑥<sub>𝑖</sub>is a sample generated from 𝑸 distribution
- 𝑤(𝑥<sub>𝑖</sub>) = 𝐏(𝑥<sub>𝑖</sub>)/𝑸(𝑥<sub>𝑖</sub>) is the importance weight

# UNIS - Determining [[Arithmetic Mean - Average - Location - Expected Value - Expectation Operator|Expectation]] of a Distribution

assume we have a [[Probability Distributions|probability distribution]] 𝐏(𝑥) and we want to compute the [[Arithmetic Mean - Average - Location - Expected Value - Expectation Operator|expected value]] of 𝐏(𝑥) (i.e. 𝐄<sub>𝐏</sub>\[𝑋\]).

we could use [[Simple Sampling - Simple Monte Carlo|simple sampling]] to approximate 𝐄<sub>𝐏</sub>\[𝑋\]:
- 𝐄<sub>𝐏</sub>\[𝑋\] = ∫𝑥·𝐏(𝑥) 𝑑𝑥
- 𝐄<sub>𝐏</sub>\[𝑋\] ≈ (1/𝑛) 𝛴<sub>1≤𝑖≤𝑛</sub> \[𝑥<sub>𝑖</sub>\]

[[Simple Sampling - Simple Monte Carlo|simple sampling]] assumes it is easy generating sample 𝑥<sub>𝑖</sub> from probability distribution 𝐏(𝑥)

what if it is hard or impossible to sample from 𝐏(𝑥)? This is where un-normalized importance sampling comes into play!

we could sample from other probability distribution 𝑸(𝑥) that is easy to sample from. Now we have 2 probability distributions:
- 𝐏(𝑥) - a distribution hard to sample from
- 𝑸(𝑥) - a distribution easy to sample from (we call 𝑸 the proposal/sampling distribution)
	- we require 𝑸(𝑥) to have a property such that whenever 𝐏(𝑥) \> 0, then 𝑸(𝑥) \> 0

then, to compute 𝐄<sub>𝐏</sub>\[𝑋\]:
- 𝐄<sub>𝐏</sub>\[𝑋\] = ∫𝑥·𝐏(𝑥) 𝑑𝑥
- 𝐄<sub>𝐏</sub>\[𝑋\] = ∫𝑥·\[𝐏(𝑥)/𝑸(𝑥)\]·𝑸(𝑥) 𝑑𝑥
- 𝐄<sub>𝐏</sub>\[𝑋\] = 𝐄<sub>𝑸</sub>\[𝑋·\[𝐏(𝑋)/𝑸(𝑋)\]\]
- 𝐄<sub>𝐏</sub>\[𝑋\] ≈ (1/𝑛) 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑥<sub>𝑖</sub>·𝐏(𝑥<sub>𝑖</sub>)/𝑸(𝑥<sub>𝑖</sub>)\] <font style="color: rgb(128,128,128);">\# where</font>
	- <font style="color: rgb(128,128,128);">𝑛 is the number of samples generated</font>
	- <font style="color: rgb(128,128,128);">𝑥<sub>𝑖</sub>is a sample generated from 𝑸 distribution</font>
- <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">𝐄<sub>𝐏</sub>\[𝑋\] ≈ (1/𝑛) 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑥<sub>𝑖</sub>·𝑤(𝑥<sub>𝑖</sub>)\]</font> \# 𝐏(𝑥<sub>𝑖</sub>)/𝑸(𝑥<sub>𝑖</sub></font><font style="color: rgb(128,128,128);">) = 𝑤(𝑥<sub>𝑖</sub>) is</font><font style="color: rgb(128,128,128);"> the importance weight</font>

for un-normalized importance sampling we assume:
- each 𝑥<sub>𝑖</sub> sample can be easily generated from proposal distribution 𝑸
- computation of importance weights 𝑤(𝑥<sub>𝑖</sub>) = 𝐏(𝑥<sub>𝑖</sub>)/𝑸(𝑥<sub>𝑖</sub>) is easy
	- computation of 𝐏(𝑥<sub>𝑖</sub>) is easy
	- computation of 𝑸(𝑥<sub>𝑖</sub>) is easy

# Resources

![](https://www.youtube.com/watch?v=V8f8ueBc9sY)

![](https://www.youtube.com/watch?v=F5PdIQxMA28)

![](https://www.youtube.com/watch?v=S3LAOZxGcnk)

![](https://www.youtube.com/watch?v=3Mw6ivkDVZc)
