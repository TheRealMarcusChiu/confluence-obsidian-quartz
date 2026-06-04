---
title: "Mediator Pattern vs Observer Pattern"
created: 2022-02-28T05:42:13.444-06:00
modified: 2022-02-28T05:43:31.031-06:00
parent: "[[SDP - Comparisons]]"
children: []
---
````excerpt
[[Mediator Pattern]] and [[Observer Pattern (Publisher-Subscriber Pattern)]] differences are often elusive. In most cases, you can implement either of these patterns; but sometimes you can apply both simultaneously. Let’s see how we can do that.
- The primary goal of <em>Mediator</em> is to eliminate mutual dependencies among a set of system components. Instead, these components become dependent on a single mediator object. The goal of <em>Observer</em> is to establish dynamic one-way connections between objects, where some objects act as subordinates of others
- There’s a popular implementation of the <em>Mediator</em> pattern that relies on <em>Observer</em>. The mediator object plays the role of publisher, and the components act as subscribers which subscribe to and unsubscribe from the mediator’s events. When <em>Mediator</em> is implemented this way, it may look very similar to <em>Observer</em>.
- When you’re confused, remember that you can implement the Mediator pattern in other ways. For example, you can permanently link all the components to the same mediator object. This implementation won’t resemble <em>Observer</em> but will still be an instance of the Mediator pattern.
- Now imagine a program where all components have become publishers, allowing dynamic connections between each other. There won’t be a centralized mediator object, only a distributed set of observers.
````
^excerpt
