---
title: "NTFS - System Files - $BadClus"
created: 2020-06-15T22:32:24.601-05:00
modified: 2020-06-15T22:36:24.864-05:00
parent: "[[NTFS - System／Meta Files]]"
children: []
---
###### \$BadClus
- a type of [[NTFS - System／Meta Files|NTFS System File]]
- inode \#8 in \$MFT
- this file tracks bad clusters in the [[New Technology File System (NTFS)|NTFS volume]]
- cluster is bad if at least 1 sector is bad
- the [[NTFS - System Files - $Bitmap|$Bitmap]] marks bad clusters as 1, preventing other files from trying to use the bad cluster
- the \$BadClus has the size of the NTFS volume:
	- organized as a sparse file of all zeros
	- zeros in sparse files are counted instead of saved
	- \$BadClus takes no space on the disk: if a cluster becomes bad, the data is written into \$BadClus instead at the same offset as if it was it was written on disk
