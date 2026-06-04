---
title: "NTFS - System Files - $ObjID"
created: 2020-06-15T22:44:27.214-05:00
modified: 2020-06-15T22:46:55.571-05:00
parent: "[[NTFS - System／Meta Files]]"
children: []
---
###### \$ObjID
- a type of [[NTFS - System／Meta Files|NTFS System File]]
- is located in [[NTFS - System Files - $Extend|$Extend directory]]
- contains index of each file that has an[[NTFS - File Attributes - $OBJECT_ID|$Object_ID attribute]]
- this allows files to be tracked by \$Object\_ID instead of the file name:
	- most commonly used by Office documents, which can be linked and then the files can be renamed by the user without breaking the links of the compound Office file
