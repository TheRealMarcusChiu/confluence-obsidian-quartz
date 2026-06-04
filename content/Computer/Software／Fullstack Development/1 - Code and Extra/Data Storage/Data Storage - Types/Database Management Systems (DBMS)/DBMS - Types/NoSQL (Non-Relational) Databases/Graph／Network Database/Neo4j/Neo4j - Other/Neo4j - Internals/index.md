---
title: "Neo4j - Internals"
created: 2022-03-30T03:32:26.312-05:00
modified: 2022-03-30T03:44:27.814-05:00
parent: "[[Neo4j - Other]]"
children: []
---
- [https://gauravsarma1992.medium.com/neo4j-storage-internals-be8d150028db](https://gauravsarma1992.medium.com/neo4j-storage-internals-be8d150028db)
- [https://neo4j.com/developer/kb/understanding-data-on-disk/](https://neo4j.com/developer/kb/understanding-data-on-disk/)

# Neo4j Entities
- Node
- Relationship
- RelationshipType
- Property
- Label

# Neo4j Storage Files

```merge-table
{
  "rows": [
    [
      {
        "content": "Storage",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Record Size",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Contents",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "neostore.nodestore.db",
      "15 bytes",
      "nodes"
    ],
    [
      "neostore.relationshipstore.db",
      "34 bytes",
      "relationships"
    ],
    [
      "neostore.propertystore.db",
      "41 bytes",
      "properties for nodes and relationships"
    ],
    [
      "neostore.propertystore.db.strings",
      "128 bytes",
      "values of string properties"
    ],
    [
      "neostore.propertystore.db.arrays",
      "128 bytes",
      "values of array properties"
    ],
    [
      "Indexed Property",
      "1/3 * AVG(X)",
      "each index entry is approximately 1/3 of the average property value size"
    ],
    [
      "...",
      "...",
      "..."
    ]
  ]
}
```
# Neo4j Node Store

Each node record accounts for a fixed 15 bytes. The layout is as follows:
- 1st byte — isInUse - used to determine whether the record is being used or has been deleted. If not isInUse, the record will be used for newer node entries
- Next 4 bytes — ID of the node
- Next byte — First relationship ID
- Next byte — First property ID
- Next 5 bytes — Label store
- Remaining byte — for future use

# Neo4j Relationship Store

Each relationship record is a fixed record of 34 bytes. The relationship record’s layout is as follows:
- start node ID
- end node ID
- pointer to the relationship type
- pointer to the next relationship record for the start node
- pointer to the previous relationship record for the start node
- pointer to the next relationship record for the end node
- pointer to the previous relationship record for the end node

# Neo4j Property Store

similar to node store
# Neo4j Label Store

similar to node store
# Neo4j Scenarios
###### Scenario \#1 — Initial status
- Node count: 4M nodes
- Each node has 3 properties (12M properties total)
- Relationship count: 2M relationships
- Each relationship has 1 property (2M properties total)

This is translated to the following size on disk:
- Nodes: 4.000.000x15B = 60.000.000B (60MB)
- Relationships: 2.000.000x34B = 68.000.000B (68MB)
- Properties: 14.000.000x41B = 574.000.000B (574MB)
- TOTAL: 703MB

###### Scenario \#2–4x growth + added properties + indexes on all properties
- Node count: 16M nodes
- Each node has 5 properties (80M properties total)
- Relationship count: 8M relationships
- Each relationship has 2 properties (16M properties total)

This is translated to the following size on disk:
- Nodes: 16.000.000x15B = 240.000.000B (240MB)
- Relationships: 8.000.000x34B = 272.000.000B (272MB)
- Properties: 96.000.000x41B = 3.936.000.000B (3936MB)
- Indexes: 4448MB \* \~33% = 1468MB
- TOTAL: 5916MB
