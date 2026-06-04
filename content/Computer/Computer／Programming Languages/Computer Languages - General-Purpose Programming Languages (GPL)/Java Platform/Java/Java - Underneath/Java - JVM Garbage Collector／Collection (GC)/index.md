---
title: "Java - JVM Garbage Collector／Collection (GC)"
created: 2021-10-08T00:10:33.498-05:00
modified: 2026-01-11T10:10:03.998-06:00
parent: "[[Java - Underneath]]"
children:
  - "[[Java - Concurrent Mark Sweep (CMS) Garbage Collector - DEPRECATED]]"
  - "[[Java - Default Garbage Collector]]"
  - "[[Java - Garbage Collector Logging]]"
  - "[[Java - Garbage-First Garbage Collector (G1GC)]]"
  - "[[Java - Parallel Garbage Collector]]"
  - "[[Java - Serial Garbage Collector]]"
  - "[[Java - Tuning JVM Garbage Collection for WebRTC Session Controller]]"
  - "[[Java - Z Garbage Collector (ZGC)]]"
---
###### Garbage Collector/Collection (GC)
````excerpt
- tracks each and every object available in the [[Java - Stack Memory & Heap Space|JVM heap space]] and removes unused ones
````
^excerpt

# GC - Steps

In simple words, <em>GC</em> works in two simple steps known as Mark and Sweep:
- <strong>Mark</strong> - starts from the root node of your application(main), walks the object graph:
	- marks objects that are reachable as live
	- mark objects that are not reachable as dead
- <strong>Sweep</strong> - delete unreachable objects
- <strong>Compacting</strong> - compact the memory by moving around the objects and making the allocation contiguous than fragmented

# GC - Advantages & Disadvantages

![](https://www.youtube.com/watch?v=UnaNQgzw4zY)

Advantages:
- No manual memory allocation/deallocation handling because unused memory space is automatically handled by <em>GC</em>
- No overhead of handling <em>[Dangling Pointer](https://en.wikipedia.org/wiki/Dangling_pointer)</em>
- Automatic <em>[Memory Leak](https://en.wikipedia.org/wiki/Memory_leak)</em> management (<em>GC</em> on its own can't guarantee the full proof solution to memory leaking, however, it takes care of a good portion of it)

Disadvantages:
- Since <em>JVM</em> has to keep track of object reference creation/deletion, this activity requires more CPU power than the original application. It may affect the performance of requests which required large memory
- Programmers have no control over the scheduling of CPU time dedicated to freeing objects that are no longer needed
- Using some GC implementations might result in application stopping unpredictably
- Automatized memory management will not be as efficient as the proper manual memory allocation/deallocation

# GC - Implementations

```merge-table
{
  "rows": [
    [
      {
        "content": "[[Java - Serial Garbage Collector|Serial GC]]",
        "bg": "#F4F5F7"
      },
      "- <code><font style=\"color: rgb(122,134,154);\">java </font></code><code><font style=\"color: rgb(122,134,154);\">-XX:+UseSerialGC -jar main.jar</font></code>",
      "- single-threaded gc on both young and old generation"
    ],
    [
      {
        "content": "[[Java - Parallel Garbage Collector|Parallel GC]]",
        "bg": "#F4F5F7",
        "rowspan": 3
      },
      "- <code><font style=\"color: rgb(122,134,154);\">java -XX:+UseParallelGC -jar main.jar</font></code>",
      "- multi-thread gc on young generation\n- single-threaded on old generation"
    ],
    [
      "- <code><font style=\"color: rgb(122,134,154);\">java </font></code><code><font style=\"color: rgb(122,134,154);\">-XX:+UseParallelOldGC -jar main.jar</font></code>",
      "- multi-threaded gc on both young and old generation"
    ],
    [
      "- <code><font style=\"color: rgb(122,134,154);\">java </font></code><code><font style=\"color: rgb(122,134,154);\">-XX:+UseParNewGC -jar main.jar</font></code>",
      "- multi-threaded gc on young generation"
    ],
    [
      {
        "content": "[[Java - Concurrent Mark Sweep (CMS) Garbage Collector - DEPRECATED|CMS GC]]\nDEPRECATED",
        "bg": "#F4F5F7"
      },
      "- <code><font style=\"color: rgb(122,134,154);\">java </font></code><code><font style=\"color: rgb(122,134,154);\">-XX:+UseConcMarkSweepGC -jar main.jar</font></code>",
      "- use CMS gc\n- autoenables <code><font style=\"color: rgb(122,134,154);\">UseParNewGC</font></code>"
    ],
    [
      {
        "content": "[[Java - Garbage-First Garbage Collector (G1GC)|G1 GC]]",
        "bg": "#F4F5F7"
      },
      "- <code><font style=\"color: rgb(122,134,154);\">java -XX:+UseG1GC -jar main.jar</font></code>",
      "- use G1GC"
    ],
    [
      {
        "content": "[[Java - Z Garbage Collector (ZGC)|Z GC]]",
        "bg": "#F4F5F7"
      },
      "- <code><font style=\"color: rgb(122,134,154);\">java </font></code><code><font style=\"color: rgb(122,134,154);\">-XX:+UseZGC -XX:+UnlockExperimentalVMOptions -jar main.jar</font></code>\n- <code><font style=\"color: rgb(122,134,154);\">java </font></code><code><font style=\"color: rgb(122,134,154);\">-XX:+UseZGC -jar main.jar</font></code>",
      "- use ZGC"
    ]
  ],
  "tableStyle": "width: 95.9125%;"
}
```
# Subpages
- [[Java - Default Garbage Collector]]
- [[Java - Garbage Collector Logging]]
- [[Java - Tuning JVM Garbage Collection for WebRTC Session Controller]]
