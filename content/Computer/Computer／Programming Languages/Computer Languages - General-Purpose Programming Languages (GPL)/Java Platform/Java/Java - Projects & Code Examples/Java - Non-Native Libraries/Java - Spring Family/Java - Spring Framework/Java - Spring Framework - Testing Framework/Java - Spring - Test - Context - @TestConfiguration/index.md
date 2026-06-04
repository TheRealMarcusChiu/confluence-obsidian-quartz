---
title: "Java - Spring - Test - Context - @TestConfiguration"
created: 2021-01-15T16:43:20.211-06:00
modified: 2021-05-29T11:17:25.396-05:00
parent: "[[Java - Spring Framework - Testing Framework]]"
children: []
---
- code: [https://github.com/SpringBootMarcusChiu/test-framework-example-boot-2.2.11/tree/master/src/test/java/com/marcuschiu/testframeworkexampleboot221/spring/testconfiguration](https://github.com/SpringBootMarcusChiu/test-framework-example-boot-2.2.11/tree/master/src/test/java/com/marcuschiu/testframeworkexampleboot221/spring/testconfiguration)

# 1 - <code>@TestConfiguration</code> Overview

<code><font style="color: rgb(128,128,0);">@TestConfiguration</font></code> is specialized form of <code><font style="color: rgb(128,128,0);">@Configuration</font></code> that can be used to define additional beans or customizations for a test.

In spring boot, any beans configured in a top-level class annotated with <code><font style="color: rgb(128,128,0);">@TestConfiguration</font></code> will not be picked up via component scanning. We must explicitly register the <code><font style="color: rgb(128,128,0);">@TestConfiguration</font></code> class with the class that contains the test cases.
# 2 - Methods to Include a <code>@TestConfiguration</code> Class

There are two ways to include this additional test configuration for tests:

> [!expand-ui]- @Import Annotation
> It indicates one or more configuration classes to import into application context or spring test context.
>
> <code><font style="color: rgb(128,128,0);">@Bean</font></code> definitions declared in imported <code><font style="color: rgb(128,128,0);">@TestConfiguration</font></code> classes should be accessed by using <code><font style="color: rgb(128,128,0);">@Autowired</font></code> injection. Either the bean itself can be autowired, or the configuration class instance declaring the bean can be autowired.
>
> It should be declared at the class level or as a meta-annotation.
> > If XML or other non-configuration bean definition resources need to be imported, use the <code>[@ImportResource](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/context/annotation/ImportResource.html)</code> annotation instead.
> ```
> @TestConfiguration
> public class MyTestConfiguration {
>
>     @Bean
>     public DataSource createDataSource() {
>         // datasource creation
>     }
> }
> ```
> ```
> @Import(MyTestConfiguration.class)
> public class SpringBootDemoApplicationTests {
>
>     @Autowired
>     DataSource datasource;
>  
>     //tests
> }
> ```

> [!expand-ui]- Nested Static Class
> We can define the test configurations in nested classes inside the test class. The nested class can be annotated with <code><font style="color: rgb(128,128,0);">@Configuration</font></code> or <code><font style="color: rgb(128,128,0);">@TestConfiguration</font></code> annotations.
>
> If the class annotated with <code><font style="color: rgb(128,128,0);">@TestConfiguration</font></code> or <code><font style="color: rgb(128,128,0);">@Configuration</font></code> is a static nested class within the test class, it would be registered automatically.
> - In case of nested <code><font style="color: rgb(128,128,0);">@Configuration</font></code> class, the given configuration would be used “instead of” the application’s primary configuration.
> - A nested <code><font style="color: rgb(128,128,0);">@TestConfiguration</font></code> class is used “in addition to” the application’s primary configuration
>
> ```
> @SpringBootTest
> public class SpringBootDemoApplicationTests {
>  
>     @Autowired
>     DataSource datasource;
>  
>     //tests
>  
>     @TestConfiguration
>     static class MyTestConfiguration {
>
>         @Bean
>         DataSource createDataSource() {
>             // datasource creation
>         }
>     }
> }
> ```
# 3 - <code>@Configutation</code> vs <code>@TestConfiguration</code>

in nested classes:
- <code><font style="color: rgb(128,128,0);">@Configutation</font></code> excludes the primary configuration
- <code><font style="color: rgb(128,128,0);">@TestConfiguration</font></code> is used to create additional test configuration in addition to primary configuration
