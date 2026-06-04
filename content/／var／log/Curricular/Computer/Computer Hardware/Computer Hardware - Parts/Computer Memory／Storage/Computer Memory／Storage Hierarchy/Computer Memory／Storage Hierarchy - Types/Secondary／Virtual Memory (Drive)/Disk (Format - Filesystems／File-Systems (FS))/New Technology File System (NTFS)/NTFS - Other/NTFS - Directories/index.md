---
title: "NTFS - Directories"
created: 2020-06-15T21:38:41.780-05:00
modified: 2020-06-15T21:41:40.846-05:00
parent: "[[NTFS - Other]]"
children: []
---
###### NTFS Directories
- are stored in files
- directory attribute is set in the header
- all attributes are assigned the name \$I30
- \$MFT entry 5 points to [[NTFS - System Files - $. (ROOT)|Root Directory]]
- Root Directory points to subdirectories
- information is stored in a [[Self-Balancing Search Tree|balanced tree structure]]
- balanced tree facilitates sorting, storing, and retrieval of information

### NTFS Directory - Attributes
[[NTFS - File Attributes - $INDEX_ALLOCATION & $INDEX_ROOT﻿﻿|$INDEX_ROOT]]
- is a resident attribute of a directory entry
- stores a single node with a small number of index entries.
- Always the root of the index tree

[[NTFS - File Attributes - $INDEX_ALLOCATION & $INDEX_ROOT﻿﻿|$INDEX_ALLOCATION]]
- is a non-resident attribute of a directory entry (due to a potentially large index structure.)
- Stores as many index records as required for directory
- Each index record is usually 4,096 bytes in size
