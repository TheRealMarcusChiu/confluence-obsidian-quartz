---
title: "MN／MRF - Probabilistic Inference - Easier Computation for Argmax Queries"
created: 2021-09-13T05:26:48.855-05:00
modified: 2026-05-21T15:25:51.180-05:00
parent: "[[MN／MRF - Inferring Probabilities]]"
children: []
---
###### Syntax Definition

> [!expand]- Click here to expand...
> ![[Probabilistic Inference - Syntax#^excerpt]]
# Easier Computation for Argmax Queries

[[MN／MRF - Probabilistic Inference - Easier Computation for Argmax Queries|probability queries]] such as: MAP & MPE includes something like below
- argmax<sub>𝐪∊𝐐</sub>𝐏(𝐐=𝐪|𝐄=𝒙)

computing 𝐏(𝐐=𝐪|𝐄=𝒙) in [[MN／MRF - Probabilistic Inference - Easier Computation for Argmax Queries|Markov Networks]] involves <font style="color: rgb(128,128,128);">∏<sub>𝑐∊</sub><sub><strong>𝐶 </strong></sub>\[ 𝜙<sub>𝑐</sub>(𝒙<sub>𝑐</sub>) \]</font>. Which is often a problem in computers because it overflows when multiplying several big numbers. So instead we use the 𝑙𝑜𝑔 function to keep the numbers in range.
- <font style="color: rgb(128,0,0);"><strong>𝑙𝑜𝑔(</strong></font>∏<sub>𝑐∊</sub><sub><strong>𝐶 </strong></sub>\[ 𝜙<sub>𝑐</sub>(𝒙<sub>𝑐</sub>) \]<font style="color: rgb(128,0,0);"><strong>)</strong></font> = ∑<sub>𝑐∊</sub><sub><strong>𝐶</strong></sub>\[ <font style="color: rgb(128,0,0);"><strong>𝑙𝑜𝑔(</strong></font>𝜙<sub>𝑐</sub>(𝒙<sub>𝑐</sub>)<font style="color: rgb(128,0,0);"><strong>)</strong></font> \] \# by definition of 𝑙𝑜𝑔

therefore we apply this to argmax<sub>𝐪∊𝐐</sub>𝐏(𝐐=𝐪|𝐄=𝒙), and get:
- argmax<sub>𝐪∊𝐐</sub>𝐏(𝐐=𝐪|𝐄=𝒙) = argmax<sub>𝐪∊𝐐</sub>∑<sub>𝐻<sub>1</sub></sub> ... ∑<sub>𝐻<sub>𝑡</sub></sub><strong>\[</strong>∑<sub>𝑐∊</sub><sub><strong>𝐶</strong></sub>\[ <font style="color: rgb(128,0,0);"><strong>𝑙𝑜𝑔(</strong></font>𝜙<sub>𝑐</sub>(𝒙<sub>𝑐</sub>)<font style="color: rgb(128,0,0);"><strong>)</strong></font> \]<strong> \]</strong>

how we got this is shown below:

> [!expand]- Click here to expand...
> - argmax<sub>𝐪∊𝐐</sub>𝐏(𝐐=𝐪|𝐄=𝒙) = argmax<sub>𝐪∊𝐐</sub>\[ 𝐏(𝐐=𝐪, 𝐄=𝒙) / 𝐏(𝐄=𝒙) \] <font style="color: rgb(128,128,128);">\#</font> [[MN／MRF - Probabilistic Inference - Easier Computation for Argmax Queries|bayes rule]]
> - argmax<sub>𝐪∊𝐐</sub>𝐏(𝐐=𝐪|𝐄=𝒙) = argmax<sub>𝐪∊𝐐</sub>𝐏(𝐐=𝐪, 𝐄=𝒙) <font style="color: rgb(128,128,128);">\# 𝐏(𝐄=𝒙) is constant, <font style="color: rgb(128,128,128);">does not change the </font><font style="color: rgb(128,128,128);">argmax</font></font>
> - argmax<sub>𝐪∊𝐐</sub>𝐏(𝐐=𝐪|𝐄=𝒙) = argmax<sub>𝐪∊𝐐</sub>𝐏(𝑄<sub>1</sub>, ..., 𝑄<sub>𝑟</sub>, 𝐸<sub>1</sub>, ..., 𝐸<sub>𝑠</sub>) <font style="color: rgb(128,128,128);">\# see syntax</font>
> - argmax<sub>𝐪∊𝐐</sub>𝐏(𝐐=𝐪|𝐄=𝒙) = argmax<sub>𝐪∊𝐐</sub>∑<sub>𝐻<sub>1</sub></sub> ... ∑<sub>𝐻<sub>𝑡</sub></sub> 𝐏(𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>) <font style="color: rgb(128,128,128);">\# see syntax</font>
> - argmax<sub>𝐪∊𝐐</sub>𝐏(𝐐=𝐪|𝐄=𝒙) = argmax<sub>𝐪∊𝐐</sub> ∑<sub>𝐻<sub>1</sub></sub> ... ∑<sub>𝐻<sub>𝑡</sub></sub> 𝐏(𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>)
> - argmax<sub>𝐪∊𝐐</sub>𝐏(𝐐=𝐪|𝐄=𝒙) = argmax<sub>𝐪∊𝐐</sub>∑<sub>𝐻<sub>1</sub></sub> ... ∑<sub>𝐻<sub>𝑡</sub></sub> <strong>\[</strong> (1/𝘡) ∏<sub>𝑐∊</sub><sub><strong>𝐶 </strong></sub>\[ 𝜙<sub>𝑐</sub>(𝒙<sub>𝑐</sub>) \] <strong>\]</strong> <font style="color: rgb(128,128,128);">\#</font> [[MN／MRF - Probabilistic Inference - Easier Computation for Argmax Queries|markov network's factorization of joint probabilities]]
> - argmax<sub>𝐪∊𝐐</sub>𝐏(𝐐=𝐪|𝐄=𝒙) = argmax<sub>𝐪∊𝐐</sub>∑<sub>𝐻<sub>1</sub></sub> ... ∑<sub>𝐻<sub>𝑡</sub></sub> <strong>\[</strong> ∏<sub>𝑐∊</sub><sub><strong>𝐶 </strong></sub>\[ 𝜙<sub>𝑐</sub>(𝒙<sub>𝑐</sub>) \] <strong>\]</strong> <font style="color: rgb(128,128,128);">\# (1/𝘡) is constant, <font style="color: rgb(128,128,128);">does not change the </font><font style="color: rgb(128,128,128);">argmax</font></font>
> - argmax<sub>𝐪∊𝐐</sub>𝐏(𝐐=𝐪|𝐄=𝒙) = argmax<sub>𝐪∊𝐐</sub>∑<sub>𝐻<sub>1</sub></sub> ... ∑<sub>𝐻<sub>𝑡</sub></sub><strong>\[</strong><font style="color: rgb(128,0,0);"><strong>𝑙𝑜𝑔(</strong></font>∏<sub>𝑐∊</sub><sub><strong>𝐶</strong></sub>\[ 𝜙<sub>𝑐</sub>(𝒙<sub>𝑐</sub>) \]<font style="color: rgb(128,0,0);"><strong>) <font style="color: rgb(51,51,51);">\]</font> </strong><font style="color: rgb(128,128,128);">\# <strong>𝑙𝑜</strong>𝑔 function does not change the argmax</font></font>
> - argmax<sub>𝐪∊𝐐</sub>𝐏(𝐐=𝐪|𝐄=𝒙) = argmax<sub>𝐪∊𝐐</sub>∑<sub>𝐻<sub>1</sub></sub> ... ∑<sub>𝐻<sub>𝑡</sub></sub><strong>\[</strong>∑<sub>𝑐∊</sub><sub><strong>𝐶</strong></sub>\[ <font style="color: rgb(128,0,0);"><strong>𝑙𝑜𝑔(</strong></font>𝜙<sub>𝑐</sub>(𝒙<sub>𝑐</sub>)<font style="color: rgb(128,0,0);"><strong>)</strong></font> \]<strong> \] </strong><font style="color: rgb(128,128,128);">\# by definition of <strong>𝑙𝑜𝑔</strong></font>
