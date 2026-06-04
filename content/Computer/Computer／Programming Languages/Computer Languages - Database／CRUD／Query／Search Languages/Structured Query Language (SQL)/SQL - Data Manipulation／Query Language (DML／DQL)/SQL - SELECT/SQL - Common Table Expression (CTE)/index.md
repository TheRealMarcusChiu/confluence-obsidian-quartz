---
title: "SQL - Common Table Expression (CTE)"
created: 2025-04-25T20:13:41.607-05:00
modified: 2025-04-25T20:30:26.171-05:00
parent: "[[SQL - SELECT]]"
children: []
---
###### Common Table Expression (CTE)
````excerpt
- is a named, temporary result set defined within a single SQL statement. It acts as a temporary view, simplifying complex queries by breaking them into smaller, more manageable parts
- are created using the <code><font style="color: rgb(122,134,154);">WITH</font></code> keyword and can be used within <code><font style="color: rgb(122,134,154);">SELECT</font></code>, <code><font style="color: rgb(122,134,154);">INSERT</font></code>, <code><font style="color: rgb(122,134,154);">UPDATE</font></code>, or <code><font style="color: rgb(122,134,154);">DELETE</font></code> statements
````
^excerpt

# CTE - Introduction

![](http://youtube.com/watch?v=LJC8277LONg)
# CTE - Examples
```sql
-- How many max prices for each food category is less than $15?

-- sub query method
SELECT COUNT(*) FROM (SELECT category, MAX(price) AS max_price
                      FROM menu_items
                      GROUP BY category) AS mp
WHERE max_price < 15;

-- CTE method
WITH mp AS (SELECT category, MAX(price) AS max_price
            FROM menu_items
            GROUP BY category)
SELECT COUNT(*) FROM mp WHERE max_price < 15;
```
```sql
-- How many max prices for each food category is less than AVG(of all max prices for each food category)?

-- CTE method (multiple references)
WITH mp AS (SELECT category, MAX(price) AS max_price
            FROM menu_items
            GROUP BY category)
SELECT COUNT(*)
FROM mp
WHERE max_price < (SELECT AVG(max_price) FROM mp);
```
```sql
-- CTE method (multiple table references)
WITH mp AS (SELECT category, MAX(price) AS max_price
            FROM menu_items
            GROUP BY category),
     ci AS (SELECT *
            FROM menu_items
            WHERE item_name LIKE '%Chicken%')
SELECT COUNT(*)
FROM ci JOIN mp ON ci.category = mp.category;
```
