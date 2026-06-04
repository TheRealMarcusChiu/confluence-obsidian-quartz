---
title: "Java - Database Frameworks (JDBC - ORM／OGM - JPA／Hibernate - JDO)"
created: 2020-12-04T10:28:39.272-06:00
modified: 2022-11-16T04:50:45.893-06:00
parent: "[[Java - Non-Native Libraries]]"
children:
  - "[[Java - Data - Transaction Management - Java Transaction API (JTA)]]"
  - "[[Java - DriverManager vs DataSource]]"
  - "[[Java - H2 Database (Embedded Database)]]"
  - "[[Java - Hibernate]]"
  - "[[Java - Java Persistence API (JPA) - Jakarta Persistence]]"
  - "[[Java - Neo4j]]"
---
# History
- [[Relational／Row-Oriented Database Management System (RDBMS)|relational databases]] are designed with Tables/Relations
- Java objects are designed using [[Computer／Programming Languages - Paradigms|Object-Oriented Programming (OOP)]]

to store the data from objects into tables and vice-versa, methods:
- Earlier approaches involved writing SQL Queries:
	- plain JDBC
	- to cut down boilerplate code: JOOQ, Spring JdbcTemplate, QueryDSL, and MyBatis were popular approaches
- JPA evolved as a result of a different thought process: How about mapping tables/relationships directly to objects?
	- this Mapping is also called Object Relational Mapping (ORM). Before JPA, ORM was the term more commonly used to refer to these frameworks. That's one of the reasons, Hibernate is called an ORM framework
- Spring Data Repository - abstracts it even further

# Terminology
- <strong>[[Java - Spring - Spring JDBC|Java Database Connectivity (JDBC)]]</strong> - a Java API for connecting and executing queries against a Database
- <strong>Object Relational Mapping/Mapper (ORM)</strong> - the idea of mapping a table directly to an object (i.e. [[Classes／Objects Types (POCO／POJO／POPO - Data Transfer Object DTO - Domain Model - Persistence Model - Java Data Object (JDO))|Java Data Object (JDO)]])
- <strong>Object Graph Mapping/Mapper (OGM)</strong> - the idea of mapping graphs (nodes and edges) to objects (i.e. Java Data Object (JDO))
- <strong>[[Java - Java Persistence API (JPA) - Jakarta Persistence|Java Persistence API (JPA)]]</strong> - is an ORM specification
- <strong>[[Java - Hibernate|Hibernate]]</strong> - is an implementation of JPA
- <strong>[[Java - Spring - Spring Data JPA (Hibernate)|Spring Data JPA]]</strong> - is a [[Java - Spring Data - Spring Data Modules (Builtin)|Spring Data Module]] that wraps Hibernate. allows you to make queries without writing [[Structured Query Language (SQL)|SQL]] via [[Java - Spring Data - Spring Data Repository|Spring Data Repositories]]
- <strong>[[Java - Spring Data|Spring Data]]</strong> contains other features for connecting to various databases

# Other
- [[Java - DriverManager vs DataSource]]
- [[Java - Data - Transaction Management - Java Transaction API (JTA)]]
- [[Java - H2 Database (Embedded Database)|H2 Database (Embedded Database)]]
- [[Java - Neo4j]]
