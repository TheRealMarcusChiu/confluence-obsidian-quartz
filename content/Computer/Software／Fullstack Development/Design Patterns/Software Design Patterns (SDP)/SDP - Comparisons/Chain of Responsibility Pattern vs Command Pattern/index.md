---
title: "Chain of Responsibility Pattern vs Command Pattern"
created: 2022-02-28T05:08:25.443-06:00
modified: 2022-02-28T05:19:16.863-06:00
parent: "[[SDP - Comparisons]]"
children: []
---
````excerpt
[[Chain of Responsibility (CoR) Pattern|Chain of Responsibility Pattern]] vs [[Command Pattern]]
- Handlers in the <em>Chain of Responsibility Pattern</em> can be implemented as <em>Commands</em>. In this case, you can execute a lot of different handler-command-operations over the same request-context object
- Requests in the <em>Chain of Responsibility Pattern</em> can be implemented as <em>Commands</em>. In this case, you can execute the same request-command-operation through a series of different handler-contexts
````
^excerpt
