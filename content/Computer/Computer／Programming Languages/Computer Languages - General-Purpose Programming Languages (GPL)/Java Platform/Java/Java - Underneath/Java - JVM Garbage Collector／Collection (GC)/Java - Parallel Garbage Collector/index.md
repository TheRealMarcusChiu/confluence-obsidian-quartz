---
title: "Java - Parallel Garbage Collector"
created: 2021-10-09T00:47:53.022-05:00
modified: 2021-10-09T00:52:21.699-05:00
parent: "[[Java - JVM Garbage Collector／Collection (GC)]]"
children: []
---
###### Parallel Garbage Collector
- sometimes called Throughput Collectors
- uses multiple threads for managing heap space
- but it freezes other application threads while performing GC

If we use this GC, we can specify maximum garbage collection <em>threads and pause time, throughput, and footprint</em> (heap size).
- The numbers of garbage collector threads can be controlled with the command-line option
	- <code><font style="color: rgb(122,134,154);">-XX:ParallelGCThreads=\<N\></font></code>
- The maximum pause time goal (gap \[in milliseconds\] between two <em>GC</em>) is specified with the command-line option
	- <code><font style="color: rgb(122,134,154);">-XX:MaxGCPauseMillis=\<N\></font></code>
- The time spent doing garbage collection versus the time spent outside of garbage collection is called the maximum throughput target and can be specified by the command-line option
	- <code><font style="color: rgb(122,134,154);">-XX:GCTimeRatio=\<N\></font></code>

To enable <em>Parallel Garbage Collector</em>, we can use the following argument:
```
java -XX:+UseParallelGC -jar Application.java
```
