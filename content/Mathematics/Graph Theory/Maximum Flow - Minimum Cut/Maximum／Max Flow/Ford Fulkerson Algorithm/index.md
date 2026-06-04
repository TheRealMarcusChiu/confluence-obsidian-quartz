---
title: "Ford Fulkerson Algorithm"
created: 2021-09-13T05:25:44.055-05:00
modified: 2021-09-13T05:25:44.055-05:00
parent: "[[Maximum／Max Flow]]"
children: []
---
### Algorithm
1. start with initial flow as 0
2. while there is an augmenting path from source to sink, add this path-flow to flow
3. return flow

### Time Complexity

O(Ef) where:
- E - number of edges
- f - is max flow
