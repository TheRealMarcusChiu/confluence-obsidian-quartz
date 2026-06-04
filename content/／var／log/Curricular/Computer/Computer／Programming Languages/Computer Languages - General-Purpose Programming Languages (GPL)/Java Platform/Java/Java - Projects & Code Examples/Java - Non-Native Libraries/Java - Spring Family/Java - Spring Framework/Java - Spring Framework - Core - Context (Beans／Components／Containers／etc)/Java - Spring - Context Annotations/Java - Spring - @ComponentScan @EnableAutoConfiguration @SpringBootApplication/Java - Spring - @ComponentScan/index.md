---
title: "Java - Spring - @ComponentScan"
created: 2022-08-23T22:11:01.172-05:00
modified: 2022-08-23T22:13:52.037-05:00
parent: "[[Java - Spring - @ComponentScan @EnableAutoConfiguration @SpringBootApplication]]"
children: []
---
###### <code><font style="color: rgb(128,128,0);">@ComponentScan</font></code>
- this annotation is used to tell Spring to scan packages along with all its sub-packages for classes annotated with <code><font style="color: rgb(128,128,0);">[[Java - Spring - @Configuration|@Configuration]]</font></code> or <code><font style="color: rgb(128,128,0);">[[Java - Spring - @Bean @Component|@Component]]</font></code> (including <code><font style="color: rgb(128,128,0);">@Component</font></code> sub-types: <code><font style="color: rgb(128,128,0);">@Controller</font></code>, <code><font style="color: rgb(128,128,0);">@Service</font></code>, and <code><font style="color: rgb(128,128,0);">@Repository</font></code>)

# @ComponentScan Features

<code><font style="color: rgb(128,128,0);">@ComponentScan</font></code> allows:
- specifying target package(s) via: <code><font style="color: rgb(122,134,154);">basePackageClasses</font></code> or <code><font style="color: rgb(122,134,154);">basePackages</font></code>
- no package is specified, which then it considers the package of the class declaring the <code><font style="color: rgb(128,128,0);">@ComponentScan</font></code> annotation as the starting package

# Example @ComponentScan
In the example below, Spring will scan the <code><font style="color: rgb(122,134,154);">com.marcus.healthcare</font></code> and <code><font style="color: rgb(122,134,154);">com.marcus.employee</font></code> packages and the <code><font style="color: rgb(122,134,154);">Teacher.class</font></code> for components
```
@ComponentScan(
	basePackages = {"com.marcus.healthcare", "com.marcus.employee"},
	basePackageClasses = Teacher.class)
public class MainApplication {
	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(MainApplication.class, args);
	}
}
```
