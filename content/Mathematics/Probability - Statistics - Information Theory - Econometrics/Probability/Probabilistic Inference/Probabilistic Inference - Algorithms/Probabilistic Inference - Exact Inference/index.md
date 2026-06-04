---
title: "Probabilistic Inference - Exact Inference"
created: 2021-09-13T05:28:20.743-05:00
modified: 2021-12-11T05:12:11.488-06:00
parent: "[[Probabilistic Inference - Algorithms]]"
children:
  - "[[Probabilistic Inference - Bucket Elimination (BE) - Variable Elimination (VE)]]"
  - "[[Probabilistic Inference - Bucket Tree Elimination (BTE) - Collect & Distribute Algorithm]]"
  - "[[Probabilistic Inference - Cutset Conditioning Scheme]]"
  - "[[Probabilistic Inference - Inference by Enumeration Algorithm]]"
  - "[[Probabilistic Inference - Node Cluster／Clique／Join／Junction Scheme]]"
---
> [!expand]- probabilistic inference recap
> ![[Probabilistic Inference#^excerpt]]

<strong>Exact Inference</strong> is a type of [[Probabilistic Inference - Algorithms|inference method]] used for the computation of [[Probability Distributions|distributions]], their [[Statistics - Terminology|parameters]], their [[Probability|probabilities]], and/or [[Probability Distribution - Theorems & Properties|distribution characteristics]]
# Exact Inference Algorithms

```merge-table
{
  "rows": [
    [
      "###### Inference-Based\n- [[Probabilistic Inference - Inference by Enumeration Algorithm|Inference by Enumeration Algorithm]]\n- [[Probabilistic Inference - Bucket Elimination (BE) - Variable Elimination (VE)|Bucket Elimination (BE) - Variable Elimination (VE) - Algorithm]]\n- [[Probabilistic Inference - Bucket Tree Elimination (BTE) - Collect & Distribute Algorithm|Bucket Tree Elimination (BTE) Algorithm]]\n\n###### Search-Based\n- [[AND／OR Search Spaces|AND/OR Search Spaces]]\n\t- [[AOT & AOG - Solving Probabilistic Inference Queries]]\n- [[Branch & Bound (B&B) Search - Solving Probabilistic Inference Queries|Branch & Bound Search - Solving Probabilistic Inference Queries]]\n\n###### Search & Inference Based\n- [[Probabilistic Inference - Cutset Conditioning Scheme|Cutset-Conditioning Scheme]]\n- [[Probabilistic Inference - Node Cluster／Clique／Join／Junction Scheme|Node Cluster/Clique/Join/Junction Scheme]]\n\t- [[Probabilistic Inference - Cluster／Clique／Join／Junction Tree Belief Propagation|Cluster/Clique/Join/Junction Tree Belief Propagation]]\n\t- [[Probabilistic Inference - Iterative／Loopy／Cluster／Clique／Join／Junction Graph Belief Propagation|Iterative/Loopy/Cluster/Clique/Join/Junction Graph Belief Propagation]] \\*approximate inference",
      "![[Probabilistic Inference - Exact Inference/exact graphical model inference comparisons.png|301]]\n- n - number of variables\n- w - [[Cluster／Clique／Join／Junction Trees - Tree Decompositions - Tree-Width|treewidth]]"
    ]
  ]
}
```
