---
title: "Statistical-Based PoS Tagging - Using Hidden Markov Model (HMM)"
created: 2020-10-01T23:04:06.439-05:00
modified: 2020-10-12T13:53:42.064-05:00
parent: "[[Statistical-Based PoS Tagging]]"
children: []
---
given a sentence of words {𝑤<sub>1</sub>, ..., 𝑤<sub>𝑛</sub>} we want to assign [[Part of Speech (PoS)|PoS Tags]] to each word {𝑡<sub>1</sub>, ..., 𝑡<sub>𝑛</sub>} such that the probability 𝐏(𝑡<sub>1</sub>, ..., 𝑡<sub>𝑛</sub>|𝑤<sub>1</sub>, ..., 𝑤<sub>𝑛</sub>) is the highest:
- 𝑡̂<sub>1</sub>, ..., 𝑡̂<sub>𝑛</sub>= 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝑡<sub>1</sub>, ..., 𝑡<sub>𝑛</sub></sub>\[𝐏(𝑡<sub>1</sub>, ..., 𝑡<sub>𝑛</sub>|𝑤<sub>1</sub>, ..., 𝑤<sub>𝑛</sub>)\]
- 𝑡̂<sub>1</sub>, ..., 𝑡̂<sub>𝑛</sub>= 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝑡<sub>1</sub>, ..., 𝑡<sub>𝑛</sub></sub>\[𝐏(𝑤<sub>1</sub>, ..., 𝑤<sub>𝑛</sub>|𝑡<sub>1</sub>, ..., 𝑡<sub>𝑛</sub>)𝐏(𝑡<sub>1</sub>, ..., 𝑡<sub>𝑛</sub>)/𝐏(𝑤<sub>1</sub>, ..., 𝑤<sub>𝑛</sub>)\] <font style="color: rgb(128,128,128);">\# via </font>[[Bayes' Rule／Theorem／Law (Prior - Posterior - Distribution - Likelihood - Probability of Evidence)|Bayes Rule]]
- 𝑡̂<sub>1</sub>, ..., 𝑡̂<sub>𝑛</sub>= 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝑡<sub>1</sub>, ..., 𝑡<sub>𝑛</sub></sub>\[<font style="color: rgb(153,204,255);">𝐏(𝑤<sub>1</sub>, ..., 𝑤<sub>𝑛</sub>|𝑡<sub>1</sub>, ..., 𝑡<sub>𝑛</sub>)</font><font style="color: rgb(204,153,255);">𝐏(𝑡<sub>1</sub>, ..., 𝑡<sub>𝑛</sub>)</font>\] <font style="color: rgb(128,128,128);">\# 𝐏(𝑤<sub>1</sub>, ..., 𝑤<sub>𝑛</sub>) is a constant w.r.t. the argmax values</font>
- 𝑡̂<sub>1</sub>, ..., 𝑡̂<sub>𝑛</sub>= 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝑡<sub>1</sub>, ..., 𝑡<sub>𝑛</sub></sub>\[<font style="color: rgb(153,204,255);">𝛱<sub>1≤𝑖≤𝑛</sub>𝐏(𝑤<sub>𝑖</sub>|𝑡<sub>𝑖</sub></font><font style="color: rgb(153,204,255);">)<font style="color: rgb(51,51,51);"> · </font><font style="color: rgb(204,153,255);">𝐏(𝑡<sub>1</sub>)·\[𝛱<sub>2≤𝑖≤𝑛</sub>𝐏(𝑡<sub>𝑖</sub>|𝑡<sub>𝑖-1</sub>)\]</font></font>\]
	- <font style="color: rgb(153,204,255);">𝐏(𝑤<sub>1</sub>, ..., 𝑤<sub>𝑛</sub>|𝑡<sub>1</sub>, ..., 𝑡<sub>𝑛</sub>) ≈ 𝛱<sub>1≤𝑖≤𝑛</sub>𝐏(𝑤<sub>𝑖</sub>|𝑡<sub>𝑖</sub>) </font><font style="color: rgb(128,128,128);">\# 𝑤<sub>𝑖</sub>is [[Probability Independence (Marginal Independence - Conditional Independence)|conditionally independent]] from all else when given 𝑡<sub>𝑖</sub></font>
	- <font style="color: rgb(204,153,255);">𝐏(𝑡<sub>1</sub>, ..., 𝑡<sub>𝑛</sub>) ≈ 𝐏(𝑡<sub>1</sub>)·\[𝛱<sub>2≤𝑖≤𝑛</sub>𝐏(𝑡<sub>𝑖</sub>|𝑡<sub>𝑖-1</sub>)\] </font><font style="color: rgb(128,128,128);">\# 𝑡<sub>𝑖</sub> is conditionally independent from all else when given 𝑡<sub>𝑖-1</sub></font>
- 𝑡̂<sub>1</sub>, ..., 𝑡̂<sub>𝑛</sub>= 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝑡<sub>1</sub>, ..., 𝑡<sub>𝑛</sub></sub>\[<font style="color: rgb(204,153,255);">𝐏(𝑡<sub>1</sub></font><font style="color: rgb(204,153,255);">)<font style="color: rgb(153,204,255);">𝐏(𝑤<sub>1</sub>|𝑡<sub>1</sub></font><font style="color: rgb(153,204,255);">) </font></font><font style="color: rgb(153,204,255);"><font style="color: rgb(51,51,51);">· </font><font style="color: rgb(204,153,255);"><font style="color: rgb(51,51,51);">\[𝛱<sub>2≤𝑖≤𝑛</sub></font>𝐏(𝑡<sub>𝑖</sub>|𝑡<sub>𝑖-1</sub>)<font style="color: rgb(153,204,255);">𝐏(𝑤<sub>𝑖</sub>|𝑡<sub>𝑖</sub></font><font style="color: rgb(153,204,255);">)</font><font style="color: rgb(51,51,51);">\]</font></font></font>\]

with respect to [[Hidden Markov Models (HMM)]]:
- <font style="color: rgb(204,153,255);">𝐏(𝑡<sub>𝑖</sub>|𝑡<sub>𝑖-1</sub>)</font> - are transition probabilities (in our case tag transition probabilities)
- <font style="color: rgb(153,204,255);">𝐏(𝑤<sub>𝑖</sub>|𝑡<sub>𝑖</sub></font><font style="color: rgb(153,204,255);">)</font> - are emission probabilities (in our case word emission probabilities)

### Learning Transition & Emission Probabilities From Training Corpus

see: Learning/Training Section of [[Hidden Markov Models (HMM)]]
