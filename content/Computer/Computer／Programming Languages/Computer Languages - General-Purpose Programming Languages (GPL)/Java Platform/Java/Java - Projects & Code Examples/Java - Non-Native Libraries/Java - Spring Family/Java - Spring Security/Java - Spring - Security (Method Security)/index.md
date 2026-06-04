---
title: "Java - Spring - Security (Method Security)"
created: 2020-12-28T17:01:47.923-06:00
modified: 2022-10-06T18:16:05.623-05:00
parent: "[[Java - Spring Security]]"
children: []
---
- article: [https://www.baeldung.com/spring-security-method-security](https://www.baeldung.com/spring-security-method-security)
- code: [https://github.com/SpringBootMarcusChiu/security-example](https://github.com/SpringBootMarcusChiu/security-example)

# Method Security - Important Notes
- <strong>By default, [[Java - Spring Framework - Core - AOP Frameworks (AspectJ - Spring AOP)|Spring AOP proxying]]</strong><strong> is used to apply method security</strong> – if a secured method A is called by another method within the same class, security in A is ignored altogether. This means method A will execute without any security checking. The same applies to private methods
- <strong>Spring SecurityContext is thread-bound</strong> – by default, the security context isn't propagated to child-threads. For more information, we can refer to [Spring Security Context Propagation](https://www.baeldung.com/spring-security-async-principal-propagation) article
