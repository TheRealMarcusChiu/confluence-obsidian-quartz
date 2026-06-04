---
title: "Unified EFI (UEFI)"
created: 2019-08-28T08:56:05.644-05:00
modified: 2023-07-10T14:08:43.919-05:00
parent: "[[Boot Firmware - Types]]"
children:
  - "[[TianoCore EDK II (EFI Development Kit)]]"
---
###### Unified EFI (UEFI)
````excerpt
- is a [[Boot Firmware|firmware]] boot order
- is an open standard independent of any [[Computer／Programming Languages|programming language]]
- is a version 2 variant of [[Extensible Firmware Interface (EFI)]]
- encapsulates [[GRand Unified Bootloader (GRUB 2)]]
- when a computer is booted, UEFI loads files stored on the [[EFI System Partition (ESP)]] to start installing operating systems and various utilities
- UEFI was a direct replacement for [[Basic Input／Output System (BIOS)|BIOS]], and whilst UEFI has been standard for over a decade, it's commonly referred to as BIOS
````
^excerpt

# UEFI - Implementations
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
