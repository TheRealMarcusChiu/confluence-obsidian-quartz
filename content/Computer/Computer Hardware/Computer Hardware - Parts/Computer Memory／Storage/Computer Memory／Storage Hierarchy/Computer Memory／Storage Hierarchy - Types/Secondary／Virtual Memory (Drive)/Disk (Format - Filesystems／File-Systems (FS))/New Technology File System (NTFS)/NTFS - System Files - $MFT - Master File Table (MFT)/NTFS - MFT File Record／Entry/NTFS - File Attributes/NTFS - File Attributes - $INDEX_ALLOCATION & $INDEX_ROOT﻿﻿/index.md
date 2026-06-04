---
title: "NTFS - File Attributes - $INDEX_ALLOCATION & $INDEX_ROOT﻿﻿"
created: 2020-06-15T14:59:34.581-05:00
modified: 2020-06-15T19:16:32.332-05:00
parent: "[[NTFS - File Attributes]]"
children: []
---
###### \$INDEX\_ALLOCATION
- a type of [[NTFS - File Attributes|NTFS File Attribute]]
- describes the components that make up the index
	- storage containers for [[B-Tree B+Tree B＊Tree|B-tree]] components
- the \$INDEX\_ALLOCATION attribute is named to correlate with the \$BITMAP attribute to a specific index, because some files with indexes can have multiple indexes.
- always a non-resident attribute. If index is small enough to fit in [[NTFS - MFT File Record／Entry|MFT entry]], then \$INDEX\_ROOT is used instead
