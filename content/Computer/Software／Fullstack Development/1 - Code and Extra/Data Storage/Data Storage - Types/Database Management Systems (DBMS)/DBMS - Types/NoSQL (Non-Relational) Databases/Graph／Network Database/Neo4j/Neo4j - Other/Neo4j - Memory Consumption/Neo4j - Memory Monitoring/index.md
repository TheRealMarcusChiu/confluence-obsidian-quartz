---
title: "Neo4j - Memory Monitoring"
created: 2021-03-21T22:10:32.277-05:00
modified: 2021-03-21T22:12:14.183-05:00
parent: "[[Neo4j - Memory Consumption]]"
children: []
---
By now you must have realized that memory configuration is not that trivial. What do you have to make your life easier? You can use the Native Memory Tracking which is a JVM feature and tracks internal memory usage. To enable it you need to add the following to your <code>neo4j.conf</code> file:
- <code><font style="color: rgb(160,174,192);">dbms.jvm.additional</font>=<font style="color: rgb(47,133,90);">-XX:NativeMemoryTracking=detail</font></code>

Then grab the PID of Neo4j, and use <code>jcmd</code> to print out native memory use for the process using <code>jcmd \<PID\> VM.native\_memory summary</code>. You will get the detailed allocation information for each category in memory, as shown below:
Shell
```
$ jcmd <PID> VM.native_memory summary
Native Memory Tracking:

Total: reserved=3554519KB, committed=542799KB
-                 Java Heap (reserved=2097152KB, committed=372736KB)
                            (mmap: reserved=2097152KB, committed=372736KB)

-                     Class (reserved=1083039KB, committed=38047KB)
                            (classes #5879)
                            (malloc=5791KB #6512)
                            (mmap: reserved=1077248KB, committed=32256KB)

-                    Thread (reserved=22654KB, committed=22654KB)
                            (thread #23)
                            (stack: reserved=22528KB, committed=22528KB)
                            (malloc=68KB #116)
                            (arena=58KB #44)

-                      Code (reserved=251925KB, committed=15585KB)
                            (malloc=2325KB #3622)
                            (mmap: reserved=249600KB, committed=13260KB)

-                        GC (reserved=82398KB, committed=76426KB)
                            (malloc=5774KB #182)
                            (mmap: reserved=76624KB, committed=70652KB)

-                  Compiler (reserved=139KB, committed=139KB)
                            (malloc=9KB #128)
                            (arena=131KB #3)

-                  Internal (reserved=6127KB, committed=6127KB)
                            (malloc=6095KB #7439)
                            (mmap: reserved=32KB, committed=32KB)

-                    Symbol (reserved=9513KB, committed=9513KB)
                            (malloc=6724KB #60789)
                            (arena=2789KB #1)

-    Native Memory Tracking (reserved=1385KB, committed=1385KB)
                            (malloc=121KB #1921)
                            (tracking overhead=1263KB)

-               Arena Chunk (reserved=186KB, committed=186KB)
                            (malloc=186KB)
```

Usually, the <code>jcmd</code> dump is only moderately useful by itself. It’s more common to take multiple dumps and compare them by running:
```
$ jcmd <PID> VM.native_memory summary.diff
```
