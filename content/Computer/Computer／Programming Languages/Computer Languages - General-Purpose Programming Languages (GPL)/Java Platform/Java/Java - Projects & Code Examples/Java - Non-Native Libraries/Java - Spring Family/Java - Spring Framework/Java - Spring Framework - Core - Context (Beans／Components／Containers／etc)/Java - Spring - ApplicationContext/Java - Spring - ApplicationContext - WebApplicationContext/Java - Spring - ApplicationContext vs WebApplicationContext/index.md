---
title: "Java - Spring - ApplicationContext vs WebApplicationContext"
created: 2020-10-20T16:24:43.902-05:00
modified: 2021-07-04T19:46:20.622-05:00
parent: "[[Java - Spring - ApplicationContext - WebApplicationContext]]"
children: []
---
In Spring web applications, there are two contexts that gets initialized at server startup, each of which is configured and initialized differently:
- <code><font style="color: rgb(51,102,255);"><strong>ApplicationContext</strong></font></code> - Spring Parent Context or Root Context
- <code><font style="color: rgb(51,102,255);"><strong>WebApplicationContext</strong></font></code> - Spring Child Context

> [!tabs]
>
> === ApplicationContext
>
> - <strong>Application Context</strong> - a single web application can only have ONE application context
>
> Application Context is the context initialized by a <code><font style="color: rgb(128,128,128);">ContextLoaderListener</font></code> or <code><font style="color: rgb(128,128,128);">ContextLoaderServlet</font></code> that we define in our application’s <code><font style="color: rgb(128,128,128);">web.xml</font></code> file and the configuration would look something like this
> ```xml
> ...
> <listener>
> 	<listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
> </listener>
> <context-param>
> 	<param-name>contextConfigLocation</param-name>
> 	<param-value>/WEB-INF/applicationContext.xml</param-value>
> </context-param>
> ...
> ```
>
> In the above configuration, we are asking Spring to load root-context.xml and create an Application Context from it. If <code><font style="color: rgb(128,128,128);">contextConfigLocation</font></code> is not mentioned as in the below snippet, it will by default look for <code><font style="color: rgb(128,128,128);">/WEB-INF/applicationContext.xml</font></code>.
> ```xml
> ...
> <listener>
> 	<listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
> </listener>
> ...
> ```
>
> Configuring <strong>contextLoaderListener</strong> is completely optional. We can boot up a Spring application with just the <em>dispatcher-servlet</em>, without even configuring <strong>contextLoaderListener</strong> (that loads up the <em>root-context</em>)<strong>.</strong>
>
> === WebApplicationContext
>
> - <strong>Web Application Context</strong> - a single web application can have MULTIPLE web-application contexts
>
> <strong>WebApplicationContext</strong> is the another servlet-specific context that is loaded based on the dispatcher servlets configured in the application’s <em>web.xml</em> file. So each dispatcher servlet has its own servlet-context initialized from <em>\<servlet-name\>-servlet.xml</em> file. This allows us to categorize the incoming requests based on the servlet’s url-pattern and handle them accordingly, such that one of dispatcher servlets could help serving the web pages via <em>Controller</em>, while another one could be used to implement a stateless REST web service. So with that, we understand that <font style="color: rgb(255,102,0);">a single web application can have multiple <em>dispatcher-servlet</em> configurations, thereby having multiple web-application contexts</font>
>
> If we want to change the name of the dispatcher-servlet file name or change it’s location, we can add <em>init-param</em> with <em>contextConfigLocation </em>as <em>param-name</em>, as can be seen below:
> ```xml
> ...
> <servlet>
> 	<servlet-name>mvc-dispatcher</servlet-name>
> 	<servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
> 	<load-on-startup>1</load-on-startup>
> 	<init-param>
> 		<param-name>contextConfigLocation</param-name>
> 		<param-value>/WEB-INF/sample-dispatcher-servlet.xml</param-value>
> 	</init-param>
> </servlet>
> <servlet-mapping>
> 	<servlet-name>mvc-dispatcher</servlet-name>
> 	<url-pattern>/</url-pattern>
> </servlet-mapping>
> ...
> ```
>
> So with <em>dispatcher-servlet</em> <em>init-param</em> specified as in the above <code><font style="color: rgb(128,128,128);">web.xml</font></code> code snippet, Spring no more finds the <em>dispatcher-servlet context file</em> with the name <strong>mvc-dispatcher-servlet.xml</strong>, but instead looks for the one specified as the <em>init-param</em> value for <em>contextConfigLocation</em>, i.e. <strong>sample-dispatcher-servlet.xml</strong>

# <strong>Difference Between the 2 Contexts</strong>

<strong>ApplicationContext </strong>is the root-context, that has bean configurations we might want to use (and reuse) across the entire application as singletons. There is always a single application context in a web application. Whereas, there can be multiple <strong>WebApplicationContexts</strong> for each of the dispatcher servlets we specify in our application’s <em>web.xml</em>

<strong>WebApplicationContext</strong> internally extends <strong>ApplicationContext</strong>, and as a child inherits all the beans from its parent. So we can also override the parent bean within our <strong>WebApplicationContext</strong>.

It’s always better to keep a clear separation between middle-tier services such as business logic components and data access classes (which we prefer defining in the <strong>ApplicationContext </strong>XML), and web-related components such as <em>controllers</em> and <em>view-resolvers</em> (which we prefer defining in the respective <em>dispatcher-servlet</em>‘s <strong>WebApplicationContext</strong>)
# <strong>Using it Together</strong>
```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
		 xmlns="http://java.sun.com/xml/ns/javaee" 
		 xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_3_0.xsd" 
		 id="WebApp_ID" version="3.0">

	<display-name>Spring MVC</display-name>

    <!-- Root ApplicationContext for entire web application -->
	<listener>
    	<listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
    </listener>
    <context-param>
		<param-name>contextConfigLocation</param-name>
		<param-value>/WEB-INF/applicationContext.xml</param-value>
	</context-param>

	<!-- WebApplicationContext 1 -->
	<servlet>
    	<servlet-name>webmvc1</servlet-name>
        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
        <load-on-startup>1</load-on-startup>
        <init-param>
        	<param-name>contextConfigLocation</param-name>
        	<param-value>/WEB-INF/mvc1-servlet.xml</param-value>
        </init-param>
    </servlet>

	<!-- WebApplicationContext 2 -->
  	<servlet>
        <servlet-name>webmvc2</servlet-name>
        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
        <load-on-startup>1</load-on-startup>
    </servlet>

	<servlet-mapping>
        <servlet-name>webmvc1</servlet-name>
        <url-pattern>/webmvc1</url-pattern>
    </servlet-mapping>
    <servlet-mapping>
        <servlet-name>webmvc2</servlet-name>
        <url-pattern>/webmvc2</url-pattern>
    </servlet-mapping>
</web-app>
```

and then you'll need three files:
- <code><font style="color: rgb(128,128,128);">/WEB-INF/applicationContext.xml</font></code>
- <code><font style="color: rgb(128,128,128);">/WEB-INF/mvc1-servlet.xml</font></code>
- <font style="color: rgb(128,128,128);"><code>/WEB-INF/webmvc2-servlet.xml</code><font style="color: rgb(51,51,51);">\# default \[servlet-name\]-servlet.xml</font></font>

The <code><font style="color: rgb(128,128,128);">\*-servlet.xml</font></code> files are used automatically and each creates an application context for that servlet. Unless the servlet's <code><font style="color: rgb(128,128,128);">contextConfigLocation</font></code> has been set
