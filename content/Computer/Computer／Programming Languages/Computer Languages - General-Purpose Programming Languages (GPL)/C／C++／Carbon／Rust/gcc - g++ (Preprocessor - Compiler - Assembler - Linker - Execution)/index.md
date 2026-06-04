---
title: "gcc - g++ (Preprocessor - Compiler - Assembler - Linker - Execution)"
created: 2019-12-25T20:28:54.307-06:00
modified: 2026-05-14T01:35:27.489-05:00
parent: "[[C／C++／Carbon／Rust]]"
children:
  - "[[Header Files (.h) - Static Libraries (.lib, .a) - Dynamic／Shared Libraries (.dll, .so)]]"
---
[[gcc]] and [[g++]] are both [[Compiler／Compilers|compilers]] for [[C／C++／Carbon／Rust|c/c++ languages]]
# Example GCC
```
include <stdio.h>
 
int main() {
    printf("Hello, world!\n");
    return 0;
}
```

use gcc to compile hello.c
```bash
gcc hello.c
```
# Example G++
```cpp
#include <iostream>
 
int main() {
   std::cout << "Hello, world!" << endl;
   return 0;
}
```

use g++ to compile hello.cpp
```bash
g++ hello.cpp
```

gcc's & g++'s default output executable is called "<code>a.exe</code>" (Windows) or "<code>a.out</code>" (Unixes and Mac OS X)

to run the program
```
// (Windows) In CMD shell
> a

// (Unixes / Mac OS X) In Bash Shell - include the current path (./)
$ chmod a+x a.out
$ ./a.out
```
# GCC & G++ Breakdown (Preprocessor - Compiler - Assembler - Linker - Executor)

the gcc & g++ compilation of a C/C++ program consists of 4 steps:

<strong>preprocessor (cpp)</strong>: process the directives (<code>\#include</code>, <code>\#define</code>, etc)

> [!expand]- preprocessing example
> when the preprocessor sees the following MyCode.c
> ```cpp
> #include "MyHeader.h"
>
> void main(){
>     FunctionDefinedInHeader();
> }
> ```
>
> it simply opens the [[Header Files (.h) - Static Libraries (.lib, .a) - Dynamic／Shared Libraries (.dll, .so)|header file]] MyHeader.h, and cut’n pastes its contents into MyCode.c
> ```cpp
> // Begin of MyHeader.h
> #ifndef MYHEADER_H
> #define MYHEADER_H
>
> void FunctionDefinedInHeader(); // Declare the function
>
> # endif
> // End of MyHeader.h
>
> void main(){
>     FunctionDefinedInHeader(); // Use it
> }
> ```
>
> Similarly, <code><em>\#define</em></code>s are cut’n pasted, <code><em>\#if</em></code>s are analysed and potentially removed, etc.
>
> At the end of this step we have a preprocessed C++ file, without any <code>\#define</code>, <code>\#if</code>, <code>\#ifdef</code>, <code>\#include</code>, and is then ready to be compiled

<strong>compiler ([[gcc]] -S, [[g++]] -S)</strong>: takes place on the preprocessed files:
1. checks the C/C++ syntax
2. converts the C/C++ code into assembly code

> [!expand]- compilation example
> The compiler translates C++ code into a representation that the assembler can directly understand. For instance, the following code
> ```cpp
> int i=3;
> int j=4*i+2;
> ```
>
> will be translated into this : Machine/Assembly Language (here is x86 [[Opcode - Assembly Language - Machine Code／Language／Instruction|opcodes]])
> ```cpp
> mov         dword ptr [i],3
> mov         eax,dword ptr [i]
> lea         ecx,[eax*4+2]
> mov         dword ptr [j],ecx
> ```

<strong>assembler (as)</strong>: converts the assembly code to machine code (binary) as object-files (these object-files can refer to functions that are not defined. Also note these object-files can be used as libraries as well)

<strong>linker (ld)</strong>: produces an executable or a library. It links the object files by replacing the undefined functions with the correct addresses. These functions should be defined in other object-files or in libraries (external object files). There are 2 types of external libraries:
- [[Header Files (.h) - Static Libraries (.lib, .a) - Dynamic／Shared Libraries (.dll, .so)|static libraries]] - the linker would copy its contents into the executable
- [[Header Files (.h) - Static Libraries (.lib, .a) - Dynamic／Shared Libraries (.dll, .so)|dynamic libraries]] - the linker would NOT copy but tag it with a

<strong>executor</strong>: when you launch the executable, the OS will put it in memory. As said earlier, some code isn’t available at this point (i.e. dynamic libraries). But the linker was nice enough to say where to look for it: the executable clearly states which dynamic library the function is defined. The OS will happily open the dynamic library and find the function's definition

![[gcc - g++ (Preprocessor - Compiler - Assembler - Linker - Execution)/GCC_CompilationProcess.png|450]]
### Example - GCC & G++ Breakdown

the command below does the first 4 steps (preprocessor, compiler, assembler, & linker)
```
gcc -o hello.exe hello.c
```

if you want to do each step manually:
- <strong>preprocessing</strong>: via the GNU C Preprocessor (<code>cpp.exe</code>), which includes the headers (<code>\#include</code>) and expands the macros (<code>\#define</code>). The resultant intermediate file "<code>hello.i</code>" contains the expanded source code
    ```
    cpp hello.c > hello.i
    ```
- <strong>compilation</strong>: The compiler compiles the pre-processed source code into assembly code for a specific processor. The <code>-S</code> option specifies to produce assembly code, instead of object code. The resultant assembly file is "<code>hello.s</code>"
    ```
    gcc -S hello.i
    ```
- <strong>assembly</strong>: The assembler (<code>as.exe</code>) converts the assembly code into machine code in the object file "<code>hello.o</code>"
    ```
    as -o hello.o hello.s
    ```
- <strong>linker</strong>: Finally, the linker (<code>ld.exe</code>) links the object code with the library code to produce an executable file "<code>hello.exe</code>"
    ```
    ld -o hello.exe hello.o ...libraries...
    ```
- <strong>execution</strong>:
    ```
    ./hello.exe
    ```

### Link Separately
```
// Compile-only with -c option
> gcc -c hello.c
// Link object file(s) into an executable
> gcc hello.o
```
