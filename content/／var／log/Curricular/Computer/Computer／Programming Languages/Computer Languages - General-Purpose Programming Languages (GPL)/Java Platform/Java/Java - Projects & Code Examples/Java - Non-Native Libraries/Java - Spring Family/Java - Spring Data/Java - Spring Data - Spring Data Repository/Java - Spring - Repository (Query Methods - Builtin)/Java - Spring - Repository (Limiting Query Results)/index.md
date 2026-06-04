---
title: "Java - Spring - Repository (Limiting Query Results)"
created: 2021-03-14T23:43:04.245-05:00
modified: 2021-03-14T23:44:33.112-05:00
parent: "[[Java - Spring - Repository (Query Methods - Builtin)]]"
children: []
---
The results of query methods can be limited by using the <code>first</code> or <code>top</code> keywords, which can be used interchangeably. An optional numeric value can be appended to <code>top</code> or <code>first</code> to specify the maximum result size to be returned. If the number is left out, a result size of 1 is assumed. The following example shows how to limit the query size:

Limiting the result size of a query with <code>Top</code> and <code>First</code>
```java
User findFirstByOrderByLastnameAsc();

User findTopByOrderByAgeDesc();

Page<User> queryFirst10ByLastname(String lastname, Pageable pageable);

Slice<User> findTop3ByLastname(String lastname, Pageable pageable);

List<User> findFirst10ByLastname(String lastname, Sort sort);

List<User> findTop10ByLastname(String lastname, Pageable pageable);
```

The limiting expressions also support the <code>Distinct</code> keyword. Also, for the queries limiting the result set to one instance, wrapping the result into with the <code>Optional</code> keyword is supported.

If pagination or slicing is applied to a limiting query pagination (and the calculation of the number of pages available), it is applied within the limited result.Limiting the results in combination with dynamic sorting by using a <code>Sort</code> parameter lets you express query methods for the 'K' smallest as well as for the 'K' biggest elements.
