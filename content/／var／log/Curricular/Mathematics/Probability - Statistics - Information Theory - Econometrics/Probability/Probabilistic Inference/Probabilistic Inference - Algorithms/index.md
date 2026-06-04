---
title: "Probabilistic Inference - Algorithms"
created: 2021-09-13T05:27:39.725-05:00
modified: 2021-12-11T05:26:37.654-06:00
parent: "[[Probabilistic Inference]]"
children:
  - "[[Probabilistic Inference - Approximate Inference]]"
  - "[[Probabilistic Inference - Exact Inference]]"
  - "[[Probabilistic Inference - Message Passing - Belief Propagation - Sum-Product Algorithm]]"
---
> [!expand]- probabilistic inference intro
> ![[Probabilistic Inference#^excerpt]]
# Algorithms in Solving a Probability Query
````excerpt
In practice, the exact inference method is not used widely, and most probabilistic inference algorithms are approximate. Nevertheless, it is important to understand exact inference and its limitations
- [[Probabilistic Inference - Exact Inference|Exact Inference Algorithms]] - intractable ([[P - NP - NPC - NPI - NPO - NPH|NP-Hard]]) in the general case
- [[Probabilistic Inference - Approximate Inference|Approximate Inference Algorithms]] ([[Inferential Statistics]]) - tractable method, though the loss of exactness

sometimes exact, sometimes approximate algorithms
- [[Probabilistic Inference - Message Passing - Belief Propagation - Sum-Product Algorithm|Message Passing - Belief Propagation Algorithm]] - exact in trees, approximate in graphs with cycles
````
^excerpt
