---
title: "Java - Hibernate"
created: 2020-12-04T11:40:21.727-06:00
modified: 2022-11-17T02:02:19.648-06:00
parent: "[[Java - Database Frameworks (JDBC - ORM／OGM - JPA／Hibernate - JDO)]]"
children:
  - "[[Java - Hibernate Cache - First／Second／Query-Level Cache]]"
  - "[[Java - How to Implement .equals() & .hashCode() for JPA／Hibernate Entities]]"
  - "[[Java - JPA vs Hibernate]]"
  - "[[Java - JPA／Hibernate's Entity State Transitions]]"
  - "[[Java - Pure Hibernate Setup (without Spring)]]"
---
###### Hibernate
- is an implementation of the [[Java - Java Persistence API (JPA) - Jakarta Persistence|JPA specification]]

# Intro
- a [[Java - Connection Pooling Frameworks|connection pool]] provides a way to store and reuse <code><font style="color: rgb(122,134,154);">java.sql.Connection</font></code> instances for speed and robustness
- a hibernate <code><font style="color: rgb(122,134,154);">Session</font></code> is a wrapper around a <code><font style="color: rgb(122,134,154);">Connection</font></code> in order to allow you to save your POJOs without directly writing the SQL
- when you call <code><font style="color: rgb(122,134,154);">SessionFactory.openSession</font></code> hibernate first takes a <code><font style="color: rgb(122,134,154);">Connection</font></code> from the connection pool. It then creates a <code><font style="color: rgb(122,134,154);">Session</font></code> around that <code><font style="color: rgb(122,134,154);">Connection</font></code> and returns it

# Subpages
- [[Java - Pure Hibernate Setup (without Spring)]]
- [[Java - Spring - Spring Data JPA (Hibernate) Setup (0% manual config) Spring auto-config]]
> [!list-indent-undo]
> ```dataview
> LIST
> FROM ""
> WHERE file.folder = this.file.folder + "/" + this.file.name
> ```
