---
title: "Adapter Pattern vs Bridge Pattern"
created: 2026-01-10T23:09:31.795-06:00
modified: 2026-01-10T23:31:11.978-06:00
parent: "[[SDP - Comparisons]]"
children: []
---
````excerpt
[[Adapter Pattern]] vs [[Bridge Pattern]]:
- <font style="color: rgb(122,134,154);">Bridge</font> and <font style="color: rgb(122,134,154);">Adapter</font> both point at an existing type. But the bridge will point at an abstract type, and the adapter might point to a concrete type. The bridge will allow you to pair the implementation at runtime, whereas the adapter usually won't
- <font style="color: rgb(122,134,154);">Adapter</font> makes things work after they're designed; <font style="color: rgb(122,134,154);">Bridge</font> makes them work before they are.
- <font style="color: rgb(122,134,154);">Bridge</font> is designed up-front to let the abstraction and the implementation vary independently. <font style="color: rgb(122,134,154);">Adapter</font> is retrofitted to make unrelated classes work together
- [Difference between Bridge pattern and Adapter pattern](https://stackoverflow.com/questions/1425171/difference-between-bridge-pattern-and-adapter-pattern/35320081#35320081)
- [When do you use the Bridge Pattern? How is it different from Adapter pattern?](https://stackoverflow.com/questions/319728/when-do-you-use-the-bridge-pattern-how-is-it-different-from-adapter-pattern/37514779#37514779)
````
^excerpt
