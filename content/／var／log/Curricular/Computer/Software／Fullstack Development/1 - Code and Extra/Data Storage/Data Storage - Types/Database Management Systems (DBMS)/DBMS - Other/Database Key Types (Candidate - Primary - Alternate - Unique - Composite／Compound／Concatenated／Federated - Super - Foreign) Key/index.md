---
title: "Database Key Types (Candidate - Primary - Alternate - Unique - Composite／Compound／Concatenated／Federated - Super - Foreign) Key"
created: 2019-12-10T14:25:18.841-06:00
modified: 2022-04-10T23:36:40.807-05:00
parent: "[[DBMS - Other]]"
children: []
---
###### Database Keys
- are used to uniquely identify a row in a table
- not to be confused with [[Database Index Types (Simple - Primary - Unique - Composite／Compound／Concatenated／Federated) Index|Database Indices]]

# Database Key Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Key Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Candidate Key",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- Candidate Key is a key of a table that uniquely identifies each record (no null value allowed)\n- a table can have multiple candidate keys, out of which one can be selected as a primary key"
    ],
    [
      {
        "content": "Primary Key",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- Primary Key is a candidate key of the table selected to identify each record uniquely in a table\n- by default primary key creates a [[Clustered Index - Non-Clustered Index - Covering Index|clustered index]] on a heap table (a table that does not have a clustered index is known as a heap table). We can also define a [non-clustered primary key](https://www.sqlrelease.com/creating-primary-key-without-clustered-index) on a table by defining the type of index explicitly"
    ],
    [
      {
        "content": "Alternate Key",
        "header": true,
        "bg": "#F4F5F7"
      },
      "Alternate Key is a candidate key, currently not selected as the primary key of the table."
    ],
    [
      {
        "content": "Unique Key",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": [
          "Unique Key is similar to the primary key and does not allow duplicate values in the column. Usually, it creates a [[Clustered Index - Non-Clustered Index - Covering Index|non-clustered index]] on heap tables",
          {
            "rows": [
              [
                {
                  "content": "<strong>Primary Key</strong>",
                  "header": true,
                  "bg": "#F4F5F7"
                },
                {
                  "content": "<strong>Unique Key</strong>",
                  "header": true,
                  "bg": "#F4F5F7"
                }
              ],
              [
                "- There can only be one primary key in a table\n- In some DBMS it cannot be <code>NULL</code> - e.g. MySQL adds <code>NOT NULL</code>\n- Primary Key is a unique key identifier of the record",
                "- Can be more than one unique key in one table\n- Unique key can have <code>NULL</code> values\n- It can be a candidate key\n- Unique key can be <code>NULL</code> ; multiple rows can have <code>NULL</code> values and therefore may not be considered \"unique\""
              ]
            ]
          }
        ]
      }
    ],
    [
      {
        "content": "Composite Key\nCompound Key\nConcatenated Key\nFederated Key",
        "header": true,
        "bg": "#F4F5F7"
      },
      "Composite Key is a group of two or more columns that identify each row of a table uniquely. Individual columns of the composite key might not able to uniquely identify the record. It can be a primary key or candidate key also"
    ],
    [
      {
        "content": "Super Key",
        "header": true,
        "bg": "#F4F5F7"
      },
      "Super Key is a set of columns on which all columns of the table are functionally dependent. It is a set of columns that uniquely identifies each row in a table. Super key may hold some additional columns which are not strictly required to uniquely identify each row. Primary key and candidate keys are minimal super keys or you can say a subset of super keys"
    ],
    [
      {
        "content": "Foreign Key",
        "header": true,
        "bg": "#F4F5F7"
      },
      "In a relationship between two tables, a primary key of one table is referred to as a foreign key in another table. Foreign key can have duplicate values in it and can also keep null values if the column is defined to accept nulls"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
