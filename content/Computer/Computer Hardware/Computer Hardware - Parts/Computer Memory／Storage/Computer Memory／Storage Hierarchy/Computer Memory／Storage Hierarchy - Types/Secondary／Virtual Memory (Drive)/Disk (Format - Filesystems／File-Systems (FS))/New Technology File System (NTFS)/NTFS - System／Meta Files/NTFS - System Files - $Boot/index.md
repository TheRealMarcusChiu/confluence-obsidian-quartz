---
title: "NTFS - System Files - $Boot"
created: 2020-06-15T22:14:34.414-05:00
modified: 2020-06-15T22:32:15.211-05:00
parent: "[[NTFS - System／Meta Files]]"
children: []
---
###### \$Boot
- is a [[NTFS - System／Meta Files|NTFS System File]]
- inode \#7 in MFT
- although appears as a regular file, the nonresident \$DATA attribute points to the [[NTFS - Volume Boot Record (VBR) or Partition Boot Sector (PBS)|Volume Boot Record (VBR)]], located in [[Partition／Volume - Disk Partitioning - Partition Schema|sector]] zero of the [[New Technology File System (NTFS)|NTFS volume]]
- allows to bypass the file system to access the VBR without having to write special code and do the work via normal system API calls
- there is information in the VBR that certain utilities need, like [[NTFS - BIOS Parameter Block (BPB) & Extended BPB (EBPB)|NTFS's BIOS Parameter Block (BPB)]] including:
	- volume serial number
	- cluster numbers of \$MFT and \$MFTMirr
- \$Boot file is usually 8192 bytes
