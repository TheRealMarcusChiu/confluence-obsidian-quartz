---
title: "CQL - Data Definition Language (DDL) (Version 4.0)"
created: 2021-01-04T23:32:14.491-06:00
modified: 2026-05-17T13:10:51.334-05:00
parent: "[[CQL - Data Definition Language (DDL)]]"
children: []
---
[[Cypher Query Language (CQL)|CQL]] form of [[SQL - Data Definition／Description Language (DDL)|SQL DDL]]
# DDL Queries

> [!expand-ui]- index
> creating index
> - <code><font style="color: rgb(128,128,128);"><font style="color: rgb(113,128,150);">CREATE</font><font style="color: rgb(113,128,150);">INDEX</font><font style="color: rgb(45,55,72);"> index\_name FOR (n:</font><font style="color: rgb(49,130,206);">Person</font><font style="color: rgb(45,55,72);">) </font><font style="color: rgb(113,128,150);">ON</font><font style="color: rgb(45,55,72);"> (n.surname)</font></font></code>
>
> creating composite index:
> - <code><font style="color: rgb(113,128,150);">CREATE</font><font style="color: rgb(113,128,150);">INDEX</font> index\_name FOR (n:<font style="color: rgb(49,130,206);">Person</font>) <font style="color: rgb(113,128,150);">ON</font> (n.age, n.country)</code>
>
> show all indices:
> - <code><font style="color: rgb(128,128,128);"><font style="color: rgb(113,128,150);">CALL</font><font style="color: rgb(45,55,72);"> db.indexes</font></font></code>
>
> deleting index
> - <code><font style="color: rgb(128,128,128);">DROP <font style="color: rgb(113,128,150);">INDEX</font><font style="color: rgb(45,55,72);"> index\_name</font></font></code>

> [!expand-ui]- unique constraint
> create unique constraint on node.id
> - <span style="white-space: pre-wrap"><code>CREATE(dhawan:Player{id:001, name: "shikar Dhawan", YOB: 1995, POB: "Delhi"}) </code><br><code>CREATE(jonathan:Player {id:002, name: "Jonathan Trott", YOB: 1981, POB: "CapeTown"}) </code><br><code>CREATE(sangakkara:Player {id:003, name: "Kumar Sangakkara", YOB: 1977, POB: "Matale"}) </code><br><code>CREATE(rohit:Player {id:004, name: "Rohit Sharma", YOB: 1987, POB: "Nagpur"}) </code><br><code>CREATE(virat:Player {id:005, name: "Virat Kohli", YOB: 1988, POB: "Delhi"}) </code><br><code>// create unique constraint</code></span>
> - <span style="white-space: pre-wrap"><code><font style="color: rgb(113,128,150);">CREATE</font><font style="color: rgb(113,128,150);">CONSTRAINT</font> constraint\_name <font style="color: rgb(113,128,150);">ON</font> (n:<font style="color: rgb(49,130,206);">Player</font>) <font style="color: rgb(113,128,150);">ASSERT</font> n.id <font style="color: rgb(113,128,150);">IS</font><font style="color: rgb(113,128,150);">UNIQUE</font></code><br><code>// verify constraint</code><br><code>CREATE(virat:Player {id:005, name: "Virat Kohli", YOB: 1988, POB: "Delhi"})</code></span>
>
> create node key constraint:
> - <span style="white-space: pre-wrap"><code><font style="color: rgb(113,128,150);">CREATE</font> <font style="color: rgb(113,128,150);">CONSTRAINT</font> constraint\_name <font style="color: rgb(113,128,150);">ON</font> (n:<font style="color: rgb(49,130,206);">Person</font>) <font style="color: rgb(113,128,150);">ASSERT</font> (n.firstname, n.surname) <font style="color: rgb(113,128,150);">IS</font> NODE KEY</code></span>
>
> show all constraints:
> - <code><font style="color: rgb(113,128,150);">CALL</font> db.constraints</code>
>
> drop unique constraint:
> - <span style="white-space: pre-wrap"><code><font style="color: rgb(113,128,150);">DROP</font><font style="color: rgb(113,128,150);">CONSTRAINT</font> constraint\_name</code></span>

> [!expand-ui]- relationship constraints
> - <code><font style="color: rgb(113,128,150);">CREATE</font><font style="color: rgb(113,128,150);">CONSTRAINT</font> constraint\_name <font style="color: rgb(113,128,150);">ON</font> ()-\[like:<font style="color: rgb(49,130,206);">LIKED</font>\]-() <font style="color: rgb(113,128,150);">ASSERT</font> <font style="color: rgb(49,130,206);">exists</font>(like.day)</code>
>
> todo
