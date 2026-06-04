---
title: "Command Pattern vs Strategy Pattern"
created: 2022-02-28T05:24:51.324-06:00
modified: 2022-02-28T05:26:18.907-06:00
parent: "[[SDP - Comparisons]]"
children: []
---
````excerpt
[[Command Pattern|Command]] and [[Strategy Pattern|Strategy]] may look similar because you can use both to parameterize an object with some action. However, they have very different intents.
- <em>Command Pattern</em> can be used to convert any operation into an object. The operation’s parameters become fields of that object. The conversion lets you defer execution of the operation, queue it, store the history of commands, send commands to remote services, etc
- <em>Strategy Pattern</em> usually describes different ways of doing the same thing, letting you swap these algorithms within a single context class
````
^excerpt
