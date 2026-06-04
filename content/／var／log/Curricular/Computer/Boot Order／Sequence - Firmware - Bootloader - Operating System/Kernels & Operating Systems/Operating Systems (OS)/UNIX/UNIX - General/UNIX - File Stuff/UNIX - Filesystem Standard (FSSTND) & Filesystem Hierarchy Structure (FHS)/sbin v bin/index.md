---
title: "sbin v bin"
created: 2019-03-17T14:28:05.199-05:00
modified: 2019-12-30T15:25:33.740-06:00
parent: "[[UNIX - Filesystem Standard (FSSTND) & Filesystem Hierarchy Structure (FHS)]]"
children: []
---
[http://blog.taylormcgann.com/2014/04/11/difference-bin-sbin/](http://blog.taylormcgann.com/2014/04/11/difference-bin-sbin/)

```merge-table
{
  "rows": [
    [
      {
        "content": "directory",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "<strong>/bin</strong>",
      "<code>This directory contains executable programs which are needed in single user mode and to bring the system up or repair it</code>"
    ],
    [
      "<strong>/sbin</strong>",
      "<code>Like /bin, this directory holds commands needed to boot the system, but which are usually not executed by normal users.</code>"
    ],
    [
      "<strong>/usr/bin</strong>",
      "<code>This is the primary directory for executable programs. Most programs executed by normal users which are not needed for booting or for repairing the system and which are not installed locally should be placed in this directory.</code>"
    ],
    [
      "<strong>/usr/sbin</strong>",
      ""
    ],
    [
      "<strong>/usr/local</strong>",
      "<code>This is where programs which are local to the site typically go</code>"
    ],
    [
      "<strong>/usr/local/bin</strong>",
      "<code>Binaries for programs local to the site</code>"
    ],
    [
      "<strong>/usr/local/sbin</strong>",
      "<code>Locally installed programs for system administration</code>"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
