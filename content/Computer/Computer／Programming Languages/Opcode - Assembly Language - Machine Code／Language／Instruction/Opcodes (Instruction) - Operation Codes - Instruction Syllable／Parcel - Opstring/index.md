---
title: "Opcodes (Instruction) - Operation Codes - Instruction Syllable／Parcel - Opstring"
created: 2020-01-04T13:56:48.556-06:00
modified: 2025-07-18T14:24:02.188-05:00
parent: "[[Opcode - Assembly Language - Machine Code／Language／Instruction]]"
children: []
---
###### Opcodes (Instruction) - Operation Codes - Instruction Syllable/Parcel - Opstring
````excerpt
- specifies the operation (i.e. "behavior") to be performed on a processor
- the set of all distinct opcodes is called the [[Instruction Set Architecture (ISA)]]
- an opcode can be represented in either:
	- symbolic (i.e. [[Assembly Languages|assembly language]]) (e.g. <code><font style="color: rgb(122,134,154);">AND MASK1, 128</font></code>)
	- binary (i.e. [[Machine Language／Code／Instruction|machine code]]) (e.g. <code><font style="color: rgb(122,134,154);">00100001100101010</font></code>)
````
^excerpt

# Opcode - Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Opcode/Instruction Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Example Instruction",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Data Handling & Memory Operations",
        "bg": "#F4F5F7"
      },
      "- <em>set</em> a [register](https://en.wikipedia.org/wiki/Processor_register) to a fixed constant value\n- <em>copy</em> data from a memory location to a register, or vice versa (a machine instruction is often called <em>move</em>; however, the term is misleading). Used to store the contents of a register, the result of a computation, or to retrieve stored data to perform a computation on it later. Often called [load and store](https://en.wikipedia.org/wiki/Load_and_store) operations\n- <em>read</em> and <em>write</em> data from hardware devices"
    ],
    [
      {
        "content": "Arithmetic & Logic Operations",
        "bg": "#F4F5F7"
      },
      "- <em>add</em>, <em>subtract</em>, <em>multiply</em>, or <em>divide</em> the values of two registers, placing the result in a register, possibly setting one or more [condition codes](https://en.wikipedia.org/wiki/Flag_(computing)) in a [status register](https://en.wikipedia.org/wiki/Status_register)\n\t- <em>increment</em>, <em>decrement</em> in some ISAs, saving operand fetch in trivial cases\n- perform [bitwise operations](https://en.wikipedia.org/wiki/Bitwise_operation), e.g. taking the <em>[conjunction](https://en.wikipedia.org/wiki/Logical_conjunction)</em> and <em>[disjunction](https://en.wikipedia.org/wiki/Logical_disjunction)</em> of corresponding bits in a pair of registers, taking the <em>[negation](https://en.wikipedia.org/wiki/Logical_negation)</em> of each bit in a register\n- <em>compare</em> two values in registers (for example, to see if one is less, or if they are equal)\n- <em>floating-point instructions</em> for arithmetic on floating-point numbers"
    ],
    [
      {
        "content": "Control Flow Operations",
        "bg": "#F4F5F7"
      },
      "- <em>[branch](https://en.wikipedia.org/wiki/Branch_(computer_science))</em> to another location in the program and execute instructions there\n- <em>[conditionally branch](https://en.wikipedia.org/wiki/Branch_predication)</em> to another location if a certain condition holds\n- <em>[indirectly branch](https://en.wikipedia.org/wiki/Indirect_branch)</em> to another location\n- <em>[call](https://en.wikipedia.org/wiki/Subroutine)</em> another block of code, while saving the location of the next instruction as a point to return to"
    ],
    [
      {
        "content": "Coprocessor Instructions",
        "bg": "#F4F5F7"
      },
      "- load/store data to and from a coprocessor or exchange with CPU registers\n- perform coprocessor operations"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
