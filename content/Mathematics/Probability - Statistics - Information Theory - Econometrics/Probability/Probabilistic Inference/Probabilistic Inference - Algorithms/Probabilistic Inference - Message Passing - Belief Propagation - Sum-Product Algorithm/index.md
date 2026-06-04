---
title: "Probabilistic Inference - Message Passing - Belief Propagation - Sum-Product Algorithm"
created: 2021-09-13T05:28:28.555-05:00
modified: 2025-09-28T19:47:23.576-05:00
parent: "[[Probabilistic Inference - Algorithms]]"
children:
  - "[[Probabilistic Inference - Belief Propagation - Factor Graphs]]"
  - "[[Probabilistic Inference - Iterative／Loopy／Cluster／Clique／Join／Junction Graph Belief Propagation]]"
  - "[[Probabilistic Inference - Mini-Cluster／Bucket Elimination]]"
---
> [!expand]- probabilistic inference recap
> ![[Probabilistic Inference#^excerpt]]
###### Message Passing Algorithm - Belief Propagation Algorithm - Sum-Product Algorithm
````excerpt
- is a type of:
	- [[Probabilistic Inference - Exact Inference|exact inference algorithm]] for graphs without cycles (trees)
	- [[Probabilistic Inference - Approximate Inference|approximate inference algorithm]] for graphs with cycles
````
^excerpt

# Belief Propagation - Variants
variants of the belief propagation algorithm exist for several types of graphical models (e.g. [[Bayesian Networks (BN)|Bayesian Networks]], [[Markov Networks／Nets - Markov Random Fields (MRF)|Markov Networks]], [[Hypergraphs - Primal Graphs - Dual Graphs - Cluster Graphs - Cluster Trees - Factor Graphs|Factor Graphs]], etc)

```merge-table
{
  "rows": [
    [
      {
        "content": "Algorithm",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Probabilistic Inference - Iterative／Loopy／Cluster／Clique／Join／Junction Graph Belief Propagation|Iterative/Loopy BP Algorithm]]\n\n<font style=\"color: rgb(255,0,0);\">READ THIS TO UNDERSTAND BELIEF PROPAGATION</font>",
        "bg": "#F4F5F7"
      },
      "![[Probabilistic Inference - Iterative／Loopy／Cluster／Clique／Join／Junction Graph Belief Propagation#^excerpt]]"
    ],
    [
      {
        "content": "[[Probabilistic Inference - Belief Propagation - Factor Graphs|Belief Propagation Algorithm for Factor Graphs]]",
        "bg": "#F4F5F7"
      },
      "- used on [[Hypergraphs - Primal Graphs - Dual Graphs - Cluster Graphs - Cluster Trees - Factor Graphs|Factor Graphs]]\n- is a type of [[Probabilistic Inference - Approximate Inference|approximate inference algorithm]]\n- does not always converge, may diverge if not careful\n- if converged, solution may not be optimal/right"
    ],
    [
      {
        "content": "[[Probabilistic Inference - Bucket Elimination (BE) - Variable Elimination (VE)|Bucket/Variable Elimination Algorithm]]\n\n[[Probabilistic Inference - Cluster／Clique／Join／Junction Tree Belief Propagation|Cluster/Clique/Join/Junction Tree Belief Propagation]]",
        "bg": "#F4F5F7"
      },
      "- induces a [[Cluster／Clique／Join／Junction Trees - Tree Decompositions - Tree-Width|cluster tree]] on which a specialized Belief Propagation Algorithm is performed\n\t- a node is chosen as root, messages start at leaves passing it up to root\n- is an [[Probabilistic Inference - Exact Inference|exact inference algorithm]]\n- always converges"
    ],
    [
      {
        "content": "Viterbi Algorithm",
        "bg": "#F4F5F7"
      },
      "- used on [[Hidden Markov Models (HMM)|Hidden Markov Models]]\n- very similar to the Collect & Distribute Algorithm?\n- is an [[Probabilistic Inference - Exact Inference|exact inference algorithm]]\n- always converges"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Resources
- [Daphne Koller - Belief Propagation](https://www.coursera.org/lecture/probabilistic-graphical-models-2-inference/belief-propagation-algorithm-1FE96)
- [Bert Huang - Belief Propagation](https://www.youtube.com/watch?v=meBWAboEWQk)
