---
title: "UNIX Shell - Profile & Run Commands (RC) File"
created: 2019-12-30T14:50:44.910-06:00
modified: 2020-06-29T16:16:49.710-05:00
parent: "[[UNIX - Shell]]"
children: []
---
a <strong>profile</strong> file is a start-up file of an [[UNIX]] user

```merge-table
{
  "rows": [
    [
      {
        "content": "<strong>[[UNIX Shell - Implementation Types|Shell Type]]</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<strong>Profile File</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Run Commands (RC) File",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "[[ksh (KornShell)|ksh]]",
      ".profile",
      ""
    ],
    [
      "[[sh (Bourne SHell)|sh]]",
      ".profile",
      ""
    ],
    [
      "[[bash (Bourne-Again SHell)|Bash]]",
      "[[.bash_profile vs .bashrc|.bash_profile]]",
      "[[.bash_profile vs .bashrc|.bashrc]]"
    ],
    [
      "[[zsh (Z SHell)|zsh]]",
      "?",
      ".zshrc"
    ],
    [
      "tcsh",
      ".login",
      ""
    ],
    [
      "csh",
      ".login",
      ""
    ]
  ],
  "tableStyle": "width: 70.8022%;"
}
```

The specific settings which an unix user usually does is:
- Setting of any environment variable
- Setting of any alias (Though it is always recommended to keep the aliases in a separate file)
- Setting of PATH variable or any other path variables
