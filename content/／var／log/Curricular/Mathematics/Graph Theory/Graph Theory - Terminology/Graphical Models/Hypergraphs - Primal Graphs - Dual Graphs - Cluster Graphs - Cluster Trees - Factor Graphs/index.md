---
title: "Hypergraphs - Primal Graphs - Dual Graphs - Cluster Graphs - Cluster Trees - Factor Graphs"
created: 2021-09-13T05:25:27.636-05:00
modified: 2021-09-13T05:25:27.636-05:00
parent: "[[Graphical Models]]"
children:
  - "[[Cluster／Clique／Join／Junction Graphs - Graph Decompositions]]"
  - "[[Moral Graph - Moralization]]"
---
###### Hypergraph

any [[Graphical Models|graphical model]] can be associated with a [[Hypergraphs - Primal Graphs - Dual Graphs - Cluster Graphs - Cluster Trees - Factor Graphs|hypergraph]], where X is the set of nodes and H is the scopes of the functions in F, namely H = {}. Therefore, the [[Hypergraphs - Primal Graphs - Dual Graphs - Cluster Graphs - Cluster Trees - Factor Graphs|dual graph]] of the hypergraph of a graphical model associates a node with each function's scope and an arc with each 2 nodes corresponding to scopes
###### Primal Graph
The <strong>Primal Graph </strong>of a [[Graphical Models|graphical model]] is an undirected graph that has variables as its vertices and an edge connects any two variables that appear in the scope of the same function
- is an effective way to capture the structure of the knowledge. In particular, graph separation is a sound way to capture [[Probability Independence (Marginal Independence - Conditional Independence)|conditional independencies]] relative to [[Univariate Probability Distribution|probability distributions]] over directed and undirected [[Graphical Models|graphical models]]
- in the context of [[Graph Theory - Terminology|directed acyclic graphs]] & [[Bayesian Networks (BN)|Bayesian Networks]], primal graphs are also called [[Moral Graph - Moralization|moral graphs]]
- in the context of [[Probabilistic Graphical Models (PGM) - Structured Probabilistic Models (SPM)|probabilistic graphical models]], primal graphs are also called [[I-Map - D-Map - Minimal I-Map - Maximal D-Map - P-Map - I-Equivalence|i-maps (independence maps)]]
- in the context of [[Relational／Row-Oriented Database Management System (RDBMS)|relational databases]], primal graphs capture the notion of embedded multi-valued dependencies (EMVDs)

All advanced algorithms for graphical models exploit their graphical structure. Besides the primal graph, other graph depictions include hyper-graphs, dual graphs, and factor graphs
## <strong>Graph Depictions</strong>

the arcs of the primal graph do not provide a one to one correspondence with scopes. Hypergraphs and dual graphs are representations that provide such one-to-one correspondence
###### Hypergraph

a hypergraph is a pair 𝓗 = {𝐕, 𝐒} where:
- 𝐕 = {𝑣<sub>1</sub>, ..., 𝑣<sub>n</sub>} is a set of nodes
- 𝐒 = {𝑆<sub>1</sub>, ..., 𝑆<sub>l</sub>} is a set of subsets of 𝐕 called hyperedges (e.g. every 𝑆<sub>𝑖</sub>⊆𝐕)

a related representation that converts a hypergraph into a regular graph is the dual graph

<strong>for example</strong>, the figure to the right depicts a hypergraph 𝓗 = {𝐕, 𝐒} where:
- 𝐕 = {A, B, C, D, E, F}
- 𝐒 = <strong>{</strong>{A,B,C}, {C,D,E}, {E,F,A}, {A,C,E}<strong>}</strong>

###### Primal Graph

a hypergraph 𝓗 = {𝐕, 𝐒} can be mapped to a primal graph 𝓗<sup>primal</sup> = {𝐕<sup>primal</sup>, 𝐄<sup>primal</sup>} where:
- 𝐕<sup>primal</sup> as its set of nodes
- 𝐄<sup>primal</sup> as a set of edges for any two nodes are connected if they appear in the same hyperedge 𝑆<sub>1</sub>

<strong>for example</strong>, the figure to the right depicts a primal graph 𝓗<sup>primal</sup> where:
- 𝐕<sup>primal</sup> = {A, B, C, D, E, F}
- 𝐄<sup>primal</sup> = <strong>{</strong>{A,B}, {A,C}, {B,C}, {C,D}, {C,E}, {D,E}, {E,F}, {A,E}, {A,F}<strong>}</strong>

###### Dual Graph

a hypergraph 𝓗 = {𝐕, 𝐒} can be mapped to a dual graph 𝓗<sup>dual</sup> = {𝐕<sup>dual</sup>, 𝐄<sup>dual</sup>} where:
- 𝐕<sup>dual</sup> = 𝐒
	- in other words, the nodes of the dual graph are the hyperedges 𝐒 = {𝑆<sub>1</sub>, ..., 𝑆<sub>l</sub>} in 𝓗
- (𝑆<sub>i</sub>, 𝑆<sub>j</sub>) ∈ 𝐄<sup>primal</sup> iff 𝑆<sub>i</sub> ∩ 𝑆<sub>j</sub>≠ ∅
	- in other words, there exist an edge between 2 nodes if the intersection between their corresponding hyperedges is not empty

for example, the figure to the right depicts a dual graph 𝓗<sup>dual</sup> where:
- 𝐕<sup>dual</sup> = <strong>{</strong>{ABC}, {CDE}, {EFA}, {ACE}<strong>}</strong>
- 𝐄<sup>dual</sup> = <strong>{</strong>{ABC,CDE}, {ABC,EFA}, {ABC,ACE}, {CDE,EFA}, {CDE,ACE}, {EFA,ACE}<strong>}</strong>

###### Dual Graph - Variants
- [[Cluster／Clique／Join／Junction Graphs - Graph Decompositions|Cluster Graphs]] - a relaxed Dual Graph, where nodes can be combined and edges removed as long as it satisfies the cluster graph properties
- [[Cluster／Clique／Join／Junction Trees - Tree Decompositions - Tree-Width|Cluster Trees]] - a cluster graph with no cycles

###### Factor Graph

a hypergraph 𝓗 = {𝐕, 𝐒} can be mapped to a factor graph 𝓗<sup>factor</sup> = {𝐕<sup>variable</sup>, 𝐕<sup>function</sup>, 𝐄<sup>factor</sup>} where:
- 𝐕<sup>variable</sup>variable nodes = 𝐕
- 𝐕<sup>function</sup> function nodes = 𝐒
- (𝑣<sub>𝑖</sub>, 𝑆<sub>𝑗</sub>) ∈ 𝐄<sup>factor</sup> iff 𝑣<sub>𝑖</sub>∊𝑆<sub>𝑗</sub>
	- in other words, each function node is connected to all the variable nodes appearing in the scope

![[Hypergraphs - Primal Graphs - Dual Graphs - Cluster Graphs - Cluster Trees - Factor Graphs/hyper-primal-dual-join-tree-factor-graph.png|180]]
