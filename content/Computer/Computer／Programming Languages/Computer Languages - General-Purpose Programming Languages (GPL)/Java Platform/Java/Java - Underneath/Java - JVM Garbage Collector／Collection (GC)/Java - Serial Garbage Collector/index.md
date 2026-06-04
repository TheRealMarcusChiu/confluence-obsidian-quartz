---
title: "Java - Serial Garbage Collector"
created: 2021-10-09T00:45:36.964-05:00
modified: 2021-10-09T01:15:12.314-05:00
parent: "[[Java - JVM Garbage Collector／Collection (GC)]]"
children: []
---
###### Serial Garbage Collector

is the simplest [[Java - JVM Garbage Collector／Collection (GC)|GC implementation]], as it basically works with a single thread. As a result, <strong>this <em>GC</em> implementation freezes all application threads when it runs</strong>. Hence, it is not a good idea to use it in multi-threaded applications like server environments.

However, there was [an excellent talk](https://www.infoq.com/presentations/JVM-Performance-Tuning-twitter-QCon-London-2012) by <em>Twitter</em> engineers at QCon 2012 on the performance of <em>Serial Garbage Collector</em> – which is a good way to understand this collector better.

The Serial GC is the garbage collector of choice for most applications that do not have small pause time requirements and run on client-style machines

To enable <em>Serial Garbage Collector</em>, we can use the following argument:
```
java -XX:+UseSerialGC -jar Application.java
```
# Resources
- [https://www.infoq.com/presentations/JVM-Performance-Tuning-twitter-QCon-London-2012/](https://www.infoq.com/presentations/JVM-Performance-Tuning-twitter-QCon-London-2012/)
