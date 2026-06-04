---
title: "Neo4j"
created: 2019-03-16T01:14:28.196-05:00
modified: 2022-09-22T14:48:40.170-05:00
parent: "[[Graph／Network Database]]"
children:
  - "[[Neo4j - APOC]]"
  - "[[Neo4j - Embedded]]"
  - "[[Neo4j - Other]]"
  - "[[Neo4j - Stand-Alone]]"
---
````excerpt
<strong>Neo4j</strong> is a [[Graph／Network Database|graph database management system]]

[https://neo4j.com/](https://neo4j.com/)
````
^excerpt

# Neo4j - Server Types

```merge-table
{
  "rows": [
    [
      {
        "content": "[[Neo4j - Embedded|Embedded Server]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- host in same Java process/JMV as the Java-Application querying against it\n- Java-Application has access to Java APIs to CRUD against Embedded Server"
    ],
    [
      {
        "content": "[[Neo4j - Stand-Alone|Stand-Alone Server]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- server wraps embedded instance, with server infrastructure built around it"
    ]
  ]
}
```
# Neo4j - Other

![[Neo4j - Other#^excerpt]]
