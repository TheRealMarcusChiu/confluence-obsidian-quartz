---
title: "JavaScript - Web Worker"
created: 2019-12-21T23:01:54.008-06:00
modified: 2019-12-21T23:07:28.812-06:00
parent: "[[JavaScript - Web／Browser APIs]]"
children: []
---
a <strong>web worker</strong> is a [[JavaScript]] running in the background, without affecting the performance of the page

similar to: [[Browser Application - Service Workers]]
### Example Code
```xml
<!DOCTYPE html>
<html>
<body>
	<p>Count numbers: <output id="result"></output></p>
	<button onclick="startWorker()">Start Worker</button>
	<button onclick="stopWorker()">Stop Worker</button>
	<script src="script.js"></script>
</body>
</html>
```
```js
var w;

function startWorker() {
  if (typeof(Worker) !== "undefined") {
    if (typeof(w) == "undefined") {
      w = new Worker("demo_workers.js");
    }
    w.onmessage = function(event) {
      document.getElementById("result").innerHTML = event.data;
    };
  } else {
    document.getElementById("result").innerHTML = "Sorry! No Web Worker support.";
  }
}

function stopWorker() {
  w.terminate();
  w = undefined;
}
```
```js
var i = 0;

function timedCount() {
  i = i + 1;
  postMessage(i);
  setTimeout("timedCount()",500);
}

timedCount();
```
