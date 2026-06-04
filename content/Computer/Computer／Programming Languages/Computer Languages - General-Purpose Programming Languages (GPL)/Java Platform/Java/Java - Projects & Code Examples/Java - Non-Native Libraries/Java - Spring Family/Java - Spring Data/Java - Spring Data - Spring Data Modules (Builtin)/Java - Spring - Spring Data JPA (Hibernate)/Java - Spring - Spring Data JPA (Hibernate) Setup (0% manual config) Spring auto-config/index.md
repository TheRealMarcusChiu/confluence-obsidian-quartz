---
title: "Java - Spring - Spring Data JPA (Hibernate) Setup (0% manual config) Spring auto-config"
created: 2022-11-16T04:35:37.526-06:00
modified: 2022-11-17T03:02:23.197-06:00
parent: "[[Java - Spring - Spring Data JPA (Hibernate)]]"
children: []
---
# Dependencies
```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
```
# DataSource Configuration
```
spring.datasource.url=jdbc:mysql://localhost:3306/first_database
spring.datasource.username=root
spring.datasource.password=
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

spring.jpa.hibernate.ddl-auto=create
spring.jpa.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
spring.jpa.hibernate.naming_strategy=org.hibernate.cfg.ImprovedNamingStrategy
```

Since we are using a MySQL driver in this example, you must add that driver to classpath
```
<!-- https://mvnrepository.com/artifact/com.mysql/mysql-connector-j -->
<dependency>
    <groupId>com.mysql</groupId>
    <artifactId>mysql-connector-j</artifactId>
    <version>8.0.31</version>
</dependency>
```
# Create Entities
```
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Entity
public class Customer {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String firstName;
  private String lastName;
}
```
# Create Repositories
```
import org.springframework.data.repository.CrudRepository;

public interface CustomerRepository extends CrudRepository<Customer, Long> {
  List<Customer> findByLastName(String lastName);
  Customer findById(long id);
}
```
# Using Repositories
```
Customer customer = customerRepository.save(new Customer());
System.out.println("Customer auto-generated id = " + customer.getId());
```
