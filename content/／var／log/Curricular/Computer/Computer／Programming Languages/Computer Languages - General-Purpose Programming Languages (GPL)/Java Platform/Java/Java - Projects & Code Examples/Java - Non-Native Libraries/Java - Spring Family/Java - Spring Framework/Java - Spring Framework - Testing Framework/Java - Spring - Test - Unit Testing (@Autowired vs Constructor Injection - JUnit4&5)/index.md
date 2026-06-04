---
title: "Java - Spring - Test - Unit Testing (@Autowired vs Constructor Injection - JUnit4&5)"
created: 2021-04-02T23:10:18.179-05:00
modified: 2021-06-02T21:19:53.316-05:00
parent: "[[Java - Spring Framework - Testing Framework]]"
children: []
---
code: [https://github.com/SpringBootMarcusChiu/test-framework-speedtest-autowired-constructor-reflectiontestutils](https://github.com/SpringBootMarcusChiu/test-framework-speedtest-autowired-constructor-reflectiontestutils)
# <strong>1 - Objective</strong>

There are 2 ways to do [[Dependency Injection (DI)|dependency injection]]:
- @Autowired injection
- constructor injection

And this affects the way we write Unit Tests:
- if @Autowired was chosen as Injection, then there are 2 ways to create Unit Test, either:
	- use SpringRunner.class/SpringExtension.class - this loads the entire Spring framework
	- use ReflectionTestUtil and MockitoRunner.class/MockitoExtension.class - this does not load the entire Spring framework
- if constructor injection was chosen, then to create a Unit Test we:
	- use MockitoRunner.class/MockitoExtension.class

# <strong>2 - Injection with @Autowired - Code Examples</strong>
```
@Service
public class BiggerTestService {

    @Autowired
    private SmallerTestService smallerTestService;

    public String getTestServiceState() {
        return smallerTestService.getState();
    }
}
```
```
@Service
public class SmallerTestService {
    private String state;

    public SmallerTestService(String state) {
        this.state = state;
    }

    public String getState() {
        return state;
    }
}
```
### Testing With @Autowired Injection with JUnit 4

> [!expand]- testing with SpringRunner.class
> ```
> import org.junit.Test;
> import org.junit.runner.RunWith;
> import org.mockito.Mockito;
> import org.springframework.beans.factory.annotation.Autowired;
> import org.springframework.boot.test.mock.mockito.MockBean;
> import org.springframework.context.annotation.Import;
> import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
>
> import static org.junit.jupiter.api.Assertions.assertEquals;
>
> @RunWith(SpringJUnit4ClassRunner.class) // or SpringRunner.class
> @Import(BiggerTestService.class)
> public class Dependency1Test {
>
>     @Autowired
>     BiggerTestService biggerTestService;
>
>     @MockBean
>     SmallerTestService smallerTestService;
>
>     @org.junit.Test
>     public void test1() {
>         Mockito.when(smallerTestService.getState()).thenReturn("Mock");
>         String actual = biggerTestService.getTestServiceState();
>         assertEquals("Mock", actual);
>     }
> }
> ```

> [!expand]- testing with ReflectionTestUtils
> ```
> import org.junit.Before;
> import org.junit.Test;
> import org.junit.runner.RunWith;
> import org.mockito.Mock;
> import org.mockito.Mockito;
> import org.mockito.junit.MockitoJUnitRunner;
> import org.springframework.test.util.ReflectionTestUtils;
>
> import static org.junit.Assert.assertEquals;
>
> @RunWith(MockitoJUnitRunner.class)
> public class Dependency1Test {
>
>     BiggerTestService biggerTestService;
>
>     @Mock
>     SmallerTestService smallerTestService;
>
>     @Before
>     public void setup() {
>         biggerTestService = new BiggerTestService();
>         ReflectionTestUtils.setField(biggerTestService, "smallerTestService", smallerTestService);
>     }
>
>     @org.junit.Test
>     public void test1() {
>         Mockito.when(smallerTestService.getState()).thenReturn("Changed Mock");
>         String actual = biggerTestService.getTestServiceState();
>         assertEquals("Changed Mock", actual);
>     }
> }
> ```
### Testing With @Autowired Injection with JUnit5

> [!expand]- testing with SpringExtension.class
> ```
> import org.junit.jupiter.api.Test;
> import org.junit.jupiter.api.extension.ExtendWith;
> import org.mockito.Mockito;
> import org.springframework.beans.factory.annotation.Autowired;
> import org.springframework.boot.test.mock.mockito.MockBean;
> import org.springframework.context.annotation.Import;
> import org.springframework.test.context.junit.jupiter.SpringExtension;
>
> import static org.junit.jupiter.api.Assertions.assertEquals;
>
> @ExtendWith(SpringExtension.class)
> @Import(BiggerTestService.class)
> public class Dependency1Test {
>
>     @Autowired
>     BiggerTestService biggerTestService;
>
>     @MockBean
>     SmallerTestService smallerTestService;
>
>     @org.junit.jupiter.api.Test
>     public void test1() {
>         Mockito.when(smallerTestService.getState()).thenReturn("Mock");
>         String actual = biggerTestService.getTestServiceState();
>         assertEquals("Mock", actual);
>     }
> }
> ```

> [!expand]- testing with ReflectionTestUtils
> ```
> import org.junit.jupiter.api.BeforeEach;
> import org.junit.jupiter.api.Test;
> import org.junit.jupiter.api.extension.ExtendWith;
> import org.junit.runner.RunWith;
> import org.mockito.Mock;
> import org.mockito.Mockito;
> import org.mockito.junit.MockitoJUnitRunner;
> import org.mockito.junit.jupiter.MockitoExtension;
> import org.springframework.test.util.ReflectionTestUtils;
>
> import static org.junit.Assert.assertEquals;
>
> @ExtendWith(MockitoExtension.class)
> public class Dependency1Test {
>
>     BiggerTestService biggerTestService;
>
>     @Mock
>     SmallerTestService smallerTestService;
>
>     @BeforeEach
>     public void setup() {
>         biggerTestService = new BiggerTestService();
>         ReflectionTestUtils.setField(biggerTestService, "smallerTestService", smallerTestService);
>     }
>
>     @org.junit.jupiter.api.Test
>     public void test1() {
>         Mockito.when(smallerTestService.getState()).thenReturn("Changed Mock");
>         String actual = biggerTestService.getTestServiceState();
>         assertEquals("Changed Mock", actual);
>     }
> }
> ```
# <strong>3 - Injection with Constructor - Code Example</strong>
```
@Service
public class BiggerTestService {

    private final SmallerTestService smallerTestService;

    public BiggerTestService(SmallerTestService smallerTestService) {
        this.smallerTestService = smallerTestService;
    }

    public String getTestServiceState() {
        return smallerTestService.getState();
    }
}
```
```
@Service
public class SmallerTestService {
    private String state;

    public SmallerTestService(String state) {
        this.state = state;
    }

    public String getState() {
        return state;
    }
}
```
### Testing With Constructor Injection with JUnit4

> [!expand]- Click here to expand...
> ```
> import org.junit.Before;
> import org.junit.Test;
> import org.junit.runner.RunWith;
> import org.mockito.Mock;
> import org.mockito.Mockito;
> import org.mockito.junit.MockitoJUnitRunner;
>
> import static org.junit.Assert.assertEquals;
>
> @RunWith(MockitoJUnitRunner.class)
> public class Dependency1Test {
>
>     BiggerTestService biggerTestService;
>
>     @Mock
>     SmallerTestService smallerTestService;
>
>     @Before
>     public void setup() {
>         biggerTestService = new BiggerTestService(smallerTestService);
>     }
>
>     @org.junit.Test
>     public void test1() {
>         Mockito.when(smallerTestService.getState()).thenReturn("Changed Mock");
>         String actual = biggerTestService.getTestServiceState();
>         assertEquals("Changed Mock", actual);
>     }
> }
> ```
### Testing With Constructor Injection with JUnit5

> [!expand]- Click here to expand...
> ```
> import org.junit.jupiter.api.BeforeEach;
> import org.junit.jupiter.api.Test;
> import org.junit.jupiter.api.extension.ExtendWith;
> import org.mockito.Mock;
> import org.mockito.Mockito;
> import org.mockito.junit.jupiter.MockitoExtension;
>
> import static org.junit.Assert.assertEquals;
>
> @ExtendWith(MockitoExtension.class)
> public class Dependency1Test {
>
>     BiggerTestService biggerTestService;
>
>     @Mock
>     SmallerTestService smallerTestService;
>
>     @BeforeEach
>     public void setup() {
>         biggerTestService = new BiggerTestService(smallerTestService);
>     }
>
>     @org.junit.jupiter.api.Test
>     public void test1() {
>         Mockito.when(smallerTestService.getState()).thenReturn("Changed Mock");
>         String actual = biggerTestService.getTestServiceState();
>         assertEquals("Changed Mock", actual);
>     }
> }
> ```
