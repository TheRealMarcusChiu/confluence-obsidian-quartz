---
title: "Java - Spring Data - Load Initial Data (data.sql - schema.sql)"
created: 2022-08-31T03:11:13.744-05:00
modified: 2022-12-22T09:48:53.030-06:00
parent: "[[Java - Spring Data]]"
children: []
---
# 2. The <em>data.sql</em> File

Let's also make the assumption here that we're working with JPA and define a simple <em>Country</em> entity in our project:
```
@Entity
public class Country {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Integer id;
    
    @Column(nullable = false)
    private String name;

    //...
}
```

If we run our application, <strong>Spring Boot will create an empty table for us but won't populate it with anything.</strong>

An easy way to do this is to create a file named <em>data.sql</em>:
```
INSERT INTO country (name) VALUES ('India');
INSERT INTO country (name) VALUES ('Brazil');
INSERT INTO country (name) VALUES ('USA');
INSERT INTO country (name) VALUES ('Italy');
```

When we run the project with this file on the classpath, Spring will pick it up and use it for populating the database.
# 3. The <em>schema.sql</em> File

Sometimes, we don't want to rely on the default schema creation mechanism.

In such cases, we can create a custom <em>schema.sql</em> file:
```
CREATE TABLE country (
    id   INTEGER      NOT NULL AUTO_INCREMENT,
    name VARCHAR(128) NOT NULL,
    PRIMARY KEY (id)
);
```

Spring will pick this file up and use it for creating a schema.

<strong>Please note that script-based initialization i.e. through <em>schema.sql</em> and <em>data.sql</em> and Hibernate initialization together can cause some issues.</strong>

Either we disable Hibernate automatic schema creation:
```
spring.jpa.hibernate.ddl-auto=none
```

This will ensure that script-based initialization is performed using <em>schema.sql</em> and<em> data.sql</em> directly.

If we still want to have both Hibernate automatic schema generation in conjugation with script-based schema creation and data population, we'll have to use:
```
spring.jpa.defer-datasource-initialization=true
```

<strong>This will ensure, that after Hibernate schema creation is performed then additionally <em>schema.sql</em> is read for any additional schema changes and <em>data.sql</em> is executed to populate the database. </strong>

Also, script-based initialization is performed by default only for embedded databases, to always initialize a database using scripts, we'll have to use:
```
spring.sql.init.mode=always
```

