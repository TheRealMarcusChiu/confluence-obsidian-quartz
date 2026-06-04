---
title: "Table Join Order Matters For Performance"
created: 2019-12-10T12:20:57.771-06:00
modified: 2024-06-06T09:59:07.278-05:00
parent: "[[SQL - JOIN]]"
children: []
---
# Bad Join Order
```sql
SELECT
  o.order_id,
  s.country_of_manufacture
FROM
  orders o						            -- 73595 rows
  INNER JOIN order_lines l			        -- 231412 rows
    ON o.order_id = l.order_id			    -- 231412 rows after join
  INNER JOIN stock_items s		            -- 227 rows
    ON l.stock_item_id = s.stock_item_id	-- 1036 rows after join 
	AND s.country_of_manufacture = 'USA'	-- 8 rows for USA
```

we want to join both stock\_items and order\_lines first, then orders table
# Query Optimizer Automatically Does This For Us
- table a has 4 rows
- table b has 6 rows
- table c has 0 rows
```sql
SELECT * FROM a INNER JOIN b ON a.id = b.a_id INNER JOIN c ON b.a_id = c.test;
SELECT * FROM a INNER JOIN c ON a.id = c.test INNER JOIN b ON b.a_id = c.test;
SELECT * FROM c INNER JOIN a ON a.id = c.test INNER JOIN b ON b.a_id = c.test;
```

all 3 SELECT statements results in the SAME execution plan

![[Table Join Order Matters For Performance/different-join-orders-same-execution-plan.png]]

the Query Optimizer uses table [[Statistics|statistics]] to quickly determine to best join order
# Enforcing Join Order Despite Query Optimizer

there are tricks to enforce join order
- Using Row Goal - [https://sqlbits.com/Sessions/Event14/Query_Tuning_Mastery_Clash_of_the_Row_Goals](https://sqlbits.com/Sessions/Event14/Query_Tuning_Mastery_Clash_of_the_Row_Goals)
- [https://bertwagner.com/2017/11/21/does-the-join-order-of-my-tables-matter/](https://bertwagner.com/2017/11/21/does-the-join-order-of-my-tables-matter/)
