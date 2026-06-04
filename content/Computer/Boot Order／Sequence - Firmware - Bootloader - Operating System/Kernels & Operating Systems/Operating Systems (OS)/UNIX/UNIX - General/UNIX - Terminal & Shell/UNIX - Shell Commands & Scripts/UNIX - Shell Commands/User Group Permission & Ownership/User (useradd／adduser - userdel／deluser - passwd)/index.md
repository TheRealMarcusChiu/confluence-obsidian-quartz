---
title: "User (useradd／adduser - userdel／deluser - passwd)"
created: 2019-11-16T12:38:17.798-06:00
modified: 2021-09-12T22:47:57.143-05:00
parent: "[[User Group Permission & Ownership]]"
children:
  - "[[Changing Password Setting Defaults]]"
  - "[[Enable or Disable User Account]]"
  - "[[Sudo Users]]"
  - "[[／etc／passwd - ／etc／shadow]]"
---
# User Commands

```merge-table
{
  "rows": [
    [
      {
        "content": "add",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- sudo useradd (username here)\n- sudo adduser (username here)"
    ],
    [
      {
        "content": "delete",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- sudo userdel (username here)\n- sudo deluser (username here)"
    ],
    [
      {
        "content": "change password",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- sudo passwd (username here)"
    ]
  ]
}
```

[[Difference Between useradd／userdel／groupadd／groupdel & adduser／deluser／addgroup／delgroup|Difference Between useradd/userdel/groupadd/groupdel & adduser/deluser/addgroup/delgroup]]
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
