---
title: "Java - Concurrent Mark Sweep (CMS) Garbage Collector - DEPRECATED"
created: 2021-10-09T00:54:59.762-05:00
modified: 2021-10-09T00:59:43.379-05:00
parent: "[[Java - JVM Garbage Collector／Collection (GC)]]"
children: []
---
###### Concurrent Mark Sweep (CMS) Garbage Collector

uses multiple garbage collector threads for garbage collection. It's designed for applications that prefer shorter garbage collection pauses, and that can afford to share processor resources with the garbage collector while the application is running.

Simply put, applications using this type of GC respond slower on average but do not stop responding to perform garbage collection.

A quick point to note here is that since this <em>GC </em>is concurrent, an invocation of explicit garbage collection such as using <em>System.gc()</em> while the concurrent process is working, will result in [<em>Concurrent Mode Failure / Interruption</em>](https://blogs.oracle.com/jonthecollector/what-the-hecks-a-concurrent-mode).

If more than 98% of the total time is spent in <em>CMS</em> garbage collection and less than 2% of the heap is recovered, then an <em>OutOfMemoryError</em> is thrown by the <em>CMS</em> <em>collector</em>. If necessary, this feature can be disabled by adding the option <em>-XX:-UseGCOverheadLimit</em> to the command line.

This collector also has a mode knows as an incremental mode which is being deprecated in Java SE 8 and may be removed in a future major release.

To enable the <em>CMS Garbage Collector</em>, we can use the following flag:
```
java -XX:+UseParNewGC -jar Application.java
```
# [Deprecated in Java 9](https://openjdk.java.net/jeps/291)
```
>> java -XX:+UseConcMarkSweepGC --version
Java HotSpot(TM) 64-Bit Server VM warning: Option UseConcMarkSweepGC was deprecated 
in version 9.0 and will likely be removed in a future release.
java version "9.0.1"
```
# [Removed in Java 14](https://openjdk.java.net/jeps/363)
```
>> java -XX:+UseConcMarkSweepGC --version
OpenJDK 64-Bit Server VM warning: Ignoring option UseConcMarkSweepGC; 
support was removed in 14.0
openjdk 14 2020-03-17
```
