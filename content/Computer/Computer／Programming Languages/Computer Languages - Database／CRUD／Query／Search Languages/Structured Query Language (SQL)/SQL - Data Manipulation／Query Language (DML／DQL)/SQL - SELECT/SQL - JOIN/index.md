---
title: "SQL - JOIN"
created: 2019-12-09T12:09:57.603-06:00
modified: 2025-04-25T16:07:44.101-05:00
parent: "[[SQL - SELECT]]"
children:
  - "[[Table Join Order Matters For Performance]]"
---
### Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

- [SQL Outer Join Overview and Examples](https://www.sqlshack.com/sql-outer-join-overview-and-examples/)

## <strong>Example Joins</strong>
### Table A

```merge-table
{
  "rows": [
    [
      {
        "content": "table a",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "A_id",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "b_id",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "1",
        "align": "center"
      },
      {
        "content": "1",
        "align": "center"
      }
    ],
    [
      {
        "content": "2",
        "align": "center"
      },
      {
        "content": "1",
        "align": "center"
      }
    ],
    [
      {
        "content": "3",
        "align": "center"
      },
      {
        "content": "2",
        "align": "center"
      }
    ],
    [
      {
        "content": "4",
        "align": "center"
      },
      {
        "content": "2",
        "align": "center"
      }
    ]
  ]
}
```
### Table B

```merge-table
{
  "rows": [
    [
      {
        "content": "table b",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "B_id",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "a_id",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "1",
        "align": "center"
      },
      {
        "content": "3",
        "align": "center"
      }
    ],
    [
      {
        "content": "2",
        "align": "center"
      },
      {
        "content": "3",
        "align": "center"
      }
    ],
    [
      {
        "content": "3",
        "align": "center"
      },
      {
        "content": "4",
        "align": "center"
      }
    ],
    [
      {
        "content": "4",
        "align": "center"
      },
      {
        "content": "4",
        "align": "center"
      }
    ],
    [
      {
        "content": "5",
        "align": "center"
      },
      {
        "content": "10",
        "align": "center"
      }
    ],
    [
      {
        "content": "6",
        "align": "center"
      },
      {
        "content": "11",
        "align": "center"
      }
    ]
  ]
}
```
# Self Join
```sql
SELECT * FROM a AS a_1
(INNER|LEFT|RIGHT|FULL OUTER) JOIN a AS a_2
ON a_1.A_id = a_2.b_ib;
```

joining a table with itself
# Left Inclusive Join
```sql
SELECT * FROM a 
LEFT JOIN b 
ON a.A_id = b.a_ib;
```

```merge-table
{
  "rows": [
    [
      {
        "content": "A_id",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "b_id",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "B_id",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "a_id",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "3",
      "2",
      "1",
      "3"
    ],
    [
      "3",
      "2",
      "2",
      "3"
    ],
    [
      "4",
      "2",
      "3",
      "4"
    ],
    [
      "4",
      "2",
      "4",
      "4"
    ],
    [
      "1",
      "1",
      "NULL",
      "NULL"
    ],
    [
      "2",
      "1",
      "NULL",
      "NULL"
    ]
  ]
}
```
# Full Outer Inclusive Join
```sql
SELECT * FROM a
FULL OUTER JOIN b
ON a.A_id = b.a_ib;
```

```merge-table
{
  "rows": [
    [
      {
        "content": "A_id",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "b_id",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "B_id",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "a_id",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      }
    ],
    [
      {
        "content": "3",
        "align": "left"
      },
      {
        "content": "2",
        "align": "left"
      },
      {
        "content": "1",
        "align": "left"
      },
      {
        "content": "3",
        "align": "left"
      }
    ],
    [
      {
        "content": "3",
        "align": "left"
      },
      {
        "content": "2",
        "align": "left"
      },
      {
        "content": "2",
        "align": "left"
      },
      {
        "content": "3",
        "align": "left"
      }
    ],
    [
      {
        "content": "4",
        "align": "left"
      },
      {
        "content": "2",
        "align": "left"
      },
      {
        "content": "3",
        "align": "left"
      },
      {
        "content": "4",
        "align": "left"
      }
    ],
    [
      {
        "content": "4",
        "align": "left"
      },
      {
        "content": "2",
        "align": "left"
      },
      {
        "content": "4",
        "align": "left"
      },
      {
        "content": "4",
        "align": "left"
      }
    ],
    [
      {
        "content": "1",
        "align": "left"
      },
      {
        "content": "1",
        "align": "left"
      },
      {
        "content": "NULL",
        "align": "left"
      },
      {
        "content": "NULL",
        "align": "left"
      }
    ],
    [
      {
        "content": "2",
        "align": "left"
      },
      {
        "content": "1",
        "align": "left"
      },
      {
        "content": "NULL",
        "align": "left"
      },
      {
        "content": "NULL",
        "align": "left"
      }
    ],
    [
      "NULL",
      "NULL",
      "5",
      "10"
    ],
    [
      "NULL",
      "NULL",
      "6",
      "11"
    ]
  ]
}
```
# Right Inclusive Join
```sql
SELECT * FROM a
RIGHT JOIN b
ON a.A_id = b.a_ib;
```

```merge-table
{
  "rows": [
    [
      {
        "content": "A_id",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "b_id",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "B_id",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "a_id",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      }
    ],
    [
      {
        "content": "3",
        "align": "left"
      },
      {
        "content": "2",
        "align": "left"
      },
      {
        "content": "1",
        "align": "left"
      },
      {
        "content": "3",
        "align": "left"
      }
    ],
    [
      {
        "content": "3",
        "align": "left"
      },
      {
        "content": "2",
        "align": "left"
      },
      {
        "content": "2",
        "align": "left"
      },
      {
        "content": "3",
        "align": "left"
      }
    ],
    [
      {
        "content": "4",
        "align": "left"
      },
      {
        "content": "2",
        "align": "left"
      },
      {
        "content": "3",
        "align": "left"
      },
      {
        "content": "4",
        "align": "left"
      }
    ],
    [
      {
        "content": "4",
        "align": "left"
      },
      {
        "content": "2",
        "align": "left"
      },
      {
        "content": "4",
        "align": "left"
      },
      {
        "content": "4",
        "align": "left"
      }
    ],
    [
      "NULL",
      "NULL",
      "5",
      "10"
    ],
    [
      "NULL",
      "NULL",
      "6",
      "11"
    ]
  ]
}
```
# Left Exclusive Join
```sql
SELECT * FROM a 
LEFT JOIN b 
ON a.A_id = b.a_ib 
WHERE b.a_id IS NULL;
```

```merge-table
{
  "rows": [
    [
      {
        "content": "A_id",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "b_id",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "B_id",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "a_id",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "1",
      "1",
      "NULL",
      "NULL"
    ],
    [
      "2",
      "1",
      "NULL",
      "NULL"
    ]
  ]
}
```
# Full Outer Exclusive Join
```sql
SELECT * FROM a
FULL OUTER JOIN b
ON a.A_id = b.a_ib
WHERE a.A_id IS NULL 
   OR b.a_id IS NULL;
```

```merge-table
{
  "rows": [
    [
      {
        "content": "A_id",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "b_id",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "B_id",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "a_id",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      }
    ],
    [
      {
        "content": "1",
        "align": "left"
      },
      {
        "content": "1",
        "align": "left"
      },
      {
        "content": "NULL",
        "align": "left"
      },
      {
        "content": "NULL",
        "align": "left"
      }
    ],
    [
      {
        "content": "2",
        "align": "left"
      },
      {
        "content": "1",
        "align": "left"
      },
      {
        "content": "NULL",
        "align": "left"
      },
      {
        "content": "NULL",
        "align": "left"
      }
    ],
    [
      "NULL",
      "NULL",
      "5",
      "10"
    ],
    [
      "NULL",
      "NULL",
      "6",
      "11"
    ]
  ]
}
```
# Right Exclusive Join
```sql
SELECT * FROM a
RIGHT JOIN b
ON a.A_id = b.a_ib
WHERE a.A_id IS NULL;
```

```merge-table
{
  "rows": [
    [
      {
        "content": "A_id",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "b_id",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "B_id",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "a_id",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "NULL",
      "NULL",
      "5",
      "10"
    ],
    [
      "NULL",
      "NULL",
      "6",
      "11"
    ]
  ]
}
```
# Cross Join
```sql
SELECT * FROM a
CROSS JOIN b
ON a.A_id = b.a_ib;
```

```merge-table
{
  "rows": [
    [
      {
        "content": "A_id",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "b_id",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "B_id",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "a_id",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      }
    ],
    [
      {
        "content": "3",
        "align": "left"
      },
      {
        "content": "2",
        "align": "left"
      },
      {
        "content": "1",
        "align": "left"
      },
      {
        "content": "3",
        "align": "left"
      }
    ],
    [
      {
        "content": "3",
        "align": "left"
      },
      {
        "content": "2",
        "align": "left"
      },
      {
        "content": "2",
        "align": "left"
      },
      {
        "content": "3",
        "align": "left"
      }
    ],
    [
      {
        "content": "4",
        "align": "left"
      },
      {
        "content": "2",
        "align": "left"
      },
      {
        "content": "3",
        "align": "left"
      },
      {
        "content": "4",
        "align": "left"
      }
    ],
    [
      {
        "content": "4",
        "align": "left"
      },
      {
        "content": "2",
        "align": "left"
      },
      {
        "content": "4",
        "align": "left"
      },
      {
        "content": "4",
        "align": "left"
      }
    ]
  ]
}
```
# Explicit Inner Join
```sql
SELECT * FROM a
INNER JOIN b
ON a.A_id = b.a_ib;
```

```merge-table
{
  "rows": [
    [
      {
        "content": "A_id",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "b_id",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "B_id",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "a_id",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      }
    ],
    [
      {
        "content": "3",
        "align": "left"
      },
      {
        "content": "2",
        "align": "left"
      },
      {
        "content": "1",
        "align": "left"
      },
      {
        "content": "3",
        "align": "left"
      }
    ],
    [
      {
        "content": "3",
        "align": "left"
      },
      {
        "content": "2",
        "align": "left"
      },
      {
        "content": "2",
        "align": "left"
      },
      {
        "content": "3",
        "align": "left"
      }
    ],
    [
      {
        "content": "4",
        "align": "left"
      },
      {
        "content": "2",
        "align": "left"
      },
      {
        "content": "3",
        "align": "left"
      },
      {
        "content": "4",
        "align": "left"
      }
    ],
    [
      {
        "content": "4",
        "align": "left"
      },
      {
        "content": "2",
        "align": "left"
      },
      {
        "content": "4",
        "align": "left"
      },
      {
        "content": "4",
        "align": "left"
      }
    ]
  ]
}
```
# Implicit Inner Join
```sql
SELECT * FROM a, b
WHERE a.A_id = b.a_ib;
```

```merge-table
{
  "rows": [
    [
      {
        "content": "A_id",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "b_id",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "B_id",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "a_id",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "3",
      "2",
      "1",
      "3"
    ],
    [
      "3",
      "2",
      "2",
      "3"
    ],
    [
      "4",
      "2",
      "3",
      "4"
    ],
    [
      "4",
      "2",
      "4",
      "4"
    ]
  ]
}
```

![[SQL - JOIN/sql-joins.png|850]]
