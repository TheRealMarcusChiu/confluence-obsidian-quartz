---
title: "Assembly Language - Basics"
created: 2020-01-04T15:36:11.936-06:00
modified: 2023-01-02T11:33:53.228-06:00
parent: "[[Assembly Languages]]"
children: []
---
# Program Sections

```merge-table
{
  "rows": [
    [
      {
        "content": "Section",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "data section",
        "bg": "#F4F5F7"
      },
      "- used for declaring initialized data or constants\n- data does not change in runtime\n\nthe syntax for declaring a data section\n```\nsection.data\n```"
    ],
    [
      {
        "content": "bss section",
        "bg": "#F4F5F7"
      },
      "- used for declaring variables\n\nthe syntax for declaring a bss section\n```\nsection.bss\n```"
    ],
    [
      {
        "content": "text section",
        "bg": "#F4F5F7"
      },
      "- used for keeping the actual code\n\nthe syntax for declaring a text section\n```\nsection.text\n\tglobal _start\n_start:\n```\n\nthis section must begin with the declaration <strong>global \\_start</strong>, which tells the [[Kernel／Kernels (OS)|kernel]] where the program execution begins"
    ]
  ],
  "tableStyle": "width: 1071.2px;"
}
```
# Statement Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Statement Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "instruction",
        "bg": "#F4F5F7"
      },
      "- simply tell the processor what to do\n- each instruction consists of an [[Opcodes (Instruction) - Operation Codes - Instruction Syllable／Parcel - Opstring|opcode]]"
    ],
    [
      {
        "content": "assembler directive\n\nor\n\npseudo-op",
        "bg": "#F4F5F7"
      },
      "- tells the assembler about the various aspects of the assembly process\n- are non-executable and do not generate [[Machine Language／Code／Instruction|machine language]] instructions"
    ],
    [
      {
        "content": "macro",
        "bg": "#F4F5F7"
      },
      "- simply a text substitution"
    ]
  ],
  "tableStyle": "width: 1071.2px;"
}
```
# Syntax of a Statement
```
[label]	mnemonic	[operands]	[;comment]
```

some examples of typical statements
```
INC COUNT		; Increment the memory variable COUNT

MOV TOTAL, 48	; Transfer the value 48 in the memory variable TOTAL

ADD AH, BH		; Add the content of the BH register into the AH register

AND MASK1, 128	; Perform AND operation on the variable MASK1 and 128

ADD MARKS, 10	; Add 10 to the variable MARKS

MOV AL, 10 		; Transfer the value 10 to the AL register
```
