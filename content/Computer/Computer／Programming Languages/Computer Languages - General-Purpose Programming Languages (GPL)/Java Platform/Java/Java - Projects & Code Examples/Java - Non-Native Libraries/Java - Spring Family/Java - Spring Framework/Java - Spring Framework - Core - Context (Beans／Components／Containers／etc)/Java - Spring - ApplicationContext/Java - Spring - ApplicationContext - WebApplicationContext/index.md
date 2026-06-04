---
title: "Java - Spring - ApplicationContext - WebApplicationContext"
created: 2020-10-20T16:47:09.342-05:00
modified: 2021-07-04T19:56:52.824-05:00
parent: "[[Java - Spring - ApplicationContext]]"
children:
  - "[[Java - How Does (Spring vs Spring Boot) Bootstrap a Web Application？]]"
  - "[[Java - Spring - ApplicationContext vs WebApplicationContext]]"
---
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# 1 - The Root WebApplicationContext

The root context in a web application is always an instance of <code><font style="color: rgb(128,128,128);">WebApplicationContext</font></code>. That's an interface extending <code><font style="color: rgb(128,128,128);">ApplicationContext</font></code> with a contract for accessing the <code><font style="color: rgb(128,128,128);">ServletContext</font></code>

this root web application context is managed by a listener of class <code><font style="color: rgb(128,128,128);">org.springframework.web.context.ContextLoaderListener</font></code>, which is part of the spring-web module.

> [!expand-ui]- Using web.xml and an XML ApplicationContext
> When using <code><font style="color: rgb(128,128,128);">web.xml</font></code>, we configure the listener as usual:
> ```
> <listener>
>     <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
> </listener>
> ```
>
> By default, the listener will load an XML <code><font style="color: rgb(128,128,128);">ApplicationContext</font></code> from <code><font style="color: rgb(128,128,128);">/WEB-INF/applicationContext.xml</font></code>
>
> We can specify an alternate location of the XML context configuration with the <code><font style="color: rgb(128,128,128);">contextConfigLocation</font></code> parameter:
> ```
> <context-param>
>     <param-name>contextConfigLocation</param-name>
>     <param-value>/WEB-INF/rootApplicationContext.xml</param-value>
> </context-param>
> ```
>
> Or more than one location, separated by commas:
> ```
> <context-param>
>     <param-name>contextConfigLocation</param-name>
>     <param-value>/WEB-INF/context1.xml, /WEB-INF/context2.xml</param-value>
> </context-param>
> ```
>
> We can even use patterns:
> ```
> <context-param>
>     <param-name>contextConfigLocation</param-name>
>     <param-value>/WEB-INF/context1.xml, /WEB-INF/context2.xml</param-value>
> </context-param>
> ```
>
> In any case, only one context is defined, by combining all the bean definitions loaded from the specified locations

> [!expand-ui]- Using web.xml and a Java ApplicationContext
> We can also specify other types of contexts besides the default XML-based one. Let's see, for example, how to use Java annotations configuration instead.
>
> We use the <code><font style="color: rgb(128,128,128);">contextClass </font></code>parameter to tell the listener which type of context to instantiate
> ```
> <context-param>
>     <param-name>contextClass</param-name>
>     <param-value>org.springframework.web.context.support.AnnotationConfigWebApplicationContext</param-value>
> </context-param>
> ```
>
> Every type of context may have a default configuration location. In our case, the <code><font style="color: rgb(128,128,128);">AnnotationConfigWebApplicationContext</font></code> does not have one, so we have to provide it.
>
> We can thus list one or more classes annotated with [[Java - Spring - @Configuration|@Configuration]]:
> ```
> <context-param>
>     <param-name>contextConfigLocation</param-name>
>     <param-value>
>         com.marcuschiu.contexts.config.RootApplicationConfig,
>         com.marcuschiu.contexts.config.NormalWebAppConfig
>     </param-value>
> </context-param>
> ```
>
> Or we can tell the context to scan one or more packages:
> ```
> <context-param>
>     <param-name>contextConfigLocation</param-name>
>     <param-value>com.baeldung.bean.config</param-value>
> </context-param>
> ```
>
> And, of course, we can mix and match the two options.
# 2 - Programmatic Configuration With Servlet 3.x

[[Java - Servlet API／Specification (2.5 - 3.0 - 3.1 - 4.0 - 5.0)|Version 3 of the Servlet API]] has made configuration through the <code><font style="color: rgb(128,128,128);">web.xml</font></code> file completely optional. Libraries can provide their web fragments, which are pieces of XML configuration that can register listeners, filters, servlets and so on.

