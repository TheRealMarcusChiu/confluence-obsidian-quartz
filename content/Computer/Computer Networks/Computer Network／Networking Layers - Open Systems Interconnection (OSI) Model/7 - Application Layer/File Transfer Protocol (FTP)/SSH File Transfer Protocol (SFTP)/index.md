---
title: "SSH File Transfer Protocol (SFTP)"
created: 2019-03-16T21:51:14.575-05:00
modified: 2025-05-18T18:33:38.528-05:00
parent: "[[File Transfer Protocol (FTP)]]"
children:
  - "[[sftp binary]]"
---
###### SSH File Transfer Protocol (SFTP)
````excerpt
- is a [[File Transfer Protocol (FTP)|File Transfer Protocol]] over [[Secure Shell (SSH)]]
````
^excerpt

# SFTP
- enables secure file transfer capabilities between networked hosts
- unlike the Secure Copy Protocol (SCP), SFTP additionally provides:
	- remote file system management functionality
	- allowing applications to resume interrupted file transfers
	- list the contents of remote directories
	- delete remote files

# Client
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
