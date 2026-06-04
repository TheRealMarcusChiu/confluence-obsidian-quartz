---
title: "Centrality(Node／Edge／Sub-Graph Centrality) - Degree／Eigenvector／Closeness／Betweenness Centrality"
created: 2022-04-12T00:25:50.236-05:00
modified: 2022-05-05T00:45:12.816-05:00
parent: "[[Graph Theory]]"
children: []
---
###### Centrality
- <strong>node centrality</strong> answers the question "What characterizes an important vertex?"
- <strong>edge centrality</strong> answers the question "What characterizes an important edge?"
- <strong>sub-graph centrality</strong> answers the question "What characterizes an important sub-graph?"

# Centrality - Measure's Characteristics & Classes
###### Characterization by Network Flow

A flow can be categorized on different transfer types:
- <strong>indivisible transfer</strong> - like a package delivery going from the delivery site to the client's house
- <strong>serial duplication transfer</strong> - an item is duplicated over 1 link at a time (e.g. propagation of information through gossip, with the information being propagated in a <strong><em>private</em></strong> way)
- <strong> parallel duplication transfer</strong> - an item is duplicated to several links at the same time (e.g. radio broadcast that provides the same information to many listeners at once)

A flow can be constrained to different walk types:
- <strong>[[Graph Theory - Terminology|geodesics]]</strong> - shortest paths
- <strong>[[Graph Theory - Terminology|paths]]</strong> - no vertex is visited more than once
- <strong>[[Graph Theory - Terminology|trails]]</strong> - no edge is traversed more than once
- <strong> [[Graph Theory - Terminology|walks]]</strong> - vertices and edges can be visited/traversed multiple times
- etc

###### Characterization of Walk Structure

How "centrality" is constructed:
- <strong>radial</strong> - count walks that start or end at the given vertex (e.g. degree centrality & eigenvector centrality)
- <strong>medial</strong> - count walks that pass through the given vertex (e.g. betweenness centrality)

