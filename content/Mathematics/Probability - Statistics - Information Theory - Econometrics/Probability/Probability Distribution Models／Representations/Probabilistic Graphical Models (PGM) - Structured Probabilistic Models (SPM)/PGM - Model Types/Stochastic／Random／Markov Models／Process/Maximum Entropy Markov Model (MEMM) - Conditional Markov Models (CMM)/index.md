---
title: "Maximum Entropy Markov Model (MEMM) - Conditional Markov Models (CMM)"
created: 2021-09-13T05:27:07.932-05:00
modified: 2021-09-13T05:27:07.932-05:00
parent: "[[Stochastic／Random／Markov Models／Process]]"
children:
  - "[[MEMM - Label Bias Problem - Causal-Competition Biases]]"
---
###### Maximum Entropy Markov Model (MEMM) - <strong>Conditional Markov Models (CMM)</strong>
- classifies a sequence of hidden variables <font style="color: rgb(255,0,0);">𝒀</font> given a set of observed variables <strong>𝑿</strong>
- an extension of [[Logistic (Logit) Regression Model|logistic regression model]] that classifies a single hidden variable <font style="color: rgb(255,0,0);">𝑌</font> given a set of observed variables <strong>𝑿</strong>
- a type of [[ML - Generative／Joint vs Discriminative／Conditional Models|discriminative model]]
- suffers from the [[MEMM - Label Bias Problem - Causal-Competition Biases|label bias problem]] (solved with [[Conditional／Discriminative Random Fields (CRF)|Conditional Random Field]])

