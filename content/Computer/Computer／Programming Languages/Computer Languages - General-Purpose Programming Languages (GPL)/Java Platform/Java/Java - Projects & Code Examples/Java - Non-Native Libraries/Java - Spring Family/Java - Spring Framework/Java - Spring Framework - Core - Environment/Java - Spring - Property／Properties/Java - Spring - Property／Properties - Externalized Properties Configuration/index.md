---
title: "Java - Spring - Property／Properties - Externalized Properties Configuration"
created: 2020-12-06T13:17:56.801-06:00
modified: 2021-09-24T01:00:12.444-05:00
parent: "[[Java - Spring - Property／Properties]]"
children: []
---
# Resources
- [https://docs.spring.io/spring-boot/docs/1.5.22.RELEASE/reference/html/boot-features-external-config.html](https://docs.spring.io/spring-boot/docs/1.5.22.RELEASE/reference/html/boot-features-external-config.html)
- [https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-external-config](https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-external-config)

# Externalized Configuration

Spring Boot lets you externalize your configuration so that you can work with the same application code in different environments. You can use a variety of external configuration sources, include Java properties files, YAML files, environment variables, and command-line arguments.

Property values can be injected directly into your beans by using the <code><font style="color: rgb(128,128,0);">@Value</font></code> annotation accessed through Spring’s <code><font style="color: rgb(122,134,154);">Environment</font></code> abstraction, or be [bound to structured objects](https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.external-config.typesafe-configuration-properties) through <code><font style="color: rgb(128,128,0);">@ConfigurationProperties</font></code>.

Spring Boot uses a very particular <code><font style="color: rgb(122,134,154);">PropertySource</font></code> order that is designed to allow sensible overriding of values. Properties are considered in the following order (<strong>with values from lower items overriding earlier ones</strong>):
1. Default properties (specified by setting <code><font style="color: rgb(122,134,154);">SpringApplication.setDefaultProperties</font></code>).
2. [<code>@PropertySource</code>](https://docs.spring.io/spring-framework/docs/5.3.10/javadoc-api/org/springframework/context/annotation/PropertySource.html) annotations on your <code><font style="color: rgb(128,128,0);">@Configuration</font></code> classes. Please note that such property sources are not added to the <code><font style="color: rgb(122,134,154);">Environment</font></code> until the application context is being refreshed. This is too late to configure certain properties such as <code><font style="color: rgb(122,134,154);">logging.\*</font></code> and <code><font style="color: rgb(122,134,154);">spring.main.\*</font></code> which are read before refresh begins.
3. Config data (such as <code><font style="color: rgb(122,134,154);">application.properties</font></code> files)
4. A <code><font style="color: rgb(122,134,154);">RandomValuePropertySource</font></code> that has properties only in <code><font style="color: rgb(122,134,154);">random.\*</font></code>.
5. OS environment variables.
6. Java System properties (<code><font style="color: rgb(122,134,154);">System.getProperties()</font></code>).
7. JNDI attributes from <code><font style="color: rgb(122,134,154);">java:comp/env</font></code>.
8. <code><font style="color: rgb(122,134,154);">ServletContext</font></code> init parameters.
9. <code><font style="color: rgb(122,134,154);">ServletConfig</font></code> init parameters.
10. Properties from <code><font style="color: rgb(122,134,154);">SPRING\_APPLICATION\_JSON</font></code> (inline JSON embedded in an environment variable or system property).
11. Command-line arguments.
12. <code>properties</code> attribute on your tests. Available on [<code>@SpringBootTest</code>](https://docs.spring.io/spring-boot/docs/2.5.5/api/org/springframework/boot/test/context/SpringBootTest.html) and the [test annotations for testing a particular slice of your application](https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.testing.spring-boot-applications.autoconfigured-tests).
13. [<code>@TestPropertySource</code>](https://docs.spring.io/spring-framework/docs/5.3.10/javadoc-api/org/springframework/test/context/TestPropertySource.html) annotations on your tests.
14. [Devtools global settings properties](https://docs.spring.io/spring-boot/docs/current/reference/html/using.html#using.devtools.globalsettings) in the <code><font style="color: rgb(122,134,154);">\$HOME/.config/spring-boot</font></code> directory when devtools is active.

Config data files are considered in the following order:
1. [Application properties](https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.external-config.files) packaged inside your jar (<code><font style="color: rgb(122,134,154);">application.properties</font></code> and YAML variants).
2. [Profile-specific application properties](https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.external-config.files.profile-specific) packaged inside your jar (<code><font style="color: rgb(122,134,154);">application-{profile}.properties</font></code> and YAML variants).
3. [Application properties](https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.external-config.files) outside of your packaged jar (<code><font style="color: rgb(122,134,154);">application.properties</font></code> and YAML variants).
4. [Profile-specific application properties](https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.external-config.files.profile-specific) outside of your packaged jar (<code><font style="color: rgb(122,134,154);">application-{profile}.properties</font></code> and YAML variants).

> [!info]
> It is recommended to stick with one format for your entire application. If you have configuration files with both <code><font style="color: rgb(122,134,154);">.properties</font></code> and <code><font style="color: rgb(122,134,154);">.yml</font></code> format in the same location, <code><font style="color: rgb(122,134,154);">.properties</font></code> takes precedence.

To provide a concrete example, suppose you develop a <code><font style="color: rgb(128,128,0);">@Component</font></code> that uses a <code>name</code> property, as shown in the following example:
```
@Component
public class MyBean {

    @Value("${name}")
    private String name;

    // ...
}
```

On your application classpath (for example, inside your jar) you can have an <code><font style="color: rgb(122,134,154);">application.properties</font></code> file that provides a sensible default property value for <code>name</code>. When running in a new environment, an <code>application.properties</code> file can be provided outside of your jar that overrides the <code>name</code>. For one-off testing, you can launch with a specific command line switch (for example, <code><font style="color: rgb(122,134,154);">java -jar app.jar --name="Spring"</font></code>).
> [!info]
> The <code><font style="color: rgb(122,134,154);">env</font></code> and <code><font style="color: rgb(122,134,154);">configprops</font></code> endpoints can be useful in determining why a property has a particular value. You can use these two endpoints to diagnose unexpected property values. See the "[Production ready features](https://docs.spring.io/spring-boot/docs/current/reference/html/actuator.html#actuator.endpoints)" section for details.
