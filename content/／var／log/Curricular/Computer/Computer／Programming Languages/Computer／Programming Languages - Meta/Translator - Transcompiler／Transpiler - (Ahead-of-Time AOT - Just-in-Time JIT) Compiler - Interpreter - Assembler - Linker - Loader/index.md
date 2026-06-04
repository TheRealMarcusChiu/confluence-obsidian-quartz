---
title: "Translator - Transcompiler／Transpiler - (Ahead-of-Time AOT - Just-in-Time JIT) Compiler - Interpreter - Assembler - Linker - Loader"
created: 2019-10-16T10:33:48.096-05:00
modified: 2026-05-24T16:28:43.532-05:00
parent: "[[Computer／Programming Languages - Meta]]"
children:
  - "[[Assembler - Disassembler]]"
  - "[[Compiler／Compilers]]"
  - "[[Transcompiler／Transpiler]]"
---
Based on: [https://softwareengineering.stackexchange.com/questions/246094/understanding-the-differences-traditional-interpreter-jit-compiler-jit-interp](https://softwareengineering.stackexchange.com/questions/246094/understanding-the-differences-traditional-interpreter-jit-compiler-jit-interp)

```merge-table
{
  "rows": [
    [
      {
        "content": "Term",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Examples",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "interpreter",
        "bg": "#F4F5F7"
      },
      "- An <em>interpreter</em> for language <strong>X</strong> is a program (or a machine, or just some kind of mechanism in general) that executes any program <strong>p</strong> written in language <strong>X</strong> such that it performs the effects and evaluates the results as prescribed by the specification of <strong>X</strong>.",
      "- [[JavaScript]]'s V8 Engine\n- \n> [!expand]- Click here to expand...\n> CPUs are usually interpreters for their respective instruction sets, although modern high-performance workstation CPUs are actually more complex than that; they may actually have an underlying proprietary private instruction set and either translate (compile) or interpret the externally visible public instruction set."
    ],
    [
      {
        "content": "[[Compiler／Compilers|compiler]]",
        "bg": "#F4F5F7"
      },
      "- A <em>compiler</em> from <strong>X</strong> to <strong>Y</strong> is a program (or a machine, or just some kind of mechanism in general) that translates any program <strong>p</strong> from some language <strong>X</strong> into a semantically equivalent program <strong>p′</strong> in some language <strong>Y</strong> in such a way that the semantics of the program are preserved, i.e. that interpreting <strong>p′</strong> with an interpreter for <strong>Y</strong> will yield the same results and have the same effects as interpreting <strong>p</strong> with an interpreter for <strong>X</strong>. (Note that <strong>X</strong> and <strong>Y</strong> may be the same language.)\n- Note that this requires that a JIT compiler from language <strong>X</strong> to language <strong>Y</strong> must somehow work together with an interpreter for language <strong>Y</strong>, otherwise there wouldn't be any way to run the program. (So, for example, a JIT compiler that compiles JavaScript to x86 machine code doesn't make sense without an x86 CPU; it compiles the program while it is running, but without the x86 CPU the program wouldn't be running.)\n- types:\n\t- <strong>just-in-time (JIT) compiler</strong> - compiles during running\n\t- <strong>ahead-of-time (AOT) compiler</strong> - compiles before running\n\t\t- self-compiler or resident compiler - a compiler runs on a computer and produces the machine codes for the same computer\n\t\t- cross compiler - a compiler runs on a computer and produces the machine codes for another computer",
      "- [[GNU Compiler Collection (GCC) - GNU C Compiler|gcc]]\n- [[Low Level Virtual Machine (LLVM)|llvm]]"
    ],
    [
      {
        "content": "[[Transcompiler／Transpiler|transcompiler/transpiler]]",
        "bg": "#F4F5F7"
      },
      "- compiler is a program that translates a high-level language program into a lower-level language program (usually machine language)\n- transpiler is a program that translates a language program into a same-level language program",
      "- [[Emscripten]]"
    ],
    [
      {
        "content": "translator",
        "bg": "#F4F5F7"
      },
      "- a translator (aka [[Computer／Programming Languages|programming language]] processor) is anything that converts code from one language into another",
      ""
    ],
    [
      {
        "content": "[[Assembler - Disassembler|assembler]]",
        "bg": "#F4F5F7"
      },
      "- a program that translates an [[Opcode - Assembly Language - Machine Code／Language／Instruction|assembly language]] program into a [[Opcode - Assembly Language - Machine Code／Language／Instruction|machine language]] program\n- types:\n\t- either:\n\t\t- self-assembler/resident-assembler - an assembler that runs on a computer and produces the machine codes for the same computer\n\t\t- cross-assembler - an assembler that runs on a computer and produces the machine codes for another computer\n\t- either:\n\t\t- one-pass assembler - an assembler that assigns the memory addresses to the variables and translates the source code into machine code in the first pass simultaneously\n\t\t- two-pass assembler - an assembler that reads the source code twice. In the first pass, it reads all the variables and assigns them memory addresses. In the second pass, it reads the source code and translates the code into object code.",
      ""
    ],
    [
      {
        "content": "Linker",
        "bg": "#F4F5F7"
      },
      "- In some high-level languages, a program may use functions that are defined in [[Header Files (.h) - Static Libraries (.lib, .a) - Dynamic／Shared Libraries (.dll, .so)|external libraries]]. These libraries containing these functions are usually predefined & precompiled. The Linker links the references to those libraries. If the linker does not find a library of a function then it informs the compiler and then the compiler generates an error. The compiler automatically invokes the linker as the last step in compiling a program.",
      ""
    ],
    [
      {
        "content": "Loader",
        "bg": "#F4F5F7"
      },
      "- A loader is a program that loads the machine codes of a program into the system memory. A loader is part of an operating system that is responsible for loading programs. It is one of the essential stages in the process of starting a program. Because it places programs into memory and prepares them for execution. Loading a program involves reading the contents of an executable file into memory. Once loading is complete, the operating system starts the program by passing control to the loaded program code. All operating systems that support program loading have loaders. In many operating systems, the loader is permanently resident in memory.",
      ""
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
