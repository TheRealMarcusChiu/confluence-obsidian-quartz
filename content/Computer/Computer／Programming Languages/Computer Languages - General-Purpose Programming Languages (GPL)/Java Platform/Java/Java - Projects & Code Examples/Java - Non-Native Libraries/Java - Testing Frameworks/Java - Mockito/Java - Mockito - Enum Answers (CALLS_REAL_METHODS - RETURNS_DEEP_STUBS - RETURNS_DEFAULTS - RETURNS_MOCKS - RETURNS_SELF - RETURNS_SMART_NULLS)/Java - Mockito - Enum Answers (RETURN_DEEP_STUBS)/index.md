---
title: "Java - Mockito - Enum Answers (RETURN_DEEP_STUBS)"
created: 2021-07-15T20:22:33.424-05:00
modified: 2021-07-15T20:25:49.305-05:00
parent: "[[Java - Mockito - Enum Answers (CALLS_REAL_METHODS - RETURNS_DEEP_STUBS - RETURNS_DEFAULTS - RETURNS_MOCKS - RETURNS_SELF - RETURNS_SMART_NULLS)]]"
children: []
---
# Example Use Case
```
Foo mock = mock(Foo.class, RETURNS_DEEP_STUBS);

// note that we're stubbing a chain of methods here: getBar().getName()
when(mock.getBar().getName()).thenReturn("deep");

// note that we're chaining method calls: getBar().getName()
assertEquals("deep", mock.getBar().getName());
```
# How Deep Stub Work Internally?
```
//this:
Foo mock = mock(Foo.class, RETURNS_DEEP_STUBS);
when(mock.getBar().getName(), "deep");

//is equivalent of
Foo foo = mock(Foo.class);
Bar bar = mock(Bar.class);
when(foo.getBar()).thenReturn(bar);
when(bar.getName()).thenReturn("deep");
```
# Limitations

This feature will not work when any return type of methods included in the chain cannot be mocked (for example: is a primitive or a final class). This is because of java type system
# Resources
- [https://www.javadoc.io/static/org.mockito/mockito-core/2.6.9/org/mockito/Mockito.html#RETURNS_DEEP_STUBS](https://www.javadoc.io/static/org.mockito/mockito-core/2.6.9/org/mockito/Mockito.html#RETURNS_DEEP_STUBS)
