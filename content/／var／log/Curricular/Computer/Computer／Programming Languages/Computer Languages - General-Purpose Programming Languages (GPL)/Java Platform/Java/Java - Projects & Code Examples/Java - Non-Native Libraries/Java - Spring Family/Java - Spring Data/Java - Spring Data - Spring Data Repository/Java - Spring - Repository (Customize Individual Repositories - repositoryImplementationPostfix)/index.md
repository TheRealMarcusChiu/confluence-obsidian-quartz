---
title: "Java - Spring - Repository (Customize Individual Repositories - repositoryImplementationPostfix)"
created: 2021-03-15T00:00:16.618-05:00
modified: 2026-05-14T23:53:00.287-05:00
parent: "[[Java - Spring Data - Spring Data Repository]]"
children: []
---
Based on: [https://docs.spring.io/spring-data/data-document/docs/current/reference/html/#repositories.custom-implementations](https://docs.spring.io/spring-data/data-document/docs/current/reference/html/#repositories.custom-implementations)
# Interface for custom repository functionality
```
interface UserRepositoryCustom {
	public void someCustomMethod(User user);
}
```
# Implementation of custom repository functionality
```
class UserRepositoryImpl implements UserRepositoryCustom {

	@Lazy
	@Autowired
    AccountRepository accountRepository;  /* Optional - if you need it */

	public void someCustomMethod(User user) {
    	// Your custom implementation
	}
}
```
# Changes to your basic repository interface
```
public interface UserRepository extends CrudRepository<User, Long>, UserRepositoryCustom {
  // Declare query methods here
}
```
# What if Custom Repository Implementation Doesn't End With \*Impl

We just need to make sure that it has the postfix <code><font style="color: rgb(122,134,154);">Impl</font></code>. However, we can set a custom postfix via
- <code><font style="color: rgb(128,128,0);">@EnableJpaRepositories</font><font style="color: rgb(122,134,154);">(repositoryImplementationPostfix = "SomethingHere")</font></code>
```
@SpringBootApplication
@EnableJpaRepositories(repositoryImplementationPostfix = "SomethingHere")
public class MainApplication {
    // ...
}
```

Thus, Spring Data is able to register class <code><font style="color: rgb(122,134,154);">UserRepositorySomethingHere</font></code>
