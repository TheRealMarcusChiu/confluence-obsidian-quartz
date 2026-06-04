---
title: "PGM - Gibbs Distribution - Bayesian Network"
created: 2021-09-13T05:26:38.398-05:00
modified: 2021-09-13T05:26:38.398-05:00
parent: "[[PGM - Gibbs Distribution]]"
children: []
---
###### BN is Gibbs Distribution with 𝙕 = 1

parameters of BN can be viewed as parameters for a [[PGM - Gibbs Distribution|Gibbs Distribution]]
- take each CPT 𝐏(𝑋<sub>𝑖</sub>|𝑝𝑎𝑟𝑒𝑛𝑡𝑠-𝑜𝑓(𝑋<sub>𝑖</sub>)) and view it as a factor of scope {𝑋<sub>𝑖</sub>, 𝑝𝑎𝑟𝑒𝑛𝑡𝑠-𝑜𝑓(𝑋<sub>𝑖</sub>)}
- its <em>partition function</em> 𝙕 is 1, since it is already normalized:
  𝙕 = ∑<sub>𝑥<sub>1</sub>∊𝑋<sub>1</sub></sub>... ∑<sub>𝑥<sub>𝑛</sub>∊𝑋<sub>𝑛</sub></sub><strong>\[</strong> ∏<sub>𝑋<sub>𝑖</sub>∊𝐗</sub> \[ 𝐏(𝑋<sub>𝑖</sub>|𝑝𝑎𝑟𝑒𝑛𝑡𝑠-𝑜𝑓(𝑋<sub>𝑖</sub>)) \] <strong>\]</strong>
  𝙕 = 1

###### BN with evidence 𝐞 is Gibbs Distribution with 𝙕 = 𝐏(𝐄=𝐞)
- take each CPT 𝐏(𝑋<sub>𝑖</sub>|𝑝𝑎𝑟𝑒𝑛𝑡𝑠-𝑜𝑓(𝑋<sub>𝑖</sub>)) and view it as a factor of scope {𝑋<sub>𝑖</sub>, 𝑝𝑎𝑟𝑒𝑛𝑡𝑠-𝑜𝑓(𝑋<sub>𝑖</sub>)}
- its <em>partition function</em> 𝙕 is 𝐏(𝐄=𝐞):
  𝐏(𝑋<sub>𝑖</sub>|𝐄=𝐞) = 𝐏(𝑋<sub>𝑖</sub>, 𝐄=𝐞) / 𝐏(𝐄=𝐞)

thus any BN conditioned on evidence 𝐞 can be represented as a [[Markov Networks／Nets - Markov Random Fields (MRF)|Markov Network]]
