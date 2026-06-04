---
title: "NTFS - File Attributes"
created: 2020-06-11T11:22:56.856-05:00
modified: 2020-06-16T22:45:11.547-05:00
parent: "[[NTFS - MFT File Record／Entry]]"
children:
  - "[[NTFS - File Attributes - $ATTRIBUTE_LIST]]"
  - "[[NTFS - File Attributes - $BITMAP]]"
  - "[[NTFS - File Attributes - $DATA]]"
  - "[[NTFS - File Attributes - $EA_INFORMATION and $EA]]"
  - "[[NTFS - File Attributes - $FILE_NAME]]"
  - "[[NTFS - File Attributes - $INDEX_ALLOCATION & $INDEX_ROOT﻿﻿]]"
  - "[[NTFS - File Attributes - $LOGGED_UTILITY_STREAM]]"
  - "[[NTFS - File Attributes - $OBJECT_ID]]"
  - "[[NTFS - File Attributes - $REPARSE_POINT／$SYMBOLIC_LINK]]"
  - "[[NTFS - File Attributes - $SECURITY_DESCRIPTOR]]"
  - "[[NTFS - File Attributes - $STANDARD_INFORMATION]]"
  - "[[NTFS - File Attributes - $VOLUME_INFORMATION]]"
  - "[[NTFS - File Attributes - $VOLUME_NAME]]"
  - "[[NTFS - File Attributes - Header]]"
  - "[[NTFS - Resident／Nonresident Unnamed／Named Attributes]]"
  - "[[NTFS - Timestamps]]"
---
[[New Technology File System (NTFS)|NTFS file system]] views each file (or folder) as a set of <strong>file attributes</strong>. The file's name, its security information, and even its data, are all file attributes.

Each attribute is identified by an attribute type code and, optionally, an attribute name. And they are either:
- <strong>resident attribute</strong> - the attribute's value/content resides inside the [[NTFS - MFT File Record／Entry|MFT file record]]
- <strong>nonresident attribute</strong> - the attribute's value/content resides outside the [[NTFS - MFT File Record／Entry|MFT file record]], in one or more clusters of disk space elsewhere in the volume

### Resident/NonResident Attribute
![[NTFS - File Attributes/mft-file-record-attributes.png|400]]
### Resident/Nonresident Unnamed/Named Attributes

see: [[NTFS - Resident／Nonresident Unnamed／Named Attributes|Resident/Nonresident Unnamed/Named Attribute]]
### File Attribute - Header

