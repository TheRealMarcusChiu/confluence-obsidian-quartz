---
title: "Boot Sector"
created: 2019-03-15T01:57:17.438-05:00
modified: 2019-03-15T01:57:34.316-05:00
parent: "[[File Allocation Table (FAT) - (FAT12 - FAT16 - FAT32 - VFAT)]]"
children: []
---
A boot sector consists of the following elements:
- An x86-based CPU jump instruction.
- The original equipment manufacturer identification (OEM ID).
- The BIOS parameter block (BPB), a data structure.
- The extended BPB.
- The executable boot code (or bootstrap code) that starts the operating system.
