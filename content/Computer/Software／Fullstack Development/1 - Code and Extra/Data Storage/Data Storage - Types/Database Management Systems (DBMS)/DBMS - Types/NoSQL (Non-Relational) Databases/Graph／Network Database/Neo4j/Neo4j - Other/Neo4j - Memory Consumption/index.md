---
title: "Neo4j - Memory Consumption"
created: 2021-03-21T21:35:25.036-05:00
modified: 2022-03-30T03:44:56.495-05:00
parent: "[[Neo4j - Other]]"
children:
  - "[[Neo4j - Memory Monitoring]]"
---
see: [[Java - Memory Space]]

```merge-table
{
  "rows": [
    [
      {
        "content": "Terminology",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Diagram",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "We can divide the Neo4j’s memory consumption into 2 main areas: on-heap and off-heap\n- <strong>on-heap</strong> - The JVM has a heap that is the runtime data area from which memory for all class instances and arrays are allocated. Heap storage for objects is reclaimed by an automatic storage management system (known as a garbage collector or GC). This is where the runtime data lives and it’s also where query execution, graph management and transaction state<sup>1</sup> exist\n- <strong>off-heap</strong> - Sometimes heap memory is not enough, especially when we need to cache a lot of data without increasing GC pauses, share cached data between JVMs or add a persistence layer in memory resistant to JVM crashes. In all mentioned cases off-heap memory is one of possible solutions. As the off-heap store continues to be managed in memory, it is slightly slower than the on-heap store, but still faster than the disk store (and also not subject to GC). Off-heap can be divided into 3 categories:\n\t- <strong>page cache</strong> - the page cache lives off-heap and is used to cache the Neo4j data (and native indexes). The caching of graph data and indexes into memory will help avoid costly disk access and result in optimal performance\n\t- <strong>JVM internals</strong> - memory needed for the JVM to work\n\t- <strong>direct memory</strong> -\n\nWhile heap and off-heap are general Java terms, page cache refers to Neo4j’s native caching",
      "![[Neo4j - Memory Consumption/memory_consumption_neo4j.png|500]]"
    ]
  ],
  "tableStyle": "width: 98.041%;"
}
```
# Indexes

Depending on whether you are using [[Apache - Lucene|Lucene]] or native indexes, the memory taken by these will live in different places:
- If you are using Lucene indexes, these will live off-heap and we have no control over what memory is used by them. On the image above, they would live alongside the page cache but in an unmanaged block
- If you are using native indexes, the memory taken by them will live inside the page cache meaning we can somewhat control how much memory they can take. You should account for this when setting the page cache size

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Resources
- [https://neo4j.com/developer/kb/understanding-memory-consumption/](https://neo4j.com/developer/kb/understanding-memory-consumption/)
