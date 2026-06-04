---
title: "Java - Spring - ApplicationContextInitializer - JUnit Test"
created: 2021-06-02T20:26:58.820-05:00
modified: 2021-06-02T20:29:08.249-05:00
parent: "[[Java - Spring - ApplicationContext - ApplicationContextInitializer]]"
children: []
---
given a custom [[Java - Spring - ApplicationContext - ApplicationContextInitializer|ApplicationContextInitializer]], how would you [[Java - JUnit4 - JUnit5 Jupiter|JUnit]] test it?
# JUnit Test

to test <code>MyApplicationContextInitializer.class</code> pass it through the [[Java - Spring - Test - Context - @ContextConfiguration|@ContextConfiguration]] annotation
```
@ExtendWith(SpringExtension.class)
@ContextConfiguration(classes = AppConfig.class, initializers = MyApplicationContextInitializer.class)
public class MyServiceTests {

  @Autowired
  private MyService dataService;

  @Test
  public void testDoSomething() {
      String s = dataService.doSomething();
      System.out.println(s);
      Assert.assertEquals("in MyServiceA", s);
  }
}
```
