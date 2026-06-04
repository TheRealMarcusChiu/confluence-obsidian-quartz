---
title: "NTFS - File Attributes - $REPARSE_POINT／$SYMBOLIC_LINK"
created: 2020-06-15T15:07:04.261-05:00
modified: 2020-06-15T15:18:50.592-05:00
parent: "[[NTFS - File Attributes]]"
children: []
---
###### \$REPARSE\_POINT
- a type of [[NTFS - File Attributes|NTFS File Attribute]]
- in [[NTFS - Versions|NTFS version 1.x]] this attribute was named \$SYMBOLIC\_LINK, but later the functionality was broadened and now we have the \$REPARSE\_POINT
- allows the \$MFT entry to be re-processed in another way, if compared to a regular file
- when opening a file is taking place, it is processed in a "normal way." Then, if \$REPARSE\_POINT attribute is found, the file is "re-processed" as
	- symbolic link
	- volume mount point
	- remote storage service

### Symbolic Link
- A <strong>Symbolic Link</strong> is a <em>separate file</em> that contains <em>no data</em>, only a pointer to the other file.
- If a <strong>Symbolic Link</strong> file is opened for reading, the \$REPARSE\_POINT attribute is processed and the file system will open a different file specified there

### Reparsing
- reparsing is a very powerful feature of NTFS
- the "reparsing" is very flexible and can be extended into almost any kind of action
- there are several "canned" reparse point types, but a <em>driver</em> can be written to do anything and a file can be "reparsed" however that driver wants to "read" it.
- this can allow the same data to be read different ways, depending on the <em>variables</em> sent to the driver
