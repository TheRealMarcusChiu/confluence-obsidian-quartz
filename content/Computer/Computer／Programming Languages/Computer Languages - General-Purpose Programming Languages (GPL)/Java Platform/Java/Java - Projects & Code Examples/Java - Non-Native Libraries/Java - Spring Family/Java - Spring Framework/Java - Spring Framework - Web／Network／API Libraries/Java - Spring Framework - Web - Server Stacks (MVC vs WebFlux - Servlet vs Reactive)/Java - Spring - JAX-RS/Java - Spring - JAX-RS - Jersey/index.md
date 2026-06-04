---
title: "Java - Spring - JAX-RS - Jersey"
created: 2021-09-25T19:33:58.886-05:00
modified: 2021-09-25T19:34:53.546-05:00
parent: "[[Java - Spring - JAX-RS]]"
children: []
---
To get started with Jersey, include the <code><font style="color: rgb(122,134,154);">spring-boot-starter-jersey</font></code> as a dependency and then you need one <code><font style="color: rgb(128,128,0);">@Bean</font></code> of type <code><font style="color: rgb(122,134,154);">ResourceConfig</font></code> in which you register all the endpoints, as shown in the following example:
```
@Component
public class MyJerseyConfig extends ResourceConfig {

    public MyJerseyConfig() {
        register(MyEndpoint.class);
    }
}
```
# Resources
- [https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.developing-web-applications.jersey](https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.developing-web-applications.jersey)
