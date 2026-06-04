---
title: "Graph／Network Database"
created: 2019-03-16T01:13:59.261-05:00
modified: 2023-06-02T21:21:42.608-05:00
parent: "[[NoSQL (Non-Relational) Databases]]"
children:
  - "[[InfiniteGraph]]"
  - "[[Neo4j]]"
  - "[[TigerGraph]]"
---
###### Graph/Network Database
````excerpt
- is a type of [[NoSQL (Non-Relational) Databases]] that uses [[Graph Structures & Algorithms|graph structures]] for queries with nodes, edges, and properties to represent and store data
````
^excerpt

Graph databases are purpose-built to store and navigate relationships. Relationships are first-class citizens in graph databases, and most of the value of graph databases is derived from these relationships. Graph databases use nodes to store data entities, and edges to store relationships between entities
# Graph Database - Use Cases
- for building [[Knowledge Graphs (KG)]]

# Graph Database - Types

![](https://www.youtube.com/watch?v=GekQqFZm7mA)

```merge-table
{
  "rows": [
    [
      {
        "content": "Real-Time Big Graphs",
        "header": true,
        "bg": "#F4F5F7"
      },
      "TigerGraph offers the [newest category of graph databases](https://thenewstack.io/tigergraph-takes-graph-databases-bigger/), called the real-time big graph, that is designed to deal with massive data volumes and data creation rates and to provide real-time analytics. Real-time big graphs enable real-time large graph analysis with both 100M+ vertex or edge traversals/sec/server and 100K+ updates/sec/server. To handle big and growing datasets, real-time big graph databases are designed to scale up and scale out well.",
      "- [[TigerGraph]]"
    ],
    [
      {
        "content": "Operational Graph Databases",
        "header": true,
        "bg": "#F4F5F7"
      },
      "These solutions tend to be native graph stores or built on top of a NoSQL platform. They are focused at transactions (ACID) and operational analytics, with no absolute requirement for indexes.",
      "- Titan\n- JanusGraph\n- OrientDB\n- [[Neo4j]]"
    ],
    [
      {
        "content": "Knowledge Graph / RDF",
        "header": true,
        "bg": "#F4F5F7"
      },
      "These graphs are often semantically focused and based on underpinnings (including relational databases). They are ideal for use in operational environments, but have inferencing capabilities and require indexes even in transactional environments.",
      "- AllegroGraph\n- Virtuoso\n- Blazegraph\n- Stardog\n- GraphDB"
    ],
    [
      {
        "content": "Multi-Modal Graphs",
        "header": true,
        "bg": "#F4F5F7"
      },
      "This category encompasses databases designed to support different model types. For example, a common possibility is a three-way option of document store, key value store or RDF/graph store. The advantages of a multi-modal approach are that different types of queries, such as graph queries and key value queries can be run against the same data. The main disadvantage is that the performance cannot match a dedicated and optimized database management system.",
      "- Cosmos DB\n- ArangoDB\n- Sqrrl\n- OrientDB"
    ],
    [
      {
        "content": "Analytic Graphs",
        "header": true,
        "bg": "#F4F5F7"
      },
      "These analytic graphs focus on solving ‘known knowns’ problems (the majority) – where both entities and relationships are known, or on ‘known unknowns’ and even ‘unknown unknowns.",
      "- Apache Giraph\n- Turi (formerly GraphLab, now owned by Apple)"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Graph Database - Other
- [[Graph／Network Database Design Patterns (G／N-DDP)|Graph/Network Database Design Patterns (G/N-DDP)]]
