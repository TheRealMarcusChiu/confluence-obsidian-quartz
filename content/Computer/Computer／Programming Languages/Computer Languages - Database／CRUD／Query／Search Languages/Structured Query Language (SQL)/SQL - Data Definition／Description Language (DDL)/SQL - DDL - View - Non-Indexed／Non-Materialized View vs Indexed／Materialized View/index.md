---
title: "SQL - DDL - View - Non-Indexed／Non-Materialized View vs Indexed／Materialized View"
created: 2024-06-06T09:44:39.937-05:00
modified: 2024-06-06T09:58:19.432-05:00
parent: "[[SQL - Data Definition／Description Language (DDL)]]"
children: []
---
###### View
- is a virtual table defined by a SELECT query
- there are 2 types of views:
	- Non-Indexed/Non-Materialized View
	- Indexed/Materialized View

# Non-Indexed/Non-Materialized View

Creating a non-indexed view
```
CREATE VIEW ViewNameHere
AS {REPLACE WITH SELECT QUERY HERE}
```
# Indexed/Materialized View

Creating a indexed view
```
CREATE VIEW ViewNameHere
WITH SCHEMABINDING
AS {REPLACE WITH SELECT QUERY HERE}
```
# Querying Views
```
select v.col1, t.col2
from VIEW v, TABLE t
where v.col1 = t.col1
```
# Subpages
- [What is a good reason to use SQL views?](https://stackoverflow.com/questions/2680207/what-is-a-good-reason-to-use-sql-views)
- [difference between view and indexed view or materialized view](https://stackoverflow.com/questions/52326565/difference-between-view-and-indexed-view-or-materialized-view)
- [Query vs View](https://stackoverflow.com/questions/324177/query-vs-view)
- [Makes it sense to create an indexed view when the data is frequently changed?](https://stackoverflow.com/questions/55749766/makes-it-sense-to-create-an-indexed-view-when-the-data-is-frequently-changed)