Also, users have access to an API that allows defining programmatically every element of a servlet-based application.

The <em>spring-web</em> module makes use of these features and offers its API to register components of the application when it starts.

Spring scans the application's classpath for instances of the <code><font style="color: rgb(128,128,128);">org.springframework.web.WebApplicationInitializer</font></code> class. This is an interface with a single method, <code><font style="color: rgb(128,128,128);">void onStartup(ServletContext servletContext) throws ServletException</font></code>, that's invoked upon application startup.

Let's now look at how we can use this facility to create the same types of root web application contexts that we've seen earlier.

> [!expand-ui]- Using Servlet 3.x and an XML ApplicationContext
> We'll implement the aforementioned <code><font style="color: rgb(128,128,128);">onStartup</font></code> method:
> ```
> public class ApplicationInitializer implements WebApplicationInitializer {
>     
>     @Override
>     public void onStartup(ServletContext servletContext) throws ServletException {
>         XmlWebApplicationContext rootContext = new XmlWebApplicationContext();
> 		rootContext.setConfigLocations("/WEB-INF/rootApplicationContext.xml");
> 		servletContext.addListener(new ContextLoaderListener(rootContext));
>     }
> }
> ```
>
> We first create a root context. Since we want to use XML, it has to be an XML-based application context, and since we're in a web environment, it has to <code><font style="color: rgb(128,128,128);">implements WebApplicationContext</font></code> as well.
> 1. The first line, thus, is the explicit version of the <code><font style="color: rgb(128,128,128);">contextClass</font></code> parameter that we've encountered earlier, with which we decide which specific context implementation to use
> 2. Then, in the second line, we tell the context where to load its bean definitions from. Again, <code><font style="color: rgb(128,128,128);">setConfigLocations</font></code> is the programmatic analogous of the <code><font style="color: rgb(128,128,128);">contextConfigLocation</font></code>parameter in <code><font style="color: rgb(128,128,128);">web.xml</font></code>
> 3. Finally, we create a <code><font style="color: rgb(128,128,128);">ContextLoaderListener</font></code>with the root context and register it with the servlet container. As we can see, <code><font style="color: rgb(128,128,128);">ContextLoaderListener</font></code> has an appropriate constructor that takes a <code><font style="color: rgb(128,128,128);">WebApplicationContext </font></code>and makes it available to the application

> [!expand-ui]- Using Servlet 3.x and a Java Application Context
> If we want to use an annotation-based context, we could change the code snippet in the previous section to make it instantiate an <code><font style="color: rgb(128,128,128);">AnnotationConfigWebApplicationContext</font></code> instead.
>
> However, let's see a more specialized approach to obtain the same result.
>
> The <code><font style="color: rgb(128,128,128);">WebApplicationInitializer </font></code>class that we've seen earlier is a general-purpose interface. It turns out that Spring provides a few more specific implementations, including an abstract class called <code><font style="color: rgb(128,128,128);">AbstractContextLoaderInitializer</font></code>.
>
> Its job, as the name implies, is to create a <code><font style="color: rgb(128,128,128);">ContextLoaderListener</font></code> and register it with the servlet container.
>
> We only have to tell it how to build the root context:
> ```
> public class AnnotationsBasedApplicationInitializer extends AbstractContextLoaderInitializer {
>  
>     @Override
>     protected WebApplicationContext createRootApplicationContext() {
>         AnnotationConfigWebApplicationContext rootContext = new AnnotationConfigWebApplicationContext();
>         rootContext.register(RootApplicationConfig.class);
>         return rootContext;
>     }
> }
> ```
>
> Here we can see that we no longer need to register the <code><font style="color: rgb(128,128,128);">ContextLoaderListener</font></code>, which saves us from a little bit of boilerplate code.
>
> Note also the use of the <em>register </em>method that is specific to <font style="color: rgb(128,128,128);"><code>AnnotationConfigWebApplicationContext</code> </font>instead of the more generic <code><font style="color: rgb(128,128,128);">setConfigLocations</font></code>: by invoking it, we can register individual <code><font style="color: rgb(128,128,0);">@Configuration</font></code> annotated classes with the context, thus avoiding package scanning
# 3 - DispatcherServlet (Child WebApplicationContext)

