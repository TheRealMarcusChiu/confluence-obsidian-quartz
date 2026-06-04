---
title: "Java - Spring Framework - Web - Server Stacks (MVC vs WebFlux - Servlet vs Reactive)"
created: 2021-04-25T17:57:52.761-05:00
modified: 2022-12-22T10:01:20.724-06:00
parent: "[[Java - Spring Framework - Web／Network／API Libraries]]"
children:
  - "[[Java - Spring - CORS Support]]"
  - "[[Java - Spring - JAX-RS]]"
  - "[[Java - Spring - MVC]]"
  - "[[Java - Spring - MVC Async]]"
  - "[[Java - Spring - Web @Annotations]]"
  - "[[Java - Spring - Webflux]]"
---
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Spring-MVC+Async vs Spring-WebFlux - Comparisons

```merge-table
{
  "rows": [
    [
      {
        "content": "[[Java - Spring - MVC|Spring MVC]] and [[Java - Spring - MVC Async|Spring MVC + Async]]",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "[[Java - Spring - Webflux|Spring WebFlux]]",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "supports [[Java - Servlet API／Specification (2.5 - 3.0 - 3.1 - 4.0 - 5.0)|Servlet 3.0 Specifications]]",
        "align": "center"
      },
      {
        "content": "supports [[Java - Servlet API／Specification (2.5 - 3.0 - 3.1 - 4.0 - 5.0)|Servlet 3.1+ Specifications]]",
        "align": "center"
      }
    ],
    [
      {
        "content": "supports I/O\n(e.g. communicating with a client, reading the request body or request parts, etc)",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "all I/O is thread blocking",
        "align": "center"
      },
      {
        "content": "all I/O is thread non-blocking",
        "align": "center"
      }
    ],
    [
      {
        "content": "<code>[[Java - Servlet Filters|Filters]]</code> and <code>[[Java - Servlet API／Specification - Servlet Containers - Application Servers|Servlets]]</code> works synchronously",
        "align": "center"
      },
      {
        "content": "<code><font style=\"color: rgb(128,128,128);\">WebFilter</font></code> and <code><font style=\"color: rgb(128,128,128);\">WebHandler</font></code> works asynchronously",
        "align": "center"
      }
    ],
    [
      {
        "content": "Spring WebFlux is compatible with a wider range of Web/Application servers than Spring MVC, like [[Netty]] and [[JBoss Undertow|Undertow]]",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "Spring WebFlux supports reactive backpressure, so we have more control over how we should react to fast producers than both Spring MVC Async and Spring MVC",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "![[Java - Spring Framework - Web - Server Stacks (MVC vs WebFlux - Servlet vs Reactive)/servlet-stack.png|400]]",
        "align": "center"
      },
      {
        "content": "![[Java - Spring Framework - Web - Server Stacks (MVC vs WebFlux - Servlet vs Reactive)/reactive-stack.png|400]]",
        "align": "center"
      }
    ],
    [
      {
        "content": "![[Java - Spring Framework - Web - Server Stacks (MVC vs WebFlux - Servlet vs Reactive)/servlet-vs-reactive.png|450]]![[Java - Spring Framework - Web - Server Stacks (MVC vs WebFlux - Servlet vs Reactive)/spring-mvc-and-webflux-diagram-1521513541932.png|450]]",
        "colspan": 2
      },
      null
    ]
  ],
  "tableStyle": "width: 97.0149%;"
}
```
# Resources
- [https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.developing-web-applications](https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.developing-web-applications)
- [https://www.baeldung.com/spring-mvc-async-vs-webflux](https://www.baeldung.com/spring-mvc-async-vs-webflux)
- [https://www.infoq.com/articles/Servlet-and-Reactive-Stacks-Spring-Framework-5/#:~:text=On%20the%20servlet%20stack%20they,etc](https://www.infoq.com/articles/Servlet-and-Reactive-Stacks-Spring-Framework-5/#:~:text=On%20the%20servlet%20stack%20they,etc)
- [https://www.infoq.com/news/2017/12/servlet-reactive-stack/](https://www.infoq.com/news/2017/12/servlet-reactive-stack/)
- [https://www.infoq.com/presentations/servlet-reactive-stack/](https://www.infoq.com/presentations/servlet-reactive-stack/)
