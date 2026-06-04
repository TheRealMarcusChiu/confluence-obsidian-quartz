---
title: "DBMS Query Types - Online Transaction Processing (OLTP) - Online Analytical Processing (OLAP)"
created: 2019-12-09T12:16:15.492-06:00
modified: 2026-01-13T14:50:42.049-06:00
parent: "[[DBMS - Other]]"
children: []
---
# DBMS Types - Query Types
````excerpt
<strong>OLAP</strong> is characterized by a large volume of data while <strong>OLTP</strong> is characterized by large numbers of short online transactions

```merge-table
{
  "rows": [
    [
      {
        "content": "Online Transaction Processing (OLTP)",
        "bg": "#F4F5F7"
      },
      "- is characterized by a large number of short online transactions (INSERT, GET, UPDATE, DELETE)\n- the main emphasis is fast query processing, maintaining data integrity in multi-access environments, and effectiveness measured by the number of transactions per second\n- in the OLTP database, there is detailed and current data, and the schema used to store transactional databases is the entity model (usually [[Database Normalization (Unnormalized First／Second／Third／Elementary-Key／Boyce-Codd／Fourth／Essential-Tuple／Fifth／Domain-Key／Sixth Normal Form)|3NF]])"
    ],
    [
      {
        "content": "Online Analytical Processing (OLAP)",
        "bg": "#F4F5F7"
      },
      "- is characterized by a relatively low volume of transactions\n- queries are often very complex and involve aggregations. For OLAP systems response time is an effective measure. OLAP applications are widely used in Data Mining techniques. In the OLAP database, there is aggregated, historical data, stored in multi-dimensional schemas (usually star schema)"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
````
^excerpt
