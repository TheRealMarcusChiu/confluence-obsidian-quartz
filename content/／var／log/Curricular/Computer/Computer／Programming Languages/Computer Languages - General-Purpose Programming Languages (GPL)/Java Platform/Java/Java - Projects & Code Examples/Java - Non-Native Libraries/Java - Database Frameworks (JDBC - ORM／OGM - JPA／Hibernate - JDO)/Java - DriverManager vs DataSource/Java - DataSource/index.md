---
title: "Java - DataSource"
created: 2021-03-06T22:19:25.670-06:00
modified: 2022-05-15T19:52:26.525-05:00
parent: "[[Java - DriverManager vs DataSource]]"
children:
  - "[[Java - Connection Pooling Frameworks]]"
  - "[[Java - DataSource Configuration]]"
  - "[[Java - DataSource configuring for Tests]]"
  - "[[Java - Spring - Multiple DataSources]]"
---
A <code><strong>DataSource</strong></code> is a factory for connections to any physical data source. An alternative to the <code>[[Java - DriverManager|DriverManager]]</code> facility. It uses a URL along with some credentials to establish a database connection.

An object that implements the <code><font style="color: rgb(128,128,128);">javax.sql.DataSource</font></code> interface will typically be registered with JNDI service and can be discovered using it’s JNDI name.

A datasource may be used to obtain:
- standard <code>Connection</code> object
- connection which can be used in connection pooling
- connection which can be used in distributed transactions and connection pooling

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Resources
- [https://howtodoinjava.com/spring-boot2/datasource-configuration/](https://howtodoinjava.com/spring-boot2/datasource-configuration/)
