---
title: "API-DP - Streaming"
created: 2022-02-14T21:08:19.856-06:00
modified: 2022-02-14T21:08:53.840-06:00
parent: "[[API Design Patterns (API-DP)]]"
children: []
---
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

- [[Reactive Streams]]
