---
title: "Java - Spring - @EnableAutoConfiguration"
created: 2022-08-23T21:41:09.085-05:00
modified: 2022-08-23T22:10:33.642-05:00
parent: "[[Java - Spring - @ComponentScan @EnableAutoConfiguration @SpringBootApplication]]"
children:
  - "[[Java - Spring - @EnableAutoConfiguration - Excluding Select AutoConfiguration Classes]]"
---
<code><font style="color: rgb(128,128,0);">@EnableAutoConfiguration</font></code>
- this annotation enables Spring Boot to pickup [[Java - Spring - AutoConfiguration - Classes|AutoConfiguration classes]]

For example, when we define the spring-boot-starter-web dependency in our classpath, Spring boot auto-configures Tomcat and Spring MVC. However, this auto-configuration has less precedence in case we define our own configurations.
```
@EnableAutoConfiguration
public class MainApplication {
	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(MainApplication.class, args);
	}
}
```
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
