---
title: "NTFS - System Files - $UpCase"
created: 2020-06-15T22:40:11.785-05:00
modified: 2020-06-15T22:42:36.157-05:00
parent: "[[NTFS - System／Meta Files]]"
children: []
---
###### \$UpCase
- a type of [[NTFS - System／Meta Files|NTFS System File]]
- inode \#10 in \$MFT
- its size is 128 KB
- contains every uppercase character in [[Unicode|unicode]] alphabet
- allows to compare and sort filenames without the need to switch to a particular [[Windows]] code page:
	- the case in the file name is always preserved, but the file name is converted to all UPPERCASE for sorting when the directory entry is created for the file
