---
title: "Emscripten"
created: 2019-12-20T18:45:55.331-06:00
modified: 2021-12-16T05:41:51.060-06:00
parent: "[[Transcompiler／Transpiler]]"
children:
  - "[[Emscripten - Tutorial]]"
---
###### Emscripten ([https://emscripten.org/](https://emscripten.org/))
- is a [[Low Level Virtual Machine (LLVM)|LLVM]]-to-[[JavaScript]] [[Translator - Transcompiler／Transpiler - (Ahead-of-Time AOT - Just-in-Time JIT) Compiler - Interpreter - Assembler - Linker - Loader|transpiler]]
- emscripten can:
	- compile [[C]] and [[C++]] code into JavaScript
	- compile any other code that can be translated into LLVM bitcode into JavaScript
	- compile the C/C++ runtimes of other languages into JavaScript, and then run code in those other languages in an <em>indirect</em> way (this has been done for [[Python]] and Lua)

# Example Demos
- angry bots - [http://beta.unity3d.com/jonas/AngryBots/](http://beta.unity3d.com/jonas/AngryBots/)
- dead trigger 2 - [http://beta.unity3d.com/jonas/DT2/](http://beta.unity3d.com/jonas/DT2/)
- more demos - [https://github.com/emscripten-core/emscripten/wiki/Porting-Examples-and-Demos](https://github.com/emscripten-core/emscripten/wiki/Porting-Examples-and-Demos)

# Installation
- [https://emscripten.org/docs/getting_started/downloads.html](https://emscripten.org/docs/getting_started/downloads.html)
- <span style="white-space: pre-wrap"><code>brew install emscripten</code></span>

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
