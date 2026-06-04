---
title: "Facade Pattern vs Mediator Pattern"
created: 2022-02-28T05:41:14.787-06:00
modified: 2022-02-28T05:47:42.361-06:00
parent: "[[SDP - Comparisons]]"
children: []
---
````excerpt
[[Facade Pattern]] and [[Mediator Pattern]] have similar jobs: they try to organize collaboration between lots of tightly coupled classes.
- <em>Facade</em> defines a simplified interface to a subsystem of objects, but it doesn’t introduce any new functionality. The subsystem itself is unaware of the facade. Objects within the subsystem can communicate directly
- <em>Mediator</em> centralizes communication between components of the system. The components only know about the mediator object and don’t communicate directly
- both abstracts the functionality of existing classes:
- Mediator abstracts/centralizes arbitrary communications between colleague objects. It routinely "adds value", and it is known/referenced by the colleague objects. In contrast, Facade defines a simpler interface to a subsystem, it doesn't add new functionality, and it is not known by the subsystem classes
````
^excerpt
