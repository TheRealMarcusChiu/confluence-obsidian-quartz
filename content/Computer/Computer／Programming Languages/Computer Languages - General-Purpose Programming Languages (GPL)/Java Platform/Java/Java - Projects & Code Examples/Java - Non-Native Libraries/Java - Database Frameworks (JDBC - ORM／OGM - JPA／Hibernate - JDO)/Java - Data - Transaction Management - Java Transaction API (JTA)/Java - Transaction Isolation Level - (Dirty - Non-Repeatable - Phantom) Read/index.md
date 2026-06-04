---
title: "Java - Transaction Isolation Level - (Dirty - Non-Repeatable - Phantom) Read"
created: 2021-04-12T20:50:57.178-05:00
modified: 2022-12-21T14:34:10.754-06:00
parent: "[[Java - Data - Transaction Management - Java Transaction API (JTA)]]"
children: []
---
###### Transaction Isolation Level
- determines how locks are set, which can range from not supporting transactions at all to supporting transactions that enforce very strict access rules

# Transaction - Read Anomalies
- A <strong><em>dirty read</em></strong> occurs when accessing an updated value that has not been committed because it is possible for that value to be rolled back to its previous value. If you read a value that is later rolled back, you will have read an invalid value
- A <strong><em>non-repeatable read</em></strong> occurs when transaction A retrieves a row, transaction B subsequently updates the row, and transaction A later retrieves the same row again. Transaction A retrieves the same row twice but sees different data.
- A <strong><em>phantom read</em></strong> occurs when transaction A retrieves a set of rows satisfying a given condition, transaction B subsequently inserts or updates a row such that the row now meets the condition in transaction A, and transaction A later repeats the conditional retrieval. Transaction A now sees an additional row. This row is referred to as a phantom
- A <em><strong>serialization anomaly</strong></em> The result of successfully committing a group of transactions is inconsistent with all possible orderings of running those transactions one at a time

# Transaction - Isolation Levels ()

The interface <code><font style="color: rgb(122,134,154);">java.sql.Connection</font></code> includes five values that represent the transaction isolation levels you can use in [[Java - Spring - Spring JDBC|JDBC]]:

```merge-table
{
  "rows": [
    [
      {
        "content": "Isolation Level",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Dirty Reads",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Non-Repeatable Reads",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Phantom Reads",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Serialization Anomaly",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "<code>Connection.TRANSACTION\\_NONE</code>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "NA",
        "align": "center"
      },
      {
        "content": "NA",
        "align": "center"
      },
      {
        "content": "NA",
        "align": "center"
      },
      {
        "content": "NA",
        "align": "center"
      },
      "no transaction (i.e. any queries executed within a \"transaction\" are immediately committed to the database) no rollback is possible"
    ],
    [
      {
        "content": "<code>Connection.TRANSACTION\\_READ\\_UNCOMMITTED</code>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Allowed",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "Allowed",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "Allowed",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "Allowed",
        "bg": "green",
        "align": "center"
      },
      "any outside queries executed AFTER the start of a transaction are visible within the transaction (both uncommitted and committed queries)"
    ],
    [
      {
        "content": "<code>Connection.TRANSACTION\\_READ\\_COMMITTED</code>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Prevented",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "Allowed",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "Allowed",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "Allowed",
        "bg": "green",
        "align": "center"
      },
      "any outside queries executed AFTER the start of a transaction are visible within the transaction (just committed queries)"
    ],
    [
      {
        "content": "<code>Connection.TRANSACTION\\_REPEATABLE\\_READ</code>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Prevented",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "Prevented",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "Allowed",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "Allowed",
        "bg": "green",
        "align": "center"
      },
      "any outside queries executed AFTER the start of a transaction are NOT visible within the transaction"
    ],
    [
      {
        "content": "<code>Connection.TRANSACTION\\_SERIALIZABLE</code>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Prevented",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "Prevented",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "Prevented",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "Prevented",
        "bg": "red",
        "align": "center"
      },
      "transactions are serialized"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Resources
- [https://www.postgresql.org/docs/9.5/transaction-iso.html#MVCC-ISOLEVEL-TABLE](https://www.postgresql.org/docs/9.5/transaction-iso.html#MVCC-ISOLEVEL-TABLE)
