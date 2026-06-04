---
title: "Reactive Programming Paradigm (Dataflow)"
created: 2020-10-21T02:23:13.272-05:00
modified: 2022-02-14T20:07:06.604-06:00
parent: "[[Declarative Programming Paradigm]]"
children: []
---
###### Reactive Programming Paradigm (Dataflow)
- type of [[Declarative Programming Paradigm|declarative programming paradigm]] concerned with [data streams](https://en.wikipedia.org/wiki/Stream_(computing)) and the propagation of change
- with this paradigm, it is possible to express static (e.g., arrays) or dynamic (e.g., event emitters) <em>data streams</em> with ease, and also communicate that an inferred dependency within the associated <em>execution model</em> exists, which facilitates the automatic propagation of the changed data flow

# Example

In an [<em>imperative</em> programming](http://confluence.marcuschiu.com/display/NOT/Imperative+Programming) setting:
- 𝐴 = 𝐵 + 𝐶 would mean that 𝐴 is being assigned the result of 𝐵 + 𝐶 in the instant the expression is evaluated, and later, the values of 𝐵 and 𝐶 can be changed with no effect on the value of 𝐴

In [<em>reactive</em> programming](http://confluence.marcuschiu.com/pages/viewpage.action?pageId=381224):
- the value of 𝐴 is automatically updated whenever the values of 𝐵 or 𝐶 change, without the program having to re-execute the statement 𝐴 = 𝐵 + 𝐶 to determine the presently assigned value of 𝐴

# Comparisons With Other Paradigms
- [[Imperative vs Reactive]]
