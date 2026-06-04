---
title: "BN - Exact Inference"
created: 2021-09-13T05:26:41.700-05:00
modified: 2021-09-13T05:26:41.700-05:00
parent: "[[BN - Probabilistic Inference]]"
children:
  - "[[BN - Exact Inference - Clustering Algorithms]]"
  - "[[BN - Exact Inference - Inference By Enumeration & Variable Elimination]]"
---
see: [[BN - Exact Inference]]
## Exact Inference Algorithms
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

## Complexity of Exact Inference on Bayesian Networks

the complexity of exact inference in <font style="color: rgb(128,128,128);"><strong>Bayesian networks</strong></font> depends strongly on the structure of the network

<strong>singly connected </strong><strong>networks</strong> or <strong>polytrees</strong>
- the time and space complexity of exact inference in polytrees is linear in the size of the network
- the size is defined as the number of [[BN - Exact Inference]] entries; if the number of parents of each node is bounded by a constant, then the complexity will also be linear in the number of nodes.

<strong>connected </strong><strong>networks</strong>
- variable elimination can have exponential time and space complexity in the worst case, even when the number of parents per node is bounded
- e.g. see [Figure 14.12(a)](http://confluence.marcuschiu.com/display/NOT/AI+Chapter+14+-+Probabilistic+Reasoning#AIChapter14-ProbabilisticReasoning-Figure14.12)
