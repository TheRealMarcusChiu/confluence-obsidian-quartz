---
title: "SQL (Row／Relational) DB vs Document (Non-Relational) DB"
created: 2022-12-18T15:56:53.607-06:00
modified: 2022-12-18T16:04:36.872-06:00
parent: "[[DBMS - Type Comparisons]]"
children: []
---
```merge-table
{
  "rows": [
    [
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "[[Relational／Row-Oriented Database Management System (RDBMS)|Relational/Row-Oriented Database Management System (RDBMS)]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "[[Document Database]]",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "schema flexibility",
        "bg": "#F4F5F7"
      },
      "restricted",
      "flexible"
    ],
    [
      {
        "content": "locality performance",
        "bg": "#F4F5F7"
      },
      "low (stored across multiple tables)",
      "high (all stored within a single hierarchical document)"
    ],
    [
      {
        "content": "application code similarity",
        "bg": "#F4F5F7"
      },
      "low (utilizes ORM to translate between object-relational mapping)",
      "high (documents are similar to objects)"
    ],
    [
      {
        "content": "Supports JOINS",
        "bg": "#F4F5F7"
      },
      "YES",
      "NO"
    ],
    [
      {
        "content": "Supports many-to-one mapping",
        "bg": "#F4F5F7"
      },
      "YES",
      "NO (every document entity has a maximum of 1 parent)"
    ],
    [
      {
        "content": "Supports one-to-many mapping",
        "bg": "#F4F5F7"
      },
      "YES",
      "YES"
    ],
    [
      {
        "content": "Supports many-to-many mapping",
        "bg": "#F4F5F7"
      },
      "YES",
      "NO"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
