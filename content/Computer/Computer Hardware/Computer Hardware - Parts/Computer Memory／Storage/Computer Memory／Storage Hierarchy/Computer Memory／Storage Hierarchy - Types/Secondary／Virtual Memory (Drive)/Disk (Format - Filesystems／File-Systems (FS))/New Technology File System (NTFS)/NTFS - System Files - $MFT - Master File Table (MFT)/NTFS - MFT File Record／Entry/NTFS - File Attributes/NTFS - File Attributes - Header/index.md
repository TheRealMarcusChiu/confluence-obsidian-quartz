---
title: "NTFS - File Attributes - Header"
created: 2020-06-16T22:43:06.634-05:00
modified: 2020-06-16T22:43:57.822-05:00
parent: "[[NTFS - File Attributes]]"
children: []
---
every [[NTFS - File Attributes|NTFS File Attribute]] has a header

```merge-table
{
  "rows": [
    [
      {
        "content": "Hex",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Dec",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Bytes",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "0x00",
      "0",
      "0-3",
      "attribute type identifier"
    ],
    [
      "0x04",
      "4",
      "4-7",
      "length of attribute (including attribute header)"
    ],
    [
      "0x08",
      "8",
      "8",
      "non-resident flag, determines whether the attribute is resident or not"
    ],
    [
      "0x09",
      "9",
      "9",
      "length of the object's name (only for [[NTFS - Alternate Data Streams (ADS)|Alternate Data Streams (ADS)]])"
    ],
    [
      "0x0A",
      "10",
      "10-11",
      "offset to the object's name (only for [[NTFS - Alternate Data Streams (ADS)|Alternate Data Streams (ADS)]])"
    ],
    [
      "0x0C",
      "12",
      "12-13",
      "attribute flags (compressed, encrypted, sparse)"
    ],
    [
      "0x0E",
      "14",
      "14-15",
      "attribute identifier which is unique to each [[NTFS - MFT File Record／Entry|MFT record]]"
    ]
  ]
}
```

if the attribute is resident, we then have the following 8 bytes of data

```merge-table
{
  "rows": [
    [
      {
        "content": "Hex",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Dec",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Bytes",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "0x10",
      "16",
      "16-19",
      "length of attribute content"
    ],
    [
      "0x14",
      "20",
      "- 20-21\n- 20-23",
      "offset to attribute content"
    ],
    [
      "0x16",
      "22",
      "1",
      "indexed"
    ],
    [
      "0x17",
      "23",
      "1",
      "padding"
    ]
  ]
}
```
