---
title: "WebAssembly - Loading and Running .wasm File in Browser"
created: 2019-12-20T20:11:01.116-06:00
modified: 2019-12-20T20:11:55.746-06:00
parent: "[[WebAssembly (WASM)]]"
children: []
---
2 ways to load and run a .wasm file in a browser:
- the older [<code>WebAssembly.compile</code>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/compile)/[<code>WebAssembly.instantiate</code>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiate) methods require you to create an [<code>ArrayBuffer</code>](https://developer.mozilla.org/en-US/docs/Web/API/ArrayBuffer) containing your WebAssembly module binary after fetching the raw bytes, and then compile/instantiate it. This is analogous to <code>new Function(string)</code>, except that we are substituting a string of characters (JavaScript source code) with an array buffer of bytes (WebAssembly source code).
- the newer [<code>WebAssembly.compileStreaming</code>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/compileStreaming)/[<code>WebAssembly.instantiateStreaming</code>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiateStreaming) methods are a lot more efficient — they perform their actions directly on the raw stream of bytes coming from the network, cutting out the need for the [<code>ArrayBuffer</code>](https://developer.mozilla.org/en-US/docs/Web/API/ArrayBuffer) step

### Older Way

for basic loading, there are three steps:
- get the <code>.wasm</code> bytes into a typed array or <code>ArrayBuffer</code>
- compile the bytes into a <code>WebAssembly.Module</code>
- instantiate the <code>WebAssembly.Module</code> with imports to get the callable exports
```js
fetch('module.wasm')
	.then(response => response.arrayBuffer())				     // get the .wasm bytes into a typed array or ArrayBuffer
	.then(bytes => WebAssembly.instantiate(bytes, importObject)) // compile & instantiate WebAssembly.Module
	.then(results => {
  		// Do something with the results!
	});
```
### Newer Way

skips the ArrayBuffer step
```js
fetch('simple.wasm')
	.then(bytes => WebAssembly.instantiateStreaming(bytes, importObject))
	.then(results => {
  		// Do something with the results!
	});
```
### Example WebAssembly Object Function Calls
```js
WebAssembly.instantiateStreaming(fetch('myModule.wasm'), importObject)
	.then(obj => {
  		// Call an exported function:
  		obj.instance.exports.exported_func();

  		// or access the buffer contents of an exported memory:
  		var i32 = new Uint32Array(obj.instance.exports.memory.buffer);

 		// or access the elements of an exported table:
 	 	var table = obj.instance.exports.table;
  		console.log(table.get(0)());
	})
```
