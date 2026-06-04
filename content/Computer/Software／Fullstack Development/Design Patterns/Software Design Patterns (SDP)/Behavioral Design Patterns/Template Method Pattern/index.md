---
title: "Template Method Pattern"
created: 2021-07-09T22:46:56.373-05:00
modified: 2026-01-10T23:47:09.973-06:00
parent: "[[Behavioral Design Patterns]]"
children: []
---
###### Template Method Pattern
````excerpt
- is a [[Behavioral Design Patterns|behavioral design pattern]] that defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps of the algorithm without changing its structure
````
^excerpt

# Solution

two types of steps:
- abstract steps must be implemented by every subclass
- optional steps already have some default implementation, but still can be overridden if needed

# Code Structure
![[Template Method Pattern/template-structure.png|500]]
# Comparisons

> [!expand]- Click here to expand...
> ![[Factory Method Pattern vs Template Method Pattern#^excerpt]]
>
> ![[Step Builder Pattern vs Template Method Pattern#^excerpt]]
>
> ![[Strategy Pattern vs Template Method Pattern#^excerpt]]
# Resources
- [https://refactoring.guru/design-patterns/template-method](https://refactoring.guru/design-patterns/template-method)
