---
title: "Strategy Pattern vs Template Method Pattern"
created: 2023-06-02T17:06:23.412-05:00
modified: 2026-01-10T23:42:20.529-06:00
parent: "[[SDP - Comparisons]]"
children: []
---
````excerpt
[[Strategy Pattern]] vs [[Template Method Pattern]]
- <font style="color: rgb(122,134,154);">Template Method Pattern</font> is based on inheritance: it lets you alter parts of an algorithm by extending those parts in subclasses
- <font style="color: rgb(122,134,154);">Strategy Pattern</font> is based on composition: you can alter parts of the object’s behavior by supplying it with different strategies that correspond to that behavior
- Template Method Pattern works at the class level, so it’s static after compile-time
- Strategy Pattern works on the object level, letting you switch behaviors at runtime
````
^excerpt
