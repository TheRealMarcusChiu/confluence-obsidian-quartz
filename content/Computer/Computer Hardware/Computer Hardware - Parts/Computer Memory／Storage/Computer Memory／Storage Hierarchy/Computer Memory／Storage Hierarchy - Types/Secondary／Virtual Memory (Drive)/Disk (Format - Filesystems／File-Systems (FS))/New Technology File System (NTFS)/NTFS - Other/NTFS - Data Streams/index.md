---
title: "NTFS - Data Streams"
created: 2020-06-15T23:14:54.225-05:00
modified: 2020-06-15T23:17:47.750-05:00
parent: "[[NTFS - Other]]"
children:
  - "[[NTFS - Alternate Data Streams (ADS)]]"
---
###### NTFS Data Streams
- is a unique set of file attributes
- NTFS supports multiple data streams per file:
	- 1 main stream
	- plus an optional set of [[NTFS - Alternate Data Streams (ADS)|alternate data streams]]
- a data stream can be created in an existing file on an [[New Technology File System (NTFS)|NTFS volume]] using a command like
	- <span style="white-space: pre-wrap"><code>C:\\\>ECHO hello \> myfile.txt:stream1</code></span>
- to display the contents of the data stream
	- <span style="white-space: pre-wrap"><code>C:\\\>MORE \< myfile.txt:stream1</code></span>
- a data stream does not appear when a file is opened in a text editor
- the only way to see if a data stream is attached to a file is by examining the [[NTFS - MFT File Record／Entry|MFT entry]] of the file
