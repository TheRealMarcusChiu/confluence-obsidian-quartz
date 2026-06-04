---
title: "JavaScript - Native - V8 Engine - Web／Browser APIs"
created: 2019-12-18T15:37:29.271-06:00
modified: 2022-05-23T02:29:28.843-05:00
parent: "[[JavaScript]]"
children:
  - "[[JavaScript - Native]]"
  - "[[JavaScript - Web／Browser APIs]]"
---
# How Web/Browser APIs Work With V8 Engine

![](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
# Diagram
![[JavaScript - Native - V8 Engine - Web／Browser APIs/javascript-heap-stack-webapi-callbackqueue-renderqueue.png|450]]
- when Call Stack executes async code, it is passed to the browser to handle it
- once the browser is finished with it, a callback function is placed into the Callback Queue (if one exists)
- when Call Stack is empty, the Event Loop pops the first callback function in Callback Queue and places it into the Call Stack (the next callback function is popped when the Call Stack is empty)
- in reality, the Render Queue exists. It has higher priority than Callback Queue. So event Loop actually pops the Render Queue once every 0.016̅6 seconds, then from the Callback Queue

Todo

[http://latentflip.com](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)
# Closures - Scope - Scope Chain
- scope types & scope chain
	- [https://blog.bitsrc.io/understanding-scope-and-scope-chain-in-javascript-f6637978cf53](https://blog.bitsrc.io/understanding-scope-and-scope-chain-in-javascript-f6637978cf53)
- closures
	- [https://stackoverflow.com/questions/111102/how-do-javascript-closures-work?page=1&tab=votes#tab-top](https://stackoverflow.com/questions/111102/how-do-javascript-closures-work?page=1&tab=votes#tab-top)
- both
	- [https://www.youtube.com/watch?v=zRZNb4GDOPI](https://www.youtube.com/watch?v=zRZNb4GDOPI)

# Checking Browser Support
- [https://caniuse.com/](https://caniuse.com/)

# JavaScript - Native
```dataview
LIST
FROM ""
WHERE file.folder = [[JavaScript - Native]].file.folder + "/" + [[JavaScript - Native]].file.name
```

# JavaScript - Web/Browser APIs
```dataview
LIST
FROM ""
WHERE file.folder = [[JavaScript - Web／Browser APIs]].file.folder + "/" + [[JavaScript - Web／Browser APIs]].file.name
```
