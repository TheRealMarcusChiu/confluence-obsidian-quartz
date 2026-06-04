---
title: "Java - Spring - Spring Data JPA (Hibernate) Setup (100% manual config)"
created: 2022-11-17T02:56:57.463-06:00
modified: 2022-11-17T03:02:00.796-06:00
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
import org.hibernate.SessionFactory;
import org.springframework.aop.framework.ProxyFactory;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.support.JpaRepositoryFactory;
import org.springframework.data.repository.core.RepositoryInformation;
import org.springframework.data.repository.core.support.RepositoryProxyPostProcessor;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.orm.jpa.EntityManagerHolder;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.transaction.interceptor.MatchAlwaysTransactionAttributeSource;
import org.springframework.transaction.interceptor.TransactionInterceptor;
import org.springframework.transaction.support.TransactionSynchronizationManager;

import javax.persistence.EntityManager;
import javax.sql.DataSource;
import java.io.IOException;
import java.util.Properties;

@Configuration
public class MySqlConfig {

    @Bean
    public UserRepository userRepository() throws IOException {
        DataSource dataSource = DataSourceBuilder.create()
                .url("jdbc:mysql://localhost:3306/first_database?createDatabaseIfNotExist=true")
                .username("root")
                .password("")
                .driverClassName("com.mysql.cj.jdbc.Driver")
                .build();

        LocalSessionFactoryBean localSessionFactoryBean = new LocalSessionFactoryBean();
        localSessionFactoryBean.setDataSource(dataSource);
        localSessionFactoryBean.setPackagesToScan("com.example.demo");
        localSessionFactoryBean.setHibernateProperties(hibernateProperties());

        // initialize bean
        localSessionFactoryBean.afterPropertiesSet();

        SessionFactory sessionFactory = localSessionFactoryBean.getObject();

        EntityManager em = sessionFactory.createEntityManager();

        // Create your transaction manager and RepositoryFactory
//        final HibernateTransactionManager transactionManager = new HibernateTransactionManager(sessionFactory);
        final JpaTransactionManager transactionManager = new JpaTransactionManager(sessionFactory);
        final JpaRepositoryFactory factory = new JpaRepositoryFactory(em);

        // Make sure calls to the repository instance are intercepted for annotated transactions
        factory.addRepositoryProxyPostProcessor(new RepositoryProxyPostProcessor() {
            @Override
            public void postProcess(ProxyFactory factory, RepositoryInformation repositoryInformation) {
                factory.addAdvice(new TransactionInterceptor(transactionManager, new MatchAlwaysTransactionAttributeSource()));
            }
        });

        // Create your repository proxy instance
        UserRepository userRepository = factory.getRepository(UserRepository.class);

        // Bind the same EntityManger used to create the Repository to the thread
        TransactionSynchronizationManager.bindResource(sessionFactory, new EntityManagerHolder(em));

        return userRepository;
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
@Autowired
private CustomerRepository customerRepository;

Customer customer = customerRepository.save(new Customer());
System.out.println("Customer auto-generated id = " + customer.getId());
```
