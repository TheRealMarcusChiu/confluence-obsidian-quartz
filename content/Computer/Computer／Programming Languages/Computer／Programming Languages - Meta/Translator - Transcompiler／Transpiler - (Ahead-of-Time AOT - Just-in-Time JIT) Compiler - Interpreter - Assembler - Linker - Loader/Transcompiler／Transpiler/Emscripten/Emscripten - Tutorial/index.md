---
title: "Emscripten - Tutorial"
created: 2019-12-20T19:06:02.357-06:00
modified: 2019-12-20T20:10:38.426-06:00
parent: "[[Emscripten]]"
children: []
---
install [[Emscripten]]
# Example C/C++ Runtime Code

create file <strong>hello\_world.c</strong>
```cpp
#include <stdio.h>

int main() {
  printf("hello, world!\n");
  return 0;
}
```
# Compiling to JavaScript
```
emcc hello_world.c
```

this should generate 2 files:
- <strong>a.out.js</strong> - [[JavaScript]] file
- <strong>a.out.wasm </strong>- [[WebAssembly (WASM)|WebAssembly]] file

you can run them using [[Node.js]]
```
node a.out.js
```

this prints "hello, world!" to console
# Generating HTML
```
emcc hello_world.c -o hello.html
```

you can open <strong>hello.html</strong> in a web browser
# Optimizing Code

-01 minor optimization
```
emcc -01 hello_world.c
```

-02 aggressive optimization
```
emcc -02 hello_world.c
```
