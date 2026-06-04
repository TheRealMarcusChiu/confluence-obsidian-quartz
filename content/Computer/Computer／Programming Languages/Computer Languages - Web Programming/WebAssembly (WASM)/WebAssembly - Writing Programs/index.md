---
title: "WebAssembly - Writing Programs"
created: 2019-10-16T23:07:46.059-05:00
modified: 2019-12-21T00:59:08.507-06:00
parent: "[[WebAssembly (WASM)]]"
children: []
---
### WebAssembly - Writing Programs Steps
1. <strong>write:</strong> write program in a C/C++ runtime language (e.g. C, C++, Rust, etc)
2. <strong>compile:</strong> compile program into WebAssembly (i.e. outputting a binary .wasm file)
3. <strong>load & instantiate:</strong> have JavaScript to fetch and compile the .wasm binary. Then instantiate it so that JavaScript can use it
4. <strong>using it:</strong>

![[WebAssembly - Writing Programs/wasm.png|350]]
# <strong>Write</strong>

write example C++ code
```cpp
int squarer(int num) {
	return num * num;
}
```
# <strong>Compile</strong>

there are 2 ways to compile the C++ code into WebAssembly (<font style="color: rgb(255,0,0);"><strong>NOTE</strong></font>: I can only get the online tool to generate a .wasm file that could be used in JavaScript):
- download and install [[Emscripten|emscripten]], then use it for compilation: [[Emscripten - Tutorial|emscripten tutorial]]
- use online tool - [https://mbebenita.github.io/WasmExplorer/](https://mbebenita.github.io/WasmExplorer/)

after compilation, any C++ functions that you write will be available in WebAssembly as something called an “export.” Exports are the things that you’ll be able to interact with and use in JavaScript.
###### online tool compiler
![[WebAssembly - Writing Programs/online-webassembly-compiler.jpg|950]]

<strong><font style="color: rgb(255,0,0);">IMPORTANT NOTE</font></strong>: as shown above, the C++ function named <code>squarer</code> has somehow become <code>\_z7squareri</code>. This is because the “\_Z7” prefix and “i” suffix are [debug markers](https://docs.microsoft.com/en-us/cpp/build/reference/z7-zi-zi-debug-information-format) introduced by the C++ compiler
# <strong>L<strong>oad & Instantiate</strong></strong>

now we have a WebAssembly file, let's name it <strong><code>squarer.wasm</code></strong>

we will create 2 new files:
- <code>scripts.js</code> - takes care of loading and instantiating WebAssembly file
- <code>index.html</code> - includes scripts.js

###### 2 Ways to Load & Instantiate a .wasm file

> [!expand]- old way
> - <strong>the older</strong> [<code>WebAssembly.compile</code>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/compile)/[<code>WebAssembly.instantiate</code>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiate) methods require you to create an [<code>ArrayBuffer</code>](https://developer.mozilla.org/en-US/docs/Web/API/ArrayBuffer) containing your WebAssembly module binary after fetching the raw bytes, and then compile/instantiate it. This is analogous to <code>new Function(string)</code>, except that we are substituting a string of characters (JavaScript source code) with an array buffer of bytes (WebAssembly source code)
>
> for basic loading, there are three steps:
> - get the <code>.wasm</code> bytes into a typed array or <code>ArrayBuffer</code>
> - compile the bytes into a <code>WebAssembly.Module</code>
> - instantiate the <code>WebAssembly.Module</code> with imports to get the callable exports
>
> ```js
> var importObject = { env: {
>     'memoryBase': 0,
>     'tableBase': 0,
>     'memory': new WebAssembly.Memory({initial: 256}),
>     'table': new WebAssembly.Table({initial: 256, element: 'anyfunc'}),
>     abort: alert,
> }};
>
> fetch('squarer.wasm')
> 	.then(response => response.arrayBuffer())				     // get the .wasm bytes into a typed array or ArrayBuffer
> 	.then(bytes => WebAssembly.instantiate(bytes, importObject)) // compile & instantiate WebAssembly.Module
> 	.then(obj => {
>   		// Do something with the results!
> 	});
> ```

> [!expand]- new way
> - <strong>the newer </strong>[<code>WebAssembly.compileStreaming</code>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/compileStreaming)/[<code>WebAssembly.instantiateStreaming</code>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiateStreaming) methods are a lot more efficient — they perform their actions directly on the raw stream of bytes coming from the network, cutting out the need for the [<code>ArrayBuffer</code>](https://developer.mozilla.org/en-US/docs/Web/API/ArrayBuffer) step
>
> ```js
> var importObject = { env: {
>     'memoryBase': 0,
>     'tableBase': 0,
>     'memory': new WebAssembly.Memory({initial: 256}),
>     'table': new WebAssembly.Table({initial: 256, element: 'anyfunc'}),
>     abort: alert,
> }};
>
> fetch('squarer.wasm')
> 	.then(bytes => WebAssembly.instantiateStreaming(bytes, importObject))
> 	.then(obj => {
>   		// Do something with the results!
> 	});
> ```
# <strong>Using It</strong>

Now, just call your function and pass in an argument from the console. Try something like <code>squarer(9)</code> . Hit return and you’ll see <code>81</code> . It works! You’re calling a function written in C++!

<font style="color: rgb(255,0,0);"><strong>IMPORTANT NOTE</strong></font>: make sure the function name matches with the online tool: obj.instance.exports.<strong>\_Z7squareri</strong>(9);
```js
var importObject = { env: {
	'memoryBase': 0,
    'tableBase': 0,
    'memory': new WebAssembly.Memory({initial: 256}),
    'table': new WebAssembly.Table({initial: 256, element: 'anyfunc'}),
    abort: alert,
}};

fetch('squarer.wasm')
    .then(response => response.arrayBuffer())                    // get the .wasm bytes into a typed array or ArrayBuffer
    .then(bytes => WebAssembly.instantiate(bytes, importObject)) // compile & instantiate WebAssembly.Module
    .then(obj => {
        var output = obj.instance.exports._Z7squareri(9);
        console.log(output);
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
