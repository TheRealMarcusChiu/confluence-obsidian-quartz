---
title: "Database Index Types (Simple - Primary - Unique - Composite／Compound／Concatenated／Federated) Index"
created: 2019-12-09T21:40:17.346-06:00
modified: 2026-04-23T14:21:50.252-05:00
parent: "[[DBMS - Other]]"
children:
  - "[[Clustered Index - Non-Clustered Index - Covering Index]]"
---
###### Database Indices
````excerpt
- are used to speed the search of data within tables
- indices on column(s) do not need to be a [[Database Key Types (Candidate - Primary - Alternate - Unique - Composite／Compound／Concatenated／Federated - Super - Foreign) Key|database key]] (i.e. these columns may have duplicate values)
````
^excerpt

# Database Index Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Simple Index\nSingle-Column Index",
        "bg": "#F4F5F7"
      },
      "- create an index on one column"
    ],
    [
      {
        "content": "Composite Index\nCompound Index\nConcatenated Index\nFederated Index\nMulti-Column Index",
        "bg": "#F4F5F7"
      },
      "- an index that contains more than one column"
    ],
    [
      {
        "content": "Unique Index",
        "bg": "#F4F5F7"
      },
      "- a simple index or composite index, that ensures no two rows of data in a table has identical key values\n- see [[Database Key Types (Candidate - Primary - Alternate - Unique - Composite／Compound／Concatenated／Federated - Super - Foreign) Key|Database Keys]]"
    ],
    [
      {
        "content": "Clustered Index\nNon-Clustered Index\nCovering Index",
        "bg": "#F4F5F7"
      },
      "- see [[Clustered Index - Non-Clustered Index - Covering Index]]"
    ]
  ],
  "tableStyle": "width: 87.4067%;"
}
```
