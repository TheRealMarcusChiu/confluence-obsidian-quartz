---
title: "Adapter Pattern vs Decorator Pattern"
created: 2023-05-31T22:38:39.581-05:00
modified: 2023-05-31T22:42:44.028-05:00
parent: "[[SDP - Comparisons]]"
children: []
---
````excerpt
[[Adapter Pattern]] vs [[Decorator (Wrapper - Smart Proxy) Pattern|Decorator Pattern]]
- main difference is that:
	- the decorator pattern is used to add functionality to an object at run-time without changing the object's [[Method／Function Signatures／Signature vs Method／Function Declarations／Declaration|method signature(s)]]
	- the adapter pattern is used to change the interface of an object to adapt it to another interface (i.e. different method signature(s))
- The decorator pattern is similar to the adapter pattern in that one service "wraps" another. However, in contrast to adapters, decorators expose the same service as what they're decorating.
````
^excerpt
