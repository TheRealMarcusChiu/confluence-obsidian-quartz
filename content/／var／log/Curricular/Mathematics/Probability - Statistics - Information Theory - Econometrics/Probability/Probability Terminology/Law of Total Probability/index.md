---
title: "Law of Total Probability"
created: 2021-09-13T05:28:31.682-05:00
modified: 2024-01-18T00:59:24.707-06:00
parent: "[[Probability Terminology]]"
children: []
---
###### Law of Total Probability
- if {𝑌<sub>1</sub>, 𝑌<sub>2</sub>, ..., 𝑌<sub>𝑛</sub>} are mutually disjoint events in the [[Probability Spaces (Sample Space - Event Space - Probability Measure)|sample space]] 𝛺 and ⋃<sub>𝑖</sub>𝑌<sub>𝑖</sub> = 𝛺, then:
	- 𝐏(𝑋) = 𝛴<sub>1≤𝑖≤𝑛</sub>𝐏(𝑋,𝑌<sub>𝑖</sub>) = 𝛴<sub>1≤𝑖≤𝑛</sub>𝐏(𝑋|𝑌<sub>𝑖</sub>)𝐏(𝑌<sub>𝑖</sub>)
- in other words: the marginal probability 𝐏(𝑋) is the weighted average of the conditional probabilities 𝐏(𝑋|𝑌<sub>𝑖</sub>) weighted by 𝐏(𝑌<sub>𝑖</sub>)
- 
> [!expand]- proof
> Prove that 𝐏(𝑋) = 𝛴<sub>1≤𝑖≤𝑛</sub>𝐏(𝑋,𝑌<sub>𝑖</sub>):
> - 𝛴<sub>1≤𝑖≤𝑛</sub>𝐏(𝑋,𝑌<sub>𝑖</sub>) = 𝛴<sub>1≤𝑖≤𝑛</sub>𝐏(𝑌<sub>𝑖</sub>|𝑋)𝐏(𝑋) <font style="color: rgb(122,134,154);">\# by [[Bayes' Rule／Theorem／Law (Prior - Posterior - Distribution - Likelihood - Probability of Evidence)|baye's theorem]]</font>
> - 𝛴<sub>1≤𝑖≤𝑛</sub>𝐏(𝑋,𝑌<sub>𝑖</sub>) = 𝐏(𝑋) 𝛴<sub>1≤𝑖≤𝑛</sub>𝐏(𝑌<sub>𝑖</sub>|𝑋) <font style="color: rgb(122,134,154);">\# multiplication </font>[[Distributivity／Distributive|distributes]] <font style="color: rgb(122,134,154);">over addition</font>
> 	- 𝛴<sub>1≤𝑖≤𝑛</sub>𝐏(𝑌<sub>𝑖</sub>|𝑋) = 𝐏(⋃<sub>𝑖</sub>𝑌<sub>𝑖</sub>|𝑋) <font style="color: rgb(122,134,154);">\# because </font><font style="color: rgb(122,134,154);">{𝑌<sub>1</sub>, 𝑌<sub>2</sub>, ..., 𝑌<sub>𝑛</sub>} mutually disjoint events</font>
> 	- 𝛴<sub>1≤𝑖≤𝑛</sub>𝐏(𝑌<sub>𝑖</sub>|𝑋) = 𝐏(𝛺|𝑋) <font style="color: rgb(122,134,154);">\# because </font><font style="color: rgb(122,134,154);">⋃<sub>𝑖</sub>𝑌<sub>𝑖</sub> = 𝛺</font>
> 	- 𝛴<sub>1≤𝑖≤𝑛</sub>𝐏(𝑌<sub>𝑖</sub>|𝑋) = 1 <font style="color: rgb(122,134,154);">\# the probability of 𝛺 occurring given 𝑋 is equal to 1</font>
> - 𝛴<sub>1≤𝑖≤𝑛</sub>𝐏(𝑋,𝑌<sub>𝑖</sub>) = 𝐏(𝑋)

###### Together With [[Bayes' Rule／Theorem／Law (Prior - Posterior - Distribution - Likelihood - Probability of Evidence)|Baye's Theorem]]
- 𝐏(𝑍|𝑋) = 𝐏(𝑋|𝑍)𝐏(𝑍) / \[𝛴<sub>1≤𝑖≤𝑛</sub>𝐏(𝑋|𝑌<sub>𝑖</sub>)𝐏(𝑌<sub>𝑖</sub>)\]
