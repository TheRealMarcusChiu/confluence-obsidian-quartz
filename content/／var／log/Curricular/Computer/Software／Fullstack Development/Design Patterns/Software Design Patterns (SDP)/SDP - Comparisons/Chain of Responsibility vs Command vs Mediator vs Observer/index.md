---
title: "Chain of Responsibility vs Command vs Mediator vs Observer"
created: 2022-02-28T05:20:36.908-06:00
modified: 2022-02-28T05:22:46.612-06:00
parent: "[[SDP - Comparisons]]"
children: []
---
````excerpt
[[Chain of Responsibility (CoR) Pattern|Chain of Responsibility]], [[Command Pattern|Command]], [[Mediator Pattern|Mediator]], and [[Observer Pattern (Publisher-Subscriber Pattern)|Observer]] address various ways of connecting senders and receivers of requests:
- <em>Chain of Responsibility</em> passes a request sequentially along a dynamic chain of potential receivers until one of them handles it
- <em>Command</em> establishes unidirectional connections between senders and receivers
- <em>Mediator</em> eliminates direct connections between senders and receivers, forcing them to communicate indirectly via a mediator object
- <em>Observer</em> lets receivers dynamically subscribe to and unsubscribe from receiving requests
````
^excerpt
