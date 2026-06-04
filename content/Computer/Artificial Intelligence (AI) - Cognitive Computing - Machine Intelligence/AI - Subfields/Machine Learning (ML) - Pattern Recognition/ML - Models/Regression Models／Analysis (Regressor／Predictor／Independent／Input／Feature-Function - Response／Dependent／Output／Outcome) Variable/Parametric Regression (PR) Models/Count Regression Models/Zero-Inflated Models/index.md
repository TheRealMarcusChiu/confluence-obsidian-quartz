---
title: "Zero-Inflated Models"
created: 2020-09-30T19:28:43.435-05:00
modified: 2020-09-30T20:06:49.432-05:00
parent: "[[Count Regression Models]]"
children: []
---
###### Zero-Inflated Models
- Your count data might have too many zeros to follow the [[Poisson Distribution|Poisson distribution]]. In other words, there are more zeros than the Poisson regression predicts. Zero-inflated models assume that two separate processes work together to produce the excessive zeros. One process determines whether there are zero events or more than zero events. The other is the Poisson process that determines how many events occur, some of which some can be zero. An example makes this clearer
- Suppose park rangers count the number of fish caught by each park visitor as they exit the park. A zero-inflated model might be appropriate for this scenario because there are two processes for catching zero fish:
	- Some park visitors catch zero fish because they did not go fishing.
	- Other visitors went fishing, and some of these people caught zero fish
