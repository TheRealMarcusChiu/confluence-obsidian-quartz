---
title: "Low Level Virtual Machine (LLVM)"
created: 2019-03-15T15:51:52.138-05:00
modified: 2021-12-17T16:19:49.573-06:00
parent: "[[Compiler／Compilers]]"
children:
  - "[[LLVM Frontend - Creating Own Custom]]"
  - "[[LLVM Intermediate Representation (IR)]]"
  - "[[clang]]"
---
<strong>LLVM</strong>
- is a collection of modular and reusable compiler and toolchain technologies
- has little to do with traditional [[Virtual Machines (VM) - Hypervisors ／ Virtualizer ／ Virtual Machine Monitor (VMM) (Type-1 Bare Metal - Type-2 Hosted)|virtual machines]]

# LLVM - Compilation Stages

In the LLVM the compilation takes three stages

![[Low Level Virtual Machine (LLVM)/llvm_compiler_pipeline.png|600]]

The stages are:
- The <strong>frontend</strong>, parsing the original language and spits out IR code
- The <strong>optimizer</strong>, mangling one IR into optimized equivalent IR. This stage does all the usual optimizations like constant propagation, dead code removal, and so on
- The <strong>backend</strong>, taking IR and producing machine code optimized for a specific CPU

# LLVM - Intermediate Representation (IR)

see [[LLVM Intermediate Representation (IR)]]
# LLVM - Frontend Compilers
- [[LLVM Frontend - Creating Own Custom]]
- [[clang]]

# LLVM - Middle-end Compiler

TODO
# LLVM - Backend Compiler

The backend supports compiling IR into many different [[Instruction Set Architecture (ISA)|Instruction Set Architectures]]
