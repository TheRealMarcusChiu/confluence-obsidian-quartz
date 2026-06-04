---
title: "Java - Spring Framework - Web - ResourceHttpRequestHandler - Serving resources／static／public Content"
created: 2021-01-24T15:38:15.861-06:00
modified: 2022-12-22T10:02:21.959-06:00
parent: "[[Java - Spring Framework - Web／Network／API Libraries]]"
children: []
---
Spring Boot comes with a pre-configured implementation of <code>[ResourceHttpRequestHandler](https://github.com/spring-projects/spring-framework/blob/master/spring-webmvc/src/main/java/org/springframework/web/servlet/resource/ResourceHttpRequestHandler.java)</code> to facilitate serving static resources.

By default, this handler serves static content from any of the following directories that are on the classpath:
- <code><font style="color: rgb(122,134,154);">/META-INF/resources</font></code>
- <code><font style="color: rgb(122,134,154);">/resources</font></code>
- <code><font style="color: rgb(122,134,154);">/static</font></code>
- <code><font style="color: rgb(122,134,154);">/public</font></code>

Since <code><font style="color: rgb(122,134,154);">src/main/resources</font></code> is typically on the classpath by default, we can place any of these directories there.

For example, if we put an <code><font style="color: rgb(122,134,154);">about.html</font></code> file inside the <code><font style="color: rgb(122,134,154);">/static</font></code> directory in our classpath, then we can access that file via [http://localhost:8080/about.html](http://localhost:8080/about.html). Similarly, we can achieve the same result by adding that file in other mentioned directories
# What Happens When We Place text.txt in 4 Directories (META-INF/resources, resources, static, public)?

Spring finds it in the following order:
- <code><font style="color: rgb(122,134,154);">src/main/resources/META-INF/resources</font></code>
- <code><font style="color: rgb(122,134,154);">src/main/resources/resources</font></code>
- <code><font style="color: rgb(122,134,154);">src/main/resources/static</font></code>
- <code><font style="color: rgb(122,134,154);">src/main/resources/public</font></code>

###### For Example

> [!expand-ui]- text.txt in 3 directories
> ![[Java - Spring Framework - Web - ResourceHttpRequestHandler - Serving resources／static／public Content/java-spring-serving-resources-static-public-content-1.png|961x250]]
>
> ![[Java - Spring Framework - Web - ResourceHttpRequestHandler - Serving resources／static／public Content/java-spring-serving-resources-static-public-content-1-result.png|301x78]]

> [!expand-ui]- text.txt in 2 directories
> ![[Java - Spring Framework - Web - ResourceHttpRequestHandler - Serving resources／static／public Content/java-spring-serving-resources-static-public-content-2.png|755x250]]
>
> ![[Java - Spring Framework - Web - ResourceHttpRequestHandler - Serving resources／static／public Content/java-spring-serving-resources-static-public-content-2-result.png|301x78]]

> [!expand-ui]- text.txt in 1 directory
> ![[Java - Spring Framework - Web - ResourceHttpRequestHandler - Serving resources／static／public Content/java-spring-serving-resources-static-public-content-3.png|540x250]]
>
> ![[Java - Spring Framework - Web - ResourceHttpRequestHandler - Serving resources／static／public Content/java-spring-serving-resources-static-public-content-3-result.png|301x76]]
# Resources
- [https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.developing-web-applications.spring-mvc.static-content](https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.developing-web-applications.spring-mvc.static-content)
- [https://www.baeldung.com/spring-mvc-static-resources](https://www.baeldung.com/spring-mvc-static-resources)
