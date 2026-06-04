---
title: "Java - Mockito - Enum Answer (CALLS_REAL_METHODS)"
created: 2021-07-15T20:25:54.021-05:00
modified: 2021-07-15T20:27:57.036-05:00
parent: "[[Java - Mockito - Enum Answers (CALLS_REAL_METHODS - RETURNS_DEEP_STUBS - RETURNS_DEFAULTS - RETURNS_MOCKS - RETURNS_SELF - RETURNS_SMART_NULLS)]]"
children: []
---
used for partial mocking
# Example Use Case
```
Foo mock = mock(Foo.class, CALLS_REAL_METHODS);

// this calls the real implementation of Foo.getSomething()
value = mock.getSomething();

when(mock.getSomething()).thenReturn(fakeValue);

// now fakeValue is returned
value = mock.getSomething();
```
# Resources
- [https://www.javadoc.io/static/org.mockito/mockito-core/2.6.9/org/mockito/Mockito.html#CALLS_REAL_METHODS](https://www.javadoc.io/static/org.mockito/mockito-core/2.6.9/org/mockito/Mockito.html#CALLS_REAL_METHODS)
