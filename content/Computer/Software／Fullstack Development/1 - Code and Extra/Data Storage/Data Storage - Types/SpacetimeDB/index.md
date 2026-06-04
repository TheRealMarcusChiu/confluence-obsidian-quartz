---
title: "SpacetimeDB"
created: 2025-05-10T12:30:40.856-05:00
modified: 2026-05-31T20:48:39.390-05:00
parent: "[[Data Storage - Types]]"
children: []
---
###### SpacetimeDB
````excerpt
- is both a database and server combined into one
- [[Relational／Row-Oriented Database Management System (RDBMS)|relational database system]] that lets you upload your application logic directly into the database by way of fancy stored procedures called "modules"
````
^excerpt

# Introduction![](https://www.youtube.com/watch?v=yctM7oTLurA)![](https://www.youtube.com/watch?v=C7gJ_UxVnSk)
# Core Architectural Components

The architecture of SpacetimeDB is built on three primary concepts that facilitate real-time, state-synchronized applications:

```merge-table
{
  "rows": [
    [
      {
        "content": "Tables",
        "bg": "#F4F5F7"
      },
      "- these serve as the foundation for the application state\n- data is stored in a relational format with support for ACID guarantees, indexes, and constraints to ensure data integrity\n- tables can be private (accessible only to the database owner/reducers) or public (accessible to clients via subscriptions)"
    ],
    [
      {
        "content": "Reducers",
        "bg": "#F4F5F7"
      },
      "- these are the only way to mutate the database state\n- reducers are functions defined in your module (using languages like Rust, C\\#, TypeScript, or C++) that run in atomic, isolated transactions\n- when a reducer is called, it either completes all changes successfully or rolls back entirely, ensuring consistency"
    ],
    [
      {
        "content": "Subscriptions",
        "bg": "#F4F5F7"
      },
      "- this feature allows clients to subscribe to specific table queries\n- when a subscribed row changes, SpacetimeDB automatically pushes the update to the connected client, enabling real-time synchronization without the need for a custom networking layer"
    ]
  ]
}
```

![[SpacetimeDB/spacetimedb-components.png|600]]
# Projects
- video call over spacetimedb - [https://github.com/Lethalchip/SpaceChatDB/tree/main](https://github.com/Lethalchip/SpaceChatDB/tree/main)

# Resources
- [https://github.com/clockworklabs/SpacetimeDB](https://github.com/clockworklabs/SpacetimeDB)