Let's now focus on another type of <code><font style="color: rgb(128,128,128);">ApplicationContext</font></code>. This time, we'll be referring to a feature which is specific to Spring MVC, rather than part of Spring's generic web application support.

Spring MVC applications have at least one <code><font style="color: rgb(128,128,128);">DispatcherServlet</font></code> configured (but possibly more than one)
- Each <code><font style="color: rgb(128,128,128);">DispatcherServlet</font></code> has its own <code><font style="color: rgb(128,128,128);">WebApplicationContext</font></code>, which inherits all the beans already defined in the root <code><font style="color: rgb(128,128,128);">WebApplicationContext</font></code>
- Each <code><font style="color: rgb(128,128,128);">DispatcherServlet</font></code> that receives incoming client-requests, dispatches them to the appropriate controller method, and returns the response

> [!expand-ui]- Using web.xml and an XML Application Context
> <code><font style="color: rgb(128,128,128);">DispatcherServlet</font></code> is typically declared in <code><font style="color: rgb(128,128,128);">web.xml</font></code> with a name and a mapping
> ```
> <servlet>
>     <servlet-name>normal-webapp</servlet-name>
>     <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
>     <load-on-startup>1</load-on-startup>
> </servlet>
> <servlet-mapping>
>     <servlet-name>normal-webapp</servlet-name>
>     <url-pattern>/api/*</url-pattern>
> </servlet-mapping>
> ```
>
> If not otherwise specified, the name of the servlet is used to determine the XML file to load. In our example, we'll use the file <code><font style="color: rgb(128,128,128);">WEB-INF/normal-webapp-servlet.xml</font></code>.
>
> We can also specify one or more paths to XML files, in a similar fashion to <code><font style="color: rgb(128,128,128);">ContextLoaderListener</font></code>:
> ```
> <servlet>
>     <servlet-name>normal-webapp</servlet-name>
>     <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
>     <load-on-startup>1</load-on-startup>
>     <init-param>
>         <param-name>contextConfigLocation</param-name>
>         <param-value>/WEB-INF/normal/*.xml</param-value>
>     </init-param>
> </servlet>
> ```

> [!expand-ui]- Using web.xml and a Java Application Context
> When we want to use a different type of context we proceed like with <code><font style="color: rgb(128,128,128);">ContextLoaderListener</font></code>, again. That is, we specify a <code><font style="color: rgb(128,128,128);">contextClass</font></code> parameter along with a suitable <code><font style="color: rgb(128,128,128);">contextConfigLocation</font></code>:
> ```
> <servlet>
>     <servlet-name>normal-webapp-annotations</servlet-name>
>     <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
>     <init-param>
>         <param-name>contextClass</param-name>
>         <param-value>org.springframework.web.context.support.AnnotationConfigWebApplicationContext</param-value>
>     </init-param>
>     <init-param>
>         <param-name>contextConfigLocation</param-name>
>         <param-value>com.marcuschiu.contexts.config.NormalWebAppConfig</param-value>
>     </init-param>
>     <load-on-startup>1</load-on-startup>
> </servlet>
> ```

> [!expand-ui]- Using Servlet 3.x and an XML Application Context
> Again, we'll look at two different methods for programmatically declaring a <code><font style="color: rgb(128,128,128);">DispatcherServlet</font></code>, and we'll apply one to an XML context and the other to a Java context.
>
> So, let's start with a generic <code><font style="color: rgb(128,128,128);">WebApplicationInitializer</font></code> and an XML application context.
>
> As we've seen previously, we have to implement the <code><font style="color: rgb(128,128,128);">onStartup</font></code> method. However, this time we'll create and register a dispatcher servlet, too:
> ```
> public class ApplicationInitializer implements WebApplicationInitializer {
>     
>     @Override
>     public void onStartup(ServletContext servletContext) throws ServletException {
> 		XmlWebApplicationContext rootWebAppContext = new XmlWebApplicationContext();
> 		rootWebAppContext.setConfigLocation("/WEB-INF/root-app-context.xml");
>
> 		DispatcherServlet dispatcherServlet1 = new DispatcherServlet(rootWebAppContext);
> 		ServletRegistration.Dynamic dynamic1 = servletContext.addServlet("servlet-1", dispatcherServlet1);
> 		dynamic1.setLoadOnStartup(1);
> 		dynamic1.addMapping("/api/*");
>
>     }
> }
> ```
>
> We can easily draw a parallel between the above code and the equivalent <code><font style="color: rgb(128,128,128);">web.xml</font></code> configuration elements.

