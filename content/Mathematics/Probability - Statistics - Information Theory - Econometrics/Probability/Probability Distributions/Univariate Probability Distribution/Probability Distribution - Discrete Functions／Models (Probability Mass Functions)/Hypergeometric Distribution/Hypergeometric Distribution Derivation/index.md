---
title: "Hypergeometric Distribution Derivation"
created: 2023-10-23T14:39:23.328-05:00
modified: 2023-10-23T15:05:45.215-05:00
parent: "[[Hypergeometric Distribution]]"
children: []
---
# Hypergeometric Distribution Derivation

If there are 𝑁 balls total, of which 𝐾 are successes and 𝑁-𝐾 are failures, and 𝑛 balls are randomly selected WITHOUT REPLACEMENT, then the probability that exactly 𝑘 of 𝑛 balls are success is given by:$P(X=k) = \frac{(_KC_k)(_{N-K} C_{n-k})}{_NC_n}$

To see where this formula comes from, label the balls:
- 𝑆 = {𝑅<sub>1</sub>, 𝑅<sub>2</sub>, ..., 𝑅<sub>𝐾</sub>, 𝑊<sub>𝐾+1</sub>, 𝑊<sub>𝐾+2</sub>, ..., 𝑊<sub>𝑁</sub>}

Now our sample space 𝒮 consists of all subsets of 𝑆 of size 𝑛:
- 𝒮 = {𝑠⊆𝑆 | |𝑠|=𝑛}

The size of 𝒮 is equal to the number of ways to choose 𝑛 distinct balls from a size of 𝑁:
- $𝒮 = \frac{N!}{n!(N-n)!}$

This is where the denominator comes from.

Next we need to enumerate those 𝑛-subsets in which exactly 𝑘 successes. To do this, we note that any such set would not only have exactly 𝑘 successes, but also exactly (𝑛-𝑘) failures. How many ways are there to choose 𝑘 successes from 𝑆 and 𝑛-𝑘 failures from 𝑆? There are:
- (<sub>𝐾</sub>𝐶<sub>𝑘</sub>) ways to choose 𝑘 successes
- (<sub>𝑁-𝐾</sub>𝐶<sub>𝑛-𝑘</sub>) ways to choose 𝑛-𝑘 failures

The choices above are independent from each other; thus the toal number of desired outcomes is simply the product of each individual event, so the total number of ways to have exactly 𝑘 successes from 𝑛 samples is:
- (<sub>𝐾</sub>𝐶<sub>𝑘</sub>) (<sub>𝑁-𝐾</sub>𝐶<sub>𝑛-𝑘</sub>)

The numerator probability
