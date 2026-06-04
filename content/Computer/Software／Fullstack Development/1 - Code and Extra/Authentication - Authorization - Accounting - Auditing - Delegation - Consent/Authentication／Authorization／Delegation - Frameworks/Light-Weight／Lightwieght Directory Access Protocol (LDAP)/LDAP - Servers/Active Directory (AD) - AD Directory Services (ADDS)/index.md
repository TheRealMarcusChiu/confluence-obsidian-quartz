---
title: "Active Directory (AD) - AD Directory Services (ADDS)"
created: 2021-03-14T15:02:45.933-05:00
modified: 2022-05-22T02:58:18.515-05:00
parent: "[[LDAP - Servers]]"
children: []
---
###### Active Directory (AD) - AD Directory Services (ADDS)
- runs on Windows Server and allows administrators to manage permissions and access to network resources

# Introduction

```merge-table
{
  "rows": [
    [
      {
        "content": "Domain Controller (DC)",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- is the active directory server\n- contains:\n\t- user accounts\n\t- computer accounts\n- contains Schema"
    ],
    [
      {
        "content": "Schema",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- a schema states what every:\n\t- user account must contain: username, password, email, etc\n\t- computer account must contain: SID, etc\n- a schema is extendable"
    ],
    [
      {
        "content": "Groups",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- groups contains user and/or computer accounts\n- groups are assigned permissions"
    ],
    [
      {
        "content": "Organizational Unit (OU)",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- is an admin group with administrative purposes over normal groups\n- e.g. Marketing OU may change permissions over Marketing Group"
    ],
    [
      {
        "content": "SubDomain (Tree)",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- a Sub-Domain has its own DC that is part of the Main-Domain\n- a Sub-Domain uses the schema of main DC\n- e.g. the subdomains of [google.com](http://google.com/):\n\t- [europe.google.com](http://europe.google.com/)\n\t- [africa.google.com](http://africa.google.com/)"
    ],
    [
      {
        "content": "Implicit 2-Way Transitive Trust",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- a Implicit 2-Way Transitive Trust is established between sub-domain & main-domain:\n- e.g. trust in [google.com](http://google.com/) means trust in:\n\t- [europe.google.com](http://europe.google.com/)\n\t- [africa.google.com](http://africa.google.com/)\n- the transitive means that\n\t- [europe.google.com](http://europe.google.com/) trust [africa.google.com](http://africa.google.com/)"
    ],
    [
      {
        "content": "Explicit 1-Way Trust (Forest)",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- Let's say we have 2 separate companies each with the own DC trees:\n\t- google\n\t- motorola\n- Google acquires Motorola, then the admin in Motorola can create a 1-Way Explicit Trusts to Google. Which allows Google accounts to do stuff in Motorola's network. No need to create new accounts. However, Motorola accounts cannot do stuff on Google's network. If we want to make it 2-Way we add another 1-Way Explicit Trust from Google to Motorola"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Resources![](https://www.youtube.com/watch?v=lFwek_OuYZ8)![](https://www.youtube.com/watch?v=hxgz7MR7MGQ)
