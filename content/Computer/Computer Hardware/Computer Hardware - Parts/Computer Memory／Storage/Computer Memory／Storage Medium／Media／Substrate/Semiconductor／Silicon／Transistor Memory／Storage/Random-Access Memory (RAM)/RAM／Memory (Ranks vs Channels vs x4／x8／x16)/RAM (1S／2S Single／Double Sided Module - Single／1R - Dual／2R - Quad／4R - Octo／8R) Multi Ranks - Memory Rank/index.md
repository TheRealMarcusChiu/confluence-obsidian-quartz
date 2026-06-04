---
title: "RAM (1S／2S Single／Double Sided Module - Single／1R - Dual／2R - Quad／4R - Octo／8R) Multi Ranks - Memory Rank"
created: 2024-09-03T22:39:11.317-05:00
modified: 2025-10-16T13:59:21.034-05:00
parent: "[[RAM／Memory (Ranks vs Channels vs x4／x8／x16)]]"
children: []
---
###### RAM (1S/2S Single/Double Sided Module - Single/1R - Dual/2R - Quad/4R - Octo/8R) Multi Ranks - Memory Rank
````excerpt
- sometimes memory modules are designed with two or more independent sets of [[Dynamic RAM (DRAM)|DRAM]] chips connected to the same address and data buses; each such set is called a rank.
- ranks that share the same slot, only one rank may be accessed at any given time; it is specified by activating the corresponding rank's chip select (CS) signal. The other ranks on the module are deactivated for the duration of the operation by having their corresponding CS signals deactivated
- the [[Memory Controller - Memory Chip Controller (MCC) - Memory Controller Unit (MCU)|memory controller]] must explicitly support the concept of ranks in order to use multi-rank DIMMs properly
````
^excerpt

# Types

Sides
- <strong>Single Sided (1S)</strong> - contains memory chips on a single side of the module
- <strong>Double Sided (2S)</strong> - contains memory chips on both sides of the module

Ranks
- <strong>Single Rank (1R)</strong> - contains one set of memory chips, which offers lower latency but a lower capacity.
- <strong>Dual Rank (2R)</strong> - contains two sets of memory chips, which offers a balance between capacity and latency.
- <strong>Quad Rank (4R)</strong> - contains four sets of memory chips, which is suitable for higher capacity needs but with higher latency and power consumption.
- <strong>Octal Rank (8R)</strong> - contains eight sets of memory chips, which maximizes capacity at the cost of even higher latency and power usage

# Layout
![[RAM (1S／2S Single／Double Sided Module - Single／1R - Dual／2R - Quad／4R - Octo／8R) Multi Ranks - Memory Rank/ram-memory-ranks.png]]
# Resources
- [https://en.wikipedia.org/wiki/DIMM#Ranking](https://en.wikipedia.org/wiki/DIMM#Ranking)
