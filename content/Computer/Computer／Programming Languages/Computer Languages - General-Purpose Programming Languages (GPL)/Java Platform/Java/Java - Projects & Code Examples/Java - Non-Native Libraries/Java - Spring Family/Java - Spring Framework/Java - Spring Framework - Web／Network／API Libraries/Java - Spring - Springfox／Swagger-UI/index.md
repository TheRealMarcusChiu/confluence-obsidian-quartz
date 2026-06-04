---
title: "Java - Spring - Springfox／Swagger-UI"
created: 2020-12-14T12:40:51.163-06:00
modified: 2021-06-08T10:01:29.068-05:00
parent: "[[Java - Spring Framework - Web／Network／API Libraries]]"
children: []
---
The <strong>Springfox</strong> suite of java libraries are all about automating the generation of machine and human readable specifications for JSON APIs written using the [spring family of projects](http://projects.spring.io/spring-framework). Springfox works by examining an application, once, at runtime to infer API semantics based on spring configurations, class structure and various compile time java Annotations
- code: [https://github.com/SpringBootMarcusChiu/swagger-example](https://github.com/SpringBootMarcusChiu/swagger-example)

# Code Example
### Maven Dependency
```xml
<dependency>
	<groupId>io.springfox</groupId>
	<artifactId>springfox-swagger2</artifactId>
	<version>2.4.0</version>
</dependency>
<dependency>
	<groupId>io.springfox</groupId>
	<artifactId>springfox-swagger-ui</artifactId>
	<version>2.4.0</version>
</dependency>
```
### Swagger UI Configuration
```java
@Configuration
@EnableWebMvc
@EnableSwagger2
@ComponentScan(basePackages = "com.*")
@PropertySource(value = {"classpath:log4j.properties"})
public class SpringConfig extends WebMvcConfigurerAdapter {
    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(apiInfo())
                .directModelSubstitute(LocalDate.class, String.class)
                .genericModelSubstitutes(ResponseEntity.class)
                .useDefaultResponseMessages(false)
                .select()
                .apis(RequestHandlerSelectors.any())
                .paths(PathSelectors.any())
                .build();
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("swagger-ui.html")
                .addResourceLocations("classpath:/META-INF/resources/");
        registry.addResourceHandler("/webjars/**")
                .addResourceLocations("classpath:/META-INF/resources/webjars/");
    }

    @SuppressWarnings("deprecation")
    private ApiInfo apiInfo() {
        ApiInfo apiInfo = new ApiInfo(
                "API",
                "API for xxxx",
                "API TOS",
                "Terms of service",
                "xxx",
                "License of API",
                "");
        return apiInfo;
    }
}
```
### Example Controller Class
```java
@RestController
@Api(value="users", description="Endpoint for user management")
public class Controller {
}
```
### Endpoint URL
```
https://localhost:8080/AppName/swagger-ui.html
```