Please refer to official Spring documentation on [initializing databases using SQL scripts](https://docs.spring.io/spring-boot/docs/current/reference/html/howto.html#howto.data-initialization.using-basic-sql-scripts).
# 4. Controlling Database Creation Using Hibernate

Spring provides a JPA-specific <strong>property that Hibernate uses for DDL generation: </strong><em><strong>spring.jpa.hibernate.ddl-auto</strong></em><strong>.</strong>

The standard Hibernate property values are <em>create</em>, <em>update</em>, <em>create-drop</em>, <em>validate</em> and <em>none</em>:
- <em>create</em> – Hibernate first drops existing tables and then creates new tables.
- <em>update</em> – The object model created based on the mappings (annotations or XML) is compared with the existing schema, and then Hibernate updates the schema according to the diff. It never deletes the existing tables or columns even if they are no longer required by the application.
- <em>create-drop</em> – similar to <em>create</em>, with the addition that Hibernate will drop the database after all operations are completed; typically used for unit testing
- <em>validate</em> – Hibernate only validates whether the tables and columns exist; otherwise, it throws an exception.
- <em>none</em> – This value effectively turns off the DDL generation.

Spring Boot internally defaults this parameter value to <em>create-drop</em> if no schema manager has been detected, otherwise <em>none</em> for all other cases.

<strong>We have to set the value carefully or use one of the other mechanisms to initialize the database.</strong>
# 5. Customizing Database Schema Creation

By default, Spring Boot automatically creates the schema of an embedded <em>DataSource</em>.

If we need to control or customize this behavior, we can use the property [<em>spring.sql.init.mode</em>](https://docs.spring.io/spring-boot/docs/current-SNAPSHOT/api/org/springframework/boot/sql/init/DatabaseInitializationMode.html). This property takes one of three values:
- <em>always</em> – always initialize the database
- <em>embedded</em> – always initialize if an embedded database is in use. This is the default if the property value is not specified.
- <em>never</em> – never initialize the database

Notably, if we are using a non-embedded database, let's say MySQL or PostGreSQL, and want to initialize its schema, we'll have to set this property to <em>always</em>.

This property was introduced in Spring Boot 2.5.0; we need to use <em>spring.datasource.initialization-mode </em>if we are using previous versions of Spring Boot.
# 6. <em>@Sql</em>

Spring also provides the <em>@Sql</em> annotation — a declarative way to initialize and populate our test schema.

Let's see how to use the <em>@Sql</em> annotation to create a new table and also load the table with initial data for our integration test:
```
@Sql({"/employees_schema.sql", "/import_employees.sql"})
public class SpringBootInitialLoadIntegrationTest {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Test
    public void testLoadDataForTestClass() {
        assertEquals(3, employeeRepository.findAll().size());
    }
}
```

Here are the attributes of the <em>@Sql</em> annotation:
- <em>config – </em>local configuration for the SQL scripts. We describe this in detail in the next section.
- <em>executionPhase</em> – We can also specify when to execute the scripts, either <em>BEFORE\_TEST\_METHOD</em> or <em>AFTER\_TEST\_METHOD</em>.
- <em>statements </em>– We can declare inline SQL statements to execute.
- <em>scripts </em>– We can declare the paths to SQL script files to execute. This is an alias for the <em>value </em>attribute.

The <em>@Sql</em> annotation <strong>can be used at the class level or the method level.</strong>

We'll load additional data required for a particular test case by annotating that method:
```
@Test
@Sql({"/import_senior_employees.sql"})
public void testLoadDataForTestCase() {
    assertEquals(5, employeeRepository.findAll().size());
}
```
# 7. <em>@SqlConfig</em>

We can <strong>configure the way we parse and run the SQL scripts</strong> by using the <em>@SqlConfig</em> annotation.

<em>@SqlConfig</em> can be declared at the class level, where it serves as a global configuration. Or we can use it to configure a particular <em>@Sql</em> annotation.

Let's see an example where we specify the encoding of our SQL scripts as well as the transaction mode for executing the scripts:
```
@Test
@Sql(scripts = {"/import_senior_employees.sql"}, 
  config = @SqlConfig(encoding = "utf-8", transactionMode = TransactionMode.ISOLATED))
public void testLoadDataForTestCase() {
    assertEquals(5, employeeRepository.findAll().size());
}
```

And let's look at the various attributes of <em>@SqlConfig</em>:
- <em>blockCommentStartDelimiter</em> – delimiter to identify the start of block comments in SQL script files
- <em>blockCommentEndDelimiter</em> – delimiter to denote the end of block comments in SQL script files
- <em>commentPrefix</em> – prefix to identify single-line comments in SQL script files
- <em>dataSource</em> – name of the <em>javax.sql.DataSource</em> bean against which the scripts and statements will be run
- <em>encoding</em> – encoding for the SQL script files; default is platform encoding
- <em>errorMode</em> – mode that will be used when an error is encountered running the scripts
- <em>separator</em> – string used to separate individual statements; default is “–“
- <em>transactionManager</em> – bean name of the <em>PlatformTransactionManager </em>that will be used for transactions
- <em>transactionMode</em> – the mode that will be used when executing scripts in transaction

# 8. <em>@SqlGroup</em>

Java 8 and above allow the use of repeated annotations. We can utilize this feature for <em>@Sql</em> annotations as well. For Java 7 and below, there is a container annotation — <em>@SqlGroup</em>.

<strong>Using the <em>@SqlGroup</em> annotation, we'll declare multiple <em>@Sql</em> annotations</strong>:
```
@SqlGroup({
  @Sql(scripts = "/employees_schema.sql", 
    config = @SqlConfig(transactionMode = TransactionMode.ISOLATED)),
  @Sql("/import_employees.sql")})
public class SpringBootSqlGroupAnnotationIntegrationTest {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Test
    public void testLoadDataForTestCase() {
        assertEquals(3, employeeRepository.findAll().size());
    }
}
```
# Resources
- [https://www.baeldung.com/spring-boot-data-sql-and-schema-sql](https://www.baeldung.com/spring-boot-data-sql-and-schema-sql)
