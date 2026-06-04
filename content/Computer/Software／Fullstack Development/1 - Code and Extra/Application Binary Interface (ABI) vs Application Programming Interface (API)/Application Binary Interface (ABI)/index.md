---
title: "Application Binary Interface (ABI)"
created: 2026-01-12T01:29:23.963-06:00
modified: 2026-01-12T01:32:41.125-06:00
parent: "[[Application Binary Interface (ABI) vs Application Programming Interface (API)]]"
children: []
---
###### Application Binary Interface (ABI)
````excerpt
- it describes the binary contract between compiled code and other compiled code or libraries — in other words, how code talks to other code at the machine / bytecode level, not at the source-code level
- [[Application Programming Interface (API) - Software Development Kit (SDK)|Application Programming Interface (API)]] deals with source-code level
````
^excerpt

# Example

Version \#1
```
public class User {
    public int getId() {
        return 42;
    }
}
```

Version \#2
```
public class User {
    public Integer getId() {   // return type changed
        return 42;
    }
}
```
- Source code <em>looks similar</em>
- But return type change <strong>breaks ABI</strong>