> [!expand-ui]- Using Servlet 3.x and a Java Application Context
> This time, we'll configure an annotations-based context using the <code><font style="color: rgb(128,128,128);">AbstractDispatcherServletInitializer</font></code> (which is a specialized implementation of <code><font style="color: rgb(128,128,128);">WebApplicationInitializer</font></code>)
>
> That's an abstract class that, besides creating a root web application context as previously seen, allows us to register one dispatcher servlet with minimum boilerplate:
> ```
> public class MyApplicationInitializer extends AbstractDispatcherServletInitializer {
> 	@Override
> 	protected WebApplicationContext createServletApplicationContext() {
>     	AnnotationConfigWebApplicationContext webAppContext = new AnnotationConfigWebApplicationContext();
>     	webAppContext.register(MyWebAppConfig.class);
>     	return webAppContext;
> 	}
>  
> 	@Override
> 	protected String[] getServletMappings() {
> 	    return new String[] { "/api/*" };
> 	}
> }
> ```
>
> Here we can see a method for creating the context associated with the servlet, exactly like we've seen before for the root context. Also, we have a method to specify the servlet's mappings, as in <code><font style="color: rgb(128,128,128);">web.xml</font></code>.
# 4 - Parent and Child Contexts

So far, we've seen two major types of contexts:
- the root web application context
- the dispatcher servlet contexts

Then, we might have a question: are those contexts related? It turns out that yes, they are. In fact, the root context is the parent of every dispatcher servlet context. Thus, beans defined in the root web application context are visible to each dispatcher servlet context, but not vice versa.

So, typically, the root context is used to define service beans, while the dispatcher context contains those beans that are specifically related to MVC.

Note that we've also seen ways to create the dispatcher servlet context programmatically. If we manually set its parent, then Spring does not override our decision, and this section no longer applies.

In simpler MVC applications, it's sufficient to have a single context associated to the only one dispatcher servlet. There's no need for overly complex solutions!

Still, the parent-child relationship becomes useful when we have multiple dispatcher servlets configured. But when should we bother to have more than one?

In general, we declare multiple dispatcher servlets when we need multiple sets of MVC configuration. For example, we may have a REST API alongside a traditional MVC application or an unsecured and a secure section of a website:

![[Java - Spring - ApplicationContext - WebApplicationContext/parent-child-root-dispatcher-contexts.png|301]]

Note: when we extend <code><font style="color: rgb(128,128,128);">AbstractDispatcherServletInitializer </font></code>(see section 3.4), we register both a root web application context and a single dispatcher servlet.

So, if we want more than one servlet, we need multiple <code><font style="color: rgb(128,128,128);">AbstractDispatcherServletInitializer </font></code>implementations. However, we can only define one root context, or the application won't start.

Fortunately, the <code><font style="color: rgb(128,128,128);">createRootApplicationContext</font></code> method can return <code><font style="color: rgb(128,128,128);">null</font></code>. Thus, we can have one <code><font style="color: rgb(128,128,128);">AbstractContextLoaderInitializer </font></code>and many <code><font style="color: rgb(128,128,128);">AbstractDispatcherServletInitializer </font></code>implementations that don't create a root context. In such a scenario, it is advisable to order the initializers with <code><font style="color: rgb(128,128,0);">@Order</font></code> explicitly.

Also, note that <code><font style="color: rgb(128,128,128);">AbstractDispatcherServletInitializer</font></code> registers the servlet under a given name (<em>dispatcher</em>) and, of course, we cannot have multiple servlets with the same name. So, we need to override <code><font style="color: rgb(128,128,128);">getServletName</font></code>:
```
@Override
protected String getServletName() {
    return "another-dispatcher";
}
```
## A Parent and Child Context Example

