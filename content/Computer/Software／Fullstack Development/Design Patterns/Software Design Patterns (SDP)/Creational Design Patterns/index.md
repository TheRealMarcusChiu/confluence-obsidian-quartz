---
title: "Creational Design Patterns"
created: 2019-03-15T00:43:42.464-05:00
modified: 2026-01-10T17:24:28.030-06:00
parent: "[[Software Design Patterns (SDP)]]"
children:
  - "[[Builder Pattern]]"
  - "[[Factory Design Patterns]]"
  - "[[Flyweight Pattern]]"
  - "[[Multiton Design Pattern]]"
  - "[[Object Pool]]"
  - "[[Prototype Builder Pattern]]"
  - "[[Prototype Pattern]]"
  - "[[Singleton Design Pattern]]"
  - "[[Step Builder Pattern]]"
---
###### Creational Design Patterns
````excerpt
- provide various object creation mechanisms, which increase flexibility and reuse of existing code
````
^excerpt

# Creational Design Patterns

```merge-table
{
  "rows": [
    [
      {
        "content": "[[Factory Design Patterns]]",
        "header": true,
        "bg": "#F4F5F7",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "[[Static Factory Method Pattern]]",
        "bg": "#F4F5F7"
      },
      "SINGLE method creating objects of SAME/SIMILAR type without specifying the concrete class (not overridable)"
    ],
    [
      {
        "content": "[[Factory Method Pattern]]",
        "bg": "#F4F5F7"
      },
      "SINGLE method creating objects of SAME/SIMILAR type without specifying the concrete class (overridable)"
    ],
    [
      {
        "content": "[[Abstract Factory Pattern]]",
        "bg": "#F4F5F7"
      },
      "MULTIPLE methods creating a FAMILY of DIFFERENT and/or RELATED object types without specifying the objects' concrete classes (overridable)"
    ],
    [
      {
        "content": "[[Factory of Factory／Factories (FoF) Pattern|Factory of Factory/Factories (FoF) Pattern]]",
        "bg": "#F4F5F7"
      },
      "a factory that produces customizable factories during runtime"
    ],
    [
      {
        "content": "[[Factory Kit Pattern]]",
        "bg": "#F4F5F7"
      },
      "provides a way to customizable factories during runtime"
    ],
    [
      {
        "header": true,
        "bg": "#F4F5F7",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "[[Builder Pattern]]",
        "bg": "#F4F5F7"
      },
      "used to separate the construction of a complex object from its representation"
    ],
    [
      {
        "content": "[[Step Builder Pattern]]",
        "bg": "#F4F5F7"
      },
      "an extension of the <em>Builder Pattern</em> that guides the user through the construction of the complex object"
    ],
    [
      {
        "header": true,
        "bg": "#F4F5F7",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "[[Prototype Pattern]]",
        "bg": "#F4F5F7"
      },
      "used to create objects that are clones of a prototypical instance"
    ],
    [
      {
        "content": "[[Prototype Builder Pattern]]",
        "bg": "#F4F5F7"
      },
      "used to create builder objects that are clones of a prototypical instance and/or builder-instance"
    ],
    [
      {
        "header": true,
        "bg": "#F4F5F7",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "[[Singleton Design Pattern|Singleton Pattern]]",
        "bg": "#F4F5F7"
      },
      "used to ensure a SINGLE instance of a class, and provides global access to it"
    ],
    [
      {
        "content": "[[Multiton Design Pattern]]",
        "bg": "#F4F5F7"
      },
      "used to ensure N instances of a class, and provides global access to it"
    ],
    [
      {
        "content": "[[Object Pool]]",
        "bg": "#F4F5F7"
      },
      "used to provide a cache of instantiated objects and for tracking which ones are in use and which are available"
    ],
    [
      {
        "content": "[[Flyweight Pattern]]",
        "bg": "#F4F5F7"
      },
      "used to control large numbers of fine-grain object creation, by sharing to reduce memory usage"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
