---
title: "Network Attached Storage (NAS)"
created: 2020-01-02T02:27:14.124-06:00
modified: 2023-02-20T10:03:34.210-06:00
parent: "[[DAS - NAS - SAN]]"
children:
  - "[[NAS - Hardware]]"
  - "[[NAS - Software]]"
---
<strong>Network Attached Storage (NAS)</strong>
````excerpt
- uses an existing network to allow access to shared disks
- this is filesystem-level access
- the system administrator does not have the ability to partition or format the disks since they are potentially shared by multiple computers.
- this technology is commonly used to provide multiple workstations access to the same data
````
^excerpt

Similar to a [[Storage Area Network (SAN)|SAN]], a NAS needs to make use of a protocol to allow access to its disks. With a NAS this is either:
- [[Common Internet File System (CIFS)|CIFS]]/[[samba|Samba]] - used with Microsoft Windows networks
- [[Network File System (NFS)|NFS]] - used with UNIX & Linux networks

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
