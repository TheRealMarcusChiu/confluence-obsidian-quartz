---
title: "File Allocation Table (FAT) - (FAT12 - FAT16 - FAT32 - VFAT)"
created: 2019-03-15T01:54:16.715-05:00
modified: 2025-06-10T16:32:30.960-05:00
parent: "[[Disk (Format - Filesystems／File-Systems (FS))]]"
children:
  - "[[Boot Sector]]"
---
###### File Allocation Table (FAT)
````excerpt
- is an old [[Windows]] [[Disk (Format - Filesystems／File-Systems (FS))|filesystem]] standard
- replaced by [[New Technology File System (NTFS)|NTFS]]
````
^excerpt

# How FAT Works
- [How FAT works](https://technet.microsoft.com/en-us/library/cc776720(v=ws.10).aspx)

<strong>![[File Allocation Table (FAT) - (FAT12 - FAT16 - FAT32 - VFAT)/1.png|500]]</strong>
- [[Boot Sector]] contains the [[Basic Input／Output System (BIOS)|BIOS]] parameter block that stores information about the layout of the volume and the file system structures, as well as the boot code that loads Windows Server 2003
- Reserved Sectors The number of sectors that precede the start of the first FAT, including the boot sector
- FAT 1 Original FAT
- FAT 2 (Duplicate) Backup copy of the FAT
- Root folder Describes the files and folders in the root of the partition
- Other folders and all files Contains the data for the files and folders within the file system

# FAT12
- TODO

# FAT16
- Maximum file size: 4 GB minus 1 byte (232 bytes minus 1 byte)
- Maximum volume size: 4 GB
- Files per volume: Approximately 65,536 (216 files)
- Maximum number of files and folders within the root folder: 512 (Long file names can reduce the number of available files and folders in the root folder)

# FAT32
- Maximum file size: 4 GB minus 1 byte (232 bytes minus 1 byte)
- Maximum volume size: 32 GB (implementation)
- Files per volume: 4,177,920
- Maximum number of files and subfolders within a single folder: 65,534 (The use of long file names can significantly reduce the number of available files and subfolders within a folder.)

# VFAT
- VFAT is an extension of the FAT file system and was introduced with Windows 95
- VFAT maintains backward compatibility with FAT but relaxes the rules. For example, VFAT filenames can contain up to 255 characters, spaces, and multiple periods.
- Although VFAT preserves the case of filenames, it's not considered case sensitive
