---
title: "Java - Garbage-First Garbage Collector (G1GC)"
created: 2021-10-08T23:58:36.262-05:00
modified: 2021-10-09T01:01:11.811-05:00
parent: "[[Java - JVM Garbage Collector／Collection (GC)]]"
children: []
---
###### Garbage-First Garbage Collector (G1GC)
- is designed for applications running on multi-processor machines with large memory space
- it's available since <em>JDK7 Update 4</em> and in later releases
- will replace the [[Java - Concurrent Mark Sweep (CMS) Garbage Collector - DEPRECATED|CMS collector]] since it's more performance efficient.

Unlike other collectors, the <em>G1</em> collector partitions the heap into a set of equal-sized heap regions, each a contiguous range of virtual memory. When performing garbage collections, <em>G1</em> shows a concurrent global marking phase (i.e. phase 1 known as <em>Marking)</em> to determine the liveness of objects throughout the heap.

After the mark phase is completed, <em>G1</em> knows which regions are mostly empty. It collects in these areas first, which usually yields a significant amount of free space (i.e. phase 2 known as <em>Sweeping).</em> It is why this method of garbage collection is called Garbage-First.

To enable the <em>G1 Garbage Collector</em>, we can use the following argument:
```
java -XX:+UseG1GC -jar Application.java
```
# Resources
- [http://www.oracle.com/webfolder/technetwork/tutorials/obe/java/G1GettingStarted/index.html](http://www.oracle.com/webfolder/technetwork/tutorials/obe/java/G1GettingStarted/index.html)
