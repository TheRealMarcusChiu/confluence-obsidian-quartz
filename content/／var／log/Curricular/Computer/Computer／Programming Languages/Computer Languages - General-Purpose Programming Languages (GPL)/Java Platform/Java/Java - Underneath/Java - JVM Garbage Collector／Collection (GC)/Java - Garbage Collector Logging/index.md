---
title: "Java - Garbage Collector Logging"
created: 2021-10-09T03:06:28.311-05:00
modified: 2021-10-09T03:49:14.200-05:00
parent: "[[Java - JVM Garbage Collector／Collection (GC)]]"
children: []
---
# Simple Java Program
```java
public class Application {

    private static Map<String, String> stringContainer = new HashMap<>();

    public static void main(String[] args) {
        System.out.println("Start of program!");
        String stringWithPrefix = "stringWithPrefix";

        // Load Java Heap with 3 M java.lang.String instances
        for (int i = 0; i < 3000000; i++) {
            String newString = stringWithPrefix + i;
            stringContainer.put(newString, newString);
        }
        System.out.println("MAP size: " + stringContainer.size());

        // Explicit GC!
        System.gc();

        // Remove 2 M out of 3 M
        for (int i = 0; i < 2000000; i++) {
            String newString = stringWithPrefix + i;
            stringContainer.remove(newString);
        }

        // Explicit GC!
        System.gc(); 

        System.out.println("MAP size: " + stringContainer.size());
        System.out.println("End of program!");
    }
}
```
# Run Simple Java Program With <strong>Simple</strong> GC Logging

> [!expand]- Click here to expand...
> ```
> ❯ java -XX:+UseSerialGC -Xms1024m -Xmx1024m -verbose:gc Application.java
> [0.009s][info][gc] Using Serial
> Start of program!
> [1.424s][info][gc] GC(0) Pause Young (Allocation Failure) 273M->226M(989M) 441.295ms
> MAP size: 3000000
> [1.956s][info][gc] GC(1) Pause Full (System.gc()) 298M->293M(989M) 458.700ms
> MAP size: 1000000
> [2.464s][info][gc] GC(2) Pause Full (System.gc()) 416M->144M(989M) 258.127ms
> End of program!
> ```
> - <code><font style="color: rgb(122,134,154);">-XX:+UseSerialGC</font></code> - tell JVM to use [[Java - Serial Garbage Collector|Serial GC]]
> - <code><font style="color: rgb(122,134,154);">-Xms1024m</font></code> - tell JVM to set the initial heap size to 1024 megabytes
> - <code><font style="color: rgb(122,134,154);"> -Xmx1024m</font></code> - tell JVM to set the max heap size to 1024 megabytes
> - <code><font style="color: rgb(122,134,154);">-verbose:gc</font></code> - tell JVM to log garbage collector info
>
> <code><font style="color: rgb(122,134,154);">\[1.424s\]\[info\]\[gc\] GC(0) Pause Young (Allocation Failure) 273M-\>226M(989M) 441.295ms</font></code>
> - <code><font style="color: rgb(122,134,154);">1.424s</font></code> - timestamp
> - <code><font style="color: rgb(122,134,154);">Pause Young</font></code> or <code><font style="color: rgb(122,134,154);">Pause Full</font></code> – the type of Garbage Collection
> - <code><font style="color: rgb(122,134,154);">(Allocation Failure)</font></code> or <code><font style="color: rgb(122,134,154);">(System.gc())</font></code> – the cause of the collection
> 	1. <code><font style="color: rgb(122,134,154);">(Allocation Failure)</font></code> indicates that no more space was left in Eden to allocate our objects
> 	2. <code><font style="color: rgb(122,134,154);">(System.gc())</font></code> indicates invoked in code
> - <code><font style="color: rgb(122,134,154);">273M-\>226M</font></code> – the occupied heap memory before and after the GC
> - <code><font style="color: rgb(122,134,154);">(989M)</font></code> – the current capacity of the heap
> - <code><font style="color: rgb(122,134,154);">441.295ms</font></code> – the duration of the GC event
# Run Simple Java Program With <strong>Verbose</strong> GC Logging

