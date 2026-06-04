---
title: "NTFS - System Files - $UsnJrnl"
created: 2020-06-15T22:59:24.792-05:00
modified: 2020-06-15T23:02:36.636-05:00
parent: "[[NTFS - System／Meta Files]]"
children: []
---
###### \$UsnJrnl
- a type of [[NTFS - System／Meta Files|NTFS System File]]
- located in [[NTFS - System Files - $Extend|$Extend directory]]
- Similar to [[NTFS - System Files - $LogFile|$LogFile]], tracks changes that occur on files
- short-term repository:
	- some application request to log the changes via system API
	- the application reads captured info
	- NTFS empties the \$UsnJrnl file
- often called the Change Journal
- useful for:
	- file replication/mirroring applications
	- tracking of which files to include in an incremental backup
	- virus scanner
	- etc
- the file normally will appear empty: the data exists only while it is being used and goes away as soon as the program that need it no longer does
