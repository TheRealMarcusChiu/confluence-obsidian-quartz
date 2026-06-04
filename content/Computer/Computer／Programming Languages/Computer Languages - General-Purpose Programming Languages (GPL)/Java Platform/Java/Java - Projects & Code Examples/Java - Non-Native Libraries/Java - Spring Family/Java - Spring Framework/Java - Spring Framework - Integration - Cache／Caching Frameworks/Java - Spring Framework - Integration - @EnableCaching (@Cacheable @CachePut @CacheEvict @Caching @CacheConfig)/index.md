---
title: "Java - Spring Framework - Integration - @EnableCaching (@Cacheable @CachePut @CacheEvict @Caching @CacheConfig)"
created: 2022-02-20T23:39:04.610-06:00
modified: 2022-12-22T09:47:34.215-06:00
parent: "[[Java - Spring Framework - Integration - Cache／Caching Frameworks]]"
children: []
---
# @EnableCaching

The [<code>@EnableCaching</code>](https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/cache/annotation/EnableCaching.html) annotation triggers a post-processor that inspects every Spring bean for the presence of caching annotations on public methods. If such an annotation is found, a proxy is automatically created to intercept the method call and handle the caching behavior accordingly.

The post-processor handles the [<code>@Cacheable</code>](https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/cache/annotation/Cacheable.html), [<code>@CachePut</code>](https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/cache/annotation/CachePut.html) and [<code>@CacheEvict</code>](https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/cache/annotation/CacheEvict.html) annotations. You can refer to the Javadoc and [the reference guide](https://docs.spring.io/spring/docs/current/spring-framework-reference/html/cache.html) for more detail.

Spring Boot automatically configures a suitable [<code>CacheManager</code>](https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/cache/CacheManager.html) to serve as a provider for the relevant cache. See [the Spring Boot documentation](https://docs.spring.io/spring-boot/docs/current/reference/html/boot-features-caching.html) for more detail.

Our sample does not use a specific caching library, so our cache store is the simple fallback that uses <code>ConcurrentHashMap</code>. The caching abstraction supports a wide range of cache libraries and is fully compliant with JSR-107 (JCache).
```
@SpringBootApplication
@EnableCaching
public class CachingApplication {
	public static void main(String[] args) { SpringApplication.run(CachingApplication.class, args); }
}
```
# @Cacheable
```
@Component
public class SimpleBookRepository {
	@Cacheable("books")
	public Book getByIsbn(String isbn) {
		// long process
		return new Book(isbn, "Some book");
	}
}
```
# Resources
- [https://docs.spring.io/spring-framework/docs/current/reference/html/integration.html#cache](https://docs.spring.io/spring-framework/docs/current/reference/html/integration.html#cache)
