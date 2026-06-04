---
title: "Group (groupadd／addgroup - groupdel／delgroup)"
created: 2019-11-16T12:38:44.714-06:00
modified: 2021-09-12T22:50:07.872-05:00
parent: "[[User Group Permission & Ownership]]"
children:
  - "[[／etc／group]]"
---
# Group Commands

```merge-table
{
  "rows": [
    [
      {
        "content": "create",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- sudo groupadd (group name here)\n- sudo addgroup (group name here)"
    ],
    [
      {
        "content": "delete",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- sudo groupdel (group name here)\n- sudo delgroup (group name here)"
    ],
    [
      {
        "content": "add user to group",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- sudo [[User (useradd／adduser - userdel／deluser - passwd)|adduser]] (username) (group)"
    ],
    [
      {
        "content": "remove user from group",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- sudo [[User (useradd／adduser - userdel／deluser - passwd)|deluser]] (username) (group)"
    ]
  ]
}
```

[[Difference Between useradd／userdel／groupadd／groupdel & adduser／deluser／addgroup／delgroup|Difference Between useradd/userdel/groupadd/groupdel & adduser/deluser/addgroup/delgroup]]
# Group Files
- [[／etc／group|/etc/group]]
