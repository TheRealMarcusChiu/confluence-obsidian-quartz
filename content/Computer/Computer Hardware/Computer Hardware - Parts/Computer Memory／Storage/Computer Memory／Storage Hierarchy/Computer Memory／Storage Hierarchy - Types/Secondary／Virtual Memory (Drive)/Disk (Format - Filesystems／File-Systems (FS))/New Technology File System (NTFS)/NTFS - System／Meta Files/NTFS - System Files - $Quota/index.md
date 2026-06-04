---
title: "NTFS - System Files - $Quota"
created: 2020-06-15T22:46:59.796-05:00
modified: 2020-06-15T22:49:34.078-05:00
parent: "[[NTFS - System／Meta Files]]"
children:
  - "[[NTFS - Disk Quotas]]"
---
###### \$Quota
- a type of [[NTFS - System／Meta Files|NTFS System File]]
- is located in [[NTFS - System Files - $Extend|$Extend directory]] (on Windows NT was inode \#9)
- tracks how much space on the volume is allocated by every user
- contains 2 indices:
	- \$O contains an entry for everyone that has a quota enforced on them
	- \$Q has an entry for every user login on the system
- when a file is accessed:
	1. a lookup is done in \$O for the file owner to see if they have a quota
	2. a lookup is done in \$Q to see what the quota is
