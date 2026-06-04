---
title: "Maxent - NLP PoS Example"
created: 2021-09-13T05:26:28.672-05:00
modified: 2021-09-13T05:26:28.672-05:00
parent: "[[Maximum Entropy (Maxent) Models]]"
children: []
---
let's say we have the following [[Probability Terminology|event space]]:
- <span style="white-space: pre-wrap"><code>NN    NNS   NNP   NNPS  VBZ   VBD</code></span>

and the following [[Empirical／Sample Distribution|empirical distribution]]:
- <span style="white-space: pre-wrap"><code>3     5     11    13    3     1</code></span>

maximize entropy 𝐻 (un-normalized distribution):
- <span style="white-space: pre-wrap"><code>1/𝑒   1/𝑒    1/𝑒   1/𝑒   1/𝑒   1/𝑒</code></span>

maximize entropy 𝐻 with respect to normalized probability distribution. let's add a constraint feature 𝑓<sub>0</sub> = {<code>NN, NNS, NNP, NNPS, VBZ, VBD</code>} with 𝐄\[𝑓<sub>0</sub>\] = 1:
- <span style="white-space: pre-wrap"><code>1/6   1/6   1/6   1/6   1/6   1/6</code></span>

from the empirical distribution we see that 𝑁\* are more common 𝑉\*. let's add another constraint feature 𝑓<sub>1</sub> = {<code>NN, NNS, NNP NNPS</code>} with 𝐄\[𝑓<sub>1</sub>\] = 32/36:
- <span style="white-space: pre-wrap"><code>8/36  8/36  8/36  8/36  2/36  2/36</code></span>

we also see that proper nouns are more frequent than common nouns. let's add another constraint feature 𝑓<sub>2</sub> = {<code>NNP NNPS</code>} with 𝐄\[𝑓<sub>2</sub>\] = 2/3:
- <span style="white-space: pre-wrap"><code>4/36  4/36  12/36 12/36 2/36  2/36</code></span>

we could keep refining the model (e.g. by adding a feature to distinguish singular vs plural nouns, or verb types)
