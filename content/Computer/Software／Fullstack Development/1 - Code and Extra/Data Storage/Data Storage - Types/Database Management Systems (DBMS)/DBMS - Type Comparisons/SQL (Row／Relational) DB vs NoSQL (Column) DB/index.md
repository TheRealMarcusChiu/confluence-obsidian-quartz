---
title: "SQL (Row／Relational) DB vs NoSQL (Column) DB"
created: 2019-12-11T12:47:09.473-06:00
modified: 2022-12-20T14:28:49.036-06:00
parent: "[[DBMS - Type Comparisons]]"
children: []
---
```merge-table
{
  "rows": [
    [
      {
        "content": "[[Relational／Row-Oriented Database Management System (RDBMS)|Relational/Row-Oriented Database Management System (RDBMS)]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "[[Column-Oriented／Store Database Management System (CDBMS)|NoSQL Column Database]]",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "more suitable for [[DBMS Query Types - Online Transaction Processing (OLTP) - Online Analytical Processing (OLAP)|transactional (OLTP)]]workloads",
      "more appropriate for [[DBMS Query Types - Online Transaction Processing (OLTP) - Online Analytical Processing (OLAP)|analytical (OLAP)]] workloads"
    ],
    [
      "tables are stored as rows-first on disk",
      "tables are stored as columns-first on disk"
    ],
    [
      "a single block io read to a table fetches multiple rows with all their columns",
      "a single block io read to a table fetches multiple columns with all matching rows"
    ],
    [
      "more IOs are required to find a particular row in a table scan\nbut once a row is found you get all columns of that row",
      "less IOs  are required to get more values of a given column\nbut working with multiple columns requires more IOs"
    ],
    [
      "optimal for read and writes",
      "less optimal writes"
    ],
    [
      "row compression is harder",
      "column compression is easier (contiguous data types)"
    ],
    [
      "aggregation is less efficient",
      "aggregation is more efficient"
    ],
    [
      "queries with multiple columns are more efficient",
      "queries with multiple columns are less efficient"
    ]
  ]
}
```
# How It's Stored on Disk Example

Given the following table

```merge-table
{
  "rows": [
    [
      {
        "content": "id",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "first",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "last",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "1",
      "Marcus",
      "Chiu"
    ],
    [
      "2",
      "Erina",
      "Chiu"
    ],
    [
      "3",
      "Jesus",
      "Christ"
    ],
    [
      "4",
      "Bruce",
      "Lee"
    ]
  ]
}
```

The following ways are stored in disk

```merge-table
{
  "rows": [
    [
      {
        "content": "Row DB",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Column DB",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": {
          "rows": [
            [
              {
                "content": "Disk Block 1",
                "bg": "#F4F5F7"
              },
              {
                "content": {
                  "rows": [
                    [
                      "1",
                      "Marcus",
                      "Chiu"
                    ],
                    [
                      "2",
                      "Erina",
                      "Chiu"
                    ]
                  ]
                }
              }
            ],
            [
              {
                "content": "Disk Block 2",
                "bg": "#F4F5F7"
              },
              {
                "content": {
                  "rows": [
                    [
                      "3",
                      "Jesus",
                      "Christ"
                    ],
                    [
                      "4",
                      "Bruce",
                      "Lee"
                    ]
                  ]
                }
              }
            ]
          ]
        }
      },
      {
        "content": [
          {
            "rows": [
              [
                {
                  "content": "Disk Block 1",
                  "bg": "#F4F5F7"
                },
                "1:Marcus, 2:Erina, 3:Jesus, 4:Bruce"
              ]
            ]
          },
          {
            "rows": [
              [
                {
                  "content": "Disk Block 2",
                  "bg": "#F4F5F7"
                },
                "1:Chiu, 2:Chiu, 3:Christ, 4:Lee"
              ]
            ]
          }
        ]
      }
    ]
  ]
}
```
