---
title: "BN - Inferring Independence"
created: 2021-09-13T05:26:40.019-05:00
modified: 2026-05-24T19:47:26.677-05:00
parent: "[[Bayesian Networks (BN)]]"
children:
  - "[[BN - (D-Separation ｜ D-Connection)]]"
---
given a [[Bayesian Networks (BN)|bayesian network]] 𝓑 we would like to determine the [[Probability Independence (Marginal Independence - Conditional Independence)|independence (marginal and/or conditional)]] between arbitrary sets of variables

some independence properties of 𝓑:
- [[Markov Condition／Assumption／Property - First／Second／Nth-Order - (Pairwise - Local - Global - Markov-Blanket) - Causal Markov (CMC) Condition／Assumption／Property|local markov property]]
- [[Markov Condition／Assumption／Property - First／Second／Nth-Order - (Pairwise - Local - Global - Markov-Blanket) - Causal Markov (CMC) Condition／Assumption／Property|global markov property]] (Markov Blanket)
- [[BN - (D-Separation ｜ D-Connection)|d-separation]]

# [[Markov Condition／Assumption／Property - First／Second／Nth-Order - (Pairwise - Local - Global - Markov-Blanket) - Causal Markov (CMC) Condition／Assumption／Property|Local Markov Property]] (Topological Semantics)
- specifies that each variable 𝑋 is [[Probability Independence (Marginal Independence - Conditional Independence)|conditionally independent]] of its non-descendants, given its parents (note: the set of parents is a subset of the set of non-descendants because the graph is acyclic)
- <font style="color: rgb(128,128,128);">𝑋 ⫫ 𝑛𝑜𝑛-𝑑𝑒𝑠𝑐𝑒𝑛𝑑𝑎𝑛𝑡𝑠(𝑋) | 𝑝𝑎𝑟𝑒𝑛𝑡𝑠(𝑋)</font>
- <font style="color: rgb(128,128,128);">𝐏(𝑋|𝑛𝑜𝑛-𝑑𝑒𝑠𝑐𝑒𝑛𝑑𝑎𝑛𝑡𝑠(𝑋), 𝑝𝑎𝑟𝑒𝑛𝑡𝑠(𝑋)) = 𝐏(𝑋|𝑝𝑎𝑟𝑒𝑛𝑡𝑠(𝑋))</font>
- for example, in[[BN - Inferring Independence|Figure 14.2]], <em>JohnCalls </em>is independent of <em>Burglary</em>, <em>Earthquake</em>, and <em>MaryCalls </em>given the value of <em>Alarm</em>
- this property is illustrated in Figure

![[BN - Inferring Independence/bayesian-network-local-markov-property.png|301]]
# [[Markov Condition／Assumption／Property - First／Second／Nth-Order - (Pairwise - Local - Global - Markov-Blanket) - Causal Markov (CMC) Condition／Assumption／Property|Global Markov Property]] - Markov Blanket (Implied by Topological Semantics)
- a node is conditionally independent of all other nodes in the network, given its parents, children, and children’s parents—that is, given its <strong>Markov Blanket</strong>
- <font style="color: rgb(128,128,128);">𝑋 ⫫ 𝑎𝑙𝑙-𝑣𝑎𝑟𝑖𝑎𝑏𝑙𝑒𝑠 | 𝑚𝑎𝑟𝑘𝑜𝑣-𝑏𝑙𝑎𝑛𝑘𝑒𝑡(𝑋)</font>
- <font style="color: rgb(128,128,128);">𝐏(𝑋|𝑎𝑙𝑙-𝑣𝑎𝑟𝑖𝑎𝑏𝑙𝑒𝑠, 𝑚𝑎𝑟𝑘𝑜𝑣-𝑏𝑙𝑎𝑛𝑘𝑒𝑡(𝑋)) = 𝐏(𝑋|𝑚𝑎𝑟𝑘𝑜𝑣-𝑏𝑙𝑎𝑛𝑘𝑒𝑡(𝑋))</font>
- the joint distribution of the variables in the Markov Blanket of a node is sufficient knowledge for calculating the distribution of the node
- for example, in[http://confluence.marcuschiu.com/display/NOT/AI+Chapter+14+-+Probabilistic+Reasoning#AIChapter14-ProbabilisticReasoning-Figure14.2](http://confluence.marcuschiu.com/display/NOT/AI+Chapter+14+-+Probabilistic+Reasoning#AIChapter14-ProbabilisticReasoning-Figure14.2)[[BN - Inferring Independence]], <em>Burglary </em>is independent of <em>JohnCalls </em>and <em>MaryCalls</em>, given <em>Alarm </em>and <em>Earthquake</em>
- this property is illustrated in Figure on the right

![[BN - Inferring Independence/bayesian-network-global-markov-property.png|301]]
# [[BN - (D-Separation ｜ D-Connection)|D-Separation]] (Implied by Topological Semantics)
- Markov Blanket can be made more general by defining "[[BN - (D-Separation ｜ D-Connection)|d-separation]] of two nodes"
