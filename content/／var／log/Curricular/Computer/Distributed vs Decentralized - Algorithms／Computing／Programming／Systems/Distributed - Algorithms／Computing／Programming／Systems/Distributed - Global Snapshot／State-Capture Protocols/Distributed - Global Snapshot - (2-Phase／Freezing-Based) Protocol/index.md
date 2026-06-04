---
title: "Distributed - Global Snapshot - (2-Phase／Freezing-Based) Protocol"
created: 2019-06-18T19:42:36.266-05:00
modified: 2019-12-15T14:03:31.145-06:00
parent: "[[Distributed - Global Snapshot／State-Capture Protocols]]"
children: []
---
```
            FREEZE                          UNFREEZE
P1 -------.===============================.----------
         /                               /
        /                               /
       /    FREEZE                     /    UNFREEZE
P2 ---|----.===========================|===.---------
      |    |                           |  /
      |    /                           | /
      |   /FREEZE                      |/   UNFREEZE
P3 ---|--/.============================||==.---------
      | //                             || /
      |//                              |//
S4 ---.--------------------------------.------------- snapshot process
   \__________________________________/ \___________/

                   I                          II
```

<strong>application messages</strong> - messages between application processes
<strong>control/system messages</strong> - message between snapshot process and a application process

```merge-table
{
  "rows": [
    [
      {
        "content": "Snapshot Algorithm",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "What to Freeze",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Collect in Which Phase",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Consistent or Inconsistent",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "Algorithm 1",
      "freeze all",
      {
        "content": "I or II",
        "align": "center"
      },
      "<font style=\"color: rgb(51,153,102);\">consistent</font>"
    ],
    [
      "Algorithm 2",
      "freeze send events (not receive events)",
      {
        "content": "I",
        "align": "center"
      },
      "<font style=\"color: rgb(51,153,102);\">consistent</font>"
    ],
    [
      "Algorithm 3",
      "freeze send events (not receive events)",
      {
        "content": "II",
        "align": "center"
      },
      "<font style=\"color: rgb(255,0,0);\">inconsistent</font>"
    ],
    [
      "Algorithm 4",
      "freeze receive events",
      {
        "content": "I",
        "align": "center"
      },
      "<font style=\"color: rgb(255,0,0);\">inconsistent</font>"
    ],
    [
      "Algorithm 5",
      "freeze receive events",
      {
        "content": "II",
        "align": "center"
      },
      "<font style=\"color: rgb(51,153,102);\">consistent</font>"
    ]
  ]
}
```
### Prove Algorithm 2 is Consistent

proof by contradiction - assume global state is not consistent
```
                                                        freeze send
Pi        -------------------------------.-----SNAPSHOTj=============
                                        /            \
                                       /m - message   \o - okay
                      freeze send     /                \
Pj        ---SNAPSHOTi===========.---.------------------\------------
                \               /                        \
                 \okay         /u - unfreeze              \
                  \           /                            \
Psnapshot ---------.---------.------------------------------.--------
```

receive(u) -\> send(m)
send(m) -\> receive(m)
receive(
.....
unfinished cycle proof
.....
# <strong>Complexity</strong>
- message complexity - O(n)
- time complexity - O(1)
