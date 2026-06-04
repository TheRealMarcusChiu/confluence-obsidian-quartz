---
title: "Distant Vector - Count to Infinity Problem"
created: 2019-12-03T14:53:17.983-06:00
modified: 2019-12-03T14:57:13.146-06:00
parent: "[[Distant Vector Protocols]]"
children: []
---
any [[Distant Vector Protocols|Distant-Vector Protocol]] is susceptible to the <strong>Count to Infinity Problem</strong>
### <strong>Problem</strong>

suppose, for example, that the link from A to E goes down. In the next round of updates, A advertises a distance of infinity to E, but B and C advertise a distance of 2 to E. Depending on the exact timing of events, the following might happen: Node B, upon hearing that E can be reached in 2 hops from C, concludes that it can reach E in 3 hops and advertises this to A; node A concludes that it can reach E in 4 hops and advertises this to C; node C concludes that it can reach E in 5 hops; and so on. This cycle stops only when the distances reach some number that is large enough to be considered infinite. In the meantime, none of the nodes actually knows that E is unreachable, and the routing tables for the network do not stabilize
### <strong>Solutions</strong>

possible solutions:
- use some relatively small number as an approximation of infinity, such as 16
- <strong>split horizon</strong> - when node sends a routing update to its neighbors, it does not send those routes it learned from each neighbor back to that neighbor. for example, if B has the route entry (E, 2, A) in its table, then it knows it must have learned this route from A, and so whenever B sends a routing update to A, it does not include the route entry (E, 2) in that update
- <strong>split horizon with poison reverse</strong> - B actually sends that route back to A, but it puts negative information in the route to ensure that A will not eventually use B to get to E. for example, B sends the route (E, ∞) to A

the problem with <strong>split horizon</strong> and <strong>split horizon with poison reverse</strong> techniques is that they only work for routing loops that involve 2 nodes

![[Distant Vector - Count to Infinity Problem/4.png|400]]
