---
title: "Java - Connection Pooling Frameworks"
created: 2021-03-06T22:35:03.736-06:00
modified: 2022-05-27T20:54:35.317-05:00
parent: "[[Java - DataSource]]"
children: []
---
<strong>Connection Pooling</strong> is a cache of database connections maintained so that the connections can be reused when future requests to the database are required. Connection pools are used to enhance the performance of executing commands on a database
# Connection Pooling Frameworks
- HikariCP
- Tomcat Pooling
- Commons DBCP2

# Spring Boot's Autoconfiguration

For a pooling [[Java - DataSource|DataSource]] to be created, Spring Boot verifies that a valid <code>Driver</code> class is available. If we set <code>spring.datasource.driver-class-name</code> property then that mentioned driver class has to be loadable.

Spring boot tries to find and configure connection pooling first HikariCP, second Tomcat pooling, and then finally Commons DBCP2. <code>HikariCP</code> comes inbuilt with <code>spring-boot-starter-jdbc</code> or <code>spring-boot-starter-data-jpa</code> starters
# Customize Connection Pooling Settings

It is also possible to fine-tune [implementation-specific settings](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#data-properties) by using their respective prefix:
- <code>spring.datasource.hikari.\*</code>
- <code>spring.datasource.tomcat.\*</code>
- <code>spring.datasource.dbcp2.\*</code>

For example, we can use below properties to [customize a DBCP2 connection pool](https://commons.apache.org/proper/commons-dbcp/configuration.html).
```
spring.datasource.dbcp2.initial-size = 50
spring.datasource.dbcp2.max-idle = 50
spring.datasource.dbcp2.default-query-timeout = 10000
spring.datasource.dbcp2.default-auto-commit = true
```
