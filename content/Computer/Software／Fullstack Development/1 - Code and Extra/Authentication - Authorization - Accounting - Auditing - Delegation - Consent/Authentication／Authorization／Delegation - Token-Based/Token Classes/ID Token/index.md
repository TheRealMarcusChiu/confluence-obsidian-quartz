---
title: "ID Token"
created: 2020-01-09T22:16:31.874-06:00
modified: 2026-01-09T16:23:48.241-06:00
parent: "[[Token Classes]]"
children: []
---
###### ID Token
````excerpt
- is a [[JSON Web Tokens (JWT) (JWS - JWE - Unsecured JWT)|JSON Web Tokens (JWT)]] that contains claims about the authentication of an [[Authentication／Authorization／Delegation - Entities／Actors|End-User]] and their identity. It may optionally contain other data about the End-User
````
^excerpt

# ID Token - Structure

The claims are represented in a simple JSON object e.g.
```
{
 	"iss": "https://server.example.com",
 	"sub": "24400320",
 	"aud": "s6BhdRkqt3",
 	"nonce": "n-0S6_WzA2Mj",
 	"exp": 1311281970,
 	"iat": 1311280970,
 	"auth_time": 1311280969,
 	"acr": "urn:mace:incommon:iap:silver"
}
```

as a minimum the id token will contain the following claims:

```merge-table
{
  "rows": [
    [
      {
        "content": "Claim",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "Name",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      }
    ],
    [
      "iss",
      "Issuer Identifier",
      "An identifier for OpenID Provider."
    ],
    [
      "sub",
      "Subject Identifier",
      "A unique identifier for the End-User."
    ],
    [
      "aud",
      "Audience(s)",
      "The identifier of the Relying Party and any other parties intended as a recipient."
    ],
    [
      "exp",
      "Expiration",
      "The time on or after which the ID Token must not be accepted for processing."
    ],
    [
      "iat",
      "Issuance Time",
      "The time at which the JWT was issued."
    ]
  ]
}
```

The JSON Object is either:
- signed using [[JWT - JSON Web Signature (JWS) Structure|JSON Web Signature (JWS)]]
- signed & encrypted using [[JWT - JSON Web Encryption (JWE) Structure|JSON Web Encryption (JWE)]]
