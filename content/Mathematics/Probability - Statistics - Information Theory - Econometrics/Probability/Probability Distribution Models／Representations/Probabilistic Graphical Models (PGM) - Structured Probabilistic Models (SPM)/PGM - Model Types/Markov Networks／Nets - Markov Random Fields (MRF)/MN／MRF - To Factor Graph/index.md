---
title: "MN／MRF - To Factor Graph"
created: 2021-09-13T05:26:49.781-05:00
modified: 2021-09-13T05:26:49.781-05:00
parent: "[[Markov Networks／Nets - Markov Random Fields (MRF)]]"
children: []
---
- given a [[MN／MRF - To Factor Graph|Markov Network]] Graph (WITHOUT its corresponding [[MN／MRF - To Factor Graph|potential functions]]), it can be represented in MULTIPLE factor graphs
- given a [[MN／MRF - To Factor Graph|Markov Network]] Graph (WITH its corresponding [[MN／MRF - To Factor Graph|potential functions]]), it can ONLY be represented in a SINGLE factor graph

### Example

given the markov network graph as shown in the figure below, there are 2 possible factor graphs.

However, if the potential functions that came along with the Markov Network graph is: <strong>ɸ</strong> = {𝜙(𝐴, 𝐵), 𝜙(𝐵, 𝐶), 𝜙(𝐴, 𝐶)}, then only Factor Graph 2 is the correct interpretation of the tuple (Markov Network Graph, <strong>ɸ</strong>)

![](http://confluence.marcuschiu.com/download/attachments/10946845/markov-network-graph-andfactor-graphs.png?version=1&modificationDate=1582041427730&api=v2)