> [!expand]- Click here to expand...
> Suppose that we have two areas of our application, for example a public one which is world accessible and a secured one, with different MVC configurations. Here, we'll just define two controllers that output a different message.
>
> Also, suppose that some of the controllers need a service that holds significant resources; a ubiquitous case is persistence. Then, we'll want to instantiate that service only once, to avoid doubling its resource usage, and because we believe in the Don't Repeat Yourself principle!
>
> Let's now proceed with the example.
> ### The Shared Service
>
> In our hello world example, we settled for a simpler greeter service instead of persistence:
> ```
> package com.marcuschiu.contexts.services;
>
> @Service
> public class GreeterService {
>     @Resource
>     private Greeting greeting;
>     
>     public String greet() {
>         return greeting.getMessage();
>     }
> }
> ```
>
> We'll declare the service in the root web application context, using component scanning:
> ```
> @Configuration
> @ComponentScan(basePackages = { "com.marcuschiu.contexts.services" })
> public class RootApplicationConfig {
>     //...
> }
> ```
>
> we might prefer XML instead
> ```
> <context:component-scan base-package="com.marcuschiu.contexts.services" />
> ```
> ### The Controllers
>
> Let's define two simple controllers which use the same service and output a greeting:
> ```
> package com.marcuschiu.contexts.normal;
>  
> @Controller
> public class HelloWorldController {
>  
>     @Autowired
>     private GreeterService greeterService;
>     
>     @RequestMapping(path = "/welcome")
>     public ModelAndView helloWorld() {
>         String message = "<h3>Normal " + greeterService.greet() + "</h3>";
>         return new ModelAndView("welcome", "message", message);
>     }
> }
> ```
>
> and
> ```
> package com.marcuschiu.contexts.secure;
>
> @Controller
> public class HelloWorldController {
>  
>     @Autowired
>     private GreeterService greeterService;
>     
>     @RequestMapping(path = "/welcome")
>     public ModelAndView helloWorld() {
>         String message = "<h3>Secure " + greeterService.greet() + "</h3>";
>         return new ModelAndView("welcome", "message", message);
>     }
> }
> ```
>
> As we can see, the controllers lie in two different packages and print different messages: one says “normal”, the other “secure”.
> ### The Dispatcher Servlet Contexts
>
> As we said earlier, we're going to have two different dispatcher servlet contexts, one for each controller. So, let's define them, in Java:
> ```
> //Normal context
> @Configuration
> @EnableWebMvc
> @ComponentScan(basePackages = { "com.marcuschiu.contexts.normal" })
> public class NormalWebAppConfig implements WebMvcConfigurer {
>     //...
> }
>  
> //"Secure" context
> @Configuration
> @EnableWebMvc
> @ComponentScan(basePackages = { "com.marcuschiu.contexts.secure" })
> public class SecureWebAppConfig implements WebMvcConfigurer {
>     //...
> }
> ```
>
> or if we prefer XML instead
> ```
> <!-- normal-webapp-servlet.xml -->
> <context:component-scan base-package="com.marcuschiu.contexts.normal" />
>
> <!-- secure-webapp-servlet.xml -->
> <context:component-scan base-package="com.marcuschiu.contexts.secure" />
> ```
> ### Putting It All Together
>
> Now that we have all the pieces, we just need to tell Spring to wire them up. Recall that we need to load the root context and define the two dispatcher servlets. Although we've seen multiple ways to do that, we'll now focus on two scenarios, a Java one and an XML one. Let's start with Java.
>
> We'll define an <code><font style="color: rgb(128,128,128);">AbstractContextLoaderInitializer </font></code>to load the root context:
> ```
> @Override
> protected WebApplicationContext createRootApplicationContext() {
>     AnnotationConfigWebApplicationContext rootContext = new AnnotationConfigWebApplicationContext();
>     rootContext.register(RootApplicationConfig.class);
>     return rootContext;
> }
> ```
>
> Then, we need to create the two servlets, thus we'll define two subclasses of <code><font style="color: rgb(128,128,128);">AbstractDispatcherServletInitializer</font></code>. First, the “normal” one:
> ```
> @Override
> protected WebApplicationContext createServletApplicationContext() {
>     AnnotationConfigWebApplicationContext normalWebAppContext
>       = new AnnotationConfigWebApplicationContext();
>     normalWebAppContext.register(NormalWebAppConfig.class);
>     return normalWebAppContext;
> }
>  
> @Override
> protected String[] getServletMappings() {
>     return new String[] { "/api/*" };
> }
>  
> @Override
> protected String getServletName() {
>     return "normal-dispatcher";
> }
> ```
>
> Then, the “secure” one, which loads a different context and is mapped to a different path:
> ```
> @Override
> protected WebApplicationContext createServletApplicationContext() {
>     AnnotationConfigWebApplicationContext secureWebAppContext
>       = new AnnotationConfigWebApplicationContext();
>     secureWebAppContext.register(SecureWebAppConfig.class);
>     return secureWebAppContext;
> }
>  
> @Override
> protected String[] getServletMappings() {
>     return new String[] { "/s/api/*" };
> }
>  
> @Override
> protected String getServletName() {
>     return "secure-dispatcher";
> }
> ```
>
> And we're done! We've just applied what we touched in previous sections.
>
> We can do the same with <code><font style="color: rgb(128,128,128);">web.xml</font></code>, again just by combining the pieces we've discussed so far.
>
> Define a root application context:
> ```
> <listener>
> 	<listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
> </listener>
> ```
>
> A “normal” dispatcher context:
> ```
> <servlet>
>     <servlet-name>normal-webapp</servlet-name>
>     <servlet-class>
>         org.springframework.web.servlet.DispatcherServlet
>     </servlet-class>
>     <load-on-startup>1</load-on-startup>
> </servlet>
> <servlet-mapping>
>     <servlet-name>normal-webapp</servlet-name>
>     <url-pattern>/api/*</url-pattern>
> </servlet-mapping>
> ```
>
> And, finally, a “secure” context:
> ```
> <servlet>
>     <servlet-name>secure-webapp</servlet-name>
>     <servlet-class>
>         org.springframework.web.servlet.DispatcherServlet
>     </servlet-class>
>     <load-on-startup>1</load-on-startup>
> </servlet>
> <servlet-mapping>
>     <servlet-name>secure-webapp</servlet-name>
>     <url-pattern>/s/api/*</url-pattern>
> </servlet-mapping>
> ```
# 5 - Combining Multiple Contexts

