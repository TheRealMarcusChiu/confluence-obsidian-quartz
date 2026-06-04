---
title: "Java - Mockito - @Mock @Spy @InjectMocks"
created: 2021-04-28T09:52:22.743-05:00
modified: 2021-07-15T17:08:46.142-05:00
parent: "[[Java - Mockito]]"
children: []
---
- <font style="color: rgb(128,128,128);"><strong><code>@Mock</code></strong></font> creates a [[Test Doubles (Dummy - Fake - Stub - Spy - Mock)|mock]]
- <font style="color: rgb(128,128,128);"><strong><code>@Spy</code></strong></font> creates a [[Test Doubles (Dummy - Fake - Stub - Spy - Mock)|spy]]
- <strong><code><font style="color: rgb(128,128,128);">@InjectMocks</font></code></strong> creates an instance of the class and injects the mocks that are created with the <font style="color: rgb(128,128,128);"><strong><code>@Mock</code></strong></font> or <strong><code><font style="color: rgb(128,128,128);">@Spy</font></code></strong> annotations into this instance

In [[Java - JUnit4 - JUnit5 Jupiter|JUnit4]] to initialize these mocks and inject them, you either use: <font style="color: rgb(128,128,128);"><strong><code>@RunWith(MockitoJUnitRunner.class)</code></strong></font> or <font style="color: rgb(128,128,128);"><strong><code>Mockito.initMocks(this)</code></strong></font>.

In [[Java - JUnit4 - JUnit5 Jupiter|JUnit5]] to initialize these mocks and inject them, you must use <font style="color: rgb(128,128,128);"><strong><code>@ExtendWith(MockitoExtension.class)</code></strong></font>.
```
@RunWith(MockitoJUnitRunner.class)  // JUnit 4 option 1
@ExtendWith(MockitoExtension.class) // JUnit 5
public class SomeManagerTest {

    @InjectMocks
    private SomeManager someManager;
    @Mock
    private SomeDependency someDependency; // this mock will be injected into someManager

	@Test
	void test() {
		Mockito.initMocks(this);    // JUnit4 option 2
		// continue test
	}
}

public class SomeManager {
	public SomeManager(SomeDependency someDependency) { }
}

public class SomeDependency { }
```
