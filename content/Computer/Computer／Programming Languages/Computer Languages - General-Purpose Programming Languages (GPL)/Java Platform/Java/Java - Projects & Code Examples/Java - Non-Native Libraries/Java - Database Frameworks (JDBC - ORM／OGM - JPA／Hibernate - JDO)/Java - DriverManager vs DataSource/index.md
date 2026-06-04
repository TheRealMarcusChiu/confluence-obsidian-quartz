---
title: "Java - DriverManager vs DataSource"
created: 2021-04-11T21:29:20.442-05:00
modified: 2021-04-11T21:31:28.391-05:00
parent: "[[Java - Database Frameworks (JDBC - ORM／OGM - JPA／Hibernate - JDO)]]"
children:
  - "[[Java - DataSource]]"
  - "[[Java - DriverManager]]"
---
```merge-table
{
  "rows": [
    [
      {
        "content": "[[Java - DriverManager|DriverManager]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- hampers the application performance as the connections are created/closed in java classes.\n- does not support connection pooling"
    ],
    [
      {
        "content": "[[Java - DataSource|DataSource]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- improves application performance as connections are not created/closed within a class, they are managed by the application server and can be fetched while at runtime.\n- it provides a facility creating a pool of connections"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
