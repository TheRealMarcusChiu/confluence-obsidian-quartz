---
title: "Java - Z Garbage Collector (ZGC)"
created: 2021-10-09T01:03:06.187-05:00
modified: 2026-01-11T10:01:17.655-06:00
parent: "[[Java - JVM Garbage Collector／Collection (GC)]]"
children: []
---
###### ZGC (Z Garbage Collector)

is a scalable low-latency garbage collector
- debuted in JDK 11 as an experimental option for Linux
- debuted in JDK 14 as an experimental option for Windows and macOS
- debuted in JDK 15+ as production status

ZGC performs all expensive work concurrently,<strong> without stopping the execution of application threads for more than 10 ms</strong>, which makes it suitable for applications that require low latency. It uses<strong> load barriers with colored pointers</strong> to perform concurrent operations when the threads are running and they are used to keep track of heap usage.

Reference coloring (colored pointers) is the core concept of ZGC. It means that ZGC uses some bits (metadata bits) of reference to mark the state of the object. It also <strong>handles heaps ranging from 8MB to 16TB in size</strong>. Furthermore, pause times do not increase with the heap, live-set, or root-set size.

Similar to [[Java - Garbage-First Garbage Collector (G1GC)|G1GC]], ZGC partitions the heap, except that heap regions can have different sizes.

To enable the Z Garbage Collector, we can use the following argument in JDK versions lower than 15:
```
java -XX:+UnlockExperimentalVMOptions -XX:+UseZGC Application.java
```

From version 15 we don't need experimental mode on:
```
java -XX:+UseZGC Application.java
```
# Resources
- [https://www.baeldung.com/jvm-zgc-garbage-collector](https://www.baeldung.com/jvm-zgc-garbage-collector)
