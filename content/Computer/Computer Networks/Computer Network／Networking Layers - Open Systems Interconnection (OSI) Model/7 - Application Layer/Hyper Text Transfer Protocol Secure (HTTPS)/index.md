---
title: "Hyper Text Transfer Protocol Secure (HTTPS)"
created: 2019-09-10T20:48:22.498-05:00
modified: 2022-10-08T01:21:32.648-05:00
parent: "[[7 - Application Layer]]"
children:
  - "[[HTTPS - The First Few Milliseconds of an HTTPS Connection]]"
---
###### Hyper Text Transfer Protocol Secure (HTTPS)
- is an extension of the [[Hypertext／Hyper Text Transfer Protocol (HTTP) - 1／1.1／2|HTTP]] that uses [[Secure Sockets Layer (SSL) - Transport Layer Security (TLS)|SSL/TLS]] to secure its contents before passing the data to the [[Transmission Control Protocol (TCP)|TCP]]

# HTTPS Protocol Stack

```merge-table
{
  "rows": [
    [
      "SSL Handshake Protocol",
      "SSL Change Cipher Spec Protocol",
      "SSL Alert Protocol",
      "[[Hypertext／Hyper Text Transfer Protocol (HTTP) - 1／1.1／2|HTTP]]"
    ],
    [
      {
        "content": "[[Secure Sockets Layer (SSL) - Transport Layer Security (TLS)|SSL]] Record Protocol",
        "align": "center",
        "colspan": 4
      },
      null,
      null,
      null
    ],
    [
      {
        "content": "[[Transmission Control Protocol (TCP)|TCP]]",
        "align": "center",
        "colspan": 4
      },
      null,
      null,
      null
    ],
    [
      {
        "content": "[[Internet Protocol (IP)|IP]]",
        "align": "center",
        "colspan": 4
      },
      null,
      null,
      null
    ]
  ]
}
```
# HTTP Protocol Stack

```merge-table
{
  "rows": [
    [
      "[[Hypertext／Hyper Text Transfer Protocol (HTTP) - 1／1.1／2|HTTP]]"
    ],
    [
      "[[Transmission Control Protocol (TCP)|TCP]]"
    ],
    [
      "[[Internet Protocol (IP)|IP]]"
    ]
  ],
  "tableStyle": "margin-left: auto;margin-right: auto;"
}
```
# Enabling HTTPS

to enable HTTPS you will need to apply for a [[Digital SSL／TLS Certificate|SSL/TLS digital certificate]]
- see [[Digital SSL／TLS Certificate - Creation Processes (Enabling HTTPS)|Digital SSL/TLS Certificate - Creation Processes (Enabling HTTPS)]]

# HTTPS - Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
