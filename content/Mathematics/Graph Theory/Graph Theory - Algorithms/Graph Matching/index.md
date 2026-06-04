---
title: "Graph Matching"
created: 2022-02-04T02:50:40.151-06:00
modified: 2022-02-04T03:03:57.750-06:00
parent: "[[Graph Theory - Algorithms]]"
children: []
---
###### Graph Matching
- is the problem of finding a similarity between [[Graph Theory|graphs]]

# Graph Matching & AI

[[Graph Theory|Graphs]] are commonly used to encode structural information in many fields, including [[Computer Vision (CV)|computer vision]] and [[Machine Learning (ML) - Pattern Recognition|pattern recognition]], and graph matching is an important tool in these areas. In these areas, it is commonly assumed that the comparison is between the data graph and the model graph
# Graph Matching - Types
###### Exact Graph Matching
- [graph isomorphism problem](https://en.wikipedia.org/wiki/Graph_isomorphism_problem) - the problem of exactly matching a graph to another graph
- [subgraph isomorphism problem](https://en.wikipedia.org/wiki/Subgraph_isomorphism_problem) - the problem of exactly matching a graph to a part of another graph

###### Inexact Graph Matching

The inexact graph matching refers to matching problems when exact matching is impossible, e.g., when the number of vertices in the two graphs are different. In this case, it is required to find the best possible match. For example, in [image recognition](https://en.wikipedia.org/wiki/Image_recognition) applications, the results of [image segmentation](https://en.wikipedia.org/wiki/Image_segmentation) in [image processing](https://en.wikipedia.org/wiki/Image_processing) typically produce data graphs with the numbers of vertices much larger than in the model graphs data expected to match against. In the case of [attributed graphs](https://en.wikipedia.org/wiki/Attributed_graph), even if the numbers of vertices and edges are the same, the matching still maybe only inexact.

Two categories of search methods are the ones based on the identification of possible and impossible pairings of vertices between the two graphs and methods which formulate graph matching as an [optimization problem](https://en.wikipedia.org/wiki/Optimization_problem). [Graph edit distance](https://en.wikipedia.org/wiki/Graph_edit_distance) is one of the [similarity measures](https://en.wikipedia.org/wiki/Similarity_measure) suggested for graph matching. The class of algorithms is called error-tolerant graph matching.
# Graph Matching - Resources
- [https://en.wikipedia.org/wiki/Graph_matching](https://en.wikipedia.org/wiki/Graph_matching)
- [https://en.wikipedia.org/wiki/Matching_(graph_theory)](https://en.wikipedia.org/wiki/Matching_(graph_theory))
