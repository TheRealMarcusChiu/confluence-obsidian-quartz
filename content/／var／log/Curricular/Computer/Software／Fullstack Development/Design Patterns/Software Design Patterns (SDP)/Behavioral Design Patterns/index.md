---
title: "Behavioral Design Patterns"
created: 2019-03-15T00:34:26.468-05:00
modified: 2026-01-11T00:08:42.473-06:00
parent: "[[Software Design Patterns (SDP)]]"
children:
  - "[[Acyclic Visitor Pattern]]"
  - "[[Chain of Responsibility (CoR) Pattern]]"
  - "[[Command Pattern]]"
  - "[[Feature Toggle Pattern]]"
  - "[[Iterator Pattern]]"
  - "[[Mediator Pattern]]"
  - "[[Memento Pattern]]"
  - "[[Null Object Design Pattern]]"
  - "[[Observer Pattern (Publisher-Subscriber Pattern)]]"
  - "[[State Pattern]]"
  - "[[Strategy Pattern]]"
  - "[[Template Method Pattern]]"
  - "[[Visitor Pattern]]"
---
###### Behavioral Design Patterns
````excerpt
- are concerned with algorithms and the assignment of responsibilities between objects
````
^excerpt

# Behavioral Design Patterns

```merge-table
{
  "rows": [
    [
      {
        "content": "[[Chain of Responsibility (CoR) Pattern]]",
        "bg": "#F4F5F7"
      },
      "- avoid coupling the sender of a request to its receiver by giving multiple objects a chance to handle the request, chaining the receivers and passing the request along the chain until one handles it"
    ],
    [
      {
        "content": "[[Command Pattern]]",
        "bg": "#F4F5F7"
      },
      "- encapsulate a request as an object, thereby allowing you to parameterize clients with queues, requests, or operations, and support undoable operations"
    ],
    [
      {
        "content": "[[Feature Toggle Pattern]]",
        "bg": "#F4F5F7"
      },
      "- enable or disable features at runtime without deploying new code, allowing dynamic control over functionality for testing, gradual rollouts, or experimentation"
    ],
    [
      {
        "content": "[[Iterator Pattern]]",
        "bg": "#F4F5F7"
      },
      "- provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation"
    ],
    [
      {
        "content": "[[Mediator Pattern]]",
        "bg": "#F4F5F7"
      },
      "- defines an object that encapsulates how a set of objects interact, promoting loose coupling by preventing objects from referring to each other explicitly"
    ],
    [
      {
        "content": "[[Memento Pattern]]",
        "bg": "#F4F5F7"
      },
      "- capture and externalize an object’s internal state so it can be restored later, without violating encapsulation"
    ],
    [
      {
        "content": "[[Null Object Design Pattern]]",
        "bg": "#F4F5F7"
      },
      "- provides an object with a neutral (“do nothing”) behavior as a surrogate for null, so clients can safely call methods without null checks"
    ],
    [
      {
        "content": "[[Observer Pattern (Publisher-Subscriber Pattern)]]",
        "bg": "#F4F5F7"
      },
      "- defines a one-to-many dependency between objects so that when one object (the subject) changes state, all its dependents (observers) are notified and updated automatically"
    ],
    [
      {
        "content": "[[State Pattern]]",
        "bg": "#F4F5F7"
      },
      "- allow an object to alter its behavior when its internal state changes, making it appear as if the object changed its class"
    ],
    [
      {
        "content": "[[Strategy Pattern]]",
        "bg": "#F4F5F7"
      },
      "- defines a family of algorithms that \"solve\" the same thing, put each of them into a separate class, and make their objects interchangeable"
    ],
    [
      {
        "content": "[[Template Method Pattern]]",
        "bg": "#F4F5F7"
      },
      "- defines an overall fixed algorithm in a base class, deferring some steps to subclasses, so subclasses can redefine parts of the algorithm without changing its overall structure"
    ],
    [
      {
        "content": "[[Visitor Pattern]]",
        "bg": "#F4F5F7"
      },
      "- represent an operation to be performed on elements of an object structure, letting you define new operations without changing the classes of the elements"
    ],
    [
      {
        "content": "[Acyclic Visitor Pattern](https://confluence.lan/display/NOT/Acyclic+Visitor+Pattern)",
        "bg": "#F4F5F7"
      },
      "- allow adding new operations to a set of classes without creating cyclic dependencies between the visitor and elements, enabling flexible extension of visitor behavior for only the elements you care about"
    ]
  ]
}
```
