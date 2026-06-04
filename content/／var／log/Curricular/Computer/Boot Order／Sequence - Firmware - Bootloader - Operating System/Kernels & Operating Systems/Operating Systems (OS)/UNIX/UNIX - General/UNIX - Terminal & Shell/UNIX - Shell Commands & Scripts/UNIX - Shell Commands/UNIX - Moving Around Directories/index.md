---
title: "UNIX - Moving Around Directories"
created: 2019-12-30T15:32:24.078-06:00
modified: 2019-12-30T15:57:05.511-06:00
parent: "[[UNIX - Shell Commands]]"
children: []
---
```merge-table
{
  "rows": [
    [
      {
        "content": "command",
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
      "pwd",
      "display current-directory"
    ],
    [
      "cd",
      "go to $HOME directory"
    ],
    [
      "cd -",
      "go to previous directory"
    ],
    [
      "pushd",
      "push current-directory to stack"
    ],
    [
      "popd",
      "go to directory specified at top of stack, then remove top"
    ]
  ],
  "tableStyle": "width: 47.5735%;"
}
```
### CDPATH

in the [[UNIX Shell - Profile & Run Commands (RC) File|shell profile]], add the following line
```bash
export CDPATH="/home/guru/desktop:/home/guru/documents"
```

using CDPATH
```bash
$ ls -l /home/guru/desktop
drwxr-xr-x  17 marcuschiu  staff   544B Nov 16 21:32 music
drwxr-xr-x  25 marcuschiu  staff   800B Dec 28 11:17 pictures
drwxr-xr-x@ 11 marcuschiu  staff   352B Dec 17 18:27 private
drwxr-xr-x@ 14 marcuschiu  staff   448B Dec 30 14:35 programs
$ pwd
/home/guru
$ cd music
/home/guru/desktop/music
```
