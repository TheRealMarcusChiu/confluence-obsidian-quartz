---
title: "NTFS - File Attributes - $ATTRIBUTE_LIST"
created: 2020-06-15T14:20:12.600-05:00
modified: 2020-06-15T14:23:29.949-05:00
parent: "[[NTFS - File Attributes]]"
children:
  - "[[NTFS - Runlist]]"
---
###### \$ATTRIBUTE\_LIST
- a type of [[NTFS - File Attributes|NTFS File Attribute]]
- if there are a lot of resident attributes and not enough space to fit them in the [[NTFS - MFT File Record／Entry|MFT record]], they are moved into another MFT record. the \$ATTRIBUTE\_LIST specifies how to find these additional MFT record
- this is a rare attribute, a couple examples might be:
	- a large file can be extremely fragmented, requiring very long runlist of data runs
	- a file has a lot of named streams
