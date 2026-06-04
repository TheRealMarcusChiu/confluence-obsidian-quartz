---
title: "LP - Minimum Cost Flow Problem"
created: 2021-09-13T05:26:17.286-05:00
modified: 2021-09-13T05:26:17.286-05:00
parent: "[[LP - Network Flow Problems]]"
children: []
---
[https://www.youtube.com/user/CosmoLearning/search?query=flow](https://www.youtube.com/user/CosmoLearning/search?query=flow)
# <strong>Minimum Cost Flow Problem</strong>
###### given:
- given a network with N nodes and links among them
- the link from node i to j has a given capacity C<sub>ij</sub> ≥ 0 (C<sub>ij</sub> and C<sub>ji</sub> may be different)
- each node i is associated with a given number bi, the source rate of the node:
	- if b<sub>i</sub>\>0, the node is a source
	- if b<sub>i</sub>\<0, the node is a sink
	- if b<sub>i</sub>=0, the node is a “transshipment” node that only forwards the flow with no loss and no gain
- each link is associated with a cost factor a<sub>ij</sub> ≥ 0. The value of a<sub>ij</sub> is the cost of sending unit amount of flow on link (i,j). Thus, sending x<sub>ij</sub> amount of flow on the link costs a<sub>ij</sub>x<sub>ij</sub>

###### constraints:
- <strong>capacity constraint:</strong> The flow on each link cannot exceed the capacity of the link
- <strong>flow conservation:</strong> The total outgoing flow of a node minus the total incoming flow of the node must be equal to the source rate of the node. That is, the difference between the flow out and into the node is exactly what the node produces or sinks. For transshipment nodes (b<sub>i</sub> = 0) the outgoing and incoming flow amounts are equal

###### objective:
- find the amount of flow sent on each link, so that the constraints are satisfied and the total cost of the flow is minimized

# <strong>Linear Programming [Standard Formulation](http://confluence.marcuschiu.com/pages/viewpage.action?pageId=2656752)</strong>
- <strong>objective function:</strong>
  min Z = Σ<sub>ij</sub>\[a<sub>ij</sub>x<sub>ij</sub>\]
- <strong>linear constraints:</strong>
  xij ≤ C<sub>ij</sub> <font style="color: rgb(128,128,128);">\# capacity constraint</font>
  Σ<sub>j</sub> \[x<sub>ij</sub>\] - Σ<sub>k</sub> \[x<sub>ki</sub>\] = b<sub>i</sub> <font style="color: rgb(128,128,128);">\# flow conservation</font><sub></sub>
- <strong>non-negative variables:</strong>
  ∀<sub>ij</sub> \[x<sub>ij</sub> ≥ 0\]
