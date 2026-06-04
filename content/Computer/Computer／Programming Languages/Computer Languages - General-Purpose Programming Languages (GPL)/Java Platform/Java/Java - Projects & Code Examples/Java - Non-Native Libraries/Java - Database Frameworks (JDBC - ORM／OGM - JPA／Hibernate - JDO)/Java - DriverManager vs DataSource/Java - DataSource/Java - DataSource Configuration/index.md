---
title: "Java - DataSource Configuration"
created: 2021-03-06T22:52:06.858-06:00
modified: 2021-09-25T02:10:45.708-05:00
parent: "[[Java - DataSource]]"
children: []
---
Spring Boot allows defining <code><font style="color: rgb(122,134,154);">DataSource</font></code> configuration in both ways i.e. Java config and properties config. <code><font style="color: rgb(122,134,154);">DataSourceAutoConfiguration</font></code> checks for <code><font style="color: rgb(122,134,154);">DataSource.class</font></code> (or <code><font style="color: rgb(122,134,154);">EmbeddedDatabaseType.class</font></code>) on the classpath and few other things before configuring a <code><font style="color: rgb(122,134,154);">DataSource</font></code> bean for us
# Configuring DataSource Bean

> [!expand-ui]- Maven
> The <font style="color: rgb(122,134,154);">spring-boot-starter-data-jpa</font> dependency brings all necessary dependencies including JDBC drivers for various databases e.g. <code><font style="color: rgb(122,134,154);">mysql-connector-java</font></code> for connecting to a [[MySQL|MySQL database]].
>
> If we are planning to use an embedded database at some step (e.g. testing), we can import H2 db separately.
> ```xml
> <dependency>
>     <groupId>org.springframework.boot</groupId>
>     <artifactId>spring-boot-starter-data-jpa</artifactId>
> </dependency>
>  
> <dependency>
>     <groupId>com.h2database</groupId>
>     <artifactId>h2</artifactId>
>     <version>2.4.1</version> 
>     <scope>runtime</scope> 
> </dependency>
> ```

> [!expand-ui]- application.properties
> <code><font style="color: rgb(122,134,154);">DataSource</font></code> configuration is provided by external configuration properties ( <code><font style="color: rgb(122,134,154);">spring.datasource.\*</font></code>) in <code><font style="color: rgb(122,134,154);">application.properties</font></code> file.
>
> The properties configuration decouples the configuration from the application code. This way, we can import the <code><font style="color: rgb(122,134,154);">DataSource</font></code> configurations from even configuration provider systems.
>
> Below given configuration shows sample properties for H2, MySQL, Oracle, and SQL server databases.
> > We often do not need to specify the <code>driver-class-name</code>, since Spring Boot can deduce it for most databases from the url.
> ```
> # H2
> spring.datasource.url=jdbc:h2:file:C:/temp/test
> spring.datasource.username=sa
> spring.datasource.password=
> spring.datasource.driverClassName=org.h2.Driver
> spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
>  
> # MySQL
> #spring.datasource.url=jdbc:mysql://localhost:3306/test
> #spring.datasource.username=dbuser
> #spring.datasource.password=dbpass
> #spring.datasource.driver-class-name=com.mysql.jdbc.Driver
> spring.jpa.database-platform=org.hibernate.dialect.MySQL5InnoDBDialect
>  
> # Oracle
> #spring.datasource.url=jdbc:oracle:thin:@localhost:1521:orcl
> #spring.datasource.username=dbuser
> #spring.datasource.password=dbpass
> #spring.datasource.driver-class-name=oracle.jdbc.OracleDriver
> #spring.jpa.database-platform=org.hibernate.dialect.Oracle10gDialect
>  
> # SQL Server
> #spring.datasource.url=jdbc:sqlserver://localhost;databaseName=springbootdb
> #spring.datasource.username=dbuser
> #spring.datasource.password=dbpass
> #spring.datasource.driverClassName=com.microsoft.sqlserver.jdbc.SQLServerDriver
> #spring.jpa.hibernate.dialect=org.hibernate.dialect.SQLServer2012Dialect
> ```

> [!expand-ui]- DataSource Bean
> The recommended way to create a <code><font style="color: rgb(122,134,154);">DataSource</font></code> bean is using <code><font style="color: rgb(122,134,154);">DataSourceBuilder</font></code> class within a class annotated with the <code><font style="color: rgb(128,128,0);">@Configuration</font></code> annotation. The <code><font style="color: rgb(122,134,154);">DataSource</font></code> uses the underlying [[Java - Connection Pooling Frameworks|connection pool]] as well.
> ```
> @Configuration
> public class DataSourceConfig {
>       
>     @Bean
>     public DataSource getDataSource() {
>         DataSourceBuilder dataSourceBuilder = DataSourceBuilder.create();
>         dataSourceBuilder.driverClassName("org.h2.Driver");
>         dataSourceBuilder.url("jdbc:h2:file:C:/temp/test");
>         dataSourceBuilder.username("");
>         dataSourceBuilder.password("");
>         return dataSourceBuilder.build();
>     }
> }
> ```

> [!expand-ui]- JNDI DataSource
> If we deploy your Spring Boot application to an Application Server, we might want to configure and manage the <code><font style="color: rgb(128,128,0);">DataSource</font></code> by using the Application Server’s built-in features and access it by using JNDI.
>
> We can do this using the <code><font style="color: rgb(128,128,0);">spring.datasource.jndi-name</font></code> property. e.g.
> ```
> # JBoss defined datasource using JNDI
> spring.datasource.jndi-name = java:jboss/datasources/testDB
> ```