### MEMM - Variants
> [!tabs]
>
> === 1ˢᵗ Order Sequential
>
> ###### 1ˢᵗ Order Sequential MEMM - Components
>
> ```merge-table
> {
>   "rows": [
>     [
>       "- <strong>𝑿 </strong>= \\[𝑋<sub>1</sub>, ..., 𝑋<sub>𝑇</sub>\\] are SEQUENCE of observed variables\n- each variable 𝑋<sub>𝑖</sub>can be assigned one of 𝑞 values\n- <font style=\"color: rgb(255,0,0);\">𝒀 = \\[𝑌<sub>1</sub>, ..., 𝑌<sub>𝑇</sub></font><font style=\"color: rgb(255,0,0);\">\\]</font> are SEQUENCE of hidden state variables (to be predicted)\n- each variable 𝑌<sub>𝑖</sub>can be assigned one of 𝑝 values\n\nestimate parameters of the following [[Conditional Probability Distribution (CPD)|conditional probability distributions]] (see diagram):\n- 𝐏(𝑌<sub>1</sub>|𝑋<sub>1</sub>)\n- 𝐏(𝑌<sub>2</sub>|𝑌<sub>1</sub>𝑋<sub>2</sub>)\n- ...\n- 𝐏(𝑌<sub>𝑇</sub>|𝑌<sub>𝑇-1</sub>𝑋<sub>𝑇</sub>)",
>       "![[Maximum Entropy Markov Model (MEMM) - Conditional Markov Models (CMM)/maximum-entropy-markov-model-serial.png|301]]"
>     ]
>   ]
> }
> ```
>
> 1ˢᵗ Order Sequential MEMM formula:
> - 𝐏(𝑌<sub>𝑡</sub>=𝑦<sub>𝑡</sub>|𝑌<sub>𝑡-1</sub>=𝑦<sub>𝑡-1</sub>,𝑋<sub>𝑡</sub>=𝑥<sub>𝑡</sub>;𝜽) = 𝑒<sup>𝛴<sub>0≤𝑗≤𝑘</sub>\[𝜃<sub>𝑗</sub>·𝑓<sub>𝑗</sub>(𝑌<sub>𝑡</sub>=𝑦<sub>𝑡</sub>,𝑋<sub>𝑡</sub>=𝑥<sub>𝑡</sub>,𝑌<sub>𝑡-1</sub>=𝑦<sub>𝑡-1</sub>)\]</sup> / 𝑍(𝑋<sub>𝑡</sub>=𝑥<sub>𝑡</sub>,𝑌<sub>𝑡-1</sub>=𝑦<sub>𝑡-1</sub>)
>
> where:
> - 𝑍(𝑋<sub>𝑡</sub>=𝑥<sub>𝑡</sub>,𝑌<sub>𝑡-1</sub>=𝑦<sub>𝑡-1</sub>) = 𝛴<sub>0≤𝑖≤𝑐</sub>\[𝑒<sup>𝛴<sub>0≤𝑖≤𝑘</sub>\[𝜃<sub>𝑗</sub>·𝑓<sub>𝑗</sub>(𝑌<sub>𝑡</sub>=𝑖,𝑌<sub>𝑡-1</sub>=𝑦<sub>𝑡-1</sub>,𝑿=𝒙)\]</sup>\]
> - derived from [[Multinomial／N-nary Logistic Regression (MLR)|multinomial logistic regression]] formula
> > [!expand]- Click here to expand...
> > [[Multinomial／N-nary Logistic Regression (MLR)|multinomial logistic regression]] formula (𝑌 = \[0, ..., 𝑐\]):
> > - 𝐏(𝑌=𝑦|𝑿=𝒙;𝜽) = 𝑒<sup>𝛴<sub>0≤𝑗≤𝑘</sub>\[𝜃<sub>𝑗</sub>·𝑓<sub>𝑗</sub>(𝑌=𝑦,𝑿=𝒙)\]</sup> / 𝑍(𝑿=𝒙)
> >
> > where
> > - 𝑍(𝑿=𝒙) = 𝛴<sub>0≤𝑖≤𝑐</sub>\[𝑒<sup>𝛴<sub>0≤𝑗≤𝑘</sub>\[𝜃<sub>𝑗</sub>·𝑓<sub>𝑗</sub>(𝑌=𝑖,𝑿=𝒙)\]</sup>\]
>
> ###### 1ˢᵗ Order Sequential MEMM - Training
>
> > [!expand]- Click here to expand...
> > learn the state transition probability matrix 𝐏(𝑌<sub>𝑡</sub>=𝑦<sub>𝑡</sub>|𝑌<sub>𝑡-1</sub>=𝑦<sub>𝑡-1</sub>,𝑋<sub>𝑡</sub>=𝑥<sub>𝑡</sub>;𝜽)
> > - since:
> > 	- 𝑌<sub>𝑖</sub>can be assigned one of 𝑝 possible state values
> > 	- 𝑋<sub>𝑖</sub>can be assigned one of 𝑞 possible values
> > - the state transition probability matrix will be of size 𝑝\*𝑞→ 𝑝 (i.e. 𝑝\*𝑞 by 𝑝 matrix)
> >
> > equivalently, the MEMM trains one [[Logistic (Logit) Regression Model|logistic regression model]] per state 𝑦<sub>𝑡-1</sub>: 𝐏<sub>𝑌<sub>𝑡-1</sub>=𝑦<sub>𝑡-1</sub></sub>(𝑌<sub>𝑡</sub>=𝑦<sub>𝑡</sub>|𝑋<sub>𝑡</sub>=𝑥<sub>𝑡</sub>;𝜽), normalized locally
> ###### 1ˢᵗ Order Sequential MEMM - Testing
>
> > [!expand]- Click here to expand...
> > a slightly modified Viterbi Algorithm is used (similar to [[Hidden Markov Models (HMM)|Hidden Markov Models]])
>
> === 2ⁿᵈ Order Sequential
>
> ###### 2ⁿᵈ Order Sequential MEMM - Components
>
> ```merge-table
> {
>   "rows": [
>     [
>       "- <strong>𝑿 </strong>= \\[𝑋<sub>1</sub>, ..., 𝑋<sub>𝑇</sub>\\] are SEQUENCE of observed variables\n- each variable 𝑋<sub>𝑖</sub>can be assigned one of 𝑞 values\n- <font style=\"color: rgb(255,0,0);\">𝒀 = \\[𝑌<sub>1</sub>, ..., 𝑌<sub>𝑇</sub></font><font style=\"color: rgb(255,0,0);\">\\]</font> are SEQUENCE of hidden state variables (to be predicted)\n- each variable 𝑌<sub>𝑖</sub>can be assigned one of 𝑝 values\n\nestimate parameters of the following [[Conditional Probability Distribution (CPD)|conditional probability distributions]] (see diagram):\n- 𝐏(𝑌<sub>1</sub>|𝑋<sub>1</sub>)\n- 𝐏(𝑌<sub>2</sub>|𝑌<sub>1</sub>𝑋<sub>2</sub>)\n- ...\n- 𝐏(𝑌<sub>𝑇</sub>|<font style=\"color: rgb(204,153,255);\">𝑌<sub>𝑇-2</sub></font>𝑌<sub>𝑇-1</sub>𝑋<sub>𝑇</sub>)",
>       "![[Maximum Entropy Markov Model (MEMM) - Conditional Markov Models (CMM)/maximum-entropy-markov-model-serial-second-order.png|301]]"
>     ]
>   ]
> }
> ```
>
> 2ⁿᵈ Order Sequential MEMM formula:
> - 𝐏(𝑌<sub>𝑡</sub>=𝑦<sub>𝑡</sub>|<font style="color: rgb(204,153,255);">𝑌<sub>𝑡-2</sub>=𝑦<sub>𝑡-2</sub></font>,𝑌<sub>𝑡-1</sub>=𝑦<sub>𝑡-1</sub>,𝑋<sub>𝑡</sub>=𝑥<sub>𝑡</sub>;𝜽) = 𝑒<sup>𝛴<sub>0≤𝑗≤𝑘</sub>\[𝜃<sub>𝑗</sub>·𝑓<sub>𝑗</sub>(𝑌<sub>𝑡</sub>=𝑦<sub>𝑡</sub>,𝑋<sub>𝑡</sub>=𝑥<sub>𝑡</sub>,𝑌<sub>𝑡-1</sub>=𝑦<sub>𝑡-1</sub>,<font style="color: rgb(204,153,255);">𝑌<sub>𝑡-2</sub>=𝑦<sub>𝑡-2</sub></font>)\]</sup> / 𝑍(𝑋<sub>𝑡</sub>=𝑥<sub>𝑡</sub>,𝑌<sub>𝑡-1</sub>=𝑦<sub>𝑡-1</sub>,<font style="color: rgb(204,153,255);">𝑌<sub>𝑡-2</sub>=𝑦<sub>𝑡-2</sub></font>)
>
> where:
> - 𝑍(𝑋<sub>𝑡</sub>=𝑥<sub>𝑡</sub>,𝑌<sub>𝑡-1</sub>=𝑦<sub>𝑡-1</sub>,<font style="color: rgb(204,153,255);">𝑌<sub>𝑡-2</sub>=𝑦<sub>𝑡-2</sub></font>) = 𝛴<sub>0≤𝑖≤𝑐</sub>\[𝑒<sup>𝛴<sub>0≤𝑖≤𝑘</sub>\[𝜃<sub>𝑗</sub>·𝑓<sub>𝑗</sub>(𝑌<sub>𝑡</sub>=𝑖,𝑌<sub>𝑡-1</sub>=𝑦<sub>𝑡-1</sub>,<font style="color: rgb(204,153,255);">𝑌<sub>𝑡-2</sub>=𝑦<sub>𝑡-2</sub></font>,𝑿=𝒙)\]</sup>\]
>
> === 1ˢᵗ Order General (Fully Connected)
>
> ###### 1ˢᵗ Order General MEMM (Fully Connected) - Components
>
> ```merge-table
> {
>   "rows": [
>     [
>       "- <strong>𝑿 </strong>= \\[𝑋<sub>1</sub>, ..., 𝑋<font style=\"color: rgb(0,128,0);\"><sub>𝐽</sub></font>\\] are observed variables\n- each variable 𝑋<sub>𝑖</sub>have their own set of distinct values\n- <font style=\"color: rgb(255,0,0);\">𝒀 = \\[𝑌<sub>1</sub>, ..., 𝑌<sub>𝐾</sub></font><font style=\"color: rgb(255,0,0);\">\\]</font> are SEQUENCE of hidden state variables (to be predicted)\n- each variable 𝑌<sub>𝑖</sub> have their own set of distinct values\n\nestimate parameters of the following [[Conditional Probability Distribution (CPD)|conditional probability distributions]] (see diagram):\n- 𝐏(𝑌<sub>1</sub>|<strong>𝑿</strong>)\n- 𝐏(𝑌<sub>2</sub>|𝑌<sub>1</sub><strong>𝑿</strong>)\n- ...\n- 𝐏(𝑌<sub>𝐾</sub>|𝑌<sub>𝐾-1</sub><strong>𝑿</strong>)",
>       "![[Maximum Entropy Markov Model (MEMM) - Conditional Markov Models (CMM)/maximum-entropy-markov-model-general-fully-connected.png|301]]"
>     ]
>   ]
> }
> ```
>
> 1ˢᵗ Order General MEMM formula:
> - 𝐏(𝑌<sub>𝑡</sub>=𝑦<sub>𝑡</sub>|𝑌<sub>𝑡-1</sub>=𝑦<sub>𝑡-1</sub>,<strong>𝑿</strong>=𝒙;𝜽) = 𝑒<sup>𝛴<sub>0≤𝑗≤𝑘</sub>\[𝜃<sub>𝑗</sub>·𝑓<sub>𝑗</sub>(𝑌<sub>𝑡</sub>=𝑦<sub>𝑡</sub>,𝑌<sub>𝑡-1</sub>=𝑦<sub>𝑡-1</sub>,<strong>𝑿</strong>=𝒙)\]</sup> / 𝑍(𝑌<sub>𝑡-1</sub>=𝑦<sub>𝑡-1</sub>,<strong>𝑿</strong>=𝒙)
>
> where:
> - 𝑍(𝑌<sub>𝑡-1</sub>=𝑦<sub>𝑡-1</sub>,<strong>𝑿</strong>=𝒙) = 𝛴<sub>0≤𝑖≤𝑐</sub>\[𝑒<sup>𝛴<sub>0≤𝑗≤𝑘</sub>\[𝜃<sub>𝑗</sub>·𝑓<sub>𝑗</sub>(𝑌<sub>𝑡</sub>=𝑖,𝑌<sub>𝑡-1</sub>=𝑦<sub>𝑡-1</sub>,𝑿=𝒙)\]</sup>\]
> - derived from [[Multinomial／N-nary Logistic Regression (MLR)|multinomial logistic regression]] formula
> > [!expand]- Click here to expand...
> > [[Multinomial／N-nary Logistic Regression (MLR)|multinomial logistic regression]] formula (𝑌 = \[0, ..., 𝑐\]):
> > - 𝐏(𝑌=𝑦|𝑿=𝒙;𝜽) = 𝑒<sup>𝛴<sub>0≤𝑗≤𝑘</sub>\[𝜃<sub>𝑗</sub>·𝑓<sub>𝑗</sub>(𝑌=𝑦,𝑿=𝒙)\]</sup> / 𝑍(𝑿=𝒙)
> >
> > where
> > - 𝑍(𝑿=𝒙) = 𝛴<sub>0≤𝑖≤𝑐</sub>\[𝑒<sup>𝛴<sub>0≤𝑗≤𝑘</sub>\[𝜃<sub>𝑗</sub>·𝑓<sub>𝑗</sub>(𝑌=𝑖,𝑿=𝒙)\]</sup>\]
>
> ###### 1ˢᵗ Order General MEMM - Training
>
> > [!expand]- Click here to expand...
> > TODO
> ###### 1ˢᵗ Order General MEMM - Testing
>
> > [!expand]- Click here to expand...
> > TODO
>
> === 1ˢᵗ Order General (Partially Connected)
>
> ###### 1ˢᵗ Order General MEMM (Partially Connected)
>
> ```merge-table
> {
>   "rows": [
>     [
>       "- <strong>𝑿 </strong>= \\[𝑋<sub>1</sub>, ..., 𝑋<font style=\"color: rgb(0,128,0);\"><sub>𝐽</sub></font>\\] are observed variables\n- each variable 𝑋<sub>𝑖</sub>have their own set of distinct values\n- <font style=\"color: rgb(255,0,0);\">𝒀 = \\[𝑌<sub>1</sub>, ..., 𝑌<sub>𝐾</sub></font><font style=\"color: rgb(255,0,0);\">\\]</font> are SEQUENCE of hidden state variables (to be predicted)\n- each variable 𝑌<sub>𝑖</sub> have their own set of distinct values\n\nestimate parameters of the following [[Conditional Probability Distribution (CPD)|conditional probability distributions]] (see diagram):\n- 𝐏(𝑌<sub>1</sub>|𝑠𝑢𝑏𝑠𝑒𝑡(<strong>𝑿</strong>))\n- 𝐏(𝑌<sub>2</sub>|𝑌<sub>1</sub>𝑠𝑢𝑏𝑠𝑒𝑡(<strong><strong>𝑿</strong></strong>))\n- ...\n- 𝐏(𝑌<sub>𝐾</sub>|𝑌<sub>𝐾-1</sub>𝑠𝑢𝑏𝑠𝑒𝑡(<strong><strong>𝑿</strong></strong>))",
>       "![[Maximum Entropy Markov Model (MEMM) - Conditional Markov Models (CMM)/maximum-entropy-markov-model-general-partially-connected.png|301]]"
>     ]
>   ]
> }
> ```

### MEMM - Other
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

- [[Hidden Markov Model (HMM) vs Sequential Maximum Entropy Markov Model (MEMM)]]
- [[Logistic Regression Model vs Sequential Maximum Entropy Markov Model (MEMM)]]
- [[Linear Chain CRF vs Maximum Entropy Markov Model (MEMM)]]
