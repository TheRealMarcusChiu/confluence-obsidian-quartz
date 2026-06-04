---
title: "BE／VE Algorithm - Complexity (Non-MAP vs MAP)"
created: 2021-09-13T05:28:21.654-05:00
modified: 2021-09-13T05:28:21.654-05:00
parent: "[[Probabilistic Inference - Bucket Elimination (BE) - Variable Elimination (VE)]]"
children: []
---
# <strong>Complexity - Non-MAP Query</strong>
###### Complexity Without Evidence

Given a [[Bayesian Networks (BN)|Bayesian Network]] whose [[Moral Graph - Moralization|moral graph]] is 𝐆, let:
- 𝑤(𝑑) be its [[(Ordered Graph - Width) - (Induced Graph - Induced Width) - (Conditional Induced Graph - Conditional Induced Width)|induced width]] of 𝐆 along ordering 𝑑
- 𝑘 the maximum domain size of all variables
- 𝑟 be the number of [[Conditional Probability Table (CPT)|conditional probability tables (CPT)]]
- 𝑛 be the number of variables

complexity:
- [[Growth／Asymptotic Complexity／Analysis (Time／Space／Memory Complexity)|time complexity]] is 𝑂(𝑟·𝑘<sup>𝑤(𝑑)+1</sup>)
- [[Growth／Asymptotic Complexity／Analysis (Time／Space／Memory Complexity)|space complexity]] is 𝑂(𝑛·𝑘<sup>𝑤(𝑑)</sup>)

###### Complexity With Evidence

the complexity can be further simplified by including observed/evidence variables into the picture

𝑤(𝑑) is replaced with 𝑤<sub>𝐄</sub>(𝑑), where 𝑤<sub>𝐄</sub>(𝑑) is the [[(Ordered Graph - Width) - (Induced Graph - Induced Width) - (Conditional Induced Graph - Conditional Induced Width)|conditional induced width]] of the [[(Ordered Graph - Width) - (Induced Graph - Induced Width) - (Conditional Induced Graph - Conditional Induced Width)|ordered graph]] 𝐆 along 𝑑, conditioned on the evidence 𝐄.

this statement is always true: 𝑤<sub>𝐄</sub>(𝑑) ≤ 𝑤(𝑑)

complexity:
- [[Growth／Asymptotic Complexity／Analysis (Time／Space／Memory Complexity)|time complexity]] is 𝑂(𝑟·𝑘<sup>𝑤<sub>𝐄</sub>(𝑑)+1</sup>)
- [[Growth／Asymptotic Complexity／Analysis (Time／Space／Memory Complexity)|space complexity]] is 𝑂(𝑛·𝑘<sup>𝑤<sub>𝐄</sub>(𝑑)</sup>)

# <strong>Complexity - MAP Query</strong>

the complexity between MAP and MPE over the same [[Graphical Models|graphical model]] are not always the same. In fact solving MAP queries can be exponential to the number of variables even when the graphical model's minimal [[Cluster／Clique／Join／Junction Trees - Tree Decompositions - Tree-Width|tree-width]]/[[(Ordered Graph - Width) - (Induced Graph - Induced Width) - (Conditional Induced Graph - Conditional Induced Width)|induced-width]] is bounded by some constant.

max and sum operations do not commute. Thus, in order to maintain the correct semantics of marginal MAP queries, we must perform all the variable summations before we can perform any of the variable maximizations!
###### Example
![[BE／VE Algorithm - Complexity (Non-MAP vs MAP)/example-network.png|301]]
- 𝐏(𝑌<sub>1</sub>, ..., 𝑌<sub>𝑛</sub>, 𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>) = 𝐏(𝑌<sub>1</sub>)𝐏(𝑋<sub>1</sub>|𝑌<sub>1</sub>) 𝐏(𝑌<sub>2</sub>)𝐏(𝑋<sub>1</sub>|𝑋<sub>1</sub>,𝑌<sub>2</sub>) ... 𝐏(𝑌<sub>𝑛</sub>)𝐏(𝑋<sub>𝑛</sub>|𝑋<sub>𝑛-1</sub>,𝑌<sub>𝑛</sub>)
- minimum [[Cluster／Clique／Join／Junction Trees - Tree Decompositions - Tree-Width|tree-width]]/[[(Ordered Graph - Width) - (Induced Graph - Induced Width) - (Conditional Induced Graph - Conditional Induced Width)|induced-width]] = 3

lets compare the computational cost between:
- <strong>Conditional Posterior Query</strong> \~ 𝑂(𝑛·𝑒𝑥𝑝(3))
	- 𝛴<sub>𝑦<sub>1</sub>∊𝑌<sub>1</sub></sub><sub><sub><sub></sub></sub></sub>... 𝛴<sub>𝑦<sub>𝑛</sub>∊𝑌<sub>𝑛</sub></sub> 𝛴<sub><strong>𝑥</strong><sub>1</sub>∊𝑋<sub>1</sub></sub>... 𝛴<sub><strong>𝑥<sub>𝑛</sub></strong>∊𝑋<sub>𝑛</sub></sub>\[ 𝐏(𝑌<sub>1</sub>, ..., 𝑌<sub>𝑛</sub>, 𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>) \]
- <strong>MPE(𝑌<sub>1</sub>, ..., 𝑌<sub>𝑛</sub>, 𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>)</strong> \~ 𝑂(𝑛·𝑒𝑥𝑝(3))
	- 𝑚𝑎𝑥<sub>𝑦<sub>1</sub>∊𝑌<sub>1</sub></sub><sub><sub><sub></sub></sub></sub>... 𝑚𝑎𝑥<sub>𝑦<sub>𝑛</sub>∊𝑌<sub>𝑛</sub></sub> 𝑚𝑎𝑥<sub><strong>𝑥</strong><sub>1</sub>∊𝑋<sub>1</sub></sub>... 𝑚𝑎𝑥<sub><strong>𝑥<sub>𝑛</sub></strong>∊𝑋<sub>𝑛</sub></sub>\[ 𝐏(𝑌<sub>1</sub>, ..., 𝑌<sub>𝑛</sub>, 𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>) \]
- <strong>MAP(𝑌<sub>1</sub>, ..., 𝑌<sub>𝑛</sub>)</strong> \~ 𝑂(𝑛·𝑒𝑥𝑝(𝑛))
	- 𝑚𝑎𝑥<sub>𝑦<sub>1</sub>∊𝑌<sub>1</sub></sub><sub><sub><sub></sub></sub></sub>... 𝑚𝑎𝑥<sub>𝑦<sub>𝑛</sub>∊𝑌<sub>𝑛</sub></sub><sub><sub><sub></sub></sub></sub><strong>\[</strong> 𝛴<sub><strong>𝑥</strong><sub>1</sub>∊𝑋<sub>1</sub></sub>... 𝛴<sub><strong>𝑥<sub>𝑛</sub></strong>∊𝑋<sub>𝑛</sub></sub>\[ 𝐏(𝑌<sub>1</sub>, ..., 𝑌<sub>𝑛</sub>, 𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>) \] <strong>\]</strong>
