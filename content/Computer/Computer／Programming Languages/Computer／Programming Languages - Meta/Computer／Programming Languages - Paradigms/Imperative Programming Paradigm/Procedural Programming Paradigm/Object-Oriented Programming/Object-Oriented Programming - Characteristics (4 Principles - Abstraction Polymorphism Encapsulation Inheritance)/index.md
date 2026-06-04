---
title: "Object-Oriented Programming - Characteristics (4 Principles - Abstraction Polymorphism Encapsulation Inheritance)"
created: 2022-02-28T23:51:18.545-06:00
modified: 2022-03-06T18:25:21.046-06:00
parent: "[[Object-Oriented Programming]]"
children: []
---
# Object-Oriented Programming - 4 Main Principles

```merge-table
{
  "rows": [
    [
      {
        "content": "Encapsulation",
        "header": true,
        "bg": "#F4F5F7"
      },
      "is achieved when an object keeps its state ENCLOSED from other objects (via private instance fields)"
    ],
    [
      {
        "content": "Abstraction",
        "header": true,
        "bg": "#F4F5F7"
      },
      "is achieved when an object only EXPOSES a high-level mechanism for using it (via public methods)"
    ],
    [
      {
        "content": "Inheritance",
        "header": true,
        "bg": "#F4F5F7"
      },
      "is achieved when an object (child-class) REUSES/OVERRIDES the state and/or code of another object (parent-class)"
    ],
    [
      {
        "content": "Polymorphism",
        "header": true,
        "bg": "#F4F5F7"
      },
      "is achieved when an object (child-class) can be used EXACTLY like its parent (a less strict version of [[Liskov Substitution Principle (LSP) - Subtype|Liskov Substitution Principle]])"
    ]
  ]
}
```
# Object-Oriented Programming - Additional Principles
1. All pre-defined types must be objects
2. All user-defined types must be objects
3. All operations on objects must be done through methods

# Object-Oriented Programming - Essentials & Non-Essentials (according to Alan Kay)

Essentials:
- Encapsulation
- Message passing
- Dynamic binding (the ability for the program to evolve/adapt at runtime)

Non-Essentials:
- Classes
- Class inheritance
- Special treatment for objects/functions/data
- The new keyword
- Polymorphism
- Static types
- Recognizing a class as a “type”
