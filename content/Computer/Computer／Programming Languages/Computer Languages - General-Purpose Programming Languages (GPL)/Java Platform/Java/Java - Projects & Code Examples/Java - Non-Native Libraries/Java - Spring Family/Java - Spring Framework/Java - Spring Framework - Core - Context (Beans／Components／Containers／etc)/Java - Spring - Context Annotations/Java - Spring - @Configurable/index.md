---
title: "Java - Spring - @Configurable"
created: 2022-08-24T03:01:14.636-05:00
modified: 2022-08-24T03:39:59.939-05:00
parent: "[[Java - Spring - Context Annotations]]"
children: []
---
###### @Configurable
- this annotation allows instances of the decorated class to hold references to Spring beans

In Spring, injecting one bean into another bean is very common. However, sometimes it's desirable to inject a bean into an ordinary object. The following sections will present how to do so using the [<em>@Configurable</em>](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/beans/factory/annotation/Configurable.html) annotation and an [AspectJ](https://www.baeldung.com/aspectj) weaver
# Resources
- [https://www.baeldung.com/spring-inject-bean-into-unmanaged-objects](https://www.baeldung.com/spring-inject-bean-into-unmanaged-objects)
