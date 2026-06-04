---
title: "NTFS - File Attributes - $OBJECT_ID"
created: 2020-06-15T14:30:10.819-05:00
modified: 2020-06-16T23:21:32.507-05:00
parent: "[[NTFS - File Attributes]]"
children: []
---
###### \$OBJECT\_ID
- a type of [[NTFS - File Attributes|NTFS File Attribute]]
- specifies an ID that allows tracking the file in the event if its name or location changes
- mostly used by Microsoft Office embedded documents (aka compound files)
- every file has \$OBJECT\_ID will have it registered in \$ObjId system file

### \$OBJECT\_ID

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
        "content": "24",
        "align": "center"
      },
      "[attribute header](http://confluence.marcuschiu.com/display/NOT/NTFS+-+File+Attributes+-+Header)",
      {
        "content": "![[NTFS - File Attributes - $OBJECT_ID/ntfs-mft-file-attribute-ibject-id.png|600]]",
        "rowspan": 2
      }
    ],
    [
      {
        "content": "16",
        "align": "center"
      },
      "Object ID"
    ]
  ],
  "tableStyle": "font-size: 14.0px;"
}
```
