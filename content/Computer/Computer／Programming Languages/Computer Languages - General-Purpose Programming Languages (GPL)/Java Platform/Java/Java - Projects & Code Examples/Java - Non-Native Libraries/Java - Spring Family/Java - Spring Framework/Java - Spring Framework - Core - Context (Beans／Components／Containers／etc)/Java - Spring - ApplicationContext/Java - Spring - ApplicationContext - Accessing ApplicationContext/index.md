---
title: "Java - Spring - ApplicationContext - Accessing ApplicationContext"
created: 2020-10-20T15:11:31.712-05:00
modified: 2021-07-05T09:42:01.379-05:00
parent: "[[Java - Spring - ApplicationContext]]"
children: []
---
To access a <code><font style="color: rgb(51,102,255);">ApplicationContext</font></code>, we can either:
- <code><font style="color: rgb(128,128,0);">@Autowire</font></code> the <code><font style="color: rgb(51,102,255);">ApplicationContext</font></code> interface bean
> [!expand]- Click here to expand...
> ```
> package com.marcuschiu.example;
> import org.springframework.context.ApplicationContext;
> import org.springframework.stereotype.Component;
>
> @Component
> public class MyBean {
>
>     @Autowired
>     private ApplicationContext applicationContext;
>
> 	@PostConstruct
> 	public void post() {
> 		// would output: org.springframework.context.annotation.AnnotationConfigApplicationContext@51a9ad5e
> 		System.out.println(applicationContext.getDisplayName());
> 	}		
> }
> ```
- implement the <code><font style="color: rgb(51,102,255);">ApplicationContextAware</font></code>
> [!expand]- Click here to expand...
> ```
> package com.marcuschiu.example;
>
> import org.springframework.beans.BeansException;
> import org.springframework.context.ApplicationContext;
> import org.springframework.context.ApplicationContextAware;
> import org.springframework.stereotype.Component;
>
> @Component
> public class MyBean implements ApplicationContextAware {
>
>     private ApplicationContext applicationContext;
>
>     @Override
>     public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
>         this.applicationContext = applicationContext;
>     }
>
> 	@PostConstruct
> 	public void post() {
> 		// would output: org.springframework.context.annotation.AnnotationConfigApplicationContext@51a9ad5e
> 		System.out.println(applicationContext.getDisplayName());
> 	}	
> }
> ```

To Access the Root ApplicationContext
```
@Autowired
private ServletContext servletContext;

ApplicationContext ac = WebApplicationContextUtils.getWebApplicationContext(servletContext);

if(ac == null){
    return "root application context is null";
}
```