> [!expand]- Click here to expand...
> ```
> ❯ java -XX:+UseSerialGC -Xms1024m -Xmx1024m -verbose:gc -XX:+PrintGCDetails Application.java
> [0.003s][warning][gc] -XX:+PrintGCDetails is deprecated. Will use -Xlog:gc* instead.
> [0.010s][info   ][gc] Using Serial
> [0.010s][info   ][gc,heap,coops] Heap address: 0x00000007c0000000, size: 1024 MB, Compressed Oops mode: Zero based, Oop shift amount: 3
> Start of program!
> [0.976s][info   ][gc,start     ] GC(0) Pause Young (Allocation Failure)
> [1.410s][info   ][gc,heap      ] GC(0) DefNew: 279616K->34943K(314560K)
> [1.410s][info   ][gc,heap      ] GC(0) Tenured: 0K->196691K(699072K)
> [1.410s][info   ][gc,metaspace ] GC(0) Metaspace: 15091K->15091K(1062912K)
> [1.410s][info   ][gc           ] GC(0) Pause Young (Allocation Failure) 273M->226M(989M) 433.953ms
> [1.410s][info   ][gc,cpu       ] GC(0) User=0.36s Sys=0.07s Real=0.43s
> MAP size: 3000000
> [1.485s][info   ][gc,start     ] GC(1) Pause Full (System.gc())
> [1.485s][info   ][gc,phases,start] GC(1) Phase 1: Mark live objects
> [1.637s][info   ][gc,phases      ] GC(1) Phase 1: Mark live objects 151.939ms
> [1.637s][info   ][gc,phases,start] GC(1) Phase 2: Compute new object addresses
> [1.720s][info   ][gc,phases      ] GC(1) Phase 2: Compute new object addresses 83.751ms
> [1.720s][info   ][gc,phases,start] GC(1) Phase 3: Adjust pointers
> [1.869s][info   ][gc,phases      ] GC(1) Phase 3: Adjust pointers 148.277ms
> [1.869s][info   ][gc,phases,start] GC(1) Phase 4: Move objects
> [1.942s][info   ][gc,phases      ] GC(1) Phase 4: Move objects 73.436ms
> [1.943s][info   ][gc,heap        ] GC(1) DefNew: 108981K->0K(314560K)
> [1.943s][info   ][gc,heap        ] GC(1) Tenured: 196691K->300599K(699072K)
> [1.943s][info   ][gc,metaspace   ] GC(1) Metaspace: 15129K->15129K(1062912K)
> [1.943s][info   ][gc             ] GC(1) Pause Full (System.gc()) 298M->293M(989M) 458.122ms
> [1.943s][info   ][gc,cpu         ] GC(1) User=0.42s Sys=0.03s Real=0.45s
> MAP size: 1000000
> [2.191s][info   ][gc,start       ] GC(2) Pause Full (System.gc())
> [2.191s][info   ][gc,phases,start] GC(2) Phase 1: Mark live objects
> [2.259s][info   ][gc,phases      ] GC(2) Phase 1: Mark live objects 67.835ms
> [2.259s][info   ][gc,phases,start] GC(2) Phase 2: Compute new object addresses
> [2.356s][info   ][gc,phases      ] GC(2) Phase 2: Compute new object addresses 96.972ms
> [2.356s][info   ][gc,phases,start] GC(2) Phase 3: Adjust pointers
> [2.422s][info   ][gc,phases      ] GC(2) Phase 3: Adjust pointers 66.283ms
> [2.422s][info   ][gc,phases,start] GC(2) Phase 4: Move objects
> [2.458s][info   ][gc,phases      ] GC(2) Phase 4: Move objects 35.595ms
> [2.458s][info   ][gc,heap        ] GC(2) DefNew: 126043K->0K(314560K)
> [2.458s][info   ][gc,heap        ] GC(2) Tenured: 300599K->147984K(699072K)
> [2.458s][info   ][gc,metaspace   ] GC(2) Metaspace: 15132K->15132K(1062912K)
> [2.458s][info   ][gc             ] GC(2) Pause Full (System.gc()) 416M->144M(989M) 267.025ms
> [2.458s][info   ][gc,cpu         ] GC(2) User=0.27s Sys=0.00s Real=0.27s
> End of program!
> [2.459s][info   ][gc,heap,exit   ] Heap
> [2.459s][info   ][gc,heap,exit   ]  def new generation   total 314560K, used 8276K [0x00000007c0000000, 0x00000007d5550000, 0x00000007d5550000)
> [2.459s][info   ][gc,heap,exit   ]   eden space 279616K,   2% used [0x00000007c0000000, 0x00000007c08152a8, 0x00000007d1110000)
> [2.459s][info   ][gc,heap,exit   ]   from space 34944K,   0% used [0x00000007d3330000, 0x00000007d3330000, 0x00000007d5550000)
> [2.459s][info   ][gc,heap,exit   ]   to   space 34944K,   0% used [0x00000007d1110000, 0x00000007d1110000, 0x00000007d3330000)
> [2.459s][info   ][gc,heap,exit   ]  tenured generation   total 699072K, used 147984K [0x00000007d5550000, 0x0000000800000000, 0x0000000800000000)
> [2.459s][info   ][gc,heap,exit   ]    the space 699072K,  21% used [0x00000007d5550000, 0x00000007de5d4020, 0x00000007de5d4200, 0x0000000800000000)
> [2.459s][info   ][gc,heap,exit   ]  Metaspace       used 15137K, capacity 15507K, committed 15616K, reserved 1062912K
> [2.459s][info   ][gc,heap,exit   ]   class space    used 1661K, capacity 1791K, committed 1792K, reserved 1048576K
> ```
# Adding Date and Time Information

> [!expand]- Click here to expand...
> No good log is complete without date and time information.
>
> <strong>This extra information can be highly useful when we need to correlate GC log data with data from other sources, or it can simply help facilitate searching.</strong>
>
> We can add the following two arguments when we run our application to get date and time information to appear in our logs:
> <span style="white-space: pre-wrap"><code>-XX:+PrintGCTimeStamps -XX:+PrintGCDateStamps</code></span>
>
> Each line now starts with the absolute date and time when it was written followed by a timestamp reflecting the real-time passed in seconds since the JVM started:
> <span style="white-space: pre-wrap"><code>2018-12-11T02:55:23.518+0100: 2.601: \[GC (Allocation ...</code></span>
>
> Please note that these tuning flags have been removed in Java 9. The new alternative is:<code>-Xlog:gc\*::time</code>
# Logging to a File

> [!expand]- Click here to expand...
> As we've already seen, by default the GC log is written to <em>stdout</em>. A more practical solution is to specify an output file.
>
> <strong>We can do this by using the argument <em>-Xloggc:\<file\></em> where the file is the absolute path to our output file:</strong>
> <span style="white-space: pre-wrap"><code>-Xloggc:/path/to/file/gc.log</code></span>
>
> Similar to other tuning flags, Java 9 deprecated the -Xloggc flag in favor of the new unified logging. To be more specific, now the alternative for logging to a file is:
> <span style="white-space: pre-wrap"><code>-Xlog:gc:/path/to/file/gc.log</code></span>
# Resources
- [https://www.baeldung.com/java-verbose-gc](https://www.baeldung.com/java-verbose-gc)
