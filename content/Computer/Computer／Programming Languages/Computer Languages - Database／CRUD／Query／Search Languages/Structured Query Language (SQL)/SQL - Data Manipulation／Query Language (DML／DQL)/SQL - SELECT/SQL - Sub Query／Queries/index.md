---
title: "SQL - Sub Query／Queries"
created: 2025-04-25T21:23:17.630-05:00
modified: 2025-04-25T21:26:50.195-05:00
parent: "[[SQL - SELECT]]"
children: []
---
# Sub Query in SELECT
```
SELECT employee_id, salary, (SELECT AVG(salary) FROM employee_salary) AS all_avg_salary
FROM employee_salary
```
# Sub Query in WHERE
```
SELECT employee_id, salary
FROM employee_salary
WHERE employee_id IN (SELECT employee_id
                      FROM employee_demographics
                      WHERE age > 30)
```
