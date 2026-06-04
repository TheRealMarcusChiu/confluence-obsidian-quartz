---
title: "Java - Spring - AutoConfiguration - Classes"
created: 2022-08-23T21:55:58.858-05:00
modified: 2022-08-23T23:03:01.271-05:00
parent: "[[Java - Spring - AutoConfiguration]]"
children: []
---
[AutoConfigurations](https://docs.spring.io/spring-boot/docs/1.4.1.RELEASE/reference/html/using-boot-auto-configuration.html) drives a lot of the [[Java - Spring Boot|Spring Boot]] magic
# AutoConfiguration Classes vs @Configuration Classes

<code><font style="color: rgb(122,134,154);">AutoConfiguration</font></code> classes are very very similar to regular <code>[[Java - Spring - @Configuration|Configuration]]</code> classes except for the following two differences:
- <code><font style="color: rgb(122,134,154);">AutoConfiguration</font></code> classes are run last (meaning after all regular non-autoconfiguration classes) while the order in which <code><font style="color: rgb(122,134,154);">Configuration</font></code> classes are run is indeterminate (except if we use ordering annotations like <code><font style="color: rgb(128,128,0);">@Ordered</font></code>)
- To declare a class as an <code><font style="color: rgb(122,134,154);">AutoConfiguration</font></code> the name of the class needs to be added under the key <font style="color: rgb(122,134,154);"><em>org.springframework.boot.autoconfigure.EnableAutoConfiguration</em></font> in the standard file <font style="color: rgb(122,134,154);"><em>resources/META-INF/spring.factories</em></font>. An example can be found [here](https://github.com/spring-projects/spring-boot/blob/v2.1.8.RELEASE/spring-boot-project/spring-boot-autoconfigure/src/main/resources/META-INF/spring.factories#L20)

# AutoConfiguration Classes are picked up by @EnableAutoConfiguration

see [[Java - Spring - @EnableAutoConfiguration]]
