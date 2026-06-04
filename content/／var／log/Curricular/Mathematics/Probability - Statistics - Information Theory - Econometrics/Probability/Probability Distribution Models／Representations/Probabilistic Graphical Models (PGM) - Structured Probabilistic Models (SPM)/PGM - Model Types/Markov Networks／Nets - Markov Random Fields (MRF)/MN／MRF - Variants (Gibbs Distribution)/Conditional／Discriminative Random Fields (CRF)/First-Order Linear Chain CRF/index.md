---
title: "First-Order Linear Chain CRF"
created: 2021-09-13T05:26:51.288-05:00
modified: 2023-06-04T09:36:35.407-05:00
parent: "[[Conditional／Discriminative Random Fields (CRF)]]"
children: []
---
###### First-Order Linear Chain CRF
````excerpt
- the simplest <strong>Linear Chain</strong> [[Conditional／Discriminative Random Fields (CRF)|Conditional Random Field]]
- solves the problem of [[MEMM - Label Bias Problem - Causal-Competition Biases|label bias problem]] in [[Maximum Entropy Markov Model (MEMM) - Conditional Markov Models (CMM)|Maximum Entropy Markov Models]]
````
^excerpt

# First-Order Linear Chain CRF - Components
- 𝑿 = {𝑋<sub>1</sub>, ..., 𝑋<sub>𝐽</sub>} - sequence of source/input/observed variables
- 𝒀 = {𝑌<sub>1</sub> , ..., 𝑌<sub>𝐾</sub>} - sequence of target/output/hidden variables

given the generic [[Conditional／Discriminative Random Fields (CRF)|Conditional Random Field]] formula:
- 𝐏(𝒀=𝒚|𝑿=𝒙;𝜽) = 𝑒<sup>𝛴<sub>0≤𝑗≤𝑘</sub>\[ 𝜃<sub>𝑗</sub>·𝑓<sub>𝑗</sub>(𝒚,𝒙) \]</sup> / 𝑍(𝒙)
- 𝑍(𝑿=𝒙) = 𝛴<sub>𝑦<sub>1</sub>∊𝑌<sub>1</sub></sub> ... 𝛴<sub>𝑦<sub>𝐾</sub>∊𝑌<sub>𝐾</sub></sub><strong>\[</strong> 𝑒<sup>𝛴<sub>0≤𝑗≤𝑘</sub>\[ 𝜃<sub>𝑗</sub>·𝑓<sub>𝑗</sub>(𝑦<sub>1</sub>, ..., 𝑦<sub>𝑘</sub>, 𝒙) \]</sup> <strong>\]</strong>

we modify it for Linear Chain CRF formula:
- 𝐏(𝒀=𝒚|𝑿=𝒙;𝜽) = 𝑒<sup>𝛴<sub>1≤𝑖≤𝐾</sub>𝛴<sub>0≤𝑗≤𝑘</sub>\[ 𝜃<sub>𝑗</sub>·𝑓<sub>𝑗</sub>(𝑦<sub>𝑖-1</sub>, 𝑦<sub>𝑖</sub>, 𝒙) \]</sup> / 𝑍(𝒙)
- 𝑍(𝑿=𝒙) = 𝛴<sub>𝑦<sub>1</sub>∊𝑌<sub>1</sub></sub> ... 𝛴<sub>𝑦<sub>𝐾</sub>∊𝑌<sub>𝐾</sub></sub><strong>\[</strong> 𝑒<sup>𝛴<sub>1≤𝑖≤𝐾</sub>𝛴<sub>0≤𝑗≤𝑘</sub>\[ 𝜃<sub>𝑗</sub>·𝑓<sub>𝑗</sub>(𝑦<sub>𝑖-1</sub>, 𝑦<sub>𝑖</sub>, 𝒙) \]</sup> <strong>\]</strong>

![[First-Order Linear Chain CRF/linear-conditional-random-field-equation.png|350]]
# First-Order Linear Chain CRF - Inference

![[First-Order Linear Chain CRF/linear-chain-conditional-random-field.png|301]]

given:
- 𝐏(𝒀|𝑿) - trained Linear Chain CRF Model
- 𝒙 - values of observed input variables

compute 𝒚 that maximizes the conditional probability 𝐏(𝒀|𝑿):
- 𝒚̂ = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝒚</sub>𝐏(𝒀=𝒚|𝑿=𝒙)
- 𝒚̂ = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝒚</sub>𝑒<sup>𝛴<sub>1≤𝑖≤𝐾</sub>𝛴<sub>0≤𝑗≤𝑘</sub>\[ 𝜃<sub>𝑗</sub>·𝑓<sub>𝑗</sub>(𝑦<sub>𝑖-1</sub>, 𝑦<sub>𝑖</sub>, 𝒙) \]</sup> / 𝑍(𝒙)
- 𝒚̂ = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝒚</sub>𝛴<sub>1≤𝑖≤𝐾</sub>𝛴<sub>0≤𝑗≤𝑘</sub>\[ 𝜃<sub>𝑗</sub>·𝑓<sub>𝑗</sub>(𝑦<sub>𝑖-1</sub>, 𝑦<sub>𝑖</sub>, 𝒙) \]

# First-Order Linear Chain CRF - Other
- [[Linear Chain CRF vs Maximum Entropy Markov Model (MEMM)]]
- [[Conditional Random Field (CRF) vs Linear Chain CRF]]

# Resources
- [David Batista - Article](http://www.davidsbatista.net/blog/2017/11/13/Conditional_Random_Fields/)
- [Hugo Larochelle - YouTube](https://www.youtube.com/watch?v=PGBlyKtfB74)
