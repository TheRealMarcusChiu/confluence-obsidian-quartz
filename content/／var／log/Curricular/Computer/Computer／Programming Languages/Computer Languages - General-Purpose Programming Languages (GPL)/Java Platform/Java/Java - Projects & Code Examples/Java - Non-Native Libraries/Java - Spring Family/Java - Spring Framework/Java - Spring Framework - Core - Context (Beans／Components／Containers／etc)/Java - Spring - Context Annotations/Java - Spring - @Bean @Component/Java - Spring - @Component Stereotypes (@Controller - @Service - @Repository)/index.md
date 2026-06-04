---
title: "Java - Spring - @Component Stereotypes (@Controller - @Service - @Repository)"
created: 2021-04-01T10:47:11.185-05:00
modified: 2021-05-29T12:02:43.107-05:00
parent: "[[Java - Spring - @Bean @Component]]"
children: []
---
```merge-table
{
  "rows": [
    [
      {
        "content": "Annotation",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Meaning",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "<code><font style=\"color: rgb(128,128,0);\">@Component</font></code>",
      "generic stereotype for any Spring-managed component"
    ],
    [
      "<code><font style=\"color: rgb(128,128,0);\">@Repository</font></code>",
      "stereotype for persistence layer"
    ],
    [
      "<code><font style=\"color: rgb(128,128,0);\">@Service</font></code>",
      "stereotype for service layer"
    ],
    [
      "<code><font style=\"color: rgb(128,128,0);\">@Controller</font></code>",
      "stereotype for presentation layer (spring-mvc)"
    ]
  ]
}
```

<font style="color: rgb(83,90,96);">these stereotype annotations make ideal targets for pointcuts. </font><code><font style="color: rgb(128,128,0);">@Repository</font></code><font style="color: rgb(83,90,96);">, </font><code><font style="color: rgb(128,128,0);">@Service</font></code><font style="color: rgb(83,90,96);">, and </font><code><font style="color: rgb(128,128,0);">@Controller</font></code><font style="color: rgb(83,90,96);"> can also carry additional semantics in future releases of the Spring Framework</font>
