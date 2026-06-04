---
title: "Java - Spring - Test - Context - @SpringBootTest"
created: 2021-05-29T11:17:41.548-05:00
modified: 2021-05-29T11:37:18.624-05:00
parent: "[[Java - Spring Framework - Testing Framework]]"
children: []
---
# 1 - <code>@SpringBootTest</code> Overview
- used as an alternative to the standard spring-test [[Java - Spring - Test - Context - @ContextConfiguration|@ContextConfiguration]] annotation when you need Spring Boot features (e.g. logging & properties)
- creates the ApplicationContext to be used in tests

# 2 - Code Example

<code>@SpringBootTest</code> automatically picks up all classes annotated with <code>@SpringBootConfiguration</code>/<code>@SpringBootApplication</code>
```
@SpringBootTest
class MainApplicationTest {
  @Test
  void testCheckout() {
  }
}
```

<code>@SpringBootTest(classes = MainApplication.class)</code> will only pick up JUST the specified <code>MainApplication.class</code>
```
@SpringBootTest(classes = MainApplication.class)
class MainApplicationTest {
  @Test
  void testCheckout() {
  }
}
```
# 3 - Customize @SpringBootTest

adding auto-configure
```
@AutoConfigureMockMvc
@SpringBootTest
public class TestApplicationContext_AddAutoConfigures_JUnit5Test {

    @Autowired
    MockMvc mockMvc;

    @Test
    public void test() {
        Assert.assertNotNull(mockMvc);
    }
}
```

adding properties
```
@SpringBootTest(properties = "turkey=legs")
public class TestApplicationContext_AddProperties_JUnit5Test {
    @Value("${turkey}")
    String foo;

    @Test
    public void test() {
        Assert.assertEquals("legs", foo);
    }
}
```
