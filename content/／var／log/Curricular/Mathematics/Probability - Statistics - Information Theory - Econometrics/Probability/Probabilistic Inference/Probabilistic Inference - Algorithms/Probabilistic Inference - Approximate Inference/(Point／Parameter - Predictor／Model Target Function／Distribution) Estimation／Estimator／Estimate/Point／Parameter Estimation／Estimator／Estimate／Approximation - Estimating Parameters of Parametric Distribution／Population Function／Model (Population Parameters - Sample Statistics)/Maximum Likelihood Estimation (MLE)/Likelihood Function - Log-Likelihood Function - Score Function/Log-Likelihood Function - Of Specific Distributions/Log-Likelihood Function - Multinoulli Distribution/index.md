---
title: "Log-Likelihood Function - Multinoulli Distribution"
created: 2021-09-13T05:28:03.086-05:00
modified: 2021-12-21T16:22:44.124-06:00
parent: "[[Log-Likelihood Function - Of Specific Distributions]]"
children: []
---
Let {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>} be samples taken from a [[Multinoulli／Categorical Distribution - Generalized Bernoulli Distribution|Multinoulli(𝑝1, ..., 𝑝𝑘) Distribution]]

the generic [[Likelihood Function - Log-Likelihood Function - Score Function|log-likelihood function]] is as follows
- 𝐿𝐿(𝜃) = 𝛴<sub>1≤𝑖≤𝑛</sub> 𝑙𝑛\[𝑓(𝑋<sub>𝑖</sub>|𝜃)\]

we need to replace 𝑓(𝑋<sub>𝑖</sub>|𝜃) with the probability mass function of the [[Multinoulli／Categorical Distribution - Generalized Bernoulli Distribution|Multinoulli(𝑝1, ..., 𝑝𝑘) Distribution]] which is as follows
- 𝑓(𝑋<sub>𝑖</sub>|𝑝<sub>1</sub>, ..., 𝑝<sub>𝑘</sub>) = 𝑝<sub>1</sub><sup>\[𝑥=𝑐𝑙𝑎𝑠𝑠-1\]</sup>··· 𝑝<sub>𝑘</sub><sup>\[𝑥=𝑐𝑙𝑎𝑠𝑠-𝑘\]</sup> <font style="color: rgb(128,128,128);">\# for 𝑥 = 1, 2, ..., or 𝑘</font>

and
- 𝜃 = {𝑝<sub>1</sub>, ..., 𝑝<sub>𝑘</sub>}

therefore, the log-likelihood function becomes:
- 𝐿𝐿(𝜃) = 𝛴<sub>1≤𝑖≤𝑛</sub> 𝑙𝑛\[𝑓(𝑋<sub>𝑖</sub>|𝜃)\]
- 𝐿𝐿(𝜆) = 𝛴<sub>1≤𝑖≤𝑛</sub> 𝑙𝑛\[𝑓(𝑋<sub>𝑖</sub>|𝑝<sub>1</sub>, ..., 𝑝<sub>𝑘</sub>)\]
- 𝐿𝐿(𝜆) = 𝛴<sub>1≤𝑖≤𝑛</sub> 𝑙𝑛\[<font style="color: rgb(128,0,0);">𝑝<sub>1</sub></font><sup><font style="color: rgb(128,0,0);">\[𝑥<sub>𝑖</sub>=𝑐𝑙𝑎𝑠𝑠-1\]</font></sup>\*<sup></sup>··· \* <font style="color: rgb(0,128,0);">𝑝<sub>𝑘</sub><sup>\[𝑥<sub>𝑖</sub>=𝑐𝑙𝑎𝑠𝑠-𝑘\]</sup></font>\]
- 𝐿𝐿(𝜆) = 𝛴<sub>1≤𝑖≤𝑛</sub>\[<font style="color: rgb(128,0,0);">𝑙𝑛(𝑝<sub>1</sub><sup>\[𝑥<sub>𝑖</sub>=𝑐𝑙𝑎𝑠𝑠-1\]</sup>)</font> + ... + <font style="color: rgb(0,128,0);">𝑙𝑛(𝑝<sub>𝑘</sub><sup>\[𝑥<sub>𝑖</sub>=𝑐𝑙𝑎𝑠𝑠-𝑘\]</sup>)</font>\]
- 𝐿𝐿(𝜆) = 𝛴<sub>1≤𝑖≤𝑛</sub>\[<font style="color: rgb(128,0,0);">\[𝑥<sub>𝑖</sub>=𝑐𝑙𝑎𝑠𝑠-1\]</font><font style="color: rgb(128,0,0);">·𝑙𝑛(<font style="color: rgb(128,0,0);">𝑝</font><sub>1</sub>)</font> + ... + <font style="color: rgb(0,128,0);">\[𝑥<sub>𝑖</sub>=𝑐𝑙𝑎𝑠𝑠-𝑘\]·𝑙𝑛(𝑝<sub>𝑘</sub>)</font>\]
- 𝐿𝐿(𝜆) = <font style="color: rgb(128,0,0);">𝛴<sub>1≤𝑖≤𝑛</sub>\[<font style="color: rgb(128,0,0);">\[𝑥<sub>𝑖</sub>=𝑐𝑙𝑎𝑠𝑠-1\]</font><font style="color: rgb(128,0,0);">·𝑙𝑛(𝑝<sub>1</sub>)</font>\]</font> + <font style="color: rgb(0,128,0);">𝛴<sub>1≤𝑖≤𝑛</sub>\[<font style="color: rgb(0,128,0);">\[</font><font style="color: rgb(0,128,0);">𝑥</font><sub>𝑖</sub><font style="color: rgb(0,128,0);">=𝑐𝑙𝑎𝑠𝑠-𝑘\]</font><font style="color: rgb(0,128,0);">·𝑙𝑛(𝑝<sub>𝑘</sub>)</font>\]</font>
- 𝐿𝐿(𝜆) = <font style="color: rgb(128,0,0);">𝑛𝑢𝑚-𝑠𝑎𝑚𝑝𝑙𝑒𝑠-𝑤𝑖𝑡𝘩(𝑐𝑙𝑎𝑠𝑠-1)</font><font style="color: rgb(128,0,0);">·𝑙𝑛(<font style="color: rgb(128,0,0);">𝑝</font><sub>1</sub>)</font> + ... + <font style="color: rgb(0,128,0);">𝑛𝑢𝑚-𝑠𝑎𝑚𝑝𝑙𝑒𝑠-𝑤𝑖𝑡𝘩(𝑐𝑙𝑎𝑠𝑠-𝑘)</font><font style="color: rgb(0,128,0);">·𝑙𝑛(<font style="color: rgb(0,128,0);">𝑝</font><sub>𝑘</sub>)</font>
