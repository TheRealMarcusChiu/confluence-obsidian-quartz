---
title: "Java - Spring - Test - Context - @ContextConfiguration"
created: 2021-05-29T11:10:46.697-05:00
modified: 2021-05-29T11:15:47.120-05:00
parent: "[[Java - Spring Framework - Testing Framework]]"
children: []
---
# 1 - Overview
- from Spring Test Framework
- used for Spring context (including Spring Boot)
- loads an ApplicationContext for Spring integration test
- it does not enable logging nor loads properties from application.properties (therefore use <code>@SpringApplicationConfiguration</code> or <code>@SpringBootTest</code>)

# 2 - Code Example

[[Java - JUnit4 - JUnit5 Jupiter|JUnit5]] code example
```
@ExtendWith(SpringExtension.class)
@ContextConfiguration(classes = ExampleConfig.class)
public class ContextConfigurationJUnit5ExampleTest {

    @Autowired
    Example1Component example1Component;
    @Autowired
    Example2Component example2Component;

    @Test
    public void test() {
        Assert.notNull(example1Component, "example1Component is null");
        Assert.notNull(example2Component, "example2Component is null");
    }
}
```

[[Java - JUnit4 - JUnit5 Jupiter|JUnit4]] code example
```
same as JUnit5 but replace @ExtendWith(SpringExtension.class) with @RunWith(SpringRunner.class)
```