There are other ways than parent-child to combine multiple configuration locations, to split big contexts and better separate different concerns. We've seen one example already: when we specify <code><font style="color: rgb(128,128,128);">contextConfigLocation </font></code>with multiple paths or packages, Spring builds a single context by combining all the bean definitions, as if they were written in a single XML file or Java class, in order.

However, we can achieve a similar effect with other means and even use different approaches together. Let's examine our options.

One possibility is component scanning, which we explain [in another article](https://www.baeldung.com/spring-bean-annotations#scanning).
### Importing a Context Into Another

Alternatively, we can have a context definition import another one. Depending on the scenario, we have different kinds of imports.

Importing a <code><font style="color: rgb(128,128,0);">@Configuration </font></code>class in Java:
```
@Configuration
@Import(SomeOtherConfiguration.class)
public class Config { ... }
```

Loading some other type of resource, for example, an XML context definition, in Java:
```
@Configuration
@ImportResource("classpath:basicConfigForPropertiesTwo.xml")
public class Config { ... }
```

Finally, including an XML file in another one:
```
<import resource="greeting.xml" />
```

Thus, we have many ways to organize the services, components, controllers, etc., that collaborate to create our awesome application. And the nice thing is that IDEs understand them all!
# 6 - Spring Boot Web Applications

Spring Boot automatically configures the components of the application, so, generally, there is less need to think about how to organize them.

Still, under the hood, Boot uses Spring features, including those that we've seen so far. Let's see a couple of noteworthy differences.

Spring Boot web applications running in an embedded [[Java - Servlet API／Specification - Servlet Containers - Application Servers|servlet-container]] [don't run any <code>WebApplicationInitializer</code>](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#boot-features-embedded-container-context-initializer) by design.

Should it be necessary, we can write the same logic in a <code><font style="color: rgb(128,128,128);">SpringBootServletInitializer</font></code>or a <code><font style="color: rgb(128,128,128);">[[Java - Spring - ApplicationContext - ServletContextInitializer|ServletContextInitializer]]</font></code> instead, depending on the chosen deployment strategy.

However, for adding servlets, filters, and listeners as seen in this article, it is not necessary to do so. In fact, Spring Boot automatically registers every servlet-related beans to the container:
```
@Bean
public Servlet myServlet() { ... }
```

The objects so defined are mapped according to conventions: filters are automatically mapped to <code><font style="color: rgb(128,128,128);">/\*</font></code>, that is, to every request. If we register a single servlet, it is mapped to <code><font style="color: rgb(128,128,128);">/</font></code>, otherwise, each servlet is mapped to its bean name.

If the above conventions don't work for us, we can define a <code><font style="color: rgb(128,128,128);">FilterRegistrationBean</font></code>, <code><font style="color: rgb(128,128,128);">ServletRegistrationBean<em>, </em></font></code>or <code><font style="color: rgb(128,128,128);">ServletListenerRegistrationBean </font></code>instead. Those classes allow us to control the fine aspects of the registration.
