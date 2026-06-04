---
title: "NTFS - System Files - $Secure"
created: 2020-06-15T22:36:28.429-05:00
modified: 2020-06-15T22:40:02.208-05:00
parent: "[[NTFS - System／Meta Files]]"
children: []
---
###### \$Secure
- a type of [[NTFS - System／Meta Files|NTFS System File]]
- inode \#9 in \$MFT
- contains:
	- index for every file owner, \$SII Standard Information ID
	- index pointing to the Access Control List (ACL), \$SDH Security Descriptor Hash
- in Windows NT, every file had a [[NTFS - File Attributes - $SECURITY_DESCRIPTOR|$Security_Descriptor]][[NTFS - File Attributes - $SECURITY_DESCRIPTOR|attribute]] storing this info. Since many files had the same values in this attribute, it was moved out to this file so that data wasn't replicated
