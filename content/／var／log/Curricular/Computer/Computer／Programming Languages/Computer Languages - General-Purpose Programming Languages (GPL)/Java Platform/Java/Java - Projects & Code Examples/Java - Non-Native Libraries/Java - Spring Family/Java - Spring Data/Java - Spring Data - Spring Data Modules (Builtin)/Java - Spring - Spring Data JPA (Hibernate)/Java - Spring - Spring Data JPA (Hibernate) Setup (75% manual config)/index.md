---
title: "Java - Spring - Spring Data JPA (Hibernate) Setup (75% manual config)"
created: 2022-11-17T01:55:15.454-06:00
modified: 2022-11-17T03:01:52.230-06:00
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

Disable Spring Data JPA's auto-configuration classes
```
@SpringBootApplication(exclude = {
	org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration.class,
 	org.springframework.boot.autoconfigure.jdbc.DataSourceTransactionManagerAutoConfiguration.class
	org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration.class
})
```

Below is the entire manual JPA configuration
```
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.hibernate5.HibernateTransactionManager;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.transaction.PlatformTransactionManager;

import javax.sql.DataSource;
import java.util.Properties;

@Configuration
@EnableJpaRepositories(
        basePackageClasses = UserRepository.class,
        entityManagerFactoryRef = "my-session-factory",
        transactionManagerRef = "my-transaction-manager"
)
public class MySqlConfig {

    @Bean("my-session-factory")
    public LocalSessionFactoryBean sessionFactory() {
        DataSource dataSource = DataSourceBuilder.create()
                .url("jdbc:mysql://localhost:3306/first_database?createDatabaseIfNotExist=true")
                .username("root")
                .password("")
                .driverClassName("com.mysql.cj.jdbc.Driver")
                .build();

        LocalSessionFactoryBean sessionFactory = new LocalSessionFactoryBean();
        sessionFactory.setDataSource(dataSource);
        sessionFactory.setPackagesToScan("com.example.demo");
        sessionFactory.setHibernateProperties(hibernateProperties());
        return sessionFactory;
    }

    @Bean("my-transaction-manager")
    public PlatformTransactionManager transactionManager() {
        HibernateTransactionManager transactionManager = new HibernateTransactionManager();
        transactionManager.setSessionFactory(sessionFactory().getObject());
        return transactionManager;
    }

    private Properties hibernateProperties() {
        Properties hibernateProperties = new Properties();
        hibernateProperties.setProperty("hibernate.hbm2ddl.auto", "create");
        hibernateProperties.setProperty("hibernate.dialect", "org.hibernate.dialect.MySQL8Dialect");
        hibernateProperties.setProperty("hibernate.naming_strategy", "org.hibernate.cfg.ImprovedNamingStrategy");
        return hibernateProperties;
    }
}
```

Since we are using a MySQL driver in this example, you must add that driver to the classpath
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
