---
title: "Interior Gateway Protocols (IGP) or Intra-Domain Routing Protocols (IDRP)"
created: 2019-03-16T20:49:27.904-05:00
modified: 2023-11-16T17:43:42.707-06:00
parent: "[[Dynamic Routing Protocols]]"
children:
  - "[[Distant Vector Protocols]]"
  - "[[Hybrid IGPs]]"
  - "[[Link-State Protocols]]"
---
<strong>Interior Gateway Protocols (IGPs)</strong>, also called <strong>Intra-Domain Routing Protocols (IDRP)</strong>
````excerpt
- are [[Dynamic Routing Protocols|dynamic routing protocols]] used by [[Router|routers]] to exchange routing information WITHIN a single [Autonomous System](http://doc.marcuschiu.com/log-page/5c6da06d154cee28cd8f407b)
- the whole point of these protocols is to allow forwarding IP packets on the <em>"shortest"</em> path possible based on <em>link cost</em>
````
^excerpt

# Interior Gateway Protocol Types
- <strong>[[Distant Vector Protocols|Distance Vector]] - </strong>each node talks only to its directly connected neighbors, but it tells them everything it has learned (i.e., distance to all nodes)
- <strong>[[Link-State Protocols|Link State]] - </strong>each node talks to all other nodes, but it tells them only what it knows for sure (i.e., only the state of its directly connected links)
- <strong>[[Hybrid IGPs|Hybrid]] - </strong>a combination of the 2 above

2 circumstances under which a node decides to send a routing update to its neighbors:
- <strong>periodic</strong> - each node automatically sends an update message every so often
- <strong>triggered</strong> - a node sends an update message whenever there is a change to its routing table. This change can be caused by the node detection of a link failure or upon receiving an update from one of its neighbors

# Metrics - Determining Link Cost
- conventional wisdom now holds that dynamically changing metrics are too unstable
- static metrics are the norm
- one common approach to setting metrics is to use a constant multiplied by (1/link bandwidth)
- TODO page 262

# [[Integrating EGP & IGP|Integrating Inter-Domain Routing & Intra-Domain Routing]]
