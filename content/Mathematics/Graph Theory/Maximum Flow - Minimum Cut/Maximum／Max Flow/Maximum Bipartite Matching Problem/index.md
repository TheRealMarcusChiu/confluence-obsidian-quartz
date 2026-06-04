---
title: "Maximum Bipartite Matching Problem"
created: 2021-09-13T05:25:43.370-05:00
modified: 2021-09-13T05:25:43.370-05:00
parent: "[[Maximum／Max Flow]]"
children: []
---
- a <strong>matching</strong> in a [Bipartite Graph](https://www.geeksforgeeks.org/bipartite-graph) is a set of the edges chosen in such a way that no two edges share an endpoint.
- a <strong>maximum matching</strong> is a matching of maximum size (maximum number of edges)

### Solving Maximum Bipartite Matching Problem With Maximum Flow

maximum bipartite matching problem

![[Maximum Bipartite Matching Problem/maximum-bipartite-matching.png]]

problem transformed into a [[Maximum／Max Flow|maximum flow]] problem

![[Maximum Bipartite Matching Problem/maximum-bipartite-matching-maximum-flow.png|301]]

<strong>THEOREM:</strong> there are k matchings if and only if the [max flow](http://confluence.marcuschiu.com/display/NOT/Maximum+Flow+-+Max+Flow) value is k
