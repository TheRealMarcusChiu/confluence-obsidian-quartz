---
title: "Java - Spring - Test - @DynamicPropertySource"
created: 2021-05-12T20:11:01.139-05:00
modified: 2021-05-12T20:13:44.573-05:00
parent: "[[Java - Spring Framework - Testing Framework]]"
children: []
---
# 1 - Code
```
@Data
@Component
public class PropertyUsingComponent {
	@Value("${string.one}")
	private String stringOne;
}
```
```
@SpringBootTest
class DynamicPropertySourceExampleTest {

    static String property = "new";

    @Autowired
    private PropertyUsingComponent propertyUsingComponent;

    /**
     * This is the actual part where you make SDN+OGM aware of the different config and the
     * point it to the test harness embedded bolt connector.
     * user name and password are null in that case.
     * This way of configuring tests works since Spring Boot 2.2.6
     *
     * @param registry The target of dynamic configuration
     */
    @DynamicPropertySource
    static void neo4jProperties(DynamicPropertyRegistry registry) {
        registry.add("string.one", () -> property);
    }

    @Test
    void test() {
        assertEquals("new", propertyUsingComponent.getStringOne());
    }
}
```
# 2 - Resources
- article: [https://www.baeldung.com/spring-dynamicpropertysource](https://www.baeldung.com/spring-dynamicpropertysource)
- code: [https://github.com/SpringBootMarcusChiu/test-framework-example-boot-2.2.11.git](https://github.com/SpringBootMarcusChiu/test-framework-example-boot-2.2.11.git)
