---
title: "Java - Mockito - Enum Answers (RETURNS_SMART_NULLS)"
created: 2021-07-15T20:37:54.279-05:00
modified: 2021-07-15T20:39:24.303-05:00
parent: "[[Java - Mockito - Enum Answers (CALLS_REAL_METHODS - RETURNS_DEEP_STUBS - RETURNS_DEFAULTS - RETURNS_MOCKS - RETURNS_SELF - RETURNS_SMART_NULLS)]]"
children: []
---
This implementation can be helpful when working with legacy code. Unstubbed methods often return null. If your code uses the object returned by an unstubbed call you get a NullPointerException. This implementation of Answer <strong>returns SmartNull instead of null</strong>. <code>SmartNull</code> gives nicer exception message than NPE because it points out the line where unstubbed method was called. You just click on the stack trace.

<code>ReturnsSmartNulls</code> first tries to return ordinary values (zeros, empty collections, empty string, etc.) then it tries to return SmartNull. If the return type is final then plain <code>null</code> is returned.

<code>ReturnsSmartNulls</code> will be probably the default return values strategy in Mockito 3.0.0
# Example Use Case
```
Foo mock = mock(Foo.class, RETURNS_SMART_NULLS);

// calling unstubbed method here:
Stuff stuff = mock.getStuff();

// using object returned by unstubbed call:
stuff.doSomething();

// Above doesn't yield NullPointerException this time!
// Instead, SmartNullPointerException is thrown.
// Exception's cause links to unstubbed mock.getStuff() - just click on the stack trace.
```
# Resources
- [https://www.javadoc.io/static/org.mockito/mockito-core/2.6.9/org/mockito/Mockito.html#RETURNS_SMART_NULLS](https://www.javadoc.io/static/org.mockito/mockito-core/2.6.9/org/mockito/Mockito.html#RETURNS_SMART_NULLS)
