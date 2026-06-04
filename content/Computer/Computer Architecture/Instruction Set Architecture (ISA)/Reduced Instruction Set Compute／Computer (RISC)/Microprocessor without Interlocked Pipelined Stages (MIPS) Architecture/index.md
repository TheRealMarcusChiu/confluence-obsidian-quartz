---
title: "Microprocessor without Interlocked Pipelined Stages (MIPS) Architecture"
created: 2023-01-02T11:20:59.108-06:00
modified: 2023-03-13T11:30:56.629-05:00
parent: "[[Reduced Instruction Set Compute／Computer (RISC)]]"
children:
  - "[[MIPS Instruction Set]]"
  - "[[MicroMIPS]]"
---
###### Microprocessor without Interlocked Pipelined Stages (MIPS) Architecture
- is a family of [[Reduced Instruction Set Compute／Computer (RISC)|reduced instruction set compute (RISC)]] instruction set architectures (ISA)
- developed by MIPS Computer Systems, now MIPS Technologies, based in the United States
- is a <strong>load/store architecture</strong> (also known as a register-register architecture); except for the <strong>load/store instructions</strong> used to access memory
- all instructions operate on the registers

# Subpages

```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
# MIPS - Versions
- MIPS I, II, III, IV, and V
- [[MicroMIPS]]

# MIPS - Instruction Formats

```merge-table
{
  "rows": [
    [
      {
        "content": "3 Instruction Types",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "-31-                                 format (bits)                                 -0-",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "colspan": 6
      },
      null,
      null,
      null,
      null,
      null
    ],
    [
      {
        "content": "Register (R)",
        "bg": "#F4F5F7"
      },
      "opcode (6)",
      "rs (5)",
      "rt (5)",
      "rd (5)",
      "shamt (5)",
      "funct (6)"
    ],
    [
      {
        "content": "Instruction (I)",
        "bg": "#F4F5F7"
      },
      "opcode (6)",
      "rs (5)",
      "rt (5)",
      {
        "content": "immediate (16)",
        "colspan": 3
      },
      null,
      null
    ],
    [
      {
        "content": "Jump (J)",
        "bg": "#F4F5F7"
      },
      "opcode (6)",
      {
        "content": "address (26)",
        "colspan": 5
      },
      null,
      null,
      null,
      null
    ]
  ]
}
```
# MIPS - Pipeline

MIPS has 5 stages in pipeline instruction execution
- <strong>fetch</strong> - pull the instruction from RAM into the processor
- <strong>decode</strong> - determine the type of the instruction and extract the operands (e.g., the register indices, the immediate value, etc)
- <strong>execute</strong> - if necessary, perform the arithmetic operation that is associated with the instruction
- <strong>memory</strong> - if necessary, read or write a value from/to RAM
- <strong>writeback</strong> - if necessary, update a register with the result of an arithmetic operation or a RAM read
