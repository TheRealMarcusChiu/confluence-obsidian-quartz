---
title: "Java - SpringBoot - @EntityScan"
created: 2021-06-14T14:12:48.648-05:00
modified: 2021-08-31T20:04:34.488-05:00
parent: "[[Java - Spring Data - @Annotations]]"
children: []
---
When writing our Spring application we will usually have entity classes – those annotated with <code><font style="color: rgb(128,128,0);">@Entity</font></code> annotation. We can consider two approaches to placing our entity classes:
- Under the application main package or its sub-packages
- Use a completely different root package

In the first scenario, we could use <code><font style="color: rgb(128,128,0);">@EnableAutoConfiguration</font></code> to enable Spring to auto-configure the application context.

In the second scenario, we would provide our application with the information where these packages could be found. For this purpose, we would use <code><font style="color: rgb(128,128,0);">@EntityScan<em>.</em></font></code>

<code><font style="color: rgb(128,128,0);">@EntityScan</font></code> annotation is used when entity classes are not placed in the main application package or its sub-packages. In this situation, we would declare the package or list of packages in the main configuration class within <code><font style="color: rgb(128,128,0);">@EntityScan</font></code> annotation. This will tell Spring where to find entities used in our application:
```
@Configuration
@EntityScan("com.baeldung.demopackage")
public class EntityScanDemo {
    // ...
}
```
### <strong>We should be aware that using <code>@EntityScan</code> will disable Spring Boot auto-configuration scanning for entities.</strong>
