---
title: "Second-Order Linear Chain CRF"
created: 2021-09-13T05:26:51.764-05:00
modified: 2023-06-04T09:39:18.580-05:00
parent: "[[Conditional／Discriminative Random Fields (CRF)]]"
children: []
---
###### Second-Order Linear Chain CRF
````excerpt
- a type of <strong>Linear Chain</strong> [[Conditional／Discriminative Random Fields (CRF)|Conditional Random Field (CRF)]]
- an extension of [[First-Order Linear Chain CRF]]
````
^excerpt

# Second-Order Linear Chain CRF - Components
- 𝑿 = {𝑋<sub>1</sub>, ..., 𝑋<sub>𝐽</sub>} - sequence of source/input/observed variables
- 𝒀 = {𝑌<sub>1</sub> , ..., 𝑌<sub>𝐾</sub>} - sequence of target/output/hidden variables

given the generic <strong>[[Conditional／Discriminative Random Fields (CRF)|Conditional Random Field]]</strong> formula:
- 𝐏(𝒀=𝒚|𝑿=𝒙;𝜽) = 𝑒<sup>𝛴<sub>0≤𝑗≤𝑘</sub>\[ 𝜃<sub>𝑗</sub>·𝑓<sub>𝑗</sub>(𝒚,𝒙) \]</sup> / 𝑍(𝒙)
- 𝑍(𝑿=𝒙) = 𝛴<sub>𝑦<sub>1</sub>∊𝑌<sub>1</sub></sub> ... 𝛴<sub>𝑦<sub>𝐾</sub>∊𝑌<sub>𝐾</sub></sub><strong>\[</strong> 𝑒<sup>𝛴<sub>0≤𝑗≤𝑘</sub>\[ 𝜃<sub>𝑗</sub>·𝑓<sub>𝑗</sub>(𝑦<sub>1</sub>, ..., 𝑦<sub>𝑘</sub>, 𝒙) \]</sup> <strong>\]</strong>

we modify it for <strong>Second-Order Linear Chain CRF</strong> formula:
- 𝐏(𝒀=𝒚|𝑿=𝒙;𝜽) = 𝑒<sup>𝛴<sub>2≤𝑖≤𝐾</sub>𝛴<sub>0≤𝑗≤𝑘</sub>\[ 𝜃<sub>𝑗</sub>·𝑓<sub>𝑗</sub>(𝑦<sub>𝑖-2</sub>, 𝑦<sub>𝑖-1</sub>, 𝑦<sub>𝑖</sub>, 𝒙) \]</sup> / 𝑍(𝒙)
- 𝑍(𝑿=𝒙) = 𝛴<sub>𝑦<sub>1</sub>∊𝑌<sub>1</sub></sub> ... 𝛴<sub>𝑦<sub>𝐾</sub>∊𝑌<sub>𝐾</sub></sub><strong>\[</strong> 𝑒<sup>𝛴<sub>2≤𝑖≤𝐾</sub>𝛴<sub>0≤𝑗≤𝑘</sub>\[ 𝜃<sub>𝑗</sub>·𝑓<sub>𝑗</sub>(𝑦<sub>𝑖-2</sub>, 𝑦<sub>𝑖-1</sub>, 𝑦<sub>𝑖</sub>, 𝒙) \]</sup> <strong>\]</strong>

# Second-Order Linear Chain CRF - Inference

![[Second-Order Linear Chain CRF/second-order-linear-chain-conditional-random-field.png|301]]

given:
- 𝐏(𝒀|𝑿) - trained Second-Order Linear Chain CRF Model
- 𝒙 - values of observed input variables

compute 𝒚 that maximizes the conditional probability 𝐏(𝒀|𝑿):
- 𝒚̂ = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝒚</sub>𝐏(𝒀=𝒚|𝑿=𝒙)
- 𝒚̂ = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝒚</sub>𝑒<sup>𝛴<sub>1≤𝑖≤𝐾</sub>𝛴<sub>0≤𝑗≤𝑘</sub>\[ 𝜃<sub>𝑗</sub>·𝑓<sub>𝑗</sub>(𝑦<sub>𝑖-2</sub>, 𝑦<sub>𝑖-1</sub>, 𝑦<sub>𝑖</sub>, 𝒙) \]</sup> / 𝑍(𝒙)
- 𝒚̂ = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝒚</sub>𝛴<sub>1≤𝑖≤𝐾</sub>𝛴<sub>0≤𝑗≤𝑘</sub>\[ 𝜃<sub>𝑗</sub>·𝑓<sub>𝑗</sub>(𝑦<sub>𝑖-2</sub>, 𝑦<sub>𝑖-1</sub>, 𝑦<sub>𝑖</sub>, 𝒙) \]
