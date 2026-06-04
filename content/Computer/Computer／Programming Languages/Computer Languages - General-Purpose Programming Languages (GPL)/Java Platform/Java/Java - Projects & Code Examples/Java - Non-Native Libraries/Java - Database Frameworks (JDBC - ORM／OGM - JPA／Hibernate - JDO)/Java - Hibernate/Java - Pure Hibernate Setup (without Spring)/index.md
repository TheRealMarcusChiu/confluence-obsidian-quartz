---
title: "Java - Pure Hibernate Setup (without Spring)"
created: 2022-11-16T04:12:39.085-06:00
modified: 2022-11-16T04:43:41.437-06:00
parent: "[[Java - Hibernate]]"
children: []
---
# Dependencies
```
<dependency>
	<groupId>org.hibernate</groupId>
    <artifactId>hibernate-core</artifactId>
    <version>5.4.2.Final</version>
</dependency>
```
# Creating Entities

Use the standard [[Java - Java Persistence API (JPA) - Jakarta Persistence|JPA]] annotations (in <code><font style="color: rgb(122,134,154);">javax.persistence</font></code>) instead of Hibernate's annotations (in <code><font style="color: rgb(122,134,154);">org.hibernate.annotations</font></code>). This way, you could theoretically run your code on other JPA implementations.

Only when you need Hibernate-specific functionality should you use the Hibernate annotations.
```
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@Entity
@Table(name="USER")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    private String name;

    @Column(name="ISBN_NUMBER")
    private String isbn;
}
```
# Creating SessionFactory
```
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.boot.Metadata;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.service.ServiceRegistry;
import java.util.HashMap;
import java.util.Map;

public static Session getCurrentSession() {
    // Hibernate 5.4 SessionFactory example without XML
    Map<String, String> settings = new HashMap<>();
    settings.put("connection.driver_class", "com.mysql.jdbc.Driver");
    settings.put("dialect", "org.hibernate.dialect.MySQL8Dialect");
    settings.put("hibernate.connection.url", "jdbc:mysql://localhost/hibernate_examples");
    settings.put("hibernate.connection.username", "root");
    settings.put("hibernate.connection.password", "password");
    settings.put("hibernate.current_session_context_class", "thread");
    settings.put("hibernate.show_sql", "true");
    settings.put("hibernate.format_sql", "true");

    ServiceRegistry serviceRegistry = new StandardServiceRegistryBuilder()
        .applySettings(settings).build();

    MetadataSources metadataSources = new MetadataSources(serviceRegistry);
    metadataSources.addAnnotatedClass(User.class); // <--- add entity classes here
    Metadata metadata = metadataSources.buildMetadata();

    // here we build the SessionFactory (Hibernate 5.4)
    SessionFactory sessionFactory = metadata.getSessionFactoryBuilder().build();
    Session session = sessionFactory.getCurrentSession();
    return session;
}
```
# Using SessionFactory
```
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

public Integer createUserAndReturnId(final SessionFactory sessionFactory) {
   Session session = sessionFactory.openSession();
   Transaction tx = null;
   Integer userId = null;
   try {
       tx = session.beginTransaction();
       User user = new User();
       userId = (Integer) session.save(user);
       tx.commit();
   } catch (HibernateException e) {
       if (tx!=null) tx.rollback();
       e.printStackTrace();
   } finally {
       session.close();
   }
   return userId;
}
```
