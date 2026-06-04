---
title: "NTFS - File Attributes - $DATA"
created: 2020-06-15T14:40:16.802-05:00
modified: 2020-06-16T23:35:28.487-05:00
parent: "[[NTFS - File Attributes]]"
children: []
---
###### \$DATA
- a type [[NTFS - File Attributes|NTFS File Attribute]]
- contains the actual file content
- can be any of the 4 possible attribute types:
	- resident named
	- resident unnamed (if the file is small enough to fit in the [[NTFS - MFT File Record／Entry|MFT entry]])
	- non-resident named
	- non-resident unnamed (most common)

### \$DATA

```merge-table
{
  "rows": [
    [
      {
        "content": "Bytes",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Diagram",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "16-24",
        "align": "center"
      },
      "[[NTFS - File Attributes - Header|attribute header]]",
      {
        "content": "![[NTFS - File Attributes - $DATA/ntfs-file-attribute-data.png|600]]",
        "rowspan": 2
      }
    ],
    [
      {
        "content": "N",
        "align": "center"
      },
      "contents"
    ]
  ]
}
```
