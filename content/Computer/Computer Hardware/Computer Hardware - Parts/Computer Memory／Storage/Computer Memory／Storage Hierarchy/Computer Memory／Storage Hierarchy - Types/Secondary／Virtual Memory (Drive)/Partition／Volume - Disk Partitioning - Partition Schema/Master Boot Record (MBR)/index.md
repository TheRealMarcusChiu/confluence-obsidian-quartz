---
title: "Master Boot Record (MBR)"
created: 2019-08-27T12:07:12.500-05:00
modified: 2025-06-10T16:17:11.512-05:00
parent: "[[Partition／Volume - Disk Partitioning - Partition Schema]]"
children:
  - "[[MBR - Master Boot Code]]"
  - "[[MBR - Master Partition Table]]"
  - "[[MBR - Viewing]]"
---
###### Master Boot Record (MBR)
````excerpt
- used by [[Basic Input／Output System (BIOS)|BIOS]]
- the MBR is always located in cylinder/track 0, head/side 0, and sector 1 (short-form 0/0/1) of the [[Computer Memory／Storage Devices|storage medium]] (e.g. HDD, Floppy, CD, etc.)
- within the MBR is the [[MBR - Master Boot Code|Master Boot Code]] and it is usually referred to as a [[Boot Loader - Boot Manager|Boot Loader]]
- within the MBR is the [[MBR - Master Partition Table|Master Partition Table]] and it is usually referred to as a [[Partition／Volume - Disk Partitioning - Partition Schema|partition schema]]
	- only supports up to 4 primary partitions. If you want more, you have to make one of your primary partitions an “extended partition” and create logical partitions inside it
- originally only supported disks up to \~8GB but with [[Logical Block Addressing (LBA) Mode - Logical Sector Number (LSN)|Logical Block Addressing (LBA)]] it increased it up to \~2TB
- superseded by the [[GUID Partition Table (GPT)]]
````
^excerpt

# Boot Order
### it is important to review the [[Boot Order／Sequence - Firmware - Bootloader - Operating System|boot order]]:
1. [[Basic Input／Output System (BIOS)|BIOS]] and CPU initiate the Power-On Self-Test (POST)
2. BIOS searches for a [[Boot Device／Drive／Disk|boot device]] (e.g. HDD, Floppy, CD, etc.)
3. BIOS reads the first sector 512 bytes of the boot device into memory (i.e. first sector is the MBR)
4. BIOS transfers CPU execution to that memory address
5. the [[MBR - Master Boot Code|MBR's Master Boot Code]] then gets executed:
	1. search for a bootable partition within the [[MBR - Master Partition Table|Master Partition Table]] (where the partition status is 0x80 for "Bootable")
	2. checks that no other partitions are marked as bootable within the [[MBR - Master Partition Table|Master Partition Table]]
	3. if partition is the only bootable partition, then the [[MBR - Master Boot Code|Master Boot Code]] will read the partition's [[Partition／Volume Boot Record／Sector (VBR)|Volume Boot Record]] (first sector, 512 bytes, of the partition) and transfer CPU execution to that memory address

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Resources
- [https://thestarman.pcministry.com/asm/mbr/PartTables.htm](https://thestarman.pcministry.com/asm/mbr/PartTables.htm)

![[Master Boot Record (MBR)/MBR.png|500]]
