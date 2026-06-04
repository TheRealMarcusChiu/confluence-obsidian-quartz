---
title: "RISC-V"
created: 2020-01-09T15:39:23.984-06:00
modified: 2025-07-14T19:29:31.548-05:00
parent: "[[Reduced Instruction Set Compute／Computer (RISC)]]"
children:
  - "[[RISC-V Processors]]"
  - "[[RISC-V Pseudoinstructions]]"
---
###### RISC-V
````excerpt
- is a free and open [[Reduced Instruction Set Compute／Computer (RISC)|RISC]] [[Instruction Set Architecture (ISA)|Instruction Set Architecture]]
- started by graduate students in May 2010
````
^excerpt

# RISC-V Landscape

See: [https://landscape.riscv.org](https://landscape.riscv.org)
# RISC-V Bases
- RV32I - Base Integer Instruction Set, 32-bit
- RV32E - Base Integer Instruction Set (embedded), 32-bit, 16 registers with a smaller instruction set
- RV64I - Base Integer Instruction Set, 64-bit
- RV128 - Base Integer InstructionSet, 128-bit

# RISC-V Extensions

Once we have the base we can add extensions to it to define the exact features of the core:
- M – Standard Extension for Integer Multiplication and Division
	- RV32M extension implements 8 instructions
	- RV64M adds 5 instructions to those 8
- A – Standard Extension for Atomic Memory Instructions
- F – Standard Extension for Single-Precision Floating-Point
- D – Standard Extension for Double-Precision Floating-Point
	- double-precision floating-point registers <code><font style="color: rgb(122,134,154);">f0</font></code> to <code><font style="color: rgb(122,134,154);">f31</font></code> are now 64-bit wide
- G – Shorthand for the base and above extensions
- Q – Standard Extension for Quad-Precision Floating-Point, introducing 128-bit wide floating point registers
- L – Standard Extension for Decimal Floating-Point operations
- C – Standard Extension for Compressed Instructions
- B – Standard Extension for Bit Manipulation
- J – Standard Extension for Dynamically Translated Languages such as C\#, Go, Haskell, Java, JavaScript, OCaml, PHP, Python, R, Ruby, Scala or [WebAssembly](https://www.cnx-software.com/2017/05/31/webassembly-is-a-cross-platform-cross-browser-solution-for-high-performance-code-in-web-browsers/)
- T – Standard Extension for Transactional Memory
- P – Standard Extension for Packed-SIMD Instructions
- V – Standard Extension for Vector Operations
- N – Standard Extension for User-Level Interrupts
- H – Standard Extension for Hypervisor
- S – extension, for supervisor operation
- H – extension, for hypervisor operation
- Zicsr extension, for manipulating CSR registers
- Zifencei extension, for instruction memory synchronization

# RISC-V Registers

```merge-table
{
  "rows": [
    [
      {
        "content": "Register",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "ABI Name",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "Saver",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      }
    ],
    [
      {
        "content": "x0",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "zero",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "Hard-wired zero",
        "align": "left"
      },
      {
        "content": "-",
        "align": "left"
      }
    ],
    [
      {
        "content": "x1",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "ra",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "Return address",
        "align": "left"
      },
      {
        "content": "Caller",
        "align": "left"
      }
    ],
    [
      {
        "content": "x2",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "sp",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "Stack pointer",
        "align": "left"
      },
      {
        "content": "Callee",
        "align": "left"
      }
    ],
    [
      {
        "content": "x3",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "gp",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "Global pointer",
        "align": "left"
      },
      {
        "content": "-",
        "align": "left"
      }
    ],
    [
      {
        "content": "x4",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "tp",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "Thread pointer",
        "align": "left"
      },
      {
        "content": "-",
        "align": "left"
      }
    ],
    [
      {
        "content": "x5",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "t0",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "Temporary/alternate link register",
        "align": "left"
      },
      {
        "content": "Caller",
        "align": "left"
      }
    ],
    [
      {
        "content": "x6-7",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "t1-2",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "Temporaries",
        "align": "left"
      },
      {
        "content": "Caller",
        "align": "left"
      }
    ],
    [
      {
        "content": "x8",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "s0/fp",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "Saved register/frame pointer",
        "align": "left"
      },
      {
        "content": "Callee",
        "align": "left"
      }
    ],
    [
      {
        "content": "x9",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "s1",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "Saved register",
        "align": "left"
      },
      {
        "content": "Callee",
        "align": "left"
      }
    ],
    [
      {
        "content": "x10-11",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "a0-1",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "Function arguments/return values",
        "align": "left"
      },
      {
        "content": "Caller",
        "align": "left"
      }
    ],
    [
      {
        "content": "x12-17",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "a2-7",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "Function arguments",
        "align": "left"
      },
      {
        "content": "Caller",
        "align": "left"
      }
    ],
    [
      {
        "content": "x18-27",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "s2-11",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "Saved registers",
        "align": "left"
      },
      {
        "content": "Callee",
        "align": "left"
      }
    ],
    [
      {
        "content": "x28-31",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "t3-6",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "Temporaries",
        "align": "left"
      },
      {
        "content": "Caller",
        "align": "left"
      }
    ]
  ]
}
```
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Resources
- [https://riscv.org/](https://riscv.org/)
- [[RISC-V Card.pdf]]
