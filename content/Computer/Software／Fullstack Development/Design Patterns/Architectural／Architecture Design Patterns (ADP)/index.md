---
title: "Architectural／Architecture Design Patterns (ADP)"
created: 2019-03-15T00:08:38.573-05:00
modified: 2023-02-24T17:52:59.914-06:00
parent: "[[Design Patterns]]"
children:
  - "[[Architectural Design Patterns - Comparisons]]"
  - "[[Architectural Design Patterns - Distributed]]"
  - "[[Data Warehouse - Data Lake - Lakeshore Data Mart／Warehouse - Data Mesh]]"
  - "[[Event Driven Architecture (EDA)]]"
  - "[[Extract Transform Load (ETL) - Extract Load (E-L) - Extract Load Transform (ELT) - Extract Transform Load Transform (ETLT)]]"
  - "[[How Spotify License 2 Listen 2 Music Work (i.e. Encrypt／Decrypt Music)]]"
  - "[[Microservices／μService Architecture - Service-Oriented Architecture (SOA)]]"
  - "[[Outbox Pattern]]"
  - "[[Server-Side／Stateful Sessions - Client-Side／Stateless Sessions - Hybrid Sessions]]"
---
###### Architectural/Architecture Design Patterns (ADP)
````excerpt
- are [[Design Patterns]] that deal with integrating multiple services/systems together
````
^excerpt

# Architectural Design Patterns
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

```merge-table
{
  "rows": [
    [
      {
        "content": "Architectural Design Patterns",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Example",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Layered/Hierarchical Pattern",
        "bg": "#F4F5F7"
      },
      "- structure system to be decomposed into groups of subtasks, each of which is at a particular level of abstraction\n- each layer provides services to the next higher layer",
      "- generic application with 4 layers:\n\t- Presentation layer (also known as the UI layer)\n\t- Application layer (also known as the service layer)\n\t- Business logic layer (also known as the domain layer)\n\t- Data access layer (also known as persistence layer)\n- [[Computer Network／Networking Layers - Open Systems Interconnection (OSI) Model|OSI Model]] (e.g. TCP/IP Stack)"
    ],
    [
      {
        "content": "Client-Server Pattern",
        "bg": "#F4F5F7"
      },
      "- consists of two parties; a server and multiple clients\n\t- server - listens to client requests\n\t- client - sends a request to the server",
      ""
    ],
    [
      {
        "content": "Master-Slave Pattern",
        "bg": "#F4F5F7"
      },
      "- consists of two parties; a master and multiple slaves\n\t- master -",
      "- database replication, the master database is regarded as the authoritative source, and the slave databases are synchronized to it"
    ],
    [
      {
        "content": "Pipe-Filter Pattern",
        "bg": "#F4F5F7"
      },
      "- structure systems that process a stream of data\n- pipe contains a sequence of filters, where each filter process the data before feeding it to the next filter",
      "- Compilers. The consecutive filters perform lexical analysis, parsing, semantic analysis, and code generation.\n- Workflows in bioinformatics"
    ],
    [
      {
        "content": "Peer-to-Peer Pattern",
        "bg": "#F4F5F7"
      },
      "- individual components are known as peers\n- peers may function both as a:\n\t- client, requesting services from other peers\n\t- server, providing services to other peers\n- a peer may act as a client or as a server or as both, and it can change its role dynamically with time",
      "- file-sharing networks such as [Gnutella](https://en.wikipedia.org/wiki/Gnutella) and [G2](https://en.wikipedia.org/wiki/Gnutella2)\n- multimedia protocols such as [P2PTV](https://en.wikipedia.org/wiki/P2PTV) and [PDTP](https://en.wikipedia.org/wiki/Peer_Distributed_Transfer_Protocol)"
    ],
    [
      {
        "content": "Broker Pattern",
        "bg": "#F4F5F7"
      },
      "- structure distributed systems with decoupled components\n- broker component is responsible for the coordination of communication among components",
      "- [[Advanced Message Queueing Protocol (AMQP)|message broker software]] such as:\n\t- [Apache ActiveMQ](https://en.wikipedia.org/wiki/Apache_ActiveMQ)\n\t- [[Apache Kafka]]\n\t- [[RabbitMQ]]\n\t- [JBoss Messaging](https://en.wikipedia.org/wiki/JBoss_Messaging)"
    ],
    [
      {
        "content": "Event Bus Pattern",
        "bg": "#F4F5F7"
      },
      "- 4 major components:\n\t- event source, event listener, channel, and event bus",
      ""
    ]
  ]
}
```
# Clean Architecture & Design

![](https://www.youtube.com/watch?v=o_TH-Y78tt4)
