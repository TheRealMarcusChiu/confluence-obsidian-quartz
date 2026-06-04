---
title: "Java - Spring - Repository (Async Query Results)"
created: 2021-03-14T23:46:54.745-05:00
modified: 2021-09-26T23:07:57.510-05:00
parent: "[[Java - Spring - Repository (Query Methods - Builtin)]]"
children: []
---
Repository queries by default are blocking and synchronous. However, they can be run asynchronously by using [Spring’s asynchronous method execution capability](https://docs.spring.io/spring-data/neo4j/docs/5.1.12.RELEASE/reference/html/%7Bspring-framework-docs%7D/integration.html#scheduling). This means the method returns immediately upon invocation while the actual query execution occurs in a task that has been submitted to a Spring <code><font style="color: rgb(122,134,154);">TaskExecutor</font></code>. Asynchronous query execution is different from reactive query execution and should not be mixed. Refer to store-specific documentation for more details on reactive support. The following example shows a number of asynchronous queries
```
@Async // 1
Future<User> findByFirstname(String firstname);               

@Async // 2
CompletableFuture<User> findOneByFirstname(String firstname); 

@Async // 3
ListenableFuture<User> findOneByLastname(String lastname);    
```
1. Uses a <code>[[Java - Future & CompletableFuture|java.util.concurrent.Future]]</code> as the return type
2. Uses a <code>[[Java - Future & CompletableFuture|java.util.concurrent.CompletableFuture]]</code> as the return type
3. Uses a <code><font style="color: rgb(122,134,154);">org.springframework.util.concurrent.ListenableFuture</font></code> as the return type
