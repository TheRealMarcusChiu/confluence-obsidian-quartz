---
title: "Java - Resilience4j"
created: 2021-03-28T10:58:22.369-05:00
modified: 2023-04-09T12:38:13.125-05:00
parent: "[[Java - Circuit Breaker Pattern & Fault／Latency Tolerance／Resilience Frameworks]]"
children: []
---
###### Resilience4j
- is a lightweight, easy-to-use fault tolerance library inspired by [[Java - Hystrix (deprecated)|Netflix Hystrix]], but designed for Java 8 and functional programming
- Lightweight, because the library only uses [[Java - vavr (Javaslang)|Vavr]], which does not have any other external library dependencies. Netflix Hystrix, in contrast, has a compile dependency on Archaius which has many more external library dependencies such as Guava and Apache Commons Configuration
- provides higher-order functions (decorators) to enhance any functional interface, lambda expression, or method reference with a Circuit Breaker, Rate Limiter, Retry or Bulkhead. You can stack more than one decorator on any functional interface, lambda expression, or method reference. The advantage is that you have the choice to select the decorators you need and nothing else.

# Framework Modules
- [[Java - Spring Cloud - Resilience4j]]

# Resources
- [https://resilience4j.readme.io/docs/getting-started](https://resilience4j.readme.io/docs/getting-started)
