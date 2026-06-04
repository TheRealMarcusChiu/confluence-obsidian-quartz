---
title: "Distributed - Consensus Agreement Problem (CAP)"
created: 2019-06-14T14:05:21.395-05:00
modified: 2026-04-23T12:04:58.812-05:00
parent: "[[Distributed - Agreement Problems]]"
children:
  - "[[Paxos Consensus Algorithm]]"
  - "[[Raft Consensus Algorithm]]"
  - "[[Two-Phase Commit Protocol]]"
---
<strong>Distributed Consensus Agreement Problem (CAP)</strong> is a type of [[Distributed - Agreement Problems|Distributed Agreement Problem]]

In CAP, all processes propose a value. Specifically, process P<sub>i</sub>proposes value v<sub>i</sub> by executing Cons\_propose(v<sub>i</sub>) and decides on a value u<sub>i</sub>by calling Cons\_decide().

A protocol that solves the CAP must satisfy the following properties:
- TERMINATION - all non-faulty processes eventually decide
- AGREEMENT - all non-faulty processes decide on the same value
- VALIDITY -  if all non-faulty processes propose the same value, then all of them decide on the value proposed

# Distributed CAP Algorithms/Protocols
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
