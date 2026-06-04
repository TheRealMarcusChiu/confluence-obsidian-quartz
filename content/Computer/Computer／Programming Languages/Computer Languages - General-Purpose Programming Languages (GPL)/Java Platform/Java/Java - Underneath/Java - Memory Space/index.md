---
title: "Java - Memory Space"
created: 2021-03-21T21:40:18.378-05:00
modified: 2026-01-11T10:15:34.432-06:00
parent: "[[Java - Underneath]]"
children:
  - "[[Java - Stack Memory & Heap Space]]"
---
The most significant categories of [[Java Virtual Machine (JVM)|JVM]] memory are:

```merge-table
{
  "rows": [
    [
      {
        "content": "Heap",
        "bg": "#F4F5F7"
      },
      "- the heap is where your Class instantiations or “Objects” are stored"
    ],
    [
      {
        "content": "Thread Stacks",
        "bg": "#F4F5F7"
      },
      "- each thread has its own call stack\n- the stack stores primitive local variables and object references along with the call stack (list of method invocations) itself\n- the stack is cleaned up as stack frames move out of context so there is no GC performed here"
    ],
    [
      {
        "content": "Metaspace\n(PermGen in older Java versions)",
        "bg": "#F4F5F7"
      },
      "- metaspace stores the Class definitions of your Objects, and some other metadata"
    ],
    [
      {
        "content": "Code Cache",
        "bg": "#F4F5F7"
      },
      "- the JIT compiler stores native code it generates in the code cache to improve performance by reusing it"
    ],
    [
      {
        "content": "Garbage Collection",
        "bg": "#F4F5F7"
      },
      "- in order for the GC to know which objects are eligible for collection, it needs to keep track of the object graphs. So this is one part of the memory lost to this internal bookkeeping"
    ],
    [
      {
        "content": "Buffer Pools",
        "bg": "#F4F5F7"
      },
      "- many libraries and frameworks allocate buffers outside of the heap to improve performance\n- these buffer pools can be used to share memory between Java code and native code, or map regions of a file into memory"
    ]
  ]
}
```
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
