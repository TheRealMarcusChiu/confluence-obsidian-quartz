---
title: "Java - Spring Data - Transaction Management"
created: 2021-01-14T14:17:09.545-06:00
modified: 2022-12-22T09:49:29.321-06:00
parent: "[[Java - Spring Data]]"
children:
  - "[[Java - Spring - @EnableTransactionManagement & @Transactional]]"
  - "[[Java - Spring - Logical Transaction vs Physical Transaction - Propagation Level]]"
  - "[[Java - Spring - Transaction Bound Events - @TransactionalEventListener]]"
  - "[[Java - Spring - TransactionManager (PlatformTransactionManager - ReactiveTransactionManager)]]"
  - "[[Java - Spring - TransactionOperator]]"
  - "[[Java - Spring - TransactionTemplate]]"
---
Compared with the [[Java - Data - Transaction Management - Java Transaction API (JTA)|plain JDBC example]] (in [[Java - Data - Transaction Management - Java Transaction API (JTA)]]):
- You do not have to mess with opening or closing database connections yourself (try-finally). Instead you use [Transaction Callbacks](https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/transaction/support/TransactionCallback.html).
- You also do not have to catch <code>SQLExceptions</code>, as Spring converts these exceptions to runtime exceptions for you

# Transaction Configuration
- <code>[[Java - Spring - TransactionManager (PlatformTransactionManager - ReactiveTransactionManager)|TransactionManager]]</code>

# Transaction Creation

```merge-table
{
  "rows": [
    [
      {
        "content": "Programmatically",
        "header": true,
        "bg": "#F4F5F7",
        "rowspan": 2
      },
      "<code>[[Java - Spring - TransactionTemplate|TransactionTemplate]]</code>",
      "- for imperative code\n- <code>TransactionTemplate</code> will use a <code>Platform</code><code>TransactionManager</code> internally, which will use a <code>[[Java - DataSource|DataSource]]</code>"
    ],
    [
      "<code>[[Java - Spring - TransactionOperator|TransactionalOperator]]</code>",
      "- for reactive code\n- <code>TransactionalOperator</code> will use a <code>Reactive</code><code>TransactionManager</code> internally, which will use a <code>DataSource</code>"
    ],
    [
      {
        "content": "Declaratively",
        "header": true,
        "bg": "#F4F5F7"
      },
      "<code>[[Java - Spring - @EnableTransactionManagement & @Transactional|@Transactional & @EnableTransactionManagement]]</code>",
      "- can be used for both: imperative and reactive?"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Transaction - Other
- [[Java - Spring - Logical Transaction vs Physical Transaction - Propagation Level]]
- [[Java - Spring - Transaction Bound Events - @TransactionalEventListener]]

# Resources
- [https://docs.spring.io/spring-framework/docs/current/reference/html/data-access.html#transaction](https://docs.spring.io/spring-framework/docs/current/reference/html/data-access.html#transaction)
