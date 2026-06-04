---
title: "GraalVM"
created: 2026-01-12T02:04:53.039-06:00
modified: 2026-01-12T02:08:48.182-06:00
parent: "[[Java Virtual Machine (JVM)]]"
children: []
---
###### GraalVM
````excerpt
- is a high-performance runtime that includes a [[Java Virtual Machine (JVM)|JVM]] but adds a lot more features:
	- Polyglot support - you can run not just Java, but also [[JavaScript]], [[Ruby]], [[Python]], [[R]], and even [[Low Level Virtual Machine (LLVM)|LLVM]]-based languages (like [[C]]/[[C++]])
	- [[Translator - Transcompiler／Transpiler - (Ahead-of-Time AOT - Just-in-Time JIT) Compiler - Interpreter - Assembler - Linker - Loader|Ahead-of-Time (AOT)]] compilation - you can compile Java applications into native binaries with native-image, which start almost instantly and use less memory than a traditional JVM app
	- Enhanced [[Translator - Transcompiler／Transpiler - (Ahead-of-Time AOT - Just-in-Time JIT) Compiler - Interpreter - Assembler - Linker - Loader|JIT]] compiler - GraalVM has its own high-performance JIT compiler (the Graal compiler), which can replace the standard HotSpot JIT
````
^excerpt

# Use Cases
- runs [[Java - Quarkus|Quarkus]] apps
