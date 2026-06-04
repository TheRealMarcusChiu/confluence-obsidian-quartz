---
title: "x86 x64 (x86-16, x86-32, x86-64)"
created: 2019-08-24T12:08:23.614-05:00
modified: 2025-07-14T16:47:46.532-05:00
parent: "[[Complex Instruction Set Compute／Computer (CISC)]]"
children:
  - "[[Intel 8086 Assembler - Assembly Language]]"
  - "[[x86 Hardware Extensions]]"
---
# TLDR

<strong>x86</strong> is a family of processors and the shared [[Instruction Set Architecture (ISA)|instruction-set]] they all use:

```merge-table
{
  "rows": [
    [
      {
        "content": "processor",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "nomenclature",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "x86-16",
        "bg": "#F4F5F7"
      },
      "class of 16-bit processors compatible with the x86 architecture",
      "N/A?"
    ],
    [
      {
        "content": "x86-32",
        "bg": "#F4F5F7"
      },
      "class of 32-bit processors compatible with the x86 architecture",
      "x86"
    ],
    [
      {
        "content": "[[x86-64 - x64 - AMD64 - Intel 64|x86-64]]",
        "bg": "#F4F5F7"
      },
      "class of 64-bit processors compatible with the x86 architecture",
      "x64"
    ]
  ]
}
```
# Not TLDR

As said above, x86 simply refers to a family of processors and the instruction set they all use. It doesn't actually say anything specific about data sizes. The term x86 started out as a 16-bit instruction set for 16-bit processors (the 8086 and 8088 processors), then was extended to a 32-bit instruction set for 32-bit processors (80386 and 80486), and now has been extended to a 64-bit instruction set for 64-bit processors. It used to be written as 80x86 to reflect the changing value in the middle of the chip model numbers, but somewhere along the line, the 80 in the front was dropped, leaving just x86.

When 64-bit processors compatible with the x86 architecture were introduced, they were referred to as x86-64. x86-32 (and x86-16) were used for the 32 (and 16) bit versions. This was eventually shortened to x64 for 64-bit and x86 alone refers to a 32-bit processor. The 32-bit processors are designed to handle a limited amount of physical memory maximum of 4GB but 64-bit can handle high memory utilizing 8, 16, and even 32 GB.

The 64-bit computers can run both 32-bit programs and 64-bit programs. 32-bit computers cannot run 64-bit programs, because the bit sizes are fundamentally different. The latest Laptops with pre-installed Windows are usually x64 i.e. 64 Bit, old Desktops and Laptops could be having Windows x86 which means 32-bit.
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
