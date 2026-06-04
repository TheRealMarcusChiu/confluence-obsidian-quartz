---
title: "NTFS - Resident／Nonresident Unnamed／Named Attributes"
created: 2020-06-15T14:43:14.745-05:00
modified: 2020-06-15T14:43:31.109-05:00
parent: "[[NTFS - File Attributes]]"
children: []
---
### Resident/Nonresident Unnamed/Named Attributes

```merge-table
{
  "rows": [
    [
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Unnamed",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Named",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Resident",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": [
          "###### Resident Unnamed Attribute",
          {
            "rows": [
              [
                {
                  "content": "Offset",
                  "header": true,
                  "bg": "#F4F5F7"
                },
                {
                  "content": "Size",
                  "header": true,
                  "bg": "#F4F5F7"
                },
                {
                  "content": "Value",
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
                "4",
                "- 0x10\n- 0x60\n- etc",
                "attribute type"
              ],
              [
                "0x04",
                "4",
                "",
                "length (including the header)"
              ],
              [
                "0x08",
                "1",
                "0x00",
                "nonresident flag"
              ],
              [
                "0x09",
                "1",
                "0x00",
                "name length"
              ],
              [
                "0x0A",
                "2",
                "0x00",
                "offset to the name"
              ],
              [
                "0x0C",
                "2",
                "0x00",
                "flags"
              ],
              [
                "0x0E",
                "2",
                "",
                "attribute id (each attribute has a unique identifier)"
              ],
              [
                "0x10",
                "4",
                "X",
                "length of attribute"
              ],
              [
                "0x14",
                "2",
                "0x18",
                "offset to the attribute"
              ],
              [
                "0x16",
                "1",
                "",
                "indexed flag"
              ],
              [
                "0x17",
                "1",
                "0x00",
                "padding"
              ],
              [
                "0x18",
                "X",
                "",
                "- attribute data\n- rounded up to a multiple of 4 bytes"
              ]
            ]
          }
        ]
      },
      {
        "content": [
          "###### Resident Named Attribute",
          {
            "rows": [
              [
                {
                  "content": "Offset",
                  "header": true,
                  "bg": "#F4F5F7"
                },
                {
                  "content": "Size",
                  "header": true,
                  "bg": "#F4F5F7"
                },
                {
                  "content": "Value",
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
                "4",
                "- 0x90\n- 0xB0\n- etc",
                "attribute type"
              ],
              [
                "0x04",
                "4",
                "",
                "length (including the header)"
              ],
              [
                "0x08",
                "1",
                "0x00",
                "nonresident flag"
              ],
              [
                "0x09",
                "1",
                "N",
                "name length"
              ],
              [
                "0x0A",
                "2",
                "0x18",
                "offset to the name"
              ],
              [
                "0x0C",
                "2",
                "0x00",
                "flags"
              ],
              [
                "0x0E",
                "2",
                "",
                "attribute id (each attribute has a unique identifier)"
              ],
              [
                "0x10",
                "4",
                "X",
                "length of attribute"
              ],
              [
                "0x14",
                "2",
                "2N + 0x18",
                "- offset to the attribute\n- each attribute has a unique identifier"
              ],
              [
                "0x16",
                "1",
                "",
                "indexed flag"
              ],
              [
                "0x17",
                "1",
                "0x00",
                "padding"
              ],
              [
                "0x18",
                "2N",
                "unicode",
                "attribute name"
              ],
              [
                "2N + 0x18",
                "X",
                "",
                "- attribute data\n- rounded up to a multiple of 4 bytes"
              ]
            ]
          }
        ]
      }
    ],
    [
      {
        "content": "NonResident",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": [
          "###### Nonresident Unnamed Attribute",
          {
            "rows": [
              [
                {
                  "content": "Offset",
                  "header": true,
                  "bg": "#F4F5F7"
                },
                {
                  "content": "Size",
                  "header": true,
                  "bg": "#F4F5F7"
                },
                {
                  "content": "Value",
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
                "4",
                "- 0x20\n- 0x80\n- etc",
                "attribute type"
              ],
              [
                "0x04",
                "4",
                "",
                "length (including the header)"
              ],
              [
                "0x08",
                "1",
                "0x01",
                "nonresident flag"
              ],
              [
                "0x09",
                "1",
                "0x00",
                "name length"
              ],
              [
                "0x0A",
                "2",
                "0x00",
                "offset to the name"
              ],
              [
                "0x0C",
                "2",
                "",
                "flags"
              ],
              [
                "0x0E",
                "2",
                "",
                "attribute id (each attribute has a unique identifier)"
              ],
              [
                "0x10",
                "8",
                "",
                "starting VCN"
              ],
              [
                "0x18",
                "8",
                "",
                "last VCN"
              ],
              [
                "0x20",
                "2",
                "0x40",
                "offset to the data runs"
              ],
              [
                "0x22",
                "2",
                "",
                "- compression unit size\n- compression unit size = 2x clusters\n- 0 implies uncompressed"
              ],
              [
                "0x24",
                "4",
                "0x00",
                "padding"
              ],
              [
                "0x28",
                "8",
                "",
                "- allocated size of the attribute\n- allocated size is rounded up to the cluster size"
              ],
              [
                "0x30",
                "8",
                "",
                "real size of the attribute"
              ],
              [
                "0x38",
                "8",
                "",
                "- initialized data size of the stream\n- always equal to the allocated size?"
              ],
              [
                "0x40",
                "...",
                "",
                "data runs"
              ]
            ]
          }
        ]
      },
      {
        "content": [
          "###### Nonresident Named Attribute",
          {
            "rows": [
              [
                {
                  "content": "Offset",
                  "header": true,
                  "bg": "#F4F5F7"
                },
                {
                  "content": "Size",
                  "header": true,
                  "bg": "#F4F5F7"
                },
                {
                  "content": "Value",
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
                "4",
                "- 0x80\n- 0xA0\n- etc",
                "attribute type"
              ],
              [
                "0x04",
                "4",
                "",
                "length (including the header)"
              ],
              [
                "0x08",
                "1",
                "0x01",
                "nonresident flag"
              ],
              [
                "0x09",
                "1",
                "N",
                "name length"
              ],
              [
                "0x0A",
                "2",
                "0x40",
                "offset to the name"
              ],
              [
                "0x0C",
                "2",
                "",
                "flags"
              ],
              [
                "0x0E",
                "2",
                "",
                "attribute id (each attribute has a unique identifier)"
              ],
              [
                "0x10",
                "8",
                "",
                "starting VCN"
              ],
              [
                "0x18",
                "8",
                "",
                "last VCN"
              ],
              [
                "0x20",
                "2",
                "2N + 0x40",
                "offset to the data runs"
              ],
              [
                "0x22",
                "2",
                "",
                "- compression unit size\n- compression unit size = 2x clusters\n- 0 implies uncompressed"
              ],
              [
                "0x24",
                "4",
                "0x00",
                "padding"
              ],
              [
                "0x28",
                "8",
                "",
                "- allocated size of the attribute\n- allocated size is rounded up to the cluster size"
              ],
              [
                "0x30",
                "8",
                "",
                "real size of the attribute"
              ],
              [
                "0x38",
                "8",
                "",
                "- initialized data size of the stream\n- always equal to the allocated size?"
              ],
              [
                "0x40",
                "2N",
                "unicode",
                "attribute name"
              ],
              [
                "0x40",
                "...",
                "",
                "data runs"
              ]
            ]
          }
        ]
      }
    ]
  ]
}
```
