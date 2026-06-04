---
title: "WebAssembly - Writing Programs 2"
created: 2019-12-20T23:39:32.626-06:00
modified: 2021-08-31T22:18:10.472-05:00
parent: "[[WebAssembly (WASM)]]"
children: []
---
# 1 - Write
```cpp
#include <emscripten.h>
#include <math.h>

int counter = 100;

EMSCRIPTEN_KEEPALIVE

int count() {
    counter += 1;
    return counter;
}

int int_sqrt(int x) {
  return sqrt(x);
}
```
# 2 - Compile

download and install [[Emscripten]]

to compile test.c into test.js, run the command below
```
emcc test.c -s EXPORTED_FUNCTIONS='["_count", "_int_sqrt"]' -s EXPORTED_RUNTIME_METHODS='["ccall", "cwrap"]' -o test.js
```
# 3 - Load & Instantiate - Use It
```xml
<!doctype html>
<html lang="en">
<head>
</head>
<body>
  <script src="test.js"></script>
  <script src="test-main.js"></script>
</body>
</html>
```
```js
Module['onRuntimeInitialized'] = onRuntimeInitialized;
const count = Module.cwrap('count', 'number');

function onRuntimeInitialized() {
	// Option 1
    console.log("Option 1: " + count());		 // output 101

	// Option 2
	console.log("Option 2: " + Module._count()); // output 102

	// Option 3
    var result = Module.ccall('int_sqrt', // name of C function
  							  'number',   // return type
  							  ['number'], // argument types
  							  [28]); 	  // arguments

	console.log("Option 3: " + result);    // output 5
}
```
# 4 - Test

open browser and load index.html

open console, you should see output

![[WebAssembly - Writing Programs 2/webassembly-javascript-example-output.jpg|900]]
