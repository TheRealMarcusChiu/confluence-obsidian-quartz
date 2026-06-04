---
title: "Authentication Protocols (Security Handshake Protocols)"
created: 2019-09-30T10:59:03.579-05:00
modified: 2022-09-21T23:24:50.385-05:00
parent: "[[Authentication (AuthN)]]"
children:
  - "[[Authentication Protocols - Login／1-Way]]"
  - "[[Authentication Protocols - Mediated]]"
  - "[[Authentication Protocols - Mutual／2-Way]]"
---
###### Authentication Protocols (Security Handshake Protocols)
- enforces [[Authentication (AuthN)|authenticity]] between 2 parties

# Authentication Protocols Types

TODO - [https://www.cs.odu.edu/~cs472/fall03/lectures/security_handshake.html](https://www.cs.odu.edu/~cs472/fall03/lectures/security_handshake.html)

```merge-table
{
  "rows": [
    [
      {
        "content": "[[Authentication Protocols - Login／1-Way|login/one-way authentication protocols]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "authenticating one party\n- <strong>symmetric-key authentication protocols</strong> -\n- <strong>asymmetric-key authentication protocols</strong> -"
    ],
    [
      {
        "content": "[[Authentication Protocols - Mutual／2-Way|mutual/two-way authentication protocols]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "authenticating both parties\n- <strong>symmetric-key authentication protocols</strong> -\n- <strong>asymmetric-key authentication protocols</strong> -"
    ],
    [
      {
        "content": "[[Authentication Protocols - Mediated|mediated authentication protocols]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "authentication utilizing [Trusted Intermediaries](http://confluence.marcuschiu.com/pages/viewpage.action?pageId=2657042)\n- <strong>symmetric-key authentication protocols</strong> - an example Trusted Intermediary using symmetric-keys is [[Key Distribution Center (KDC)]]\n- <strong>asymmetric-key authentication protocols</strong> - an example Trusted Intermediary using asymmetric-keys is [[Certificate／Certification Authority (CA)|Certificate/Certification Authority (CA)]]"
    ]
  ]
}
```
