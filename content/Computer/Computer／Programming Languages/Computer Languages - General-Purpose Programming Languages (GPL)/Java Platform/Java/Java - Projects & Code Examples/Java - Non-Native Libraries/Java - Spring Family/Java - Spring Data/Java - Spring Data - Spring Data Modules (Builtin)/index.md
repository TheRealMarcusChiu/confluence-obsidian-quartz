---
title: "Java - Spring Data - Spring Data Modules (Builtin)"
created: 2021-03-14T23:14:57.324-05:00
modified: 2022-12-22T09:49:06.983-06:00
parent: "[[Java - Spring Data]]"
children:
  - "[[Java - Spring - Spring Data Elastic Search]]"
  - "[[Java - Spring - Spring Data JDBC]]"
  - "[[Java - Spring - Spring Data JPA (Hibernate)]]"
  - "[[Java - Spring - Spring Data MongoDB]]"
  - "[[Java - Spring - Spring Data Neo4j (SDN)]]"
  - "[[Java - Spring - Spring JDBC]]"
---
# Spring Data Modules

```merge-table
{
  "rows": [
    [
      {
        "content": "Module",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Artifact ID",
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
        "content": "[[Java - Spring - Spring JDBC|Spring JDBC]]",
        "bg": "#F4F5F7"
      },
      "<span style=\"white-space: pre-wrap\"><code>spring-boot-starter-jdbc</code></span>",
      "- handles the connection to a database\n- lets you execute SQL via JdbcTemplate"
    ],
    [
      {
        "content": "[[Java - Spring - Spring Data JDBC|Spring Data JDBC]]",
        "bg": "#F4F5F7"
      },
      "<span style=\"white-space: pre-wrap\"><code>spring-boot-starter-data-jdbc</code></span>",
      "> [!expand]- Click here to expand...\n> - uses entities with additional rules (the class structure needs to follow the aggregate design of [[Domain Driven Design (DDD)|DDD]])\n> \t- basically, we group entities together which have strong coupling and call them aggregates\n> \t- the top entity of the aggregate is called the aggregate root\n> \t- some other rules:\n> \t\t- an entity can only be part of 1 aggregate\n> \t\t- all relations inside an aggregate need to be unidirectional\n> \t\t- the aggregate root needs to manage to top relation\n> \t\t- entity classes within aggregates can only have one-to-one and/or one-to-many relationships\n> - because of the rules, every entity within an aggregate can be found starting with the root\n> - because of the above premise, do not need a repository for each entity like in spring-data-jpa but only for aggregate roots\n> - following things supported by Spring Data JPA but not Spring Data JDBC\n> \t- supports [[Java - Spring - Repository (Query Methods - Builtin)|query methods]] in (v2.0)\n> \t- does not support persistence context like Spring Data JPA does\n> \t- a big difference between spring-data-jpa and spring-data-jdbc is that no @Entity and no relation annotations (e.g. @OneToMany) need to be used. Spring Data JDBC knows a class is an aggregate root when it contains a repository for that class. And because the rules of the aggregate entities are connected through object references (i.e. one-to-one are object reference, and one-to-many is a collection of objects) Spring Data JDBC also knows what the aggregates are and can transfer data to the database as aggregates."
    ],
    [
      {
        "content": "[[Java - Spring - Spring Data JPA (Hibernate)|Spring Data JPA]]",
        "bg": "#F4F5F7"
      },
      "<span style=\"white-space: pre-wrap\"><code>spring-boot-starter-data-jpa</code></span>",
      "- uses entities\n- for [[Relational／Row-Oriented Database Management System (RDBMS)|relational typed databases]]\n- has more abstractions than <em>Spring Data JDBC</em>"
    ],
    [
      {
        "content": "[[Java - Spring - Spring Data MongoDB|Spring Data MongoDB]]",
        "bg": "#F4F5F7"
      },
      "<code>spring-boot-starter-data-mongodb</code>",
      "- for [[MongoDB]]"
    ],
    [
      {
        "content": "[[Java - Spring - Spring Data Neo4j (SDN)|Spring Data Neo4j]]",
        "bg": "#F4F5F7"
      },
      "<code>spring-boot-starter-data-neo4j</code>",
      "- for [[Neo4j]]"
    ],
    [
      {
        "content": "[[Java - Spring - Spring Data Elastic Search|Spring Data Elastic Search]]",
        "bg": "#F4F5F7"
      },
      "<code>spring-boot-starter-data-elasticsearch</code>",
      "- for [[Elasticsearch]]"
    ]
  ]
}
```
# Other
- [[Java - Spring - Repository (Using Multiple Spring Data Modules)]]
