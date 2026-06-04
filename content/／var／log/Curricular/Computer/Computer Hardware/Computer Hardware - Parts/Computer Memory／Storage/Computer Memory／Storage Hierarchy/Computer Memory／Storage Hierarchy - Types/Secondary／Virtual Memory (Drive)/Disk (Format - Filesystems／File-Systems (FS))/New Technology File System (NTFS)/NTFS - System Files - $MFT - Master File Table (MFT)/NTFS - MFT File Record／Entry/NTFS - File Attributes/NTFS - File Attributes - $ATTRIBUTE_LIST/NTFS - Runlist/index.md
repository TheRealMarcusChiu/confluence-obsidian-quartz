---
title: "NTFS - Runlist"
created: 2020-06-15T14:58:39.032-05:00
modified: 2020-06-15T14:59:24.637-05:00
parent: "[[NTFS - File Attributes - $ATTRIBUTE_LIST]]"
children: []
---
- a <strong>runlist</strong> is used to point to a set of clusters associated with a <em>non-resident</em> attribute of a file
- processing the runlists allows for the assembly of the file from the clusters comprising the contents.
- specifies:
	- cluster offset
	- length of a run
