---
title: "API - Security"
created: 2020-01-05T02:24:21.953-06:00
modified: 2021-01-10T15:08:23.601-06:00
parent: "[[Application Programming Interface (API) - Software Development Kit (SDK)]]"
children:
  - "[[API Keys - Authentication Tokens]]"
---
related to: [[Authentication - Authorization - Accounting - Auditing - Delegation - Consent]]

```merge-table
{
  "rows": [
    [
      {
        "content": "API Security Layer",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "Post-Login Attacks",
      "- Data, Application, System Attacks - APTs, Data Exfiltration, deletion\n- [[API - Network-Level|API]]/[[7 - Application Layer|Layer 7]] [[Denial of Service (DoS)|DDoS Attacks]]"
    ],
    [
      "Pre-Login Attacks",
      "- Authentication Service Attacks - credential stuffing, fuzzing, stolen cookies and tokens"
    ],
    [
      {
        "content": "Foundational API Security",
        "rowspan": 3
      },
      {
        "content": "- Access Control - tokens, Authentication, Authorization\n- Rate Limiting - client throttling, quotas\n- Network Privacy - [[Secure Sockets Layer (SSL) - Transport Layer Security (TLS)|SSL/TLS]]",
        "rowspan": 3
      }
    ]
  ],
  "tableStyle": "width: 74.939%;"
}
```
### API Credential Types

```merge-table
{
  "rows": [
    [
      {
        "content": "API Credential Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Where it is Passed (normally)",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "<strong>Basic Access Authentication</strong>",
      "is a method in which the user agent provides a user name and password when making a specific request",
      "<strong>[[HTTP - Headers - WWW-Authenticate & Authorization|HTTP Authorization Header]]:</strong>\n- <strong>Basic Scheme</strong> - credentials encoded in [[Base64 Notation]] (is not [[Encryption|encryption]])\n- <strong>Digest Scheme</strong> - credentials encrypted with a [[Cryptographic Hash Function - Message Digest Function|cryptographic hash function]]"
    ],
    [
      "<strong>[[Authentication／Authorization／Delegation - Token-Based|Token-Based Authentication]]</strong>",
      "is a method that allow users to enter their username and password in order to obtain a token which allows them to make a specific request - without using their username and password. Once their token has been obtained, the user can offer the token - which offers access to a specific resource for a time period - to the remote site",
      "<strong><strong>[[HTTP - Headers - WWW-Authenticate & Authorization|HTTP Authorization Header]]:</strong></strong>\n- <strong>Bearer Scheme</strong> - credentials in a form of a token"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```

in practice Credentials show up in all sorts of places:
- HTTP Authorization Header
- HTTP Custom Header
- HTTP Request Body
- HTTP Query String

### API Security Resources![](https://www.youtube.com/watch?v=tj03NRM6SP8&ab_channel=NordicAPIs)![](https://www.youtube.com/watch?v=9CJ_BAeOmW0&ab_channel=Devoxx)
