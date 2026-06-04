---
title: "Java - Spring - @ComponentScans"
created: 2021-05-29T11:43:47.937-05:00
modified: 2021-05-29T11:45:25.568-05:00
parent: "[[Java - Spring - Context Annotations]]"
children: []
---
# 1 - Overview
- used to specify multiple <code>[[Java - Spring - @ComponentScan @EnableAutoConfiguration @SpringBootApplication|@ComponentScan]]</code> configurations

# 2 - Code Example
```
@ExtendWith(SpringExtension.class)
@ComponentScans({
        @ComponentScan(basePackages = "com.marcus.example"),
        @ComponentScan(basePackageClasses = Extra1Component.class)
})
class ComponentScans1JUnit5ExampleTest {

    @Autowired
    Extra1Component extra1Component;

    @Test
    void test() {
        Assert.notNull(extra1Component, "extraComponent is null");
    }
}
```
