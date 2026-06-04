---
title: "ln (symbolic／soft link - hard link)"
created: 2019-12-30T17:36:03.220-06:00
modified: 2022-05-22T02:57:39.461-05:00
parent: "[[UNIX - Shell Commands]]"
children: []
---
# Soft Link vs Hard Link

```merge-table
{
  "rows": [
    [
      {
        "content": "Symbolic/Soft Link",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Hard Link",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "```\nln -s source.file softlink.file\n```",
      "```\nln source.file hardlink.file\n```"
    ],
    [
      "can cross the file system",
      "can't cross the file system"
    ],
    [
      "allows you to link between directories",
      "can’t link directories"
    ],
    [
      "has different [[UNIX - System File Tables (File Descriptor - Open File - Vnode - Inode)|inode]] number and [[Permissions (chmod)|file permissions]] than original file",
      "has the same [[UNIX - System File Tables (File Descriptor - Open File - Vnode - Inode)|inode]] number and [[Permissions (chmod)|file permissions]] of original file"
    ],
    [
      "permissions will not be updated",
      "permissions will be updated if we change the permissions of source file"
    ],
    [
      "has only the path of the original file, not the contents",
      "has the actual contents of original file, so that you still can view the contents, even if the original file moved or removed"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Difference Between Hardlink and Copy
if you create a hard link to a file and change the content of either of the files, the change will be be seen on both
