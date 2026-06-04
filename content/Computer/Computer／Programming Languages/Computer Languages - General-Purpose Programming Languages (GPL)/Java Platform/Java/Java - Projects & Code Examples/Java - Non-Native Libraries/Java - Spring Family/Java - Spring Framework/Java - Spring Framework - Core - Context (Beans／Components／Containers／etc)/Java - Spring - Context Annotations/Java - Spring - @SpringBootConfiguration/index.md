---
title: "Java - Spring - @SpringBootConfiguration"
created: 2021-05-29T11:51:44.032-05:00
modified: 2021-05-29T11:58:19.548-05:00
parent: "[[Java - Spring - Context Annotations]]"
children: []
---
# 1 - Overview
- <code><font style="color: rgb(128,128,0);">@SpringBootConfiguration</font></code> is a variant of Spring's [[Java - Spring - @Configuration|@Configuration]] annotation
- <code><font style="color: rgb(128,128,0);">@SpringBootConfiguration</font></code> is mostly replaced by <code>[[Java - Spring - @ComponentScan @EnableAutoConfiguration @SpringBootApplication|@SpringBootApplication]]</code>
- <code><font style="color: rgb(128,128,0);">@SpringBootConfiguration</font></code> is automatically picked up by <code>[[Java - Spring - Test - Context - @SpringBootTest|@SpringBootTest]]</code> (unlike plain <code><font style="color: rgb(128,128,0);">@Configuration</font></code>)
- An application should only ever include one <code><font style="color: rgb(128,128,0);">@SpringBootConfiguration</font></code> and most idiomatic Spring Boot applications will inherit it from <code><font style="color: rgb(128,128,0);">@SpringBootApplication</font></code>

# 2 - Code Example
```
@SpringBootConfiguration
public class MyApplication {
   public static void main(String[] args) {
      SpringApplication.run(MyApplication.class, args);
   }
}
```
