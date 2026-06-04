---
title: "Java - Spring - Repository (Methods Creating Repository Bean Proxies)"
created: 2021-03-14T23:58:32.001-05:00
modified: 2022-11-17T03:00:49.172-06:00
parent: "[[Java - Spring Data - Spring Data Repository]]"
children: []
---
# Spring Annotations

The repository infrastructure can also be triggered by using a store-specific<code><font style="color: rgb(128,128,0);">@Enable\${store}Repositories</font></code> annotation on a Spring <code>[[Java - Spring - @Configuration|@Configuration]]</code> class

A sample configuration to enable [[Java - Spring - Spring Data JPA (Hibernate)|Spring Data JPA]] repositories resembles the following:
```
@Configuration
@EnableJpaRepositories("com.acme.repositories")
class ApplicationConfiguration {}
```

Examples:
- [[Java - Spring - Spring Data JPA (Hibernate) Setup (75% manual config)]]

# Programmatically

The Spring Data modules that provide repository support ship a persistence technology-specific <code>RepositoryFactory</code> that you can use as follows:
```
RepositoryFactorySupport factory = ... // Instantiate factory here
UserRepository repository = factory.getRepository(UserRepository.class);
```

Examples:
- [[Java - Spring - Spring Data JPA (Hibernate) Setup (100% manual config)]]