see: [[NTFS - File Attributes - Header|File Attribute Header]]
### File Attribute - Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Attribute",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Hexadecimal ID",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[NTFS - File Attributes - $STANDARD_INFORMATION|$STANDARD_INFORMATION]]",
        "align": "center"
      },
      {
        "content": "0x10",
        "align": "center"
      },
      "- includes information such as: MAC timestamps, DOS file permissions, link count, flags, owner, & security id"
    ],
    [
      {
        "content": "[[NTFS - File Attributes - $ATTRIBUTE_LIST|$ATTRIBUTE_LIST]]",
        "align": "center"
      },
      {
        "content": "0x20",
        "align": "center"
      },
      "- pointers to other attributes and a list of nonresident attributes"
    ],
    [
      {
        "content": "[[NTFS - File Attributes - $FILE_NAME|$FILE_NAME]]",
        "align": "center"
      },
      {
        "content": "0x30",
        "align": "center"
      },
      "- a repeatable attribute for both long and short file names\n\t- the long name of the file can be up to 255 Unicode characters\n\t- the short name is the case-insensitive name for the file\n- additional names, or hard links, required by POSIX can be included as additional file name attributes\n- outdated MAC times"
    ],
    [
      {
        "content": "$VOLUME_VERSION",
        "align": "center"
      },
      {
        "content": "0x40",
        "align": "center"
      },
      "- NTFS v1.2 only and Windows NT\n- no longer used"
    ],
    [
      {
        "content": "[[NTFS - File Attributes - $OBJECT_ID|$OBJECT_ID]]",
        "align": "center"
      },
      {
        "content": "0x40",
        "align": "center"
      },
      "- NTFS 3.0+ Windows 2000+\n- a 16-byte unique file identifier\n- used by the distributed link tracking service\n- not all files have object identifiers"
    ],
    [
      {
        "content": "[[NTFS - File Attributes - $SECURITY_DESCRIPTOR|$SECURITY_DESCRIPTOR]]",
        "align": "center"
      },
      {
        "content": "0x50",
        "align": "center"
      },
      "- file's access control list & security properties\n- describes who owns the file and who can access it"
    ],
    [
      {
        "content": "[[NTFS - File Attributes - $VOLUME_NAME|$VOLUME_NAME]]",
        "align": "center"
      },
      {
        "content": "0x60",
        "align": "center"
      },
      "- used only in the \\$Volume system file\n- contains the volume label"
    ],
    [
      {
        "content": "[[NTFS - File Attributes - $VOLUME_INFORMATION|$VOLUME_INFORMATION]]",
        "align": "center"
      },
      {
        "content": "0x70",
        "align": "center"
      },
      "- used only in the \\$Volume system file\n- contains the volume version and other information"
    ],
    [
      {
        "content": "[[NTFS - File Attributes - $DATA|$DATA]]",
        "align": "center"
      },
      {
        "content": "0x80",
        "align": "center"
      },
      "- Contains file data\n- NTFS allows multiple data attributes per file\n- each file typically has one unnamed data attribute\n- a file can also have one or more named data attributes, each using a particular syntax."
    ],
    [
      {
        "content": "[[NTFS - File Attributes - $INDEX_ALLOCATION & $INDEX_ROOT﻿﻿|$INDEX_ROOT]]",
        "align": "center"
      },
      {
        "content": "0x90",
        "align": "center"
      },
      "- used to implement folders and other indexes"
    ],
    [
      {
        "content": "[[NTFS - File Attributes - $INDEX_ALLOCATION & $INDEX_ROOT﻿﻿|$INDEX_ALLOCATION]]",
        "align": "center"
      },
      {
        "content": "0xA0",
        "align": "center"
      },
      "- used to implement folders and other indexes"
    ],
    [
      {
        "content": "[[NTFS - File Attributes - $BITMAP|$BITMAP]]",
        "align": "center"
      },
      {
        "content": "0xB0",
        "align": "center"
      },
      "- for the \\$MFT file and for indecis (directories)\n- used to implement folders and other indexes"
    ],
    [
      {
        "content": "[[NTFS - File Attributes - $REPARSE_POINT／$SYMBOLIC_LINK|$SYMBOLIC_LINK]]",
        "align": "center"
      },
      {
        "content": "0xC0",
        "align": "center"
      },
      "- soft link information\n- NTFS v1.2 only and Windows NT"
    ],
    [
      {
        "content": "[[NTFS - File Attributes - $REPARSE_POINT／$SYMBOLIC_LINK|$REPARSE_POINT]]",
        "align": "center"
      },
      {
        "content": "0xC0",
        "align": "center"
      },
      "- NTFS 3.0+ and Windows 2000+\n- data about reparse point\n- used for a soft link\n- used for volume mount points\n- also used by Installable File System (IFS) filter drivers to mark certain files as special to that driver"
    ],
    [
      {
        "content": "[[NTFS - File Attributes - $EA_INFORMATION and $EA|$EA_INFORMATION]]",
        "align": "center"
      },
      {
        "content": "0xD0",
        "align": "center"
      },
      "- used for backward compatibility with OS/2 applications (HPFS)"
    ],
    [
      {
        "content": "[[NTFS - File Attributes - $EA_INFORMATION and $EA|$EA]]",
        "align": "center"
      },
      {
        "content": "0xE0",
        "align": "center"
      },
      "- used for backward compatibility with OS/2 applications (HPFS)"
    ],
    [
      {
        "content": "$PROPERTY_SET",
        "align": "center"
      },
      {
        "content": "0xF0",
        "align": "center"
      },
      ""
    ],
    [
      {
        "content": "[[NTFS - File Attributes - $LOGGED_UTILITY_STREAM|$LOGGED_UTILITY_STREAM]]",
        "align": "center"
      },
      {
        "content": "0x100",
        "align": "center"
      },
      "- NTFS 3.0+ and Windows 2000+\n- keys and other information about encrypted attributes\n- similar to a data stream, but operations are logged to the NTFS log file just like NTFS metadata changes\n- used by EFS"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
### Typical MFT Attributes

a file will have:
- \$STANDARD\_INFORMATION
- \$FILE\_NAME (2 will exist if 8.3 name creation is turned on)
- \$DATA

a directory will have:
- \$STANDARD\_INFORMATION
- \$FILE\_NAME (2 will exist if 8.3 name creation is turned on)
- \$INDEX\_ROOT
- \$INDEX\_ALLOCATION
