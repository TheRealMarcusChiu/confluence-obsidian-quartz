---
title: "Java - Spring - Spring JDBC"
created: 2021-03-07T17:24:14.550-06:00
modified: 2022-11-15T22:01:29.405-06:00
parent: "[[Java - Spring Data - Spring Data Modules (Builtin)]]"
children: []
---
All the classes in Spring JDBC module are divided into four separate packages:
- <strong><em>core</em></strong> — the core functionality of JDBC. Some of the important classes under this package include <em>JdbcTemplate</em>,<em> SimpleJdbcInsert</em>, <em>SimpleJdbcCall</em> and <em>NamedParameterJdbcTemplate</em>.
- <strong><em>datasource</em></strong> — utility classes to access a data source. It also has various data source implementations for testing JDBC code outside the Jakarta EE container.
- <strong><em>object</em></strong> — DB access in an object-oriented manner. It allows running queries and returning the results as a business object. It also maps the query results between the columns and properties of business objects.
- <strong><em>support</em></strong> — support classes for classes under <em>core</em> and <em>object</em> packages, e.g., provides the <em>SQLException</em> translation functionality

# Other
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

- [[Java - Spring - Security (JDBC Authentication)]]

# Resources
- [https://www.baeldung.com/spring-jdbc-jdbctemplate](https://www.baeldung.com/spring-jdbc-jdbctemplate)
