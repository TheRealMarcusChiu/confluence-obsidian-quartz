---
title: "External BGP (eBGP)"
created: 2019-10-23T11:01:47.848-05:00
modified: 2019-11-20T13:11:46.905-06:00
parent: "[[Border Gateway Protocol (BGP)]]"
children: []
---
commonly referred as [[Border Gateway Protocol (BGP)]]
### How it Works

consider the very simple example network in Figure 4.5

assume that the providers are [[Autonomous System (AS) - Domain|transit autonomous system]] networks, while the customer networks are [[Autonomous System (AS) - Domain|stub autonomous system]] networks.
- a BGP speaker for the AS of provider A (i.e. AS 2) would be able to advertise reachability information for each of the network numbers assigned to customers P and Q. Thus, it would say, in effect, “The networks 128.96, 192.4.153, 192.4.32, and 192.4.3 can be reached directly from AS 2.”
- the backbone network, on receiving this advertisement, can advertise, “The networks 128.96, 192.4.153, 192.4.32, and 192.4.3 can be reached along the path ⟨AS 1, AS 2⟩.” Similarly, it could advertise, “The networks 192.12.69, 192.4.54, and 192.4.23 can be reached along the path ⟨AS 1, AS 3⟩.”

![[External BGP (eBGP)/1.png|450]]

an important job of BGP is to prevent the establishment of looping paths. For example, consider the network illustrated in Figure 4.6.

Figure 4.5 differs from Figure 4.5 only in the addition of an extra link between AS 2 and AS 3, but the effect now is that the graph of autonomous systems has a loop in it.

Suppose AS 1 learns that it can reach network 128.96 through AS 2, so it advertises this fact to AS 3, who in turn advertises it back to AS 2. In the absence of any loop prevention mechanism, AS 2 could now decide that AS 3 was the preferred route for packets destined for 128.96. If AS 2 starts sending packets addressed to 128.96 to AS 3, AS 3 would send them to AS 1; AS 1 would send them back to AS 2; and they would loop forever. This is prevented by carrying the complete AS path in the routing messages. In this case, the advertisement for a path to 128.96 received by AS 2 from AS 3 would contain an AS path of ⟨AS 3, AS 1, AS 2, AS 4⟩. AS 2 sees itself in this path, and thus concludes that this is not a useful path for it to use

for loop prevention to work, AS are assigned unique 16-bit numbers

![[External BGP (eBGP)/2.png|450]]
