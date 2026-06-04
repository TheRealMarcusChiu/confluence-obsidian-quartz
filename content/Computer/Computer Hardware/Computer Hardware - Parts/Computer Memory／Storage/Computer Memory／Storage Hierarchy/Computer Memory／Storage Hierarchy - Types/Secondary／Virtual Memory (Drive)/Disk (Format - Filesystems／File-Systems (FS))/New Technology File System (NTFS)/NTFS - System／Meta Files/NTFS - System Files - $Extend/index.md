---
title: "NTFS - System Files - $Extend"
created: 2020-06-15T22:42:39.258-05:00
modified: 2020-06-15T22:44:23.959-05:00
parent: "[[NTFS - System／Meta Files]]"
children: []
---
###### \$Extend
- a type of [[NTFS - System／Meta Files|NTFS System File]]
- inode \#11 in \$MFT
- this is a directory containing the various optional system files (aka extensions):
	- \$ObjID
	- \$Quota
	- \$Reparse
	- \$UsnJrnl
- although these 4 files could have all been given their own unique Inodes, \$Extend spares them for other system files
