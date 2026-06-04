---
title: "Java - Spring - @ComponentScan @EnableAutoConfiguration @SpringBootApplication"
created: 2020-10-18T18:25:54.142-05:00
modified: 2022-08-23T22:58:49.744-05:00
parent: "[[Java - Spring - Context Annotations]]"
children:
  - "[[Java - Spring - @ComponentScan]]"
  - "[[Java - Spring - @EnableAutoConfiguration]]"
---
Annotations make it easier to configure the [[Dependency Injection (DI)|dependency injection]] in Spring. Instead of using XML configuration files, we can use Spring Bean annotations on classes and methods to define beans. After that, the Spring IoC container configures and manages the beans.

```merge-table
{
  "rows": [
    [
      {
        "content": "[[Java - Spring - @ComponentScan|@ComponentScan]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "tells Spring to scan for classes annotated with <code><font style=\"color: rgb(128,128,0);\">@Configuration</font></code> or <code><font style=\"color: rgb(128,128,0);\">@Component</font></code>"
    ],
    [
      {
        "content": "[[Java - Spring - @EnableAutoConfiguration|@EnableAutoConfiguration]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "tells Spring to scan for [[Java - Spring - AutoConfiguration - Classes|auto-configuration classes]]"
    ],
    [
      {
        "content": "<strong><code><font style=\"color: rgb(128,128,0);\">@SpringBootApplication</font></code></strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "is a combination of <code><font style=\"color: rgb(128,128,0);\">[[Java - Spring - @SpringBootConfiguration|@SpringBootConfiguration]]</font></code>, <code><font style=\"color: rgb(128,128,0);\">@EnableAutoConfiguration</font></code>, and <code><font style=\"color: rgb(128,128,0);\">@ComponentScan</font></code> with their default attributes"
    ]
  ]
}
```
