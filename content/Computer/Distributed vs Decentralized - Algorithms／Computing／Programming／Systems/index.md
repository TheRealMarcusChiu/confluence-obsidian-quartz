---
title: "Distributed vs Decentralized - Algorithms／Computing／Programming／Systems"
created: 2021-03-30T18:29:22.092-05:00
modified: 2021-12-17T15:52:34.571-06:00
parent: "[[Computer]]"
children:
  - "[[CAP Theorem (Consistency - Availability - Partition Tolerance)]]"
  - "[[Distributed - Algorithms／Computing／Programming／Systems]]"
---
# Decentralization Types

When people talk about software decentralization, there are actually <em>three separate axes</em> of centralization/decentralization that they may be talking about. While in some cases it is difficult to see how you can have one without the other, in general, they are quite independent of each other. The axes are as follows:
- <strong>Architectural (de)centralization</strong> — how many physical computers is a system made up of? How many of those computers can it tolerate breaking down at any single time?
- <strong>Political (de)centralization</strong> — how many individuals or organizations ultimately control the computers that the system is made up of?
- <strong>Logical (de)centralization </strong>— does the interface and data structures that the system presents and maintains look more like a single monolithic object, or an amorphous swarm? One simple heuristic is: if you cut the system in half, including both providers and users, will both halves continue to fully operate as independent units

# Distributed vs Decentralized
- <strong>distribution</strong> refers to differences in location
- <strong>centralization</strong> and <strong>decentralization</strong> refer to levels of control

A distributed system is a model in which components located on networked computers communicate and coordinate their actions by passing messages

A decentralized system is also a distributed system

A key point is that decentralization has no central point of control
### Technical Terminology
- <strong>decentralized systems</strong> - systems where components operate on local information to accomplish goals, rather than the result of a central ordering influence (this is about decision locality)
- <strong>federated systems</strong> - a cohesive unit formed of smaller subunits that collaborate to form the whole, but which retain significant local autonomy. (this is about retaining some autonomy)
- <strong>distributed systems</strong> - a system in which computation is distributed across components, which communicate and coordinate their actions by passing messages. The components interact with each other in order to achieve a common goal. (this is about communication and message passing)
- <strong>peer-to-peer</strong> or <strong>peering systems</strong> - systems in which a set of peers are equally privileged, equipotent participants in collaborative goals. (this is about equipotency)

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
