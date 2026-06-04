---
title: "Probabilistic Inference - Iterative／Loopy／Cluster／Clique／Join／Junction Graph Belief Propagation"
created: 2021-09-13T05:28:29.618-05:00
modified: 2021-12-11T05:25:41.941-06:00
parent: "[[Probabilistic Inference - Message Passing - Belief Propagation - Sum-Product Algorithm]]"
children: []
---
<strong>Iterative/Loopy/Cluster/Clique/Join/Junction Graph Belief Propagation</strong>
````excerpt
- a type of [[Probabilistic Inference - Node Cluster／Clique／Join／Junction Scheme|Node Clustering Scheme]]
- a type of [[Probabilistic Inference - Approximate Inference|approximate inference algorithm]]
- used for graphs with cycle(s) (NOTE: can be used for graphs WITHOUT cycles, however, one should use better algorithms such as [[Probabilistic Inference - Cluster／Clique／Join／Junction Tree Belief Propagation|Tree Belief Propagation]])
- does not always converge, may diverge if not careful
- if converged, the solution may not be optimal/right
````
^excerpt

# Algorithm

given a [[Graphical Models|graphical model]] ⟨<strong>𝐗</strong>, <strong>𝐃</strong>, 𝐒, <strong>𝐅</strong>, <strong>𝐂</strong>⟩
- construct a [[Cluster／Clique／Join／Junction Graphs - Graph Decompositions|cluster graph]] of the graphical model
- assign each factor 𝐹<sub>𝑘</sub> in <strong>𝐅</strong> to a cluster in the cluster graph
- construct initial potentials (𝜓<sub>𝑖</sub>) of each cluster 𝑖 in the cluster graph
- initialize all messages 𝜆 to be 1:
	- 𝜆<sub>𝑖→𝑗</sub> = 1<font style="color: rgb(128,128,128);"> \# for all 𝑖 and 𝑗</font>
- repeat <font style="color: rgb(128,128,128);">\# until convergence or max repetitions</font>
	- select edge (𝑖,𝑗) connecting cluster 𝑖 to cluster 𝑗. the message passed from cluster 𝑖 to cluster 𝑗 is defined as:
		- 𝜆<sub>𝑖→𝑗</sub> = 𝛴<sub>𝑣𝑎𝑟𝑖𝑎𝑏𝑙𝑒𝑠-𝑖𝑛(𝑐𝑙𝑢𝑠𝑡𝑒𝑟<sub>𝑖</sub>) - 𝑠𝑒𝑝𝑠𝑒𝑡<sub>𝑖,𝑗</sub></sub>\[ 𝜓<sub>𝑖</sub>· 𝛱<sub>𝑘≠𝑗</sub> \[𝜆<sub>𝑘→𝑖</sub>\] \]
	- where:
		- 𝑠𝑒𝑝𝑠𝑒𝑡<sub>𝑖,𝑗</sub> = 𝑣𝑎𝑟𝑖𝑎𝑏𝑙𝑒𝑠-𝑖𝑛(𝑐𝑙𝑢𝑠𝑡𝑒𝑟<sub>𝑖</sub>) ∩ 𝑣𝑎𝑟𝑖𝑎𝑏𝑙𝑒𝑠-𝑖𝑛(𝑐𝑙𝑢𝑠𝑡𝑒𝑟<sub>𝑗</sub>)
- compute beliefs of each cluster:
	- 𝐵(𝑐𝑙𝑢𝑠𝑡𝑒𝑟<sub>𝑖</sub>) = 𝜓<sub>𝑖</sub>· 𝛱<sub>𝑘≠𝑗</sub> \[𝜆<sub>𝑘→𝑖</sub>\]

# Summary
- graph of clusters connected by sepsets
- adjacent clusters pass information to each other about variables in sepset
	- message from 𝑖 to 𝑗 summarizes everything 𝑖 knows, except information obtained from 𝑗
- algorithm may not converge
- the resulting beliefs are approximate marginals

# Variants
- <strong>Synchronous BP</strong> - all messages are updated in parallel
- <strong>Asynchronous BP</strong> - messages are updated one at a time in some order

Synchronous BP converges considerably worse than Asynchronous BP

message passing order of asynchronous BP makes a difference to extent and rate of convergence

![[Probabilistic Inference - Iterative／Loopy／Cluster／Clique／Join／Junction Graph Belief Propagation/synchronous-vs-asynchronous.png]]
# Convergence is a Local Property
- some messages converge soon
- other messages converge later or may never converge

# To Achieve BP Convergence

methods to reduce oscillations, increase the number of messages that converge, and speed up the convergence time:
- message smoothing/damping
> [!expand]- Click here to expand...
> original message
> - 𝜆<sub>𝑖→𝑗</sub> = 𝛴<sub>𝑐𝑙𝑢𝑠𝑡𝑒𝑟<sub>𝑖</sub> - 𝑠𝑒𝑝𝑠𝑒𝑡<sub>𝑖,𝑗</sub></sub>\[ 𝜓<sub>𝑖</sub>· 𝛱<sub>𝑘≠𝑗</sub> \[𝜆<sub>𝑘→𝑖</sub>\] \]
>
> smoothed/damped message
> - 𝜆<sub>𝑖→𝑗</sub> = <font style="color: rgb(0,128,0);">𝛼</font>·(𝛴<sub>𝑐𝑙𝑢𝑠𝑡𝑒𝑟<sub>𝑖</sub> - 𝑠𝑒𝑝𝑠𝑒𝑡<sub>𝑖,𝑗</sub></sub>\[ 𝜓<sub>𝑖</sub>· 𝛱<sub>𝑘≠𝑗</sub> \[𝜆<sub>𝑘→𝑖</sub>\] \]) + <font style="color: rgb(0,128,0);">(1-𝛼)</font>·𝜆<sub>𝑖→𝑗</sub><sup>(𝑜𝑙𝑑)</sup>
>
> > [!list-indent-undo]
> > > [!indent]
> > > ![[Probabilistic Inference - Iterative／Loopy／Cluster／Clique／Join／Junction Graph Belief Propagation/message-smoothing-comparisons.png|400]]
- intelligent/informed message ordering
> [!expand]- Click here to expand...
> <strong>Tree Re-Parameterization</strong>
>
> > [!expand]- Click here to expand...
> > algorithm:
> > - pick a subtree of graph and pass messages to calibrate
> > - repeat step 1
> >
> > all trees must cover all edges
> >
> > performance is improved if trees are larger
>
> <strong>Residual Belief Propagation</strong> - pass messages between 2 clusters whose beliefs over the sepset disagree the most

# Resources
- [Daphne Koller's Lecture](https://www.coursera.org/lecture/probabilistic-graphical-models-2-inference/belief-propagation-algorithm-1FE96)
