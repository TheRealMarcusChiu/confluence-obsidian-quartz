---
title: "apt (Advanced Packaging Tool)"
created: 2019-03-15T03:41:06.904-05:00
modified: 2025-08-26T15:12:16.941-05:00
parent: "[[Debian Package Manager]]"
children: []
---
###### apt (Advanced Packaging Tool)
````excerpt
- introduced in 2014
- combined the most commonly used features of [[apt-get - apt-cache|apt-get and apt-cache]] into a more user-friendly interface
- key features of APT 1.0 included a simplified command set, colored output for commands like apt update, and progress indicators during installation and removal, making package management more intuitive for users
````
^excerpt

# apt vs apt-get/apt-cache

```merge-table
{
  "rows": [
    [
      {
        "content": "apt command",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "the command it replaces",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "function of the command",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      }
    ],
    [
      "<code><font style=\"color: rgb(122,134,154);\">apt install</font></code>",
      "<code><font style=\"color: rgb(122,134,154);\">apt-get install</font></code>",
      "installs a package"
    ],
    [
      "<code><font style=\"color: rgb(122,134,154);\">apt remove</font></code>",
      "<code><font style=\"color: rgb(122,134,154);\">apt-get remove</font></code>",
      "removes a package"
    ],
    [
      "<code><font style=\"color: rgb(122,134,154);\">apt purge</font></code>",
      "<code><font style=\"color: rgb(122,134,154);\">apt-get purge</font></code>",
      "removes package with configuration"
    ],
    [
      "<code><font style=\"color: rgb(122,134,154);\">apt update</font></code>",
      "<code><font style=\"color: rgb(122,134,154);\">apt-get update</font></code>",
      "refreshes repository index"
    ],
    [
      "<code><font style=\"color: rgb(122,134,154);\">apt upgrade</font></code>",
      "<code><font style=\"color: rgb(122,134,154);\">apt-get upgrade</font></code>",
      "upgrades all upgradable packages"
    ],
    [
      "<code><font style=\"color: rgb(122,134,154);\">apt autoremove</font></code>",
      "<code><font style=\"color: rgb(122,134,154);\">apt-get autoremove</font></code>",
      "removes unwanted packages"
    ],
    [
      "<code><font style=\"color: rgb(122,134,154);\">apt full-upgrade</font></code>",
      "<code><font style=\"color: rgb(122,134,154);\">apt-get dist-upgrade</font></code>",
      "upgrades packages with auto-handling of dependencies"
    ],
    [
      "<code><font style=\"color: rgb(122,134,154);\">apt search</font></code>",
      "<code><font style=\"color: rgb(122,134,154);\">apt-cache search</font></code>",
      "searches for the program"
    ],
    [
      "<code><font style=\"color: rgb(122,134,154);\">apt show</font></code>",
      "<code><font style=\"color: rgb(122,134,154);\">apt-cache show</font></code>",
      "shows package details"
    ]
  ]
}
```

apt has a few commands of its own as well

```merge-table
{
  "rows": [
    [
      {
        "content": "new apt command",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "function of the command",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      }
    ],
    [
      "<code><font style=\"color: rgb(122,134,154);\">apt list</font></code>",
      "lists packages with criteria (installed, upgradable etc)"
    ],
    [
      "<code><font style=\"color: rgb(122,134,154);\">apt edit-sources</font></code>",
      "edits sources list"
    ]
  ]
}
```
