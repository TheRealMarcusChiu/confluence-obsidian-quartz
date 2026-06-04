---
title: "Java - Mockito - Enum Answers (RETURNS_DEFAULTS)"
created: 2021-07-15T20:39:28.681-05:00
modified: 2021-07-15T20:45:19.585-05:00
parent: "[[Java - Mockito - Enum Answers (CALLS_REAL_METHODS - RETURNS_DEEP_STUBS - RETURNS_DEFAULTS - RETURNS_MOCKS - RETURNS_SELF - RETURNS_SMART_NULLS)]]"
children: []
---
The <strong>default</strong> <code>Answer</code> of every mock <strong>if</strong> the mock was not stubbed. Typically it just returns some empty value.

[<code>Answer</code>](https://www.javadoc.io/static/org.mockito/mockito-core/2.6.9/org/mockito/stubbing/Answer.html) can be used to define the return values of unstubbed invocations.

This implementation first tries the global configuration and if there is no global configuration then it will use a default answer that returns zeros, empty collections, nulls, etc.
# Example Use Case
```
@Test
void test() {
    Tester tester = mock(Tester.class, RETURNS_DEFAULTS); // same as mock(Tester.class);
    List<String> actualList = tester.list();
    assertTrue(actualList.isEmpty());
}

public class Tester {

    public List<String> list() {
        return List.of("Hello");
    }

    public Integer integer() {
        return 9001;
    }
}
```
# Resources
- [https://www.javadoc.io/static/org.mockito/mockito-core/2.6.9/org/mockito/Mockito.html#RETURNS_DEFAULTS](https://www.javadoc.io/static/org.mockito/mockito-core/2.6.9/org/mockito/Mockito.html#RETURNS_DEFAULTS)
