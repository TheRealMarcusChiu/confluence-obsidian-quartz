---
title: "NTFS - File Attributes - $BITMAP"
created: 2020-06-15T15:03:13.989-05:00
modified: 2026-05-21T13:00:09.977-05:00
parent: "[[NTFS - File Attributes]]"
children: []
---
###### \$BITMAP
- a type of [[NTFS - File Attributes|NTFS File Attribute]]
- used with [[NTFS - File Attributes - $INDEX_ALLOCATION & $INDEX_ROOT﻿﻿|$INDEX_ALLOCATION]] attributes and in \$MFT entries
- contains string of bits that correlates to a set of records
- purpose: to show which entries are in use and which are free
- note that individual entries in \$MFT have their own marking of free or in use, but bitmaps allow for quick view of the whole structure with multiple records.
- this attribute is named so the bitmap is correlated to a specific index, since some files with indexes can have multiple indexes.
- for example, a bitmap
  
  <span style="white-space: pre-wrap"><code>    0x7FFF =</code><br><code>    0111111111111111 =</code></span>
  
  means that the first entry is not is use; next 15 are in use
