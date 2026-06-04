---
title: "Java - Spring - @EnableAutoConfiguration - Excluding Select AutoConfiguration Classes"
created: 2022-08-23T21:45:32.702-05:00
modified: 2022-08-23T22:19:15.492-05:00
parent: "[[Java - Spring - @EnableAutoConfiguration]]"
children: []
---
<code><font style="color: rgb(128,128,0);">[[Java - Spring - @EnableAutoConfiguration|@EnableAutoConfiguration]]</font></code> annotation provides two parameters to manually exclude [[Java - Spring - AutoConfiguration - Classes|Auto-Configuration classes]]:

We can use <code><font style="color: rgb(122,134,154);">exclude</font></code> to disable a list of classes that we do not want to be auto-configured:
```
@Configuration
@EnableAutoConfiguration(exclude={JdbcTemplateAutoConfiguration.class})
public class EmployeeApplication {
	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(EmployeeApplication.class, args);
	}
}
```

We can use <code><font style="color: rgb(122,134,154);">excludeName</font></code> to define a fully qualified list of class names that we want to exclude from the auto-configuration:
```
@Configuration
@EnableAutoConfiguration(excludeName = {"org.springframework.boot.autoconfigure.jdbc.JdbcTemplateAutoConfiguration"})
public class EmployeeApplication {
	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(EmployeeApplication.class, args);
	}
}
```
