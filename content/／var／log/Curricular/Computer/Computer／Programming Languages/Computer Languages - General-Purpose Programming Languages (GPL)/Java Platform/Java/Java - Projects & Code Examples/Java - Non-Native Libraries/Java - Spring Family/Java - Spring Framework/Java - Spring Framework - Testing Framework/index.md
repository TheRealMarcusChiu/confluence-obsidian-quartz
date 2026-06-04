---
title: "Java - Spring Framework - Testing Framework"
created: 2021-03-28T15:25:48.782-05:00
modified: 2022-12-22T09:46:14.878-06:00
parent: "[[Java - Spring Framework]]"
children:
  - "[[Java - Spring - Test - @DynamicPropertySource]]"
  - "[[Java - Spring - Test - Context - @ActiveProfiles]]"
  - "[[Java - Spring - Test - Context - @ContextConfiguration]]"
  - "[[Java - Spring - Test - Context - @SpringApplicationConfiguration & @WebIntegration]]"
  - "[[Java - Spring - Test - Context - @SpringBootTest]]"
  - "[[Java - Spring - Test - Context - @TestConfiguration]]"
  - "[[Java - Spring - Test - Unit Testing (@Autowired vs Constructor Injection - JUnit4&5)]]"
---
similar to [[Java - Testing Frameworks]]
# Provided Libraries

The <code><font style="color: rgb(122,134,154);">spring-boot-starter-test</font></code> contains the following provided libraries:
- [[Java - JUnit4 - JUnit5 Jupiter|JUnit 5]] - the de-facto standard for unit testing Java applications
- [Spring Test](https://docs.spring.io/spring-framework/docs/5.3.10/reference/html/testing.html#integration-testing) & Spring Boot Test - utilities and integration test support for Spring Boot applications
- [AssertJ](https://assertj.github.io/doc/) - a fluent assertion library
- [Hamcrest](https://github.com/hamcrest/JavaHamcrest) - a library of matcher objects (also known as constraints or predicates)
- [[Java - Mockito|Mockito]] - a Java mocking framework
- [JSONassert](https://github.com/skyscreamer/JSONassert) - an assertion library for JSON
- [JsonPath](https://github.com/jayway/JsonPath) - [[XML Path Language (XPath)|XPath]] for JSON

# Code Examples
- [https://github.com/SpringBootMarcusChiu/test-framework-example-boot-2.2.11.git](https://github.com/SpringBootMarcusChiu/test-framework-example-boot-2.2.11.git)

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
