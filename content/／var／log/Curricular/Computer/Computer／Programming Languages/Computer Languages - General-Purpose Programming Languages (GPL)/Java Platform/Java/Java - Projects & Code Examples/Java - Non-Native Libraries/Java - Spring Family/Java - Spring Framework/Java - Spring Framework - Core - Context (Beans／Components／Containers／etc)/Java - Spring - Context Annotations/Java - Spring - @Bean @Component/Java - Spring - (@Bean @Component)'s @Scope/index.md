---
title: "Java - Spring - (@Bean @Component)'s @Scope"
created: 2019-12-08T14:19:31.159-06:00
modified: 2021-05-29T12:01:08.132-05:00
parent: "[[Java - Spring - @Bean @Component]]"
children: []
---
- code: [https://github.com/SpringBootMarcusChiu/bean-scopes](https://github.com/SpringBootMarcusChiu/bean-scopes)

The <strong>scope of a bean</strong> defines the life cycle and visibility of that bean in the contexts in which it is used
# 1 - Scope Types

The latest version of Spring framework defines 6 types of scopes:

```merge-table
{
  "rows": [
    [
      {
        "content": "Scope",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Availability",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Behavior",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "singleton",
        "header": true,
        "bg": "#F4F5F7"
      },
      "any application",
      "singleton instance per Spring 'ApplicationContext' (for which there may be several in any given web application)"
    ],
    [
      {
        "content": "prototype",
        "header": true,
        "bg": "#F4F5F7"
      },
      "any application",
      "a new instance instantiated every time it is requested from the container"
    ],
    [
      {
        "content": "request",
        "header": true,
        "bg": "#F4F5F7"
      },
      "only in web-aware application",
      "a new instance instantiated for every request made to the web-application"
    ],
    [
      {
        "content": "session",
        "header": true,
        "bg": "#F4F5F7"
      },
      "only in web-aware application",
      "same instance used within a session, new instance instantiated for new sessions"
    ],
    [
      {
        "content": "application",
        "header": true,
        "bg": "#F4F5F7"
      },
      "only in web-aware application",
      "singleton per ServletContext/web-application (one for all ApplicationContexts, if there are multiple)"
    ],
    [
      {
        "content": "websocket",
        "header": true,
        "bg": "#F4F5F7"
      },
      "only in web-aware application",
      "same instance used within a [[WebSockets|websocket]] session, new instance instantiated for new websocket sessions"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# 2 - Code Examples
> [!tabs]
>
> === singleton
>
> container creates a single instance of that bean, and all requests for that bean name will return the same object
> ```
> @Bean
> @Scope("singleton")
> public Pojo singletonPojoBean() {
>     return new Pojo();
> }
> ```
>
> the 2 classes below will have the <strong>SAME</strong> <code><font style="color: rgb(128,128,128);">Pojo</font></code> object
> ```
> @RestController
> public class DefaultController1 {
>     @Autowired
>     private Pojo singletonPojoBean;
> 	
> 	// ...
> }
>
> @RestController
> public class DefaultController2 {
>     @Autowired
>     private Pojo singletonPojoBean;
>
> 	// ...
> }
> ```
>
> === prototype
>
> a bean with <em>prototype</em> scope will return a different instance every time it is requested from the container
> ```
> @Bean
> @Scope("prototype")
> public Pojo prototypePojoBean() {
>     return new Pojo();
> }
> ```
>
> the 2 classes below will have <strong>DIFFERENT</strong> <code><font style="color: rgb(128,128,128);">Pojo</font></code> objects
> ```
> @RestController
> public class DefaultController1 {
>     @Autowired
>     private Pojo prototypePojoBean;
>
> 	// ...
> }
>
> @RestController
> public class DefaultController2 {
>     @Autowired
>     private Pojo prototypePojoBean;
>
> 	// ...
> }
> ```
>
> === request
>
> The <font style="color: rgb(128,128,0);">@Scope</font>'s <em>proxyMode</em> attribute is necessary because, at the moment of the instantiation of the web application context, there is no active request. Spring will create a proxy to be injected as a dependency, and instantiate the target bean when it is needed in a request.
> ```
> @Bean
> @RequestScope
> public Pojo requestPojoBean() {
>     return new Pojo();
> }
>
> // OR
>
> @Bean
> @Scope(value = WebApplicationContext.SCOPE_REQUEST, proxyMode = ScopedProxyMode.TARGET_CLASS)
> public Pojo requestPojoBean() {
>     return new Pojo();
> }
> ```
>
> for each request to <code><font style="color: rgb(51,102,255);">/request</font></code> a new <code><font style="color: rgb(128,128,128);">requestPojoBean</font></code> will be instantiated
> ```
> @RestController
> public class DefaultController {
>     @Autowired
>     private Pojo requestPojoBean;
>  
> 	@GetMapping("/request")
> 	public String requestBean() {
> 	    return requestPojoBean.getDateTimeCreated();
> 	}
> }
> ```
>
> === session
>
> The <font style="color: rgb(128,128,0);">@Scope</font>'s <em>proxyMode</em> attribute is necessary because, at the moment of the instantiation of the web application context, there is no active request. Spring will create a proxy to be injected as a dependency, and instantiate the target bean when it is needed in a request.
> ```
> @Bean
> @SessionScope
> public Pojo sessionPojoBean() {
>     return new Pojo();
> }
>
> // ...
>
> @Bean
> @Scope(value = WebApplicationContext.SCOPE_SESSION, proxyMode = ScopedProxyMode.TARGET_CLASS)
> public Pojo sessionPojoBean() {
>     return new Pojo();
> }
> ```
>
> for each session a new <code><font style="color: rgb(128,128,128);">requestPojoBean</font></code> will be instantiated. the same instance of the bean is used for the entire session
>
> the 2 classes below will have the <strong>SAME</strong> <code><font style="color: rgb(128,128,128);">Pojo</font></code> object as long as it is under the same session. The difference can be seen when you open a new browser or clear browser application data and refresh
> ```
> @RestController
> public class DefaultController1 {
>     @Autowired
>     private Pojo sessionPojoBean;
>  
> 	@GetMapping("/session")
> 	public String sessionBean() {
> 	    return sessionPojoBean.getDateTimeCreated();
> 	}
> }
>
> @RestController
> public class DefaultController1 {
>     @Autowired
>     private Pojo sessionPojoBean;
>  
> 	@GetMapping("/session")
> 	public String sessionBean() {
> 	    return sessionPojoBean.getDateTimeCreated();
> 	}
> }
> ```
>
> === application
>
> The <font style="color: rgb(128,128,0);">@Scope</font>'s <em>proxyMode</em> attribute is necessary because, at the moment of the instantiation of the web application context, there is no active request. Spring will create a proxy to be injected as a dependency, and instantiate the target bean when it is needed in a request.
>
> The <em>application </em>scope creates the bean instance for the lifecycle of a <em>ServletContext</em>
>
> application scope is somewhat similar to a Spring singleton bean but differs in two important ways:
> - it is a singleton per ServletContext, not per Spring 'ApplicationContext' (for which there may be several in any given web application)
> - it is actually exposed and therefore visible as a ServletContext attribute
>
> i.e. web application may have several Spring application contexts and therefore several instances of bean with singleton scope (one instance per spring app contexts) but only one bean defined with application scope
> ```
> @Bean
> @ApplicationScope
> public Pojo applicationPojoBean() {
>     return new Pojo();
> }
>
> // ...
>
> @Bean
> @Scope(value = WebApplicationContext.SCOPE_APPLICATION, proxyMode = ScopedProxyMode.TARGET_CLASS)
> public Pojo applicationPojoBean() {
>     return new Pojo();
> }
> ```
>
> the <code><font style="color: rgb(128,128,128);">applicationPojoBean</font></code> once instantiated it will be retained for all subsequent requests, sessions and even for a different servlet application that will access this bean, provided it is running in the same <em>ServletContext</em>
> ```
> @RestController
> public class DefaultController1 {
>     @Autowired
>     private Pojo applicationPojoBean;
>  
> 	@GetMapping("/application")
> 	public String applicationBean() {
> 	    return applicationPojoBean.getDateTimeCreated();
> 	}
> }
> ```
>
> === websocket
>
> The <font style="color: rgb(128,128,0);">@Scope</font>'s <em>proxyMode</em> attribute is necessary because, at the moment of the instantiation of the web application context, there is no active request. Spring will create a proxy to be injected as a dependency, and instantiate the target bean when it is needed in a request.
> ```
> @Bean
> @Scope(scopeName = "websocket", proxyMode = ScopedProxyMode.TARGET_CLASS)
> public Pojo websocketPojoBean() {
>     return new Pojo();
> }
> ```
>
> WebSocket-scoped beans when first accessed are stored in the <em>[[WebSockets|WebSocket]]</em> session attributes. The same instance of the bean is then returned whenever that bean is accessed during the entire <em>WebSocket</em> session.
>
> We can also say that it exhibits singleton behavior but limited to a <em>W</em><em>ebSocket</em> session only
