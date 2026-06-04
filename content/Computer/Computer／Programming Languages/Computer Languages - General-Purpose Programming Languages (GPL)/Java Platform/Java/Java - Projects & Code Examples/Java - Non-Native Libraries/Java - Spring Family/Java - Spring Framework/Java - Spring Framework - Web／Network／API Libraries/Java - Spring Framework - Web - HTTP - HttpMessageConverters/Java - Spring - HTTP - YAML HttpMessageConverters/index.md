---
title: "Java - Spring - HTTP - YAML HttpMessageConverters"
created: 2022-01-29T00:21:40.241-06:00
modified: 2022-01-29T00:24:13.371-06:00
parent: "[[Java - Spring Framework - Web - HTTP - HttpMessageConverters]]"
children: []
---
# Dependencies
```xml
		<dependency>
			<groupId>com.fasterxml.jackson.core</groupId>
			<artifactId>jackson-core</artifactId>
			<version>2.13.1</version>
		</dependency>
		<dependency>
			<groupId>com.fasterxml.jackson.core</groupId>
			<artifactId>jackson-databind</artifactId>
			<version>2.13.1</version>
		</dependency>
		<dependency>
			<groupId>com.fasterxml.jackson.dataformat</groupId>
			<artifactId>jackson-dataformat-yaml</artifactId>
			<version>2.13.1</version>
		</dependency>
```
# Configuration

Spring
```java
@Configuration
public class YamlConfiguration implements WebMvcConfigurer {

    @Override
    public void configureMessageConverters(List<HttpMessageConverter<?>> messageConverters) {
        messageConverters.add(new YamlJackson2HttpMessageConverter());
    }

    static final class YamlJackson2HttpMessageConverter extends AbstractJackson2HttpMessageConverter {
        YamlJackson2HttpMessageConverter() {
            super(new YAMLMapper(), MediaType.parseMediaType("application/x-yaml"));
        }
    }
}
```

Spring Boot
```java
@Component
public class YamlJackson2HttpMessageConverter extends AbstractJackson2HttpMessageConverter {
    YamlJackson2HttpMessageConverter() {
        super(new YAMLMapper(), MediaType.parseMediaType("application/x-yaml"));
    }
}
```
# Controller Example
```java
@RestController
@RequestMapping("/")
public class ExampleController {
    @GetMapping(value = "/test", produces = "application/x-yaml")
    public Dto test() {
        return Dto.builder().build();
    }
}
```
