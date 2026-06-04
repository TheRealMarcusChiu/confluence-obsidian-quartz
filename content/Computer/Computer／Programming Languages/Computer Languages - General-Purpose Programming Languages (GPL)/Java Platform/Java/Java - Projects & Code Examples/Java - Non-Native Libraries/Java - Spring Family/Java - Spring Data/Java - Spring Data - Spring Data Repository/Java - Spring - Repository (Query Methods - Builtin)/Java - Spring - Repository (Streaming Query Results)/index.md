---
title: "Java - Spring - Repository (Streaming Query Results)"
created: 2021-03-14T23:44:46.123-05:00
modified: 2021-03-14T23:46:37.220-05:00
parent: "[[Java - Spring - Repository (Query Methods - Builtin)]]"
children: []
---
NOTE: Not all [[Java - Spring Data - Spring Data Modules (Builtin)|Spring Data modules]] currently support <code>Stream\<T\></code> as a return type.

The results of query methods can be processed incrementally by using a Java 8 <code>Stream\<T\></code> as return type. Instead of wrapping the query results in a <code>Stream</code> data store-specific methods are used to perform the streaming, as shown in the following example:

Stream the result of a query with Java 8 <code>Stream\<T\></code>
```
@Query("select u from User u")
Stream<User> findAllByCustomQueryAndStream();

Stream<User> readAllByFirstnameNotNull();

@Query("select u from User u")
Stream<User> streamAllPaged(Pageable pageable);
```A <code>Stream</code> potentially wraps underlying data store-specific resources and must, therefore, be closed after usage. You can either manually close the <code>Stream</code> by using the <code>close()</code> method or by using a Java 7 <code>try-with-resources</code> block, as shown in the following example:
```
try (Stream<User> stream = repository.findAllByCustomQueryAndStream()) {
  stream.forEach(...);
}
```
