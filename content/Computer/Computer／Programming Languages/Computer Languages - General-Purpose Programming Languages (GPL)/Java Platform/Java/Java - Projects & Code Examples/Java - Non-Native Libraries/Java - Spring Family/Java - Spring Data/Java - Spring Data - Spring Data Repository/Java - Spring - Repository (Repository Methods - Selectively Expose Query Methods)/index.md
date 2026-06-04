---
title: "Java - Spring - Repository (Repository Methods - Selectively Expose Query Methods)"
created: 2021-03-14T22:54:24.456-05:00
modified: 2021-03-21T16:04:53.374-05:00
parent: "[[Java - Spring Data - Spring Data Repository]]"
children: []
---
Selectively exposing CRUD methods
```
@NoRepositoryBean
interface MyBaseRepository<T, ID extends Serializable> extends Repository<T, ID> {
  Optional<T> findById(ID id);
  <S extends T> S save(S entity);
}

interface UserRepository extends MyBaseRepository<User, Long> {
  User findByEmailAddress(EmailAddress emailAddress);
}
```

In the code block above, a common base interface for all your domain repositories and exposed <code>findById(…)</code> as well as <code>save(…)</code>.These methods are routed into the base repository implementation of the store of your choice provided by Spring Data (for example, if you use JPA, the implementation is <code>SimpleJpaRepository</code>), because they match the method signatures in <code>CrudRepository</code>. So the <code>UserRepository</code> can now save users, find individual users by ID, and trigger a query to find <code>Users</code> by email address
