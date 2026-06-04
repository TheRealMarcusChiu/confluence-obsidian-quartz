---
title: "LP - Max Flow Problem"
created: 2021-09-13T05:26:17.109-05:00
modified: 2021-09-13T05:26:17.109-05:00
parent: "[[LP - Network Flow Problems]]"
children: []
---
# <strong>Max Flow Problem</strong>
###### given:
- given a network with N nodes and links among them
- the capacity of the i → j link is C<sub>ij</sub>≥ 0 (i,j = 1, ..., N)
- 2 distinguished nodes:

###### constraints:
- capacity constraint: The flow on each link cannot exceed the capacity of the link
- flow conservation: The total outgoing flow of a node minus the total incoming flow of the node must be equal to the source rate of the node. That is, the difference between the flow out and into the node is exactly what the node produces or sinks. For transshipment nodes (b<sub>i</sub> = 0) the outgoing and incoming flow amounts are equal

###### objective:
- find the maximum amount of flow that can be sent through the network from the source to the destination, such that the link capacity is not exceeded on any link and the flow conservation constraint is satisfied at every intermediate (transshipment) node

# <strong>Linear Programming [Standard Formulation](http://confluence.marcuschiu.com/pages/viewpage.action?pageId=2656752)</strong>
- <strong>objective function:</strong>
  max Z = Σ<sub>j</sub>\[x<sub>sj</sub>\] - Σ<sub>k</sub>\[x<sub>ks</sub>\]
- <strong>linear constraints:</strong>
  xij ≤ C<sub>ij</sub>
  Σ<sub>j</sub> \[x<sub>ij</sub>\] - Σ<sub>k</sub> \[x<sub>ki</sub>\] = 0 <font style="color: rgb(128,128,128);">\# (∀i ≠ s,d)</font><sub></sub>
- <strong>non-negative variables:</strong>
  ∀<sub>ij</sub> \[x<sub>ij</sub> ≥ 0\]

# <strong>Implementation</strong>
- [Maximum Flow - Max Flow](http://confluence.marcuschiu.com/display/NOT/Maximum+Flow+-+Max+Flow)
