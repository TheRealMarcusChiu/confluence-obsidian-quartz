---
title: "Chain of Responsibility Pattern vs Decorator Pattern"
created: 2022-02-28T05:37:05.468-06:00
modified: 2022-02-28T05:38:27.968-06:00
parent: "[[SDP - Comparisons]]"
children: []
---
````excerpt
[[Chain of Responsibility (CoR) Pattern|Chain of Responsibility Pattern]] and [[Decorator (Wrapper - Smart Proxy) Pattern|Decorator Pattern]] have very similar class structures. Both patterns rely on recursive composition to pass the execution through a series of objects. However, there are several crucial differences.
- The <em>CoR</em> handlers can execute arbitrary operations independently of each other. They can also stop passing the request further at any point. On the other hand, various <em>Decorators</em> can extend the object’s behavior while keeping it consistent with the base interface. In addition, decorators aren’t allowed to break the flow of the request.
````
^excerpt