How counting is captured:
- <strong>volume</strong> of walk - the total number of walks of the given type (e.g. degree, eigenvector, and betweenness centrality)
- <strong>length</strong> of walk - captures the distance from a given vertex to the remaining vertices in the graph (e.g. Freeman's closeness centrality)

# Centrality - The Heart of Radial-Volume Centralities

The heart of such measures is the observation that the powers of the graph's adjacency matrix give the number of walks of length given by that power. Similarly, the matrix exponential is also closely related to the number of walks of a given length. An initial transformation of the adjacency matrix allows a different definition of the type of walk counted.

The centrality of a vertex can be expressed as an infinite sum, either

> [!indent]
> 𝛴<sub>0≤𝑘≤∞</sub> \[𝐴<sub>𝑅</sub><sup>𝑘</sup>𝛽<sup>𝑘</sup>\]

for matrix powers or

> [!indent]
> 𝛴<sub>0≤𝑘≤∞</sub> \[(𝐴<sub>𝑅</sub>𝛽)<sup>𝑘</sup> / 𝑘!\]

for [[Matrix Exponentiation／Exponentials|matrix exponentials]], where
- 𝑘 is walk length,
- 𝐴<sub>𝑅</sub> is the transformed adjacency matrix, and
- 𝛽 is a discount parameter that ensures convergence of the sum.

Utilizing matrix powers and/or matrix exponentials
- <strong>Bonacich's family of measures</strong> does not transform the adjacency matrix
- <strong>[alpha centrality](https://en.wikipedia.org/wiki/Alpha_centrality)</strong> replaces the adjacency matrix with its [resolvent](https://en.wikipedia.org/wiki/Resolvent_formalism)
- <strong>subgraph centrality</strong> replaces the adjacency matrix with its trace
- A startling conclusion is that regardless of the initial transformation of the adjacency matrix, all such approaches have common limiting behavior:
	- as 𝛽 approaches zero, the indices converge to <strong>degree centrality</strong>
	- as 𝛽 approaches its maximal value, the indices converge to <strong>eigenvalue centrality</strong>

# Centrality - Limitations
- the ranking only orders vertices by importance, it does not quantify the difference in importance between different levels of the ranking
- the features that (correctly) identify the most important vertices in a given network/application do not necessarily generalize to the remaining vertices. For the majority of other network nodes, the rankings may be meaningless. This makes sense because such measures find the most important vertices, which are sub-optimal for the remainder of the network. This explains why, for example, only the first few results of a Google image search appear in a reasonable order. The [[PageRank (PR)|PageRank]] is a highly unstable measure, showing frequent rank reversals after small adjustments of the jump parameter

# Node Centrality - Measures

Many centralities on a spectrum from those concerned with:
- <strong>degree centrality</strong> - counts walks of length one
	- measures the number of incoming or outgoing (or both) relationships from a node
	- <strong>indegree centrality</strong> -
	- <strong> outdegree centrality</strong> -
- <strong>two-degree centrality</strong> - counts walks of length two
- <strong>eigenvector centrality</strong> or <strong>eigen-centrality</strong> - counts walks of infinite length
	- connections from high-scoring nodes contribute more to the score of a node than connections from low-scoring nodes. A high eigenvector score means that a node is connected to many nodes who themselves have high scores

Other centrality measures:
- <strong>closeness centrality</strong>
	- is generally interpreted as the ability to spread information very efficiently through a graph
	- is generally interpreted either as a measure of access efficiency or of independence from potential control by intermediaries
	- in a connected graph, it is calculated as the reciprocal of the sum of the length of the shortest paths between the node and all other nodes in the graph
		- raw form
			- 𝐶(𝑥) = 1 / \[ 𝛴<sub>𝑦∊𝑉(𝐺)</sub>𝑑(𝑥,𝑦) \] <font style="color: rgb(122,134,154);">\# where 𝑑(𝑥,𝑦) is the distance between 𝑥 and 𝑦</font>
		- normalized form (normalization allows comparisons between nodes of graphs of different sizes):
			- 𝐶(𝑥) = \[𝑛 - 1\] / \[ 𝛴<sub>𝑦∊𝑉(𝐺)</sub>𝑑(𝑥,𝑦) \] <font style="color: rgb(122,134,154);">\# where 𝑛 = |𝑉(𝐺)|</font>
			- 𝐶(𝑥) = \[𝑛\] / \[ 𝛴<sub>𝑦∊𝑉(𝐺)</sub>𝑑(𝑥,𝑦) \] <font style="color: rgb(122,134,154);">\# -1 is dropped for large networks</font>
- <strong>harmonic/valued centrality</strong>
	- is a variant of closeness centrality, that was invented to solve the problem the original formula had when dealing with unconnected graphs
	- in a disconnected graph, it is calculated as the sum of the reciprocal of the length of the shortest path between the node and all other nodes in the graph
		- raw form
			- 𝐶(𝑥) = 𝛴<sub>𝑦∊𝑉(𝐺)</sub>1/𝑑(𝑥,𝑦) <font style="color: rgb(122,134,154);">\# 𝑑(𝑥,𝑦) = ∞ when 𝑥 and 𝑦 is disconnected</font>
		- normalized form (normalization allows comparisons between nodes of graphs of different sizes):
			- 𝐶(𝑥) = 𝛴<sub>𝑦∊𝑉(𝐺)</sub>(𝑛 - 1)/𝑑(𝑥,𝑦)
			- 𝐶(𝑥) = 𝛴<sub>𝑦∊𝑉(𝐺)</sub>(𝑛)/𝑑(𝑥,𝑦) <font style="color: rgb(122,134,154);">\# -1 is dropped for large networks</font>
- <strong>betweenness centrality</strong>
	- is generally interpreted as the amount of influence or control a node has over the flow of information in a graph
	- is generally interpreted as a measure of others’ dependence on a given node, and therefore as a measure of potential control
	- is calculated first:
		- calculating the shortest paths between all pairs of nodes in a graph
		- each node receives a score, based on the number of shortest paths that pass through the node
		- nodes that more frequently lie on shortest paths between other nodes will have higher betweenness centrality scores
- <strong>Freeman's centrality</strong> - the total [[Graph Theory - Terminology|geodesic]] distance from a given vertex to all other vertices

# Sub-Graph Centrality

TODO [Shapley value](https://en.wikipedia.org/wiki/Shapley_value)
# Resources
- [https://en.wikipedia.org/wiki/Centrality](https://en.wikipedia.org/wiki/Centrality)
- [https://www.sscnet.ucla.edu/soc/faculty/mcfarland/soc112/cent-ans.htm](https://www.sscnet.ucla.edu/soc/faculty/mcfarland/soc112/cent-ans.htm)
