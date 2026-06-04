---
title: "Java - How Does (Spring vs Spring Boot) Bootstrap a Web Application？"
created: 2021-01-01T11:41:17.580-06:00
modified: 2021-07-04T19:54:28.561-05:00
parent: "[[Java - Spring - ApplicationContext - WebApplicationContext]]"
children: []
---
# How Does Spring Bootstrap?

Spring supports the following bootstrapping methods:
- the legacy XML <code><font style="color: rgb(128,128,128);">web.xml</font></code> method
- the new Annotation [[Java - Servlet API／Specification (2.5 - 3.0 - 3.1 - 4.0 - 5.0)|Servlet 3+]] method (allows both XML or pure Java)

###### Spring <code><font style="color: rgb(128,128,128);">web.xml</font></code> Bootstrap Steps:
1. [[Java - Servlet API／Specification - Servlet Containers - Application Servers|Servlet Container]] (the server) reads <code><font style="color: rgb(128,128,128);">web.xml</font></code>
2. The <code><font style="color: rgb(128,128,128);">DispatcherServlet</font></code> defined in the <code><font style="color: rgb(128,128,128);">web.xml</font></code> is instantiated by the container
3. <code><font style="color: rgb(128,128,128);">DispatcherServlet</font></code> creates <font style="color: rgb(128,128,128);"><code>WebApplicationContext</code> </font>by reading <code><font style="color: rgb(128,128,128);">WEB-INF/{servletName}-servlet.xml</font></code>
4. Finally, the <code><font style="color: rgb(128,128,128);">DispatcherServlet</font></code> registers the beans defined in the application context

###### Spring [[Java - Servlet API／Specification (2.5 - 3.0 - 3.1 - 4.0 - 5.0)|Servlet 3+]] Bootstrap Steps
1. The container searches for classes implementing <code><font style="color: rgb(128,128,128);">ServletContainerInitializer</font></code> and executes
2. The <code><font style="color: rgb(128,128,128);">SpringServletContainerInitializer</font></code> finds all classes implementing <code><font style="color: rgb(128,128,128);">WebApplicationInitializer</font></code>
3. The <code><font style="color: rgb(128,128,128);">WebApplicationInitializer </font></code>creates the context with XML or <code><font style="color: rgb(128,128,0);">@Configuration</font></code> classes
4. The <code><font style="color: rgb(128,128,128);">WebApplicationInitializer </font></code>creates the <code><font style="color: rgb(128,128,128);">DispatcherServlet </font></code>with the previously created context

# How Does Spring Boot Bootstrap?

The entry point of a Spring Boot application is the class which is annotated with <code><font style="color: rgb(128,128,0);">@SpringBootApplication</font></code>
###### Spring Boot Deploying to Embedded Servlet-Container (Default)

By default, Spring Boot uses an embedded [[Java - Servlet API／Specification - Servlet Containers - Application Servers|servlet-container]] to run the application. In this case, Spring Boot uses the <code><font style="color: rgb(128,128,128);">public static void main</font></code> entry-point to launch an embedded servlet-container.
```
@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
```

Also, it takes care of the binding of the <code><font style="color: rgb(128,128,128);">Servlet</font></code><em>, </em><code>[[Java - Servlet Filters|Filter]]</code><em>,</em> and <code>[[Java - Spring - ApplicationContext - ServletContextInitializer|ServletContextInitializer]]</code> beans from the application context to the embedded servlet container.

Another feature of Spring Boot is that it automatically scans all the classes in the same package or sub packages of the Main-class for components.
###### Spring Boot Deploying to External Servlet-Container

Spring Boot provides the option of deploying it as a [[Java - Spring Boot - SpringBoot JAR to WAR & Deploying on Tomcat|web archive (WAR)]] in an external servlet-container as well. In this case, we have to extend the <code><font style="color: rgb(128,128,128);">SpringBootServletInitializer</font></code>:
```
@SpringBootApplication
public class Application extends SpringBootServletInitializer {
    // ...
}
```

Here the external servlet-container looks for the Main-class defined in the <code><font style="color: rgb(128,128,128);">META-INF</font></code> file of the web archive and the <code><font style="color: rgb(128,128,128);">SpringBootServletInitializer</font></code> will take care of binding the <code><font style="color: rgb(128,128,128);">Servlet</font></code><em>, </em><code>[[Java - Servlet Filters|Filter]]</code><em>,</em> and <code>[[Java - Spring - ApplicationContext - ServletContextInitializer|ServletContextInitializer]]</code> from the application context to the external servlet container
