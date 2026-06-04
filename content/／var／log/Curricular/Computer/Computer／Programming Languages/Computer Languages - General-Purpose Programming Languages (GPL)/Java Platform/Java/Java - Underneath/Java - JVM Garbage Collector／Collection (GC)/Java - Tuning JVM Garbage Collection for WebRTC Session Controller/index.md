---
title: "Java - Tuning JVM Garbage Collection for WebRTC Session Controller"
created: 2021-10-08T00:10:51.991-05:00
modified: 2021-10-08T23:58:16.955-05:00
parent: "[[Java - JVM Garbage Collector／Collection (GC)]]"
children: []
---
This page describes how to tune [[Java - JVM Garbage Collector／Collection (GC)|JVM garbage collection]] performance for Oracle Communications [[Web Real-Time Communication (WebRTC)|WebRTC]] Session Controller engine tier servers.
## Goals for Tuning Garbage Collection Performance

Production installations of WebRTC Session Controller generally require extremely small response times (under 50 milliseconds) for clients even under peak server loads. With a production WebRTC Session Controller installation, all long GC intervals must be avoided to maintain response time goals.

The sections that follow describe GC tuning strategies for Oracle's JVM that generally result in the best response time performance.
## Tuning Garbage Collection with Oracle JDK

When using Oracle's JDK, the goal in tuning garbage collection performance is to reduce the time required to perform a full garbage collection cycle. You should not attempt to tune the JVM to minimize the frequency of full garbage collections, because this generally results in a forced garbage collection cycle that may take up to several full seconds to complete.

The simplest and most reliable way to achieve short garbage collection times over the lifetime of a production server is to use a fixed heap size with the collector and the parallel young generation collector, restricting the new generation size to at most one-third of the overall heap.

Oracle recommends using the Garbage-First (G1) garbage collector.

The following example JVM settings are recommended for most production engine tier servers:
```
-server -Xms24G -Xmx24G -XX:+UseG1GC -XX:MaxGCPauseMillis=200 -XX:ParallelGCThreads=20 -XX:ConcGCThreads=5 -XX:InitiatingHeapOccupancyPercent=70 [-XX:PermSize=512m]
```

For production replica servers, use the example settings:
```
-server -Xms4G -Xmx4G -XX:+UseG1GC -XX:MaxGCPauseMillis=200 -XX:ParallelGCThreads=20 -XX:ConcGCThreads=5 -XX:InitiatingHeapOccupancyPercent=70 [-XX:PermSize=512m]
```

For standalone installations, use the example settings:
```
-server -Xms32G -Xmx32G -XX:+UseG1GC -XX:MaxGCPauseMillis=200 -XX:ParallelGCThreads=20 -XX:ConcGCThreads=5 -XX:InitiatingHeapOccupancyPercent=70 [-XX:PermSize=512m]
```

The above options have the following effect:
- <code><font style="color: rgb(122,134,154);">-Xms, -Xmx</font></code>: Places boundaries on the heap size to increase the predictability of garbage collection. The heap size is limited in replica servers so that even Full GCs do not trigger SIP retransmissions. -Xms sets the starting size to prevent pauses caused by heap expansion.
- <code><font style="color: rgb(122,134,154);">-XX:+UseG1GC</font></code>: Use the Garbage First (G1) Collector.
- <code><font style="color: rgb(122,134,154);">-XX:MaxGCPauseMillis</font></code>: Sets a target for the maximum GC pause time. This is a soft goal, and the JVM will make its best effort to achieve it.
- <code><font style="color: rgb(122,134,154);">-XX:ParallelGCThreads</font></code>: Sets the number of threads used during parallel phases of the garbage collectors. The default value varies with the platform on which the JVM is running.
- <code><font style="color: rgb(122,134,154);">-XX:ConcGCThreads</font></code>: Number of threads concurrent garbage collectors will use. The default value varies with the platform on which the JVM is running.
- <code><font style="color: rgb(122,134,154);">-XX:InitiatingHeapOccupancyPercent</font></code>: Percentage of the (entire) heap occupancy to start a concurrent GC cycle. GCs that trigger a concurrent GC cycle based on the occupancy of the entire heap and not just one of the generations, including G1, use this option. A value of 0 denotes 'do constant GC cycles'. The default value is 45.
