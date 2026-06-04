---
title: "Exterior Gateway Protocols (EGPs) or Inter-Domain Routing Protocols (IDRP)"
created: 2019-03-17T00:49:28.145-05:00
modified: 2019-10-21T12:01:32.160-05:00
parent: "[[Dynamic Routing Protocols]]"
children:
  - "[[Border Gateway Protocol (BGP)]]"
---
<strong>Exterior Gateway Protocols (EGPs)</strong> are also called <strong>Inter-Domain Routing Protocols (IDRP)</strong>. EGPs are [[Dynamic Routing Protocols|dynamic routing protocols]] used by [[Router|routers]] to exchange routing information between 2 distinct [[Autonomous System (AS) - Domain|Autonomous Systems]] (AS)
### Inter-Domain Routing Protocols: 2 Major Protocols
- <strong>Exterior Gateway Protocol (EGP)</strong> - not used because it constrained the topology of Internet to a treelike topology and did not allow topology to become more general
- [[Border Gateway Protocol (BGP)]] - replaced EGP and is in its fourth generation (BGP-4)

### Inter-Domain Routing Protocols: Goals

goals of Inter-Domain Routing:
- find a path from source to destination that is loop free
- paths must be compliant with policies of various ASs (each AS has its own complex <em>routing policies)</em>
- must be scalable
- must be autonomous (the autonomous nature raises trust issues)

### Traffic Types
- <strong>local traffic</strong> - traffic that originates and terminates within an AS
- <strong>transit traffic</strong> - traffic that passes through an AS

### [[Integrating EGP & IGP|Integrating Inter-Domain Routing & Intra-Domain Routing]]

![[Exterior Gateway Protocols (EGPs) or Inter-Domain Routing Protocols (IDRP)/1.png|500]]
