---
title: "NTFS - MFT File Record／Entry"
created: 2020-06-14T22:09:13.041-05:00
modified: 2020-06-16T17:28:46.050-05:00
parent: "[[NTFS - System Files - $MFT - Master File Table (MFT)]]"
children:
  - "[[NTFS - File Attributes]]"
---
- multiple <strong>MFT File Records/Entries</strong> resides within the [[NTFS - System Files - $MFT - Master File Table (MFT)|Master File Table (MFT)]]
- each <strong>MFT File Record/Entry</strong> contains a list of [[NTFS - File Attributes|NTFS File Attributes]]

### MFT File Record Header

```merge-table
{
  "rows": [
    [
      {
        "content": "Byte #",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Field & Values",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "0-3",
        "align": "center"
      },
      "magic/signature field contains either:\n- FILE - denotes good entry\n- BAAD - denotes bad entry"
    ],
    [
      {
        "content": "4-5",
        "align": "center"
      },
      "offset to fixup array (us)"
    ],
    [
      {
        "content": "6-7",
        "align": "center"
      },
      "number of entries in fixup array (us)"
    ],
    [
      {
        "content": "8-15",
        "align": "center"
      },
      "[[NTFS - System Files - $LogFile|$LogFile]] sequence number"
    ],
    [
      {
        "content": "16-17",
        "align": "center"
      },
      "sequence number"
    ],
    [
      {
        "content": "18-19",
        "align": "center"
      },
      "hardlinks"
    ],
    [
      {
        "content": "20-21",
        "align": "center"
      },
      "offset to first attribute"
    ],
    [
      {
        "content": "22-23",
        "align": "center"
      },
      "flags:\n- 0x00 - not in use\n- 0x01 - in use\n- 0x02 - directory\n- 0x03 - directory in use"
    ],
    [
      {
        "content": "24-27",
        "align": "center"
      },
      "real/used size of [[NTFS - MFT File Record／Entry|MFT entry]]"
    ],
    [
      {
        "content": "28-31",
        "align": "center"
      },
      "allocated size of [[NTFS - MFT File Record／Entry|MFT entry]]"
    ],
    [
      {
        "content": "32-39",
        "align": "center"
      },
      "determines whether this entry is a base entry or not; a value of zero means it is."
    ],
    [
      {
        "content": "40-41",
        "align": "center"
      },
      "next attribute identifier"
    ],
    [
      {
        "content": "*42-43",
        "bg": "yellow",
        "align": "center"
      },
      {
        "content": "alignment bytes",
        "bg": "yellow"
      }
    ],
    [
      {
        "content": "*44-47",
        "bg": "yellow",
        "align": "center"
      },
      {
        "content": "record numbers",
        "bg": "yellow"
      }
    ],
    [
      {
        "content": "*48-50",
        "bg": "yellow",
        "align": "center"
      },
      {
        "content": "update sequence",
        "bg": "yellow"
      }
    ],
    [
      {
        "content": "*51-55",
        "bg": "yellow",
        "align": "center"
      },
      {
        "content": "?",
        "bg": "yellow"
      }
    ],
    [
      {
        "content": "42 or 56 - 1023",
        "align": "center"
      },
      "attributes and fixup values"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
- \* denotes not sure

### MFT File Record Diagram (Header + Attributes)
![[NTFS - MFT File Record／Entry/master-file-table-record.png|700]]
### MFT - Base Entry

If an MFT entry gets so large that it requires multiple entries to track all the attributes, then there will be a value that points “back” to the MFT base entry
