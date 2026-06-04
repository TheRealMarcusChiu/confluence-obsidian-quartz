---
title: "CQL - Data Definition Language (DDL) (Version 4.2)"
created: 2020-11-29T15:45:17.575-06:00
modified: 2021-09-16T02:13:42.880-05:00
parent: "[[CQL - Data Definition Language (DDL)]]"
children: []
---
[[Cypher Query Language (CQL)|CQL]] form of [[SQL - Data Definition／Description Language (DDL)|SQL DDL]]
# DDL Queries

> [!expand-ui]- index
> creating index
> - <code><font style="color: rgb(128,128,128);"><font style="color: rgb(113,128,150);">CREATE</font><font style="color: rgb(113,128,150);">INDEX</font><font style="color: rgb(45,55,72);"> index\_name FOR (n:</font><font style="color: rgb(49,130,206);">Person</font><font style="color: rgb(45,55,72);">) </font><font style="color: rgb(113,128,150);">ON</font><font style="color: rgb(45,55,72);"> (n.surname)</font></font></code>
>
> list indices:
> - <code>SHOW INDEXES</code>
>
> deleting index
> - <code><font style="color: rgb(128,128,128);"><font style="color: rgb(113,128,150);">DROP</font><font style="color: rgb(113,128,150);">INDEX</font><font style="color: rgb(45,55,72);"> index\_name</font></font></code>

> [!expand-ui]- unique constraint
> create unique constraint on node.id
> - <span style="white-space: pre-wrap"><code>CREATE(Dhawan:player{id:001, name: "shikar Dhawan", YOB: 1995, POB: "Delhi"}) </code><br><code>CREATE(Jonathan:player {id:002, name: "Jonathan Trott", YOB: 1981, POB: "CapeTown"}) </code><br><code>CREATE(Sangakkara:player {id:003, name: "Kumar Sangakkara", YOB: 1977, POB: "Matale"}) </code><br><code>CREATE(Rohit:player {id:004, name: "Rohit Sharma", YOB: 1987, POB: "Nagpur"}) </code><br><code>CREATE(Virat:player {id:005, name: "Virat Kohli", YOB: 1988, POB: "Delhi"}) </code><br><code>// create unique constraint</code><br><code>CREATE CONSTRAINT ON (n:player) ASSERT n.id IS UNIQUE</code><br><code>// verify constraint</code><br><code>CREATE(Virat:player {id:005, name: "Virat Kohli", YOB: 1988, POB: "Delhi"})</code></span>
>
> drop unique constraint:
> - <span style="white-space: pre-wrap"><code>DROP CONSTRAINT constraint\_name</code></span>
