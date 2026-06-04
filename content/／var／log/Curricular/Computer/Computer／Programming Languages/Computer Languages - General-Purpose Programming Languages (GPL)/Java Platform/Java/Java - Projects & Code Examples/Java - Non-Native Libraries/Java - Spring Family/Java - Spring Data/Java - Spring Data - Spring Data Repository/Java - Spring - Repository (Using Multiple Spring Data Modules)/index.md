---
title: "Java - Spring - Repository (Using Multiple Spring Data Modules)"
created: 2021-03-14T23:07:01.193-05:00
modified: 2022-11-17T03:23:28.835-06:00
parent: "[[Java - Spring Data - Spring Data Repository]]"
children: []
---
###### What is Spring Data Modules
- see [[Java - Spring Data - Spring Data Modules (Builtin)|Spring Data Modules]]

# Using Repositories with Multiple Spring Data Modules

Using a unique Spring Data module in your application makes things simple because all repository interfaces in the defined scope are bound to that Spring Data module. Sometimes, applications require using more than one Spring Data module. In such cases, a repository definition must distinguish between persistence technologies. When it detects multiple repository factories on the class path, Spring Data enters strict repository configuration mode. Strict configuration uses details on the repository or the domain class to decide about Spring Data module binding for a repository definition:
1. If the repository definition [extends the module-specific repository](https://docs.spring.io/spring-data/neo4j/docs/5.1.12.RELEASE/reference/html/#repositories.multiple-modules.types), then it is a valid candidate for the particular Spring Data module.
2. If the domain class is [annotated with the module-specific type annotation](https://docs.spring.io/spring-data/neo4j/docs/5.1.12.RELEASE/reference/html/#repositories.multiple-modules.annotations), then it is a valid candidate for the particular Spring Data module. Spring Data modules accept either third-party annotations (such as JPA’s <code>@Entity</code>) or provide their own annotations (such as <code>@Document</code> for Spring Data MongoDB and Spring Data Elastic-Search).

# Examples

> [!expand-ui]- Repository definitions using module-specific interfaces
> ```
> interface MyRepository extends JpaRepository<User, Long> { }
>
> @NoRepositoryBean
> interface MyBaseRepository<T, ID extends Serializable> extends JpaRepository<T, ID> {
>   ...
> }
>
> interface UserRepository extends MyBaseRepository<User, Long> {
>   ...
> }
> ```
>
> <code><font style="color: rgb(122,134,154);">MyRepository</font></code> and <code><font style="color: rgb(122,134,154);">UserRepository</font></code> extend <code><font style="color: rgb(122,134,154);">JpaRepository</font></code> in their type hierarchy. They are valid candidates for the [[Java - Spring - Spring Data JPA (Hibernate)|Spring Data JPA]] module.

> [!expand-ui]- Repository definitions using generic interfaces
> ```
> interface AmbiguousRepository extends Repository<User, Long> {
>  ...
> }
>
> @NoRepositoryBean
> interface MyBaseRepository<T, ID extends Serializable> extends CrudRepository<T, ID> {
>   ...
> }
>
> interface AmbiguousUserRepository extends MyBaseRepository<User, Long> {
>   ...
> }
> ```
>
> <code><font style="color: rgb(122,134,154);">AmbiguousRepository</font></code> and <code><font style="color: rgb(122,134,154);">AmbiguousUserRepository</font></code> extend only <code><font style="color: rgb(122,134,154);">Repository</font></code> and <code><font style="color: rgb(122,134,154);">CrudRepository</font></code> in their type hierarchy. While this is perfectly fine when using a single Spring Data module, multiple modules cannot distinguish to which particular Spring Data these repositories should be bound

> [!expand-ui]- Repository definitions using domain classes with annotations
> ```
> interface PersonRepository extends Repository<Person, Long> {
>  ...
> }
>
> @Entity
> class Person {
>   ...
> }
>
> interface UserRepository extends Repository<User, Long> {
>  ...
> }
>
> @Document
> class User {
>   ...
> }
> ```
>
> <code><font style="color: rgb(122,134,154);">PersonRepository</font></code> references <code><font style="color: rgb(122,134,154);">Person</font></code>, which is annotated with the [[Java - Java Persistence API (JPA) - Jakarta Persistence|JPA]] <code><font style="color: rgb(128,128,0);">@Entity</font></code> annotation, so this repository clearly belongs to [[Java - Spring - Spring Data JPA (Hibernate)|Spring Data JPA]]. <code><font style="color: rgb(122,134,154);">UserRepository</font></code> references <code><font style="color: rgb(122,134,154);">User</font></code>, which is annotated with Spring Data MongoDB’s <code><font style="color: rgb(128,128,0);">@Document</font></code> annotation

> [!expand-ui]- Repository definitions using domain classes with mixed annotations
> ```
> interface JpaPersonRepository extends Repository<Person, Long> {
>  ...
> }
>
> interface MongoDBPersonRepository extends Repository<Person, Long> {
>  ...
> }
>
> @Entity
> @Document
> class Person {
>   ...
> }
> ```
>
> This example shows a domain class using both JPA and Spring Data MongoDB annotations. It defines two repositories, <code><font style="color: rgb(122,134,154);">JpaPersonRepository</font></code> and <code><font style="color: rgb(122,134,154);">MongoDBPersonRepository</font></code>. One is intended for JPA and the other for MongoDB usage. Spring Data is no longer able to tell the repositories apart, which leads to undefined behavior

[Repository type details](https://docs.spring.io/spring-data/neo4j/docs/5.1.12.RELEASE/reference/html/#repositories.multiple-modules.types) and [distinguishing domain class annotations](https://docs.spring.io/spring-data/neo4j/docs/5.1.12.RELEASE/reference/html/#repositories.multiple-modules.annotations) are used for strict repository configuration to identify repository candidates for a particular Spring Data module. Using multiple persistence technology-specific annotations on the same domain type is possible and enables the reuse of domain types across multiple persistence technologies. However, Spring Data can then no longer determine a unique module with which to bind the repository.

The last way to distinguish repositories is by scoping repository base packages. Base packages define the starting points for scanning for repository interface definitions, which implies having repository definitions located in the appropriate packages. By default, annotation-driven configuration uses the package of the configuration class. The [base package in XML-based configuration](https://docs.spring.io/spring-data/neo4j/docs/5.1.12.RELEASE/reference/html/#repositories.create-instances.spring) is mandatory.

> [!expand-ui]- Annotation-driven configuration of base packages
> ```
> @EnableJpaRepositories(basePackages = "com.acme.repositories.jpa")
> @EnableMongoRepositories(basePackages = "com.acme.repositories.mongo")
> interface Configuration { }
> ```
