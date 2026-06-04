---
title: "Similarity／Distance Search"
created: 2023-01-21T15:42:31.012-06:00
modified: 2024-08-20T07:23:20.013-05:00
parent: "[[Algorithm Types]]"
children:
  - "[[Approximate Nearest Neighbor (ANN) Search]]"
  - "[[Facebook AI Similarity Search (FAISS)]]"
  - "[[Nearest Neighbor Search (NNS) - Vector Search]]"
---
###### Similarity/Distance Search
````excerpt
- is the most general term used for a range of mechanisms that share the principle of searching spaces of objects where the only available comparator is the [[Distance／Similarity／Divergence Measure／Metric／Semi-Metric／Functions - Norm／Semi-Norm|similarity/distance]] between any pair of objects
- used in [[Vector Database]]s for indexing methods
````
^excerpt

# Similarity/Distance Search - Algorithms
- Flat (brute-force)
> [!list-indent-undo]
> ```dataview
> LIST
> FROM ""
> WHERE file.folder = this.file.folder + "/" + this.file.name
> ```
