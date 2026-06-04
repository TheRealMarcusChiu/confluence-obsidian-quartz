---
title: "Token Classes"
created: 2020-01-09T22:27:10.789-06:00
modified: 2023-02-19T18:03:42.538-06:00
parent: "[[Authentication／Authorization／Delegation - Token-Based]]"
children:
  - "[[Access Token]]"
  - "[[ID Token]]"
  - "[[Refresh Token]]"
---
````excerpt
refer to [[Authentication／Authorization／Delegation - Entities／Actors|Authentication/Authorization/Delegation - Entities/Actors]]

<strong>Authentication/Authorization Token </strong>intended for the Application Client to be able to access other token(s) from the Security Token Service (STS). tokens such as:
- Access Token
- Refresh Token
- ID Token
```merge-table
{
  "rows": [
    [
      {
        "content": "Token Class",
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
      {
        "content": "[[Access Token]]",
        "bg": "#F4F5F7"
      },
      "- intended for the Application Client to make [[API - Security|secured API]] calls to the Resource Holder (on behalf of Resource Owner)\n- like a session\n- a type of \"by-reference/opaque token\""
    ],
    [
      {
        "content": "[[Refresh Token]]",
        "bg": "#F4F5F7"
      },
      "- intended for the Application Client to obtain a new Access Token from the Security Token Service (STS)\n- like a password\n- a type of \"by-reference/opaque token\""
    ],
    [
      {
        "content": "[[ID Token]]",
        "bg": "#F4F5F7"
      },
      "- intended for the Application Client to know about the Resource Owner\n- introduced in [[OpenID Connect (OIDC)]]\n- a type of \"by-value token\", unlike Access Tokens and Refresh Tokens that are opaque to the client, ID Tokens contains information about the resource owner for the client"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
````
^excerpt
