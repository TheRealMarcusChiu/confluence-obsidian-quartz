---
title: "SQL - Window Functions (ROW_NUMBER - RANK - DENSE_RANK - FIRST_VALUE - NTH_VALUE - LEAD - LAG - AVG - PERCENT_RANK - CUME_DIST - NTILE - PERCENTILE_CONT - PERCENTILE_DISC)"
created: 2025-04-25T20:30:29.033-05:00
modified: 2025-04-25T20:53:30.151-05:00
parent: "[[SQL - SELECT]]"
children: []
---
###### Window Functions
````excerpt
- window functions perform calculations across a set of rows related to the current row, allowing for advanced analytics and data manipulation without modifying the original dataset
- they differ from aggregate functions in that they don't reduce the result to a single row but instead provide a result for each row while considering a window of related rows
````
^excerpt

# Introduction

![](https://www.youtube.com/watch?v=rIcB4zMYMas)
# Window Functions
- ROW\_NUMBER
- RANK
- DENSE\_RANK
- FIRST\_VALUE
- NTH\_VALUE
- LEAD
- LAG
- AVG
- PERCENT\_RANK
- CUME\_DIST
- NTILE
- PERCENTILE\_CONT
- PERCENTILE\_DISC

# Examples
```
-- order by popularity
SELECT *
FROM baby_names
ORDER BY total DESC
```

![[SQL - Window Functions (ROW_NUMBER - RANK - DENSE_RANK - FIRST_VALUE - NTH_VALUE - LEAD - LAG - AVG - PERCENT_RANK - CUME_DIST - NTILE - PERCENTILE_CONT - PERCENTILE_DISC)/window-function-4.png|150]]
```
-- add a popularity column
SELECT gender, name, total,
       ROW_NUMBER() OVER(ORDER BY total DESC) AS popularity
FROM baby_names;
```

![[SQL - Window Functions (ROW_NUMBER - RANK - DENSE_RANK - FIRST_VALUE - NTH_VALUE - LEAD - LAG - AVG - PERCENT_RANK - CUME_DIST - NTILE - PERCENTILE_CONT - PERCENTILE_DISC)/window-function-3.png|200]]
```
-- try different functions
SELECT gender, name, total,
       ROW_NUMBER() OVER(ORDER BY total DESC) AS popularity
       RANK() OVER(ORDER BY total DESC) AS popularity
       DENSE_RANK() OVER(ORDER BY total DESC) AS popularity
FROM baby_names;
```

![[SQL - Window Functions (ROW_NUMBER - RANK - DENSE_RANK - FIRST_VALUE - NTH_VALUE - LEAD - LAG - AVG - PERCENT_RANK - CUME_DIST - NTILE - PERCENTILE_CONT - PERCENTILE_DISC)/window-function-2.png|400]]
```
-- what are the top 3 most popular names for each gender?
WITH pop (SELECT gender, name, total,
                 ROW_NUMBER() OVER(PARTITION BY gender ORDER BY total DESC) AS popularity
          FROM baby_names)
SELECT * FROM pop WHERE popularity <= 3;
```

![[SQL - Window Functions (ROW_NUMBER - RANK - DENSE_RANK - FIRST_VALUE - NTH_VALUE - LEAD - LAG - AVG - PERCENT_RANK - CUME_DIST - NTILE - PERCENTILE_CONT - PERCENTILE_DISC)/window-function-1.png|200]]
