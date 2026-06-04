---
title: "Data Models (Conceptual - Logical - Physical) Data Models"
created: 2020-11-26T18:06:17.188-06:00
modified: 2021-09-21T01:57:43.551-05:00
parent: "[[Database Design Patterns (DDP)]]"
children: []
---
###### Data Model
- is defined as an abstract model that organizes data description, data semantics, and consistency constraints of data
- emphasizes what data is needed and how it should be organized instead of what operations will be performed on data
- is like an architect's building plan, which helps to build conceptual models and set a relationship between data items

# Data Modeling Technique Types
- [[Unified Modeling Language (UML) Diagram]]
- [[Entity-Relationship Model (ERM) - Entity-Relationship Diagram (ERD)]]

# Data Model - Types

```merge-table
{
  "rows": [
    [
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Conceptual Data Model",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Logical Data Model",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Physical Data Model",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Example",
        "header": true,
        "bg": "#F4F5F7"
      },
      "![[Data Models (Conceptual - Logical - Physical) Data Models/conceptual-data-model-example.png|301]]",
      "![[Data Models (Conceptual - Logical - Physical) Data Models/logical-data-model-example.png|301]]",
      "![[Data Models (Conceptual - Logical - Physical) Data Models/physical-data-model-example.png|301]]"
    ],
    [
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- defines WHAT the system contains\n- the purpose is to organize, scope, and define business concepts and rules",
      "- defines HOW the system should be implemented regardless of the DBMS\n- the purpose is to develop a technical map of rules and data structures",
      "- describes HOW the system will be implemented using a specific DBMS system\n- the purpose is the actual implementation of the database"
    ],
    [
      {
        "content": "Used By",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- Business Stakeholders\n- Data Architects",
      "- Data Architects\n- Business Analysts",
      "- DBA\n- Developers"
    ]
  ]
}
```

![[Data Models (Conceptual - Logical - Physical) Data Models/logical-data-model-to-physical-data-model.png|301]]
