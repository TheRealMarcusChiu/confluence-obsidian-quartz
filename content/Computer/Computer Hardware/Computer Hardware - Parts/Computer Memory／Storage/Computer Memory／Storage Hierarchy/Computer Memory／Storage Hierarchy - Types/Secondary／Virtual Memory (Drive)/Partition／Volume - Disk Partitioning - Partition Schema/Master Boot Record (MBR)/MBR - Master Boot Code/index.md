---
title: "MBR - Master Boot Code"
created: 2020-06-09T21:50:31.462-05:00
modified: 2020-06-16T15:25:01.795-05:00
parent: "[[Master Boot Record (MBR)]]"
children: []
---
###### <strong>Master Boot Code</strong>
- is usually referred to as a [[Boot Loader - Boot Manager|Boot Loader]]
- resides within the [[Master Boot Record (MBR)|Master Boot Record]]
- its goal is to find the bootable [[Partition／Volume - Disk Partitioning - Partition Schema|partition]] and transfer execution to it. To find the bootable partition the following checks must occur:
	1. search for a bootable partition within the [[MBR - Master Partition Table|Master Partition Table]] (where the partition status is 0x80 for "Bootable")
	2. checks that no other partitions are marked as bootable within the [[MBR - Master Partition Table|Master Partition Table]]
	3. if partition is the only bootable partition, then the master boot code will read the partition's [[Partition／Volume Boot Record／Sector (VBR)|Volume Boot Record]] (first sector, 512 bytes, of the partition) and transfer CPU execution to that memory address

<font style="color: rgb(0,128,0);">the Master Boot Code is highlighted green within the Master Boot Record</font>

![](http://confluence.marcuschiu.com/download/attachments/2655957/MBR.png?version=1&modificationDate=1566925820154&api=v2)
