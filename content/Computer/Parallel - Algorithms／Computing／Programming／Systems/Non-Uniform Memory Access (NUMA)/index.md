---
title: "Non-Uniform Memory Access (NUMA)"
created: 2024-09-22T22:30:49.867-05:00
modified: 2025-10-08T21:45:03.748-05:00
parent: "[[Parallel - Algorithms／Computing／Programming／Systems]]"
children: []
---
###### Non-Uniform Memory Access (NUMA)
````excerpt
- is a computer memory design used in multiprocessing, where the memory access time depends on the memory location relative to the processor
- under NUMA, a processor can access its own local memory faster than non-local memory (memory local to another processor or memory shared between processors)
- NUMA is beneficial for workloads with high memory locality of reference and low lock contention, because a processor may operate on a subset of memory mostly or entirely within its own cache node, reducing traffic on the memory bus
````
^excerpt

# Overview

Modern CPUs operate considerably faster than the main memory they use. In the early days of computing and data processing, the CPU generally ran slower than its own memory. The performance lines of processors and memory crossed in the 1960s with the advent of the first supercomputers. Since then, CPUs increasingly have found themselves "starved for data" and having to stall while waiting for data to arrive from memory (e.g. for [[Von Neumann Architecture／Model - Princeton Architecture - Stored-Program Computer|Von-Neumann architecture]]-based computers, see [Von Neumann bottleneck](https://en.wikipedia.org/wiki/Von_Neumann_architecture#Von_Neumann_bottleneck)). Many supercomputer designs of the 1980s and 1990s focused on providing high-speed memory access as opposed to faster processors, allowing the computers to work on large data sets at speeds other systems could not approach.

Limiting the number of memory accesses provided the key to extracting high performance from a modern computer. For commodity processors, this meant installing an ever-increasing amount of high-speed cache memory and using increasingly sophisticated algorithms to avoid cache misses. But the dramatic increase in size of the operating systems and of the applications run on them has generally overwhelmed these cache-processing improvements. Multi-processor systems without NUMA make the problem considerably worse. Now a system can starve several processors at the same time, notably because only one processor can access the computer's memory at a time.

NUMA attempts to address this problem by providing separate memory for each processor, avoiding the performance hit when several processors attempt to address the same memory. For problems involving spread data (common for servers and similar applications), NUMA can improve the performance over a single shared memory by a factor of roughly the number of processors (or separate memory banks). Another approach to addressing this problem is the [[RAM Channels (Single／One／1 - Multi - Dual／Two／2 Quad／Four／4 Hexa／Six／6 Octa／Eight／8 Dodeca／Twelve／12 Channels) Memory System／Architecture|multi-channel memory architecture]], in which a linear increase in the number of memory channels increases the memory access concurrency linearly.

Of course, not all data ends up confined to a single task, which means that more than one processor may require the same data. To handle these cases, NUMA systems include additional hardware or software to move data between memory banks. This operation slows the processors attached to those banks, so the overall speed increase due to NUMA heavily depends on the nature of the running tasks.
# Resources
- [https://frankdenneman.nl/2016/07/07/numa-deep-dive-part-1-uma-numa/](https://frankdenneman.nl/2016/07/07/numa-deep-dive-part-1-uma-numa/)
