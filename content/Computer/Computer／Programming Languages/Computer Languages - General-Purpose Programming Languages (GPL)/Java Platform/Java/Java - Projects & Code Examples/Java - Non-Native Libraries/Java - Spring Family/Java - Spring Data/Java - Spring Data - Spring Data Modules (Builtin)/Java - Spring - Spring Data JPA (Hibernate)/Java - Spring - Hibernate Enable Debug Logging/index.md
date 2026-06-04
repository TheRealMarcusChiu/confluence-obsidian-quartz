---
title: "Java - Spring - Hibernate Enable Debug Logging"
created: 2020-12-04T10:25:59.169-06:00
modified: 2022-11-17T02:12:05.925-06:00
parent: "[[Java - Spring - Spring Data JPA (Hibernate)]]"
children: []
---
# Enable Debug Logging for Hibernate and Queries

add the following to <code><font style="color: rgb(51,102,255);">/src/main/resources/application.properties</font></code>
```
# Turn Statistics on 
spring.jpa.properties.hibernate.generate_statistics=true
logging.level.org.hibernate.stat=debug

# Show all queries
spring.jpa.show-sql=true
spring.datasource.url=jdbc:h2:mem:testdb # REPLACE HERE?
spring.data.jpa.repositories.bootstrap-mode=default
spring.jpa.properties.hibernate.format_sql=true
logging.level.org.hibernate.type=trace
```

Some of the log that is generated (later when we execute queries) when we turn statistics on is shown below.

Session Level Metrics
```
i.StatisticalLoggingSessionEventListener : Session Metrics {
    23004 nanoseconds spent acquiring 1 JDBC connections;
    0 nanoseconds spent releasing 0 JDBC connections;
    41930 nanoseconds spent preparing 1 JDBC statements;
    174065 nanoseconds spent executing 1 JDBC statements;
    0 nanoseconds spent executing 0 JDBC batches;
    0 nanoseconds spent performing 0 L2C puts;
    0 nanoseconds spent performing 0 L2C hits;
    0 nanoseconds spent performing 0 L2C misses;
    0 nanoseconds spent executing 0 flushes (flushing a total of 0 entities and 0 collections);
    5125 nanoseconds spent executing 1 partial-flushes (flushing a total of 0 entities and 0 collections)
```

Queries and Parameters
```
Hibernate: 
    select
        student0_.id as id1_0_,
        student0_.name as name2_0_,
        student0_.passport_number as passport3_0_ 
    from
        student student0_
2017-12-05 10:20:59.457 TRACE 26877 --- [  restartedMain] o.h.type.descriptor.sql.BasicExtractor   : extracted value ([id1_0_] : [BIGINT]) - [1]
2017-12-05 10:20:59.458 TRACE 26877 --- [  restartedMain] o.h.type.descriptor.sql.BasicExtractor   : extracted value ([name2_0_] : [VARCHAR]) - [John]
2017-12-05 10:20:59.458 TRACE 26877 --- [  restartedMain] o.h.type.descriptor.sql.BasicExtractor   : extracted value ([passport3_0_] : [VARCHAR]) - [A1234657]
2017-12-05 10:20:59.458 TRACE 26877 --- [  restartedMain] o.h.type.descriptor.sql.BasicExtractor   : extracted value ([id1_0_] : [BIGINT]) - [10001]
2017-12-05 10:20:59.458 TRACE 26877 --- [  restartedMain] o.h.type.descriptor.sql.BasicExtractor   : extracted value ([name2_0_] : [VARCHAR]) - [Name-Updated]
2017-12-05 10:20:59.458 TRACE 26877 --- [  restartedMain] o.h.type.descriptor.sql.BasicExtractor   : extracted value ([passport3_0_] : [VARCHAR]) - [New-Passport]
2017-12-05 10:20:59.458 DEBUG 26877 --- [  restartedMain] o.h.s.internal.ConcurrentStatisticsImpl  : HHH000117: HQL: select generatedAlias0 from Student as generatedAlias0, time: 1ms, rows: 2
```
