---
title: "Java - Spring - Spring Data JDBC"
created: 2022-11-15T21:59:33.131-06:00
modified: 2022-11-16T04:37:59.262-06:00
parent: "[[Java - Spring Data - Spring Data Modules (Builtin)]]"
children: []
---
###### Spring Data JDBC
- is a [[Java - Spring Data - Spring Data Modules (Builtin)|Spring Data Module]] that is not as complex as [[Java - Spring - Spring Data JPA (Hibernate)|Spring Data JPA]]
- it does NOT provide:
	- cache
	- lazy loading
	- write-behind
	- schema generation. As a result, we are responsible for explicitly creating the schema
	- or many other features of JPA
- it does provide:
	- its own [[Java - Database Frameworks (JDBC - ORM／OGM - JPA／Hibernate - JDO)|ORM]]
	- mapped entities
	- repositories
	- query annotations
	- JdbcTemplate

# Dependencies
```
<dependency> 
    <groupId>org.springframework.boot</groupId> 
    <artifactId>spring-boot-starter-data-jdbc</artifactId>
</dependency> 
```
# Creating Entities

We don't need to use the annotation <code><font style="color: rgb(128,128,0);">@Table</font></code> or <code><font style="color: rgb(128,128,0);">@Column</font></code> in the Person class. The default naming strategy of Spring Data JDBC does all the mappings implicitly between the entity and the table
```
public class Person {
    @Id
    private long id;
    private String firstName;
    private String lastName;
    // constructors, getters, setters
}
```
# Creating Repositories

We can create a Spring Data JDBC repository by extending the <code><font style="color: rgb(122,134,154);">Repository</font></code>, <code><font style="color: rgb(122,134,154);">CrudRepository</font></code>, or <code><font style="color: rgb(122,134,154);">PagingAndSortingRepository</font></code> interface
```
@Repository 
public interface PersonRepository extends CrudRepository<Person, Long> {

    List<Person> findByFirstName(String firstName);

    @Modifying
    @Query("UPDATE person SET first_name = :name WHERE id = :id")
    boolean updateByFirstName(@Param("id") Long id, @Param("name") String name);

}
```
# Resources
- [https://www.baeldung.com/spring-data-jdbc-intro](https://www.baeldung.com/spring-data-jdbc-intro)
