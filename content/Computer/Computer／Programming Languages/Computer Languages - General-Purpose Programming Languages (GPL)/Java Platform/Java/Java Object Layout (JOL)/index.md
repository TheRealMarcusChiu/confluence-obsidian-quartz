---
title: "Java Object Layout (JOL)"
created: 2021-09-18T19:40:26.709-05:00
modified: 2021-09-18T19:51:04.177-05:00
parent: "[[Java]]"
children: []
---
###### Java Object Layout (JOL)
- is the tiny toolbox to analyze object layout in JVMs
- uses Unsafe, JVMTI, and Serviceability Agent (SA) to decode the actual object layout, footprint, and references. this makes JOL much more accurate than other tools relying on heap dumps, specification assumptions, etc
- [https://github.com/openjdk/jol](https://github.com/openjdk/jol)

# Code Example of Integer Object Layout

code
```java
import org.openjdk.jol.info.ClassLayout;
import org.openjdk.jol.util.VMSupport;

public class Main {

    public static void main(String[] args) {
        System.out.println(VMSupport.vmDetails());
        System.out.println(ClassLayout.parseClass(Integer.class).toPrintable());
    }
}
```

Output
```
Running 64-bit HotSpot VM.
Using compressed references with 3-bit shift.
Objects are 8 bytes aligned.
Field sizes by type: 4, 1, 1, 2, 2, 4, 4, 8, 8 [bytes]
Array element sizes: 4, 1, 1, 2, 2, 4, 4, 8, 8 [bytes]

java.lang.Integer object internals:
 OFFSET  SIZE  TYPE DESCRIPTION                    VALUE
      0    12       (object header)                N/A
     12     4   int Integer.value                  N/A
Instance size: 16 bytes (estimated, the sample instance is not available)
Space losses: 0 bytes internal + 0 bytes external = 0 bytes total
```
# Resources
- [https://github.com/java-code-examples/java-object-layout-examples](https://github.com/java-code-examples/java-object-layout-examples)
