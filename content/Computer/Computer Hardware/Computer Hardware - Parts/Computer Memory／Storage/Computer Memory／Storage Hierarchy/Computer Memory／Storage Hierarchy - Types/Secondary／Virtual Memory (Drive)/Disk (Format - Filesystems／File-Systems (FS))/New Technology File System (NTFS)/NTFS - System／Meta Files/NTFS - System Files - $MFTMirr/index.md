---
title: "NTFS - System Files - $MFTMirr"
created: 2020-06-15T19:20:47.782-05:00
modified: 2020-06-15T21:06:30.915-05:00
parent: "[[NTFS - System／Meta Files]]"
children: []
---
###### \$MFTMirr
- is a [[NTFS - System／Meta Files|NTFS System File]]
- the purpose of this file is to backup the starting point of the [[NTFS - System Files - $MFT - Master File Table (MFT)|Master File Table]]
- is usually located halfway through the volume
- only contains vital records needed to get the \$MFT readable again
- is always either 4 records or 1 cluster
- generally, record size in the MFT is 1024 bytes and the cluster size of the drive is 4048 bytes
- in 90% of cases the \$MFTMirr will contain 4 MFT records
- in case of the cluster size being smaller than 4K, \$MFTMirr occupies as many clusters as necessary to accommodate first 4 records of the MFT
- if the cluster size is bigger than 4K, then there is more room, and it may contain more than 4 records (since having clusters larger than 4K breaks some of the other features, such as compression, this rarely happens
- if MFT starting sector fails:
	- the whole \$MFT would become unreadable
	- the pointer to the \$MFTMirr would also be lost
