---
title: "Language Model - Extrinsic／Intrinsic Evaluation (Perplexity)"
created: 2020-08-23T16:54:20.328-05:00
modified: 2023-08-04T13:39:58.373-05:00
parent: "[[Language Models]]"
children: []
---
- extrinsic evaluation
- intrinsic evaluation
	- <strong>perplexity</strong> - the probability of the test-set, normalized by the number of words

# Extrinsic (in-vivo) Evaluation

extrinsic evaluation is the best for comparing 2 language models 𝐴 and 𝐵:
- put each model in a task (spelling corrector, speech recognizer, etc)
- get the accuracy of 𝐴 and 𝐵
	- how many misspelled words were corrected properly
	- how many words were translated correctly
- compare the accuracy of 𝐴 and 𝐵

downside is time-consuming
# Intrinsic Evaluation - Perplexity
- 𝐏𝐏(𝑊) = 𝐏(𝑤<sub>1</sub>, ..., 𝑤<sub>𝑛</sub>)<sup>-(1/𝑛)</sup>
- 𝐏𝐏(𝑊) = \[𝛱<sub>1≤𝑖≤𝑛</sub>𝐏(𝑤<sub>𝑖</sub>|𝑤<sub>1</sub>, ..., 𝑤<sub>𝑖-1</sub>)\]<sup>-(1/𝑛)</sup><font style="color: rgb(128,128,128);">\#</font> [[Probability (Product Rule - Chain Rule)|chain rule]]
- 𝐏𝐏(𝑊) = \[𝛱<sub>1≤𝑖≤𝑛</sub>𝐏(𝑤<sub>𝑖</sub>|𝑤<sub>𝑖-1</sub>)\]<sup>-(1/𝑛)</sup><font style="color: rgb(128,128,128);">\#</font> [[N-Grams (Monograms／Unigrams - Bigrams)|bi-grams]]

minimizing perplexity ≈ maximizing probability

perplexity:
- bad approximation unless the test-data looks just like the training-data
- is related to the weighted branching factor

# Resources
- [Dan Jurafsky - Video Lecture](https://www.youtube.com/watch?v=b6nwdc_fGfA&list=PLQiyVNMpDLKnZYBTUOlSI9mi9wAErFtFm&index=14)
