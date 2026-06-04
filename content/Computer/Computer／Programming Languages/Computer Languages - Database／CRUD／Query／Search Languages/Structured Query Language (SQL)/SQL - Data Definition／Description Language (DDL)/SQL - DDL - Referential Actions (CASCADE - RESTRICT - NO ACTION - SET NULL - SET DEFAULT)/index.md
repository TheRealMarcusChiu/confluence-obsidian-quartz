---
title: "SQL - DDL - Referential Actions (CASCADE - RESTRICT - NO ACTION - SET NULL - SET DEFAULT)"
created: 2022-02-08T05:11:59.451-06:00
modified: 2022-02-08T05:18:27.118-06:00
parent: "[[SQL - Data Definition／Description Language (DDL)]]"
children: []
---
###### Referential Actions
- are policies that define how a referenced record is handled by the database when you run an update or delete query
- are features of [[Database Key Types (Candidate - Primary - Alternate - Unique - Composite／Compound／Concatenated／Federated - Super - Foreign) Key|foreign key]] constraints that exist to preserve referential integrity in your database

# Referential Actions (SQL 2003)

In the SQL 2003 standard there are 5 different referential actions:

> [!expand-ui]- CASCADE
> - <code>ON DELETE CASCADE</code> means that if the parent record is deleted, any child records are also deleted. This is <strong>not</strong> a good idea in my opinion. You should keep track of all data that's ever been in a database, although this can be done using <code>TRIGGER</code>s. (However, see caveat in comments below).
> - <code>ON UPDATE CASCADE</code> means that if the parent primary key is changed, the child value will also change to reflect that. Again in my opinion, not a great idea. If you're changing <code>PRIMARY KEY</code>s with any regularity (or even at all!), there is something wrong with your design. Again, see comments.
> - <code>ON UPDATE CASCADE ON DELETE CASCADE</code> means that if you <code>UPDATE</code> <strong>OR</strong> <code>DELETE</code> the parent, the change is cascaded to the child. This is the equivalent of <code>AND</code>ing the outcomes of first two statements

> [!expand-ui]- RESTRICT
> - <code>RESTRICT</code> means that any attempt to delete and/or update the parent will fail throwing an error. This is the default behaviour in the event that a referential action is not explicitly specified.
>   > For an <code>ON DELETE</code> or <code>ON UPDATE</code> that is not specified, the default action is always RESTRICT\`.

> [!expand-ui]- NO ACTION
> - <code>NO ACTION</code>: From the [manual](https://dev.mysql.com/doc/refman/5.7/en/create-table-foreign-keys.html). A keyword from standard SQL. In MySQL, equivalent to <code>RESTRICT</code>. The MySQL Server rejects the delete or update operation for the parent table if there is a related foreign key value in the referenced table. Some database systems have deferred checks, and <code>NO ACTION</code> is a deferred check. In MySQL, foreign key constraints are checked immediately, so <code>NO ACTION</code> is the same as <code>RESTRICT</code>.

> [!expand-ui]- SET NULL
> - <code>SET NULL</code> - again from the manual. Delete or update the row from the parent table, and set the foreign key column or columns in the child table to <code>NULL</code>. This is not the best of ideas IMHO, primarily because there is no way of "time-travelling" - i.e. looking back into the child tables and associating records with <code>NULL</code>s with the relevant parent record - either <code>CASCADE</code> or use <code>TRIGGER</code>s to populate logging tables to track changes (but, see comments).

> [!expand-ui]- SET DEFAULT
> - <code>SET DEFAULT</code>. Yet another (potentially very useful) part of the SQL standard that MySQL hasn't bothered implementing! Allows the developer to specify a value to which to set the foreign key column(s) on an UPDATE or a DELETE. InnoDB and NDB will reject table definitions with a <code>SET DEFAULT</code> clause.
