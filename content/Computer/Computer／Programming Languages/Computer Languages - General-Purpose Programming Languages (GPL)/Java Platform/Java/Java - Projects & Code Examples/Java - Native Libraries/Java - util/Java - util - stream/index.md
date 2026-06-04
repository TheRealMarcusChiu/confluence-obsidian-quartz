---
title: "Java - util - stream"
created: 2020-12-21T16:08:21.023-06:00
modified: 2021-10-27T02:43:23.991-05:00
parent: "[[Java - util]]"
children:
  - "[[Java - Streams - Exceptions and Streams]]"
  - "[[Java - Streams - Peek With Filter & FindFirst Behavior]]"
---
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Examples
```
String result = Stream.of(1,2,3)        // Stream<Integer>
        .filter(i -> i % 2 == 0)        // Stream<Integer>
        .findAny()                      // Optional<Integer>
        .map(i -> "FOUND")              // Optional<String>
        .orElseGet(() -> "NOT FOUND");  // String
```
# Resources
- [https://winterbe.com/posts/2014/07/31/java8-stream-tutorial-examples/](https://winterbe.com/posts/2014/07/31/java8-stream-tutorial-examples/)
