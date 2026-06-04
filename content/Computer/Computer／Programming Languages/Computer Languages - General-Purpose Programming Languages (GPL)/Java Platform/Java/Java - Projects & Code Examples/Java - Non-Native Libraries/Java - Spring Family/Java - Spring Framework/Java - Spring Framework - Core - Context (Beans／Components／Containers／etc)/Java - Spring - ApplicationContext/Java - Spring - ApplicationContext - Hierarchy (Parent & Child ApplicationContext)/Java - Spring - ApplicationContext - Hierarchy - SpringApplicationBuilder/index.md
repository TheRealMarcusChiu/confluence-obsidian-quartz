---
title: "Java - Spring - ApplicationContext - Hierarchy - SpringApplicationBuilder"
created: 2021-07-04T22:40:07.326-05:00
modified: 2021-07-04T22:40:34.620-05:00
parent: "[[Java - Spring - ApplicationContext - Hierarchy (Parent & Child ApplicationContext)]]"
children: []
---
- based on: [https://www.baeldung.com/spring-boot-context-hierarchy](https://www.baeldung.com/spring-boot-context-hierarchy)
- code:
	- non spring-boot: [https://github.com/SpringBootMarcusChiu/application-context-hierarcy](https://github.com/SpringBootMarcusChiu/application-context-hierarcy)
	- spring-boot: [https://github.com/SpringBootMarcusChiu/application-context-hierarchy-two](https://github.com/SpringBootMarcusChiu/application-context-hierarchy-two)

A context hierarchy allows multiple child contexts to share beans which reside in the parent context. Each child context can override configuration inherited from the parent context
## <strong>Using <em>SpringApplicationBuilder</em> API</strong>

The <code><font style="color: rgb(51,102,255);">SpringApplicationBuilder</font></code> class provides methods to create a parent-child relationship between contexts using:
- <code><font style="color: rgb(51,102,255);">parent()</font></code>
- <code><font style="color: rgb(51,102,255);">child()</font></code>
- <code><font style="color: rgb(51,102,255);">sibling()</font></code>

<strong>We'll set up a non-web parent application context with 2 child web application contexts</strong>

We'll start two instances of embedded Tomcat each with its own web application context and both running in a single JVM
```
public class Application {
  public static void main(String[] args) {
    ConfigurableApplicationContext appContext = new SpringApplicationBuilder()
      .parent(ParentConfig.class).web(WebApplicationType.NONE)   // returns the Parent AnnotationConfigApplicationContext
      .child(Ctx1Config.class).web(WebApplicationType.SERVLET)   // returns the Child1 AnnotationConfigServletWebServerApplicationContext
      .sibling(Ctx2Config.class).web(WebApplicationType.SERVLET) // returns the Child2 AnnotationConfigServletWebServerApplicationContext
      .run(args);
    // at this point `appContext` is the Child2 ApplicationContext
  }
}
```

package and code files layout

![[Java - Spring - ApplicationContext - Hierarchy - SpringApplicationBuilder/file-hiearchy.png|374x250]]
###### \*Config Files
> [!tabs]
>
> === Parent
>
> parent context scans <code><font style="color: rgb(128,128,128);">com.marcuschiu.example.applicationcontexthierarchy.</font><font style="color: rgb(255,0,0);">parent</font></code>
> - finds <code><font style="color: rgb(128,128,0);">@Service</font></code><code><font style="color: rgb(51,102,255);">IHomeService</font></code> thus a <code><font style="color: rgb(51,102,255);">IHomeService</font></code> component/bean is created
> - thus, any <code><font style="color: rgb(128,128,0);">@Autowired</font></code> <code><font style="color: rgb(51,102,255);">IHomeService</font></code> within this package would pickup <code><font style="color: rgb(255,0,0);">parent</font></code> context's <code><font style="color: rgb(51,102,255);">IHomeService</font></code> bean
>
> ```
> @Configuration
> @ComponentScan("com.marcuschiu.example.applicationcontexthierarchy.parent")
> public class ParentConfig {}
> ```
>
> === Child 1
>
> ctx1 context scans <code><font style="color: rgb(51,102,255);"><font style="color: rgb(128,128,128);">com.marcuschiu.example.applicationcontexthierarchy.</font><font style="color: rgb(255,0,0);">ctx1</font></font></code>
> - finds <code><font style="color: rgb(128,128,0);">@Bean</font></code> <code><font style="color: rgb(51,102,255);">IHomeService</font></code> thus a <code><font style="color: rgb(51,102,255);">IHomeService</font></code> component/bean is created
> - thus, any <code><font style="color: rgb(128,128,0);">@Autowired</font></code> <code><font style="color: rgb(51,102,255);">IHomeService</font></code> within this package would pickup <code><font style="color: rgb(255,0,0);">ctx1</font></code> context's <code><font style="color: rgb(51,102,255);">IHomeService</font></code> bean
>
> ```
> @Configuration
> @ComponentScan("com.marcuschiu.example.applicationcontexthierarchy.ctx1")
> @PropertySource("classpath:ctx1.properties")
> @EnableAutoConfiguration
> public class Ctx1Config {
>     /**
>      * BEAN DEFINITION IS NEEDED EVEN THOUGH @ComponentScan will pick up Ctx1HomeService
>      * when @Autowired IHomeService is used in for example Ctx1Controller, this
>      * cause error:
>      * - An exception occured while executing the Java class. Error creating bean
>      *   with name 'ctx1Controller': Unsatisfied dependency expressed through field
>      *   'homeService'; nested exception is org.springframework.beans.factory.
>      *   NoUniqueBeanDefinitionException: No qualifying bean of type 'com.marcuschiu.
>      *   example.applicationcontexthierarchy.parent.IHomeService' available: expected
>      * single matching bean but found 2: ctx1HomeService,parentHomeService
>      * Thus, bean definition below removes this duplication bean error
>      * @return
>      */
>     @Bean
>     public IHomeService homeService() {
>         return new Ctx1HomeService();
>     }
> }
> ```
>
> === Child 2
>
> ctx2 context scans <code><font style="color: rgb(128,128,128);">com.marcuschiu.example.applicationcontexthierarchy.</font><font style="color: rgb(255,0,0);">ctx2</font></code>
> - does <font style="color: rgb(255,0,0);">NOT</font> create a <code><font style="color: rgb(51,102,255);">IHomeService</font></code> Bean
> - thus, any <code><font style="color: rgb(128,128,0);">@Autowired</font></code> <code><font style="color: rgb(51,102,255);">IHomeService</font></code> within this package would pickup <code><font style="color: rgb(255,0,0);">parent</font></code> context's <code><font style="color: rgb(51,102,255);">IHomeService</font></code> bean
>
> ```
> @Configuration
> @ComponentScan("com.marcuschiu.example.applicationcontexthierarchy.ctx2")
> @PropertySource("classpath:ctx2.properties")
> @EnableAutoConfiguration
> public class Ctx2Config {
> }
> ```
