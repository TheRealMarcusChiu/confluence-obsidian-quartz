---
title: "NTFS - File Attributes - $SECURITY_DESCRIPTOR"
created: 2020-06-15T14:32:14.014-05:00
modified: 2020-06-15T19:14:50.183-05:00
parent: "[[NTFS - File Attributes]]"
children: []
---
###### \$SECURITY\_DESCRIPTOR
- a type of [[NTFS - File Attributes|NTFS File Attribute]]
- tracks the owner of the file and permission granted by that owner to everyone else
- structure changes depending on how many and of what type the Access Control Lists are present on the file. Possible entries are:
	- attribute header
	- revision
	- flags
	- offset to user SID
	- offset to group SID
	- offset to SACL
	- offset to DACL
	- DACL
	- user
	- SID
	- user SID
	- group SID
