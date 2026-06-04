---
title: "Java - Spring - @Lazy"
created: 2021-06-14T18:53:01.938-05:00
modified: 2021-06-14T18:55:23.983-05:00
parent: "[[Java - Spring - Context Annotations]]"
children: []
---
By default, Spring creates all singleton beans eagerly at the startup/bootstrapping of the application context. However, there are cases when we need to create a bean when we request it, not at application startup.

We use [@Lazy](https://www.baeldung.com/spring-lazy-annotation) when we want to initialize our bean lazily. This annotation behaves differently depending on where we exactly place it. We can put it on:
- <code><font style="color: rgb(128,128,0);">[[Java - Spring - @Bean @Component|@Bean]]</font></code> annotated bean factory method, to delay the method call (hence the bean creation)
- <code>[[Java - Spring - @Configuration|@Configuration]]</code> class and all contained <code><font style="color: rgb(128,128,0);">@Bean</font></code> methods will be affected
- <code>[[Java - Spring - @Bean @Component|@Component]]</code> class, which is not a <code><font style="color: rgb(128,128,0);">@Configuration</font></code> class, this bean will be initialized lazily
- <code>[[Java - Spring - @Autowired @Resource @Inject (Wiring Types) - @Qualifier @Named|@Autowired]]</code> constructor, setter, or field, to load the dependency itself lazily (via proxy)

This annotation has an argument named <code><em>value</em></code> with the default value of <code><em>true</em></code>. It is useful to override the default behavior.

For example, marking beans to be eagerly loaded when the global setting is lazy, or configure specific <code><font style="color: rgb(128,128,0);">@Bean</font></code> methods to eager loading in a <code><font style="color: rgb(128,128,0);"><em>@Configuration</em></font></code> class marked with <code><font style="color: rgb(128,128,0);">@Lazy</font></code>:
```
@Configuration
@Lazy
class VehicleFactoryConfig {

    @Bean
    @Lazy(false)
    Engine engine() {
        return new Engine();
    }
}
```
# Resources

For further reading, please visit [this article](https://www.baeldung.com/spring-lazy-annotation).
