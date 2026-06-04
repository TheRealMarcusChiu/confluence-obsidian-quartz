---
title: "WebGL - Tutorial 1 - Simple"
created: 2021-09-03T20:16:21.909-05:00
modified: 2021-09-03T20:47:55.467-05:00
parent: "[[WebGL - Tutorials]]"
children: []
---
# HTML
```xml
<!DOCTYPE html>
<html lang="en">
<head>
    <script src="index.js"></script>
</head>
<body>
	<canvas id="glCanvas" width="640" height="480"></canvas>
</body>
</html>
```
# Javascript
```js
function main() {
  const canvas = document.querySelector("#glCanvas");
  // Initialize the GL context, returns null if WebGL is not supported in browser
  const gl = canvas.getContext("webgl");
  const gl = canvas.getContext("webgl2");

  // Only continue if WebGL is available and working
  if (gl === null) {
    alert("Unable to initialize WebGL. Your browser or machine may not support it.");
    return;
  }

  // Set clear color to black, fully opaque
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // Clear the color buffer with specified clear color
  gl.clear(gl.COLOR_BUFFER_BIT);
}

window.onload = main;
```
