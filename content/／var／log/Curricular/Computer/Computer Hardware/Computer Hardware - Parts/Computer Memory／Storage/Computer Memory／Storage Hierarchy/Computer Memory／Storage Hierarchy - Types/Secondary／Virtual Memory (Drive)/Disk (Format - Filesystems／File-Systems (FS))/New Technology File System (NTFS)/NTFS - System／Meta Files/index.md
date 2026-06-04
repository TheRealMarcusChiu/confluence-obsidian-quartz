---
title: "NTFS - System／Meta Files"
created: 2020-06-11T11:38:42.004-05:00
modified: 2020-06-16T17:29:40.077-05:00
parent: "[[New Technology File System (NTFS)]]"
children:
  - "[[NTFS - System Files - $. (ROOT)]]"
  - "[[NTFS - System Files - $AttrDef]]"
  - "[[NTFS - System Files - $BadClus]]"
  - "[[NTFS - System Files - $Bitmap]]"
  - "[[NTFS - System Files - $Boot]]"
  - "[[NTFS - System Files - $Extend]]"
  - "[[NTFS - System Files - $LogFile]]"
  - "[[NTFS - System Files - $MFTMirr]]"
  - "[[NTFS - System Files - $ObjID]]"
  - "[[NTFS - System Files - $Quota]]"
  - "[[NTFS - System Files - $Reparse]]"
  - "[[NTFS - System Files - $Secure]]"
  - "[[NTFS - System Files - $UpCase]]"
  - "[[NTFS - System Files - $UsnJrnl]]"
  - "[[NTFS - System Files - $Volume]]"
---
###### NTFS System/Meta Files
- all are hidden from view on the [[New Technology File System (NTFS)|NTFS Volume]]
- a system file is one used by the file system to store its metadata and to implement the file system
- system files are placed on the volume by the Format utility

### System/Meta File Types

```merge-table
{
  "rows": [
    [
      {
        "content": "System/Meta File",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Filename",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Inode #",
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
        "content": "[[NTFS - System Files - $MFT - Master File Table (MFT)|Master File Table]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "<span style=\"white-space: pre-wrap\"><code>\\$Mft</code></span>",
      {
        "content": "0",
        "align": "center"
      },
      "contains one base file record for each file and folder on an NTFS volume. If the allocation information for a file or folder is too large to fit within a single record, other file records are allocated as well."
    ],
    [
      {
        "content": "[[NTFS - System Files - $MFTMirr|Master File Table Mirror]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "<span style=\"white-space: pre-wrap\"><code>\\$MftMirr</code></span>",
      {
        "content": "1",
        "align": "center"
      },
      "a duplicate image of the first four records of the MFT. This file guarantees access to the MFT in case of a single-sector failure."
    ],
    [
      {
        "content": "[[NTFS - System Files - $LogFile|Log File]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "<span style=\"white-space: pre-wrap\"><code>\\$LogFile</code></span>",
      {
        "content": "2",
        "align": "center"
      },
      "contains a list of transaction steps used for NTFS recoverability. Log file size depends on the volume size and can be as large as 4 MB. It is used by Windows NT/2000 to restore consistency to NTFS after a system failure."
    ],
    [
      {
        "content": "[[NTFS - System Files - $Volume|Volume]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "<span style=\"white-space: pre-wrap\"><code>\\$Volume</code></span>",
      {
        "content": "3",
        "align": "center"
      },
      "contains information about the volume, such as the volume label and the volume version"
    ],
    [
      {
        "content": "[[NTFS - System Files - $AttrDef|Attribute Definitions]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "<span style=\"white-space: pre-wrap\"><code>\\$AttrDef</code></span>",
      {
        "content": "4",
        "align": "center"
      },
      "a table of attribute names, numbers, and descriptions"
    ],
    [
      {
        "content": "[[NTFS - System Files - $. (ROOT)|Root File Name Index]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "<span style=\"white-space: pre-wrap\"><code>\\$</code></span>",
      {
        "content": "5",
        "align": "center"
      },
      "root folder"
    ],
    [
      {
        "content": "[[NTFS - System Files - $Bitmap|Cluster Bitmap]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "<span style=\"white-space: pre-wrap\"><code>\\$Bitmap</code></span>",
      {
        "content": "6",
        "align": "center"
      },
      "a representation of the volume showing which clusters are in use"
    ],
    [
      {
        "content": "[[NTFS - System Files - $Boot|Boot Sector]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "<span style=\"white-space: pre-wrap\"><code>\\$Boot</code></span>",
      {
        "content": "7",
        "align": "center"
      },
      "includes the [[NTFS - BIOS Parameter Block (BPB) & Extended BPB (EBPB)|BPB]] used to mount the volume and additional bootstrap loader code used if the volume is bootable"
    ],
    [
      {
        "content": "[[NTFS - System Files - $BadClus|Bad Cluster File]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "<span style=\"white-space: pre-wrap\"><code>\\$BadClus</code></span>",
      {
        "content": "8",
        "align": "center"
      },
      "contains bad clusters for the volume"
    ],
    [
      {
        "content": "[[NTFS - System Files - $Secure|Security File]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "<span style=\"white-space: pre-wrap\"><code>\\$Secure</code></span>",
      {
        "content": "9",
        "align": "center"
      },
      "contains unique security descriptors for all files within a volume"
    ],
    [
      {
        "content": "[[NTFS - System Files - $UpCase|Upcase Table]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "<span style=\"white-space: pre-wrap\"><code>\\$Upcase</code></span>",
      {
        "content": "10",
        "align": "center"
      },
      "converts lowercase characters to matching [[Unicode]] uppercase characters"
    ],
    [
      {
        "content": "[[NTFS - System Files - $Extend|NTFS Extension File]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "<span style=\"white-space: pre-wrap\"><code>\\$Extend</code></span>",
      {
        "content": "11",
        "align": "center"
      },
      "used for various optional extensions such as quotas, reparse point data, and object identifiers"
    ],
    [
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      "",
      {
        "content": "12-23",
        "align": "center"
      },
      "reserved for future use"
    ],
    [
      {
        "content": "[[NTFS - System Files - $Quota|Quota Management File]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "<span style=\"white-space: pre-wrap\"><code>\\$Extend\\\\\\$Quota</code></span>",
      {
        "content": "24",
        "align": "center"
      },
      "contains user assigned quota limits on the volume space."
    ],
    [
      {
        "content": "[[NTFS - System Files - $ObjID|Object ID File]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "<span style=\"white-space: pre-wrap\"><code>\\$Extend\\\\\\$ObjId</code></span>",
      {
        "content": "25",
        "align": "center"
      },
      "contains file object IDs"
    ],
    [
      {
        "content": "[[NTFS - System Files - $Reparse|Reparse Point File]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "<span style=\"white-space: pre-wrap\"><code>\\$Extend\\\\\\$Reparse</code></span>",
      {
        "content": "26",
        "align": "center"
      },
      "this file contains information about files and folders on the volume include reparse point data"
    ],
    [
      {
        "content": "NA",
        "header": true,
        "bg": "#F4F5F7"
      },
      "NA",
      {
        "content": "27-",
        "align": "center"
      },
      "beginning of regular file entries"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
