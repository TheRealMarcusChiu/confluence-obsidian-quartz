---
title: "Minimum Cut"
created: 2021-09-13T05:25:42.404-05:00
modified: 2021-09-13T05:25:42.404-05:00
parent: "[[Maximum Flow - Minimum Cut]]"
children:
  - "[[Minimum Cut - Contraction Algorithm]]"
  - "[[Minimum Cut - Nagamochi-Ibaraki Algorithm]]"
---
### Ways Finding Minimum Cut of a Graph

the minimum cut between 2 specified nodes can be obtained as a by-product of the [[Maximum／Max Flow|maximum flow]] computation. If however, we want an overall minimum cut of the whole graph, then a single maximum flow computation does not suffice

One can find the overall minimum cut directly, without using anything about maximum flows. Below we present 2 algorithms for this problem
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
