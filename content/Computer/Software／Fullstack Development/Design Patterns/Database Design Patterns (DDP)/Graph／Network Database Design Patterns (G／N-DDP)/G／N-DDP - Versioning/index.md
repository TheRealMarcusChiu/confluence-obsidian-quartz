---
title: "G／N-DDP - Versioning"
created: 2021-04-17T11:23:39.040-05:00
modified: 2021-07-06T21:24:11.672-05:00
parent: "[[Graph／Network Database Design Patterns (G／N-DDP)]]"
children: []
---
###### Graph/Network Database Design Patterns (G/N-DDP) - Versioning
- versioning graph/network data
- the main idea is to separate structure from state (note: structure is tied to identity)

# Versioning Graph Data

a graph database contains 2 types of building blocks:
- nodes/entities
- edges/relationships

thus, versioning graph data essentially means versioning these 2 types of data
### 1 - Versioning Nodes

split the node data into 2 disjoint datasets:
- node identity
- node state

![[G／N-DDP - Versioning/node-versioning.png|500]]
[[node-versioning.drawio]]
### 2 - Versioning Edges

split the relationship data into 2 disjoint datasets:
- edge identity - starting-node-id or edge-id
- edge state - may include starting-node-id, ending-node-id, and any other state properties of the relationship

![[G／N-DDP - Versioning/edge-versioning.png|600]]
[[edge-versioning.drawio]]
# Resources
- [https://www.youtube.com/watch?v=Cm1yd8d7qv0](https://www.youtube.com/watch?v=Cm1yd8d7qv0)
